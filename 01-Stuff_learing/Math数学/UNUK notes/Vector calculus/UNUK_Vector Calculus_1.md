---
title: Notes on UNUK Real Analysis
tags:
  - math
  - Calculus
  - Applied_Math
  - School_Notes
date: 2025-11-17
---



# Definition

## C1

> **Definition - Cross Product**
>
> Given two vectors $\boldsymbol{a,b}\in\R^3$, their cross product is a vector, denoted $\boldsymbol {a × b}$ that is orthogonal to both $\boldsymbol a$ and $\boldsymbol b$ and thus orthogonal to the plane spanned by $\boldsymbol{a,b}$, and is of magnitude
>
> $$
> |\boldsymbol{a×b}|=|\boldsymbol a||\boldsymbol b|\sin(\theta_{\boldsymbol{ab}})
> $$
> with $\theta_{\boldsymbol{ab}}\in[0,\pi]$. This vector is oriented in a right-handed sense, as seen below, and can be written
> $$
> \boldsymbol{a×b}=|\boldsymbol a||\boldsymbol b|\sin(\theta_{\boldsymbol{ab}})\boldsymbol n
> $$
> 
>$$
> \mathbf{a}\times\mathbf{b}
> =
> \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k}\\
> a_1 & a_2 & a_3\\
> b_1 & b_2 & b_3
> \end{vmatrix}
> =
> (a_2 b_3 - a_3 b_2)\mathbf{i}
> + (a_3 b_1 - a_1 b_3)\mathbf{j}
> + (a_1 b_2 - a_2 b_1)\mathbf{k}.
> $$
> 
>where $\boldsymbol n$ is a unit vector orthogonal to the plane containing $\boldsymbol{a,b}$, positively oriented in a right-handed sense.
> 
>![image-20251125123116058](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251125123116058.png)
> 
>**Algorithm of Cross Product**:
> 
>1. **Linearity**:
>    $$
>    \mathbf{a}\times(\alpha\mathbf{b}+\beta\mathbf{c})=\alpha\mathbf{a}\times\mathbf{b}+\beta\mathbf{a}\times\mathbf{c}.
>    $$
> 
>2. **Anti-symmetry**
>    $$
>    \mathbf{b}\times\mathbf{a}=-\mathbf{a}\times\mathbf{b}.
>    $$
> 
>3. **Self Product**
>    $$
>    \mathbf a \times \mathbf a=0
>    $$



> **Definition - Scale Triple Product**
>
> The **Scalar triple product** involving three vectors is $\mathbf{a,b,c}$ is defined:
> $$
> (\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}
> $$
> which is equal to:
> $$
> \mathbf{c}\cdot(\mathbf{a}\times\mathbf{b})=\left|\begin{array}{ccc}c_1&c_2&c_3\\a_1&a_2&a_3\\b_1&b_2&b_3\end{array}\right|.
> $$
> denoted:
> $$
> \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})\equiv[\mathbf{a},\mathbf{b},\mathbf{c}].
> $$
> **Properties**
>
> 1. **Special value**
>    $$
>    \mathbf{a}\cdot (\mathbf{a}\times\mathbf{b}) = 0,\qquad
>    \mathbf{b}\cdot (\mathbf{a}\times\mathbf{b}) = 0.
>    $$
>
> 2. **Cyclically symmetric**
>    $$
>    \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})=\mathbf{b}\cdot(\mathbf{c}\times\mathbf{a})=\mathbf{c}\cdot(\mathbf{a}\times\mathbf{b}).
>    $$
>
> 3. **Anti-symmetric**
>    $$
>    [\mathbf{a},\mathbf{b},\mathbf{c}]=-[\mathbf{a},\mathbf{c},\mathbf{b}].
>    $$



> **Definition - Vector Triple Product**
>
> The **Vector triple product** is defined
> $$
> \mathbf{a}\times(\mathbf{b}\times\mathbf{c})
> $$
> which is:
> $$
> \mathbf{a}\times(\mathbf{b}\times\mathbf{c})=(\mathbf{a}\cdot\mathbf{c})\mathbf{b}-(\mathbf{a}\cdot\mathbf{b})\mathbf{c}.\\
> (\mathbf{a}\times\mathbf{b})\times\mathbf{c}=\mathbf{a}(\mathbf{b}\cdot\mathbf{c})-\mathbf{b}(\mathbf{a}\cdot\mathbf{c}).
> $$



> **Definition - Scalar and vector fields**
>
> **Scalar Field**
>
> A **scalar field** is a function
> $$
> f: \Omega \subset \mathbb{R}^n \to \mathbb{R},
> $$
> which assigns a real number to every point in the domain.
>
> **Vector Field**
>
> A **vector field** is a function
> $$
> \mathbf{F}: \Omega \subset \mathbb{R}^n \to \mathbb{R}^n,
> $$
> which assigns a vector to every point in the domain.



## C2

> **Definition - Gradient**
>
> Let
> $$
> f:\Omega \subset \mathbb{R}^n \to \mathbb{R}
> $$
> be a differentiable scalar field.
>  The **gradient** of $f$, denoted $\nabla f$ or $\operatorname{grad} f$, is the vector field defined by
> $$
> \nabla f(x) =
> \left(
> \frac{\partial f}{\partial x_1}(x),\,
> \frac{\partial f}{\partial x_2}(x),\,
> \ldots,\,
> \frac{\partial f}{\partial x_n}(x)
> \right).
> $$
> <img src="C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251126052813141.png" alt="image-20251126052813141" style="zoom: 67%;" /><img src="C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251126052949732.png" alt="image-20251126052949732" style="zoom: 67%;" />



