---
title: Notes on UNUK Real Analysis
tags:
  - Real_Analysis
  - School_Notes
  - Math
date: 2025-11-16
---





# Definitions

## C1

> **Definition 1.1 - Limit**
> $$
> \forall \varepsilon>0, \exist N\in\mathbb{N} \quad s.t. \forall n\in\mathbb{N},n\ge N ,|a_n-L|<\varepsilon\iff \lim_{n\rightarrow\infty}a_n=L
> $$



> **Definition 1.2 - Infinity**
> $$
> \forall K\in\mathbb{R},\exist N\in\mathbb{N}\quad s.t.\forall n\in\mathbb{N},n\ge N,a_n>K\iff\lim_{n\rightarrow\infty}=+\infty
> $$
>
> $$
> \forall K\in\mathbb{R},\exist N\in\mathbb{N}\quad s.t.\forall n\in\mathbb{N},n\ge N,a_n<K\iff\lim_{n\rightarrow\infty}=-\infty
> $$



> **Definition 1.3 - Limit Points**
> $$
> \begin{aligned}&a\in\mathbb{R}\text{ is  a limit point of the sequence }(a_n)_{n\in\mathbb{N}} \iff\\ 
> &\forall\varepsilon>0,N\in\mathbb{N},\exist n\geq N,\text{s.t.}|a_n-a|<\varepsilon.\end{aligned}
> $$



> **Definition 1.4 - Subsequence**
>
> $(a_{n_k})_k $ is a **subsequence** of $(a_n)_n$.
>
> where:
>
> - $(a_n)_n$ is a sequence;
> - $(n_k)_k$ is an increasing sequence of natural numbers.



> **Definition 1.5 - Least upper bound and Greatest lower bound**
>
> For $A\sube\R $ be a set.
>
> Denote the **Least upper bound** and **Greatest lower bound** as $\sup A$ and $\inf A$
>
> 1. If $A$ is non-empty
>
>    - If $A$ is bounded above:
>
>      exist $s=\sup A,s.t.$:
>
>      1. $\forall x\in A,x\le s$
>      2. $\forall \varepsilon>0,\exist y\in A,s.t.y>s-\varepsilon$
>
>    - If $A$ is not bounded above:
>
>      exist $l=\inf A,s.t.$:
>
>      1. $\forall x\in A,x\ge l$
>      2. $\forall \varepsilon>0,\exist y\in A,s.t.y<l+\varepsilon$
>
>    - If $A$ is bounded below:
>
>      $\sup A=+\infty$
>
>    - If $A$ is not bounded below:
>
>      $\inf A=-\infty$
>
> 2. If $A$ is empty
>
>    $\sup \empty =-\infty ,\inf \empty=+\infty$



> **Definition 1.6 - Upper limit and Lower limit**
>
> For $(a_n)_{n\ge p}$ be a sequence, define 
> $$
> \limsup_{n\rightarrow \infty} a_n=\inf_{m\ge p}\sup_{k\ge m}a_k\\
> \liminf_{n\rightarrow \infty} a_n=\sup_{m\ge p}\inf_{k\ge m}a_k\\
> $$



> **Definition 1.7 - Cauchy sequence**
> $$
> \begin{aligned}
> &(a_n)_n\text{ is an cauchy sequence}\iff\\
> &\forall\varepsilon>0,\exist N\in \N ,s.t.\forall n,m\ge N,|a_n-a_m|<\varepsilon
> \end{aligned}
> $$



> **Definition 1.8 - Rearrangement**
> $$
> \begin{aligned}
> &\sum_{k=1}^\infty b_k \text{ is a rearrangement of } \sum_{k=1}^\infty a_k\iff\\&\exist \text{ a bijective map } \sigma:N\rightarrow N,s.t.b_k=a_{\sigma(k)}
> \end{aligned}
> $$



> **Definition 1.9 - $\varepsilon $-close**
> $$
> x\text{ is }\varepsilon-\text{close to } a\in \R \iff|x-a|<\varepsilon
> $$



> **Definition 1.10 - $\varepsilon $-close sequence**
> $$
> \begin{aligned}
> &(a_n)_n \text{is frequently } \varepsilon -\text{close to }a\iff\\
> &\exist \text{infinitely many }n\in \N,s.t.a_n\text{ is }\varepsilon-\text{close to } a\\\\
> &(a_n)_n \text{is eventually } \varepsilon -\text{close to }a\iff\\
> &\exist N,s.t.\forall n\ge \N,s.t.a_n\text{ is }\varepsilon-\text{close to } a
> \end{aligned}
> $$



## C2

> **Definition 2.1 - Limit**
> $$
> \lim_{x\rightarrow x_0}f(x)=L\iff\forall\varepsilon>0,\exist\delta>0,s.t.\forall|x-x_0|<\delta,|f(x)-L|<\varepsilon
> $$



> **Definition 2.2 - Continuity**
> $$
> f(x) \text{ is continuous at }x=x_0\iff\lim_{x\rightarrow x_0}f(x)=f(x_0)
> $$



> **Definition 2.3 - Differentiable**
> $$
> f(x) \text{ is differentiable at }x=x_0\iff \lim_{x\rightarrow x_0}\frac{f(x)-f(x_0)}{x-x_0}=f'(x)
> $$



> **Definition 2.4 - Convexity**
> $$
> \begin{aligned}
> f \text{ is called convex}&\iff \forall x_1,x_2,f(tx_1+(1-t)x_2)\leq tf(x_1)+(1-t)f(x_2)\\
> f \text{ is called strictly convex}&\iff \forall x_1,x_2,f(tx_1+(1-t)x_2)< tf(x_1)+(1-t)f(x_2)
> 
> 
> 
> 
> \end{aligned}
> $$



