# $M(x)$的计算

## $H(\alpha)$的公式

1. 公式1： $H(1)=1$

2. 公式2： $H(\alpha+1)=H(\alpha)+1$，即如果 $x\in F_2'$ ，有 $M(x+M(x))=M(x)/2$ 

3. 公式3： $H(ω  ^\gamma  ⋅(k+1)  +β))=k+H(ω  ^\gamma  +β)  ,\beta<\omega^\gamma$

4. 公式4： $H(\omega^{\gamma+1} + \beta) = 1 + H(\omega^\gamma\cdot 2 + \beta),\beta<\omega^{\gamma+1}$ 

5. 公式5： $H(\omega^\gamma +\beta) = 1 + H(\omega^{[\gamma]_{\chi(\gamma)}} + \beta),\beta<\omega^\gamma$ 

   其中 $[\gamma]_{\chi(\gamma)}$ 表示 $\gamma$ 的基本列中的第 $\chi(\gamma)$ 项， $\chi(\gamma)$ 满足以下公式：

6. 公式6：$\chi(\omega^\gamma(k + 1) + \beta) = \chi(\omega^\gamma + \beta), k \geq 1, \beta < \omega^\gamma \text{ limit}$ 

7. 公式7：$\chi(\omega^\gamma + \beta) = \chi(\omega^{[\gamma]}\chi(\gamma) + \beta), \gamma, \beta \text{ limits, } \beta < \omega^\gamma, \beta \ne \omega^{[\gamma]}\chi(\gamma)+1$ 

8. 公式8：$\chi(\omega^\gamma + \omega^{[\gamma]}\chi(\gamma)+1) = \chi(\omega^{[\gamma]}\chi(\gamma)+1) - 1, \gamma \text{ limit}$ 

9. 公式9：$\chi(\omega^{\gamma+1} + \beta) = \chi(\omega^\gamma2 + \beta), \beta < \omega^{\gamma+1} \text{ limit}$ 

10. 公式10：$\chi(\omega^{\gamma+1}(k + 1)) = \chi(\omega^{\gamma+1}) - 2, k \geq 1$ 

11. 公式11： $\chi(\omega^{\gamma+1}) = H(\omega^{\gamma+1}) - H(\gamma) + 1$ 

12. 公式12： $\chi(\omega^\gamma k) = H(\omega^\gamma) - H(\gamma) + \chi(\gamma), k \geq 1, \gamma \text{ limit}$ 

13. 公式13：$D（[\gamma]_{\chi(\gamma)+n})=D（[\gamma]_{\chi(\gamma)})-M(D(\gamma))/2^n$



## 基本列**(Fundamental Sequence)**

对于一个极限序数 $\lambda$ ，它的一个基本列是一个严格递增的序数序列 $(\lambda_n)_{n \in \mathbb{N}}$ ，其极限是 $\lambda$ ，即 $\sup_{n \in \mathbb{N}} \lambda_n = \lambda$ 

通常用 $[\lambda]_n$ 来表示序列中的第 n 项。

基本列的选取对于定义某些超限递归函数（如快速增长层级中的函数）至关重要，不同的基本列定义可能会导致函数值的不同

对于小于 $\epsilon_0$ 的序数，通常可以采用一套标准的、定义良好的基本列系统:

> 任何小于 $\epsilon_0$ 的序数 $\alpha > 0$ 都可以唯一地表示为其康托尔范式：
>
> $\alpha = \omega^{\beta_1} \cdot c_1 + \omega^{\beta_2} \cdot c_2 + \dots + \omega^{\beta_k} \cdot c_k$ 
>
> 其中 $\beta_1 > \beta_2 > \dots > \beta_k \ge 0$ 是序数， $c_1, c_2, \dots, c_k$ 是正整数。
>
> 如果 $\alpha$ 是一个极限序数，其基本列 $[\alpha]_n$ 的定义通常依赖于其CNF的最后一项 $\omega^{\beta_k} \cdot c_k$ 
>
> 具体来说：
>
> $[\alpha]_n = (\omega^{\beta_1} \cdot c_1 + \dots + \omega^{\beta_{k-1}} \cdot c_{k-1}+\omega^{\beta_k} \cdot (c_k-1)) + [\omega^{\beta_k} ]_n$ 



