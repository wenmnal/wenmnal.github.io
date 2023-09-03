# Quantum Mechanics

球坐标系下角动量算符 

$$\begin{aligned}
        \mel{\boldsymbol{x}}{L_{x}}{\alpha} &= -\mathrm{i}\hbar\qty(-\sin\phi\pdv{\theta}-\cot\theta\cos\phi\pdv{\phi})\innerproduct{\boldsymbol{x}}{\alpha} \\
        \mel{\boldsymbol{x}}{L_{y}}{\alpha} &= -\mathrm{i}\hbar\qty(\cos\phi\pdv{\theta}-\cot\theta\sin\phi\pdv{\phi})\innerproduct{\boldsymbol{x}}{\alpha} \\
        \mel{\boldsymbol{x}}{L_{z}}{\alpha} &= -\mathrm{i}\hbar\pdv{\phi}\innerproduct{\boldsymbol{x}}{\boldsymbol{a}}\\
        \mel{\boldsymbol{x}}{L_\pm}{\alpha}&=-\mathrm{i}\hbar\qty(\pm \mathrm{i}\pdv{\theta}-\cot\theta\pdv{\phi})\innerproduct{\boldsymbol{x}}{\alpha}\\
\end{aligned}$$ 
    
Legendre多项式 
    
$$\begin{aligned}
    &P_0(x) = 1  && P_3(x) = \frac12 (5x^3 - 3x) \\
    &P_1(x) = x  && P_4(x) = \frac18 (35x^4 - 30x^2 + 3) \\
    &P_2(x) = \frac12 (3x^2 - 1) \qquad && P_5(x) = \frac18 (63x^5 - 70x^3 + 15x)~.
    \end{aligned}$$ 
    
球谐函数的公式 

$$\begin{aligned}
Y_{l}^{m}(\theta,\phi)&=(-1)^{m} \sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}P_{l}^{m}(\cos \theta)\mathrm{e}^{\mathrm{i} m \phi}\quad \text{for}\,\,\, m \ge 0\\
Y_{l}^{m}(\theta,\phi)&=(-1)^{\abs{m}} Y_{l}^{\abs{m}*}(\theta,\phi)\quad \text{for}\, \,\, m < 0\\
P_{l}^{m}(\cos \theta)&=(1-\cos ^{2} \theta)^{m / 2} \frac{\mathrm{d}^{m}}{\mathrm{d}(\cos \theta)^{m}} P_{l}(\cos \theta)(m\ge 0)\\
P_{l}(\cos  \theta)&=\frac{(-1)^{l}}{2^l l!}\frac{\mathrm{d}^{l}}{\mathrm{d}(\cos \theta)^{l}}(\cos ^{2} \theta-1)^{l} (l\ge 0)\\ 
\end{aligned}$$

$$\begin{aligned} Y_{0}^{0}(\theta,\phi)&=\frac{1}{2}\sqrt{\frac{1}{\pi}}\\\end{aligned}$$

$$\begin{aligned} Y_{1}^{-1}(\theta,\phi)&=\frac{1}{2}\sqrt{\frac{3}{2\pi}}e^{-i\phi}\sin\theta\\Y_{1}^{0}(\theta,\phi)&=\frac{1}{2}\sqrt{\frac{3}{\pi}}\cos\theta\\Y_{1}^{1}(\theta,\phi)&=-\frac{1}{2}\sqrt{\frac{3}{2\pi}}e^{i\phi}\sin\theta\\\end{aligned}$$

$$\begin{aligned} Y_{2}^{-2}(\theta,\phi)&=\frac{1}{4}\sqrt{\frac{15}{2\pi}}e^{-2i\phi}\sin^{2}\theta\\Y_{2}^{-1}(\theta,\phi)&=\frac{1}{2}\sqrt{\frac{15}{2\pi}}e^{-i\phi}\sin\theta\cos\theta\\Y_{2}^{0}(\theta,\phi)&=\frac{1}{4}\sqrt{\frac{5}{\pi}}\left(-1+3\cos^{2}\theta\right)\\Y_{2}^{1}(\theta,\phi)&=-\frac{1}{2}\sqrt{\frac{15}{2\pi}}e^{i\phi}\sin\theta\cos\theta\\Y_{2}^{2}(\theta,\phi)&=\frac{1}{4}\sqrt{\frac{15}{2\pi}}e^{2i\phi}\sin^{2}\theta\\\end{aligned}$$

Sakurai(pp-218 3.393)

$$\begin{aligned}\int \mathrm{d}\Omega& Y_{l}^{m*}(\theta,\phi)Y_{l_1}^{m_1}(\theta,\phi)Y_{l_2}^{m_2}(\theta,\phi)
     \\&=\sqrt{\frac{(2l_1+1)(2l_2+1)}{4\pi(2l+1)}}\innerproduct{l_1l_2;00}{l_2;l0}\innerproduct{l_1l_2;m_1m_2}{l_1l_2;lm}
    \end{aligned}$$ 
    
球Bessel方程

