---
title: Notes on UNUK Real Analysis
tags:
  - math
  - Probability
  - School_Notes
date: 2025-11-17
---





# Basic definition



## C1



> **Definition-sample space**
>
> The **set of possible outcomes** for a **random experiment** is known as the **sample space** and is typically denoted as $\Omega$.



> **Definition-random variable**
>
> A **random variable**, $X$, is a function of the outcome of the experiment which maps from the sample space to a set $S$. That is
> $$
> X:\Omega\rightarrow S
> $$
> For $\omega \in \Omega $ denotes an experiment outcome then the set $S$ can be written as:
> $$
> S=\left\{X(\omega):\omega\in \Omega\right\}
> $$
> which can be divided into two kinds:
>
> > **Definition-Discrete random variables**
> >
> > For the case that $X$ can take only a finite or countable number of values and we say that $X$ is a **discrete random variable**.
>
> > **Definition-Continuous Random Variables**
> >
> > For the case that the sample space Ω is an uncountable set, the random variable $X$ is known as a **continuous random variable**.



> **Definition-Joint Cumulative Distribution Function**
>
> Suppose that $X$ and $Y$ are two random variables. The **joint cumulative distribution function** of $X$ and $Y$ is:
> $$
> F_{X,Y}(x,y)=\mathbb{P}(X\le x,Y\le y) \quad x,y\in\mathbb{R}
> $$



> **Definition-Joint Probability Density Function**
>
> Suppose that $F_{X,Y}(x,y)$ is the joint cumulative distribution function for the pair of random variables $(X,Y)$.
>
> If there exists a function $f_{X,Y}$ such that:
> $$
> F_{X,Y}(x,y)=\int_{-\infty}^y\int_{-\infty}^xf_{X,Y}(u,v)dudv
> $$
> then $f_{X,Y}$ is the **joint probability density function** of $X$ and $Y$ (joint PDF)
>
> > [!NOTE]
> > $$
> > f_{X,Y}(x,y)=\frac{\partial^2F_{X,Y}(x,y)}{\partial x\partial y}
> > $$



> **Definition-Marginal Probability Density Function**
>
> Suppose that $f_{X,Y}(x,y)$ is the joint probability density function of the random variables $X$ and $Y$.
>
> The **marginal probability density function **of $X$ and $Y$ are
> $$
> f_X(x)=\int _{-\infty}^{\infty}f_{X,Y}(x,y)dy
> $$
>  and
> $$
> f_Y(y)=\int _{-\infty}^{\infty}f_{X,Y}(x,y)dx
> $$



> **Definition- Marginal Cumulative Distribution Function**
>
> as follows
> $$
> F_X(x)=F_{X,Y}(x,\infty)\\F_Y(y)=F_{X,Y}(\infty,y)
> $$
> 



> **Definition-Independence**
>
> If following equation is satisfied $\forall x,y\in \mathbb{R}$ for random variables $X,$$Y$:
> $$
> \begin{aligned}
> F_{X,Y}(x,y)&=F_X(x)\cdot F_Y(y)\\
> \text{equivalent to} \quad f_{X,Y}(x,y)&=f_X(x)\cdot f_Y(y)\\
> \text{equivalent to} \quad \mathbb{P}(X\le x \cap Y\le y)&=\mathbb{P}(X\le x)\cdot \mathbb{P}(Y\le y )
> \end{aligned}
> $$
> call $X$ and $Y$ independent.



> **Definition - Support**
>
> For a variable $X$, its **Support** is a set:
> $$
> \text{Supp}(X)=\{x\in\R:f_X(x)>0\}
> $$







## C2



> **Definition - Mutual Independence**
>
> The random variables $X_{1},\ldots,X_{n}$ are **mutually independent** if
> $$
> F_{\mathbf{X}_{(r)}}(\mathbf{x}_{(r)})=\prod_{j=1}^{|\mathcal{X}_{r}|}F_{X_{(r)j}}(x_{(r)j})
> $$
> for each finite subset, $\mathcal{X}_{(r)}$​, of $\{X_{1},X_{2},\ldots\}$



## C3

> **Definition - Conditional Probability Density Function**
>
> Suppose that $f_{X,Y}(x,y)$ is the joint probability density function of the random variables $X$ and $Y$. If $f_{Y}(y)$ is the probability density function of $Y$ then the **conditional probability density function** of $X$*given*$Y$ is 
> $$
> f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_{Y}(y)}
> $$
>  for $y$ such that $f_{Y}(y)>0$.



