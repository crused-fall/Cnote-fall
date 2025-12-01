---
title: Method of Radical Integral
created: 2025-11-24 05:01
updated: 2025-11-30 17:33
Tags: []
Aliases: []
Category: 
Status: 
Priority: 
Due: 
Related: []
Description: 
---
## Definition



> **Bernoulli polynomial**
>
> The **Bernoulli polynomial** $\varphi_n(x)(n=0,1,2,\dots)$ is defined
> $$
> \frac{te^{xt}}{e^t-1}=\sum_{n=0}^\infty\frac{t^n}{n!}\varphi_n(x)
> $$
> where **LHS** is the **[[Generation function]]** of $\varphi_n(x)$.



> **Bernoulli number**
>
> The **Bernoulli number** $B_n(n=1,2,\dots)$ is defined from Bernoulli polynomials
> $$
> t\left(\frac{1}{e^t-1}+\frac{1}{2}\right)=\frac{1}{2}\frac{e^{t/2}+e^{-t/2}}{e^{t/2}-e^{-t/2}}=1+\sum_{n=1}^\infty(-1)^{n-1}\frac{t^{2n}}{(2n)!}B_n
> $$



## Properties

1. **Recursion formula of Bernoulli numbers**
   $$
   \begin{cases}
   \varphi_0(0)=1,\varphi_1(0)=-\frac{1}{2}\\
   \varphi_{2k}(0)=(-1)^{k-1}B_k,\varphi_{2k+1}(0)=0\quad(k=1,2,\dots)
   
   \end{cases}
   $$
      where
   $$
      \varphi_0(0)=1,\quad\sum_{k=0}^{n-1}\frac{1}{k!(n-k)!}\varphi_k(0)=0
   $$
      Can also be expressed as
   $$
      \varphi_k(x)=(\varphi+x)^n,\quad n=0,1,2,\dots
   $$
      where
   $$
      \varphi_n(0)=(\varphi+1)^n,\quad n=2,3,\dots
   $$
      and $\varphi^n$ denotes $\varphi_n(0)$
   
   
   
1. **Explicit expression of Bernoulli polynomial and**
   $$
   \varphi_n(x)=\sum_{k=0}^n\dbinom{n}{k}\varphi_k(0)x^{n-k}
   $$

3. **Derivatives and integral of Bernoulli polynomial**

$$
\frac{\mathrm d^p}{\mathrm dx^p}\varphi_n=\frac{n!}{(n-p)!}\varphi_{n-p}(x)\\
\int_a^x\varphi_n(y)\mathrm dy=\frac{1}{n+1}[\varphi_{n+1}(x)-\varphi_{n+1}(a)]
$$

4. **Difference relationship**

$$
\varphi_n(x+1)-\varphi_n(x)=nx^{n-1}
$$

5. **Relation of complementary observables**

$$
\varphi_n(1-x)=(-1)^n\varphi_n(x)
$$

6. **Addition formula**

$$
\varphi_n(x+k)=\sum_{i=0}^n\dbinom{n}{i}\varphi_i(k)x^{n-i}
$$

7. **Summation formula**

$$
\sum_{s=1}^ms^n=\frac{1}{n+1}[\varphi_{n+1}(m+1)-\varphi_{n+1}(0)]
$$



## Common value and application

**Common value**
$$
\begin{cases}\begin{aligned}&\mathrm{B}_{1}=\frac{1}{6},\quad\mathrm{B}_{2}=\frac{1}{30},\quad\mathrm{B}_{3}=\frac{1}{42},\quad\mathrm{B}_{4}=\frac{1}{30},\\&\mathrm{B}_{5}=\frac{5}{66},\quad\mathrm{B}_{6}=\frac{691}{2730},\quad\mathrm{B}_{7}=\frac{7}{6},\quad\mathrm{B}_{8}=\frac{3617}{510},\\&\mathrm{B}_{9}=\frac{43867}{798},\quad\mathrm{B}_{10}=\frac{174611}{330}.\end{aligned}\end{cases}
$$

$$
\begin{cases}
\begin{aligned}\varphi_0(x)&=1,\varphi_1(x)=x-\frac12,\varphi_2(x)=x^2-x+\frac16,\\\varphi_3(x)&=x(x-1)\left(x-\frac12\right)=x^3-\frac32x^2+\frac12x,\\\varphi_4(x)&=x^4-2x^3+x^2-\frac1{30},\\\varphi_5(x)&=x(x-1)\left(x-\frac12\right)\left(x^2-x-\frac13\right)\\&=x^5-\frac52x^4+\frac53x^3-\frac16x,\\\varphi_6(x)&=x^6-3x^5+\frac52x^4-\frac12x^2+\frac1{42}.\end{aligned}
\end{cases}
$$

**Application of solving Taylor expansion**
$$
\frac t2\cot\frac t2=\frac{\mathrm{i}t}2\frac{\mathrm{e}^{\mathrm{i}t/2}+\mathrm{e}^{-\mathrm{i}t/2}}{\mathrm{e}^{\mathrm{i}t/2}-\mathrm{e}^{-\mathrm{i}t/2}}=1-\sum_{n=1}^{\infty}\frac{\mathrm{B}_n}{\left(2n\right)!}t^{2n},\quad|t|<2\pi 
$$

$$
\frac t2\tan\frac t2=\frac t2\cot\frac t2-t\cot t=\sum_{n=1}^\infty\frac{(2^{2n}-1)\mathrm{B}_n}{(2n)!}t^{2n},\quad |t|<\pi
$$

$$
\begin{aligned}t\csc t&=\frac t2\cot\frac t2+\frac t2\tan\frac t2=1+\sum_{n=1}^\infty\frac{2(\begin{array}{c}2^{2n-1}-1\end{array})\mathrm{B}_n}{(2n)!}t^{2n}\quad(|t|<\pi).\end{aligned}
$$

