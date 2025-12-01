# 温顺燃烧数和野燃烧数

通过第四部分的超限归纳证明，论证了  $F_2' \subseteq F_2$ 

实际$F_2'$是$F_2$的真子集:

**温顺燃烧数 (Tame Fusible Numbers):**

称集合 $F_2'$ 中的元素称为“温顺燃烧数”

这些数可以通过 $M$ 函数的结构直接关联到其不连续性

**野燃烧数 (Wild Fusible Numbers):**

称属于燃烧数集合 $F_2$ 但不属于 $F_2'$ 的元素为“野燃烧数”

即，野燃烧数集合为 $F_2 \setminus F_2'$ 



#  $M(x)$的计算

## 符号约定

* $F_2'$ ：表示 $M(x)$ 函数的不连续点集合，这是一个可数良序集

* $D(\alpha)$ ：表示 $F_2'$ 中的第 $\alpha$ 个元素

  > 特别的，我们规定 $D(0)=-1$ 

* $Ord(I)$ ：表示 $F_2' \cap I$ 的序型，即与 $F_2' \cap I$ 同构的序数。

* $\text{Ord}(x)$ ：对于 $x \in F_2'$ ， $\text{Ord}(x)$ 表示 $x$ 在 $F_2'$ 中的序数，也等于 $Ord(F_2' \cap [-1,x))$。所以，如果 $x=D(\alpha)$ ，则 $\text{Ord}(x)=\alpha$ 

* $H(\alpha) = -\log_2(M(D(\alpha)))$ 



## TAMESUCC算法

$TAMESUCC(r)=r+M(r)$

 $x=r-1$ ,$y=2r-TAMESUCC(x)-1=r-M(r-1)$ 

 $TAMESUCC(r)=TAMESUCC(x)\sim TAMESUCC(y)$ 

```text
procedure TAMESUCC(r)
  if r < 0 then
    return 0  // 基础情况：小于0的输入的下一个温顺燃烧数是0
  x <- TAMESUCC(r-1) // 递归调用：寻找 r-1 的下一个温顺燃烧数
  y <- TAMESUCC(2r - x - 1) // 递归调用：寻找 2r - x - 1 的下一个温顺燃烧数
  return (x + y + 1) / 2   // 即 x ~ y，通过燃烧数操作构造结果
```

记 $S=\{x|x=TAMESUCC(r)，r\in \mathbb R\}$ ，则 $S$ 包含了所有后继型间断点，因此有 $F_2'=\bar{S}$ 。

> [!NOTE]
>
> 这个算法相比SUCC算法漏掉了一部分燃烧数



## $[0,1)$上的间断点（温顺燃烧数）

对于所有 $k \le n$ （其中 $n \ge 1$ ），假设以下成立：

1.  $H(k) = k$ 
    - 这意味着 $M(R(k)) = 2^{-k}$
2.  $D(k) = 1 - 2^{-(k-1)}$ 



> **Proof:**
>
> **1.基础情况:** 
>
> $H(0)=0$ 成立， $D(0)=-1$ 成立
>
> 
>
> **2.后继情况：**
>
> 需要计算 $M(D(n+1))$ $=$ $2^{-(n+1)}$ 
>
> $D(n+1)=D(n)+2^{-H(n)}=1-2^{-n}$ 
>
> 计算 $M(D(n+1))$ 
>
> 先计算 $TAMESUCC(D(n+1))$ 
>
> 令 $r = D(n+1) = 1 - 2^{-n}$ 
>
> $TAMESUCC(r)$ 的递归计算如下：
>
> **计算第一个递归调用的结果 $x$ **：
>
> $x = TAMESUCC(r-1) = TAMESUCC(-2^{-n})$ 
>
> 当 $r < 0$ 时,$TAMESUCC(r) = 0$ 
>
> **计算第二个递归调用的结果 $y$ **：
>
> $y = TAMESUCC(2r-x-1) = TAMESUCC( 1 - 2^{-(n-1)})= TAMESUCC( D(n))$ 
>
> $TAMESUCC(D(n)) = D(n+1) = 1 - 2^{-n}$ 
>
> **计算 $TAMESUCC(r)$ **：
>
> $TAMESUCC(D(n+1)) = \frac{x + y + 1}{2} = \frac{0 + (1 - 2^{-n}) + 1}{2} = 1 - 2^{-(n+1)}$ 
>
> 
>
> **计算 $M(D(n+1))$ ：**
>
> $ M(D(n+1)) = TAMESUCC(D(n+1)) - D(n+1) $ 
>
> $ M(D(n+1)) = (1 - 2^{-(n+1)}) - (1 - 2^{-n}) =2^{-(n+1)} $ 
>
> **计算 $H(n+1)$ ：**
>
> $ H(n+1) = -\log_2(M(D(n+1))) = n+1 $ 
>



因此:

- 在 $[0,1)$ 区间内的“温顺燃烧数”序列 $D(n) = 1 - 2^{-(n-1)}$ 
-  $[0,1)$ 上的燃烧数都是温顺燃烧数
- 极限 $D(\omega)=1$ 
-  $Ord([0,1))=\omega$ 

- $H(n)=n,H(\omega)=-log_2(M(1))=3$ 


## **$[n,n+1)$上的间断点（温顺燃烧数）：**

**引理6.2**:若 $Ord(x)=\alpha$ ，则有 $Ord(x+1)=\omega ^\alpha$ 



> **Proof:**
>
> **1.基础情况: **
>
> $Ord(x)=1$ 则有 $x=0$， $Ord(x+1)=Ord(1)=\omega$ 成立
>
> 
>
> **2.后继情况：**
>
> 设$x=D(γ)$满足 $Ord(x+1)=\omega ^{Ord(x)}$ ,  $y=D(γ+1)=x+M(x)。$ 
>
> 设 $I_0=[x+1-M(x),x+1)  $ 
>
> 则 $I_1=y\sim I_0=[(x+M(x))\sim (x+1-M(x)),(x+M(x))\sim (x+1)$ 
>
> 即 $I_1=[x+1,x+M(x)/2+1)$ 
>
> 对任意 $z\in I_1$ ,有 $x<z-1<x+M(x)/2-1<y$ 
>
> 由于 $(x,y)$ 区间内没有别的燃烧数，所以 $TAMESUCC(z-1)=y$ 
>
> $ TAMESUCC(z) =y\sim TAMESUCC(z')$ 
>
> 其中 $z'=2z-y-1\in I_0$ 
>
> 即=我们=建立了一个 $I_0\Leftrightarrow I_1$ 中的燃烧数的保序映射，意味着 $Ord（I_0）=Ord(I_1)$ 
>
> 
>
> 重复操作有 $I_2=y\sim I_1=[x+M(x)/2+1,x+M(x)/2+M(x)/4+1)$ 
>
> 进行归纳，得到：
>
> $I_n=[x+(1-2^{-(n-1)})M(x)+1,x+(1-2^{-n})M(x)+1)$ 
>
> 且对于任意 $k\in \mathbb N$ ,有 $Ord(I_k)=Ord(I_{k+1})$ 
>
> 通过数学归纳法，有 $Ord(I_i)=Ord(I_0)$ 
>
> 
>
> $I=\cup_{i=1}^\infty I_i=[x+1,x+1+M(x))$ 
>
>  $\forall z\in I_n\cap F_2',y\sim z \in I_{n+1}\cap F_2'$ 
>
> 根据归纳假设， $F_2'\cap[-1,x+1)$ 的序型是 $\omega^\gamma$ ，
>
> 则 $I_0=[x+1-M(x),x+1)  $ 内也有个 $\omega^\gamma$ 温顺燃烧数。
>
> > [!NOTE]
> >
> > 这是因为 $\omega^\gamma$ 是一个veblen序数，它可以被写成 $\varphi (0,\gamma)$ 的形式，这样的序数被称作加法主序数（Additively Principal），满足 $\forall \alpha<\varphi$ , $\alpha+\varphi =\varphi$。
> >
> > 而所有的veblen序数 $\varphi$ 都满足 $\forall \alpha<\varphi$ , $\alpha+\varphi =\varphi$ 
>
>  $I$ 的序型 $Ord(I)=Ord(\cup_{i=1}^\infty I_i)=sup(\omega^\gamma,\omega^\gamma+\omega^\gamma,...)=\omega^\gamma*\omega=\omega^{\gamma+1}$ 
>
> $Ord(y+1)=Ord(x+1)+Ord(I)=\omega^{\gamma}+\omega^{\gamma+1}=\omega^{\gamma+1}$ 
>
> 这当然也是因为 $\omega^{\gamma+1}=\varphi(0,{\gamma+1})$ 是一个加法主序数。
>
> 所以 $P(\gamma+1)$ 成立
>
> 
>
> **3.极限情况**
>
> 设$x_n=D(γ_n)$满足 $Ord(x+1)=\omega ^{Ord(x)}$ ， $y=D(γ),γ=lim_{n\rightarrow\infty}γ_n$ 
>
> 则易知 $y=D(γ)=lim_{n\rightarrow\infty}x_n$ ，所以 $y+1=lim_{n\rightarrow\infty}\{x_n+1\}$ 
>
> $Ord(y+1)=Ord(lim_{n\rightarrow\infty}\{x_n+1\})=lim_{n\rightarrow\infty}Ord(\{x_n+1\})$ 
>
> 根据归纳假设， $Ord(x_n+1)=\omega ^{Ord(x_n)}$ 
>
> 所以， $\text{Ord}(y+1) = \sup \{\omega^{\gamma_n}\}$ 
>
> > [!NOTE]
> >
> > 由于 $\alpha$ 是极限序数，且 $\omega^y$ 是正规的（normal function）
> >
> > 它在极限处保持连续性，即 $\omega^{\sup \delta_i} = \sup \omega^{\delta_i}$ 
>
> 因此， $\text{Ord}(y+1) = \sup \{\omega^{\gamma_n}\}= \omega^{\sup\gamma_n}= \omega^{\gamma}$ 
>
> 此外:
>
> 这等价于对于任意序数 $\forall \alpha < Ord(F_2')$ 满足以下三个条件之一
>
> - $\alpha=0$ 
>
> - $\exists \alpha_0,\alpha_0+1=\alpha$ 
>
> - $\exists \alpha_n,lim_{n\rightarrow \infty}\alpha_n=\alpha$ 
>
> > [!NOTE]
> >
> > 确实有不满足三个条件之一的序数 $\omega_1$ ，它是最小的不可数序数，比它小的都是可数序数。因为可数个可数集合 的并也是可数集合，所以不存在一个由小于 $\omega_1$ 的序数组成的可数长度的基本列，使得 $\omega_1$是它们的极限。
>
> 但是，因为 Ord(F′) 是一个可数序数。任何可数序数要么是0，要么是后继序数，要么是具有可数共尾性的极限序数(因为里面总共也只有可数个元素，当然不能有不可数的基本列)，这意味着其中的基本列长度只能是可数的。所以证明已经涵盖了全部状况。









# $F_2'$ 的序型

根据引理6.2， $Ord(0)=1,Ord(n+1)=\omega ^{Ord(n)}$ ，可以通过简单的数学归纳法证明

$Ord(n)=\underbrace{\omega^{\omega^{\dots^\omega}}}_{n \text{ 个 } \omega}=\omega\uparrow\uparrow n$ 

所以 $Ord(F_2')=\sup\{\omega\uparrow\uparrow n\}={\omega^{\omega^{\dots}}}=\varepsilon_0$ 



# $F_2$ 的序型

## 自然和与自然积

令 $\alpha = \omega^{\alpha_1} + \dots + \omega^{\alpha_n}$ 和 $\beta = \omega^{\beta_1} + \dots + \omega^{\beta_m}$ 为两个康托尔范式下的序数，其中 $m, n \ge 0$ 且 $\alpha_1 \ge \dots \ge \alpha_n$ 以及 $\beta_1 \ge \dots \ge \beta_m$ 

> 它们的自然和由下式给出：
>
> $ \alpha \oplus \beta = \omega^{\gamma_1} + \dots + \omega^{\gamma_{n+m}} $ 
>
> 其中 $\gamma_1, \dots, \gamma_{n+m}$ 是将 $\alpha_1, \dots, \alpha_n, \beta_1, \dots, \beta_m$ 按非增顺序排序后的序列
>
> 自然和的规则相当于将 $\omega$ 当作普通函数中的变元进行加减，所以自然满足交换和结合律



例如，

- 如果 $\alpha = \omega^3 + \omega$ 且 $\beta = \omega^4 + \omega + 1$ ，那么 $\alpha \oplus \beta = \omega^4 + \omega^3 + \omega \cdot 2 + 1$ 
- 普通的序数和 $\alpha + \beta = \omega^4 + \omega + 1$ 且 $\beta + \alpha = \omega^4 + \omega^3 + \omega$ 



> 令 $A$ 和 $B$ 为两个不相交的良序集，其各自的良序关系为 $<_A$ 和 $<_B$ 
>
> 在 $C=A \cup B$ 上定义偏序关系：当 $x,y \in A$ 且 $x <_A y$ 时，或 $x,y \in B$ 且 $x <_B y$ 时， $x<y$ 
>
> 令 $\alpha$ 和 $\beta$ 分别为 $A$ 和 $B$ 的序类型
>
> 可能有多种方法将 $C$ 的偏序线性化，即将其扩展为一个全序。这种线性化的最大可能序类型等于 $\alpha \oplus \beta$ 





> 它们的自然积由下式给出：
>
> $ \alpha \otimes \beta = \bigoplus_{i,j} \omega^{\alpha_i \oplus \beta_j} $ 
>
> 自然积是可交换和可结合的，并且它对自然和满足分配律



> 如果 $\alpha > \beta$ ，则 $\gamma \oplus \alpha > \gamma \oplus \beta$ ，并且如果 $\gamma > 0$ ，则也有 $\gamma \otimes \alpha > \gamma \otimes \beta$ 。
>
> 令 $A$ 和 $B$ 为良序集，其各自的良序关系为 $<_A$ 和 $<_B$ 。在 $C=A \times B$ 上定义偏序关系：当 $a_1 <_A a_2$ 且 $b_1 <_B b_2$ 时， $(a_1, b_1) < (a_2, b_2)$ 。那么 $C$ 的线性化的最大可能序类型等于 $\alpha \otimes \beta$ 

## $F_2$的序形



因为 $F_2'\subseteq F_2$ ,显然有 $Ord(F_2)>Ord(F_2')=\varepsilon_0$ 

而将 $F _2$ 的元素和二叉树关联，而二叉树中同胚嵌入所容许的良拟序最大序型也是 $ \varepsilon_0$ 

这意味着 $Ord(F_2)\leq \varepsilon_0$ 

因此我们有 $Ord(F_2)=Ord(F_2')=\varepsilon_0$ 

> [!NOTE]
>
> $ \varepsilon_0$ 通常被认为是皮亚诺算术（PA）的证明论序数
>
> 这意味着PA无法证明：“对于每个自然数 n，都存在一个大于 n 的最小燃烧数。”
>
> 而我们之前证明这个命题使用了Kruskal树定理，它的证明论强度超过了SVO，远大于 $ \varepsilon_0$ 
>
> 也可以用一个听起来更厉害的说法，“存在一个皮亚诺算术的非标准模型。使得存在一个非标准自然数 $m$ ，不存在大于 $m$ 的最小燃烧数。"





# 第三个谜题 (消失的纸片)

在水箱空间，甲乙还有主持人继续他们的对话。

甲：“这个游戏还挺有意思的，要不要我们再来一次？“

主持人：“确实，但是一直重复也无趣。所以我们来加大难度把。”

乙：“那要怎么加大呢？”

忽然间，一些纸片消失了。

主持人：“现在我移除了小于$3$的纸片，这意味着你们拿到的数字都会大于 $3$ 。”

于是甲和乙又拿了两个数字 $x,y$ 。准备工作完成后，三人便发生了如下的对话。

对话：甲：“我不知道谁的数大。”

乙：“我也不知道。”

甲：“我还是不知道。”

乙：“哦？这回我就知道了。”

甲：“那我也知道了。而且，我还知道我们俩手中的数具体是多少了。”

乙：“那我也知道了。”

求 $m=1/(x-y)$ 

谜题解析：有了之前的准备，我们轻松知道了甲乙分别拿到的是 $d(\omega^{\omega^\omega}+3)$ 和 $d(\omega^{\omega^\omega}+4)$ 

由于 $F_2'$ 是 $F_2$ 的子集， $m(d(\omega^{\omega^\omega}+3))<M(D(\omega^{\omega^\omega}+3))=M(D(d(\omega^{\omega^\omega})))/8=M(3)/8$ 



$m>2^{1541023940}$ 

> [!NOTE]
>
> 此处的$m$是难以计算的



