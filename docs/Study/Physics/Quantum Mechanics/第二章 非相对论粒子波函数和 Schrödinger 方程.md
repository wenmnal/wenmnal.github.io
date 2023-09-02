# 第二章 非相对论粒子波函数和 Schrödinger 方程
## Born 的统计解释
一个非相对论粒子的波函数 $\psi(x,y,z, t)$ 是一个单值、连续的可归一化的复函数，描述了 $t$ 时刻在空间中某一点 $(x,y,z)$ 处该粒子出现的概率密度.
根据统计解释有如下结论
1. 概率
$|\psi(\boldsymbol{r},t)|^2$ 是指在 $t$ 时刻，粒子出现在 $\boldsymbol{r}$ 处的概率密度.
2. 归一化
$\displaystyle\int_V｜\psi(\boldsymbol{r}, t)｜^2\mathrm{d}^3\boldsymbol{r}=1$，要求 $\psi(x,y,z, t)$ 是平方可积函数.
3. 力学量的期望


$$
\displaystyle\langle f(\boldsymbol{r})\rangle=\frac{\displaystyle\int_{-\infty}^{+\infty}f(\boldsymbol{r})|\psi(\boldsymbol{r})|^2\mathrm{d}^3\boldsymbol{r}}{\displaystyle\int_{-\infty}^{+\infty}|\psi(\boldsymbol{r})|^2\mathrm{d}^3\boldsymbol{r}}$$


4. 归一化常数和相角的不确定性
$\psi$ 和 $Ae^{\mathrm{i}\alpha}\psi$ 描述同一个体系（仅限于统计解释）.
5. 多粒子体系
$N$ 个粒子 $|\psi(\boldsymbol{r}_1,\boldsymbol{r}_2,\cdots,\boldsymbol{r}_N)|^2 \mathrm{d}\boldsymbol{r}_1\mathrm{d}\boldsymbol{r}_2\cdots \mathrm{d}\boldsymbol{r}_N$ 表示第 $i$ 个粒子处在 $\boldsymbol{r}_i\rightarrow\boldsymbol{r}_i+\mathrm{d}\boldsymbol{r}_i$ 的概率.
6. 波函数的参数可以是其他物理量
## 态叠加原理
### 量子力学的态叠加原理
!!! note 
	若 $\psi_1,\psi_2\cdots,\psi_n$ 为体系的可能状态，则 $c_1\psi_1+c_2\psi_2+\cdots+c_n\psi_n$ 也为体系的可能状态.

可用特定的基矢来表示任意的波函数.
!!! example  "在动量空间展开 (Fourier 变换）"

$$\displaystyle\psi(\boldsymbol{r},t)=\frac{1}{(2\pi\hbar)^\frac{3}{2}}\int\phi(\boldsymbol{p},t)e^{-\frac{\mathrm{i}}{\hbar}(Et-\boldsymbol{p\cdot r})}\mathrm{d}^3\boldsymbol{p}$$

$$\displaystyle\phi(\boldsymbol{p},t)=\frac{1}{(2\pi\hbar)^\frac{3}{2}}\int\psi(\boldsymbol{r},t)e^{\frac{\mathrm{i}}{\hbar}(Et-\boldsymbol{p\cdot r})}\mathrm{d}^3\boldsymbol{r}$$  

$|\phi(\boldsymbol{p},t)|^2d\boldsymbol{p}$ 表示具有特定动量大小的概率。
## Schrödinger 方程
坐标空间的 Schrödinger 方程

$$\displaystyle i\hbar\frac{\partial}{\partial t}\psi(\boldsymbol{x},t)=\left[-\frac{\hbar^2}{2m}\nabla^2+\hat{V}(\boldsymbol{x})\right]\psi(\boldsymbol x,t)$$

用 Hamiltonian 算符表示的 Schrödinger 方程 (General)

$$\displaystyle i\hbar\frac{\partial}{\partial t}\psi=\hat{H}\psi$$

Schrödinger 方程是量子力学的基本假设之一。
$\psi\left( \boldsymbol{x} \right)|_{x \to \infty} \to 0$ 束缚态 bound state
### 平面波
$1-\dim \psi\left( \boldsymbol{x} \right)=A \mathrm{e}^{\mathrm{i}(\boldsymbol{k}\cdot \boldsymbol{x}-\omega t)}=A \mathrm{e}^{\frac{\mathrm{i}}{\hbar}(\boldsymbol{p}\cdot \boldsymbol{x}-Et)}$
$|\phi(\boldsymbol{x})|^{2}=|A|^2$ 不可归一化
归一化和束缚态归一化不一样，称为散射态 Scattering State
### 非相对论粒子
自由粒子 $\displaystyle E=\frac{\boldsymbol{p}}{2m}$ , 平面波 $\psi(\boldsymbol{r},t)=A \mathrm{e}^{\frac{\mathrm{i}}{\hbar}(\boldsymbol{p}\cdot \boldsymbol{r}-Et)}$
$\displaystyle \mathrm{i}\hbar\frac{\partial }{\partial t}$ 作用在 $\psi(\boldsymbol{r},t)$ 上 $\implies E\psi(\boldsymbol{r},t)$, $-\mathrm{i}\hbar \nabla$ 作用在 $\psi(\boldsymbol{r},t)$ 上 $\implies\boldsymbol{p}\psi(\boldsymbol{r},t)$

$$\displaystyle \mathrm{i}\hbar\frac{\partial }{\partial t}\psi(\boldsymbol{r},t)=\frac{(-\mathrm{i}\hbar\nabla)(-\mathrm{i}\hbar\nabla)}{2m}\psi(\boldsymbol{r},t)=-\frac{\hbar ^{2}}{2m}\nabla^{2}\psi(\boldsymbol{r},t)$$


平面波叠加成波包（自由粒子）


$$
\displaystyle \psi(\boldsymbol{r},t)=\frac{1}{(2\pi\hbar)^{\frac{3}{2}}}\int \phi(\boldsymbol{p},t)\mathrm{e}^{\frac{\mathrm{i}}{\hbar}(\boldsymbol{p}\cdot \boldsymbol{r}-Et)}\rm d^{3}\boldsymbol{p}$$


对于有势场的情形 $V(\boldsymbol{r})$, Schrödinger 方程

$$
\displaystyle \mathrm{i}\hbar\frac{\partial}{\partial t}\psi(\boldsymbol{x},t)=\left[-\frac{\hbar^2}{2m}\nabla^2+\hat{V}(\boldsymbol{x})\right]\psi(\boldsymbol x,t)$$

可推广至多粒子体系（$N$ 粒子体系）$\psi(\boldsymbol{r_1},\cdots \boldsymbol{r_n},t)$

$$
\displaystyle \mathrm{i}\hbar\frac{\partial }{\partial t}\psi(\boldsymbol{r_1},\cdots \boldsymbol{r_n},t)=\left[\sum_{i}-\frac{\hbar^2}{2m_i}\nabla_i^2+\hat{V}(\boldsymbol{r_1},\cdots \boldsymbol{r_n})\right]\psi(\boldsymbol x,t)$$

## 定域的概率流守恒
归一化的属性不随时间变化
考虑 $1-\dim$ 问题，且势场为实数即 $V(\boldsymbol{x})=V^\ast(\boldsymbol{x})$ 概率密度 $\rho(x)=\psi^\ast(x,t)\psi(x,t)= \left| \psi(x,t) \right|^{2}$

$$
\frac{\mathrm{d}}{\mathrm{d}t} \int_{-\infty}^{+\infty} \rho(x) \mathrm{d}=\frac{\mathrm{d}}{\mathrm{d}t}\int_{-\infty}^{+\infty}\psi^\ast(x,t)\psi(x,t)\mathrm{d}x\qquad\frac{\partial }{\partial t}\psi^\ast\psi=\psi^\ast\frac{\partial \psi}{\partial t}+\frac{\partial \psi^\ast}{\partial t}\psi$$

由 Schrödinger 方程得

$$
\begin{aligned}
\frac{\partial }{\partial t}\psi(x,t)=\frac{1}{\mathrm{i}\hbar}\left[ -\frac{\hbar^2}{2m} \frac{\partial ^2}{\partial x^{2}}+V(x)\right] \psi(x,t)\\=\frac{\mathrm{i}\hbar}{2m}\frac{\partial ^{2}\psi(x,t)}{\partial x^{2}}-\frac{\mathrm{i}}{\hbar}V(x)\psi(x,t)
\end{aligned}$$

同理

$$
\frac{\partial \psi^\ast}{\partial t}=-\frac{\mathrm{i}\hbar}{2m}\frac{\partial ^{2}\psi^\ast}{\partial x^{2}}+\frac{\mathrm{i}}{\hbar}V(x)\psi\ast$$

则

$$
\begin{aligned}
\frac{\partial }{\partial t}\left| \psi(x,t) \right|^{2}=\frac{\mathrm{i}\hbar}{2m} \left[\psi^\ast\frac{\partial ^{2}\psi}{\partial x^{2}}-\frac{\partial ^{2}\psi^\ast}{\partial x^{2}}\psi\right]\\
=\frac{\partial }{\partial x}\frac{\mathrm{i}\hbar}{2m}\left( \psi^\ast\frac{\partial \psi}{\partial x}-\frac{\partial \psi^\ast}{\partial x}\psi\right) \\
=-\frac{\partial }{\partial x}\frac{\mathrm{i}\hbar}{2m}\left( \frac{\partial \psi^\ast}{\partial x}\psi-\psi^\ast\frac{\partial \psi}{\partial x}\right)
\end{aligned}$$