> **Definition - Conditional Probability**
>
> If the random variables $X$ and $Y$ are such that $f_{X|Y}(x|y)$ is the probability density function of $X$, conditional on $Y$, then for $C\subseteq\mathbb{R}$,
> $$
> \mathbb{P}(X\in C|Y=y) = \int_{C}f_{X|Y}(x|y)\mathrm{d}x.
> $$
> We say that $\mathbb{P}(X\in C|Y=y)$ is the probability that $X\in C$**conditional on**$ Y=y$ (or, alternatively, the probability that $X\in\mathcal{C}$ **given** $Y=y$).



## C4

> **Definition - Expectation: Multivariate Continuous Distribution**
>
> If $\mathbf{X}=(X_{1},\ldots,X_{n})^{\top}$ is a multivariate random variable with probability density function $f_{\mathbf{X}}(\mathbf{x})$ and $g:A\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}$ is a suitable function then the expectation of $g(\mathbf{X}) = g(X_{1},\ldots,X_{n})$ is
> $$
> \mathbb{E}(g(\mathbf{X}))=\int\ldots\int_{\mathbb{R}^{n}}g(\mathbf{x})f_{\mathbf{X}}(\mathbf{x})\mathrm{d}\mathbf{x}.
> $$
> 
>
> Without using vector notation, this is written
> $$
> \mathbb{E}(g(X_{1},\ldots,X_{n}))=\int\ldots\int_{\mathbb{R}^{n}}g(x_{1},\ldots,x_{n})f_{X_{1},\ldots,X_{n}}(x_{1},\ldots,x_{n})\mathrm{d}x_{1}\ldots\mathrm{d}x_{n}.
> $$



> **Definition - Covariance**
>
> Suppose that 
>
> $X$ and $Y$ are two random variables. The **covariance** of $X$ and $Y$ is
> $$
> \text{Cov}(X,Y)=\mathbb{E}\left[(X-\mathbb{E}(X))(Y-\mathbb{E}(Y))\right].
> $$
> This definition assumes that $\mathbb{E}(X^{2})$ and $\mathbb{E}(Y^{2})$ are finite.



> **Definition - Variance-Covariance Matrix**
>
> For the multivariate random variable $\mathbf{X}=(X_{1},\ldots,X_{n})^{\top}$, the **variance-covariance** matrix of $\mathbf{X}$ is an $n\times n$ matrix whose $(r,s)$ element is $\text{Cov}(X_{r},X_{s})$.
>
> The variance-covariance matrix is written:
> $$
> \begin{align*} \text{Var}(\mathbf{X})&=\left(\begin{array}{cccc}                        \text{Cov}(X_{1},X_{1}) & \text{Cov}(X_{1},X_{2}) & \cdots & \text{Cov}(X_{1},X_{n})\\                        \text{Cov}(X_{2},X_{1}) & \text{Cov}(X_{2},X_{2}) & \cdots & \text{Cov}(X_{2},X_{n})\\                         \vdots & \vdots & \ddots & \vdots\\                        \text{Cov}(X_{n},X_{1}) & \text{Cov}(X_{n},X_{2}) & \cdots & \text{Cov}(X_{n},X_{n})                        \end{array}\right)\\                        ~ &~\\                      &=\left(\begin{array}{cccc}                        \text{Var}(X_{1}) & \text{Cov}(X_{1},X_{2}) & \cdots & \text{Cov}(X_{1},X_{n})\\                        \text{Cov}(X_{2},X_{1}) & \text{Var}(X_{2}) & \cdots & \text{Cov}(X_{2},X_{n})\\                         \vdots & \vdots & \ddots & \vdots\\                        \text{Cov}(X_{n},X_{1}) & \text{Cov}(X_{n},X_{2}) & \cdots & \text{Var}(X_{n})                        \end{array}\right). \end{align*}
> $$



> **Definition - Pearson Correlation**
>
> The **(Pearson) correlation** of the random variables 
>
> $X$ and $Y$ is defined
> $$
> \rho(X,Y)=\frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}.
> $$
> The Pearson correlation provides a measure of the level of **lin**







## C5

> **Definition - Conditional Expectation**
>
> Suppose that $X$ and $Y$ are two random variables.
>
> The conditional expectation of $X$ given $Y=y$ is 
> $$
> \mathbb{E}(X|Y=y)=\int_{-\infty}^{\infty}xf_{X|Y}(x|y)\mathrm{d}x
> $$
> and this is defined for all $y$ where $f_{Y}(y)>0$.



> **Definition -Conditional Variance**
>
> For the random variables $X$ and $Y$, the conditional variance associated with the distribution of $X|Y$ is
> $$
> \text{Var}(X|Y)=\mathbb{E}[(X-\mathbb{E}(X|Y))^{2}|Y]=\mathbb{E}(X^2|Y)-[\mathbb{E}(X|Y)]^2
> $$







## C6

