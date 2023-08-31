#physics/study_note
# Chapter 18 $\displaystyle S$ - Matrix
>[!quote]  Interactions involves the creation or destruction of particles.
## The $\displaystyle S$ -Matrix 
Consider the scattering process of two particles, starting with $\displaystyle \ket{p_{1}p_{2}}^{\text in}_{\text{ realworld}}(t\to-\infty)$, ending up with $\displaystyle \ket{q_{1}q_{2}}^{\text{ out}}_{\text {realworld}}(t\to + \infty)$.
scattering amplitude $\displaystyle \mathcal{A}$ is given by
$$
\mathcal{A}=^{\text {out}}_{\text{realworld}}\langle q_{1}q_{2}|p_{1}p_{2}\rangle ^{\text{in}}_{\text{realworld}}
$$
We must recreate this amplitude using the simple-world states .We define 
$$
\mathcal{A}=^{\text {out}}_{\text{realworld}}\langle q_{1}q_{2}|p_{1}p_{2}\rangle ^{\text{in}}_{\text{realworld}}=_{\text{simpleworld}}\langle q_{1}q_{2} |\hat{S}| p_{1}p_{2}\rangle_{\text{simpleworld}}
$$
$S$ -matrix contains the amplitudes for starting with a particular ‘in’ state and ending up with a particular ‘out’ state.
## The interaction representation
$$
\hat{H}=\hat{H}_{0}+\hat{H}'
$$
$\displaystyle \hat{H}_{0}$ free part , $\displaystyle \hat{H}'$ interaction part 
>[! note] Operators in the interaction picture evolve in time via the free part $\displaystyle \hat{H}_{0}$
>$$\hat{O}_{\text{I}}(t)=\mathrm{e}^{ \mathrm{i}\hat{H}_{0}t }\hat{O}\mathrm{e}^{ -\mathrm{i}\hat{H}_{0}t }\quad \mathrm{i}\frac{\mathrm{d}\hat{O}_{\text{I}}(t)}{\mathrm{d}t}=[\hat{O}_{\text{I}}(t),\hat{H}_{0}]$$

Compare a matrix element from the Schrödinger picture to one in the interaction picture

$$
\langle \phi(t)|\hat{O} |\psi(t) \rangle=\langle \phi _{\text{I}}(t)|\mathrm{e}^{ \mathrm{i} \hat{H}_{0}t}\hat{O}\mathrm{e}^{ -\mathrm{i}\hat{H}_{0}t } | \psi _{\text{I}}(t)\rangle$$
for the matrix elements to be the same as in the Schrödinger picture
$$
\ket{\psi_{\text{I}}(t)}=\mathrm{e}^{ \mathrm{i} \hat{H}_{0}t}\ket{\psi(t)}  $$
>[!note] Equation of motion for the interaction
> $$
\mathrm{i}\frac{\mathrm{d}}{\mathrm{d}t} \ket{\psi_{\text{I}}(t)}=\hat{H}_{\text{I}}(t) \ket{\psi_{\text{I}}(t)}$$ 
 where $\displaystyle \hat{H}_{\mathrm{I}}(t)=\mathrm{e}^{ \mathrm{i}\hat{H}_{0}t }\hat{H}'\mathrm{e}^{ -\mathrm{i}\hat{H}_{0}t }$
## The interaction picture applied to scattering
Identify the simple-world states as those of the interaction picture at the start and end:
$$
\ket{\phi} _{\mathrm{simpleworld}}=\ket{\phi _{\mathrm{I}}(\pm \infty)} 
$$
All of quantum mechanical pictures are defined so that they coincide at $\displaystyle t$ = 0
$$
_{\text{simpleworld}}\langle \phi|\hat{S} | \psi\rangle _{\text{simpleworld}}=^{\text{out}}_{\text{realworld}}\langle \phi | \psi\rangle^{\text{in}} _{\text{realworld}}=\langle \phi_{\text{I}}(0) |\psi_{\text{I}}(0) \rangle 
$$
Using the time-evolution operator in the interaction picture
$$\begin{align}
_{\text{simpleworld}}\langle \phi|\hat{S} | \psi\rangle _{\text{simpleworld}}= & \langle \phi_{\text{I}}(\infty)|\hat{U}_{\text{I}}(\infty,0) \hat{U}_{\text{I}}(0,-\infty)|\psi_{\text{I}}(-\infty) \rangle  \\
= &\langle \phi_{\text{I}}(\infty)|\hat{U}_{\text{I}}(\infty,-\infty)|\psi_{\text{I}}(-\infty) \rangle  \\
= & {\text{simpleworld}}\langle \phi|\hat{U}_{\text{I}}(\infty,-\infty) | \psi\rangle _{\text{simpleworld}}
\end{align}
$$
>[!note] $\displaystyle \hat{S}$ -operator is the time-evolution operator for the interaction-picture $\displaystyle \hat{U}_{\text{I}}(t,-t)$ as $\displaystyle t\to \infty$.
## Perturbation expansion of the $\displaystyle S$-matrix
>[!note] Equation of motion for the interaction picture time-evolution operator
> $$
\mathrm{i}\frac{\mathrm{d}}{\mathrm{d}t^{2}}\hat{U}_{\text{I}}(t_{2},t_{1})=\hat{H}_{\text{I}}(t_{2})\hat{U}_{\text{I}}(t_{2},t_{1})$$ 
To circumvent the problem that $\displaystyle [\hat{H}_{\text{I}}(t_{2},),\hat{H}_\text{I}(t_{1})]\ne 0$. The solution turns out to be the **time-ordered product** $\displaystyle T[\hat{A}\hat{B}\dots]$ defined as the string arranged so that the later operators are on the left.