> **Definition - Directional derivative**
>
> Let
> $$
> f:\Omega \subset \mathbb{R}^n \to \mathbb{R}
> $$
> be a differentiable scalar field, $\mathbf{x} \in \Omega$, and $\mathbf{v} \in \mathbb{R}^n$ a direction vector (typically a unit vector).
>
> The **directional derivative** of $f$ at $\mathbf{x}$ in the direction $\mathbf{v}$ is defined as
> $$
> D_{\mathbf{v}} f(\mathbf{x})
> =
> \lim_{t\to 0}\frac{f(\mathbf{x}+t\mathbf{v}) - f(\mathbf{x})}{t},
> $$
> provided the limit exists.
>
> 
>
> If $f$ is differentiable at $\mathbf{x}$, then
> $$
> D_{\mathbf{v}} f(\mathbf{x})
> =
> \nabla f(\mathbf{x}) \cdot \mathbf{v}.
> $$
> where $\mathbf v$ is the direction vector.



> **Definition - Operator Nabla $\nabla$**
>
> The **operator nabla** is defined:
> $$
> \nabla=\mathbf{i}\frac{\partial}{\partial x}+\mathbf{j}\frac{\partial}{\partial y}+\mathbf{k}\frac{\partial}{\partial z}
> $$
> **Operators Derived from ∇**
>
> **(1) Gradient**
>
> For a scalar field $f:\mathbb{R}^n\to\mathbb{R}$,
> $$
> \nabla f
> =
> \left(
> \frac{\partial f}{\partial x_1},\,
> \ldots,\,
> \frac{\partial f}{\partial x_n}
> \right).
> $$
> **(2) Divergence**
>
> For a vector field $\mathbf{F} = (F_1,\ldots,F_n)$,
> $$
> \nabla\cdot\mathbf{F}
> =
> \sum_{i=1}^n
> \frac{\partial F_i}{\partial x_i}.
> $$
> **(3) Curl** (defined only in $\mathbb{R}^3$)
> $$
> \nabla\times\mathbf{F}
> =
> \begin{pmatrix}
> \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \\
> \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \\
> \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y}
> \end{pmatrix}.
> $$
> **(4) Laplacian**
>
> For a scalar field $f$,
> $$
> \Delta f
> =
> \nabla\cdot(\nabla f)
> =
> \sum_{i=1}^n
> \frac{\partial^2 f}{\partial x_i^2}.
> $$





> **Definition - Gradient vector field and potential**
>
> A vector field $A$ that is the gradient of some scalar field $A = \nabla f$ is called a 
>
> **gradient vector field**. 
>
> A function $f$ whose gradient gives $A$ is called the **potential** for the gradient vector field $A$.





> ### **Definition**
>
> A **vector field** $\mathbf{F}:\Omega \subset \mathbb{R}^n \to \mathbb{R}^n$ is called **conservative** if there exists a scalar potential function
> $$
> \phi:\Omega \to \mathbb{R}
> $$
> such that
> $$
> \mathbf{F} = \nabla \phi.
> $$
> In words: a conservative field is the gradient of some scalar potential.
>
> ------
>
> ### **Equivalent Characterizations (when the domain is simply connected)**
>
> 1. **Path independence**
>     For any two points $A,B$ and any two paths $\gamma_1,\gamma_2$ from $A$ to $B$,
>    $$
>    \int_{\gamma_1} \mathbf{F}\cdot d\mathbf{r}
>    =
>    \int_{\gamma_2} \mathbf{F}\cdot d\mathbf{r}.
>    $$
>
> 2. **Zero circulation around any closed curve**
>    $$
>    \oint_{\gamma} \mathbf{F}\cdot d\mathbf{r} = 0.
>    $$



> **Definition - Divergence**
>  The **divergence** of a vector field $\mathbf{F}(x,y,z) = (F_1, F_2, F_3)$ is a scalar function defined as
> $$
> \text{div}\mathbf{ A}=\nabla\cdot\mathbf{A}=\left(\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right)\cdot(A_{x},A_{y},A_{z})=\frac{\partial A_{x}}{\partial x}+\frac{\partial A_{y}}{\partial y}+\frac{\partial A_{z}}{\partial z}.
> $$
> For a vector field $\mathbf{F}$, divergence is the trace of its Jacobian matrix:
> $$
> \nabla\cdot\mathbf{F} = \mathrm{tr}(\mathrm{D}\mathbf{F}).
> $$
> can also be express as:
> $$
> \operatorname{div}\mathbf{A}=\lim_{\delta V\to0}\frac{1}{\delta V}\iint_{\delta S}\mathbf{A}\cdot\mathbf{n}\:ds.
> $$
> ![image-20251126060445533](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251126060445533.png)



> **Definition - Curl**
>
> Let $\mathbf{F}(x,y,z) = (F_1, F_2, F_3)$ be a differentiable vector field in $\mathbb{R}^3$.
>  The **curl** of $\mathbf{F}$, denoted $\nabla \times \mathbf{F}$, is the vector field defined by
> $$
> \nabla \times \mathbf{F}
> 
> =
> \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
> \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
> F_1 & F_2 & F_3
> \end{vmatrix}=
> \left(
> \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;
> \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;
> \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}
> \right).
> $$
> The limitation definition:
> $$
> \mathbf{n}\cdot\operatorname{curl}\mathbf{A}=\lim_{\delta S\to0}\frac{1}{\delta S}\oint_{\delta C}\mathbf{A}\cdot\mathbf{d}\mathbf{r},
> $$
> ![image-20251126061111779](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251126061111779.png)
>
> It measures the local rotation (vorticity) of the vector field.