> **Definition - Moment generating function**
>
> For any random variable, $X$, the **moment generating function** (MGF) of $X$ is the function $$M_{X}\colon A\subseteq\mathbb{R}\rightarrow[0,\infty)$$ where
>
> $$
>M_{X}(t)=\mathbb{E}\left(e^{tX}\right).
> $$
>The MGF is defined as long as $\mathbb{E}\left(e^{tX}\right)$ exists and is finite in an open interval that contains $t=0$.
> 
>The domain of $M_{X}$ (i.e. the set $A$) consists of all values of $t$ for which $\mathbb{E}\left(e^{tX}\right)$ exists and is finite.



> **Definition - joint moment generating function**  
>
> Suppose that $\mathbf{X}=\left(X_{1},\ldots,X_{n}\right)^{\top}$ is the multivariate random variable with joint probability density (or mass) function $f_{X_{1},\ldots,X_{n}}(x_{1},\ldots,x_{n})=f_{\mathbf{X}}(\mathbf{x})$ and we define the $n\times1$ real-valued vector $\mathbf{t}=(t_{1},\ldots,t_{n})^{\top}$.
>
> The **joint moment generating function** of $\mathbf{X}=\left(X_{1},\ldots,X_{n}\right)^{\top}$ is defined
> $$
> \begin{align*} M_{X_{1},\ldots,X_{n}}(t_{1},\ldots,t_{n})&=M_{\mathbf{X}}(\mathbf{t})\\                                          &=\mathbb{E}\left(e^{\mathbf{t}^{\top}\mathbf{X}}\right)\\                                          &=\mathbb{E}\left(e^{t_{1}X_{1}+\ldots+t_{n}X_{n}}\right) \end{align*}
> $$
> as long as $\mathbb{E}\left(e^{\mathbf{t}^{\top}\mathbf{X}}\right)$ exists and is defined in an open region that contains the origin (i.e. the point $t_{1}=\ldots=t_{n}=0$).



> **Definition - Probability generating function**
>
> Suppose that the random variable $X$ takes values in a subset of $\{0,1,2,\ldots\}$ and has probability mass function $p_{X}(x)$.
>
> The **probability generating function** (PGF) of $X$, $\phi_{X}\colon[0,1]\rightarrow [0,1]$ is defined:
> $$
> \phi_X(s)=\mathbb{E}\left[s^X\right]=\sum_{i=0}^\infty s^ip_X(i).
> $$











## C7



> **Definition - Almost Sure Convergence (a.s.)**
>  A sequence $X_n$ converges **almost surely** to $X$, written
> $$
> X_n \xrightarrow{\text{a.s.}} X,
> $$
> if
> $$
> \mathbb{P}\left( \{\omega : X_n(\omega) \to X(\omega)\} \right) = 1.
> $$
> **Meaning.**
>  Pointwise convergence holds for all sample points except for a null set.



> **Definition - Convergence in Probability**
>  A sequence $X_n$ converges **in probability** to $X$, written
> $$
> X_n \xrightarrow{P} X,
> $$
> if for every $\varepsilon > 0$,
> $$
> \mathbb{P}(|X_n - X| > \varepsilon) \to 0.
> $$
> **Meaning.**
>  The probability that $X_n$ deviates from $X$ by more than any fixed $\varepsilon$ goes to zero.

## 

> **Definition - Convergence in Distribution**
>  A sequence $X_n$ converges **in distribution** to $X$, written
> $$
> X_n \xrightarrow{d} X,
> $$
> if the distribution functions satisfy
> $$
> F_{X_n}(x) \to F_X(x)
> $$
> for every $x$ at which $F_X$ is continuous.
>
> **Meaning.**
>  The distributions of $X_n$ approach the distribution of $X$.
>  This is the weakest form of convergence.





## C8

> **Definition - Positive definite**
>
> Suppose that $\Sigma$ is an $n\times n$ real-valued matrix. We say that $\Sigma$ is **positive definite** if, for all $n-$dimensional vectors $\mathbf{x}\in\mathbb{R}^{n}$, with $\mathbf{x}\neq\mathbf{0}$ we have
> $$
> \mathbf{x}^{\top}\Sigma\mathbf{x}>0.
> $$



> **Definition - Affine transformation**
>
> An **affine transformation**$T\colon\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is a transformation of the form 
> $$
> \mathbf{x}\mapsto A\mathbf{x}+\mathbf{b}
> $$
>  where $A\in\mathbb{R}^{m\times n}$ and $\mathbf{b}\in\mathbb{R}^{m}$.