> **Definition 2.5 - Average**
>
> | **Mean Type**        | **Symbol / Formula**                                         | **Notes**       |
> | -------------------- | ------------------------------------------------------------ | --------------- |
> | Arithmetic Mean      | $A = \dfrac{x_1 + x_2 + \cdots + x_n}{n}$                    | Basic average   |
> | Geometric Mean       | $G = (x_1 x_2 \cdots x_n)^{1/n}$                             | $G \le A$       |
> | Harmonic Mean        | $H = \dfrac{n}{\dfrac{1}{x_1} + \dfrac{1}{x_2} + \cdots + \dfrac{1}{x_n}}$ | $H \le G$       |
> | Quadratic Mean (RMS) | $Q = \sqrt{\dfrac{x_1^2 + x_2^2 + \cdots + x_n^2}{n}}$       | $A \le Q$       |
> | Power Mean           | $M_r = \left(\dfrac{x_1^r + x_2^r + \cdots + x_n^r}{n}\right)^{1/r}$ | Monotone in $r$ |
> | Weighted Mean        | $\bar{x} = \sum_{i=1}^n w_i x_i,\ \sum w_i = 1$              | General form    |
> | Limits               | $\displaystyle \lim_{r\to -\infty}M_r=\min x_i,\ \lim_{r\to+\infty}M_r=\max x_i$ |                 |





## C3

> **Definition - Norm**
>
>  A function $N:\mathbb{R}^d\to\mathbb{R}$ is called a **norm** on $\mathbb{R}^d$ if the following three criteria hold:
>
> - (N1) Definiteness: $N(\mathbf{x})\ge 0$ for all $\mathbf{x}\in \mathbb{R}^d$, with $N(\mathbf{x})=0$ if and only if $\mathbf{x}=0$.
>
> - (N2) Homogeneity: For all $\lambda \in \mathbb{R}$ and $\mathbf{x}\in \mathbb{R}^d$, $N(\lambda \mathbf{x})=|\lambda|N(\mathbf{x})$.
>
> - (N3) Triangle inequality: For all $\mathbf{x},\mathbf{y}\in \mathbb{R}^d$, $N(\mathbf{x}+\mathbf{y})\le N(\mathbf{x}) + N(\mathbf{y})$.
>
> 
>
> **Some common norm**
>
> For a vector $x = (x_1, x_2, \dots, x_n) \in \mathbb{R}^n$, the **$p$-norm** is defined as
> $$
> \|x\|_p = \left( \sum_{i=1}^n |x_i|^p \right)^{1/p}, \quad p \ge 1
> $$
>
> ------
>
> **Common Special Cases**
>
> | $p$        | Name                              | Formula                       |
> | ---------- | --------------------------------- | ----------------------------- |
> | $p=1$      | **Manhattan norm (Taxicab norm)** | $||x||_1 = \sum x_i$          |
> | $p=2$      | **Euclidean norm**                | $\|x\|_2 = \sqrt{\sum x_i^2}$ |
> | $p=\infty$ | **Maximum norm (Sup norm)**       | $||x||_\infty = \max{x_i}$    |





> **Definition 3.2 - Vector sequence**
>
> A **sequence** of vectors in $\R^d$ is a map from $\N$ to $\R^d$, denoted $(\mathbf{x}_n)_{n\in\N}$
>
> and:
> $$
> \lim_{n\rightarrow\infty}\mathbf{x}_n=a\iff\lim_{n\rightarrow\infty}||\mathbf{x}_n-a||=0
> $$
> and:
> $$
> (\mathbf{x}_n)_n \text{ is a Cauchy sequence} \iff\forall\varepsilon>0,\exist N\in\N,s.t. \forall n,m\ge N,||\mathbf{x}_n-\mathbf{x}_m||<\varepsilon
> $$





> **Definition - Boundedness**
>
>  A set $A\subseteq \mathbb{R}^d$ is called **bounded** if there exists $M>0$ such that for all $\mathbf{x}\in A$, $\|\mathbf{x}\|\le M$.
>
> A sequence $(\mathbf{x}_n)_n$ in $\mathbb{R}^d$ is called bounded if the set $\{\mathbf{x}_n: n\in \mathbb{N}\}$ is bounded.





> **Definition - Open ball**
>
>  For $\mathbf{a}\in \mathbb{R}^d$ and $r>0$ we define the **open ball** $B_r(\mathbf{a})$ of radius $r$ around $\mathbf{a}$ as
> $$
> B_r(a)=\{\mathbf x∈R^d:∥\mathbf{x−a}∥<r\}.
> $$





> **Definition - Open \Close set**
>
> A set $U\subseteq \mathbb{R}^d$ is called **open** if for every $\mathbf{a}\in U$, there exists $r>0$ such that $B_r(\mathbf{a})\subseteq U$.
>
> 
>
>  A set $A\subseteq \mathbb{R}^d$ is called **closed** if $\mathbb{R}^d\setminus A$ is open.
>
> > **Theorem - Equivalent definition of close set**
> >
> > A set $A\subset \mathbb{R}^d$ is closed if and only if the following holds: For every sequence $(\mathbf{x}_n)_n$ with $\mathbf{x}_n\in A$ and $\mathbf{x}_n\to \mathbf{x}_0\in \mathbb{R}^d$, the limit $\mathbf{x}_0\in A$.