若取 $\displaystyle j(x,t)=\frac{\partial }{\partial x}\frac{\mathrm{i}\hbar}{2m}\left( \frac{\partial \psi^\ast}{\partial x}\psi-\psi^\ast\frac{\partial \psi}{\partial x}\right)$ ，则有守恒流方程 $\displaystyle \frac{\partial \rho(x,t)}{\partial t}+\frac{\partial }{\partial x}j(x,t)=0$
推广至 $3-\dim$ 情况则有 $\displaystyle \color{red}\frac{\partial \rho(\boldsymbol{x},t)}{\partial t}+\nabla\cdot \boldsymbol{j}(\boldsymbol{x},t)=0\color{red}$ 称为概率流
对全空间积分

$$
\frac{\partial }{\partial t}\int_{\infty}\rho(\boldsymbol{r},t ) \mathrm{d}^3\boldsymbol{r}=-\int_{\Omega}^{} \boldsymbol{j}\cdot \mathrm{d}\boldsymbol{S}$$

即 Schrödinger 方程满足概率守恒（实数势）
若为复数势，取 $V(x)=V_R(x)-\mathrm{i}\Gamma/2$，重复之前的计算可得

$$
\frac{\partial \rho(x,t)}{\partial t}=-\frac{\partial j(x,t)}{\partial x}-\frac{\Gamma}{\hbar}\rho(x,t)$$

对全空间积分则有 ($\tau_D$ 为粒子寿命)

$$
P(t)=\int_{-\infty}^{+\infty} \rho(x,t) \mathrm{d}x
\frac{\mathrm{d}P(t)}{\mathrm{d}t}=-\frac{\Gamma}{\hbar}P(t)=-\lambda_DP(t)=-\frac{1}{\tau_D}P(t)$$

即

$$
P(t)=P(0)\mathrm{e}^{-\lambda_Dt}=P(0)\mathrm{e}^{-t/\tau_D}$$

由 $\hat{p}=-\mathrm{i}\hbar\nabla$ , 可得 $\displaystyle \boldsymbol{j}=\operatorname{Re}(\psi^\ast\frac{\hat{p}}{m}\psi)$
用 $\psi(\boldsymbol{r},t)$ 描述体系，物理量 $\implies$ 算符

$$
\begin{aligned}
\boldsymbol{p}\to \hat{p}&=-\mathrm{i}\hbar\nabla \\
E\to \hat{H}&=-\frac{\hbar^{2}}{2m}\nabla^{2}+V(r)\\
L\to \hat{L}&=\hat{r} \times \hat{p}=\hat{r} \times (-\mathrm{i}\hbar\nabla)
\end{aligned}$$

矩阵力学物理量 $\to$ 算符状态 $\to$ 态矢
矢量空间 : 无限维复矢量空间 Hilbert 空间
一般的 $\psi(x,t) \displaystyle \psi(x,t)=\sum_{i}c_i \psi_i(x,t)$，其中 $\hat{H}\psi_i(x,t)=E_i\psi_i(x,t)$。
## 定态 Schrödinger 方程 Stationary Equation
$V(x)$ 不显含 $t$
分离变量法
$\psi(x,t)=\phi(x)f(t)$，代入 Schrödinger 方程

$$
\mathrm{i}\hbar\frac{\partial }{\partial t}\left[ \phi(x)f(t) \right] =\left[-\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^{2}}{\mathrm{d}x^{2}}+V(x) \right] \phi(x)f(t)$$

$$
\frac{\mathrm{i}\hbar}{f(t)}\frac{\mathrm{d}f(t)}{\mathrm{d}t}=\frac{1}{\phi(x)}\left[ -\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^{2}}{\mathrm{d}x^{2}}+V(x) \right]\phi(x)=E$$

即

$$
\left\{
\begin{aligned}
\mathrm{i}\hbar\frac{\mathrm{d}f(t)}{\mathrm{d}t}&=Ef(t) \\
\left[ -\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^{2}}{\mathrm{d}x^{2}}+V(x)\right] \phi(x)&=\hat{H}\phi(x)=E\phi(x)
\end{aligned}
\right.$$