> **Definition - Multivariate Normal Distribution**
>
> The multivariate random variable $\mathbf{X}=\left(X_{1},\ldots,X_{n}\right)^{\top}$ has an $n-$dimensional multivariate normal distribution if $$\mathbf{X}=\boldsymbol{\mu}+A\mathbf{Z}$$ where $\boldsymbol{\mu}=\left(\mu_{1},\ldots,\mu_{n}\right)^{\top}$ is an $n-$dimensional column vector of means, $A\in\mathbb{R}^{n\times k}$ is of rank $k\leq n$ and $\mathbf{Z}=\left(Z_{1},\ldots,Z_{k}\right)^{\top}$ is a vector of independent standard normal random variables (i.e. each $Z_{i}\sim\mathcal{N}(0,1)$ for $i\in\left\{1,\ldots,k\right\}$).
>
> We see that
> $$
> \begin{align*} \mathbb{E}(\mathbf{X})&=\mathbb{E}\left(\boldsymbol{\mu}+A\mathbf{Z}\right)\\                      &=\boldsymbol{\mu}+A\mathbb{E}(\mathbf{Z})\\                      &=\boldsymbol{\mu}\text{ }\text{ }\text{ (since $\mathbb{E}(\mathbf{Z})=\mathbf{0}$)} \end{align*}
> $$
>  and
> $$
> \begin{align*} \text{Var}\left(\mathbf{X}\right) &= \text{Var}\left(\boldsymbol{\mu}+A\mathbf{Z}\right)\\                                  &= A\text{Var}(\mathbf{Z})A^{\top}\\                                  &= AA^{\top}. \end{align*}
> $$
> Usually, we set $\Sigma=AA^{\top}$ and write
> $$
> \mathbf{X}\sim\mathcal{N}_{n}\left(\boldsymbol{\mu},\Sigma\right).
> $$





## C9



# Chapter Ⅰ

Omit



# Chapter Ⅱ

##  Add of two Independent Random Variables

Suppose that $X$ and $Y$ are independent random variables with probability density functions $f_X(x) $and $f_Y(y)$, respectively.

The cumulative distribution function of $Z=X+Y$ is
$$
F_Z(z)=\int _{-\infty}^\infty F_X(x)\cdot f_Y(z-x)dx
$$
The probability density function of Z=X+Y is
$$
f_{Z}(z) = \int_{-\infty}^{\infty}f_{X}(z-y)f_{Y}(y)\mathrm{d}y = \int_{-\infty}^{\infty}f_{X}(x)f_{Y}(z-x)\mathrm{d}x.
$$

# Chapter Ⅲ

## Properties of independent variables

If  $X$ and $Y$ are jointly distributed random variables with joint probability density function 

$f_{X,Y}(x,y)$, then the following statements are equivalent:

1. $X$ and $Y$ are independent.

2. $f_{X|Y}(x|y)=f_{X}(x)$ for all $x\in\mathbb{R}$ and all $y$ such that $f_{Y}(y)>0$.

3. $f_{Y|X}(y|x)=f_{Y}(y)$ for all $y\in\mathbb{R}$ and all $x$ such that $f_{X}(x)>0$.

# Chapter Ⅳ

## Algebra of first order moment (aka Expectation)

**Linearity**

For all constants $a\in\mathbb{R}, b\in\mathbb{R}$ and $c\in\mathbb{R}$ the following property holds: 
$$
\mathbb{E}\left[ag_{1}(X_{1},\ldots,X_{n})+bg_{2}(X_{1},\ldots,X_{n})+c\right] = a\mathbb{E}\left[g_{1}(X_{1},\ldots,X_{n})\right]+b\mathbb{E}\left[g_{2}(X_{1},\ldots,X_{n})\right]+c
$$
 where $g_{1}$ and $g_{2}$ are functions defined on $\mathbb{R}^{n}$.



**Additive**

For any collection of random variables $X_{1},\ldots,X_{n}$, the following holds
$$
\mathbb{E}\left[\sum_{i=1}^{n}X_{i}\right]=\sum_{i=1}^{n}\mathbb{E}(X_{i}).
$$
**Product**

If $X$ and $Y$ are independent random variables then, for any functions $g$ and $h$,
$$
\mathbb{E}[g(X)h(Y)] = \mathbb{E}[g(X)]\mathbb{E}[h(Y)]
$$

## Properties of Covariance

**Commutativity**
$$
\text{Cov}(X,Y)=\text{Cov}(Y,X)
$$


**Independence**

If $X$ and $Y$ are independent then $\text{Cov}(X,Y)=0$.



**Linear function of variables**

For constants $a$, $b$, $c$ and $d$:
$$
\text{Cov}(aX+b,cY+d)=ac\text{Cov}(X,Y).
$$


**Linear combination of variables**

For variables $X_{1},\ldots,X_{m}$ and $Y_{1},\ldots,Y_{n}$ with constants $a_{1},\ldots,a_{m}$ and $b_{1},\ldots,b_{n}$ ($m,n\in\mathbb{N}$)
$$
\text{Cov}\left(\left(\sum_{i=1}^{m}a_{i}X_{i}\right),\left(\sum_{j=1}^{n}b_{j}Y_{j}\right)\right)=\sum_{i=1}^{m}\sum_{j=1}^{n}a_{i}b_{j}\text{Cov}(X_{i},Y_{j}).
$$


