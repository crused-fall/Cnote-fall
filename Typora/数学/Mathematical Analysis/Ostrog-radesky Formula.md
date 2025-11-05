# Ostrog-radesky Formula

> **奥斯特洛格拉德斯基公式**



## Deduction

**Ostrog-radesky Formula** is used for integrals in the following forms:
$$
\begin{aligned}
\int \frac{A}{x-a}\,dx &= A\ln|x-a| + C \quad &&\text{(S-1)}\\[6pt]
\int \frac{A}{(x-a)^k}\,dx &= -\frac{A}{k-1}\frac{1}{(x-a)^{k-1}} + C \quad &&\text{(S-2)}\\[6pt]
\int \frac{Mx+N}{x^2+px+q}\,dx 
&= \frac{M}{2}\ln(x^2+px+q)
+ \frac{2N - Mp}{\sqrt{4q - p^2}} 
  \arctan\!\frac{2x+p}{\sqrt{4q - p^2}} + C 
\quad &&\text{(S-3)}\\[6pt]
\int \frac{Mx+N}{(x^2+px+q)^m}\,dx 
&= \frac{M'x + N'}{(x^2+px+q)^{m-1}} 
+ \alpha \int \frac{dx}{(x^2+px+q)^{m-1}} 
\quad &&\text{(S-4)}
\end{aligned}
$$


For $\frac{P(x)}{Q(x)}$:
$$
\begin{aligned}
\frac{P(x)}{Q(x)}&=C+\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\cdots+\frac{A_k}{(x-a)^k}+\frac{M_1x+N_1}{x^2+px+q}\\&+\frac{M_2x+N_2}{(x^2+px+q)^2}+\cdots+\frac{M_mx+N_m}{(x^2+px+q)^m}
\end{aligned}
$$
where $Q(x)$ can be written as:
$$
Q(x)=(x-a)^k\cdots(x^2+px+q)^m\cdots 
$$
Because the integral of any rational function is always the finite sum form of the **rational function** plus the **logarithmic function** and the **arctangent function**.

$\frac{P(x)}{Q(x)}$ can be written as:
$$
\frac PQ=[\frac{P_1}{Q_1}]^{\prime}+\frac{P_2}{Q_2}
$$
where the first term indicates the rational part of the integral outcome and the second term indicates the irrational part.

$Q_1(x)$ and $Q_2(x)$ can be written as:
$$
Q_1(x)=(x-a)^{k-1}\cdots(x^2+px+q)^{m-1}\cdots \\
Q_2(x)=(x-a)\cdots(x^2+px+q)\cdots 
$$
thus it is obvious that:
$$
Q(x)=Q_1(x)\cdot Q_2(x)\\
Q_1(x)=\gcd (Q(x),Q'(x))
$$


## Example

$$
\int\frac{4x^4+4x^3+16x^2+12x+8}{(x+1)^2(x^2+1)^2}dx
$$

1. $Q=(x+1)^2(x^2+1)^2$

2. $Q'=2(x+1)(x^2+1)^2+(x+1)^2\cdot2(x^2+1)2x$

3. $Q_1=(x+1)(x^2+1)$

4. $Q_2=\frac Q{Q_1}=(x+1)(x^2+1)$

5. Set $P_1=ax^2+bx+c,P_2=dx^2+ex+f$

6. $$
   \frac{4x^4+4x^3+16x^2+12x+8}{(x+1)^2(x^2+1)^2}=[\frac{ax^2+bx+c}{x^3+x^2+x+1}]^{\prime}+\frac{dx^2+ex+f}{x^3+x^2+x+1}
   $$

7. $$
   \begin{aligned}\int\frac{4x^4+4x^3+16x^2+12x+8}{(x+1)^2(x^2+1)^2}dx&=\frac{-x^2+x-4}{x^3+x^2+x+1}+\int\frac{0x^2+3x+3}{x^3+x^2+x+1}dx\\&=-\frac{x^2-x+4}{x^3+x^2+x+1}+3\int\frac1{x^2+1}dx\\&=-\frac{x^2-x+4}{x^3+x^2+x+1}+3\arctan x+C\end{aligned}
   $$

   