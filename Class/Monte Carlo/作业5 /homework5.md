# 随机变量的抽样方法
## 王俊 2019213637
**1. 对满足 $\displaystyle N(0,1)$ 正态分布的随机变量抽样**
（1）直接法
对于二元正态分布联合概率密度函数为
$$ g(x,y)=\frac{1}{2\pi} \mathrm{e}^{-\frac{x^{2}+y^{2}}{2}},-\infty<x,y<+\infty$$
作变量代换 $\displaystyle \left\{\begin{aligned} x=&\rho \cos \varphi\\ y=&\rho \sin \varphi\end{aligned} \right., 0\leq \rho <\infty, \,0\leq \varphi<2\pi$，有 
$$\displaystyle g (x, y)\mathrm{d}x\mathrm{d}y=g (\rho \cos \varphi,\rho \sin \varphi)\rho\mathrm{d}\rho \mathrm{d}\varphi=\mathrm{d}\rho \mathrm{d}\varphi$$
则关于 $\displaystyle (\rho,\varphi)$ 的联合概率密度函数为 $$\displaystyle h (\rho,\varphi)=\frac{1}{2\pi}\cdot\rho \mathrm{e}^{-\frac{\rho^{2}}{2}}=h_{2}(\varphi)\cdot h_{1}(\rho )$$
对于 $\displaystyle \rho,\varphi$ 有分布函数 $$\displaystyle F_{1}(\rho)= \int_{0}^{\rho}  h_{1}(\rho)\, \mathrm{d}\rho=1-\mathrm{e}^{-\frac{\rho^{2}}{2}},\,F_{2}(\varphi)=\int_{0}^{\varphi}  \frac{1}{2\pi}\, \mathrm{d}\varphi=\frac{\varphi}{2\pi} $$ 取在 $\displaystyle (0,1)$ 上均匀分布的随机变量 $\displaystyle \xi_{0},\xi_{1},\xi_{2}$ 有 $$\displaystyle \xi_{1}=1-\xi_{0}=\mathrm{e}^{-\frac{\rho^{2}}{2}},\,\xi_{2}=\frac{\varphi}{2\pi}$$
可得 $\displaystyle \rho,\varphi$ 的抽样值 $\displaystyle \rho =\sqrt{-2\ln \xi_{1} }\,,\varphi=2\pi \xi_{2}$
从而得到 $\displaystyle x,y$ 的抽样值 $\displaystyle x=\sqrt{ -2\ln \xi_{1} }\cos (2\pi \xi_{2})\,,y=\sqrt{ -2\ln \xi_{1} }\sin(2\pi \xi_{2})$
每次产生两个均匀分布的随机数，得到两个标准正态分布的抽样值,抽样效率为 $\displaystyle \eta=\frac{2}{2}=1$.
(2) 舍选法
利用定理
 $$P(\xi\leq d|r\leq cf(\xi))=\int_{a}^{d}  f(x)\, \mathrm{d}x   $$
 其中 $\displaystyle \xi$ 和 $\displaystyle r$,分别为 $\displaystyle (a,b)$ 和 $\displaystyle (0,1)$ 上均匀分布的随机变量，$\displaystyle f(x)$ 为 $\displaystyle (a,b)$ 上的概率密度函数，$\displaystyle cf(x)\leq 1$.
说明在这种情况下 $\displaystyle \xi$ 的概率密度函数就是 $\displaystyle f(x)$，可用 $\displaystyle \xi$ 的值抽样 $\displaystyle x$.
区间取 $\displaystyle (-10,10)$，由 $\displaystyle f(x)=\frac{1}{\sqrt{ 2\pi }}\mathrm{e}^{ -\frac{x^{2}}{2} }$，得 $\displaystyle cf(x)=\mathrm{e}^{ -\frac{x^{2}}{2}}\leq 1$.
抽样效率为（$\displaystyle \int_{-10}^{10}  f (x)\, \mathrm{d}x \approx 1$）$\displaystyle \eta=\frac{\int_{a}^{b} cf(x) \, \mathrm{d}x}{2(b-a)}=\frac{\sqrt{ 2\pi }}{40}=0.0627$，与事实编程的结果相符.
(3)极限法
按中心极限定理, 取 $\displaystyle n$ 个服从 (0,1) 上均匀分布的随机变量 $\displaystyle X_{i}$，则 $\displaystyle Y=\frac{\sum_{i=1}^{n}X_{i}-\frac{n}{2}}{\sqrt{ \frac{n}{12} }}\sim N(0,1)$，本程序中取 $\displaystyle n=12$，则产生 12 个随机数 $\displaystyle r_{i}$，$\displaystyle x=\sum_{i=1}^{12}r_{i}-6$，为抽样值，每次产生 12 个随机数只有一个抽样值，抽样效率 $\displaystyle \eta=\frac{1}{12}$.
三种抽样的直方图如下图所示，还统计了三种抽样所花费的时间，可以看出舍选法所花费时间最快，这是因为这种方法既不像直接法进行多次函数运算，也不像极限法需要多个随机数，但缺点是抽样效率较低.
![[unnamed.svg|1100]]
**2. 利用积抽样法抽样麦克斯韦分布**
由 $\displaystyle f(x)=\frac{2 \beta^{3 / 2}}{\sqrt{\pi}} \sqrt{x} \cdot \mathrm{e}^{-\beta \cdot x}, x \geq 0$，利用积抽样方法将其分解 $\displaystyle f(x)=f_{1}(x)H(x)$，有
$$f_{1}(x)=\frac{2 \beta}{3} e^{-\frac{2}{3} \beta \cdot x},\, H(x)=\frac{3 \beta^{1 / 2}}{\sqrt{\pi}} \sqrt{x} \cdot e^{-\frac{1}{3} \beta \cdot x} $$
其中 $\displaystyle f_{1}(x)$ 为指数分布的概率密度函数已归一化，求 $\displaystyle H(x)$ 的极值有
$$
\begin{align}
\frac{\mathrm{d} H(x)}{\mathrm{d}x}=&0,\,\frac{3 \beta^{1 / 2}}{\sqrt{\pi}} \left( \frac{1}{2\sqrt{ x }}-\frac{1}{3}\beta\sqrt{x}  \right)\cdot e^{-\frac{1}{3} \beta \cdot x} \\ \implies x=&\frac{3}{2\beta},
M=H\left( \frac{3}{2\beta} \right)=\sqrt{ \frac{27}{2\pi \mathrm{e}} }
\end{align}
$$

令 $\displaystyle \bar{H}(x)=\frac{H(x)}{M}$，先利用 $\displaystyle f_{1}(x)$，抽样出 $\displaystyle x$，再利用 $\displaystyle (0,1)$ 上的随机数 $\displaystyle r$ 若满足 $\displaystyle r\leq  \bar{H}(x)$，则 $\displaystyle x$ 为抽样值，否则重新抽样. 
设 $\displaystyle f_{1}(x)$，的分布函数为 $\displaystyle F(x)$，对于一对随机数 $\displaystyle r_{1},r_{2}$，若 $\displaystyle x=F^{-1}(r_{1})$，且 $\displaystyle r_{2}< \bar{H}(x),\, \implies r_{2}<\bar{H}(F^{-1}(r_{1}))$，即接受 $\displaystyle x$ 的抽样值，每次产生两个随机数，则抽样效率为 $\displaystyle \eta=\frac{1}{2}\int_{0}^{1}  \bar{H}(F^{-1}(r_{1}))\, \mathrm{d}r_{1}=\frac{1}{2}\int_{0}^{\infty} \bar{H}(x) f_{1}(x)\, \mathrm{d}x=\frac{1}{2M}\int_{0}^{\infty}  f_(x)\, \mathrm{d}x=\frac{1}{2M}=0.3978$ 与实际相符. 直方图如下
![[10.svg|900]]