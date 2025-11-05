



# Laplace series

Consider the functional equation  

$$
x = a + y \,\varphi(x),
\tag{1}
$$

where $\varphi$ is analytic near $a$

 then:
$$
x=a+\sum_{n\operatorname{=}1}^\infty\frac{y^n}{n!}\frac{d^{n-1}}{da^{n-1}}\left[\varphi^n(a)\right]
$$

with **remainder term** $R_n$
$$
=a+\sum_{k=1}^n\frac{y^k}{k!}\frac{\mathrm{d}^{k-1}}{\mathrm{d}a^{k-1}}\left[\varphi^k(a)\right]+\frac1{n!}\int_0^y(y-t)^n\frac{\mathrm{d}^n}{\mathrm{d}a^n}\left[\varphi^{n+1}(x)\frac{\partial x}{\partial a}\right]_{y=t}\mathrm{d}t
$$

# Proof of the theory

## First method

Write $x(y)$ as follows (expand at $(x,y)=(a,0)$):
$$
x=\sum_{n\operatorname{=}0}^\infty{c_ny^n}=f(y)
$$
thus (**Residue Theorem**):
$$
c_n=\frac{1}{2\pi i}\oint_L\frac{f(y)}{y^{n+1}}dy
$$
substitution $y=f^{-1}(t)=g(t)$:
$$
c_n=\frac{1}{2\pi i}\oint _{L'}\frac{tg'(t)}{g^{n+1}(t)}dt
$$
notice that:
$$
\frac{zg'(z)}{g(z)^{n+1}}=\frac1n\frac d{dz}\left(\frac z{g(z)^n}\right)+\frac1n\frac1{g(z)^n}
$$
where:
$$
\oint_{L'}\frac1n\frac d{dt}\left(\frac t{g^n(t)}\right)=0
$$
for it is the derivative of **an analytical function** (**Cauchy–Goursat Theorem**)

thus (**Residue Theorem**):
$$
c_n=\frac{1}{2\pi i}\oint _{L'}\frac{\left (\frac{z-a}{g(z)}\right )^n}{(z-a)^{n}}dz=\frac{1}{n!}\frac{d^{n-1}}{dz^{n-1}}\left(\frac{z-a}{g(z)}\right)^{n}\bigg|_{z=0}
$$
**Q.E.D.**

------

## Second method

Write $x$ as a function of $a\& y$
$$
x=a+y\varphi(x)\Rightarrow\begin{cases}&\frac{\partial x}{\partial y}=\varphi(x)+y\varphi^{\prime}(x)\frac{\partial x}{\partial y}\\&\frac{\partial x}{\partial a}=1+y\varphi^{\prime}(x)\frac{\partial x}{\partial a}&\end{cases}
$$
thus:
$$
\frac{\partial x}{\partial y}=\frac{\varphi(x)}{1-y\varphi^{\prime}(x)}=\varphi(x)\frac{\partial x}{\partial a}
$$
thus:
$$
\frac{\partial^2x}{\partial y^2}=\frac\partial{\partial y}\left(\varphi(x)\frac{\partial x}{\partial a}\right)=\frac\partial{\partial a}\left(\varphi(x)\frac{\partial x}{\partial y}\right)
$$
by induction:
$$
\frac{\partial^nx}{\partial y^n}=\frac{\partial^{n-1}}{\partial a^{n-1}}\left[\varphi^n\left(x\right)\frac{\partial x}{\partial a}\right]
$$
then let $x=a, \quad \frac{\partial x}{\partial a}=1$
$$
x=a+y\varphi(x)\Rightarrow\frac{\partial^nx}{\partial y^n}\Bigg|_{x=a}=\frac{\partial^{n-1}}{\partial a^{n-1}}\bigl[\varphi^n(a)\bigr]\\x=a+\sum_{n=1}\frac{y^n}{n!}\frac{\partial^nx}{\partial y^n}=a+\sum_{n=1}\frac{y^n}{n!}\frac{\partial^{n-1}}{\partial a^{n-1}}[\varphi^n(a)]
$$
**Q.E.D.**

------

# Reminder term

By using the **second proof method** and applying **Taylor expansion**:
$$
x=a+\sum_{n=1}^m\frac{y^n}{n!}\frac{\partial^nx}{\partial y^n}+\frac{1}{n!}\int_{0}^y{(y-t)^nf^{(n+1)}(t)dt}\\=a+\sum_{n=1}^m\frac{y^n}{n!}\frac{\partial^{n-1}}{\partial a^{n-1}}[\varphi^n(a)]+\frac1 {n!}\int_0^y{(y-t)^n}\frac{d^n}{da^n}\left[\varphi ^{n+1}(x)\frac{\partial x}{\partial a}\right]_{y=t}
$$
the reminder is **Integral reminder** 

# Application

## Determine the coefficient

Apply the theorem to $y=e^x,x=\ln y$
$$
y=e^x\Rightarrow\begin{cases}y=\frac{x-0}{\varphi(x)}+1\\\\\varphi(x)=\frac x{e^x-1}&\end{cases}\Rightarrow x=\sum_{n=1}\frac{(y-1)^n}{n!}\frac{\partial^{n-1}}{\partial a^{n-1}}\left[\left(\frac a{e^a-1}\right)^n\right]
$$

$$
\ln\left(y\right)=\sum_{n=1}\frac{\left(y-1\right)^n}{n!}\frac{d^{n-1}}{da^{n-1}}\left[\left(\frac a{e^a-1}\right)^n\right]\\\ln y=\sum_{n=1}\frac{\left(-1\right)^{n-1}}n\left(y-1\right)^n\Rightarrow\frac1{n!}\frac{d^n}{da^n}\left[\left(\frac a{e^a-1}\right)^{n+1}\right]=(-1)^n
$$

which is useful.

## Skewed extreme point

![image-20250826140701754](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20250826140701754.png)

For a function like above, we are asked to prove that $x_1+x_2>g(m)$ ,where $g(m)$ is a function of $m$.

We aim to express $x_1\& x_2$ as function of $m$ too, so the problem can be turned into a *single-variable problem*. Thus we can use **Laplace series**.

### Definition

Write $y$ as $y=f(x)-f(x_0)$, then:
$$
x=x_0+y\frac{x-x_0}{f(x)-f(x_0)}=x_0+y\varphi(x)
$$
but this will lead to a problem that:
$$
\lim _{a\rightarrow x_0}\varphi(a)=\frac 1 {f'(x_0)}=\frac 1 0
$$
thus we write $y$ as $\sqrt{f(x)-f(x_0)}$, then:
$$
x=a+y\varphi(x)=a+y\frac{x-x_0}{\sqrt{f(x)-f(x_0)}}
$$

### Process

Apply **Laplace series**
$$
\begin{aligned}&1.\:x_1(y)=a+\sum_k^n\frac{y^k}{k!}\frac{\mathrm{d}^{k-1}}{\mathrm{d}a^k-1}\left[\varphi^k(a)\right]+\cdots\\&2.\:a\to x_0,x_1(m)=x_0+\sqrt{m-f(x_0)}\varphi(x_0)+\cdots\\&3.\:x_2(m)=[x_1(m)]_{\varphi\to-\varphi}\end{aligned}
$$

### Example

1.
$$
f(x)=\frac x{\ln x}(x>1),\:m=f(x_1)=f(x_2),\:prove:x_1+x_2>2m\\\varphi(x)=\frac{x-x_0}{\sqrt{f(x)-f(x_0)}}=\frac{x-e}{\sqrt{x/\ln x-e}}\\x_1+x_2=2e+\frac{10}3(m-e)+o(m-e)\\x_1+x_2>2m\Leftrightarrow\frac{10m-4e}3>2m\Leftrightarrow m>e
$$
2.
$$
f(x)=\frac x{\ln x}(x>1),\:m=f(x_1)=f(x_2),\:prove:x_1+x_2>m(1+\ln m)\\\varphi(x)=\frac{x-x_0}{\sqrt{f(x)(1+\ln f(x))-f(x_0)(1+\ln f(x_0))}}\\x_1+x_2\sim\frac{10}9m(1+\ln m)-\frac29e>m(1+\ln m)\Leftrightarrow m(1+\ln m)>2e
$$
## Quintic equation

[[Quintic equation]]

All **Quintic equation** can be turned into the form of $x^5+x+t=0$.

Inductively, all *high-order equation* can be turned into the form of 
$$
x^n+\prod_{i=1}^{n-4}(x+t_i)=0
$$
For **Quintic equation**:
$$
x^5+x+t=0\\
x=0+(-t)\varphi(x)\Rightarrow\varphi(x)=\frac1{x^4+1}\\x(t)=\sum_{n=0}^\infty\frac1{(n+1)!}\frac{d^n}{da^n}\left(\frac1{a^4+1}\right)^{n+1}\Bigg|_{a=0}^{n+1}\\=-tF\left(\frac15,\frac25,\frac45;\frac12,\frac54;\frac12,\frac54;-\frac{5^5}{4^4}t^4\right)
$$
[[Hypergeometric function]]

## Progressive behavior of zeros in a sequence 

[[Progressive sequence]]
$$
\begin{gathered}x_n=\cot x_n\\x_n\in(n\pi,(n+1)\pi)\Rightarrow x_n=\cot(x_n-n\pi)\\x_n=z+n\pi\Rightarrow n\pi=\cot z=\cot z=\frac{\sin z}{\cos z-z\sin z}\\z=\frac1{n\pi}+\cdots\\x_n{\sim}\pi+\frac1{n\pi}\end{gathered}
$$

## Characteristic polynomial

[[Legendre polynomial]]
$$
\frac1{\sqrt{1-2xt+t^2}}=\sum_{n=0}^{\infty}P_n(x)t^n\\y=\frac{1-\sqrt{1-2xt+t^2}}t\Rightarrow y=x+t\left(\frac{y^2-1}2\right)\\y=x+\sum_{n=1}^\infty\frac{t^n}{n!}\frac{d^n}{dx^n}\left[\left(\frac{a^2-1}2\right)^n\right]\\\frac1{\sqrt{1-2xt+t^2}}=\sum_{n=0}^\infty\frac{t^n}{2!2^n}\frac{d^n}{dx^n}\left(x^2-1\right)^n\Rightarrow P_n\left(x\right)=\frac{d^n}{n!2^n\:dx^n}\left(x^2-1\right)^n
$$

$$
e^{-t^2+2x}=\sum_{n=0}^\infty\frac{H_n(x)}{n!}t^n\Rightarrow H_n(x)=(-1)^ne^{x^2}\frac{d^n}{dx^n}(e^{-x^2/2})
$$


$$
\frac{e^{-\frac{xt}{1-t}}}{1-t}=\sum_{n=0}^\infty L_n(x)t^n\Rightarrow L_n(x)=\frac{e^x}{n!}\frac{d^n}{dx^n}\left(x^ne^{-x}\right)\\
$$
