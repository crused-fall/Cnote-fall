Method of solving integrals as:
$$
I=\int R(x,\sqrt{ax^2+bx+c})
$$
where $R(x,y)$ is a rational fraction of $x\&y$ 



Suppose:
$$
 Y = ax^2 + bx + c, y = \sqrt{Y}
$$
$R(x,y)$ can be expressed as:
$$
\begin{aligned}
R(x,y) &= \frac{P_1(x) + P_2(x)y}{P_3(x) + P_4(x)y}\cdot \frac{P_3(x) - P_4(x)y}{P_3(x) - P_4(x)y} \\&= \frac{P_1(x)P_3(x) + (P_2(x)P_3(x) - P_1(x)P_4(x))y - P_2(x)P_4(x)y^2}{P_3^2(x) - P_4^2(x)y^2}

\end{aligned}
$$


thus $R(x,y)$ can be expressed as:
$$
R(x,y)=R_1(x)+\frac{R^*(x)}{y}
$$
where $R_1(x)\& R^*(x) $ are rational fractions.

and $R^*(x)$ can be expressed as:
$$
R^*(x) = P(x) +  \frac{A_1}{x-\alpha}+\cdots+ \frac{A_k}{(x-\alpha)^k} +\cdots+ \frac{M_1x + N_1}{x^2+px+q} +\cdots+ \frac{M_mx + N_m}{(x^2+px+q)^m}+\cdots
$$
thus integration can be reduced to the following three situations:

1. $$
   \int \frac{P(x)}{\sqrt{ax^2 + bx + c}}dx
   $$
   
   
   
2. $$
   \int \frac{A}{(x-\alpha)^k\sqrt{ax^2 + bx + c}}dx
   $$
   
   
   
3. $$
   \int \frac{Mx + N}{(x^2 + px + q)^m\sqrt{ax^2 + bx + c}}dx
   $$

   

## The first case

> $\int \frac{P(x)}{\sqrt{ax^2 + bx + c}}dx$

Denote $P(x)$ as:
$$
P(x) = a_mx^m + \cdots + a_1 x + a_0
$$


Suppose:
$$
 V_m = \int \frac{x^m}{\sqrt{ax^2 + bx + c}}dx = \int \frac{x^m}{\sqrt{Y}}dx
$$
then:
$$
\begin{aligned}(x^{m-1}\sqrt{Y})^\prime &= (m-1)x^{m-2}\sqrt{Y} + \frac{x^{m-1}Y^\prime}{2\sqrt{Y}}\\&=\frac{2(m-1)x^{m-2}(ax^2+bx+c) + x^{m-1}(2ax+b)}{2\sqrt{Y}}\\&=ma\frac{x^m}{\sqrt{Y}} + (m-\frac{1}{2})b\frac{x^{m-1}}{\sqrt{Y}}+ (m-1)c\frac{x^{m-2}}{\sqrt{Y}}\end{aligned} 
$$
integral at the both side of the equation:
$$
 x^{m-1}\sqrt{Y} = maV_m + (m - \frac{1}{2})bV_{m-1} + (m-1)cV_{m-2}
$$


1. When $m=1$:
   $$
    V_1 = \frac{1}{a}\sqrt{Y} - \frac{b}{2a}V_0
   $$
   where $V_0$ is known.

   

2. When $m=2$:

   $\cdots$



By induction:
$$
V_m = p_{m-1}(x)\sqrt{Y} + \lambda_mV_0
$$
Thus:
$$
\int \frac{P(x)}{\sqrt{ax^2 + bx + c}}dx = \int \frac{P(x)}{\sqrt{Y}}dx = Q(x)\sqrt{Y} + \lambda\int\frac{dx}{\sqrt{Y}}
$$

## The second case

> $\int \frac{A}{(x-\alpha)^k\sqrt{ax^2 + bx + c}}dx$

Substitute:
$$
x-\alpha=\frac{1}{t}
$$
Then:
$$
\int \frac{A}{(x-\alpha)^k\sqrt{ax^2 + bx + c}}dx = -\int \frac{At^{k-1}}{\sqrt{(a\alpha^2 + b\alpha + c)t^2 + (2a\alpha + b)t + a}}dt
$$
which transforms to the first case.



## The third case

> $\int \frac{Mx + N}{(x^2 + px + q)^m\sqrt{ax^2 + bx + c}}dx$

### $ax^2 + bx + c = a(x^2 + px + q)$



Then:
$$
\begin{aligned}

\int \frac{Mx + N}{(x^2 + px + q)^m\sqrt{ax^2 + bx + c}}dx &= \frac{1}{a^m}\int \frac{Mx + N}{(ax^2 + bx + c)^{\frac{2m+1}{2}}}dx\\


&= \frac{1}{a^m}\left(\frac{M}{2a}\int\frac{2ax + b}{(ax^2 + bx + c)^{\frac{2m+1}{2}}}dx + (N - \frac{Mb}{2a})\int\frac{dx}{(ax^2 + bx + c)^{\frac{2m+1}{2}}}\right)

