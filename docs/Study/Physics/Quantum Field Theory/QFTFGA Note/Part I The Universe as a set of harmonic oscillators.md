# Chapter 1 Lagrangians
## Functional
Functionals : $F[f(x)]\to$ number
Functional derivative : $\displaystyle\frac{\delta F(f)}{\delta f(x)}=\lim_{ \varepsilon \to 0} \frac{F[f(x')+\varepsilon \delta(x-x') ]-F[f(x')]}{\varepsilon}$
>[!example] Example of Functional derivative :
>- $\displaystyle J[f]=\int [f(y)]^p\phi(y) \, \mathrm{d}y$ , $\displaystyle \frac{\delta J}{\delta f}=p[f(y)]^{p-1}$
>- $\displaystyle H[f]=\int_{a}^{b} g(f) \, \mathrm{d}x,\, \frac{\delta H}{\delta f}=g'[f]$
>- $\displaystyle J[f]=\int g(f')  \, \mathrm{d}x$ , $\displaystyle \frac{ \delta H }{ \delta f }=-\frac{\mathrm{d}}{\mathrm{d}x}g'[f]$ 

## Lagrangians and least action 
### Action 
$$
\displaystyle S=\int  \, \mathrm{d}tL \quad L=T-V \quad \frac{ \delta S }{ \delta x(t)}=0\implies \frac{ \delta L }{ \delta x(t)}-\frac{ \mathrm{d}L }{ \mathrm{d}\dot{x}(t)}=0
$$
### Lagrangians density 
$$
\displaystyle L=\int \, \mathrm{d}^{3} \mathcal{L} \quad S=\int \mathrm{d}t \, \mathrm{d}^{3}x \mathcal{L}=\int\mathrm{d}^{4}x\mathcal{L}=\int\mathrm{d}^4x\mathcal{L}(\phi,\partial_\mu \phi)
$$
$$
\implies \frac{ \delta S }{ \delta \phi}=\frac{ \partial \mathcal{L} }{ \partial \phi }-\partial_\mu\left( \frac{ \partial \mathcal{L} }{ \partial (\partial_\mu \phi)}  \right)=0
$$
>[!example] Example 
$\displaystyle \mathcal{L}=\frac{1}{2}(\partial_\mu \phi)^{2}-\frac{1}{2}m^{2}\phi^{2}$
$\displaystyle \frac{ \delta \mathcal{L} }{ \delta \phi }=-m^{2}\phi\quad \partial_\mu \frac{ \partial \mathcal{L} }{ \partial (\partial_\mu \phi) }=\partial_\mu \partial^{\mu}\phi=\partial^{2}\phi\quad \frac{ \delta S }{ \delta \phi}=-m^{2}\phi-\partial^{2}\phi=0\implies(\partial^{2}+m^{2})\phi=0$
>>[! note] **Notes: The derivative of tensor.**
> > $$
\color{red}\begin{align}\frac{ \partial (\partial_\mu \phi)^{2} }{ \partial (\partial_\mu \phi) } = & \frac{ \partial  }{ \partial (\partial_\mu \phi) } [g^{\alpha \beta}\partial _{\alpha}\phi \partial_{\beta}\phi]=g^{\alpha \beta}\frac{ \partial (\partial_{\alpha}\phi) }{ \partial (\partial_{\mu}\phi) }\partial_{\beta }\phi  +g^{\alpha \beta}\partial_{\alpha}\phi\frac{ \partial (\partial_{\beta}\phi) }{ \partial (\partial_{\mu}\phi) } \\= & g^{\alpha \beta}\delta_{\alpha}^{\mu}\partial_{\beta}\phi+g^{\alpha \beta}\delta_{\beta}^{\mu}\partial_{\alpha}\phi \\= & 2g^{\alpha \beta}\delta_{\alpha}^{\mu}\partial_{\beta}\phi=2\partial^{\mu}\phi
\end{align} $$



# Chapter 2 Simple harmonic oscillators
>[!quote] **First quantization: Particles behave like waves.**

>[!quote] **Second quantization: Waves behave like particles.**

 $\displaystyle \hat{H}=\frac{\hat{p}^{2}}{2m}+\frac{1}{2}m\omega^{2}\hat{x}^{2}$     $\displaystyle \hat{a}=\sqrt{ \frac{m\omega}{2\hbar} }\hat{x}+\frac{\mathrm{i}\hat{p}}{\sqrt{ 2m\omega \hbar }}\quad \hat{a}^{\dagger}=\sqrt{ \frac{m\omega}{2\hbar} }\hat{x}-\frac{\mathrm{i}\hat{p}}{\sqrt{ 2m\omega \hbar }}$      $\displaystyle [\hat{a},\hat{a}^{\dagger}]=1$ 
   $\displaystyle \hat{a}$ and $\displaystyle \hat{a}^{\dagger}$ are hermitian conjugate.
 $\displaystyle \hat{a}$ and $\displaystyle \hat{a}^{\dagger}$ operate on the state $\displaystyle \ket{n}$ :
$$
\begin{align}
\hat{a}\ket{n} = & \sqrt{ n }\ket{n-1} \\ 
\hat{a}^{\dagger}\ket{n} = & \sqrt{ n+1 }\ket{n+1} \\ 
\ket{n} = & \frac{(\hat{a}^{\dagger})^{n}}{\sqrt{ n! }}\ket{0}  
\end{align}
$$
For $N$ uncoupled simple harmonic oscillators.
$\displaystyle \hat{H}=\sum_{k=1}^{n}\hat{H}_{k} \quad \hat{H}_{k}=\frac{\hat{p}^{2}_{k}}{2m}+\frac{1}{2} m\omega^{2}_{k}\hat{x}^{2}_k$ 
Acting with an operator $\displaystyle a_{k}$ only affects the number of quanta for the $k$ th oscillator.
$$
\begin{array}{l}
\hat{a}_{k}^{\dagger}\left|n_{1}, n_{2}, \ldots, n_{rk}, \ldots\right\rangle \propto\left|n_{1}, n_{2}, \ldots, n_{k}+1, \ldots\right\rangle \\
\hat{a}_{k}\left|n_{1}, n_{2}, \ldots, n_{k}, \ldots\right\rangle \propto\left|n_{1}, n_{2}, \ldots, n_{k}-1, \ldots\right\rangle
\end{array}
$$
The operators will have the commutation rules:
$$
\begin{aligned}
{\left[\hat{a}_{k}, \hat{a}_{q}\right] } & =0 \\
{\left[\hat{a}_{k}^{\dagger}, \hat{a}_{q}^{\dagger}\right] } & =0 \\
{\left[\hat{a}_{k}, \hat{a}_{q}^{\dagger}\right] } & =\delta_{k q}
\end{aligned}
$$
$$
\hat{H}=\sum_{k=1}^{N} \hbar \omega_{k}\left(\hat{a}_{k}^{\dagger} \hat{a}_{k}+\frac{1}{2}\right)
$$
vacuum state (ground state) $\displaystyle \ket{0,0,\dots,0}$ ($\displaystyle \ket{0}$)  $\displaystyle \hat{a}_{k}\ket{0}=0\quad k=1,2,\dots,N$
A general state of the system, written as $\mid n_{1}, n_{2}, \dots, n_{N} \rangle$ is known as the **occupation number representation.**
$$
\left|n_{1}, n_{2}, \cdots, n_{N}\right\rangle=\frac{1}{\sqrt{n_{1} ! n_{2} ! \cdots n_{N} !}}\left(\hat{a}_{1}^{\dagger}\right)^{n_{1}}\left(\hat{a}_{2}^{\dagger}\right)^{n_{2}} \cdots\left(\hat{a}_{N}^{\dagger}\right)^{n_{N}}|0,0, \cdots 0\rangle
$$
More succinctly
$$
\left|\left\{n_{k}\right\}\right\rangle=\prod_{k} \frac{1}{\sqrt{n_{k}}}\left(\hat{a}_{k}^{\dagger}\right)^{n_{k}}|0\rangle
$$
# Chapter 3  Occupation number representation
Natural units , a particle in a box of size $\displaystyle L$, then  $\displaystyle \psi(x)=\frac{1}{\sqrt{ L }}\mathrm{e}^{ \mathrm{i}px }$  boundary condition $\displaystyle \psi (x)=\psi (x+L)\implies p_{m}=\frac{2\pi m}{L}$
**Occupation number representation**
Describing the many-particle system by listing the number of identical particles in each quantum state. 
$\displaystyle \ket{n_{1} ,n_{2},n_{3},\dots}$, $\displaystyle n_{i}$ represent that there are $\displaystyle n_{i}$ particles in state $\displaystyle \ket{p_{i}}$.
$$
\hat{H}\ket{n_{1},n_{2},n_{3}\dots} =\sum_{m}n_{p_{m}}E_{p_{m}}
$$
A general state builded up by using $\displaystyle \hat{a}_{k}^{\dagger}$ acting on the vacuum state $\displaystyle \ket{0}$
$$
\left|n_{1} n_{2} \cdots\right\rangle=\prod_{k} \frac{1}{\left(n_{k} !\right)^{\frac{1}{2}}}\left(\hat{a}_{k}^{\dagger}\right)^{n_{k}}|0\rangle
$$
## Indistinguishability and symmetry
$$
\hat{a}^{\dagger}_{p_{1}}\hat{a}^{\dagger}_{p_{2}}=\lambda  \hat{a}^{\dagger}_{p_{2}}\hat{a}^{\dagger}_{p_{1}}
$$
- $\displaystyle \lambda=1$ Bosons
$$
\hat{a}^{\dagger}_{p_{1}}\hat{a}^{\dagger}_{p_{2}}= \hat{a}^{\dagger}_{p_{2}}\hat{a}^{\dagger}_{p_{1}}
$$
or 
$$
\hat{a}_{1}^{\dagger}\hat{a}_{2}^{\dagger}=\hat{a}_{2}^{\dagger}\hat{a}^{\dagger}_{1}
$$
>[!note] Commutation relation
$\displaystyle [\hat{a}_{i},\hat{a}_{j}]=[\hat{a}^\dagger_{i},\hat{a}^\dagger_{j}]=0$, $\displaystyle [\hat{a}_{i},\hat{a}^\dagger_{j}]=\delta_{ij}$

acting on general state
$$
\hat{a}^{\dagger} _{i}\ket{n_{1},\dots,n_{i},\dots}=\sqrt{ n_i+1 }\ket{n_{1},\dots,n_{i},\dots} \quad\hat{a}_{i}\ket{n_{1},\dots,n_{i},\dots}=\sqrt{ n_{i} }\ket{n_{1},\dots,n_{i},\dots}
$$
- $\displaystyle \lambda=-1$ Fermions
$$
\hat{c}^\dagger_{i}\hat{c}^\dagger_{j}+\hat{c}^\dagger_{j}\hat{c}^\dagger_{i}=0\quad\left\{  \hat{c}^\dagger_{i},\hat{c}^\dagger_{j}\right\}=0\implies \hat{c}^\dagger_{i}\hat{c}^\dagger_{i}=0
$$
**Pauli exclusion principle** which means that each state can either be unoccupied or contain a single fermion.
acting on general state 
$$
\hat{c}^{\dagger} _{i}\ket{n_{1},\dots,n_{i},\dots}=(-1)^{\sum_{i}}\sqrt{ 1-n_{i}}\ket{n_{1},\dots,n_{i},\dots} \quad\hat{c}_{i}\ket{n_{1},\dots,n_{i},\dots}=(-1)^{\sum_{i}}\sqrt{ n_{i} }\ket{n_{1},\dots,n_{i},\dots}
$$
where $\displaystyle (-1)^{\sum_{i}}=(-1)^{n_{1}+n_{2}+\dots+n_{i-1}}$
### The continuum limit
$\displaystyle [\hat{a}_{\boldsymbol{p}},\hat{a}_{\boldsymbol{q}}]=\delta ^{(3)}(\boldsymbol{p}-\boldsymbol{q})$, $\displaystyle \hat{H}=\int\mathrm{d}^{3}pE_{\boldsymbol{p}}\hat{a}_{\boldsymbol{p}}\hat{a}^\dagger_{\boldsymbol{p}}$

# Chapter 4 Making second quantization work

## Filed operators
$$
\hat{\psi}^{\dagger}(\boldsymbol{x})=\frac{1}{\sqrt{ \mathcal{V} }}\sum_{\boldsymbol{p} }\hat{a}^\dagger_{\boldsymbol{p}}\mathrm{e}^{ -\mathrm{i}\boldsymbol{p}\cdot \boldsymbol{x}  }\quad\hat{\psi}(\boldsymbol{x})=\frac{1}{\sqrt{ \mathcal{V} }}\sum_{\boldsymbol{p} }\hat{a}_{\boldsymbol{p}}\mathrm{e}^{ \mathrm{i}\boldsymbol{p}\cdot \boldsymbol{x}  }
$$
creates or annihilates a particle at position $\displaystyle \boldsymbol{x}$.
>[!note] Commutation relations
> Bosons: $\displaystyle [\hat{\psi}(\boldsymbol{x}),\hat{\psi}^{\dagger}(\boldsymbol{y})]=\delta^3(\boldsymbol{x}-\boldsymbol{y})$, $\displaystyle [\hat{\psi}(\boldsymbol{x}),\hat{\psi}(\boldsymbol{y}) ]=[\hat{\psi}^{\dagger}(\boldsymbol{x}),\hat{\psi}^{\dagger}(\boldsymbol{y})]=0$
> Fermions: $\displaystyle \left\{ \hat{\psi}(\boldsymbol{x}),\hat{\psi}^{\dagger}(\boldsymbol{y}) \right\}=\delta^{3}(\boldsymbol{x}-\boldsymbol{y})$, $\displaystyle \left\{ \hat{\psi}^{\dagger}(\boldsymbol{x}),\hat{\psi}^{\dagger}(\boldsymbol{y}) \right\}=\left\{ \hat{\psi}(\boldsymbol{x}),\hat{\psi}(\boldsymbol{y}) \right\}=0$

## How to second quantize an operator
>[!note] Single-particle operator $\displaystyle \to$ many-particles operator 
>$$\hat{\mathcal{A}}=\sum_{\alpha \beta}\mathcal{A}_{\alpha \beta}\hat{a}^\dagger_{\alpha}\hat{a}_{\beta}$$
where $\displaystyle \mathcal{A}_{\alpha \beta}=\bra{\alpha}\hat{\mathcal{A}}\ket{\beta}$

The operator $\displaystyle  \hat{\mathcal{A}}$ is a sum over all processes in which you use $\displaystyle \hat{a}_{\beta}$ to remove a single particle in state $\displaystyle \ket{\beta}$, multiply it by the matrix element $\displaystyle \mathcal{A}_{\alpha \beta}$, and then use $\displaystyle \hat{a}^\dagger_{\alpha}$ to place that particle into a final state $\displaystyle \ket{\alpha}$.