> **Definition - Closure and interior (point)**
>
>  Let $S\subseteq \mathbb{R}^d$ be a set. We define the **closure** of $S$ as
> $$
> \overline{S}=\{ \mathbf{x}\in \mathbb{R}^d: \exists (\mathbf{x}_n)_n,\,  \mathbf{x}_n\in S\text { with } \mathbf{x}_n\to \mathbf{x} \text{ as } n\to\infty\}
> $$
> If $\mathbf{x}\in \overline S$, then $\mathbf{x}$ is called an **limit or isolated point of** **$S$**.
>
> 
>
> The **interior** of $S$, written $\mathrm{int}(S)$ is defined as
> $$
> S^\circ=\text{int}(S)=\{x∈S:∃r>0 ,s.t. B_r(x)⊆S\}.
> $$
> If $\mathbf{x}\in \mathrm{int}(S)$, then $\mathbf{x}$ is called an **interior point of** **$S$**.
>
> > **Theorem 3.7 - Equivalent definition of interior and closure**
> > $$
> > \mathrm{int}(S)=\bigcup_{V\subseteq S, V\text{ open}} V=\mathrm{int}(S)=\mathbb{R}^d\setminus \overline{\mathbb{R}^d\setminus S}
> > $$
> > and
> > $$
> > \overline{S}=\bigcap_{A\supseteq S, A\text{ closed}} A=\overline{S}=\mathbb{R}^d \setminus \mathrm{int}(\mathbb{R}^d\setminus S)
> > $$





> **Definition - Boundary**
>
> For a set $S\subseteq \mathbb{R}^d$, we define the **boundary** as
> $$
> ∂S=\overline{S}-S^\circ=\overline{S}\cap \overline{\mathbb{R}^d\setminus S}
> $$





> **Definition - Compact set**  
>
> The following definitions are equivalent:
>
> 1. **Sequential compactness**
>
> A set $A\subseteq \mathbb{R}^d$ is called **sequentially compact** if every sequence $(\mathbf{x}_n)_n$ with $\mathbf{x}_n\in A$ has a convergent subsequence whose limit lies in $A$.
>
> 2. **Open cover definition (standard)**
>
> Every open cover of $K$ has a finite subcover:
> $$
> K \subset \bigcup_{\alpha \in I} U_\alpha 
> \Rightarrow 
> K \subset \bigcup_{j=1}^n U_{\alpha_j}.
> $$
>
> 3. **Finite intersection property (FIP)**
>
> For any family of closed sets $\{F_\alpha\}$ with (called of Finite intersection property )
> $$
> \bigcap_{j \in J} F_j \neq \varnothing
> \quad \text{for all finite } J \subset I,
> $$
> and every $F_\alpha$ intersect with  $K$ ($F_\alpha \cap K \neq \varnothing$)
> then:
> $$
> \bigcap_{\alpha \in I} (F_\alpha \cap K) \neq \varnothing.
> $$
>
> 4. **Totally bounded and complete**
>
> K is compact if and only if it is both **totally bounded** and **complete**.
>
> > [!note]
> >
> > In **metric space** $(X,d)$, if every **Cauchy sequence ** is convergent to $x_0\in X$,  then $X$ is **complete**.
>
> 5. **Net definition**
>
> Every net in $K$ has a convergent subnet whose limit lies in $K$.
>
> 6. **Filter definition**
>
>  Every filter on $K$ converges to at least one point of $K$.







> **Definition - Diameter**  
>
> Let $A\subseteq \mathbb{R}^d$ be a set. Then we define the **diameter** of $A$ as
> $$
> \text{diam} A=\sup\{∥x−y∥:x,y∈A\}∈[0,+∞].
> $$







> **Definition - (Uniformly) Continuity in $\R^d$**
>
> Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f}:U\to \mathbb{R}^p$. Then $\mathbf{f}$ is called **continuous at** **$\mathbf{a}\in U$** if :
> $$
> \forall\varepsilon >0,\exist\delta>0,s.t. \forall\|\mathbf{x}-\mathbf{a}\|<\delta , \|\mathbf{f}(\mathbf{x})- \mathbf{f}(\mathbf{a})\|<\varepsilon.
> $$
> The function $\mathbf{f}$ is called **pointwise continuous on** **$U$** if it is continuous at every $\mathbf{a}\in U$.
>
> 
>
> Additionally, it is called **uniformly continuous** on $U$ if :
> $$
> \forall\varepsilon>0,\exist\delta>0,s.t.\|\mathbf{x}-\mathbf{y}\|<\delta , \|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|<\varepsilon
> $$
>
> > **Theorem 3.12 Equivalent definition of continuity**  
> >
> > Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f}:U\to \mathbb{R}^p$. Let $\mathbf{a}\in \mathbb{R}^d$ be such that $\mathbf{a}\in \overline{U\setminus \{\mathbf{a}\}}$( $\mathbf a$ is not a isolated point).
> >
> > Then the following are equivalent:
> >
> > 1. $\mathbf{f}$ is continuous at $\mathbf{a}$.
> > 2. $\lim_{\mathbf{x}\to \mathbf{a}} \mathbf{f}(\mathbf{x})=\mathbf{f}(\mathbf{a})$
> > 3. For every sequence $(\mathbf{x}_n)_n$ in $U$ that converges to $\mathbf{a}$, $\mathbf{f}(\mathbf{x}_n)$ converges to $\mathbf{f}(\mathbf{a})$.
> > 4. For every sequence $(\mathbf{x}_n)_n$ in $U\setminus \{\mathbf{a}\}$ that converges to $\mathbf{a}$, $\mathbf{f}(\mathbf{x}_n)$ converges to $\mathbf{f}(\mathbf{a})$.
> > 5. Let $U\subseteq \mathbb{R}^d$ be open. $\mathbf{f}$ is continuous on $U$ if and only if for every open set $V\subseteq \mathbb{R}^p$, the pre-image $\mathbf{f}^{-1}(V) = \{ \mathbf{x}\in U: \mathbf{f}(\mathbf{x})\in V\}$ is open in $\mathbb{R}^d$.
> > 6. A map $\mathbf{f}: U\to \mathbb{R}^p$ is continuous at $\mathbf{a}\in U$ if and only each component $f_j: U\to \mathbb{R}$ is continuous for $j=1,\dots, p$.