1. $\displaystyle f(t)=C\mathrm{e}^{-\frac{\mathrm{i}}{\hbar}Et}\implies \psi(x,t)=\phi(x)\mathrm{e}^{-\frac{\mathrm{i}}{\hbar}Et}=\phi(x)\mathrm{e}^{-\mathrm{i}\omega t}$
2. $\hat{H}\phi_E(x)=E\phi_E(x)$ 本征值方程, $\phi_E(x)$ 是本征值为 E 的本征函数 (本征矢)。
对应了一个确定能量 $E$ 的一个波函数 $\phi_E$ 称为定态波函数, 态称为定态。
则 $\displaystyle \psi (x, t)=\phi_E (x)\mathrm{e}^{-\frac{\mathrm{i}}{\hbar}Et}$
在定态下测量一个力学量 $F (\hat{F})$
$\displaystyle \left<F \right>=\int\psi^\ast(x,t)\hat{F}\psi(x,t)\mathrm{d}x=\left<F \right>_{(0)}$ 不随时间改变
$V(x)$ 的连续性与，$\phi(x)$、$\phi^{\prime}(x)$ 的连续性
$\displaystyle\phi^{\prime\prime}(x)=-\frac{2m(E-V(x))}{\hbar^{2}}\phi(x)$
1. 若 $V(x)$ 连续, 则 $\phi(x)$ 以及 $\phi^{\prime}(x)$ 都连续
2. 若 $V(x)$ 在某一点处间断则 $\phi(x)$、$\phi^{\prime}(x)$ 也连续
3. 若 $V(x)$ 存在一阶奇点，则 $\phi(x)$ 连续 $\phi^{\prime}(x)$ 不连续
## 一维势阱
### 一维无限深势阱 Potential well
![[QM2.1.svg|#invert|600]]



在区间 $-a<x<a$
满足定态 Schrödinger 方程

$$
-\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^{2}}{\mathrm{d}x^{2}}\psi(x)=E\psi(x)$$

令 $\displaystyle k^{2}=\frac{2mE}{\hbar^{2}}$, 则有 $\psi^{\prime\prime}+k^{2}\psi(x)=0$, 可设解为 $\psi(x)=A\sin kx+B\cos kx$
加上边界条件 $\psi(-a)=\psi(a)=0$
则有

$$
\left\{\begin{aligned}
-A\sin ka+B\cos ka=0 \\
A\sin ka+B\cos ka=0
\end{aligned} \right.\longrightarrow \begin{aligned}
A\sin ka=0 \\
B\cos ka=0
\end{aligned}$$

可得
	1. $\displaystyle A=0\,,B\neq 0 \,,\cos ka=0 \,,ka=\frac{\pi}{2}n(n=2m+1,m \in \mathbb{N})$
	2. $\displaystyle A\neq 0\,,B=0 \,,\sin ka=0 \,,ka=\frac{\pi}{2}n(n=2m,m \in \mathbb{N})$
则 $\displaystyle k_{n}=\frac{n\pi}{2a}\,(n \in \mathbb{N})$ 对应能量本征值 $\displaystyle E_n=\frac{\hbar^{2}k_n^2}{2m}=\frac{n^{2}\hbar^{2}\pi^{2}}{8ma^{2}}\,(n \in \mathbb{N})$
波函数为

$$
\left\{
\begin{aligned}
\psi_n(x)=A\sin kx=A\sin \frac{n\pi x}{2a}\,\,(n=2,4,\cdots ) \\
\psi_n (x)=B\cos kx=B\cos \frac{n\pi x}{2a}\,\, (n=1, 3,\cdots )
\end{aligned}
\right.$$

归一化
$\displaystyle\int_{-a}^{a} \psi^*_n (x)\psi_n (x) \mathrm{d}=1,\,\,\implies A=B= \sqrt{\frac{1}{a}}$
归一化的波函数为

$$
\left\{
\begin{aligned}
\psi_n(x)=\sqrt{\frac{1}{a}}\sin \frac{n\pi x}{2a}\,\,(n=2,4,\cdots ) \\
\psi_n(x)=\sqrt{\frac{1}{a}}\cos \frac{n\pi x}{2a}\,\,(n=1,3,\cdots )
\end{aligned}
\right.$$

基态 $\displaystyle E_1=\frac{\hbar^{2}\pi^{2}}{8ma^{2}}$ Ground State ，第一激发态 $\displaystyle E_2=\frac{\hbar^{2}\pi^{2}}{2ma^{2}}$。
由此可得到以下的结论
-  $E_{n} \propto n^{2}$
- knot point (节点) 依次增加.
	$\displaystyle \int_{-\infty}^{+\infty}\psi ^\ast_{i}(x)\psi_{j}(x) \mathrm{d}x=\delta_{ij}$ 正交归一 Orthonormal.
- 基态 $\displaystyle \lambda_{1}=4a ,p_{1}=\frac{h}{4a}=\frac{\pi\hbar}{2a},E_{1}=\frac{\pi ^{2}\hbar ^{2}}{8ma^{2}}$ 
	$$\begin{aligned} \psi_{1}(x,t)=\sqrt{\frac{1}{a}}\mathrm{e}^{-\mathrm{i}E_{1}t/ \hbar} \cos \frac{\pi x}{2a}&=\frac{1}{2}\sqrt{\frac{1}{a}} \mathrm{e}^{-\mathrm{i}E_{1}\frac{t}{\hbar}} (\mathrm{e}^{\mathrm{i}kx}+\mathrm{e}^{-\mathrm{i}kx}) \\ &=\frac{1}{2}\sqrt{\frac{1}{a}}[\mathrm{e}^{\mathrm{i}(kx-\omega_1 t)}+\mathrm{e}^{-\mathrm{i}(kx+\omega_1 t)}] \end{aligned}$$


	可看作相反方向传播的波的叠加.
-  $n \to \infty ,\,\,\lambda_n=2a/n \longrightarrow$ Classical Situation.
- 一般的波函数

$$
\psi_i(x,t)=\sqrt{\frac{1}{a}}\mathrm{e}^{-\mathrm{i}\omega_i t/ \hbar}
\left\{
\begin{aligned}
\cos \frac{\pi x}{2a}n\quad n=1,3,5\cdots\\
\sin \frac{\pi x}{2a}n \quad n=2,4,6\cdots
\end{aligned}
\right.$$

对于一般 $t=0$ 时刻的波函数 $\psi(x,0), \displaystyle \psi(x,0)=\sum_{i}c_{i}\psi_{i}(x)$

$$
\int_{-a}^{a} \psi^\ast_i\psi(x,o) \mathrm{d}x=\int_{-a}^{a}
\psi^\ast_i \sum_{j}c_{j}\psi_{i}(x)\mathrm{d}x=\sum_{j}c_{j}\int_{-a}^{a}
\psi^\ast_i \psi_{i}(x)\mathrm{d}x=c_i$$

对于任意时刻的波函数 $\displaystyle \psi(x,t)=\sum_{i}c_{i}(t)\psi_{i}(x),$ 代入 Schrödinger 方程

$$
\mathrm{i}\hbar\sum_{i}\dot{c}{i}(t)\psi{i}(x)
=\hat{H}\psi(x,t)=\sum_{i}c_{i}(t)\hat{H}\psi_{i}(x)
=\sum_{i}c_{i}(t)E_{i}\psi_{i}(x)$$

用 $\psi^\ast_j(x)$ 乘等式两边并积分得

$$
\begin{aligned}
LHS:\int_{-a}^{a}\psi^\ast_j(x)\mathrm{i}\hbar\sum_{i}\dot{c}{i}(t)
\psi{i}(x) \mathrm{d}x =\mathrm{i}\hbar\dot{c}{j}(t)\\
RHS:\int{-a}^{a}\psi^\ast_j(x)\sum_{i}c_{i}(t)E_{i}\psi_{i}(x)
\mathrm{d}x =\mathrm{i}\hbar c_{j}E_j
\end{aligned}
\implies \mathrm{i}\hbar\dot{c}_j(t)=E_jc_j(t)$$

即

$$
c_j(t)=c_j \mathrm{e}^{-i E_j t /\hbar}$$

故

$$
\psi(x,t)=\sum_{i}c_i\mathrm{e}^{-i E_i t /\hbar} \psi_i(x)
=\sum_{i}c_i\mathrm{e}^{-i \omega_i t} \psi_i(x)$$

- 测量能量 $E$
对于定态 $\psi_i(x,t)=\mathrm{e}^{-\mathrm{i}E_i t /\hbar}\phi_i(x),\hat{H}\phi_i(x)=E_i\phi(x)$

$$
\left<E \right> = \int_{-a}^{a} \psi^\ast_i(x,t)\hat{H}\psi_i(x,t) \mathrm{d}x=E_i$$

为唯一确定的值.
对于一般态, 在特定时刻 $t=0 ,\psi(x)=\sum_{i}c_i\phi_i(x)$

$$
\begin{aligned}\left<E \right>=\int_{-a}^{a} \psi^\ast(x)\hat{H}\psi(x) \mathrm{d}x&=
\int_{-a}^{a} \sum_{i}c^\ast_i\phi^\ast_i(x) \hat{H}\sum_{j}c_j\phi_j(x)\mathrm{d}x\\&=\sum_{i}\sum_{j}c^\ast_i c_j\int_{-a}^{a} \phi^\ast_i(x)\hat{H}\phi_j(x) \mathrm{d}x
=\sum_{i}\sum_{j}c^\ast_ic_jE_j\delta_{ij}\\
&=\sum_{i}c^\ast_ic_iE_i=\sum_{i}\left| c_i \right|^{2}E_i
\end{aligned}$$

- 简并 degeneracy 当一个本征值对应多个线性无关的本征函数时称为简并.
**一维束缚态波函数的能级无简并**
$1-\dim$ bound state
设线性无关的波函数 $\psi_{1,2}$ 对应相同的能量本征值 $E$, 那么

$$
\psi_1\psi^{\prime}_2-\psi^{\prime}_1\psi_2=\text{constant}$$

i.e. Prove $(\psi_1\psi^{\prime}_2-\psi^{\prime}_1\psi_2)^{\prime}=\psi_1\psi^{\prime\prime}_2-\psi^{\prime\prime}_1\psi_2=0,$ 代入 Schrödinger 方程即证.
若一维 bound state 存在简并, $\psi_{1,2}$ 对应的能量本征值为 $E$
则 $\psi_1\psi^{\prime}_2-\psi^{\prime}1\psi_2=\text{constant}=0(\psi(x)|{x \to \infty}=0)$, 即 $\psi_1\psi^{\prime}_2=\psi^{\prime}1\psi_2$
即 $(\ln \psi_1)^\prime=(\ln \psi_2)^\prime\implies\psi_1=C\psi_2$ 故 $\psi_{1,2}$
不独立, 即**一维束缚态不存在简并**.
能量为 $E$ 的自由粒子存在简并.
简并度 $\longleftrightarrow\hat{H}$ 的对称性或体系的对称性
$\color{red}$ 对称性 $\implies$ Group theory 群论, 群, 表示
$1-\dim$ : 反演 Reflection 、平移 Translation
$2-\dim, 3-\dim$ :Degeneracy
氢原子能级有简并度
-  对于对称势 $V (x)=V (-x)$ 体系的波函数具有特定的奇偶性

$$
\displaystyle\hat{H}=-\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^{2}}{\mathrm{d}x^{2}}+V(x)$$

做对称变换 $\hat{H}(x)=\hat{H}(-x)$, 则 $\psi(x)=C\psi(-x)=C^2\psi(x)$
则 $C=\pm_1,\,\,\psi(x)=\pm\psi(-x)$
### 一维有限深势阱
束缚态, 设 $E<V_0$, 在三个区间内的波函数分别为 $\psi_{1,2,3}(x)$, 分别满足 Schrödinger 方程

$$
\left\{
\begin{aligned}
-\frac{\hbar^{2}}{2m}&\frac{\mathrm{d}^{2}\psi_{1}(x)}{\mathrm{d}x^{2}}
+V_0\psi_{1}(x)&=E\psi_{1}(x)
\\
-\frac{\hbar^{2}}{2m}&\frac{\mathrm{d}^{2}\psi_{2}(x)}{\mathrm{d}x^{2}}
&=E\psi_{2}(x)
\\
-\frac{\hbar^{2}}{2m}&\frac{\mathrm{d}^{2}\psi_{3}(x)}{\mathrm{d}x^{2}}
+V_0\psi_{3}(x)&=E\psi_{3}(x)
\end{aligned}\right.$$

令 $\displaystyle k=\sqrt{\frac{2mE}{\hbar^{2}}},k^{\prime}=\sqrt{\frac{2m(V_0-E)}{\hbar^{2}}},$ 则有

$$
\left\{
\begin{aligned}
\psi^{\prime\prime}_{1,3}(x) -k^{\prime 2}\psi_{1,3}(x)=&0\to
\psi_{1,3}(x)\sim\mathrm{e}^{\pm k^\prime x}
\\
\psi^{\prime\prime}_{2}(x)+k^{2}\psi_{2}(x) =&0
\to \psi_{2}(x)\sim \{\cos kx ,\sin kx\}
\end{aligned}
\right.$$

对于束缚态 $\psi_{1}(-\infty)=0,\,\,\psi_{3}(+\infty)=0$, 故解可设为

$$
\left\{
\begin{aligned}
\psi_{1}(x)=&A\mathrm{e}^{ k^\prime x},\\
\psi_{2}(x)=&B \cos kx +C\sin kx,\\
\psi_{3}(x)=&D\mathrm{e}^{- k^\prime x}
\end{aligned}\right.$$

加上边界条件

$$
\left\{
\begin{aligned}
\psi_{1}(-a)=\psi_{2}(-a),\,\,\psi_{2}(a)=\psi_{3}(a) \\
\psi^\prime_{1}(-a)=\psi^\prime_{2}(-a),\,\,\psi^\prime_{2}(a)=\psi^\prime_{3}(a)
\end{aligned}
\right.$$

可以得到关于 $A,B,C,D$ 的方程组

$$
\left\{
\begin{aligned}
A \mathrm{e}^{-k^\prime a}=&B\cos ka -C\sin ka\\
D\mathrm{e}^{-k^\prime a}=&B\cos ka +C\sin ka\\
Ak^{\prime} \mathrm{e}^{-k^\prime a}=&Bk\sin ka +Ck\cos ka\\
-Dk^{\prime} \mathrm{e}^{-k^\prime a}=&-Bk\sin ka +Ck\cos ka
\end{aligned}
\right.$$

即

$$
\begin{pmatrix}
\mathrm{e}^{-k^\prime a}& -\cos ka& \sin ka &0\\
0& \cos ka & \sin ka&-\mathrm{e}^{-k^\prime a} \\
k^\prime\mathrm{e}^{-k^\prime a}& -k\sin ka&-k\cos ka &0 \\
0&-k\sin ka& k\cos ka&k^\prime \mathrm{e}^{-k^\prime a}
\end{pmatrix}
\begin{pmatrix}
A\\B\\C\\D
\end{pmatrix}
=0\implies\boldsymbol{M}\boldsymbol{x}=0$$

由齐次线性方程组有非平庸解的条件 $(\det (\boldsymbol{M})=0)$ 得

$$
\left(\tan ka-\frac{k^{\prime}}{k} \right)
\left(\tan ka +\frac{k}{k^\prime} \right) =0$$

对应两组解 $\displaystyle\tan ka=\frac{k^{\prime}}{k}$ 或 $\displaystyle\tan ka =-\frac{k}{k^\prime}$ , 注意到 $\displaystyle k=\sqrt{\frac{2mE}{\hbar^{2}}},k^{\prime}=\sqrt{\frac{2m(V_0-E)}{\hbar^{2}}}$, 有 $\displaystyle k^{2}+k^{\prime2}=\frac{2mV_0}{\hbar^{2}}$
当 $\displaystyle \tan ka=\frac{k^{\prime}}{k}=\frac{k^{\prime}a}{ka}$ 时,
代入边界条件可得 $C=0,\, A=D$, 令 $\xi =ka,\eta=k^{\prime}a$, 则有

$$
\left\{
\begin{aligned}
\xi^{2}+\eta^{2}=&\frac{2mV_0a^2}{\hbar^{2}}\\
\xi\tan \xi=&\eta
\end{aligned}
\right.$$

当 $\displaystyle \tan ka=-\frac{k}{k^{\prime}}=-\frac{ka}{k^{\prime}a}$ 时,
代入边界条件可得 $B=0,\,A=-D,$ 令 $\xi =ka,\,\eta=k^{\prime}a,$ 则有

$$
\left\{
\begin{aligned}
\xi^{2}+\eta^{2}=&\frac{2mV_0a^2}{\hbar^{2}}\\
\xi\cot \xi=&-\eta
\end{aligned}
\right.$$

定性分析: 当 $V_0$ 很小时, 使 $\displaystyle\frac{2mV_0a^{2}}{\hbar^{2}}<\left( \frac{\pi}{2} \right) ^{2}$ 时有一个解. 即无论势阱有多浅, 都至少存在一个束缚态解.
### 半无限深势阱
仍然采用之前的记号, 由 Schrödinger 方程加上边界条件可得

$$
\left\{ \begin{aligned}
\psi_{1}(x)=&0 &x\le 0 \\
\psi_{2}(x)=&A\sin kx &x<0<a\\
\psi_{3}(x)=&B \mathrm{e}^{-k^\prime x}&x\ge a
\end{aligned} \right.
,\qquad
\left\{
\begin{aligned}
k\cot ka=-k^\prime \\
k^2+k^{\prime2}=\frac{2mV_0}{\hbar^{2}}
\end{aligned}
\right.$$

### 一维不对称有限深势阱
设 $\displaystyle E<V_{1,2},k=\frac{\sqrt{2mE}}{\hbar},k_1=\frac{\sqrt{2m(V_1-E)}}{\hbar},k_2=\frac{2m(V_2-E)}{\hbar}$, 由 Schrödinger 方程加上边界条件可得

$$
\left\{
\begin{aligned}
\tan (2ka)=&\frac{k(k_1+k_2)}{k^{2}-k_1k_2} \\
k^{2}+k_1^{2}=&\frac{2mV_1}{\hbar^{2}}\\
k^{2}+k_2^{2}=&\frac{2mV_2}{\hbar^{2}}
\end{aligned}
\right.$$

可数值求解得到能级.
## 高维势阱
### 二维无限深势阱

$$
V(x,y)=\left\{
\begin{aligned}
&0,\,\,(0\le x,y\le a)& \\
&\infty,\,\,\text{otherwise}&
\end{aligned}
\right.$$

设定态波函数为

$$
\left\{
\begin{aligned}
\psi&(x,y)\,\, &(0\le x,y\le a)\\
0&\,\,&\text{otherwise}
\end{aligned}
\right.$$

满足 Schrödinger 方程

$$
-\frac{\hbar^{2}}{2m}\left( \frac{\mathrm{d}2}{\mathrm{d}x^{2}}+
\frac{\mathrm{d}^{2}}{\mathrm{d}x^{2}}\right) \psi(x,y)=E\psi(x,y)$$

分离变量 $\psi(x,y)=\phi(x)\varphi(y)$, 代入得

$$
-\frac{\hbar^{2}}{2m}\left[ \frac{\phi^{\prime\prime}}{\phi(x)}
+\frac{\varphi^{\prime\prime}(y)}{\varphi(y)}\right] =E$$

设 $\displaystyle -\frac{\hbar^{2}}{2m} \frac{\phi^{\prime\prime}}{\phi(x)}=E_x,-\frac{\hbar^{2}}{2m}\frac{\varphi^{\prime\prime}(y)}{\varphi(y)}=E_y,$ 则有 $\phi(x)\sim \mathrm{e}^{\pm \mathrm{i}k_x x},\varphi(y)\sim \mathrm{e}^{\pm\mathrm{i} k_y y}$ 加上边界条件

$$
\left\{
\begin{aligned}
\phi(0)\varphi(y)=0,\,\, \phi(a)\varphi(y)=0\\
\phi(x)\varphi(0)=0,\,\, \phi(x)\varphi(a)=0
\end{aligned}
\right.$$

可以得到

$$
\psi(x,y)=\frac{2}{a}\sin \frac{n_x\pi x}{a}\sin \frac{n_y\pi y}{a}\quad
E=\frac{\pi^{2}\hbar^{2}}{2ma^{2}}(n_x^{2}+n_y^{2})$$


$$
\left\{
\begin{aligned}
k_x=n_x\pi,\,\,\, n_x=1, 2, 3\cdots \quad E_x=\frac{n_x^{2}\pi^{2}\hbar^{2}}{2ma^{2}}\\[1ex]
k_y=n_y\pi,\,\,\, n_y=1, 2, 3\cdots \quad E_y=\frac{n_y^{2}\pi^{2}\hbar^{2}}{2ma^{2}}
\end{aligned}
\right.$$

### 三维 Hard Box
同理可得

$$
\psi(x,y,z)=\left( \frac{2}{a} \right)
\sin \frac{n_x\pi x}{a} \sin \frac{n_y\pi y}{a} \sin \frac{n_y\pi y}{a}\quad
E=\frac{\pi^{2}\hbar^{2}}{2ma^{2}}(n_x^{2}+n_y^{2}+n_z^{2})$$

### $\delta$ 势阱
势函数 $V(x)=-\lambda\delta (x),$ 其中 $[\lambda]=[M][L]^{3}\left[ T \right] ^{-2}.$
在束缚态下, 求解定态 Schrödinger 方程, 则 $E<0$
在 $x\neq 0$ 处

$$
\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^2\psi(x)}{\mathrm{d}x^{2}}=E\psi(x)\implies
\frac{\mathrm{d}^2\psi(x)}{\mathrm{d}x^{2}}+\frac{2mE}{\hbar^{2}}=0$$

即

$$
\psi^{\prime\prime}(x)-k^{2}\psi(x)=0\implies\psi(x)\sim \mathrm{e}^{\pm kx}$$

在 $x=0$ 附近则有

$$
\psi^{\prime\prime}(x)-k^{2}\psi(x)+\alpha\delta (x)\psi(x)=0$$

其中 $\displaystyle k^{2}=-\frac{2mE}{\hbar^{2}},\alpha=\frac{2m\lambda}{\hbar^{2}}.$ 对上式在 $(-\varepsilon,\varepsilon)$ 上做积分并令 $\varepsilon\to 0$ 得

$$
\psi^{\prime}(0^{+})-\psi^{\prime}(0^{-})=\int_{-\varepsilon}^{\varepsilon}
\left[ k^{2}\psi(x)-\alpha\delta (x)\psi(x)\right] \mathrm{d}x
=-\alpha\psi(0)$$

在 $x\neq 0$ 处设 $\psi(x)=A \mathrm{e}^{\pm kx}$, 则

$$
\psi^{\prime}=
\left\{
\begin{aligned}
&Ak \mathrm{e}^{kx}&\quad(x<0) \\
&-Ak \mathrm{e}^{-kx}&\quad(x>0)
\end{aligned}
\right.$$

代入得 $-Ak-Ak=-\alpha A$, 即

$$
k=\frac{\alpha}{2}=\frac{m\lambda}{\hbar^{2}}\quad
E=-\frac{\hbar^{2}k^{2}}{2m}=-\frac{\lambda^{2}m}{2\hbar^{2}}$$

只有一个束缚态解.
归一化

$$
\int_{-\infty}^{+\infty} \left| \psi(x) \right|^{2} \mathrm{d}=2
\int_{0}^{+\infty} \left| A \right|^{2} \mathrm{e}^{-2kx} \mathrm{d}x=
\frac{A^{2}}{k}=1\implies A=\sqrt{k}$$

## 一维谐振子
经典谐振子 $V(x)=\frac{1}{2}kx^{2}=\frac{1}{2} m \omega^{2}x^{2}$, 量子化, 满足定态 Schrödinger 方程

$$
-\frac{\hbar^{2}}{2m}\frac{\mathrm{d}^2\psi(x)}{\mathrm{d}x^{2}}
+\frac{1}{2}m \omega^{2}x^{2}\psi(x)=E\psi(x)$$

边界条件 $\psi(\pm\infty)\to 0$ , 将上述方程无量纲化, 选取参量 $\xi、\lambda$ , 有 $\displaystyle\xi=\sqrt{\frac{m \omega}{\hbar}}x=\alpha x,,\alpha=\sqrt{\frac{m \omega}{\hbar}},,\lambda=\frac{2E}{\hbar\omega},$ 得

$$
\frac{\mathrm{d}^{2}\psi(\xi)}{\mathrm{d}\xi^{2}}+
(\lambda-\xi^{2})\psi(\xi)=0$$

考虑函数在 $(x=\pm \infty)$ 处的渐进行为, 当 $\xi\to \pm\infty$ 时 $\xi^{2}\gg \lambda$, 方程有近似解 $\psi(\xi)\sim \mathrm{e}^{\pm \frac{\xi^{2}}{2}}$, 加上边界条件, 可取 $\psi(\xi)\sim \mathrm{e}^{-\frac{\xi^{2}}{2}},$ 不妨设 $\psi(\xi)=H(\xi) \mathrm{e}^{-\frac{\xi^{2}}{2}}$ 代入上式得

$$
H^{\prime\prime}(\xi)-2\xi H^{\prime}(\xi)+(\lambda-1)H(\xi)=0$$

上式称为 Hermite 方程, 设 $H(\xi)=\sum_{\nu=0}^{\infty}a_\nu\xi^{\nu}$ 代入上式可得

$$
2a_2 + 6a_3\xi +\cdots + (\nu+ 2)(\nu+ 1)a_{\nu+2}\xi^\nu+ \cdots
= (1−\lambda)a_0 +\cdots + (2\nu−\lambda+ 1)a_\nu\xi^\nu+\cdots$$

比较系数可以得到递推关系

$$
\frac{a_{\nu+2}}{a_{\nu}}=\frac{2\nu-\lambda+1}{(\nu+2)(\nu+1)}
\overset{\nu\gg 1}{\longrightarrow}\frac{2}{\nu}$$

由上式可知其级数和的发散行为与 $\mathrm{e}^{\xi^{2}}$ 类似, 加上边界条件可知 Hermite 多项式必须有截断, 即

$$
\lambda=2n+1\,\,(n=0,1,2\cdots )\implies
\left\{
\begin{aligned}
E_n=\frac{\lambda}{2}\hbar\omega=(n+\frac{1}{2})\hbar\omega \\
\psi_n (x)=N_n \mathrm{e}^{-\frac{1}{2}\alpha ^{2}x^{2}}H_n (\alpha x)
\end{aligned}
\right.$$

其中 $N_{n}=\sqrt{\frac{\alpha}{\sqrt{\pi}2^{n}n!}}$ 为归一化系数, $H_n(\alpha x)$ 为截断 (奇数次幂或偶数次幂) 的多项式.
**Hermite 多项式具有如下的性质**
- Rodrignes 公式:

$$
H_n (\xi)=(-1)^n e^{\xi^2} \frac{\mathrm{d}^n}{\mathrm{d} \xi^n} e^{-\xi^2}$$

- 生成函数:

$$
e^{-s^2+2 \xi s}=\sum_{n=0}^{\infty} \frac{H_n(\xi)}{n !} s^n$$

- 正交性:

$$
\int_{-\infty}^{+\infty} H_m(\xi) H_n(\xi)
\mathrm{e}^{-\xi^2} \mathrm{d}\xi=\sqrt{\pi} 2^n n ! \delta_{m n}$$

- 递推关系:

$$
\begin{aligned}
&H_{n+1}(\xi)-2 \xi H_n(\xi)+2 n H_{n-1}(\xi)=0 \\
&H_n^{\prime}(\xi)=2 n H_{n-1}(\xi)
\end{aligned}$$

最初的几个 Hermite 多项式为

$$
\begin{aligned}
&H_0(\xi)=1 \\
&H_1(\xi)=2 \xi \\
&H_2(\xi)=4 \xi^2-2 \\
&H_3(\xi)=8 \xi^3-12 \xi
\end{aligned}$$

能量最低的几个波函数具体表达式为,

$$
\begin{aligned}
&\psi_0(x)=\frac{\sqrt{\alpha}}{\pi^{1 / 4}} e^{-\frac{1}{2} \alpha^2 x^2}\\
&\psi_1(x)=\frac{\sqrt{2 \alpha}}{\pi^{1 / 4}} \alpha x e^{-\frac{1}{2} \alpha^2 x^2}\\
&\psi_2(x)=\frac{1}{\pi^{1 / 4}} \sqrt{\frac{\alpha}{2}}\left(2 \alpha^2 x^2-1\right) e^{-\frac{1}{2} \alpha^2 x^2}\\
&\psi_3(x)=\frac{\sqrt{3 \alpha}}{\pi^{1 / 4}} \alpha x\left(\frac{2}{3} \alpha^2 x^2-1\right) e^{-\frac{1}{2} \alpha^2 x^2}
\end{aligned}
$$

波函数具有递推公式

$$
\begin{aligned}
\xi \psi_n(\xi) &=\sqrt{\frac{n}{2}} \psi_{n-1}(\xi)+\sqrt{\frac{n+1}{2}} \psi_{n+1}(\xi)\\
\frac{\mathrm{d}}{\mathrm{d}\xi} \psi_n(\xi) &=\sqrt{\frac{n}{2}} \psi_{n-1}(\xi)-\sqrt{\frac{n+1}{2}} \psi_{n+1}(\xi)
\end{aligned}
$$

并且有

$$
\psi_n(-x)=(-1)^n \psi(x)
$$

即 $n$ 的奇偶性决定了波函数的宇称。
几个最低能级波函数与概率分布的图像
一维谐振子波函数
一维谐振子概率密度
### 代数解法
Hamilton 算符

$$
\hat{H}=\frac{\hat{p}^{2}}{2m}+\frac{1}{2}m\omega^{2}x^{2}
$$

定义产生湮灭算符

$$
\hat{a}^\dagger=\sqrt{\frac{m \omega}{2\hbar}}\hat{x}-
\frac{\mathrm{i} \hat{p}}{\sqrt{2m\hbar \omega}}\quad\quad
\hat{a}=\sqrt{\frac{m \omega}{2\hbar}}\hat{x}+
\frac{\mathrm{i} \hat{p}}{\sqrt{2m\hbar \omega}}\quad\quad
$$

由对易关系 $[\hat{x},\hat{p}]=\mathrm{i}\hbar$, 可以得到产生湮灭算符的对易关系

$$
[\hat{a},\hat{a}^\dagger]=1
$$

即 $\hat{a}\hat{a}^\dagger-\hat{a}^\dagger\hat{a}=1$.
也可以用 $\hat{a}、\hat{a}^\dagger$ 表示 $\hat{x}$ 和 $\hat{p}$

$$
\hat{x}=\sqrt{\frac{\hbar}{2m \omega}}(\hat{a}+\hat{a}^\dagger),\qquad
\hat{p}=\mathrm{i}\sqrt{\frac{m \omega\hbar}{2}}(\hat{a}^\dagger-\hat{a})
$$

代入 Hamilton 算符可以得到

$$
\begin{aligned}
\hat{H} &=\frac{1}{2 m}\left (-\frac{m \hbar \omega}{2}\right)\left (\hat{a}^{\dagger}-\hat{a}\right)^{2}+\frac{m \omega^{2}}{2}\left (\frac{\hbar}{2 m \omega}\right)\left (\hat{a}+\hat{a}^{\dagger}\right)^{2} \\
&=\frac{\hbar \omega}{2}\left (\hat{a}^{\dagger} \hat{a}+\hat{a} \hat{a}^{\dagger}\right) \\
&=\hbar \omega\left(\hat{a}^{\dagger} \hat{a}+\frac{1}{2}\right)=\hbar \omega\left(\hat{a} \hat{a}^{\dagger}-\frac{1}{2}\right)
\end{aligned}
$$

设 $\hat{H}$ 的一个本征函数为 $\psi_n(x)$, 即 $\hat{H}\psi_n(x)=E_n\psi_n(x)$,
使 $\hat{H}$ 分别作用在 $\hat{a}\psi_n(x),\,\,\hat{a}^\dagger\psi_n(x)$ 上利用产生湮灭算符表达的 Hamilton 算符可以得到

$$
\hat{H}\hat{a}\psi_n(x)=(E_n-\hbar\omega)\hat{a}\psi_n(x),\quad
\hat{H}\hat{a}\psi_n(x)=(E_n+\hbar\omega)\hat{a}^\dagger\psi_n(x)
$$

即 $\hat{a}\psi_n(x)$ 和 $\hat{a}^\dagger\psi_n(x)$ 分别是 $\hat{H}$ 本征值为 $E_n-\hbar\omega$ 和 $E_n+\hbar\omega$ 的本征函数, 也就是说将 $\hat{a}^\dagger(\hat{a})$ 作用在波函数上将使得波函数的能量增加 (减少) $\hbar\omega$.
若将 $\hat{a}$ 持续作用于 $\psi_n$ 将会得到负能量, 这并不符合物理规律, 故存在基态波函数
$\psi_0(x)$ 使得 $\hat{a}\psi_0(x)=0$.
将 $\hat{H}$ 作用在 $\psi_0(x)$ 上可以得到

$$
\hat{H}\psi_0(x)=\hbar\omega(\hat{a}^\dagger\hat{a}+\frac{1}{2})\psi_0(x)
=\frac{1}{2}\hbar\omega \psi_0(x)
$$

即基态能量为 $\frac{1}{2}\hbar\omega$.
将 $\hat{a}^\dagger$ 对 $\psi_0(x)$ 作用 $n$ 次可以得到能级为 $n$ 的本征函数, $E_n=(n+\frac{1}{2})\hbar\omega$.
第 $n$ 能级的波函数可通过将 $\hat{a}^{\dagger}$ 作用在基态 n 次后得到

$$
\psi_{0} \longrightarrow
\stackrel{\left(\hat{a}^{\dagger}\right)^{n}}{\longrightarrow} \psi_{n}(x)
=C\left(\hat{a}^{\dagger}\right)^{n} \psi_{0} \equiv C \psi_{n}(x)
$$

其中 C 为归一化系数.
$\hat{a}^\dagger$ 作用在 $\psi_{n}(x)$ 上可以得到 $\psi_{n+1}(x)$ ,

$$
\psi_{n+1}(x)=D \hat{a}^{\dagger} \psi_{n}(x)
$$

但还有一个常数 $D$ 待定, 可通过产生湮灭算符的具体微分形式得到 $D$ .
坐标空间中产生湮灭算符为

$$
\hat{a}=\frac{1}{\sqrt{2}}\left(\frac{\mathrm{d}}{\mathrm{d} \xi}+\xi\right)
\quad, \quad \hat{a}^{\dagger}=\frac{1}{\sqrt{2}}\left(\xi-
\frac{\mathrm{d}}{\mathrm{d} \xi}\right)
$$

其中 $\xi=\sqrt{\frac{m \omega}{\hbar}} x=\alpha x$.
将波函数 $\psi_{n+1}(x)$ 做内积

$$
\begin{aligned}
& \int \psi_{n+1}^{}(x) \psi_{n+1}(x) \mathrm{d}x \\
=&|D|^{2} \int\left(\hat{a}^{\dagger} \psi_{n}(x)\right)^{}\left(\hat{a}^{\dagger}
\psi_{n}(x)\right) \mathrm{d}x =|D|^{2} \frac{1}{\sqrt{2}} \int\left(-\frac{d}{d \xi}+\xi\right)
\psi_{n}^{}(x)\left(\hat{a}^{\dagger} \psi_{n}(x)\right) \mathrm{d}x \\
=&-\left.|D|^{2} \frac{1}{\sqrt{2} \alpha} \psi_{n}^{}(x)\left(\hat{a}^{\dagger}
\psi_{n}(x)\right)\right|_{-\infty} ^{+\infty}+|D|^{2} \int \psi{n}^{}(x)
\frac{1}{\sqrt{2}}\left(\frac{d}{d \xi}+\xi\right)\left(\hat{a}^{\dagger} \psi_{n}(x)\right) \mathrm{d}x \\
=&|D|^{2} \int \psi_{n}^{}(x) \hat{a} \hat{a}^{\dagger} \psi_{n}(x) \mathrm{d}x=|D|^{2}
\int \psi_{n}^{}(x)\left(\hat{a}^{\dagger} \hat{a}+1\right) \psi_{n}(x) \mathrm{d}x \\
=&|D|^{2}(n+1) \int \psi_{n}^{}(x) \psi_{n}(x) \mathrm{d} x
\end{aligned}
$$

$\psi_{n}$ 和 $\psi_{n+1}$ 都是归一化的, 且 $D$ 为实数得

$$
D=\frac{1}{\sqrt{n+1}}
$$

以及递推关系

$$
\hat{a}^{\dagger} \psi_{n}(x)=\sqrt{n+1} \psi_{n+1}(x)
$$

应用上述的递推关系可以得到 $\psi_{n}(x)$ 中的常数 $C$ ,

$$
\psi_{n}(x)=\frac{1}{\sqrt{n !}}\left(\hat{a}^{\dagger}\right)^{n}
\psi_{0}(x)=\frac{1}{\sqrt{n !} \sqrt{2^{n}}}
\left(\xi-\frac{\mathrm{d}}{\mathrm{d} \xi}\right)^{n} \psi_{0}(x)
$$

同理可得

$$
\hat{a} \psi_{n}(x)=\sqrt{n} \psi_{n-1}(x)
$$

所以

$$
\begin{aligned}
\hat{H} & \psi_{n}(x)=
\hbar \omega\left (\hat{a}^{\dagger} \hat{a}+\frac{1}{2}\right)
\psi_{n}(x)=\hbar \omega\left(n+\frac{1}{2}\right) \psi_{n}(x) \\
&\Longrightarrow \hat{N} \psi_{n}(x) \equiv \hat{a}^{\dagger}
\hat{a} \psi_{n}(x)=n \psi_{n}(x)
\end{aligned}
$$

即 $\psi_{n}(x)$ 是 $\hat{N}\equiv\hat{a}^{\dagger}\hat{a}$ (粒子束算符) 的本征值为 $n$ 的本征函数.
可以通过基态条件 $\hat{a} \psi_{0}(x)=0$ 求解出基态波函数, 由

$$
\hat{a} \psi_{0}(\xi)=\frac{1}{\sqrt{2}}
\left (\frac{\mathrm{d}}{\mathrm{d} \xi}+\xi\right)
\psi_{0}(\xi)=0
$$

可得

$$
\psi_{0}(\xi)=A \mathrm{e}^{-\xi^{2} / 2}
$$

归一化后得

$$
A=\left(\frac{m \omega}{\pi \hbar}\right)^{1 / 4}
$$

和

$$
\psi_{0}(x)=\left(\frac{m \omega}{\pi \hbar}\right)^{1 / 4}
\mathrm{e}^{-\xi^{2} / 2}=\sqrt{\frac{\alpha}{\sqrt{\pi}}}
\mathrm{e}^{-\alpha^{2} x^{2}}
$$

激发态的波函数, 可以通过将产生算符作用于 $\psi_0(x)$ 得到,

$$
\psi_{n}(x)=\frac{1}{\sqrt{n !}}\left(\hat{a}^{\dagger}\right)^{n}
\psi_{0}(x)=\frac{1}{\sqrt{n !}
\sqrt{2^{n}}}\left(\xi-\frac{\mathrm{d}}{\mathrm{d} \xi}\right)^{n}
\psi_{0}(x)
$$

将产生湮灭算符代入 $\hat{x}$ 和 $\hat{p}$ 中得到

$$
\begin{aligned}
\hat{x} \psi_{n} &=\sqrt{\frac{\hbar}{2 m \omega}}\left(\sqrt{n}
\psi_{n-1}+\sqrt{n+1} \psi_{n+1}\right)\\
\hat{p} \psi_{n} &=-\mathrm{i} \sqrt{\frac{m \hbar \omega}{2}}
\left(\sqrt{n} \psi_{n-1}-\sqrt{n+1} \psi_{n+1}\right)
\end{aligned}
$$

因为 $\hat{x}$ 和 $\hat{p}$ 要改变宇称, 所以它们在 $\psi_{n}(x)$ 态的平均值为零, 这也可以从上面的递推关系得出 ($\psi_{n}(x)$ 和 $\psi_{n \pm 1}(x)$ 是相互正交的).
由 $\hat{a}^\dagger,\hat{a}$ 表示的 $\hat{x}$ 和 $\hat{p}$ 可得

$$
\begin{aligned}
\left<x^{2} \right>{n}&=\int{-\infty}^{+\infty} \psi_n^\ast(x)\hat{x}^{2}
\psi_{n}(x) \mathrm{d}x=\frac{\hbar}{2m \omega}\int_{-\infty}^{+\infty}
\psi_{n}^\ast(x)[\hat{a}^{2}+\hat{a}\hat{a}^\dagger+
\hat{a}^\dagger\hat{a}+\hat{a}^{\dagger 2}]\psi_{n}(x) \mathrm{d}x
\\
&=\frac{\hbar}{2m \omega}\int_{-\infty}^{+\infty}
\psi_{n}^\ast(x)[2\hat{a}^\dagger\hat{a}+1]\psi_{n}(x) \mathrm{d}x
=\frac{\hbar}{2m \omega}\int_{-\infty}^{+\infty}
\psi_{n}^\ast(x)[2\hat{N}+1]\psi_{n}(x) \mathrm{d}x\\
&=\frac{\hbar}{2m \omega}(2n+1)
\end{aligned}
$$

以上推导利用到了波函数的正交性、递推关系以及产生湮灭算符的对易关系.
同理可得

$$
\begin{aligned}
\left<p^{2} \right>{n}&=\int_{-\infty}^{+\infty} \psi_n^\ast (x)\hat{p}^{2}
\psi_{n}(x) \mathrm{d}x=\frac{\hbar}{2m \omega}\int_{-\infty}^{+\infty}
\psi_{n}^\ast (x)[\hat{a}^{2}-\hat{a}\hat{a}^\dagger-
\hat{a}^\dagger\hat{a}+\hat{a}^{\dagger 2}]\psi_{n}(x) \mathrm{d}x
\\
&=\frac{m \omega\hbar}{2}(2n+1)
\end{aligned}
$$

故

$$
\begin{aligned}
\left<V \right>{n}&=\left<\frac{1}{2}m \omega^{2}x^{2} \right>{n}=
\frac{1}{2}m \omega^{2}\left<x^{2} \right>{n}=\frac{1}{2}m
\omega^{2}\cdot
\frac{\hbar}{2m \omega }(2n+1)=\frac{1}{2}E{n}
\\
\left<T \right>_{n}&=\left<\frac{p^{2}}{2m} \right>_n=\frac{1}{2m}
\left<p^{2} \right>_n=\frac{1}{2m}\cdot
\frac{m \omega\hbar}{2}(2n+1)=\frac{1}{2}E_n
\end{aligned}
$$

## 散射态
束缚态是指在无穷处势能无限大或者粒子能量在无穷远处小于势能, 粒子被势场束缚, 无穷远处波函数为 0, 从而能级分立. 而对于无穷远处势能为 0 的场或者粒子能量在无穷远处大于势能粒子可以出现在无穷远处, 无穷远处波函数不为 0, 能量可以任意取值, 可以为连续谱, 粒子态称为散射态（scattering state). 在这类问题中, 如果某处有势场粒子在传播过程中会受到势场影响, 发生相互作用, 粒子被散射. 也就是说在这类情况下, 讨论给定能量的粒子被势场散射的问题.
### 一维有限深方势阱
对于散射态 $E>V_0$
考虑 $x<0, x>a$ , 波函数 $\psi_{1,3}(x)$ 满足定态 Schrödinger 方程,

$$
\frac{\mathrm{d}^{2}}{\mathrm{d} x^{2}} \psi+\frac{2 m\left(E-V_{0}\right)}{\hbar^{2}} \psi=0
$$

解为 $\psi \sim \mathrm{e}^{\pm\mathrm{ i} k_{1} x}$ , 其中 $k_{1}=\sqrt{2 m\left(E-V_{0}\right) / \hbar^{2}}$
而在 $0<x<a$ 区域, $\psi_2(x)$ 满足

$$
\frac{\mathrm{d}^{2}}{\mathrm{d} x^{2}}
\psi+\frac{2 m E}{\hbar^{2}} \psi=\frac{\mathrm{d}^{2}}{d x^{2}}
\psi+k_{2}^{2} \psi=0
$$

解为 $\psi \sim \mathrm{e}^{\pm \mathrm{ i} k_{2} x}$
一维有限深方势阱
即

$$
\begin{aligned}
\psi_{1}(x)=A \mathrm{e}^{\mathrm{i} k_{1} x}+A^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} x}\,\,
& (x \leq 0) \\
\psi_{2}(x)=B \mathrm{e}^{\mathrm{i} k_{2} x}+B^{\prime} \mathrm{e}^{-\mathrm{i} k_{2} x}\,\,
& (0<x<a) \\
\psi_{3}(x)=C \mathrm{e}^{\mathrm{i} k_{1} x}+C^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} x}\,\,
& (x \geq a)
\end{aligned}
$$

加上在 $x=0$ 和 $x=a$ 处的边界条件有

$$
\begin{aligned}
\psi_{1}(0)=\psi_{2}(0) & : A+A^{\prime}=B+B^{\prime} \\
\psi_{1}^{\prime}(0)=\psi_{2}^{\prime}(0) & : k_{1}\left(A-A^{\prime}\right)
=k_{2}\left(B-B^{\prime}\right) \\
\psi_{2}(a)=\psi_{3}(a) & : B \mathrm{e}^{\mathrm{i} k_{2} a}+B^{\prime}
\mathrm{e}^{-i k_{2} a}=C \mathrm{e}^{\mathrm{i} k_{1} a}
+C^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} a} \\
\psi_{2}^{\prime}(a)=\psi_{3}^{\prime}(a) & :
k_{2} B \mathrm{e}^{\mathrm{i} k_{2} a}-k_{2} B^{\prime} \mathrm{e}^{-\mathrm{i} k_{2} a}=k_{1} C
\mathrm{e}^{\mathrm{i} k_{1} a}-k_{1} C^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} a}
\end{aligned}
$$

有 6 个未知参数 $\left(A, A^{\prime}, B, B^{\prime}, C, C^{\prime}\right)$ , 但仅有 4 个边界条件. 对于波数 $k>0 , \mathrm{e}^{\mathrm{i} k x}$ 为由左向右传播的行波, $\mathrm{e}^{-\mathrm{i} k x}$ 是由右向左传播的行波. (波函数有时间相因子 $\mathrm{e}^{-\mathrm{i} E t / \hbar}=\mathrm{e}^{-\mathrm{i} \omega t}$) . $A, C$ 表示向右传播的概率波的振幅, 而 $A^{\prime}, C^{\prime}$ 表示向左传播的概率波的振幅. 考虑实际散射情况从左向右发送一束粒子, 这种情况下, 在右边区域向左传播的概率波为零, 即取 $C^{\prime}=0$ . 波函数无法归一化, 但可以得到四个比值 $\left(A^{\prime} / A, B / A, B^{\prime} / A, C / A\right)$ . 也可以得到透射系数和反射系数. 对于波函数 $\psi(x)$ , 概率流为

$$
j_{x}=-\frac{\mathrm{i} \hbar}{2 m}\left(\psi^{*}(x)
\frac{\mathrm{d} \psi(x)}{\mathrm{d} x}-\frac{\mathrm{d} \psi^{*}(x)}{\mathrm{d} x}
\psi(x)\right)
$$

这样, 对于入射波 $\psi_{i n}=A \mathrm{e}^{\mathrm{i} k_{1} x}$ 的入射概率流密度 $J_{i n}$ 为

$$
J_{i n}=\frac{\mathrm{i} \hbar}{2 m}\left(\psi_{i n}
\frac{\mathrm{d} \psi_{i n}^{*}}{\mathrm{d} x}-
\frac{\mathrm{d} \psi_{i n}}{\mathrm{d} x}
\psi_{i n}^{\ast}\right)=\frac{\hbar k_{1}}{m}|A|^{2}
$$

透射波 $\psi_{T}=C \mathrm{e}^{\mathrm{i} k_{1} x}$ 的透射概率流密度为

$$
J_{T}=\frac{\hbar k_{1}}{m}|C|^{2}
$$

反射波 $\psi_{R}=A^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} x}$ 的反射概率流密度为

$$
J_{R}=\frac{\hbar k_{1}}{m}\left|A^{\prime}\right|^{2}
$$

可得透射系数 (transmission coefficient) 和反射系数 (reflection coefficient),

$$
\begin{aligned}
\text{透射系数} : T=\frac{J_{T}}{J_{i n}}=\left|\frac{C}{A}\right|^{2}
\\
\text{反射系数}: R=\frac{J_{R}}{J_{i n}}=\left|\frac{A^{\prime}}{A}\right|^{2}
\end{aligned}
$$

求解边界条件可得,

$$
\begin{aligned}
\frac{C}{A}=\frac{4 k_{1} k_{2} \mathrm{e}^{-\mathrm{i} k_{1} a}}{\left (k_{1}+k_{2}\right)^{2}
\mathrm{e}^{-\mathrm{i} k_{2} a}-\left (k_{1}-k_{2}\right)^{2} \mathrm{e}^{\mathrm{i} k_{2} a}} \\
\frac{A^{\prime}}{A}=\frac{-2 \mathrm{i}\left(k_{1}^{2}-k_{2}^{2}\right) \sin k_{2} a}{\left(k_{1}+k_{2}\right)^{2}
\mathrm{e}^{-\mathrm{i} k_{2} a}-\left(k_{1}-k_{2}\right)^{2} \mathrm{e}^{i k_{2} a}}
\end{aligned}
$$

这样可以得到透射系数和反射系数

$$
\begin{aligned}
T &=\frac{|C|^{2}}{|A|^{2}}=\frac{4 k_{1}^{2} k_{2}^{2}}{\left(k_{1}^{2}-k_{2}^{2}\right)^{2} \sin ^{2} k_{2} a+4 k_{1}^{2} k_{2}^{2}}\\
R &=\frac{\left|A^{\prime}\right|^{2}}{|A|^{2}}=
\frac{\left(k_{1}^{2}-k_{2}^{2}\right)^{2} \sin ^{2} k_{2} a}
{\left(k_{1}^{2}-k_{2}^{2}\right)^{2} \sin ^{2} k_{2} a+
4 k_{1}^{2} k_{2}^{2}}
\end{aligned}
$$

可以看出, 不是所有的粒子都能通过势阱, 即反射系数 $R \neq 0$ . 但满足概率守恒, 即透射系数和反射系数和为 1 , 有

$$
T+R=1
$$

### 一维方势垒

$$
V(x)=\left\{\begin{aligned}
V_{0}\,\, & 0<x<a \\
0\,\, & \text { otherwise }
\end{aligned}\right.
$$

一维方势垒
其中 $V_{0}>0$ . 考虑一维情况下, 单粒子从左方向右传播, 在 $x=\{0, a\}$ 处遇到势垒, 发生相互作用后进行散射.
- $E>V_{0}>0$
在 $x<0, x>a$ 处, 波函数 $\psi_{1, 3}(x)$ 满足定态 Schrödinger 方程,

$$
\frac{\mathrm{d}^{2}}{\mathrm{d} x^{2}} \psi+\frac{2 m E}{\hbar^{2}} \psi=0
$$

解为 $\psi \sim \mathrm{e}^{\pm \mathrm{i} k_{1} x}$ , 其中 $k_{1}=\sqrt{2 m E / \hbar^{2}}$ .
在 $0<x<a$ 处, $\psi_{2}(x)$ 满足定态 Schrödinger 方程

$$
\frac{\mathrm{d}^{2}}{\mathrm{d} x^{2}} \psi+\frac{2 m\left (E-V_{0}\right)}{\hbar^{2}}
\psi=\frac{\mathrm{d}^{2}}{\mathrm{d} x^{2}} \psi+k_{2}^{2} \psi=0
$$

解为 $\psi \sim \mathrm{e}^{\pm \mathrm{i} k_{2} x}$ .
即

$$
\begin{aligned}
\psi_{1}(x)=A \mathrm{e}^{\mathrm{i} k_{1} x}+A^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} x}& (x \leq 0) \\
\psi_{2}(x)=B \mathrm{e}^{\mathrm{i} k_{2} x}+B^{\prime} \mathrm{e}^{-\mathrm{i} k_{2} x} & (0<x<a) \\
\psi_{3}(x)=C \mathrm{e}^{\mathrm{i} k_{1} x}\quad(x \geq a)&
\end{aligned}
$$

其中

$$
k_{1}=\frac{\sqrt{2 m E}}{\hbar} \quad, \quad k_{2}=
\frac{\sqrt{2 m\left(E-V_{0}\right)}}{\hbar^{2}}
$$

加上在 $x=0$ 和 $x=a$ 处的边界条件可得

$$
\begin{aligned}
\frac{C}{A}=\frac{4 k_{1} k_{2} \mathrm{e}^{-\mathrm{i} k_{1} a}}
{\left(k_{1}+k_{2}\right)^{2}
\mathrm{e}^{-\mathrm{i} k_{2} a}-\left(k_{1}-k_{2}\right)^{2}
\mathrm{e}^{\mathrm{i} k_{2} a}} \\
\frac{A^{\prime}}{A}=\frac{-2 \mathrm{i}
\left(k_{1}^{2}-k_{2}^{2}\right) \sin k_{2} a}
{\left(k_{1}+k_{2}\right)^{2} \mathrm{e}^{-\mathrm{i} k_{2} a}-
\left(k_{1}-k_{2}\right)^{2}
\mathrm{e}^{\mathrm{i} k_{2} a}}
\end{aligned}
$$

可得透射系数和反射系数为

$$
\begin{aligned}
T=\frac{|C|^{2}}{|A|^{2}}=\frac{4 k_{1}^{2} k_{2}^{2}}
{\left(k_{1}^{2}-k_{2}^{2}\right)^{2} \sin ^{2} k_{2} a+4 k_{1}^{2}
k_{2}^{2}}
\\
R=\frac{\left|A^{\prime}\right|^{2}}{|A|^{2}}=\frac{\left(k_{1}^{2}-k_{2}^{2}\right)^{2}
\sin ^{2} k_{2} a}
{\left(k_{1}^{2}-k_{2}^{2}\right)^{2} \sin ^{2} k_{2} a+4 k_{1}^{2} k_{2}^{2}}
\end{aligned}
$$

在高能散射情况下, 即高能极限 $\left(k_{2} \simeq k_{1}\right)$ , 透射系数 $T \approx 1$ 此时将发生“全透散射”, 因为势垒相对于入射粒子的能量而言可以忽略.
从上式可以看出另一个发生“全透散射”的条件

$$
\sin \left(k_{2} a\right)=0 \quad \Longrightarrow \quad k_{2} a=n \pi \quad
\Longrightarrow \quad \frac{\sqrt{2 m\left(E-V_{0}\right)}}{\hbar} a=n \pi
$$

此时入射波能量为

$$
E-V_{0}=\frac{n^{2} \pi^{2} \hbar^{2}}{2 m a^{2}}=n^{2} E_{1}^{\infty}
$$

其中 $E_{1}^{\infty}$ 是宽度为 $a$ 的无穷深势阱的基态能量. 这种情况又被称作为“共振散射”.
- $V_{0}>E>0$
当入射粒子能量小于势垒高度时, $k_{2}$ 是虚数, 区域 2 的波函数呈现指数形式, 令 $k_{2}=\mathrm{i} k_{3}$ , 其中 $k_{3}=\sqrt{\frac{2 m\left(V_{0}-E\right)}{\hbar^{2}}}$ 为实数. 所以波函数为

$$
\begin{aligned}
\psi_{1}(x)&=A \mathrm{e}^{\mathrm{i} k_{1} x}+A^{\prime} \mathrm{e}^{-\mathrm{i} k_{1} x}\quad(x \leq 0) \\
\psi_{2}(x)&=B \mathrm{e}^{-k_{3} x}+B^{\prime} \mathrm{e}^{k_{3} x} \quad(0<x<a) \\
\psi_{3}(x)&=C \mathrm{e}^{\mathrm{i} k_{1} x}\quad(x \geq a)
\end{aligned}
$$

此时结果可以从 $E>V(x)$ 散射结果通过如下替换得到：

$$
k_{2} \rightarrow i k_{3} \quad \Longrightarrow \quad k_{2}^{2} \rightarrow-k_{3}^{2}
$$

重复上述计算可得

$$
\begin{aligned}
T &=\frac{|C|^{2}}{|A|^{2}}=\frac{4 k_{1}^{2} k_{3}^{2}}{\left(k_{1}^{2}+
k_{3}^{2}\right)^{2} \sinh ^{2} k_{3} a+4 k_{1}^{2} k_{3}^{2}}, \\
R &=\frac{\left|A^{\prime}\right|^{2}}{|A|^{2}}=\frac{\left(k_{1}^{2}+
k_{3}^{2}\right)^{2} \sinh ^{2} k_{3} a}{\left(k_{1}^{2}+k_{3}^{2}\right)^{2} \sinh ^{2} k_{3} a+4 k_{1}^{2} k_{3}^{2}} .
\end{aligned}
$$

一般地, 透射系数 $T \neq 0$ , 粒子有一定的概率“穿过”势垒, 透射过去. 这种现象称为隧道效应 (tunneling).
在低能入射下, $E$ 较小, 当 $k_{3} a \gg 1$ 时, 由 $\sinh k_{3} a \sim \frac{1}{2} \mathrm{e}^{k_{3} a}$ 得到

$$
T=\frac{16 k_{1}^{2} k_{3}^{2}}{\left(k_{1}^{2}+k_{3}^{2}\right)^{2}}
\mathrm{e}^{-2 k_{3} a}=T_{0} \mathrm{e}^{-\frac{2 a}{\hbar}
\sqrt{2 m\left(V_{0}-E\right)}}=\frac{16 E\left(V_{0}-E\right)}{V_{0}^{2}}
\mathrm{e}^{-\frac{2}{\hbar} \int_{0}^{a} \sqrt{2 m\left(V_{0}-E\right)} \mathrm{d} x}
$$

其中积分适用于一般形状的势垒, 而

$$
T_{0}=\frac{16 k_{1}^{2} k_{3}^{2}}{\left(k_{1}^{2}+
k_{3}^{2}\right)^{2}}=\frac{16 E\left(V_{0}-E\right)}{V_{0}^{2}}
$$

可以看出, 透射系数 $T$ 依赖于势垒高度, 势垒宽度, 以及粒子质量. 随着势垒高度, 宽度和粒子质量的增大而指数下降，所以宏观条件下一般观测不到隧道效应.
### 一维 $\delta$ 势垒

$$
V=V_{0} \delta(x) \quad\left(V_{0}>0\right)
$$

Schrödinger 方程为

$$
\frac{\hbar^{2}}{2 m} \frac{\mathrm{d}^{2} \psi}
{\mathrm{d} x^{2}}=\left[E-V_{0} \delta(x)\right] \psi
$$

两边作积分 $\lim_{\epsilon \rightarrow 0^{+}} \int_{-\epsilon}^{+\epsilon} \mathrm{d} x$ , 得到

$$
\frac{\hbar^{2}}{2 m}\left[\psi^{\prime}\left(0^{+}\right)-\psi^{\prime}
\left(0^{-}\right)\right]=V_{0} \psi(0) .
$$

这表明, 对于 $\delta$ 势垒, $\psi^{\prime}$ 在 $x=0$ 处不连续 (除非 $\psi(0)=0$) . 令

$$
\psi(x)=\left\{\begin{aligned}
&\mathrm{e}^{\mathrm{i} k x}+A^{\prime} \mathrm{e}^{-\mathrm{i} k x} & (x<0)\\
&C\mathrm{e}^{\mathrm{i} k x} & (x>0)
\end{aligned}\right.
$$

代入前式有

$$
\frac{\mathrm{i} k \hbar^{2}}{2 m}\left(C-1+A^{\prime}\right)=V_{0}
C \text { or } V_{0}\left(1+A^{\prime}\right)
$$

另外由 $\psi(0)$ 连续有

$$
1+A^{\prime}=C
$$

可得

$$
C=\frac{1}{\left(1+\frac{\mathrm{i} m V_{0}}{\hbar^{2} k}\right)} .
$$

透射系数为

$$
T=|C|^{2}=\frac{1}{1+\frac{m^{2} V_{0}^{2}}{\hbar^{4} k^{2}}}
=\frac{1}{1+\frac{m V_{0}^{2}}{2 E \hbar^{2}}},
$$

式中使用了 $E=\frac{\hbar^{2} k^{2}}{2 m}$ .
反射系数则为

$$
R=1-T=\frac{\frac{m V_{0}^{2}}{2 E \hbar^{2}}}{1+\frac{m V_{0}^{2}}{2 E \hbar^{2}}} .
$$