\end{aligned}
$$




1. The first term can be solved by substitution $t=ax^2+bx+c$



2. The second term can be solved by **[[Abel Substitution]]**

   > Substitute:
   > $$
   >  t = (\sqrt{Y})^\prime = \frac{Y^\prime}{2\sqrt{Y}} = \frac{ax + \frac{b}{2}}{\sqrt{ax^2 + bx + c}}
   > $$
   > then:
   > $$
   > \frac{dx}{Y^{\frac{2m+1}{2}}} =(\frac{4}{4ac-b^2})^m(a-t^2)^{m-1}dt
   > $$
   > thus turned into integral of polynomial.



### $ax^2+bx+c=a(x^2+p'x+q')\quad x^2+p'x+q'\ne x^2+px+q$ 



#### $p\ne p'$

**[[Fractional Linear Substitution]]** AKA **[[Mobius Transformation]]**
$$
x=\frac{\mu t + \nu}{t+1}
$$
then:
$$
x^2 + px + q = \frac{(\mu^2 + p\mu + q)t^2 + [2\mu\nu + p(\mu+\nu)+2q]t +(\nu^2 + p\nu + q)}{(t+1)^2}\\

x^2 + p^\prime x + q^\prime = \frac{(\mu^2 + p^\prime\mu + q^\prime)t^2 + [2\mu\nu + p^\prime(\mu+\nu)+2q^\prime]t +(\nu^2 + p^\prime\nu + q^\prime)}{(t+1)^2}

$$
To eliminate the one order term in the denominator:
$$
\begin{cases}
2\mu\nu + p(\mu+\nu)+2q = 0\\
2\mu\nu + p^\prime(\mu+\nu)+2q^\prime=0
\end{cases}
$$
thus $\mu \& \nu$ are roots of the equation:
$$


(p-p^\prime)z^2 + 2(q-q^\prime)z+(p^\prime q - pq^\prime) =0

$$
Necessary and sufficient condition of having two different roots is:
$$
\Delta = (q-q^\prime)^2 - (p-p^\prime)(p^\prime q - pq^\prime) > 0
$$
Equivalent to:
$$
[2(q+q^\prime) - pp^\prime]^2 > (4q-p^2)(4q^\prime - {p^\prime}^2)
$$
For $x^2+px+q$ is **indivisible**, then $4q-p^2>0$. If:

1. $4q'-p'^2<0$, the inequality holds.

2. $4q'-p'^2>0$

   then $4q - p^2 >0, 4q^\prime - {p^\prime}^2 > 0 \Rightarrow q > 0, q^\prime > 0, 4\sqrt{qq^\prime} > pp^\prime$ 

   thus
   $$
    \begin{aligned}\ [2(q+q^\prime) - pp^\prime]^2 &\geq [4\sqrt{qq^\prime}-pp^\prime]^2 \\&= (4q-p^2)(4q^\prime - {p^\prime}^2) + 4(p\sqrt{q^\prime} - p^\prime\sqrt{q})^2\\&\geq (4q-p^2)(4q^\prime - {p^\prime}^2)\end{aligned}
   
   $$
   the inequality holds.



then the integral is transformed into:
$$


\int \frac{Mx + N}{(x^2 + px + q)^m\sqrt{ax^2 + bx + c}}dx \to \int \frac{P(t)}{(t^2 + \lambda)^m\sqrt{\alpha t^2 + \beta}}dt

$$
where $\frac{P(t)}{(t^2+\lambda)^m}$ can be decompose into partial fractions.

Then the integral becomes the sum of integrals in the shape of:
$$
\int \frac{At + B}{(t^2 + \lambda)^k\sqrt{\alpha t^2 + \beta}}dt \qquad(k=1,2,\cdots,m)
$$


#### $p=p'$



Substitution $x=t-\frac{p}{2}$

then the integral is transformed into the above shape :
$$
\int \frac{At + B}{(t^2 + \lambda)^k\sqrt{\alpha t^2 + \beta}}dt=

\frac{A}{\alpha}\int \frac{\alpha tdt}{(t^2 + \lambda)^k\sqrt{\alpha t^2 + \beta}} + B\int \frac{dt}{(t^2 + \lambda)^k\sqrt{\alpha t^2 + \beta}}

$$
where:

1. The first part can be solved by substitution $u=\sqrt{\alpha t^2+\beta}$

   

2. The second part:

   

   Use **[[Abel Substitution]]** $u=\frac{\alpha t}{\sqrt{\alpha t^2+\beta}}$

   

   then the second part:
   $$
   
   
   \frac{dt}{(t^2 + \lambda)^m\sqrt{\alpha t^2 + \beta}} = \alpha^m\int\frac{(a-u^2)^{m-1}}{[(\beta - \alpha\lambda)u^2 + \lambda\alpha^2]^m}du
   $$
   