> **Definition - limit in $\R^d$**
>
> Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f}:U\to \mathbb{R}^p$. Let $\mathbf{a}\in \mathbb{R}^d$ be such that $\mathbf{a}\in \overline{U\setminus \{\mathbf{a}\}}$ and let $\mathbf{L}\in \mathbb{R}^p$.
>
> We say $\lim_{\mathbf{x}\to \mathbf{a}} \mathbf{f}(\mathbf{x})=\mathbf{L}$ if for every $\varepsilon>0$ there exists $\delta>0$ such that for all $\mathbf{x}\in U$
> $$
> 0<\|\mathbf{x}-\mathbf{a}\|<\delta \Rightarrow \|\mathbf{f}(\mathbf{x})- \mathbf{L}\|<\varepsilon.
> $$



> **Definition - Path\Path connected**
>
> A continuous map $\gamma:[0,1]\to \mathbb{R}^d$ is called a **path**.
>
> 
>
> A set $S\subseteq \mathbb{R}^d$ is called **path connected** if (equivalent):
>
> 1. for every $\mathbf{a},\mathbf{b}\in S$ there exists a path $\gamma:[0,1]\to \mathbb{R}^d$ with $\gamma([0,1])\subseteq S$, $\gamma(0)=\mathbf{a}$ and $\gamma(1)=\mathbf{b}$.
> 2. $S$ **cannot** be written as the union of two **non-empty non-intersecting open (topology meaning)** sets.











## C4

> **Definition 4.1 - Sequence of functions**  
>
> A sequence of functions on $U\subseteq \mathbb{R}^d$ with values in $\mathbb{R}^p$ is a map from $\mathbb{N}$ into the set $\{ \mathbf{f}: U\to \mathbb{R}^p\}$ of functions from $U$ to $\mathbb{R}^p$.
>
> > **Definition 4.2 - pointwise converge**  
> >
> > Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f},\mathbf{f}_n: U\to \mathbb{R}^p$ for $n\in \mathbb{N}$. We say that $\mathbf{f}_n$ **converges pointwise to** $\mathbf{f}$ on **$U$** if for every $\mathbf{x}\in U$, $\mathbf{f}(\mathbf{x}_n)\to \mathbf{f}(\mathbf{x})$.
>
> > **Definition 4.3 - uniformly convergent**  
> >
> > Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f},\mathbf{f}_n: U\to \mathbb{R}^p$ for $n\in \mathbb{N}$. We say that $\mathbf{f}_n$**converges uniformly to** $\mathbf{f}$ on **$U$** if for every $\varepsilon>0$ there exists $N\in \mathbb{N}$ such that for $n\ge N$ and all $\mathbf{x}\in U$, there holds
> > $$
> > \|\mathbf{f}_n(\mathbf{x})-\mathbf{f}(\mathbf{x})\|<\varepsilon.
> > $$



> **Definition 4.4**  
>
> A **series of functions** $\sum_{n=1}^\infty \mathbf{f}_n$ for $\mathbf{f}_n: E\to \mathbb{R}^q$, $E\subseteq R^d$ is the sequence of partial sums:
> $$
> (\sum_{n=1}^k \mathbf{f}_n)_{k\in \mathbb{N}}.
> $$
>  
>
> A series is called convergent (or uniformly convergent) if the corresponding sequence of partial sums is convergent.













## C5

> **Definition 5.1 - Systems of differential equations**
>
> A **system of differential equations** is an equation of the form 
> $$
> \mathbf{y}'=f(x,\mathbf{y}) \tag{SODE}
> $$
> for a function $\mathbf{y}:I\to \mathbb{R}^d$.
>
> A differentiable function $\mathbf{y}:I\to \mathbb{R}^d$ is called a solution of (SODE) if $\mathbf{y}'(x)=f(x,\mathbf{y}(x))$ for all $x\in I$.



> **Definition 5.2 - Lipschitz continuous**  
>
> Let $S\subseteq \mathbb{R}^d$. A function $\mathbf{f}:S\to \mathbb{R}^p$ is called **Lipschitz continuous** with Lipschitz constant $L>0$ if for all $\mathbf{x}_1,\mathbf{x}_2\in S$,
> $$
> \|\mathbf{f}(\mathbf{x}_1)-\mathbf{f}(\mathbf{x}_2)\|\le L \|\mathbf{x}_1-\mathbf{x}_2\|.
> $$











# Chapter Ⅰ

## Limit points, subsequences, Cauchy sequences

> **Theorem 1.1 - Algebra of limits and continuity**
> $$
> \begin{aligned}&\texttt{Let }(a_n)_{n\in\mathbb{N}}\text{ and }(b_n)_{n\in\mathbb{N}}\text{ be convergent sequences, and }\lim_{n\to\infty}b_n=b.\\&\lim_{n\to\infty}(a_nb_n)_{n\in\mathbb{N}}\text{ are convergent sequences, and }\lim_{n\to\infty}(a_n+b_n)=a+b\text{ and}\\&\text{Then }(a_n+b_n)_{n\in\mathbb{N}}\text{ and the sequence }(\frac1{a_n})_{n\geq n_n}\text{ is convergent}\\&\lim_{n\to\infty}(a_nb_n)=ab.\\&\text{f }f:(c,d)\to\mathbb{R}\text{ is contiuous at }a\in(c,d)\text{ and }(a_n\neq0\text{ for }n\geq n_0)_n\text{ is a sequence with }c<a_n<d\text{ and }a_n\to a\text{ as}\\&n\to\infty,\text{then }f(a_n)\to f(a)\text{ as }n\to\infty.\end{aligned}
> $$



> **Theorem 1.2 - Squeeze / sandwich theorem  **
> $$
> \begin{aligned}&\text{If }(a_n)_n\text{ and }(b_n)_n\text{ are sequences with }a_n\leq b_n\text{ for all }n\text{ and }a_n\to a\text{ and }b_n\to b\text{ as }n\to\infty\text{, then}\\&a\leq b.\\&\text{If }(a_n)_n,(b_n)_n\text{ and }(c_n)_n\text{ are sequences with }a_n\leq b_n\leq c_n\text{ for all }n\text{ such that }a_n\to L\text{ as}\\&n\to\text{ (so to the same limit) then als }b_n\to L\text{ as }n\to\infty.\end{aligned}
> $$



