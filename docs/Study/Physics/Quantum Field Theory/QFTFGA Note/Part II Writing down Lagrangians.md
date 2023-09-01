# Chapter 5 Continuous systems 
## Lagrangians and Hamiltonians
!!! example "Lagrangians $\displaystyle L(q_{i},\dot{q}_{i})$"
     Euler-Lagrange equation $\displaystyle \frac{ \partial L }{ \partial q_{i} }-\frac{\mathrm{d}}{\mathrm{d}t}\frac{ \partial L }{ \partial \dot{q}_{i} }=0$

    Canonical momentum $\displaystyle p_{i}=\frac{ \partial L }{ \partial \dot{q_{i}} }\implies \frac{\mathrm{d}}{\mathrm{d}t}(p_{i}\dot{q}_{i}-L)=0$

    Hamiltonian $\displaystyle H=p_{i}\dot{q}_{i}-L\implies \frac{\mathrm{d}H}{\mathrm{d}t}=0$

    Hamilton's equation 

    $\frac{\partial H}{\partial p_{i}} =\dot{q}_{i},\quad \frac{\partial H }{ \partial q_{i} } =- \dot{p}_{i}$

    Poisson bracket 
    $\{ A,B \}_{\mathrm{PB}}=\frac{ \partial A }{ \partial q_{i} } \frac{ \partial B }{ \partial p_{i} } -\frac{ \partial A }{ \partial p_{i} } \frac{ \partial B }{ \partial q_{i} }$
       
    For any function $\displaystyle F$ $\displaystyle \frac{\mathrm{d}F}{\mathrm{d}t}=\frac{ \partial F }{ \partial t }+\{ F,H \}_{\mathrm{PB}}$

    In quantum mechanics $\displaystyle \{ A, B \}_{\mathrm{PB}}\to \frac{1}{\mathrm{i\hbar}}\langle [\hat{A},\hat{B}] \rangle$
## A charged particle in an electromagnetic field 
!!! example Electromagnetic field 
       Lagrangians (Free particle): $\displaystyle L=- \frac{mc^{2}}{\gamma}$
       Electromagnetic field tensor 
       
    $$F_{\mu \nu}=\left(\begin{array}{cccc}
    0 & E^{1} & E^{2} & E^{3} \\
    -E^{1} & 0 & -B^{3} & B^{2} \\
    -E^{2} & B^{3} & 0 & -B^{1} \\
    -E^{3} & -B^{2} & B^{1} & 0
    \end{array}\right)\qquad F^{\mu \nu}=\left(\begin{array}{cccc}
     0 & -E^{1} & -E^{2} & -E^{3} \\
     E^{1} & 0 & -B^{3} & B^{2} \\
    E^{2} & B^{3} & 0 & -B^{1} \\
    E^{3} & -B^{2} & B^{1} & 0
    \end{array}\right)\quad F_{\mu \nu}F^{\mu \nu}=2(\boldsymbol{B}^{2}-\boldsymbol{E}^{2})$$

Electromagnetic lagrangian $L=-\frac{1}{4} \int \mathrm{d}^{3} x F_{\mu \nu} F^{\mu \nu}$

## Lagrangian and Hamiltonian density
!!! example Lagrangian and Hamiltonian density
    $$H=\int \mathrm{d}^{3}x\mathcal{H}\qquad L=\int  \mathrm{d}^{3}x\mathcal{L}$$

    Conjugate momentum $\displaystyle \pi (x)=\frac{ \partial \mathcal{L} }{ \partial \dot{\phi} }\implies \mathcal{H}=\pi \dot{\phi}-\mathcal{L}$
    Four-vector version of Euler-Lagrange equation 

    $$ \frac{ \partial \mathcal{L} }{ \partial \phi } -\partial_\mu\left( \frac{ \partial \mathcal{L} }{ \partial (\partial_\mu \phi) }  \right)=0 $$

# Chapter 6 A first stab at relativistic quantum mechanics
##  Kelin-Gordon equation
!!! note    "Kelin-Gordon equation"
    $$ (\partial^{2}+m^{2})\phi(x)=0 $$

which has a negative solution. Think these as positive energy antiparticles.
!!! note    
    $$\phi (x)=\left[\begin{array}{c}
    \text { Incoming positive } \\
    \text { energy particle } \\
    \propto \mathrm{e}^{-\mathrm{i}(E t-\boldsymbol{p} \cdot \boldsymbol{x})}
    \end{array}\right]+\left[\begin{array}{c}
    \text { Outgoing positive } \\
    \text { energy antiparticle } \\
    \propto \mathrm{e}^{+\mathrm{i}(E t-\boldsymbol{p} \cdot \boldsymbol{x})}
    \end{array}\right]$$

# Chapter 7 Examples of Lagrangians or how to write down a theory
## A massless scalar field 
!!! note    Lagrangian
    $$ \mathcal{L}=\frac{1}{2}\partial ^{\mu}\phi\partial_\mu \phi=\frac{1}{2}(\partial_\mu \phi)^{2}$$

!!! example 
    Using the E-L equation with

    $$\frac{\partial \mathcal{L}}{\partial \phi}=0, \quad \frac{\partial \mathcal{L}}{\partial\left (\partial_{\mu} \phi\right)}=\partial^{\mu} \phi,$$
    
    we have
    
    $$\partial_{\mu} \partial^{\mu} \phi=0 .$$
    
    This is the wave equation $\partial^{2} \phi=0$ or
    
    $$\frac{\partial^{2} \phi}{\partial t^{2}}-\nabla^{2} \phi=0,$$

    and has wave-like solutions

    $$\phi (x, t)=\sum_{\boldsymbol{p}} a_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}\left (E_{\boldsymbol{p}} t-\boldsymbol{p} \cdot \boldsymbol{x}\right)},$$

    with dispersion relation  $E_{\boldsymbol{p}}=c|\boldsymbol{p}|$ [though in our units  $c$=1]
##  A massive scalar field
!!! note   " Lagrangian"
    $$ \mathcal{L}=\frac{1}{2}\left(\partial_{\mu} \phi\right)^{2}-\frac{1}{2} m^{2} \phi^{2} $$
 
!!! example
    Using the Lagrangian

    $$\frac{\partial \mathcal{L}}{\partial \phi}=-m^{2} \phi, \quad \frac{\partial \mathcal{L}}{\partial\left (\partial_{\mu} \phi\right)}=\partial^{\mu} \phi$$

    and hence plugging into the Euler-Lagrange equation we have

    $$\left (\partial_{\mu} \partial^{\mu}+m^{2}\right) \phi=0$$
     
    The equation of motion for this field theory is the Klein-Gordon equation! The solution of these equations is again $\phi (\boldsymbol{x}, t)=a \mathrm{e}^{-\mathrm{i}\left (E_{\boldsymbol{p}} t-\boldsymbol{p} \cdot \boldsymbol{x}\right)}$ , with dispersion  $E_{\boldsymbol{p}}^{2}=   \boldsymbol{p}^{2}+m^{2}$.
## An external source 
!!! note    Lagrangian
    $$ \mathcal{L}=\frac{1}{2}[\partial_\mu \phi(x)]^{2}-\frac{1}{2}m^{2}[\phi(x)]^{2}+J(x)\phi(x) $$

!!! example Equation of motion 
    $$\left (\partial_{\mu} \partial^{\mu}+m^{2}\right) \phi (x)=J (x)$$
## The $\displaystyle \phi ^{4}$ theory