$$x^2  \frac{\mathrm{d}^{2}{y}}{\mathrm{d}{x}^{2}}  + 2x  \frac{\mathrm{d}{y}}{\mathrm{d}{x}}  + [x^2 - l(l + 1)]y = 0~.$$

球Bessel函数

$$j_l(x) = (-x)^l  \left(\frac{1}{x}  \frac{\mathrm{d}}{\mathrm{d}{x}}  \right) ^l \frac{\sin x}{x}~,$$

$$\begin{aligned}
        &j_0(x) = \frac{\sin x}{x}~,\\
        &j_1(x) = \frac{\sin x}{x^2} - \frac{\cos x}{x}~,\\
        &j_2(x) =  \left(\frac{3}{x^2} - 1 \right)  \frac{\sin x}{x} - \frac{3\cos x}{x^2}~,\\
        &j_3(x) =  \left(\frac{15}{x^3} - \frac{6}{x} \right) \frac{\sin x}{x} -  \left(\frac{15}{x^2}-1 \right) \frac{\cos x}{x}~.       
\end{aligned}$$ 
$$\begin{aligned}
            &y_0(x) = -\frac{\cos x}{x}~,\\
            &y_1(x) = -\frac{\cos x}{x^2} - \frac{\sin x}{x}~,\\
            &y_2(x) =  \left(-\frac{3}{x^2}+1 \right) \frac{\cos x}{x} - \frac{3\sin x}{x^2}~,\\
            &y_3(x) =  \left(-\frac{15}{x^3}+\frac{6}{x} \right)  \frac{\cos x}{x} -  \left(\frac{15}{x^2} - 1 \right) \frac{\sin x}{x}~.         
\end{aligned}$$ 

Mathematica代码

        l = 4; Series[SphericalBesselJ[l, x], {x, \[Infinity], 1000}] // 
        Normal // Simplify

Laplace算符

$$\begin{aligned}        \laplacian &= \frac{1}{\rho} \pdv{\rho} \qty(\rho \pdv{\rho}) + \frac{1}{\rho^2} \pdv[2]{\phi} + \pdv[2]{z}
 \\
    \laplacian &= \frac{1}{r^2} \pdv{r} \qty(r^2 \pdv{r}) + \frac{1}{r^2 \sin\theta} \pdv{\theta} \qty(\sin\theta \pdv{\theta}) + \frac{1}{r^2 \sin^2\theta} \pdv[2]{\phi}
\end{aligned}$$ 

C-G系数递推关系 

$$\begin{aligned}
\sqrt{(j\mp m)(j \pm m +1)}&\innerproduct{j_1j_2;m_1m_2}{j_1j_2;j,m \pm 1}\\=&\sqrt{(j_1\mp m_1 +1)(j_1\pm m_1)}\innerproduct{j_1j_2;m_1\mp 1,m_2}{j_1j_2;jm}\\&  +\sqrt{(j_2\mp m_2 +1)(j_2\pm m_2)}\innerproduct{j_1j_2;m_1,m_2\mp 1}{j_1j_2;jm} \\
\end{aligned}$$ 

Bessel方程

$$\dv[2]{w}{z} +\frac{1}{z}+\dv{w}{z}+\qty(1-\frac{\nu^{2}}{z^{2}})w=0$$

Wigner-Eckart 定理

$$\mel{\alpha',j'm'}{T^{(k)}_{q}}{\alpha , jm}=\innerproduct{jk;mq}{jk;j'm'}\frac{\mel*{\alpha'j'}{|T^{(k)}|}{\alpha j}}{\sqrt{2j'+1}}$$

Baker-Hausdorff 公式

$$\mathrm{e}  ^{A}B \mathrm{e} ^{-A}=\sum_{n=0}^{\infty}\frac{1}{n!}[A^{(n)},B]~.$$

其中

$$A^{(n)}\equiv\underbrace{[A,[A,\cdots,[A}_{n\text{个}},B]\cdots]
    =\sum_{m=0}^{n}(-1)^{n-m}C_{n}^{m}A^mBA^{n-m}~.$$

# Group Theory

双曲函数和差公式 

$$\begin{aligned}
        \sinh(x\pm y)&=\sinh x\cosh y\pm\cosh x\sinh y\\
        \cosh(x\pm y)&=\cosh x\cosh y\pm\sinh x\sinh y\\
        \tanh(x\pm y)&=\frac{\tanh x\pm\tanh y}{1\pm\tanh x\tanh y}\\
\end{aligned}$$ 
    
有关行列式的等式

$$\varepsilon^{pqr\cdots s}\det M =\varepsilon^{ijk\cdots m}M^{ip}M^{jq}M^{kr}\cdots M^{ms}$$

$$(\boldsymbol{M}^{-1})_{ij}=\frac{1}{ \det \boldsymbol{M}}(-1)^{i+j}\det \tilde{\boldsymbol{M}}({j\!\!\!/},{i\!\!\!/})$$

$$\det \boldsymbol{M}=\exp {\operatorname{tr}(\ln \boldsymbol{M})}$$