>[!note] Dyson's expansion 
>$$
\hat{U}_{\text{I}}(t_{2},t_{1})=T\left[ \mathrm{e}^{ -\mathrm{i}\int_{t_{1}}^{t_{2}}\mathrm{d}t \hat{H}_{\text{I}}(t)} \right]$$ 

>[!note] $\displaystyle \hat{S}$ -operator
> $$\displaystyle \hat{S}=T\left[ \mathrm{e}^{ -\mathrm{i}\int_{-\infty}^{\infty}  \, \mathrm{d}^{4}x \hat{\mathcal{H}}_{I}(x)} \right]$$  

Usually the integral in the exponent cannot be done exactly so we have to expand out the exponential in Dyson’s expansion thus:
$$
\hat{S}=T\left[ 1-\mathrm{i}\int\mathrm{d}^{4}z \hat{\mathcal{H}_{\text{I}}}(z)+\frac{(-\mathrm{i})^{2}}{2!}\int\mathrm{d}^{4}yd^{4}w \hat{\mathcal{H}}_{\text{I}}(y)\hat{\mathcal{H}}_{\text{I}}(w)+\dots   \right]
$$
## Wick theorem
>[!note] Wick theorem
> $$
T[\hat{A}\hat{B}\hat{C}\dots  \hat{Z}]=N\left[\hat{A}\hat{B}\hat{C}\dots  \hat{Z}+\begin{align}
\text{all possible} &\,\,\text{contrations of } \\
\hat{A}\hat{B}&\hat{C}\dots  \hat{Z}
\end{align}\right]$$


# Chapter 19 Expanding the $S$ -matrix: Feynman diagrams
## The example of $\displaystyle \phi^4$ theory
>[!note] Lagrangian density
$$\mathcal{L}=\frac{1}{2}\left[\partial_{\mu} \phi (x)\right]^{2}-\frac{m^{2}}{2} \phi (x)^{2}-\frac{\lambda}{4 !} \phi (x)^{4}$$ 

free part $\mathcal{L}_{0}=\frac{1}{2}\left (\partial_{\mu} \phi\right)^{2}-\frac{m^{2}}{2} \phi^{2}$ , $\hat{\mathcal{H}}_{0}=\frac{1}{2}\left[\left (\frac{\partial \hat{\phi}}{\partial t}\right)^{2}+(\boldsymbol{\nabla} \hat{\phi})^{2}+m^{2} \hat{\phi}^{2}\right]$，interacting part   $\mathcal{L}_{\mathrm{I}}=-\frac{\lambda}{4 !} \phi (x)^{4}$ , $\hat{\mathcal{H}}_{\mathrm{I}}=\frac{\lambda}{4 !} \hat{\phi}(x)^{4}$ . 
>[!example] Expand $\displaystyle S$ -matrix
>- **Step I**
 write it as a vacuum expectation value (VEV), $\displaystyle \ket{p}$ in state , $\displaystyle \ket{q}$ out state.
$$\begin{array}{l}\mathcal{A}={ }^{\text {out }}\langle q\mid p\rangle^{\text {in }}=\langle q|\hat{S}| p\rangle =(2 \pi)^{3}\left (2 E_{\boldsymbol{q}}\right)^{\frac{1}{2}}\left (2 E_{\boldsymbol{p}}\right)^{\frac{1}{2}}\left\langle 0\left|\hat{a}_{\boldsymbol{q}} \hat{S} \hat{a}_{\boldsymbol{p}}^{\dagger}\right| 0\right\rangle, \end{array}$$
where we recall that the relativistic normalization of our states means that  $|p\rangle=(2 \pi)^{\frac{3}{2}}\left (2 E_{\boldsymbol{p}}\right)^{\frac{1}{2}} \hat{a}_{\boldsymbol{p}}^{\dagger}|0\rangle$ 
>- **Step II**
Expand the $\hat{S}$ -operator using Dyson's expansion
$$\begin{aligned}\hat{S} & =T\left[\exp \left (-\mathrm{i} \int \mathrm{d}^{4} z \hat{\mathcal{H}}_{\mathrm{I}}(z)\right)\right] \\& =T\left[1-\mathrm{i} \int \mathrm{d}^{4} z \hat{\mathcal{H}}_{\mathrm{I}}(z)+\frac{(-\mathrm{i})^{2}}{2} \int \mathrm{d}^{4} y \mathrm{~d}^{4} w \hat{\mathcal{H}}_{\mathrm{I}}(y) \hat{\mathcal{H}}_{\mathrm{I}}(w)+\ldots\right] \end{aligned}$$
>- **Step III** Plug the resulting expression for the $\displaystyle \hat{S}$ -operator into the expression for the S-matrix element that we’re trying to calculate $$\mathcal{A}=\langle q|\hat{S} | p\rangle $$
>- **Step IV** Use Wick’s theorem to grind down the terms.
>-  **Step V** Make sense of a term by drawing a Feynman diagram. 

