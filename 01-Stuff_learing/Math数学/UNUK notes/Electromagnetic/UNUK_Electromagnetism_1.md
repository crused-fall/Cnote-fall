## Basic Concepts and Definitions

### Charge

> **Charge**: A fundamental property of matter, measured in Coulombs (C). The elementary charge is $q_e = -e = -1.602176634 \times 10^{-19} \, \text{C}$.

> **Test Charge**: Denoted as $Q$, used to measure the force in an electric field.

>**Charge Distributions**:
>
>- **Line Charge Density**: $\lambda$, with $dq = \lambda \, d\ell$.
>- **Surface Charge Density**: $\sigma$, with $dq = \sigma \, da$.
>- **Volume Charge Density**: $\rho$, with $dq = \rho \, d\tau$.



### Electric Field

> **Definition**: The electric field $\mathbf{E}$ is defined as the force per unit test charge: $\mathbf{E} = \frac{\mathbf{F}}{Q}$.

> **Field Lines**: Integral curves of the vector field $\mathbf{E}$, satisfying 
> $$
> \frac{d}{dt} \mathbf{r}(t) = \mathbf{E}(\mathbf{r}(t))
> $$
> ![image-20251128111746161](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251128111746161.png)



### Electric Flux

> **Definition**: The flux of the electric field through a surface $S$ with unit normal $\hat{\mathbf{n}}$ is 
> $$
> \Phi_E = \int_S \mathbf{E} \cdot d\mathbf{a}
> $$
>  where $d\mathbf{a} = \hat{\mathbf{n}} \, da$.
>
> ![image-20251128111430722](C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251128111430722.png)

> **Closed Surfaces**: For a closed surface $\partial V$, the flux is 
> $$
> \Phi_E = \oint_{\partial V} \mathbf{E} \cdot d\mathbf{a}
> $$
> with the convention that $\hat{\mathbf{n}}$ points outward.



### Electric Potential

> **Definition**: The electric potential $V$ is a scalar function such that $\mathbf{E} = -\nabla V$. It is defined up to an additive constant: 
> $$
> V(\mathbf{r}) = -\int_{\mathbf{r}_0}^{\mathbf{r}} \mathbf{E} \cdot d\mathbf{l}
> $$

> **Potential Energy**: The potential energy of a test charge $Q$ is $Q V(\mathbf{r})$.



### **Electric dipole（电偶极子）**

> **Definition**:An *electric dipole* is a system consisting of two equal and opposite electric charges separated by a small distance.



### Dipole moment （偶极矩）

> **Definition**: The *electric dipole moment* is a vector defined as the product of the charge magnitude and the displacement vector from the negative charge to the positive charge. It characterizes the strength and orientation of an electric dipole.
>
> Symbolically:
> $$
> \mathbf p = q\,\mathbf d,
> $$
> where $q$ is the magnitude of each charge and $\mathbf d$ is the vector pointing from the negative to the positive charge.





### Electric Displacement

> **Definition**: In dielectric materials, the electric displacement is 
> $$
> \mathbf{D} = \epsilon_0 \mathbf{E} + \mathbf{P}
> $$
> , where $\mathbf{P}$ is the polarization density.

> **Bound Charges**:
>
> - **Surface Bound Charge**: $\sigma_b = \mathbf{P} \cdot \hat{\mathbf{n}}$.
> - **Volume Bound Charge**: $\rho_b = -\nabla \cdot \mathbf{P}$.

------

## Laws and Theorems

### Coulomb's Law

> **Statement**: The force between two point charges $q$ and $Q$ is proportional to the product of the charges and inversely proportional to the square of the distance between them.

> **Formula**: 
> $$
> \mathbf{F} = \frac{1}{4\pi\epsilon_0} \frac{q Q}{r^2} \hat{\mathbf{r}} = \frac{1}{4\pi\epsilon_0} \frac{q Q}{|\mathbf{r} - \mathbf{r}'|^3} (\mathbf{r} - \mathbf{r}')
> $$
>  
>
> where $\epsilon_0 \approx 8.8541878188 \times 10^{-12} \, \text{C}^2/\text{N·m}^2$ is the vacuum permittivity.

> **Superposition Principle**: For multiple charges, $\mathbf{F} = \sum_j \mathbf{F}_j$.



### Gauss's Law

> **Integral Form**: The flux through a closed surface is proportional to the enclosed charge: 
> $$
> \oint_{\partial V} \mathbf{E} \cdot d\mathbf{a} = \frac{q_{\text{encl}}}{\epsilon_0}
> $$
>  where $q_{\text{encl}} = \int_V \rho \, d\tau$.

> **Differential Form**: The divergence of the electric field is related to the charge density: $$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$$



### Stokes' Theorem

> **Statement**: For a smooth surface $S$ with boundary $\partial S$, 
> $$
> \oint_{\partial S} \mathbf{E} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{a}
> $$
> 

> **Application to Electrostatics**: In electrostatics, $\nabla \times \mathbf{E} = 0$, implying $\oint_{\partial S} \mathbf{E} \cdot d\mathbf{l} = 0$, indicating that the electric field is conservative.



### Divergence Theorem (Gauss-Ostrogradsky Theorem)