> **Theorem 1.3 - Limit point and subsequence**
> $$
> A \text{ is a limit point of }(a_n)_n\iff\exist (a_{n_k})_k, s.t.\lim_{k\rightarrow\infty}a_{n_k}=A 
> $$



> **Theorem 1.4 - Unboundedness and subsequence **
> $$
> (a_n)_n \text{ is unbounded frome above} \iff \exist (a_{n_k})_k,s.t.a_{n_k}\rightarrow \infty\\
> (a_n)_n \text{ is unbounded frome below} \iff \exist (a_{n_k})_k,s.t.a_{n_k}\rightarrow -\infty
> $$



> **Theorem 1.5 - Bolzano-Weierstra**
>
> Every bounded sequence has a convergent subsequence.
>
> > [!NOTE]
> > $$
> > b_m:=\sup_{k\ge m}a_k,\quad c_m:=\inf_{k\ge m}a_k
> > $$
> > satisfies the condition.



> **Proposition 1.7**
>
> $\forall \varepsilon>0$, $\exist $ finitely many $n$ s.t. $a_n<\liminf_{n\rightarrow\infty}a_n-\varepsilon$ and $a_n>\limsup_{n\rightarrow\infty}a_n+\varepsilon$



> **Proposition 1.8**
>
> Every convergent sequence is a Cauchy sequence.
>
> Every Cauchy sequence is bounded.
>
> Every Cauchy sequence in $\R$ has a limit in $\R$.



## Series

### **Common Convergence Tests for Series**

> 1.**Basic Concepts**
>
> - **Convergence**: The series $\sum a_n$ converges if the partial sums $S_N = \sum_{n=1}^N a_n$ approach a finite limit.
> - **Absolute Convergence**: $\sum |a_n|$ converges.
> - **Conditional Convergence**: $\sum a_n$ converges but $\sum |a_n|$ diverges.
>
> ------
>
> 2.**Common Convergence Tests**
>
> #### (1) Term Test for Divergence
>
> If $\sum a_n$ converges, then $\lim_{n\to\infty} a_n = 0$.
>  If $\lim a_n \ne 0$, the series diverges.
>  *Note:* The converse is false (e.g. harmonic series).
>
> ------
>
> #### (2) Comparison Test
>
> For $a_n, b_n > 0$:
>
> - If $a_n \le b_n$ and $\sum b_n$ converges, then $\sum a_n$ converges.
> - If $a_n \ge b_n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.
>
> ------
>
> #### (3) Limit Comparison Test
>
> For $a_n, b_n > 0$:
> $$
> \lim_{n\to\infty} \frac{a_n}{b_n} = c
> $$
> Then:
>
> - If $0 < c < \infty$, both series converge or diverge together.
> - If $c = 0$ and $\sum b_n$ converges, then $\sum a_n$ converges.
> - If $c = \infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.
>
> ------
>
> #### (4) Ratio Test (d’Alembert Test)
>
> $$
> L = \lim_{n\to\infty} \left| \frac{a_{n+1}}{a_n} \right|
> $$
>
> - $L < 1$: absolutely convergent.
> - $L > 1$: divergent.
> - $L = 1$: inconclusive.
>
> ------
>
> #### (5) Root Test (Cauchy Test)
>
> $$
> L = \lim_{n\to\infty} \sqrt[n]{|a_n|}
> $$
>
> - $L < 1$: absolutely convergent.
> - $L > 1$: divergent.
> - $L = 1$: inconclusive.
>
> ------
>
> #### (6) Integral Test
>
> If $a_n = f(n)$ where $f(x)$ is continuous, positive, and decreasing for $x \ge 1$,
>  then
> $$
> \sum_{n=1}^\infty a_n \text{ and } \int_1^\infty f(x)\,dx
> $$
> either both converge or both diverge.
>
> ------
>
> #### (7) Alternating Series Test (Leibniz Test)
>
> For a series
> $$
> \sum (-1)^{n-1} b_n, \quad b_n \ge 0,
> $$
> if
>
> 1. $b_n$ decreases monotonically, and
> 2. $\lim_{n\to\infty} b_n = 0,$
>     then the series converges (conditionally).
>     If $\sum b_n$ also converges, it is absolutely convergent.
>
> ------
>
> #### (8) Cauchy Convergence Criterion
>
> A series $\sum a_n$ converges if and only if for every $\varepsilon > 0$, there exists $N$ such that for all $m > n > N$,
> $$
> |a_{n+1} + a_{n+2} + \dots + a_m| < \varepsilon.
> $$
>
> ------
>
> #### (9) Raabe Test
>
> $$
> R = \lim_{n\to\infty} n\left(\frac{a_n}{a_{n+1}} - 1\right)
> $$
>
> - $R > 1$: convergent.
> - $R < 1$: divergent.
> - $R = 1$: inconclusive.
>
> ------
>
> #### (10) $p$-Series and Logarithmic Comparison
>
> $$
> \sum_{n=1}^\infty \frac{1}{n^p}
> \begin{cases}
> \text{Converges} & \text{if } p > 1, \\
> \text{Diverges} & \text{if } p \le 1.
> \end{cases}
> $$
>
> Often used as a benchmark in comparison tests.



### Rearrangement



> **Proposition 1.11**
> $$
> \forall k\in\N ,a_k\ge0\text{ and }\sum_{k=1}^\infty a_k=a\in\R\implies \sum_{k=1}^\infty a_{\sigma(k)}=a
> $$
>
> $$
> \sum_{k=1}^\infty a_k=A \text{ converges  absolutely }\iff \forall \sigma ,\sum_{k=1}^\infty a_{\sigma(k)} =A \text{ converges absolutely.}
> $$