**Relation to multivariable variance**
$$
\text{Var}\left(\sum_{i=1}^{n}a_{i}X_{i}\right)=\sum_{i=1}^{n}a_{i}^{2}\text{Var}(X_{i})+2\sum_{1\leq i<j\le n}a_ia_j\text{Cov}(X_i,X_j)
$$


## Commonly used inequalities

> **Cauchy-Schwartz Inequality (probability)**
>
> For any pair of random variables $X$ and $Y$, the following holds:
> $$
> \left[\text{Cov}(X,Y)\right]^{2}\leq\text{Var}(X)\text{Var}(Y).
> $$



## Pearson Correlation

## Properties of Pearson Correlation

1. $$
   |\rho(X,Y)|\le1
   $$

2. If $X$ and $Y$ are independent then $\rho(X,Y)=0$. Note that the converse of this statement is not necessarily true.

3. For constants $a, b, c$ and $d$ ($a\neq0, c\neq 0$):
   $$
   \begin{align*} \rho(aX+b,cY+d)&=\frac{ac\text{Cov}(X,Y)}{|ac|\sqrt{\text{Var}(X)\text{Var}(Y)}}\\               &=\begin{cases}                 \rho(X,Y) & ac>0;\\                 -\rho(X,Y) & ac<0.                 \end{cases} \end{align*}
   $$
   



# Chapter Ⅴ

> **Theorem - Tower property**
>
> For random variables $X$ and 
> $$
> \mathbb E[\mathbb E[X∣Y]∣Y,Z]=\mathbb E[\mathbb E[X∣Y,Z]∣Y]=\mathbb E[X∣Y].
> $$
> In particular,
> $$
> \mathbb E(X)=\mathbb E[\mathbb E(X|Y)]
> $$





> **Theorem -Wald’s Equation**
>
> Suppose that $X_{1},X_{2},\ldots$ is a sequence of independent and identically distributed random variables and $N$ is a non-negative integer-valued random variable where $N$ is independent of the sequence $X_{1}, X_{2}\ldots$.
>
> If $T=\sum_{i=1}^{N}X_{i}$ then
> $$
> \mathbb{E}(T)=\mathbb{E}(N)\mathbb{E}(X_1).
> $$





> **Proposition**
>
> If $X$ is a continuous random variable with pdf $f_{X}(x)$ and $A$ is an event of interest then
> $$
> \mathbb{P}(A)=\int_{-\infty}^{\infty}\mathbb{P}(A|X=x)f_{X}(x)\mathrm{d}x.
> $$



> **Proposition**  
>
> Suppose that $X$ and $Y$ are jointly continuous random variables with marginal pdfs $f_{X}(x)$ and $f_{Y}(y)$, respectively. If $f_{Y|X}(y|x)$ is the conditional probability density function of $Y$ given $X$ then
> $$
> f_{Y}(y)=\int_{-\infty}^{\infty}f_{Y|X}(y|x)f_{X}(x)\mathrm{d}x.
> $$











# Chapter Ⅵ

## Properties of MGF

**Derivatives**

Suppose that $X$ is a random variable with MGF $M_{X}(t)$. If $M^{(n)}_{X}(t)$ is the $n^{\text{th}}$ derivative of $M_{X}(t)$ with respect to $t$$\left(\text{i.e. }M^{(n)}_{X}(t)=\frac{\partial^{n}M_{X}(t)}{\partial t^{n}}\right)$ then
$$
M_{X}^{(n)}(t)=\mathbb{E}\left[X^{n}e^{tX}\right].
$$
which generated the $n$-th moment of $X$ at $x=\mathbb{E} [X]$



**Uniqueness**

Suppose that $X$ and $Y$ are random variables with MGFs $M_{X}(t)$ and $M_{Y}(t)$, respectively. $X$ and $Y$ have the same probability distribution (CDF) if and only if $M_{X}(t)=M_{Y}(t)$ for all $t$ in an open interval that contains $0$.



**Linear transformation**

If the random variable $X$ has moment generating function $M_{X}(t)$ then, for constants $a,b\in\mathbb{R}$, the MGF of $Y=a+bX$ is
$$
M_Y(t)=e^{at}M_X(bt)
$$


**Relation to mutual independence**

The random variables $X_{1},\ldots,X_{n}$ are mutually independent if and only if
$$
M_{X_{1},\ldots,X_{n}}(t_{1},\ldots,t_{n})=\prod_{i=1}^{n}M_{X_{i}}(t_{i}).
$$


**Addition**

