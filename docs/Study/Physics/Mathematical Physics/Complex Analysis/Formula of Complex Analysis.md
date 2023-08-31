##### Step Function (Heaviside Function)
$$
\theta(t)=\mathrm{i}\int_{-\infty}^{\infty}  \, \frac{\mathrm{d}z}{2\pi} \frac{\mathrm{e}^{ -\mathrm{i}zt }}{z+i\varepsilon } \quad(\varepsilon \to 0 )
$$
##### Laplace Transform
Properties of the unilateral Laplace transform

| Property                             | Time domain                                                                                                           | $s$ domain                                                                                                     |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Linearity                            | $a f(t) + b g(t)$                                                                                                     | ${\displaystyle aF(s)+bG(s)\ }$                                                                                |
| Frequency-domain derivative          | ${\displaystyle tf(t)\ }$                                                                                             | ${\displaystyle -F'(s)\ }$                                                                                     |
| Frequency-domain general derivatives | $t^{n}f(t)$                                                                                                           | $(-1)^{n}F^{(n)}(s)$                                                                                           |
| General Derivative                   | ${\displaystyle f^{(n)}(t)\ }$                                                                                        | ${\displaystyle s^{n}F(s)-\sum _{k=1}^{n}s^{n-k}f^{(k-1)}(0^{+})\ }$                                           |
| Frequency-domain integration         | ${\displaystyle {\frac {1}{t}}f(t)\ }$                                                                                | ${\displaystyle \int _{s}^{\infty }F(\sigma )\,d\sigma \ }$                                                    |
| Time-domain integration              | ${\displaystyle \int _{0}^{t}f(\tau )\,d\tau =(u*f)(t)}$                                                              | ${\displaystyle {1 \over s}F(s)}$                                                                              |
| Frequency shifting                   | ${\displaystyle e^{at}f(t)\ }$                                                                                        | ${\displaystyle F(s-a)\ }$                                                                                     |
| Time shifting                        | ${\displaystyle f(t-a)u(t-a)\ }$                                                                                      | ${\displaystyle e^{-as}F(s)\ }$                                                                                |
| Time scaling                         | ${\displaystyle f(at)}$                                                                                               | ${\displaystyle {\frac {1}{a}}F\left({s \over a}\right)}$                                                      |
| Multiplication                       | ${\displaystyle f(t)g(t)}$                                                                                            | ${\displaystyle {\frac {1}{2\pi i}}\lim _{T\to \infty }\int _{c-iT}^{c+iT}F(\sigma )G(s-\sigma )\,d\sigma \ }$ |
| Convolution                          | ${\displaystyle (f*g)(t)=\int _{0}^{t}f(\tau )g(t-\tau )\,d\tau }$                                                    | ${\displaystyle F(s)\cdot G(s)\ }$                                                                             |
| Complex conjugation                  | ${\displaystyle f^{*}(t)}$                                                                                            | ${\displaystyle F^{*}(s^{*})}$                                                                                 |
| Cross-correlation                    | ${\displaystyle (f\star g)(t)=\int _{0}^{\infty }f(\tau )^{*}\,g(t+\tau )\,d\tau }$                                   | ${\displaystyle F^{*}(-s^{*})\cdot G(s)}$                                                                      |
| Periodic function                    | ${\displaystyle f(t)}$                                                                                                | ${\displaystyle {1 \over 1-e^{-Ts}}\int _{0}^{T}e^{-st}f(t)\,dt}$                                              |
| Periodic summation                   | $${\displaystyle \sum _{n=0}^{\infty }f(t-Tn)u(t-Tn)}\quad{\displaystyle \sum _{n=0}^{\infty }(-1)^{n}f(t-Tn)u(t-Tn)}$$ | ${\displaystyle {\frac {1}{1-e^{-Ts}}}F(s)}\quad{\displaystyle {\frac {1}{1+e^{-Ts}}}F(s)}$                         |