> **Theorem 1.6 - Riemann rearrangement theorem**
>
> lf  $\sum_{k=1}^\infty a_k$ is convergent, but not absolutely convergent and $s\in\mathbb{R}$, then there exists a rearrangement $\sigma:\mathbb{N}\to\mathbb{N},s.t.\sum_{k=1}^\infty a_{\sigma(k)}=s$.



> **Theorem 1.7 -Riemann rearrangement theorem**
>
> $\sum_{k=1}^\infty a_k$ convergent but not absolutely convergent then:
> $$
> \forall s\in\R,\exist \sigma:\N\rightarrow\N,s.t.\sum_{k=1}^\infty a_{\sigma(k)}=s
> $$



## Additional revision and intuition

> **Proposition 1.12**
> $$
> \begin{aligned}
> \lim_{n\rightarrow \infty}a_n=L\iff\forall\varepsilon>0,(a_n)_n\text{ is eventually }\varepsilon-\text{close to }L\\
> 
> L \text{ is a limit point of }(a_n)_n \iff\forall\varepsilon>0,(a_n)_n\text{ is frequently }\varepsilon-\text{close to }L\\
> \end{aligned}
> $$



# Chapter Ⅱ

## Limits and continuity

> **Proposition 2.1**
> $$
> \lim_{x\rightarrow x_0}f(x)=L\iff\forall(x_n)_n, \lim_{x\rightarrow x_0}x_n=x_0,s.t.\lim_{n\rightarrow\infty}f(x_n)=L
> $$



> **Theorem 2.1**
> $$
> f\text{ is continuous on } [a,b]\implies f \text{ attains its maximum and minimum}
> $$



> **Theorem 2.2 - Intermediate value theorem**
> $$
> f \text{ is continuous on }[a,b]\implies \forall z\text{ lies in between }f(a) \& f(b),\exist x_0\in(a,b),s.t.f(x)=z
> $$



## Differentiation

> **Theorem 2.3 -Rolle's Theorem**
> $$
> f\text{ is continuous and differentiable on }[a,b],f(a)=f(b)\implies \exist \xi\in(a,b),s.t.f'(\xi)=0
> $$



> **Theorem 2.4 - Lagrange's mean value theorem**
> $$
> f\text{ is continuous and differentiable on }[a,b]\implies \exist \xi\in(a,b),s.t.f'(\xi)=\frac{f(b)-f(a)}{b-a}
> $$



> **Theorem 2.5 - Bernoulli's inequality**
>
> For $\alpha>0,x\in[-1,+\infty)$
>
> If :
> $$
> \alpha\le1,(1+x)^\alpha\le1+\alpha x
> $$
> If:
> $$
> \alpha\ge1,(1+x)^\alpha>1+\alpha x
> $$



> **Theorem 2.5 - Taylor's theorem with Lagrangian remainder**
>
> $f(x)$ a $(n+1)$-times differentiable function on $I$, $x_0\in I$
>
> $\exist \xi\in I $ between $x$ and $x_0$ s.t.:
> $$
> f(x)=P_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}
> $$
> where:
> $$
> P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
> $$
> is the n’th **Taylor polynomial** of f at $x_0$.



> **Corollary 2.3 - L'Hopital's rule**
>
> $f$ and $g$ are $n$ times differentiable with continous derivatives, then
> $$
> \lim_{x\to x_0}\frac{f(x)}{g(x)}=\frac{f^{(n)}(x_0)}{g^{(n)}(x_0)}
> $$



## Inequalities from convexity

### **Core Inequalities in Analysis**

Let $a_i, b_i \ge 0$, $p, q > 1$, $\frac{1}{p} + \frac{1}{q} = 1$.

------

#### **1. Young’s Inequality**

$$
ab \le \frac{a^p}{p} + \frac{b^q}{q}.
$$

- **Equality:** $a^p = b^q$
- **Use:** Fundamental tool; often used to derive Hölder’s inequality.

------

#### **2. Hölder’s Inequality**

$$
\sum_{i=1}^n |a_i b_i| \le 
\left(\sum_{i=1}^n |a_i|^p\right)^{1/p}
\left(\sum_{i=1}^n |b_i|^q\right)^{1/q}.
$$

- **Equality:** Exists $k>0$ s.t. $|a_i|^p = k |b_i|^q$
- **Use:** Generalizes Cauchy–Schwarz; key in $L^p$ estimates.

------

#### **3. Cauchy–Schwarz Inequality**

(Special case of Hölder with $p=q=2$)
$$
\left(\sum_{i=1}^n a_i b_i\right)^2 \le 
\left(\sum_{i=1}^n a_i^2\right)
\left(\sum_{i=1}^n b_i^2\right).
$$

- **Equality:** $a_i = k b_i$ for some constant $k$
- **Use:** Fundamental for inner product spaces and vector norms.

------

#### **4. Minkowski’s Inequality**

$$
\left(\sum_{i=1}^n |a_i + b_i|^p\right)^{1/p} \le 
\left(\sum_{i=1}^n |a_i|^p\right)^{1/p} + 
\left(\sum_{i=1}^n |b_i|^p\right)^{1/p}.
$$

- **Equality:** $a_i, b_i$ are proportional and same sign
- **Use:** Shows $L^p$ norm satisfies triangle inequality; foundation for $L^p$ spaces.

------

#### **Relationships:**

$$
\text{Young} \Rightarrow \text{Hölder} \Rightarrow \text{Minkowski}, \quad
\text{Cauchy–Schwarz} = \text{Hölder}_{p=2}.
$$





# Chapter Ⅲ

## Norms and convergence in $\R^d$



> **Proposition 3.5**  
>
> Let $(\mathbf{x}_n)_n$ be a sequence with $\mathbf{x}_n=(x_{n,1},x_{n,2}, \dots, x_{n,d})$ for $n\in \mathbb{N}$, then:
> $$
>  \lim_{n\rightarrow \infty}\mathbf{x}_n= \mathbf{a}\iff\forall i\in\{1,2,\dots,d\},\lim_{n\rightarrow\infty}x_{n,j}=a_j
> $$