>[!note]
>- $$ \begin{aligned}
\langle 0|\hat{\phi}(z) \hat{a}_{\boldsymbol{p}}^{\dagger}| 0\rangle & =\int \frac{\mathrm{d}^{3} q}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E_{\boldsymbol{q}}\right)^{\frac{1}{2}}}\left\langle 0\left|\left(\hat{a}_{\boldsymbol{q}} \mathrm{e}^{-\mathrm{i} q \cdot z}+\hat{a}_{\boldsymbol{q}}^{\dagger} \mathrm{e}^{\mathrm{i} q \cdot z}\right) \hat{a}_{\boldsymbol{p}}^{\dagger}\right| 0\right\rangle \\
& =\int \frac{\mathrm{d}^{3} q}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E_{\boldsymbol{q}}\right)^{\frac{1}{2}}}\left\langle 0\left|\left(\hat{a}_{\boldsymbol{q}} \mathrm{e}^{-\mathrm{i} q \cdot z}+\hat{a}_{\boldsymbol{q}}^{\dagger} \mathrm{e}^{\mathrm{i} q \cdot z}\right)\right| \boldsymbol{p}\right\rangle \\
& =\int \frac{\mathrm{d}^{3} q}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E_{\boldsymbol{q}}\right)^{\frac{1}{2}}} \mathrm{e}^{-\mathrm{i} q \cdot z} \delta^{(3)}(\boldsymbol{q}-\boldsymbol{p}) \\
& =\frac{1}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E_{\boldsymbol{p}}\right)^{\frac{1}{2}}} \mathrm{e}^{-\mathrm{i} p \cdot z}
\end{aligned} $$
>- $$ \langle 0|T \hat{\phi}(y) \hat{\phi}(z)| 0\rangle=\Delta(y-z) $$
##  Anatomy of a diagram 
>[!example] Vocabulary about diagram
>-   **External lines** have one end which appears not to be connected to anything.  
>- A **vacuum diagram** has no external lines. 
>A particular connected diagram might contain:
> -   **Vertices** where lines join together. These represent interactions.
> -   **External incoming lines** represent on-mass-shell particles entering the process.  
> -    **External outgoing lines** represent on-mass-shell particles leaving the process.
> -   **Internal lines** e represent virtual particles which are off-mass-shell and therefore exist internally within the diagram.

>[!example] Feynman rules for $\displaystyle \phi ^{4}$ theory in position space  
To calculate an amplitude in the S-matrix expansion, translate a Feynman diagram into equations as follows:
>-   Each vertex contributes a factor $\displaystyle -\mathrm{i}\lambda$.   
>-   Each line gives a propagation factor $\displaystyle \Delta(x-y)$, where $x$ and $y$ are the start and end points of the line. 
>-  External lines contribute incoming ($\displaystyle -\mathrm{i}p\cdot x$) or outgoing ($\displaystyle +\mathrm{i}p\cdot x$) waves $\displaystyle \mathrm{e}^{ \pm \mathrm{i}p \cdot x }$.  
>-   Integrate the positions of the vertices over all spacetime.    
>-   In order to get the right coefficient in front of the term divide by the symmetry factor $D$.

>[!note] Symmetry factor 
> $$D=g 2^{\beta} \prod_{n}(n !)^{\alpha_{n}}$$
$g$ : the number of permutations of vertices that leave the diagram unchanged with fixed external lines 
$\beta$  : the number of bubbles  
$\alpha_{n}$  : the number of pairs of vertices connected by  n  identical lines
## Calculations in $\displaystyle p$ space 
>[!note] Feynman rules for $\phi^{4}$  theory in momentum space
>- Each vertex contributes a factor  $-\mathrm{i} \lambda$
>- Label each internal line with a momentum  $q$  flowing along it and describe it by a propagator  $\displaystyle\frac{\mathrm{i}}{q^{2}-m^{2}+\mathrm{i} \epsilon}$ .
>- Force the sum of each momentum coming into a vertex to be equal to the momentum leaving it.
>- Integrate over unconstrained internal momenta with a measure  $\displaystyle\frac{\mathrm{d}^{4} q}{(2 \pi)^{4}}$ .
>- External lines contribute a factor 1.
>- Divide by the symmetry factor.
>- Include an overall energy-momentum conserving delta function for each diagram.

# Chapter 20 scattering theory