## C3

> **Definition - Oriented curve and Parametrised curve**
>
> **Parametrised Curve**
>
> - A parametrised curve is a map
>   $$
>   \gamma: I \to \mathbb{R}^n,
>   $$
>   where $I \subset \mathbb{R}$ is an interval and $\gamma$ is at least continuous (often $C^1$ or $C^\infty$).
>
> - If $\gamma'(t)\neq 0$ for all $t$, the curve is **regular**.
>
> - Different parametrisations represent the same geometric curve if they differ by a strictly monotone reparameterisation $\phi$.
>
> ------
>
> **Oriented Curve**
>
> - An oriented curve is a geometric curve together with a chosen direction.
>
> - Formally, it is an equivalence class of parametrised curves under
>   $$
>   \gamma_2 = \gamma_1 \circ \phi,
>   \qquad \phi \text{ continuous and strictly monotone}.
>   $$
>
> - Orientation is given by the increasing parameter direction.





## C4

Omit

## C5

> **Definition - Alternating tensor**
>
> A **k-tensor** $T$ on a vector space $V$ is called **alternating** if it changes sign whenever two of its arguments are exchanged:
> $$
> T(v_1,\dots,v_i,\dots,v_j,\dots,v_k)
> = -\,T(v_1,\dots,v_j,\dots,v_i,\dots,v_k)
> $$
> for any $1 \le i < j \le k$.
>
> - As a consequence of antisymmetry, if two arguments are equal, then
>
> $$
> T(v_1,\dots,v,\dots,v,\dots,v_k)=0.
> $$
>
> - Alternating tensors are exactly the **totally antisymmetric** multilinear maps of degree $k$.
> - The space of all alternating $k$-tensors on $V$ is denoted
>
> $$
> \Lambda^k(V).
> $$
>
> - Alternating tensors form the algebraic foundation of **differential forms** and the **wedge product**.





## C6

> **Definition (Curvilinear Coordinates).**
>
> Curvilinear coordinates on a region of $\mathbb{R}^n$ are a system of coordinates
> $$
> (u^1,u^2,\dots,u^n)
> $$
> obtained from a smooth, one-to-one mapping
> $$
> \mathbf{r} = \mathbf{r}(u^1,\dots,u^n),
> $$
> whose Jacobian determinant is nonzero:
> $$
> \det\!\left(\frac{\partial \mathbf{r}}{\partial u^i}\right)\neq 0.
> $$
> The coordinate curves are the images of curves with one $u^i$ varying and the others held constant. The basis vectors are
> $$
> \mathbf{e}_i=\frac{\partial \mathbf{r}}{\partial u^i},
> $$
> which need not be orthogonal or normalized. The metric tensor components
> $$
> g_{ij} = \mathbf{e}_i\cdot \mathbf{e}_j
> $$
> describe the geometry induced by the coordinate system.



> **Definition - Orthogonal coordinate system  **
>
> An orthogonal coordinate system in $\mathbb{R}^n$ is a curvilinear coordinate system
> $$
> (x^1,x^2,\dots,x^n)\mapsto \mathbf{r}(x^1,\dots,x^n)
> $$
> such that the coordinate basis vectors
> $$
> \mathbf{e}_i \;=\; \frac{\partial \mathbf{r}}{\partial x^i}
> $$
> are mutually orthogonal:
> $$
> \mathbf{e}_i \cdot \mathbf{e}_j = 0 \quad\text{for all } i\neq j.
> $$
> Equivalently, the metric tensor in these coordinates is diagonal:
> $$
> g_{ij} = \mathbf{e}_i\cdot \mathbf{e}_j = 0 \quad (i\neq j).
> $$
> In this case one may write
> $$
> \mathbf{e}_i = h_i\,\hat{\mathbf{e}}_i,
> $$
> where $h_i = \|\mathbf{e}_i\|$ are the scale factors and $\hat{\mathbf{e}}_i$ are orthonormal basis vectors.
>
> 
>
> ![image-20251127093426413](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127093426413.png)



> **Definition - Right-handed orthogonal curvilinear coordinates **
>
> If orthogonal curvilinear coordinates on $\R^3$, the triad $(e_1; e_2; e_3)$ satisfies
> $$
> \mathbf{e}_1\times\mathbf{e}_2=+\mathbf{e}_3,
> $$
> then it is called **right-handed orthogonal curvilinear coordinates**, otherwise called left-handed 

## C7

> **Definition - (Special) Orthogonal matrix**
>
> An $n × n$ matrix $L$ is called **orthogonal** if 
> $$
> LL^T = I
> $$
> An orthogonal matrix with $|L|=1$ is called *Special othogonal*



