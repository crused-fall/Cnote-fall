# Legendre Polynomial's Origin

## 1.motivation

Find a polynomial $X_n$ with n degree, s.t. $\forall Q(x)$ of less than n degree, following equality holds true $\forall a,b\in \mathbb{R}$ :

![image-20250822110757586](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20250822110757586.png)

## 2. analysis

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

# Legendre polynomials have n different roots in [-1,1]

For $R(x)= (x-1)^n(x+1)^n$, $\forall m\in \{1,2,\cdots n-1\}R^{(m)}(-1)=R^{(m)}(1)=0$,thus by **Rolle's theorem**:

- $R'$ has one root in $(-1,1)$
- $R''$ has two roots in $(-1,1)$
- $\cdots$
- $R^{(n-1)}$ has $n-1$ roots in $(-1,1)$
- $X(x)=R^{(n)}$ has n roots in $(-1,1)$

# Value of Legendre polynomial at -1 and 1

Set $c_n=1$, apply **Leibniz's formula**
$$
\begin{aligned}X_n(x)&=(x+1)^n\cdot\frac{d^n(x-1)^n}{dx^n}+C_n^1\cdot\frac{d(x+1)^n}{dx}\cdot\frac{d^{n-1}(x-1)^n}{dx^{n-1}}+\cdots\\&+\frac{d^n(x+1)^n}{dx^n}\cdot(x-1)^n\end{aligned}
$$
thus :
$$
X_n(x)=2^n\cdot n!\qquad X_n(-1)=(-1)^n\cdot 2^n \cdot n!
$$
Therefore if define $c_n= \frac{1}{2^n\cdot n!}$ , we get the **most commonly used Legendre polynomial** whose characteristic is $P_n(1)=1,P_n(-1)=(-1)^n$

# The differential equation satisfied by Legendre polynomial

Legendre polynomials satisfy the following differential equation:
$$
(x^2-1)X_n^{\prime\prime}+2x\cdot X_n^{\prime}-n(n+1)X_n=0
$$

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

------

> [!NOTE]
>
> Where it can also be used to solve the form of **Legendre polynomial**.

# Expression of Legendre polynomial

### 1. Assume a power series solution

Assume a solution in the form of a power series:

$$
y(x) = \sum_{k=0}^{\infty} a_k x^k
$$

Then the derivatives are

$$
y'(x) = \sum_{k=1}^{\infty} k a_k x^{k-1}, \quad y''(x) = \sum_{k=2}^{\infty} k(k-1) a_k x^{k-2}.
$$

### 2. Substitute into the differential equation

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

### 3. Initial conditions and general solution

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

 

**Especially**, make definition to $P(x)$ as follows:
$$
P_n(x)=\sum_{m=0}^{\frac{\lfloor n\rfloor}2}(-1)^m\frac{(2n-2m)!}{2^nm!(n-m)!(n-2m)!}x^{n-2m}
$$

## Legendre polynomial for some n

$$
\begin{aligned}&P_0(x)=1\\&P_1(x)=x\\&P_2(x)=\frac12(3x^2-1)\\&P_3(x)=\frac12(5x^3-3x)\\&P_4(x)=\frac18(35x^4-30x^2+3)\\&P_5(x)=\frac18(63x^5-70x^3+15x)\end{aligned}
$$



# Integral of the square of Legendre polynomial

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

# Legendre polynomial recurrence relation

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


# Generating Function of Legendre Polynomials (Derivation via Rodrigues' Formula)

We want to show that
$$
\sum_{n=0}^\infty P_n(x)\,t^n \;=\; \frac{1}{\sqrt{1-2xt+t^2}}, \qquad |t|<1.
$$

---

### Step 1. Rodrigues' Formula and Cauchy's Integral

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

### Step 2. Insert into the Generating Function

$$
\begin{aligned}
G(x,t)&=\sum_{n=0}^\infty P_n(x)\,t^n \\[6pt]
&=\frac{1}{2\pi i}\oint_\gamma \frac{1}{z-x}
   \sum_{n=0}^\infty \left(\frac{t(z^2-1)}{2(z-x)}\right)^n dz.
\end{aligned}
$$


For $|t|$ small enough, the geometric series converges uniformly on $\gamma$, so sum and integral can be interchanged.

---

### Step 3. Evaluate the Series
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

### Step 4. Poles and Residue
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