If random variables $X_{1},\ldots,X_{n}$ are mutually independent and $Y$ is defined 
$$
Y=\sum_{i=1}^{n}c_{i}X_{i}
$$
 where $c_{1},\ldots,c_{n}\in\mathbb{R}$ are constants, then the MGF of $Y$ is
$$
M_{Y}(t)=\prod_{i=1}^{n}M_{X_{i}}(c_{i}t).
$$
**Relation to Probability Generating Functions (PGF)**
$$
\phi_{X}(s)=M_{X}(\log s)
$$

> [!note]
>
> PGFs have some following properties
>
> 1. The random variables $X$ and $Y$ have the same PGF if and only if $X$ and $Y$ have the same probability mass function.
>
> 2. $\phi_{X}(1)=1$.
>
> 3. $\phi_{X}^{(n)}(1)=\left.\frac{\partial\phi_{X}(s)}{\partial s}\right|_{s=1}=\mathbb{E}\left[X(X-1)\ldots(X-(n-1))\right]$.
>
> 4. $\phi_{X}^{(n)}(0)=\left.\frac{\partial\phi_{X}(s)}{\partial s}\right|_{s=0}=n!\mathbb{P}(X=n)$.
>
> 5. If $X_{1},\ldots,X_{n}$ are independent then $Y=\sum_{i=1}^{n}X_{i}$ has probability generating function
>    $$
>    \phi_{Y}(s)=\prod_{i=1}^{n}\phi_{X_{i}}(s).
>    $$
>
> 6. The random variables $X_{1},\ldots,X_{n}$ are independent if and only if their joint PGF $\phi_{X_{1},\ldots,X_{n}}(s_{1},\ldots,s_{n})$ is such that 
>    $$
>    \phi_{X_{1},\ldots,X_{n}}(s_{1},\ldots,s_{n})=\prod_{j=1}^{n}\phi_{X_{j}}(s_{j})
>    $$
>     where $\phi_{X_{j}}(s_{j})$ is the PGF of $X_{j}$.





# Chapter Ⅶ

## Commonly used inequalities

> **Markov’s Inequality**
>
> Suppose that $X\geq0$ is a random variable (i.e. $X$ takes non-negative values) and $c>0$ is a constant. Then
> $$
> \mathbb{P}(X\geq c)\leq\frac{\mathbb{E}(X)}{c}.
> $$



> **Chebyshev’s inequality**
>
> If $X$ is a random variable with mean $\mu$ and variance $\sigma^{2}$ and $c>0$ is a constant, then
> $$
> \mathbb{P}(|X-\mu|\geq c)\leq\frac{\sigma^{2}}{c^{2}}.
> $$



## Limit Theorems

> **Weak law of large numbers (WLLN)**
>
> Suppose that $X_{1},\ldots,X_{n}$ are independent and identically distributed random variables with $\mathbb{E}(X_{i})=\mu$ and $\text{Var}(X_{i})=\sigma^{2}<\infty$ ($i\in\{1,\ldots,n\}$). Then, for any constant $\epsilon>0$:
> $$
> \lim_{n\rightarrow\infty}\mathbb{P}\left(\left|\frac{X_{1}+\ldots+X_{n}}{n}-\mu\right|>\epsilon\right)=0.
> $$
> which is:
> $$
> \frac{X_1+\dots +X_n}{n}\rightarrow\mu\text{ in probability}
> $$





> **Strong law of large numbers (SLLN)**
>
> Suppose that $X_{1},\ldots,X_{n}$ are independent and identically distributed random variables with $\mathbb{E}(X_{i})=\mu<\infty$ and $\text{Var}(X_{i})=\sigma^{2}<\infty$ ($i\in\{1,\ldots,n\}$). Then
> $$
> \mathbb P\left(\lim_{n\rightarrow\infty}\frac{X_1+\dots+X_n}{n}=\mu\right)=1
> $$
>
> which is:
> $$
> \frac{X_1+\dots+X_n}{n}\rightarrow\mu\text{ almost surely}
> $$



> [!note]
>
> SLLN is **Strictly stronger** than WLLN.



## Convergence in distribution

> **Theorem ** 
>
> Suppose that $X_{1},\ldots,X_{n}$ is a sequence of random variables with moment generating functions (MGFs) $M_{1},\ldots,M_{n}$ and $X$ is a random variable with MGF $M$.
>
> If there exists some $h>0$ such that for all $t\in(-h,h)$, $M_{1}(t),M_{2}(t),\ldots$ are all finite then 
> $$
> \lim_{n\rightarrow\infty}M_{n}(t)=M(t)
> $$
>  for all $t\in(-h,h)$ is equivalent to $X_{n}\overset{D}\rightarrow X$ as $n\rightarrow\infty$.



