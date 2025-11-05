# Legendre Polynomial's Origin

## Definition

### 1.motivation

Find a polynomial $X_n$ with n degree, s.t. $\forall Q(x)$ of less than n degree, following equality holds true $\forall a,b\in \mathbb{R}$ :

![image-20250822110757586](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20250822110757586.png)

> [!NOTE]
>
> can also be explained by **[[Schimidt orthogonalization]]**

### 2. analysis

take $X_n$ as the $n$-th derivative of $R(x)$, so $R(x)$ can be obtained by performing the integral operation n times on $X_n(x)$.

Meanwhile, it can be assured that following statement is true:
$$
R(a)=0, R'(a)=0, \cdots,R^{(n-1)}(a)=0
$$
thus apply **Leibniz's formula** :
$$
\begin{aligned}\int_a^bR^{(n)}(x)Q(x)dx&=\left[Q(x)R^{(n-1)}(x)-Q^{\prime}(x)R^{(n-2)}(x)+\cdots\right.\\&\pm Q^{(n-1)}(x)R(x)\bigg]\bigg|_a^b\mp\int_a^bQ^{(n)}(x)R(x)dx\end{aligned}
$$
equivalent to:
$$
R(b)=0,R'(b)=0,\cdots,R^{(n-1)}(b)=0
$$
for $Q(x)$ is arbitrary selected.

Therefore $R(x)$ has $a,b$ as $n$-th roots, thus:
$$
X_n(x)=c_n\frac{d^n}{dx^n}\left[(x-a)^n(x-b)^n\right]
$$


Set $a=-1,b=1$, we get **Legendre Polynomial**
$$
X_n(x)=c_n\frac{d^n(x^2-1)^n}{dx^n}
$$

take $c_n=\frac{1}{2^n\cdot n!}$

----

### 3.Geometric interpretation