> **Statement**: For a vector field $\mathbf{F}$ and a volume $V$ with surface $\partial V$, 
> $$
> \oint_{\partial V} \mathbf{F} \cdot d\mathbf{a} = \int_V (\nabla \cdot \mathbf{F}) \, d\tau
> $$

> **Use**: Connects the integral and differential forms of Gauss's Law.



### Conservative Nature of Electrostatic Fields

> **Theorem**: The electrostatic field is conservative, meaning $\nabla \times \mathbf{E} = 0$, and there exists a potential function $V$ such that $\mathbf{E} = -\nabla V$.

------

## Key Formulas

### Electric Field and Potential for Point Charges

> **Electric Field of a Point Charge**: $$\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \frac{q}{|\mathbf{r} - \mathbf{r}'|^2} \hat{\mathbf{r}}$$

> **Electric Potential of a Point Charge**: $$V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \frac{q}{|\mathbf{r} - \mathbf{r}'|}$$ with the reference point at infinity ($V(\infty) = 0$).



### Superposition Principles

> **For Multiple Point Charges**: 
> $$
> \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \sum_j \frac{q_j}{|\mathbf{r} - \mathbf{r}_j'|^2} \hat{\mathbf{r}}_j, \quad V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \sum_j \frac{q_j}{|\mathbf{r} - \mathbf{r}_j'|}
> $$
> 

> **For Continuous Charge Distributions**: 
> $$
> \mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^3} (\mathbf{r} - \mathbf{r}') \, d\tau', \quad V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} \, d\tau'
> $$



### Spherically Symmetric Charge Distributions

> **Electric Field**: For a charge density $\rho(r')$ depending only on the radial distance, 
> $$
> \mathbf{E}(\mathbf{r}) = \frac{1}{\epsilon_0 r^2} \left( \int_0^r \rho(r') r'^2 \, dr' \right) \hat{\mathbf{r}} = \frac{q_{\text{encl}}}{4\pi\epsilon_0 r^2} \hat{\mathbf{r}}
> $$
>  where $q_{\text{encl}} = 4\pi \int_0^r \rho(r') r'^2 \, dr'$ is the charge enclosed within radius $r$.

> **Special Case – Uniform Surface Charge on a Sphere**:
>
> - Outside ($r > R$): $\mathbf{E} = \frac{q}{4\pi\epsilon_0 r^2} \hat{\mathbf{r}}$, where $q = 4\pi R^2 \sigma$.
> - Inside ($r < R$): $\mathbf{E} = 0$.



### Electric Flux Calculations

> **Example – Flux Through a Disc**: For a point charge $q$ at the origin and a disc of radius $R$ at height $z = h$, 
> $$
> \Phi = \frac{h}{2\epsilon_0} \left( \frac{1}{h} - \frac{1}{\sqrt{R^2 + h^2}} \right)
> $$





### Potentials in Dielectrics

> **Potential from Polarization**: 
> $$
> V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \int_V \frac{\mathbf{P}(\mathbf{r}') \cdot (\mathbf{r} - \mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^3} \, d\tau'
> $$
> This is equivalent to the potential from bound charges $\sigma_b = \mathbf{P} \cdot \hat{\mathbf{n}}$ and $\rho_b = -\nabla \cdot \mathbf{P}$.



### Gauss's Law in Dielectrics

> **Differential Form**: $$\nabla \cdot \mathbf{D} = \rho_f$$ where $\mathbf{D} = \epsilon_0 \mathbf{E} + \mathbf{P}$, and $\rho_f$ is the free charge density.



### Linear Dielectrics

> **Polarization**: 
> $$
> \mathbf{P} = \epsilon_0 \chi_e \mathbf{E}
> $$
> , where $\chi_e$ is the electric susceptibility.

> **Electric Displacement**: 
> $$
> \mathbf{D} = \epsilon_0 (1 + \chi_e) \mathbf{E} = \epsilon_0 \epsilon_r \mathbf{E}
> $$
> , where $\epsilon_r = 1 + \chi_e$ is the relative permittivity.



------

## 4. Mathematical Tools and Equations

### Coordinate Systems

> **Spherical Coordinates**:
>
> - Volume Element: $d\tau = r^2 \sin\theta \, dr \, d\theta \, d\phi$
> - Surface Element (Sphere of Radius $R$): $da = R^2 \sin\theta \, d\theta \, d\phi$

> **Cylindrical Coordinates**:
>
> - Volume Element: $d\tau = r \, dr \, d\phi \, dz$



### Partial Differential Equations

> **Poisson's Equation**: 
> $$
> \nabla^2 V = -\frac{\rho}{\epsilon_0}
> $$

> **Laplace's Equation** (in charge-free regions): 
> $$
> \nabla^2 V = 0
> $$



### Integral Theorems

> **Mean Value Theorem for Integration**: For a continuous function $f$ on a ball $\mathcal{B}_R(\mathbf{r}_0)$, there exists $\mathbf{r}_1 \in \mathcal{B}_R(\mathbf{r}_0)$ such that 
> $$
> \int_{\mathcal{B}_R(\mathbf{r}_0)} f(\mathbf{r}) \, d\tau = \frac{4\pi}{3} R^3 f(\mathbf{r}_1)
> $$