> 以下是一些标准的基本列定义规则：
>
> 对于形如 $\lambda = \delta + \omega^{\beta} $ 的极限序数
>
> - 如果 $\beta$ 是后继序数:
>
>   $[\lambda]_n = \delta + \omega^{\beta-1} \cdot n$ 
>
>   
>
> - 如果 $\beta$ 是极限序数:
>
>   $[\lambda]_n = \delta + \omega^{[\beta]_n}$ 



**基本列示例：**

1.对于 $\omega \cdot 2 = \omega + \omega$ :

这是一个极限序数。可以看作 $\delta=\omega, \beta=0, c=0$ 的形式 $\delta + \omega^{\beta+1} \cdot (c+1)$ (应用于最后一项 $\omega$ ).

$[\omega \cdot 2]_n = \omega + [\omega]_n = \omega + n$ 



2.对于 $\omega^2 = \omega \cdot \omega$ :

这是一个极限序数。 $\omega^2 = \omega^{1+1}$ . 

$[\omega^2]_n = [\omega^{1+1}]_n = \omega^1 \cdot n = \omega \cdot n$ 



3.对于 $\omega^\omega$ :

这是一个极限序数，形式为 $\omega^\alpha$ 其中 $\alpha=\omega$ 是极限序数。

$[\omega^\omega]_n = \omega^{[\omega]_n} = \omega^n$ (因为 $[\omega]_n = n$ )



4.对于 $\omega^{\omega^\omega}$ :

这是一个形式为 $\omega^\alpha$ 的序数，其中 $\alpha=\omega^\omega$ 是一个极限序数

所以，根据上一条规则： $[\omega^{\omega^\omega}]_n = \omega^{[\omega^\omega]_n}$ 

我们知道 $[\omega^\omega]_n = \omega^n$ 

因此， $[\omega^{\omega^\omega}]_n = \omega^{\omega^n}$ 



> [!NOTE]
>
> **极限序数的基本列有Bachmann性质:**
>
> 如果 $\alpha ,\beta < \epsilon_0$ 是两个极限序数且 $[\alpha]_n<\beta<\alpha$ 
>
> 那么有 $[\beta]_1>[\alpha]_n,[\beta]_2>[\alpha]_n+1$ 



# 公式证明