> **Theorem 3.1 - Completeness of $\R^d$**  
>
> A sequence in $\mathbb{R}^d$ is a Cauchy sequence if and only if it is convergent.



> **Proposition 3.6  -Uniqueness of limits** 
>
> If $\mathbf{x}_n\to \mathbf{a}$ and $\mathbf{x}_n\to \mathbf{b}$ as $n\to\infty$, then $\mathbf{a}=\mathbf{b}$.



> **Theorem 3.3  -Bolzano-Weierstraß**
>
> Any bounded sequence in $\mathbb{R}^d$ has a convergent subsequence.



> **Theorem 3.4 - Equivalence of all norms on $\R^d$**
>
> $N_1$ and $N_2$ are two norms on $\mathbb{R}^d$, then there exist constants $A, B>0$ with
> $$
> A N_1(\mathbf{x})\le N_2(\mathbf{x})\le B N_1(\mathbf{x}).
> $$





## Topology of $\R^d$







> **Theorem 3.6 - Properties of open(close) sets**  
>
> The union of  many open sets is open: If $U_i\subseteq \mathbb{R}^d$ are open for $i\in I$, then $\displaystyle\bigcup_{i\in I} U_i$ is open.
>
> The intersection of two open sets is open: If $U_1,U_2\subseteq \mathbb{R}^d$ are open then $U_1\cap U_2$ is open.
>
> 
>
> The intersection of **at most countable** many closed sets is closed, and the union of two closed sets is closed.







## Compact sets

> **Theorem - Heine-Borel's Theorem**
>
> In $\R^d$, if set $A$ is bounded and close, then $A$ is compact







> **Theorem - Cantor's Intersection theorem**
>
> For $n\in \mathbb{N}$, let $E_n\subseteq \mathbb{R}^d$ be **non-empty compact** set and $E_1\supseteq E_2\supseteq E_3\supseteq \dots$, then
> $$
> \bigcap_{n=1}^\infty E_n \neq \emptyset.
> 

> $$
> For $n\in \mathbb{N}$, let $E_n\subseteq \mathbb{R}^d$ be **non-empty close** set and $E_1\supseteq E_2\supseteq E_3\supseteq \dots$ and $\mathrm{diam}\, E_n\to 0$ 
>
> then there exists $\mathbf{p}\in \mathbb{R}^d$ with:
>$$
> \bigcap_{n=1}^\infty E_n =\{\mathbf{p}\}.
> $$





## Continuity

> **Theorem 3.11**  
>
> Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f}:U\to \mathbb{R}^p$. Then $\mathbf{f}$ is continuous at $\mathbf{a}\in U$ if and only if for every sequence $(\mathbf{x}_n)_n$ with $\mathbf{x}_n\in U$ and $\mathbf{x}_n\to \mathbf{a}$ as $n\to\infty$, we have $\mathbf{f}(\mathbf{x}_n)\to \mathbf{f}(\mathbf{a})$ as $n\to\infty$.



> **Proposition 3.13 - Algebra of continuous functions**  
>
> Sum and product of continuous functions at $\mathbf{a}\in U\subseteq \mathbb{R}^d$ are continuous at $\mathbf{a}\in U$. 
>
> If $f,g:U\to \mathbb{R}$ are continuous at $\mathbf{a}\in U$ and $g(\mathbf{a})\neq 0$ then $\frac f g$ is continuous at $\mathbf{a}$.The composition of continuous maps is continuous.



> **Theorem 3.14 - Heine-Cantor's Theorem**  
>
> If $U$ is compact in a metric space and $\mathbf{f}:U\to \mathbb{R}^p$ is continuous, then $\mathbf{f}$ is uniformly continuous on $U$.



> **Theorem 3.15 - Invariant of compactness**  
>
> Let $\mathbf{f}:U\to \mathbb{R}^p$ be continuous. If $U$ is sequentially compact, then $\mathbf{f}(U)$ is sequentially compact.



> **Theorem 3.16**  
>
> If $\mathbf{f}:U\to \mathbb{R}^p$ is continuous and injective where $U\subseteq \mathbb{R}^d$ is sequentially compact. Then the inverse mapping $\mathbf{f}^{-1}: \mathbf{f}(U)\to \mathbb{R}^d$ is continuous.



> **Theorem 3.18 - Invariant of path connected**  
>
> If $U\subseteq \mathbb{R}^d$ is path connected and $\mathbf{f}:U\to \mathbb{R}^p$ is continuous then $\mathbf{f}(U)$ is path connected.



> **Theorem - Extreme value theorem**
>
> If $U$ is compact, $f:U\rightarrow \R$ continuous, then $f$ has minimum and maximum in $U$









# Chapter Ⅳ

> **Proposition 4.1**  
>
> Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f},\mathbf{f}_n: U\to \mathbb{R}^p$ for $n\in \mathbb{N}$. Then $\mathbf{f}_n$ converges uniformly to $\mathbf{f}$ on 
>
> $U$ if and only if the following holds:
>
> The sequence $(s_n)_n$ given by 
> $$
> s_n:=\sup\{\|\mathbf{f}_n(\mathbf{x})-\mathbf{f}(\mathbf{x})\|: \mathbf{x}\in U\}
> $$
>  converges to $0$.



> **Theorem 4.1**  
>
> Let $U\subseteq \mathbb{R}^d$ and let $\mathbf{f},\mathbf{f}_n: U\to \mathbb{R}^p$ for $n\in \mathbb{N}$. 
>
> If $\mathbf{f}_n$ converge uniformly to $\mathbf{f}$ on $U$ and all $\mathbf{f}_n$ are continuous on $U$, then $\mathbf{f}$ is continuous on $U$.
>
> 
>
> Let $f,f_n:[a,b]\to \mathbb{R}$ are such that $f_n$ is **differentiable with continuous derivative** $f_n'$. 
>
> If $f_n$ converges to $f$ pointwise and the $f_n'$ converge uniformly, then $f$ is differentiable and $f_n'$ converge to $f'$.