> **Theorem - Central Limit Theorem**
>
> Suppose that $X_{1},\ldots,X_{n}$ are independent and identically distributed random variables, each with finite mean $\mu$ and finite variance $\sigma^{2}$. If 
> $$
> S_{n}=\sum_{i=1}^{n}X_{i}
> $$
>  and 
> $$
> Z_{n} = \frac{S_{n}-n\mu}{\sigma\sqrt{n}}
> $$
>  then 
> $$
> Z_{n}\overset{D}\rightarrow Z
> $$
>  where $Z\sim\mathcal{N}(0,1)$.



# Chapter Ⅷ

## Multi-dimensional Probability Density Function

For $\mathbf X\sim \mathcal N_n(\boldsymbol{\mu},\Sigma)$,

the PDF of $\mathbf X$
$$
f_{\mathbf{X}}(\mathbf{x})=\left(2\pi\right)^{-\frac{n}{2}}\left|\Sigma\right|^{-\frac{1}{2}}\exp\left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^{\top}\Sigma^{-1}(\mathbf{x}-\boldsymbol{\mu})\right).
$$
where $\mathbf{x}\in\mathbb{R}^{n}$.



## Multi-dimensional Moment Generating Function

For $\mathbf X\sim \mathcal N_n(\mathbf{\mu},\Sigma)$,

the MGF of $\mathbf X$
$$
M_{\mathbf X}(\mathbf t)=\exp\left(\mathbf{t}^{\top}\boldsymbol{\mu}+\frac{1}{2}\mathbf{t}^{\top}\Sigma\mathbf{t}\right)
$$
where $\mathbf{x}\in\mathbb{R}^{n}$.



## Using the MGF to find Moments of Multi-dimensional

the MGF can be rewritten as:
$$
M_{\mathbf{X}}(\mathbf{t})=\exp\left(\sum_{i=1}^nt_i\mu_i+\frac12\sum_{i=1}^n\sum_{j=1}^nt_i\sigma_{ij}t_j\right)
$$
then
$$
\begin{align*} \frac{\partial^{2}}{\partial t_{r}\partial t_{s}}M_{\mathbf{X}}(\mathbf{t}) &= \frac{\partial}{\partial t_{r}}\left[\frac{\partial}{\partial t_{s}}M_{\mathbf{X}}(\mathbf{t})\right]\\ &= \frac{\partial}{\partial t_{r}}\left[\left(\mu_{s}+\sum_{i=1}^{n}t_{i}\sigma_{is}\right)M_{\mathbf{X}}(\mathbf{t})\right]\\  &= \sigma_{rs}M_{\mathbf{X}}(\mathbf{t})+\left(\mu_{r}+\sum_{i=1}^{n}t_{i}\sigma_{ir}\right)\left(\mu_{s}+\sum_{i=1}^{n}t_{i}\sigma_{is}\right)M_{\mathbf{X}}(\mathbf{t}). \end{align*}
$$
and,
$$
\frac{\partial^{k_1+\cdots+k_d}}{\partial t_1^{k_1}\cdots \partial t_d^{k_d}} M_X(t)\Big|_{t=0}
= \mathbb E[X_1^{k_1}\cdots X_d^{k_d}].
$$
and,
$$
\sigma_{rs}=\rho_{rs}\sigma_r\sigma_s
$$

## Properties of Multi-dimensional variable

**Affine Transformations**

Suppose that $\mathbf{X}\sim\mathcal{N}_{n}\left(\boldsymbol{\mu},\Sigma\right)$ and $$\mathbf{Y}=C\mathbf{X}+\mathbf{b}$$ where $\mathbf{b}\in\mathbb{R}^{m}$ and $C\in\mathbb{R}^{m\times n}$ then
$$
\mathbf{Y}\sim\mathcal{N}_{m}\left(C\boldsymbol{\mu}+\mathbf{b},C\Sigma C^{\top}\right).
$$


**Independence**

Suppose that $\mathbf{X}=\left(X_{1},\ldots,X_{n}\right)^{\top}$ is such that $\mathbf{X}\sim\mathcal{N}_{n}\left(\boldsymbol{\mu},\Sigma\right)$.