> **Definition - Cartesian tensor**
>
> A Cartesian tensor $T_{ij...l}$ of rank $r$ has $r$ indices and transforms under the special orthogonal transformation
> $$
> T_{ij...l}^{\prime}(x')=L_{ip}L_{jq}\cdots L_{ls}T_{pq...s}(x)\:.
> $$
> 

# Chapter Ⅰ

Omit

# Chapter Ⅱ

> **Theorem 11 — Characterization of Conservative Fields**
>
> Let $\mathbf{A}$ be a **gradient vector field** in a region $D$, i.e.
> $$
> \mathbf{A} = \nabla f
> $$
> for some scalar field $f$ that is continuous in $D$.
>  Then $\mathbf{A}$ is **conservative** in $D$; specifically,
> $$
> \oint_C \mathbf{A}\cdot d\mathbf{r} = 0
> $$
> for every closed path $C$ in $D$.
>
> **Conversely**, if a vector field $\mathbf{A}$ exists everywhere in a region $D$ and is conservative in $D$, then $\mathbf{A}$ is a **gradient vector field**, i.e. there exists a scalar potential $f$ such that
> $$
> \mathbf{A} = \nabla f.
> $$



> **Curl of a gradient vector field **
> $$
> \nabla\times(\nabla f)=\left|\begin{array}{ccc}\mathbf{i}&\mathbf{j}&\mathbf{k}\\\partial_x&\partial_y&\partial_z\\\partial_xf&\partial_yf&\partial_zf\end{array}\right|=\mathbf{i}(\partial_{yz}f-\partial_{zy}f)+\mathbf{j}(\partial_{zx}f-\partial_{xz}f)+\mathbf{k}(\partial_{xy}f-\partial_{yx}f)=\mathbf{0},
> $$
> **Divergence of a curl vector field  **
> $$
> \nabla\cdot(\nabla\times\mathbf{A})=(\partial_{yz}-\partial_{zy})A_x+(\partial_{zx}-\partial_{xz})A_y+(\partial_{xy}-\partial_{yx})A_z=0,
> $$
> **Curl of a curl vector field**
> $$
> \nabla\times(\nabla\times\mathbf{A})=\nabla(\nabla\cdot\mathbf{A})-\nabla^2\mathbf{A}.
> $$
> 







# Chapter Ⅲ

## Line integral

### Line integral as an ordinary definite integral

$$
\int_C\mathbf{A}(\mathbf{r})\cdot\mathbf{d}\mathbf{r}:=\int_{t_{min}}^{t_{max}}\mathbf{A}(\mathbf{r}(t))\cdot\frac{\mathrm{d}\mathbf{r}(t)}{\mathrm{d}t}\:\mathrm{d}t.
$$

**Example**

Consider a curve that is given in a parametrised form
$$
x=t,\quad y=t,\quad z=2t^2,\quad t\in[0,1]
$$
Consider a vector field $\mathbf{A}=(y,x,z)$.

Then
$$
\int_C\mathbf{A}(\mathbf{r})\cdot\mathbf{d}\mathbf{r}=\int_0^1(t,t,2t^2)\cdot(1,1,4t)\mathrm{d}t=\int_0^1(2t+8t^3)\mathrm{d}t=3.
$$


### Line integral of a scalar

$$
\int_{C}\phi\:\mathrm{dr}
$$

**Example**

Consider a curve that is given in a parametrised form
$$
x=t,\quad y=t^2,\quad z=0,\quad t\in[0,1]
$$
Consider a scalar field $\phi(x,y)=x+y^{2}$.

Then
$$
\int_{C}\phi\:\mathbf{d}\mathbf{r}=\int_{0}^{1}(t+t^{4})(1,2t,0)\mathrm{d}t=\left(\int_{0}^{1}(t+t^{4})\mathrm{d}t,\int_{0}^{1}(2t^{2}+2t^{5})\mathrm{d}t,0\right)=\left(\frac{1}{2}+\frac{1}{5},\frac{2}{3}+\frac{2}{6},0\right)=\left(\frac{7}{10},1,0\right)
$$


### Line integral of a vector field

$$
\int_C\mathbf{A}\times\mathrm{dr}
$$

**Example**

Consider a curve that is given in a parametrised form
$$
y=sin(x),z=0,\quad x\in[0,\pi]
$$
Consider a vector field $\mathbf{A}=(y,x,0)$.

Then
$$
\int_{C}\mathbf{A}\times\frac{\mathbf{dr}}{\mathrm{d}x}\mathrm{d}x=\mathbf{k}\int_{0}^{\pi}(\sin(x)\cos(x)-x)\mathrm{d}x=\mathbf{k}\frac{1}{2}(\sin^{2}(x)-x^{2})\Big|_{0}^{\pi}=-\frac{\pi^{2}}{2}\mathbf{k}.
$$




### Length of a curve

$$
L=\int_a^b\sqrt{1+(\mathrm{d}y/\mathrm{d}x)^2}\:\mathrm{d}x,
$$



## Change of variables for double integrals

$$
\iint_Df(x,y)\:\mathrm{d}x\:\mathrm{d}y=\iint_{D_0}f\big((x(u,v),y(u,v)\big)\:\left|\frac{\partial(x,y)}{\partial(u,v)}\right|\mathrm{d}u\:\mathrm{d}v
$$

![image-20251127071050434](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127071050434.png)

where
$$
\frac{\partial(x,y)}{\partial(u,v)}=\left|\begin{array}{cc}\frac{\partial x}{\partial u}&\frac{\partial x}{\partial v}\\\frac{\partial y}{\partial u}&\frac{\partial y}{\partial v}\end{array}\right|\:.
$$
**Example**
$$
\begin{array}{rcl}a^{2}=&
\left(\int_{-\infty}^{\infty}e^{-x^{2}}\:\mathrm{d}x\right)\left(\int_{-\infty}^{\infty}e^{-y^{2}}\:\mathrm{d}y\right)=\iint_{\mathbb{R}^{2}}e^{-(x^{2}+y^{2})}\:\mathrm{d}x\:\mathrm{d}y\\
\stackrel{(\mathrm{i})}{=}&\iint_{0<\rho<\rho}e^{-\rho^{2}}\:\rho\:\mathrm{d}\rho\:\mathrm{d}\phi=\int_{0}^{2\pi}\mathrm{d}\phi\int_{0}^{\infty}e^{-\rho^{2}}\:\rho\:\mathrm{d}\rho=(2\pi)\left(\frac{1}{2}\right)=\pi\end{array}
$$


## Surface integral

### Surface integral of a vector field over a parametrised surface

$$
\iint_S\mathbf{A}\cdot\mathbf{n}\:\mathrm{d}s:=\pm\int\int\mathbf{A}(\mathbf{r}(u,v))\cdot\left(\frac{\partial\mathbf{r}(u,v)}{\partial u}\times\frac{\partial\mathbf{r}(u,v)}{\partial v}\right)\mathrm{d}u\mathrm{d}v.
$$

**Example**

Consider the curved surface
$$
x^2+y^2=1,z\in[0,1]
$$
and vector field $\mathbf A=(x,z,-y)$.

The surface integral pointing outwards
$$
\begin{aligned}\iint_{S}\mathbf{A}\cdot\mathbf{n}\:\mathrm{d}s&=\int_{0}^{2\pi}\int_{0}^{1}(\cos(\theta),z,-\sin(\theta))\cdot(\cos(\theta),\sin(\theta),0)\:\mathrm{d}z\:\mathrm{d}\theta\\&=\int_{0}^{2\pi}\int_{0}^{1}(\cos^{2}(\theta)+z\sin(\theta))\:\mathrm{d}z\:\mathrm{d}\theta.\end{aligned}
$$


### Surface integral of a scalar field  

$$
\iint_Sf\mathrm ds
$$

**Example**

Consider the curved surface
$$
z=1-x^2-y^2,z\ge0
$$
and vector field $\phi=1$.
$$
\begin{aligned}\iint_{S}\mathbf{A}\cdot\mathbf{n}\:\mathrm{d}s&=\int_{0}^{2\pi}\int_{0}^{1}(\cos(\theta),z,-\sin(\theta))\cdot(\cos(\theta),\sin(\theta),0)\:\mathrm{d}z\:\mathrm{d}\theta\\&=\int_{0}^{2\pi}\int_{0}^{1}(\cos^{2}(\theta)+z\sin(\theta))\:\mathrm{d}z\:\mathrm{d}\theta.\end{aligned}
$$

$$
A=\iint_{s}ds=\iint\sqrt{1+4x^{2}+4y^{2}}\:\mathrm{d}x\mathrm{d}y.
$$





### Other forms of surface integration  

$$
\iint_Sf\mathbf{n}\:\mathrm{d}s,\quad\iint_S\mathbf{v}\times\mathbf{n}\:\mathrm{d}s.
$$

the result is a vector.



## Volume integrals  

$$
\int f(\mathbf{r})\:\mathrm{d}x\:\mathrm{d}y\:\mathrm{d}z=\int f\big(\mathbf{r}(u,v,w)\big)\:\left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|\mathrm{d}u\:\mathrm{d}v\:\mathrm{d}w
$$

where
$$
\frac{\partial(x,y,z)}{\partial(u,v,w)}=\left|\begin{array}{ccc}\frac{\partial x}{\partial u}&\frac{\partial x}{\partial v}&\frac{\partial x}{\partial w}\\\frac{\partial y}{\partial u}&\frac{\partial y}{\partial v}&\frac{\partial y}{\partial w}\\\frac{\partial z}{\partial u}&\frac{\partial z}{\partial v}&\frac{\partial z}{\partial w}\end{array}\right|
$$
**Example**

$\mathrm{A~cube~}0\leq x,y,z\leq1\:\mathrm{has~the~density~}\rho=1+xyz$

The mass is 
$$
\begin{aligned}
M&=\int_{C}\rho\:\mathrm{d}V.\\
&=\int_0^1\int_0^1\int_0^1(1+xyz)\mathrm{d}x\:\mathrm{d}y\:\mathrm{d}z.\\
&=\int_{0}^{1}\int_{0}^{1}(1+{\frac{1}{2}}yz)\:\mathrm{d}y\:\mathrm{d}z=\int_{0}^{1}(1+{\frac{1}{4}}z)\:dz=1+{\frac{1}{8}}={\frac{9}{8}}.
\end{aligned}
$$


# Chapter Ⅳ

## Theorems

> **Theorem - Stokes' Theorem**
>
> **Green’s Theorem (2D Stokes)**
>  Let $D \subset \mathbb{R}^2$ be a region with positively oriented boundary $\partial D$, and let
>  $\mathbf{F} = (P, Q)$ be a $C^1$ vector field. Then
> $$
> \oint_{\partial D} (P\,dx + Q\,dy)
> =
> \iint_{D} \left(\frac{\partial Q}{\partial y} - \frac{\partial P}{\partial x}\right)\, dA.
> $$
>
> ------
>
> **Stokes’ Theorem (3D curl–surface relation)**
>  Let $S$ be an oriented smooth surface in $\mathbb{R}^3$ with boundary $\partial S$, and let
>  $\mathbf{F}$ be a $C^1$ vector field. Then
> $$
> \oint_{\partial S} \mathbf{F}\cdot d\mathbf{r}
> =
> \iint_{S} (\nabla \times \mathbf{F})\cdot \mathbf{n}\, dS.
> $$
> ![image-20251127074317434](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127074317434.png)
>
> ------
>
> **Divergence Theorem (Gauss–Ostrogradsky)**
>  Let $V \subset \mathbb{R}^3$ be a solid region with smooth boundary $\partial V$ oriented by the outward normal, and let
>  $\mathbf{F} = (F_1,F_2,F_3)$ be a $C^1$ vector field. Then
> $$
> \iiint_{V} (\nabla \cdot \mathbf{F})\, dV
> =
> \iint_{\partial V} \mathbf{F}\cdot \mathbf{n}\, dS.
> $$
>
> ------
>
> **General Stokes’ Theorem (Differential Forms)**
>  Let $M$ be an oriented smooth $n$-manifold with boundary $\partial M$, and let $\omega$ be a smooth $(n-1)$-form on $M$. Then
> $$
> \int_{\partial M}\omega
> =
> \int_{M} d\omega.
> $$



## **Example**

1. 

Consider the vector field  
$$
\mathbf{A}=\left(\frac y{x^2+y^2},\frac{-x}{x^2+y^2},0\right).
$$
Then for most surface $S$ with boundary curve $C$ 
$$
0=\iint_S(\nabla\times\mathbf{A})\cdot\mathbf{n}\:\mathrm{d}S=\oint_C\mathbf{A}\cdot\mathbf{d}\mathbf{r}
$$
 However, for $C$ being the unit circle in the $x,y$ plane
$$
\oint_C\mathbf{A}\cdot\mathbf{d}\mathbf{r}=\int_0^{2\pi}(\sin t,-\cos t,0)\cdot(-\sin t,\cos t,0)\:\mathrm{d}t=-2\pi.
$$

> [!note]
>
> The reason why Stokes' Theorem is not available is that the vector field has a singularity at $x=y=0$.



2. 

> **Theorem - Application to Laplace equation**
>
> Let $φ$ be a scalar field that obeys Laplace’s equation in $V$ and equals zero everywhere on the boundary $S$ of $V$ . Then $φ = 0$.



> **Proof**
> $$
> \iint_S\phi\nabla\phi\cdot\mathbf{n}\:\mathrm{d}S=\iiint_V\nabla\cdot(\phi\nabla\phi)\mathrm{d}V.
> $$
>
> $$
> \nabla\cdot(\phi\nabla\phi)=\nabla\phi\cdot\nabla\phi+\phi\nabla^2\phi.
> $$
>
> $$
> \iint_{s}\phi\nabla\phi\cdot\mathbf{n}\:\mathrm{d}S=\iiint_{V}|\nabla\phi|^{2}\mathrm{d}V.
> $$
>
> $$
> \nabla\phi=0,
> $$



3. 

> **Lemma of divergence theorem**
> $$
> \iint_sf\mathbf{n}\:\mathrm{d}S=\iiint_v\nabla f\:\mathrm{d}V
> $$
> for $f$ being a scalar field.



# Chapter Ⅴ

## Index notation for Vector equations

For $\mathbf a=(a_1,a_2,a_3)$ and $\mathbf{a=b+c}$.

Then denoted as:
$$
a_i=b_i+c_i
$$


## The Einstein summation convention  

For vector $\mathbf{a,b}$
$$
\mathbf{a\cdot b}=\sum_{i=1}^na_ib_i
$$
Then denoted as
$$
\mathbf{a\cdot b}=a_ib_i
$$


## Index notation and matrix multiplication  

For the product of matrix
$$
\left(\begin{array}{ccc}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{array}\right)\left(\begin{array}{c}v_{1}\\v_{2}\\v_{3}\end{array}\right)=\left(\begin{array}{c}a_{11}v_{1}+a_{12}v_{2}+a_{13}v_{3}\\a_{21}v_{1}+a_{22}v_{2}+a_{23}v_{3}\\a_{31}v_{1}+a_{32}v_{2}+a_{33}v_{3}\end{array}\right)
$$
Then RHS can be written as
$$
a_{ij}v_j
$$
For $n\times m$ matrix $A$ and $m\times k$ matrix $B$

Their product can be expressed as 
$$
(AB)_{ij}=a_{ik}b_{kj}
$$


## The alternating tensor  

Denoted a special alternating tensor $\epsilon_{ijk}$ as
$$
\epsilon_{ijk}=\begin{cases}0\quad&\text{if any of }i,j,k\text{ are equal}\\
1\quad&\text{if}\quad(i,j,k) \text{ is even}\\
-1\quad&\text{if}\quad(i,j,k)\text{ is odd}\end{cases}
$$
Then
$$
\mathbf{a}\times\mathbf{b}=(\mathbf{a}\times\mathbf{b})_i\mathbf{e}_i=\epsilon_{ijk}a_jb_k\mathbf{e}_i.
$$

$$
\det(A)=\left|\begin{array}{ccc}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{array}\right|=\epsilon_{ijk}a_{1i}a_{2j}a_{3k}.
$$



## Alternating tensor and the Kronecker delta

The relationship between Alternating tensor and the Kronecker delta
$$
\epsilon_{ijk}\epsilon_{klm}=\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl}.
$$
Generated form
$$
\varepsilon_{i_1\cdots i_k a_{1}\cdots a_{n-k}}\,
\varepsilon_{j_1\cdots j_k a_{1}\cdots a_{n-k}}
=(n-k)!\;\delta_{\,i_1\cdots i_k}^{\;j_1\cdots j_k},
$$
where the generalized antisymmetric Kronecker symbol at the right end (also known as the stepped determinant)
$$
\delta_{\,i_1\cdots i_k}^{\;j_1\cdots j_k}
=\det\big(\delta_{i_p j_q}\big)_{p,q=1}^{k}
=\sum_{\sigma\in S_k}\operatorname{sgn}(\sigma)\prod_{p=1}^k\delta_{i_p j_{\sigma(p)}},
$$


## Grad, div and curl in index notation  

$$
(\nabla f)_i=\frac{\partial f}{\partial x_i}\quad\text{or equivalently}\quad\nabla f=\mathbf{e}_i\frac{\partial f}{\partial x_i}\equiv\mathbf{e}_i\partial_if,
$$




$$
\begin{aligned}
\nabla&=\mathbf{e}_i\partial_i.\\
\nabla\cdot\mathbf{A}&=\frac{\partial A_1}{\partial x_1}+\frac{\partial A_2}{\partial x_2}+\frac{\partial A_3}{\partial x_3}=\partial_iA_i,\\
\mathbf{A}\cdot\nabla&=A_i\partial_i.\\
(\nabla\times\mathbf{A})_i&=\epsilon_{ijk}\partial_jA_k.

\end{aligned}
$$




## Grad, div and curl applied to products of functions  

> **Leibniz-type identities for the three ∇-operators**
>
> **1. Gradient (grad)**
> For smooth functions $f,g$:
> $$
> \nabla(fg)=f\,\nabla g+g\,\nabla f.
> $$
> Thus the gradient is a derivation from $C^\infty(M)$ into the module of vector fields.
>
> ------
>
> **2. Divergence (div)**
> For any smooth function $f$ and vector field $\mathbf{A}$:
> $$
> \operatorname{div}(f\mathbf{A})
> = (\nabla f)\cdot\mathbf{A} + f\,\operatorname{div}\mathbf{A}.
> $$
> This is the Leibniz rule for a derivation acting on a $C^\infty(M)$-module of vector fields.
>
> ------
>
> **3. Curl**
> For any smooth function $f$ and vector field $\mathbf{A}$:
> $$
> \nabla\times(f\mathbf{A})
> = (\nabla f)\times\mathbf{A} + f(\nabla\times\mathbf{A}).
> $$
> This also satisfies a Leibniz-type product rule on vector fields.



# Chapter Ⅵ

## Scale factors and unit vectors

$$
\mathbf{e}_1=\frac{1}{h_1}\frac{\partial\mathbf{r}}{\partial u_1}=\frac{\mathbf{h}_1}{h_1}.
$$

where
$$
h_1=\left|\frac{\partial\mathbf{r}}{\partial u_1}\right|
$$


## Commonly used curvillinear coordinates

![image-20251127093951304](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127093951304.png)

![image-20251127094021325](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127094021325.png)

![image-20251127094036821](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127094036821.png)

**Example - Parabolic coordinates**

Consider
$$
x=x_1=2uv,\quad y=x_2=u^2-v^2,\quad z=w.
$$
Formed by 
$$
y=(\frac{x}{2v})^2-v^2 \quad y=u^2-(\frac{x}{2u})^2
$$
![image-20251127095557178](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127095557178.png)
$$
\mathbf{h}_{1}=\frac{\partial\mathbf{r}}{\partial u}=(2v,2u),\quad\Rightarrow h_{1}=2\sqrt{u^{2}+v^{2}},\quad\mathbf{e}_{1}=\frac{1}{\sqrt{u^{2}+v^{2}}}(v,u),\\\mathbf{h}_{2}=\frac{\partial\mathbf{r}}{\partial v}=(2u,-2v),\quad\Rightarrow h_{2}=2\sqrt{u^{2}+v^{2}},\quad\mathbf{e}_{2}=\frac{1}{\sqrt{u^{2}+v^{2}}}(u,-v).
$$
which implies its orthogonal



## Length, area and volume elements in curvilinear coordinates  

$$
\mathbf{dr}=\frac{\partial\mathbf{r}}{\partial u_{1}}\mathrm{d}u_{1}+\frac{\partial\mathbf{r}}{\partial u_{2}}\mathrm{d}u_{2}+\frac{\partial\mathbf{r}}{\partial u_{3}}\mathrm{d}u_{3}=h_{1}\mathbf{e}_{1}\mathrm{d}u_{1}+h_{2}\mathbf{e}_{2}\mathrm{d}u_{2}+h_{3}\mathbf{e}_{3}\mathrm{d}u_{3},
$$

$$
\mathrm{d}s^2=h_1^2\mathrm{d}u_1^2+h_2^2\mathrm{d}u_2^2+h_3^2\mathrm{d}u_3^2,
$$

$$
\mathrm{d}S=\left|\frac{\partial\mathbf{r}}{\partial u_1}\times\frac{\partial\mathbf{r}}{\partial u_2}\right|\mathrm{d}u_1\mathrm{d}u_2=h_1h_2\left|\mathbf{e}_1\times\mathbf{e}_2\right|\mathrm{d}u_1\mathrm{d}u_2=h_1h_2\mathrm{d}u_1\mathrm{d}u_2.
$$

$$
\mathrm{d}V=\left|\frac{\partial(x,y,z)}{\partial(u_{1},u_{2},u_{3})}\right|\mathrm{d}u_{1}\mathrm{d}u_{2}\mathrm{d}u_{3}=\frac{\partial\mathbf{r}}{\partial u_{1}}\cdot\left(\frac{\partial\mathbf{r}}{\partial u_{2}}\times\frac{\partial\mathbf{r}}{\partial u_{3}}\right)\mathrm{d}u_{1}\mathrm{d}u_{2}\mathrm{d}u_{3}\\=h_{1}h_{2}h_{3}\:\mathbf{e}_{1}\cdot(\mathbf{e}_{2}\times\mathbf{e}_{3})\mathrm{d}u_{1}\mathrm{d}u_{2}\mathrm{d}u_{3},
$$



## Vector differentiation in orthogonal curvilinear coordinates

1. $$
   \nabla f=\sum_i\frac{\mathbf{e}_i}{h_i}\frac{\partial f}{\partial u_i}=\frac{\mathbf{e}_1}{h_1}\frac{\partial f}{\partial u_1}+\frac{\mathbf{e}_2}{h_2}\frac{\partial f}{\partial u_2}+\frac{\mathbf{e}_3}{h_3}\frac{\partial f}{\partial u_3}
   $$

2. $$
   \begin{aligned}\nabla\cdot\mathbf{A}&=\frac{1}{h_{1}h_{2}h_{3}}\sum_{i}\frac{\partial}{\partial u_{i}}\left(\frac{h_{1}h_{3}A_{i}}{h_{i}}\right)\\&=\frac{1}{h_{1}h_{2}h_{3}}\left[\frac{\partial(h_{2}h_{3}A_{1})}{\partial u_{1}}+\frac{\partial(h_{1}h_{3}A_{2})}{\partial u_{2}}+\frac{\partial(h_{1}h_{2}A_{3})}{\partial u_{3}}\right]\end{aligned}
   $$

3. $$
   \begin{aligned}\nabla\times\mathbf{A}&=\frac{1}{h_{1}h_{2}h_{3}}\left|\begin{array}{ccc}h_{1}\mathbf{e}_{2}&h_{3}\mathbf{e}_{3}\\\frac{\partial}{\partial u_{1}}&\frac{\partial}{\partial u_{2}}&\frac{\partial}{\partial u_{3}}\\h_{1}A_{1}&h_{2}A_{2}&h_{3}A_{3}\end{array}\right|\\&=\frac{\mathbf{e}_{1}}{h_{2}h_{3}}\left(\frac{\partial(h_{3}A_{3})}{\partial u_{2}}-\frac{\partial(h_{2}A_{2})}{\partial u_{3}}\right)+\frac{\mathbf{e}_{2}}{h_{1}h_{3}}\left(\frac{\partial(h_{1}A_{1}A_{1})}{\partial u_{3}}-\frac{\partial(h_{3}A_{3})}{\partial u_{1}}\right)\\&+\frac{\mathbf{e}_{3}}{h_{1}h_{2}}\left(\frac{\partial(h_{2}A_{2})}{\partial u_{1}}-\frac{\partial(h_{1}A_{1})}{\partial u_{2}}\right)\end{aligned}
   $$

4. $$
   \begin{aligned}\nabla^{2}f&=\frac{1}{h_{1}h_{2}h_{3}}\sum_{i}\frac{\partial}{\partial u_{i}}\left(\frac{h_{1}h_{2}h_{3}}{(h_{i})^{2}}\frac{\partial f}{\partial u_{i}}\right)\\&=\frac{1}{h_{1}h_{2}h_{3}}\left[\frac{\partial}{\partial u_{1}}\left(\frac{h_{2}h_{3}}{h_{1}}\frac{\partial f}{\partial u_{1}}\right)+\frac{\partial}{\partial u_{2}}\left(\frac{h_{1}h_{3}}{h_{2}}\frac{\partial f}{\partial u_{2}}\right)+\frac{\partial}{\partial u_{3}}\left(\frac{h_{1}h_{2}}{h_{3}}\frac{\partial f}{\partial u_{3}}\right)\right]\end{aligned}
   $$



# Chapter Ⅶ

## Orthogonal transformations in two dimensions  

$$
x_1'=x_1\cos\theta+x_2\sin\theta,\quad x_2'=-x_1\sin\theta+x_2\cos\theta.
$$

![image-20251127101137999](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251127101137999.png)

thus
$$
\left(\begin{array}{c}x_1^{\prime}\\x_2^{\prime}\end{array}\right)=\left(\begin{array}{cc}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{array}\right)\left(\begin{array}{c}x_1\\x_2\end{array}\right).
$$
where $L$ can be define as
$$
L=\left(\begin{array}{cc}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{array}\right).\quad L^{-1}=\left(\begin{array}{cc}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{array}\right)
$$


## Orthogonal transformations in three dimensions

For $(x_1,x_2,x_3)\& (x_1',x_2',x_3')$ under the shift of basis under $(e_1,e_2,e_3)\&(e_1',e_2',e_3')$
$$
\frac{\partial x_i^{\prime}}{\partial x_j}=L_{ij},\quad\frac{\partial x_i}{\partial x_j^{\prime}}=L_{ji}
$$
 where
$$
L_{ij}=\mathbf{e}_i^{\prime}\cdot\mathbf{e}_j.
$$
