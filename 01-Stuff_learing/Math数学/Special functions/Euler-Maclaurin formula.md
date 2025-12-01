---
title: Euler polynomial & Euler numbers
created: 2025-11-24 05:01
updated: 2025-11-30 17:33
tags: []
aliases: []
category: 
status: 
priority: 
due: 
related: []
description: 
---

## Darboux's formula

> **Theorem - Darboux's formula**
>
> Suppose $f(x)$ is analytical on the segment from $a$ to $z$, $\varphi(t)$ is an arbitrary polynomial of degress $n$ about variable $t$, then
> $$
> \begin{aligned}&\varphi^{(n)}(0)\left\{f(z)-f(a)\right\}\\&=\sum_{i=1}^n(-)^{i-1}(z-a)^i\left\{\varphi^{(n-i)}(1)f^{(i)}(z)-\varphi^{(n-i)}(0)f^{(i)}(a)\right\}\\&+(-)^n(z-a)^{n+1}\int_0^1\varphi(t)f^{(n+1)}[a+(z-a)t]\mathrm{d}t.\end{aligned}
> $$



> [!NOTE]
>
> **Darboux's formula** is the general case of **Taylor's formula** when $\varphi(t)=(t-1)^n$



> **Proof**
>
> Notice that
> $$
> \begin{aligned}
> \frac{\mathrm{d}}{\mathrm{d}t}\sum_{m=1}^n&(-)^m(z-a)^m\varphi^{(n-m)}(t)f^{(m)}[a+(z-a)t]\\&=-\:(z-a)\varphi^{(n)}(t)f^{\prime}[a+(z-a)t]\\&+\:(-)^n(z-a)^{n+1}\varphi(t)f^{(n+1)}[a+(z-a)t]
> \end{aligned}
> $$
> Applying integral about $t$ from $0$ to $1$
> $$
> \begin{aligned}
> &\int_0^1(z-a)\varphi^{(n)}(t)f'[a+(z-a)t]dt\\
> &=\left\{\sum_{m=1}^n(-)^{m-1}(z-a)^m\varphi^{(n-m)}(t)f^{(m)}[a+(z-a)t]\right\}_{t-0}^1\\
> &+\:(-)^n(z-a)^{n+1}\varphi(t)f^{(n+1)}[a+(z-a)t]
> 
> \end{aligned}
> $$
> which is equivalent to the formula.



## Euler-Maclaurin formula

> **Theorem - Euler-Maclaurin formula**
>
> Suppose $f(x)$ is analytical on the segment from $a$ to $z$, then
> $$
> \begin{aligned}
> $$