> 1.**基础步骤**
>
> 已验证 $H(n)=n,H(\omega)=3$ ，易证对 $\alpha<\omega+1$ 公式1~13成立
>
> 这等价于在 $(0,1]$ 上公式成立
>
> 2.**归纳步骤**
>
> 设 $\alpha=\omega^\gamma \cdot c+\beta,\beta<\omega^\gamma \text{limit}$ ， $\forall\alpha'<\alpha$ ，公式1~13成立
>
> 设 $x=D(\alpha)$ ， $y=D(\alpha+1)$ ， $x_0=D(\gamma)$ ， $y_0=D(\gamma+1)$ 
>
> 由引理6.2， $x_0+1\leq x<y<y_0+1$ 
>
> 令 $L_k=[x_0+(1-2^{-(n-1)})M(x_0)+1,x_0+(1-2^{-n})M(x_0)+1)$ ,$l_k=min\{L_k\}=x_0+(1-2^{-(n-1)})M(x_0)+1$ 
>
> 因此有 $l_0=x-M(x)+1,y=x+M(x)$ 
>
> 根据归纳假设， $Ord(l_0)=\omega^{[\gamma]_{\chi(\gamma)}}$ $\gamma$ 是极限序数，否则$Ord(l_0)=\omega^{\gamma-1}*2$
>
> 同引理6.2，有 $Ord(l_n)=\omega^\gamma n,n>0$ 且 $\exists k\in \mathbb N ,x\in L_k$ 
>
> 设 $u'\in L_{n-1},u=y_0\sim u'$ ,则 $u'\in L_n$ 
>
> 且 $−Ord(l_{n−1})+Ord(u′)=−Ord(l_n)+Ord(u)$ 
>
> 令 $x',y'$ 是 $x,y$ 的原像，即 $x_0=Ord(l_{k-1})+\beta$ ，令 $z'_n=D（[\alpha’]_{\chi(\alpha')+n})$  其中 $\alpha'=Ord(y')$ 
>
> 根据归纳假设，有 $z_n'=y'-M(y')/2^n$ 
>
> > 首先假设 $\beta > 0$ 
> >
> > 在这种情况下，对于每个 $p \ge 2$ ，有 $[\alpha']_p > Ord(l_{k-1})$ 
> >
> > 因此， $x'_n \in I_{k-1}$ 对于所有 $n$ 。
> >
> > 对于每个 $n$ ，令 $z_n \in I_k$ , $z_n=y_0\sim z'_n$ 
> >
> > $ord(z_n) = ord(l_n) + (-ord(l_{n-1}) + ord'(z'_n))$ 
> >
> > 此外， $\frac{y-x}{y'-x'}=\frac{z_i-z_j}{z'_i-z'_j}$ ， $M（u）=M(u')/2$ 
> >
> > 因此，公式2、3、4、6、7、8、9成立
>
> > 假设 $\beta = 0$ ，所以 $\alpha = \omega^\gamma k = Ord(l_k)$ 在这种情况下，数字 $z_n$ 属于 $I_{k-1}$ 
> >
> > > 如果 $k \ge 2$ ，那么 $I_{k-1} \cup I_k$ 是 $I_{k-2} \cup I_{k-1}$ 的一个缩放副本，于是公式10成立
> >
> > > 假设 $k=1$ ，所以 $\gamma= \omega^ \alpha$ 
> > >
> > > 如果 $\alpha$ 是一个后继序数，那么对于每个 $p \ge 1$ ，有
> > >
> > > $D([\gamma]_p) = D(\omega^{\alpha-1}p) = x - 2^{1-p}m( \alpha) = x- 2^{1-p-H(\alpha-1)}$ 
> > >
> > > 因此， $D(\alpha) - m(\alpha)/2^n = x - 2^{-H(\alpha)-n} = D([\alpha]_p)$ 对于 $p = (H(\gamma) - H(\alpha-1) + 1) + n$ ，公式11成立
> >
> > 最后，如果 $\alpha = \omega^\gamma$ 对于极限序数 $\gamma$ ，那么 $D(\gamma) = x-1$ 
> >
> > 根据归纳假设$D([\gamma]_{\chi(\gamma)+p}) = x-1-m(\gamma)/2^p = x-1-2^{-H(\gamma)-p}$ 对于 $\forall p \in \mathbb{N}$ 
> >
> > 因此，对于 $\forall q \ge \chi(\gamma)$ ，有 $D([\omega^\gamma]_q) =x- 2^{-H(\gamma)-q+\chi(\gamma)}$ 
> >
> > 因此， $x - m(\alpha)/2^n = x - 2^{-H(\alpha)-n}$ 是通过取 $q = (H(\alpha) - H(\gamma) + \chi(\gamma)) + n$ 得到的，公式12成立



# $M(n)$的大小估计

## **快速增长层级 (Fast-growing Hierarchy / Wainer Hierarchy)**

快速增长层级，通常记为 $f_\alpha(n)$ 或 $F_\alpha(n)$ ，其中 $\alpha$ 是一个序数， $n$ 是一个自然数

$fgh$ 是一族由数学家Wainer发明，通过超限序数索引的、增长速度极快的函数

> **Definition**
>
> **基础情况**: $f_0(n) = n+1$ (层级起点)
>
> **后继步骤**: $f_{\alpha+1}(n) = f_\alpha^n(n)$ 
>
> 对于一个后继序数 $\alpha+1$ ，其对应的快速增长层级函数 $f_\alpha^n(n)$ 表示对函数 $f_\alpha$ 进行 $n$ 次迭代。即 $f_{\alpha+1}(n) = f_\alpha(f_\alpha(\dots f_\alpha(n)\dots))$ ( $n$ 次 $f_\alpha$ )
>
> **极限步骤**: $f_\lambda(n) = f_{[\lambda]_n}(n)$ 
>
> 对于极限序数 $\lambda$ ，通过其基本列进行对角化来定义。选取 $\lambda$ 的一个预先定义好的基本列 $[\lambda]_n$ 然后取该序列的第 $n$ 项 $[\lambda]_n$ 作为新的序数索引，并以 $n$ 作为输入参数



下面是一些比较“小”的快速增长层级函数:

- $f_0(n) = n+1$ 

- $f_1(n) = f_0^n(n) = n+n = 2n$ 。

- $f_2(n) = f_1^n(n) = 2(2(\dots 2n\dots)) = 2^n \cdot n$ 

- $f_3(n) = f_2^n(n)$ 

  - $f_3(1) = 2^1 \cdot 1 = 2$ 

  - $f_3(2) = f_2(f_2(2)) = f_2(2^2 \cdot 2) = f_2(8) = 2^8 \cdot 8 = 256 \cdot 8 = 2048$ 
  - $f_3(3) = f_2(f_2(f_2(3))) = f_2(f_2(2^3 \cdot 3)) = f_2(f_2(24)) = f_2(2^{24} \cdot 24)$ 

- $f_\omega(n) = f_{[\omega]_n}(n) = f_n(n)$ 

  > [!NOTE]
  >
  > 这个函数的增长速度与著名的阿克曼函数 (Ackermann function) 相当



![img](https://picx.zhimg.com/v2-40d179a990d2e784cff8639502c662b1_1440w.jpg)

如果 $\alpha>\beta$ ，那么 $\exists k\in \mathbb N ,\forall n>k,f_\alpha(n)>f_\beta(n)$ （称作 $f_\alpha(n)$ 几乎处处大于 $f_\beta(n)$ ），特别的，假如 $\beta=[\alpha]_k$ ,那么 $\forall n>k,f_\alpha(n)>f_\beta(n)$ 。证明由上图显然。

## **哈代层级(Hardy Hierarchy)**

哈代层级，通常记为 $H_\alpha(n)$ ，以大数学家G. H. Hardy命名

> **Definition**
>
> **基础情况**: $H_0(n)=n$  (层级起点)
>
> **后继步骤**: $H_{\alpha+1}(n)=H_\alpha(n+1)$ 
>
> **极限步骤**: $H_\lambda(n)=H_{[\lambda]_n}(n)$ 



哈代层级和快速增长层级存在如下关系： $H_{\omega^\alpha}(N) = f_\alpha(N)，\alpha<\epsilon_0$ 以及 $H_{τ_n} (2)>f_{\epsilon_0}(n-2),n>2$ ，并且和 $f_\alpha(n)$ ，有一样的性质



## 规范下降序列

计算 $H(\alpha)$ 的过程时，每次使用公式，都导致得到一个新的序数 $\alpha_{k+1}<\alpha_k$ ， 使得
$$
n_k+H(\alpha_k)=n_{k+1}+H(\alpha_{k+1}),n_{k+1}>n_k
$$
 这会使得内层的序数以某种方式下降，外层的自然数不断上升



这种下降是有一定规律可循的，称作序数的规范下降序列。规则如下：

- 一个规范下降是从序数 $\alpha_1$ 开始的一个序列 $\alpha_1 > \alpha_2 > \dots > \alpha_k$ ，
- 其中每一个后续的序数 $\alpha_{i+1}$ 都是通过取其前一个序数 $\alpha_i$ 的规范序列中的某一项得到的，即 $\alpha_{i+1} = [\alpha_i]_{n_i}$ ，这里的 $n_i$ 称为下降参数（在 $f_\alpha(n)$ 的计算中为内层变量）
- 如果 $\alpha_i$ 是一个后继序数，则 $a_{i+1}=a_i-1$ ，也就是 $\alpha_i$ 的后一项是其前驱
- 对于任何两个序数 $\beta < \alpha < \epsilon_0$ ，都存在一个从 $\alpha$ 开始并以 $\beta$ 结束的规范下降



事实上，计算 $H(\alpha)$ 的过程正是一种规范下降过程，这使得这个概念在分析其增长行为时非常有用

有 $H(\omega^\gamma)=n_k+H(\omega^{\gamma_k})$ ， $\gamma_k$ 构成一个规范下降序列，并且第 $k$ 步的下降参数正是 $\chi(\gamma_{k-1})$ 



## $H(\alpha )$ 大小估计

**引理7.1**：定义 $f_{\beta,\alpha}(n) = H(\omega^{\omega^{\beta+\omega^\alpha \cdot n}})$ ， 那么对于所有的 $\alpha, \beta, n$ ， 有 $f_{\beta,\alpha}(n) \ge H_\alpha(n)$ 

> **Proof:**
>
> **基础步骤**:
>
> 对于 $\alpha=0$ , 有
> $$
> f_{\beta,0}(n) = H(\omega^{\omega^{\beta+n}}) \ge n = H_0(n)
> $$
>  
>
> **归纳步骤**:
>
> 假设该论断对于 $\alpha$ 成立. 则
>
> $$
> f_{\beta,\alpha+1}(n) = H(\omega^{\omega^{\beta+\omega^{\alpha+1}n}}) = 1 + H(\omega^{\omega^{\beta+\omega^{\alpha+1}(n-1)+\omega^\alpha m}})
> $$
>  
>
> 其中 $m = \chi(\omega^{\omega^{\beta+\omega^{\alpha+1}n}}) \ge H(\omega^{\beta+\omega^{\alpha+1}n}) \ge n+1$ 
>
> 因此, 令 $\beta' = \beta + \omega^{\alpha+1}(n-1) + \omega^\alpha(m-n-1)$ ,
>
> $$
> f_{\beta,\alpha+1}(n) \ge H(\omega^{\omega^{\beta'+\omega^\alpha(n+1)}}) = f_{\beta',\alpha}(n+1) \ge H_\alpha(n+1) = H_{\alpha+1}(n)
> $$
> 
>
> **极限步骤:**
>
> 令 $\alpha$ 为一个极限序数, 并假设该论断对于所有 $\alpha' < \alpha$ 都成立. 则
>
> $$
> f_{\beta,\alpha}(n) = H(\omega^{\omega^{\beta+\omega^\alpha n}}) = 1 + H(\omega^{\omega^{\beta+\omega^\alpha(n-1)+\omega^{[\alpha]_m}}})
> $$
>  
>
> 其中如前所述 $m \ge n+1$ ，根据Bachmann性质, 任何从 $[\alpha]_m$ 开始的规范下降都必须经过 $[\alpha]_n+1$ 
>
> 因此 $f_{\beta,\alpha}(n) \ge H(\omega^{\omega^{\beta+\omega^\alpha(n-1)+\omega^{[\alpha]_n+1}}}) = 1 + H(\omega^{\omega^{\beta+\omega^\alpha(n-1)+\omega^{[\alpha]_n}p}})$ 
>
> 其中如前所述 $p \ge n$ ， 因此, 令 $\beta' = \beta + \omega^\alpha(n-1) + \omega^{[\alpha]_n}(p-n)$ , 有
>
> $$
> f_{\beta,\alpha}(n) \ge H(\omega^{\omega^{\beta'+\omega^{[\alpha]_n n}}}) = f_{\beta',[\alpha]_n}(n) \ge H_{[\alpha]_n}(n) = H_\alpha(n)
> $$



任何从 $\tau_{n-1}$ 开始且下降参数至少为2的规范下降都必须经过 $\gamma = \omega^{\omega^\delta}$ ，其中 $\delta = \tau_{n-4}2$ . 

因此
$$
H(\tau_n) = H(\omega^{\tau_{n-1}}) \ge H(\omega^\gamma) = f_{0,\tau_{n-5}}(2) \ge H_{\tau_{n-5}}(2) \ge F_{\epsilon_0}(n-7)
$$
 

因此 $1/M(10)>H(\tau_{10} )>F_{ε0} (3)>G(64)$ 
