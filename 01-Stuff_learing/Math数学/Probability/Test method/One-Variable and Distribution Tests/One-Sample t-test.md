
设 $X_1,\ldots,X_n \stackrel{\text{iid}}{\sim} \mathcal{N}(\mu,\sigma^2)$，但 $\sigma^2$ **未知**

样本均值：
$$
\bar X=\frac1n\sum_{i=1}^n X_i.
$$
样本方差：
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i-\bar X)^2.
$$
有已知性质：

1. $\bar X \sim \mathcal{N}\left(\mu,\frac{\sigma^2}{n}\right)$
2. $(n-1)S^2/\sigma^2 \sim \chi^2_{n-1}$
3. $\bar X$ 与 $S^2$ 独立

因此构造统计量：
$$
T=\frac{\bar X-\mu}{S/\sqrt{n}}.
$$
用途：比较样本均值是否等于一个已知数值 $\mu_0$。

假设：

- $H_0: \mu=\mu_0$
- $H_1: \mu\neq\mu_0$（双尾，可改为单尾）