![img](https://pica.zhimg.com/v2-b2970aa6695cf4248154279384823c8c_1440w.jpg)
$$
\begin{aligned}&\|\vec{r}-\vec{a}\|^2=r^2+a^2-2ar\cos\theta=r^2\left[1+\left(\frac ar\right)^2-2\frac ar\cos\theta\right]\\&=r^2\left[1+\frac ar\left(\frac ar-2\cos\theta\right)\right]\end{aligned}
$$

thus:
$$
\frac1{\|\vec{r}-\vec{a}\|}=\frac1r\left[1+\frac ar\left(\frac ar-2\cos\theta\right)\right]^{-1/2}
$$
let $t=\frac a r\left (\frac a r -2\cos \theta\right)$, then apply **taylor expansion**:
$$
\frac1{\|\vec{r}-\vec{a}\|}=\frac1r(1+t)^{-1/2}=\frac1r\big(1-\frac12t+\frac38t^2-\frac5{16}t^3+\cdots\big)
$$
thus:
$$
\frac1{\|\vec{r}-\vec{a}\|}=\frac1r\left[1+\left(\frac ar\right)\cos\theta+\left(\frac ar\right)^2\frac{3\cos^2\theta-1}2+\left(\frac ar\right)^3\frac{5\cos^3\theta-3\cos\theta}2+\cdots\right]
$$
thus:
$$
\frac1{\|\vec{r}-\vec{a}\|}=\frac1r\left[1+\left(\frac ar\right)\cos\theta+\left(\frac ar\right)^2\frac{3\cos^2\theta-1}2+\left(\frac ar\right)^3\frac{5\cos^3\theta-3\cos\theta}2+\cdots\right]\\=\sum_{n=0}^\infty\frac{a^n}{r^{n+1}}P_n(x)
$$

## Generating function & recurrence relation & differential equation

### Generating Function of Legendre Polynomials (Derivation via Rodrigues' Formula)

We want to show that
$$
\sum_{n=0}^\infty P_n(x)\,t^n \;=\; \frac{1}{\sqrt{1-2xt+t^2}}, \qquad |t|<1.
$$

---

#### Step 1. Rodrigues' Formula and Cauchy's Integral

Rodrigues' formula gives
$$
P_n(x)=\frac{1}{2^n n!}\frac{d^n}{dx^n}(x^2-1)^n.
$$
By Cauchy's integral formula,
$$
\frac{d^n}{dx^n}f(x)=\frac{n!}{2\pi i}\oint_\gamma \frac{f(z)}{(z-x)^{n+1}}dz,
$$
so that
$$
P_n(x)=\frac{1}{2\pi i}\oint_\gamma \frac{1}{z-x}\left(\frac{z^2-1}{2(z-x)}\right)^n dz.
$$

---

#### Step 2. Insert into the Generating Function

$$
\begin{aligned}
G(x,t)&=\sum_{n=0}^\infty P_n(x)\,t^n \\[6pt]
&=\frac{1}{2\pi i}\oint_\gamma \frac{1}{z-x}
   \sum_{n=0}^\infty \left(\frac{t(z^2-1)}{2(z-x)}\right)^n dz.
\end{aligned}
$$


For $|t|$ small enough, the geometric series converges uniformly on $\gamma$, so sum and integral can be interchanged.

---

#### Step 3. Evaluate the Series

$$
\sum_{n=0}^\infty \left(\frac{t(z^2-1)}{2(z-x)}\right)^n
= \frac{1}{1-\tfrac{t(z^2-1)}{2(z-x)}}
= \frac{2(z-x)}{2(z-x)-t(z^2-1)}.
$$

Thus
$$
G(x,t)=\frac{1}{2\pi i}\oint_\gamma \frac{2}{2(z-x)-t(z^2-1)}\,dz.
$$

---

#### Step 4. Poles and Residue

The denominator vanishes at
$$
z_\pm = \frac{1\pm \sqrt{1-2xt+t^2}}{t}.
$$
For $|t|<1$, only $z_-$ lies inside the contour.  
The residue at $z=z_-$ is
$$
\operatorname{Res}=\frac{1}{1-tz_-}.
$$
Hence
$$
G(x,t)=\frac{1}{1-tz_-}.
$$

Since $z_-=\tfrac{1-\sqrt{1-2xt+t^2}}{t}$, we get
$$
1-tz_-=\sqrt{1-2xt+t^2}.
$$

---

**Q.E.D.**

> [!NOTE]
>
> This generating function can also be proved by using **[[Laplace series]]**



### Recurrence relation

#### Legendre polynomial recurrence relation

Write $P(x)$ as $xP_n=a_0P_{n+1}+a_1P_n+a_2P_{n-1}+a_3P_{n-2}+\cdots $

then use the property of **Legendre polynomial**
$$
\int_{-1}^1xP_n\cdot P_{n-2}dx=a_0\int_{-1}^1P_{n+1}P_{n-2}dx+a_1\int_{-1}^1P_nP_{n-2}dx+a_2\\\int_{-1}^1P_{n-1}P_{n-2}dx+a_3\int_{-1}^1P_{n-2}^2dx+\cdots
$$
then we can assure that $\forall n\ge 3, a_n =0$.

For $a_1, a_2,a_3$ it can be valued by **contrast coefficients**.

Thus we can get the **recurrence relation**:
$$
(n+1)P_{n+1}-(2n+1)xP_n+nP_{n-1}=0
$$
where:
$$
\begin{aligned}&P_0(x)=1\\&P_1(x)=x\\&P_2(x)=\frac12(3x^2-1)\\&P_3(x)=\frac12(5x^3-3x)\\&P_4(x)=\frac18(35x^4-30x^2+3)\\&P_5(x)=\frac18(63x^5-70x^3+15x)\end{aligned}
$$

#### Other recursion formula


$$
(n+1)P_{n+1}-(2n+1)xP_n+nP_{n-1}=0
$$

$$
P_n=P_{n+1}-2xP_n+P_{n-1}
$$

$$
P_{n+1}=xP_n+(n+1)P_n
$$

$$
xP_{n+1}-P_{n-1}=nP_n
$$

$$
P_{n+1}-P_{n-1}=(2n+1)P_n
$$

$$
(2l+1)P_l(x)=P_{l+1}^{\prime}(x)-P_{l-1}^{\prime}(x)
$$

​	

### Differential equation

Legendre polynomials satisfy the following differential equation:

which is also called as **[[Legendre equation]]**
$$
(x^2-1)X_n^{\prime\prime}+2x\cdot X_n^{\prime}-n(n+1)X_n=0
$$

which can be also written as:
$$
\frac d{dx}[(1-x^2)\frac{dP_l}{dx}]=-l(l+1)P_l
$$


> [!NOTE]
>
> which essentially is a **[[Liouville eigenvalue problem]]**

------

**Proof:**

Set $y= (x^2-1)^n$, then :
$$
(x^2-1)\cdot y'=2nx\cdot y
$$
By applying **Leibniz's formula**:
$$
\begin{aligned}&(x^2-1)y^{(n+2)}+(n+1)\cdot2x\cdot y^{(n+1)}+\frac{n(n+1)}2\cdot2\cdot y^{(n)}=2nx\cdot y^{(n+1)}\\&+(n+1)\cdot2n\cdot y^{(n)}\end{aligned}
$$
thus: 
$$
(x^2-1)y^{\prime\prime}+2x\cdot y^{\prime}-n(n+1)y=0
$$
**Q.E.D.**

## Expression of Legendre polynomial

#### 1. Assume a power series solution

Assume a solution in the form of a power series:

$$
y(x) = \sum_{k=0}^{\infty} a_k x^k
$$

Then the derivatives are

$$
y'(x) = \sum_{k=1}^{\infty} k a_k x^{k-1}, \quad y''(x) = \sum_{k=2}^{\infty} k(k-1) a_k x^{k-2}.
$$

#### 2. Substitute into the differential equation

Substituting \(y, y', y''\) into the equation:

$$
(x^2-1)y'' + 2xy' - n(n+1)y = 0
$$

we have

$$
(x^2-1)\sum_{k=2}^{\infty} k(k-1)a_k x^{k-2} + 2x \sum_{k=1}^{\infty} k a_k x^{k-1} - n(n+1)\sum_{k=0}^{\infty} a_k x^k = 0.
$$

thus:

$$
a_{k+2} = \frac{(k-n)(n+k+1)}{(k+2)(k+1)} a_k.
$$

This is the standard **recurrence relation for Legendre polynomials**.

#### 3. Initial conditions and general solution

- There are **two free parameters**, $a_0$ and $a_1$, corresponding to the even and odd solutions.
- The power series solution can be written formally as

$$
y(x)=c_1y_1(x)+c_2y_2(x)
$$

where:
$$
y_1(x)=a_0\left[1-\frac{n(n+1)}{2!}x^2+\frac{n(n-2)(n+1)(n+3)}{4!}x^4-\ldots\right]
$$

$$
y_2(x)=a_1\left[x-\frac{(n-1)(n+2)}{3!}x^3+\frac{(n-1)(n-3)(n+2)(n+4)}{5!}x^5-\ldots\right]
$$

where $y(x)$ **converges** when $|x|<1$ , otherwise diverges.

when $n$ is odd $y_1$ is called **(the first type of) Legendre polynomial/function** and $y_2$ is called **the second type of Legendre function**

 

**Especially**, make definition to $P(x)$ as follows:
$$
P_n(x)=\sum_{m=0}^{\frac{\lfloor n\rfloor}2}(-1)^m\frac{(2n-2m)!}{2^nm!(n-m)!(n-2m)!}x^{n-2m}
$$

#### Legendre polynomial for some n

$$
\begin{aligned}&P_0(x)=1\\&P_1(x)=x\\&P_2(x)=\frac12(3x^2-1)\\&P_3(x)=\frac12(5x^3-3x)\\&P_4(x)=\frac18(35x^4-30x^2+3)\\&P_5(x)=\frac18(63x^5-70x^3+15x)\end{aligned}
$$

#### The second type of Legendre function



## Properties of the polynomial

### Special value

#### Value of Legendre polynomial at -1 and 1

Apply **Leibniz's formula**
$$
\begin{aligned}X_n(x)&=(x+1)^n\cdot\frac{d^n(x-1)^n}{dx^n}+C_n^1\cdot\frac{d(x+1)^n}{dx}\cdot\frac{d^{n-1}(x-1)^n}{dx^{n-1}}+\cdots\\&+\frac{d^n(x+1)^n}{dx^n}\cdot(x-1)^n\end{aligned}
$$
thus :
$$
X_n(x)=1\qquad X_n(-1)=(-1)^n
$$


#### Value of the polynomial at 0

$$
P_l(0)=\left\{\begin{array}{ll}0&(l=2n+1)\\(-1)^n\frac{(2n)!}{\left[(2n)!\right]^2}&(l=2n)\end{array}\right.
$$



#### Value of its derivative on some points

$$
P_n'(1)=\frac {n(n+1)}{2}\\
P_n'(-1)=(-1)^{n-1}\frac{l(l+1)}{2}
$$

$$
P_l^{\prime}(0)=\left\{\begin{array}{ll}0&(l=2n)\\(2n+1)P_{2n}(0)&(l=2n+1)\end{array}\right.
$$



### Correlate integral

#### Integral of the square of Legendre polynomial

To solve the integral 
$$
\int_{-1}^{1}P_n^2(x)dx=\frac{1}{((2n)!!)^2}\int_{-1}^{1}\frac{d^n(x^2-1)^n}{dx^n}\cdot\frac{d^n(x^2-1)^n}{dx^n}
$$
set $u=\frac{d^n(x^2-1)^n}{dx^n},v=(x^2-1)^n,$ and apply **Leibniz's formula **
$$
(-1)^n\int_{-1}^1\frac{d^{2n}(x^2-1)^n}{dx^{2n}}(x^2-1)^ndx=2\cdot(2n)!\int_0^1(1-x^2)^ndx
$$
and use **Trigonometric substitution** and apply **Wallis' formula**:
$$
\int_{-1}^1P_n^2(x)dx=\frac2{2n+1}
$$



#### Integral of two different Legendre Polynomial

By the property of the polynomial
$$
\int_{-1}^1P_l(x)P_k(x)dx=\left\{\begin{array}{ll}0,&k\neq l\\\frac2{2l+1},&k=l\end{array}\right.
$$

#### Other integral

1.
$$
\begin{aligned}&\int_0^1P_l(x)dx\\&=-\frac{1}{l(l+1)}\int_{0}^{1}d\left[(1-x^{2})\frac{dP_{l}}{dx}\right]=-\frac{1}{l(l+1)}\left[(1-x^{2})\frac{dP_{l}}{dx}\right]_{0}^{1}\\&=\begin{cases}1,&(l=0)\\0,&(l=2n,n=1,2,\cdots)\\\frac1{(2n+1)(2n+2)}P_{2n+1}^{\prime}(0)=\frac1{(2n+2)}P_{2n}(0),&(l=2n+2,n=0,1,\cdots)&\end{cases}\end{aligned}
$$


2.
$$
\begin{aligned}&I_l=\int_0^1xP_l(x)dx\\\\&l=0,\quad I_0=\int_0^1xP_0(x)dx=\frac12\\\\&l=1,\quad I_1=\int_0^1xP_1(x)dx=\frac13\\\\&l\geq2,\quad I_l=\int_0^1xP_l(x)dx=\int_0^1\frac1{2l+1}[(l+1)P_{l+1}(x)+lP_{l-1}(x)]dx\end{aligned}
$$

$$
\int_0^1xP_l(x)dx=\begin{cases}\frac12,&(l=0)\\\frac13,&(l=1)\\0,&(l=2n+1,n=1,2,\cdots)\\(-1)^{n+1}\frac{(2n-2)!}{2^{2n}(n+1)!(n-1)!},&(l=2n,n=1,2,\cdots)\end{cases}
$$

3.
$$
\begin{aligned}&\odot I_{l}=\int_{-1}^{1}x^{l}P_{l}(x)dx\\
&\text{By the recursion formula: }\\&P_{l}(x)=\frac{1}{2l+1}[P_{l+1}^{\prime}(x)-P_{l-1}^{\prime}(x)]dx\\
&I_{l}=\int_{-1}^{1}x^{l}P_{l}(x)dx=\frac{1}{2l+1}\int_{-1}^{1}x^{l}[P_{l+1}^{\prime}(x)-P_{l-1}^{\prime}(x)]dx\\
&=\frac{1}{2l+1}\left\{x^{l}[P_{l+1}(x)-P_{l-1}(x)]_{-1}^{1}-l\int_{-1}^{1}x^{l-1}\left[P_{l+1}(x)-P_{l-1}(x)\right]dx\right\}\\
&=\frac{l}{2l+1}\left\{\int_{-1}^{1}x^{l-1}P_{l-1}(x)dx-\int_{-1}^{1}x^{l-1}P_{l+1}(x)dx\right\}=\frac{1}{2l+1}I_{l-1}\\
&I_{l}=\frac{l}{2l+1}I_{l-1}=\frac{l}{2l+1}\frac{l-1}{2l-1}\cdots\frac{1}{3}I_{0}=2\frac{l!}{(2l+1)!!}\\&\text{thus}\int_{-1}^{1}x^{l}P(x)dx=2\frac{l!}{(2l+1)!!}\end{aligned}
$$
4.
$$
\begin{aligned}&I_l=\int_{-1}^1x^nP_l(x)dx\\&I_l=\frac1{2^ll!}\int_{-1}^1x^n\frac{d^l(x^2-1)^l}{dx^l}dx=\frac1{2^ll!}\int_{-1}^1x^nd\left[\frac{d^{l-1}(x^2-1)^l}{dx^{l-1}}\right]\\&=\frac1{2^ll!}\left\{x^n\frac{d^{l-1}(x^2-1)^l}{dx^{l-1}}\right|_{-1}^1-n\int_{-1}^1x^{n-1}\frac{d^{l-1}(x^2-1)^l}{dx^{l-1}}dx\biggr\}\\&=\frac{(-1)^ln}{2^ll!}\int_{-1}^1x^{n-1}\frac{d^{l-1}(x^2-1)^l}{dx^{l-1}}dx\end{aligned}
$$
Integral by part multiple times:
$$
I_l=\int_{-1}^1x^nP_l(x)dx=\begin{cases}0,&(l>n\text{ or }n-l=\text{positive odd})\\2\frac{l!}{(2l+1)!!},&(l=n)\\2\frac{n!}{(n-l)!}\frac{(n-l-1)!!}{(n+l+1)!!},&(n-l=\text{positive even})&\end{cases}
$$


### Other properties

#### Legendre polynomials have n different roots in [-1,1]

For $R(x)= (x-1)^n(x+1)^n$, $\forall m\in \{1,2,\cdots n-1\}R^{(m)}(-1)=R^{(m)}(1)=0$,thus by **Rolle's theorem**:

- $R'$ has one root in $(-1,1)$
- $R''$ has two roots in $(-1,1)$
- $\cdots$
- $R^{(n-1)}$ has $n-1$ roots in $(-1,1)$
- $X(x)=R^{(n)}$ has n roots in $(-1,1)$



#### Range of the polynomial

$$
|P_l(x)|\leq1\quad(-1\leq x\leq1)
$$





---



## Application

### Find the polynomial with the best approximation effect over a certain interval

Find a polynomial  $u(x)$ with real coefficients of no more than five degrees. Make it within the interval $[-\pi,\pi]$. Try to approach $\sin(x)$ as closely as possible. That is make
$$
\int_{-\pi}^\pi\left|\sin x-u(x)\right|^2\mathrm{d}x
$$
take the minimum value.



**Solution**:

The problem is actually asking the **Projection** of $\sin(x)$ on $\mathcal{L}[-\pi,\pi]$, which has **Legendre Polynomials** as its basis.

**First**, transform the polynomial to $[-\pi,\pi ]$ 
$$
\int_{-\pi}^\pi l_m(\frac x\pi)l_n(\frac x\pi)\mathrm{d}x=\frac{2\pi}{2n+1}\delta_{mn}.
$$
thus, the correspond polynomial is:
$$
u=\frac{\langle\sin x,l_1\rangle l_1}{\|l_1\|^2}+\frac{\langle\sin x,l_2\rangle l_2}{\|l_2\|^2}+\frac{\langle\sin x,l_3\rangle l_3}{\|l_3\|^2}+\frac{\langle\sin x,l_4\rangle l_4}{\|l_4\|^2}+\frac{\langle\sin x,l_5\rangle l_5}{\|l_5\|^2}
$$
which is:
$$
u(x)=(\frac{693}{8\pi^6}-\frac{72765}{8\pi^8}+\frac{654885}{8\pi^{10}})x^5+(-\frac{315}{4\pi^4}+\frac{39375}{4\pi^6}-\frac{363825}{4\pi^8})x^3\\+(\frac{105}{8\pi^2}-\frac{16065}{8\pi^4}+\frac{155925}{8\pi^6})x\\\approx0.005643180x^5-0.1552714106x^3+0.9878621356x.
$$

> [!NOTE]
>
> This is an example of **[[Generalized Fourier transform]]**


# Associated Legendre function

## Definition

$$
P_n^m(x)=\frac{(-1)^m}{2^nn!}(1-x^2)^{m/2}\frac{d^{n+m}}{dx^{n+m}}(x^2-1)^n,\quad x\in[-1,1]
$$

where $m\in [-n.n]$

- when $m > n$, $P^m_n \equiv 0$
- when $m=0$, $P^m_n$ is Legendre polynomial
- when $m<-n$, $P^m_n$ is not 0 but has no physical meaning, which **equivalent** to 0

which can be also written as:
$$
P_n^m(x)=(1-x^2)^{m/2}\sum_{k=0}^{\lfloor\frac{n-m}2\rfloor}(-1)^{m+k}\frac{(2n-2k)!}{2^nk!(n-k)!(n-m-2k)!}x^{n-m-2k}
$$


## Properties

### Orthogonality

$$
\int_{-1}^1P_l^m(x)P_k^n(x)dx=\left\{\begin{array}{ll}0,&otherwise\\\frac2{2l+1}\cdot\frac{(l-m)!}{(l+m)!},&k=l,m=n\end{array}\right.
$$

### Odevity

$\forall m>0$
$$
P_n^m(-x)=(-1)^{n-m}P_n^m(x)
$$

$$
P_n^{-m}(x)=(-1)^m\frac{(n-m)!}{(n+m)!}P_n^m(x)
$$

### Recursion

$$
(n-m)P_n^m=(2n-1)xP_{n-1}^m-(n+m-1)P_{n-2}^m\\P_n^{n-1}=(2n-1)xP_{n-1}^{n-1}\\P_n^n=-(2n-1)(1-x^2)^{1/2}P_{n-1}^{n-1}\\(1-x^2)^{1/2}P_n^{m+1}=(n-m+1)P_{n+1}^m-(n+m+1)xP_n^m
$$

### Orthogonal basis function

$\forall f \in C^\infty[a,b]$ where $a,b\ne \infty$. Especially, take $a,b=1$, $f$ can be expressed by **associated Legendre function**:
$$
f(x)=\sum_{n=0}^\infty\sum_{m=-n}^nc_n^mP_n^m(x)
$$
where $c_n^m$ is coefficient.

by integral both side of the equation:
$$
c_n^m=\frac{\int_{-1}^1f(x)P_n^m(x)dx}{N_n^m}=\frac{2n+1}2\frac{(n-m)!}{(n+m)!}\int_{-1}^1f(x)P_n^m(x)dx
$$