Then the components of $X_{1},\ldots,X_{n}$ are independent of each other if and only if they are uncorrelated (i.e. if $\sigma_{rs}=0$ for all $r\neq s$.



**Conditional Distributions**

Set $\mathbf X=\begin{pmatrix}X_1\\[2pt] X_2\end{pmatrix}\sim\mathcal N_d\big(\mu,\Sigma\big),$and the mean and covariance are divided into blocks in the same way
$$
\mu=\begin{pmatrix}\boldsymbol\mu_1\\[2pt]\boldsymbol\mu_2\end{pmatrix},\qquad
\Sigma=\begin{pmatrix}\boldsymbol\Sigma_{11} & \boldsymbol\Sigma_{12}\\[4pt]\boldsymbol\Sigma_{21} & \boldsymbol\Sigma_{22}\end{pmatrix},
$$
where $X_1$ is $k$-dimensional variable, $X_2$ is $(d-k)$-dimensional variable.

Assuming that $\Sigma_{11}$ is invertible. Then the conditional distribution is:
$$
X_2\mid X_1=\mathbf x_1 \sim \mathcal N_{d-k}\Big(\,
\boldsymbol\mu_2+\boldsymbol\Sigma_{21}\boldsymbol\Sigma_{11}^{-1}(\mathbf x_1-\boldsymbol\mu_1),\;
\boldsymbol\Sigma_{22}-\boldsymbol\Sigma_{21}\boldsymbol\Sigma_{11}^{-1}\boldsymbol\Sigma_{12}\,\Big)
$$
In particular for the **bivariate normal distribution**:
$$
X_{2}|X_{1}=x_{1}\sim\mathcal{N}\left(\mu_{2}+\rho\frac{\sigma_{2}}{\sigma_{1}}(x_{1}-\mu_{1}),\sigma_{2}^{2}(1-\rho^{2})\right)
$$


## Degenerate case

**Example**

We suppose that $\mathbf{X}=\left(X_{1}, X_{2}, X_{3}\right)^{\top}$ is such that $$\mathbf{X}\sim\mathcal{N}_{3}\left(\boldsymbol{\mu},\Sigma\right)$$ where $\boldsymbol{\mu}=(1,1,1)^{\top}$ and
$$
\Sigma= \left(\begin{array}{ccc} 1 & 0 & 2\\ 0 & 1 & 3\\ 2 & 3 & 13 \end{array} \right).
$$
We can easily deduce that $\Sigma$ is singular (as $\det\Sigma=0$).

Then, the null space of $\Sigma$ is easily determined by solving $\Sigma\mathbf{x}=\mathbf{0}$ and we deduce that the null space is spanned by the vector $(2,3,-1)^{\top}$.

Hence, if we apply Theorem 8.1 with $C=\left(2,3,-1\right)$ and $\mathbf{b}=\mathbf{0}$ we see that $$\mathbb{E}(2X_{1}+3X_{2}-X_{3})=4$$ and 
$$
\text{Var}(2X_{1}+3X_{2}-X_{3}) = (2~~3~-1)\left(\begin{array}{ccc}                                           1 & 0 & 2\\                                           0 & 1 & 3\\                                           2 & 3 & 13\\                                           \end{array}\right)                                           \left(\begin{array}{c}                                           2\\                                           3\\                                           -1                                           \end{array}                                           \right) = 0.
$$
 This implies that $$\mathbb{P}(2X_{1}+3X_{2}-X_{1}=4)=1$$ and, hence,

$$X_{3}=2X_{1}+3X_{2}-4.$$

Thus, although $\mathbf{X}$ takes values in $\mathbb{R}^{3}$ and appears to be three-dimensional, one of the entries of $\mathbf{X}$ can always be constructed using the other two entries (i.e. $X_{3}=2X_{1}+3X_{2}-4$) and, in this sense, $\mathbf{X}$ is really only two-dimensional.

# Chapter Ⅸ

> **Theorem - One-dimensional case**  
>
> The random variable $X$ is a **continuous** random variable with support $A$ and suppose that $g\colon A\rightarrow\mathbb{R}$ is a **strictly monotonic** function that is **differentiable** on $A$. Then the probability density function of $Y=g(X)$ is
> $$
> f_{Y}(y)=\begin{cases}          f_{X}\left(g^{-1}(y)\right)\left|\frac{\partial}{\partial y}g^{-1}(y)\right| & y\in g(A);\\          0 & \text{otherwise.}         \end{cases}
> $$



> **Theorem**  
>
> Suppose $\mathbf{X}=(X_{1},\ldots,X_{n})^{\top}$ to be an $n$-dimensional random variable with support $A$ and suppose that $\mathbf{Y}=\left(Y_{1}(\mathbf{X}),\ldots,Y_{n}(\mathbf{X})\right)^{\top}=T(\mathbf{X})$ is a one-to-one transformation of $\mathbf{X}$ with 
> $$
> T\colon A\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}
> $$
>  and that $T(\mathbf{X})$ is one-to-one with continuously differentiable inverse mapping $H=T^{-1}$ (i.e. $\mathbf{X}=H(\mathbf{Y})$). Then the joint pdf of $\mathbf{Y}$​ is
> $$
> f_\mathbf{Y}(\mathbf{y})=\begin{cases}\left|\det\left(J_H(\mathbf{y})\right)\right|f_\mathbf{X}\left(H(\mathbf{y})\right)&\mathbf{y}\in T(A);\\0&\text{otherwise.}&\end{cases}
> $$