> **Theorem 4.2**  
>
> Let $f,f_n:[a,b]\to\mathbb{R}$ where $a<b$ and $n\in \mathbb{N}$. If $f_n$ are continuous on $[a,b]$ and $f_n$ converge to $f$ uniformly on $[a,b]$ as $n\to\infty$, then
> $$
> \int_a^b f(x)dx = \lim_{n\to\infty}\int_a^b f_n(x)dx.
> $$



> **Theorem 4.4  (Weierstrass M test)** 
>
> Let $E\subset \mathbb{R}^d$ and $\mathbf{f}_n: E\to \mathbb{R}^q$ and assume there exist $M_n>0$ such that for all $\mathbf{x}\in E$ and $n\in \mathbb{N}$ we have 
> $$
> \|\mathbf{f}_n(\mathbf x)\|\le M_n.
> $$
>  If $\sum_{n=1}^\infty M_n$ converges, then the series 
> $$
> \mathbf f(\mathbf x) = \sum_{n=1}^\infty \mathbf{f}_n(\mathbf x)
> $$
>  converges uniformly on $E$.
>
> If all of the $\mathbf{f}_n$ are continuous, then so is $\mathbf f$.



> **Corollary 4.2 - Continuity and Convergence of Fourier series**  
>
> Let $(a_n)_{n\ge 0}$, $(b_n)_n$ be sequences of real numbers and $M>0$, $p>1$ with $|a_n|+|b_n|\le \frac{M}{n^p}$. Then the Fourier series 
> $$
> a_0+\sum_{n=1}^\infty \left(a_n \cos(nx) + b_n \sin (nx)\right)
> $$
> converges uniformly on $\mathbb{R}$ to a continuous $2\pi$-periodic function.
>
> 
>
> >  If $p>2$, then the limit function is **differentiable** with derivative
> > $$
> > \sum_{n=1}^\infty \left(-n a_n  \sin(nx)+nb_n \cos(nx)\right).
> > $$
>
> 
>
> > If $f$ is twice differentiable, then the Fourier series for $f$ has coefficients satisfying $|a_n|+|b_n|\le \frac{M}{n^2}$ and so converges uniformly







# Chapter Ⅴ

> **Proposition 5.1**  
>
> If $I\subseteq \mathbb{R}$ is an interval and $f:I\to \mathbb{R}$ is differentiable with $|f'(x)|\le M$ for all $x\in I$, then $f$ is Lipschitz continuous on $I$ with Lipschitz constant $M$.



> **Theorem 5.1 - Uniqueness of the solution to ODE**  
>
> Consider the $\mathbf{R}^d$ valued initial value problem 
> $$
> \mathbf{y}'=\mathbf{f}(x,\mathbf{y}), \quad \mathbf{y}(x_0)=\mathbf{y}_0. \tag{IVP}
> $$
> Let $R=\{ (x,\mathbf{y})\in \mathbb{R}^{d+1}: |x-x_0|\le h, \|\mathbf{y}-\mathbf{y}_0\|\le k \}$. 
>
> If $\mathbf{f}$ is continuous on $R$, $\|\mathbf{f}(x,\mathbf{y})\|\le M$ on $R$, and $Mh\le k$ and additionally there is $L>0$ such that $\mathbf{f}$ satisfies the Lipschitz condition 
> $$
> \|\mathbf{f}(x,\mathbf{y})-\mathbf{f}(x,\hat{\mathbf{y}})\| \le L \| \mathbf{y}-\hat{\mathbf{y}}\|
> $$
>  on $R$, then (IVP) has a unique solution on the interval $[x_0-h,x_0+h]$.



> **Theorem 5.2  (Gronwall's inequality)** 
>
> Let $f:[x_0-h,x_0+h]\to [0,\infty)$ be a nonnegative continuous function satisfying 
> $$
> f(x)\le A+B\left| \int_{x_0}^x f(t)dt\right|.
> $$
>  Then $f(x)\le A e^{B|x-x_0|}$.



> **Corollary 5.1**  
>
> The solution of a system of ODEs that satisfies Lipschitz condition depends continuously on the initial data:
>
> If $\mathbf{z}$ and $\hat{\mathbf{z}}$ are solutions of 
> $$
> \mathbf{y}'=f(x,\mathbf{y})
> $$
>  with $\mathbf{z}(x_0)=\mathbf{z}_0$ and $\hat{\mathbf{z}}(x_0)=\hat{\mathbf{z}}_0$ then 
> $$
> \mathbf{z}(x)-\hat{\mathbf{z}}(x)=\mathbf{z}_0-\hat{\mathbf{z}}_0 +\int_{x_0}^x \mathbf{f}(t,\mathbf{z}(t))-\mathbf{f}(t,\hat{\mathbf{z}}(t))dt
> $$
>  so by Gronwall’s inequality
> $$
> \|\mathbf{z}(x)-\hat{\mathbf{z}}(x)\|\le \|\mathbf{z}_0-\hat{\mathbf{z}}_0\| \exp(L|x-x_0|).
> $$



> **Corollary 5.2**  
>
> We can obtain existence and uniqueness for higher order equations such as 
> $$
> y^{(n)}=f(x,y,y',\dots, y^{(n-1)})
> $$
>  by transforming the single equation into a system: Set $y_0=y$, $y_1=y'$, $y_2=y''$ and $y_{n-1}=y^{(n-1)}$, then the $n$-th order equation is equivalent to the system 
> $$
> \begin{align*} y_0'&=y_1 \\ y_1'&=y_2 \\ \dots \\ y_{n-1}'&=f(x,y_0,y_1,\dots, y_{n-1}) \end{align*}
> $$
>  that can be solved with the previous method.
