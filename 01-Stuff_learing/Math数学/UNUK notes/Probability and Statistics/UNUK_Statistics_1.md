---
title: Notes on UNUK Real Analysis
tags:
  - math
  - Probability
  - School_Notes
date: 2025-11-17
---



# Definition

# C1

> **Definition - Independent and identically distributed**
>
> $X_{1},\ldots,X_{n}$ are **independent and identically distributed** (iid) random variables, each having the probability distribution $\mathcal{D}(\theta)$ iff $X_i\sim\mathcal D(\theta)$ and $X_i$ are independent of oneanoter.



> **Definition - Statistic**
>
> Given a sample $X_{1},\ldots,X_{n}$, a **statistic** is any real-valued function $T=T(X_{1},\ldots,X_{n})$ of the random variables $X_{1},\ldots,X_{n}$.



> **Definition - Estimators, Estimands, Estimates**
>
> The **estimator** is a statistic, $T(\mathbf{X})$ that is used for estimating a parameter of interest
>
> The **estimand** is the parameter/measure that we should like to estimate (in this case the estimand is $\theta$).
>
> Once our sample of data is actually observed (denoted $x_{1},\ldots,x_{n}$) then we can calculate a realised value of $T(\mathbf{X})$, written $$t(\mathbf{x})= t(x_{1},\ldots,x_{n})$$ ,is called the **estimate** of the estimand (i.e. the estimate of $\theta$).



# C2

> **Definition - Unbiased Estimator**
>
> Suppose that $T(\mathbf{X}) = T(X_{1},\ldots,X_{n})$ is an estimator of $\theta$. We say that $T(\mathbf{X})$ is an **unbiased estimator** for $\theta$ (or ‘$T(\mathbf{X})$ is unbiased for $\theta$​’) if
> $$
> \mathbb E(T(X))=\theta
> $$



> **Definition - Bias**
>
> Suppose that $T(\mathbf{X})$ is an estimator for $\theta$. The **bias** of $T(\mathbf{X})$ is defined
> $$
> \text{Bias}(T(\mathbf{X}),\theta) = \mathbb{E}(T(\mathbf{X}))-\theta.
> $$



> **Definition - Mean squared error (MSE)**
>
> Suppose that $T(\mathbf{X})$ is an estimator for $\theta$. The mean squared error of $T(\mathbf{X})$ is defined:
> $$
> \text{MSE}(T(\mathbf{X});\theta) = \mathbb{E}\left[(T(\mathbf{X})-\theta)^{2}\right].
> $$
> Here, expectation is taken with respect to the sampling distribution of $T(\mathbf{X})$.



> **Definition - Efficient**
>
> Suppose that $T_{1}(\mathbf{X})$ and $T_{2}(\mathbf{X})$ are both estimators for $\theta$. We say that $T_{1}(\mathbf{X})$ is **more efficient** than $T_{2}(\mathbf{X})$ if
> $$
> \text{MSE}(T_{1}(\mathbf{X});\theta)<\text{MSE}(T_{2}(\mathbf{X});\theta).
> $$



> **Definition - Weak Consistency**
>
> Let $T_{n}(\mathbf{X})$ be an estimator for some parameter $\theta$ based on a sample of size $n$. Then $T_{n}(\mathbf{X})$ is said to be (weakly) **consistent** for $\theta$ if $T_{n}(\mathbf{X})$ converges in probability to $\theta$ as $n$ tends to infinity. That is, for all $\epsilon>0$
> $$
> \lim_{n\rightarrow\infty}\mathbb{P}\left(|T_{n}-\theta|>\epsilon\right)=0
> $$
> which is:
> $$
> T_n\to\theta\text{ convergence in probability}
> $$



> **Definition - Strong Consistency**
>
> Let $T_{n}(\mathbf{X})$ be an estimator for some parameter $\theta$ based on a sample of size $n$. Then $T_{n}(\mathbf{X})$ is said to be Strong **consistent** for $\theta$ if $T_{n}(\mathbf{X})$ converges in probability to $\theta$ as $n$ tends to infinity. That is, for all $\epsilon>0$
> $$
> \mathbf P(\lim_{n\to\infty}T_n=\theta)=1
> $$
> which is:
> $$
> T_n\to\theta\text{ almost surely}
> $$





# C3

> **Definition - Likelihood function**
>
> Suppose that $X$ is a random variable with probability density function (or probability mass function) $f_{X}(x;\theta)$ where $\theta$ denotes the parameter(s) of the pdf/pmf of $X$.
>
> Then the **likelihood function** for $\theta$ is defined
> $$
> \mathcal{L}(\theta;x)=f_{X}(x;\theta).
> $$
> Notably if $X_{1},\ldots, X_{n}$ are independent and identically distributed (iid) with probability density (mass) function $f_{X_{i}}(x_{i};\theta)$, then the likelihood function of $\theta$ is
> $$
> \mathcal{L}(\theta;\mathbf{x}) = f_{\mathbf{X}}(\mathbf{x};\theta) = \prod_{i=1}^{n}f_{X_{i}}(x_{i};\theta).
> $$



> **Definition - Score Function and Score Equation**
>
> **Score function** is defined as:
> $$
> U(\theta;\mathbf X)=\frac{\partial}{\partial\theta}\log \mathcal{L}(\theta;\mathbf X)
> $$
> and **Score equation** is defined as:
> $$
> U(\theta;\mathbf X)=0
> $$



# C4

> **Definition - Fisher Information**
>
> The **Fisher Information** is defined as:
> $$
> \mathcal I(\theta)=\text{Var}(U(\theta;\mathbf X))=\sum_n\mathcal I_i(\theta;\mathbf X_i)
> $$



> **Definition - Confidence interval**
>
> A random interval $[\theta_{L}(\mathbf{X}), \theta_{U}(\mathbf{X})]$ is a $100(1-\alpha)\%$**confidence interval** for a parameter $\theta$ if 
> $$
> \mathbb{P}\left(\theta\in[\theta_{L}(\mathbf{X}),\theta_{U}(\mathbf{X})]\mid\theta\right) = 1-\alpha
> $$
>  for all $\theta$. Here $\alpha\in[0,1]$



> **Definition - Pivotal Quantity**
>
> A random variable 
>
> $T(\mathbf{X};\theta)$ is a **pivotal quantity** (or pivot) if the distribution of $T(\mathbf{X};\theta)$ is independent of $\theta$.
>
> That is, if $\mathbf{X}\sim\mathcal{D}(\theta)$, then $T(\mathbf{X};\theta)$ has the same distribution for all values of $\theta$.





# C5

> **Definition - Critical Region (of a hypothesis test)**
>
> The critical region of a hypothesis test is the region (or set) of values of $\mathbf{x}$ that correspond to the rejection of the null hypothesis, $\text{H}_{0}$. The critical region is written as $\mathcal{C}$ such that
> $$
> \begin{align*} &\text{If }\text{ }\mathbf{x}\in\mathcal{C}\text{ }\text{ then $\text{H}_{0}$ is rejected;}\\ &\text{If }\text{ }\mathbf{x}\notin\mathcal{C}\text{ }\text{ then $\text{H}_{0}$ is retained.}\\ \end{align*}
> $$



> **Definition - Size (Significance level) of the hypothesis test**
>
> The upper limit of $\alpha(\theta)$ is known as the **size** (or **significance level**) of the hypothesis test and we call the upper limit $\alpha$ where
> $$
> \alpha = \sup_{\theta\in\Theta_{0}}\alpha(\theta) = \sup_{\theta\in\Theta_{0}}\mathbb{P}(\mathbf{X}\in\mathcal{C}\mid\theta).
> $$



> **Definition - Power and Power function of he hypothesis test**
>
> The term 
> $$
> 1-\beta(\theta)=1-\mathbb P(\text{Type Ⅱ Error})
> $$
>  is known as the **power** of the hypothesis test.
>
> 
>
> In addition, the hypothesis test has critical region $\mathcal{C}$. Then the **power function**, $\gamma(\theta)$, is defined
> $$
> \gamma(\theta) = \mathbb{P}(\mathbf{X}\in\mathcal{C}|\theta)
> $$





# C6

> **Definition - Contingency table**
>
> suppose that there are two factors: factor $A$ with $J$ levels and factor $B$ with 
>
> $K$ levels. The general form for a contingency table is:
>
> |           | $B_{1}$                   | $B_{2}$                   | $\ldots$ | $B_{K}$                   | **Total**                                    |
> | --------- | ------------------------- | ------------------------- | -------- | ------------------------- | -------------------------------------------- |
> | $A_{1}$   | $Y_{11}$                  | $Y_{12}$                  | $\ldots$ | $Y_{1K}$                  | $Y_{1\boldsymbol{\cdot}}$                    |
> | $A_2$     | $Y_{21}$                  | $Y_{22}$                  | $\ldots$ | $Y_{2K}$                  | $Y_{2K}$                                     |
> | $\vdots$  | $\vdots$                  | $\vdots$                  |          | $\vdots$                  | $\vdots$                                     |
> | $A_J$     | $Y_{J1}$                  | $Y_{J2}$                  | $\ldots$ | $Y_{JK}$                  | $Y_{J\boldsymbol{\cdot}}$                    |
> | **Total** | $Y_{\boldsymbol{\cdot}1}$ | $Y_{\boldsymbol{\cdot}2}$ | $\ldots$ | $Y_{\boldsymbol{\cdot}K}$ | $Y_{\boldsymbol{\cdot}\boldsymbol{\cdot}}=N$ |
>
> Here, for $k\in\{1,\ldots,K\}$ and $j\in\{1,\ldots,J\}$
> $$
> \begin{align*} Y_{jk} &= \text{Number of observations in category $(j,k)$ (i.e. where factor $A = A_{j}$ and factor $B = B_{k}$)}\\ Y_{j\mathbf{\cdot}} &= \sum_{k=1}^{K}Y_{jk}\\ Y_{\mathbf{\cdot}k} &= \sum_{j=1}^{J}Y_{jk}\\ Y_{\mathbf{\cdot\cdot}} = N &= \sum_{j=1}^{J}\sum_{k=1}^{K}Y_{jk}. \end{align*}
> $$



> **Definition - Multinomial Model**
>
> $\mathbf{Y}=\left(Y_{11},\ldots,Y_{JK}\right)^{\top}$ is the vector containing the numbers of each possible combination of factors $A$ and $B$.
>
> $n$ observations are made in total, $p_{jk}$ is the probability of an observation having the factor combination $A_{j}$ and $B_{k}$ and $y_{jk}$ is the number of observations of the combination $(A_{j}, B_{k})$.
>
> $\mathbf{Y}$ has a multinomial distribution with probability mass function:
> $$
> \mathbb{P}(\mathbf{Y}=\mathbf{y})=\frac{n!}{y_{11}!y_{12}!\ldots y_{JK}!}p_{11}^{y_{11}}p_{12}^{y_{12}}\times\ldots\times p_{JK}^{y_{JK}}.
> $$
> where  $p_{11}+p_{12}+\ldots+p_{JK}=1$.
>
> 
>
> Define $\mathbf{p}=(p_{11},\ldots,p_{JK})^{\top}$ then the likelihood function for $\mathbf{p}$ is
> $$
> \mathcal{L}(\mathbf{p};\mathbf{y}) = \frac{n!}{y_{11}!y_{12}!\ldots y_{JK}!}p_{11}^{y_{11}}p_{12}^{y_{12}}\times\ldots\times p_{JK}^{y_{JK}}.
> $$





# C7

> **Definition - Moment of a Random Variable**
>
> Let $X$ be a random variable. The $r^{\text{th}}$ moment of $X$ ($r\in\{0,1,2,\ldots\}$) is defined 
> $$
> \mu_{r}=\mathbb{E}\left(X^{r}\right)
> $$
>  where expectation is with respect to the probability distribution of $X$.



> **Definition - Sample Moment (of a random variable)**
>
> Suppose that $X_{1},\ldots,X_{n}$ are independent samples of the random variable $X$ where $X\sim\mathcal{D}(\theta)$. If $x_{1},\ldots,x_{n}$ denote observed values of $X_{1},\ldots,X_{n}$ then the $r^{\text{th}}$ sample moment of $X$ is
> $$
> M_{r}=\frac{1}{n}\sum_{i=1}^{n}x_{i}^{r}.
> $$



> **Definition - Empirical Distribution Function**
>
> Suppose that $X_{1},\ldots,X_{n}$ are a sample independent and identically distributed random variables each having the same probability distribution as some random variable $X$. Then the **empirical distribution function** of $X$, based on the sample $X_{1},\ldots,X_{n}$, is
> $$
> F_{n}(x) = \frac{1}{n}\sum_{i=1}^{n}I(X_{i}\leq x).
> $$
> Here, $I(U<x)$ is the indicator function such that
> $$
> I(U\leq x) = \begin{cases}              1 & U\leq x;\\              0 & U>x.             \end{cases}
> $$





# C8

> **Definition - Degree of belief**
>
> For any event $A$​, the **degree of belief** is a number：
> $$
> P(A) \in [0,1],\quad P(\Omega)=1,\quad P(A\cup B)=P(A)+P(B)\text{ (If }A\cap B=\varnothing\text{)}
> $$
> representing the individual’s **subjective** assessment of how strongly they believe $A$ is true, given their current knowledge and information. 
>
> 
>
> - It is not an objective frequency but a reasonable quantification of subjective beliefs.
>
> - In Bayes, all probabilities (including parametric probabilities) are interpreted as degree of belief.



> **Definition - Prior Distribution**
>
> A **prior distribution** $P(\theta)$ is a probability distribution that represents our **degree of belief about the value of an unknown parameter $\theta$** *before observing any data*. 
>
> It assigns probabilities to possible parameter values based on existing knowledge, assumptions, or subjective judgment. 
>
> Formally,
> $$
> \theta \sim P(\theta),
> $$
> and it enters Bayesian inference through Bayes’ theorem:
> $$
> P(\theta \mid D)\propto P(D\mid\theta)\,P(\theta).
> $$



> **Posterior Distribution — Definition (Notes Style)**
>
> A **posterior distribution** $P(\theta \mid D)$ is the probability distribution that represents our **updated degree of belief about an unknown parameter $\theta$** *after observing data* $D$. 
>
> It is obtained by applying Bayes’ theorem:
> $$
> P(\theta \mid D)=\frac{P(D\mid\theta)\,P(\theta)}{P(D)}.
> $$









# C9

> **Definition - Loss function**
>
> Define the **loss function** $L(\theta,t(\mathbf{x}))$ to be the loss incurred from using $t(\mathbf{x})$ as an estimate for $\theta$.
>
> A loss function is a function of $\theta$ and is specified to reflect the consequence of using $t(\mathbf{x})$ as an estimate when the true value of the parameter is $\theta$.
>
> For example, two common loss functions are:
>
> 1. $L(\theta,t(\mathbf{x}))=(t(\mathbf{x})-\theta)^{2}$ - known as ‘squared error loss’
> 2. $L(\theta,t(\mathbf{x}))=\left|t(\mathbf{x})-\theta\right|$ - known as ‘absolute error loss’
> 3. $L(\theta, a) =\begin{cases}0, & \theta = a \\1, & \theta \neq a\end{cases}$ - known as '0-1 error loss'





> **Definition - Bayesian Credible Interval**
>
> A $100(1-\alpha)\%$ Bayesian credible interval for a parameter, $\theta$, is a range of values $(a, b)$, with $a<b$, such that the probability that $\theta$ lies within the interval $(a,b)$ is equal to $1-\alpha$ (for some $\alpha\in(0, 1)$).
>
> That is
> $$
> \mathbb{P}(a<\theta<b) = 1-\alpha.
> $$







# Chapter Ⅰ

## Types of Statistics analysis

**1.Descriptive analysis**

- Purpose: Summarize and characterize the features of a dataset.
-  Key elements: mean, median, variance, standard deviation, frequency distributions, correlation, and visualizations such as histograms and boxplots.
-  Role: Describes the sample only; no generalization to the population.

**2. Inferential Analysis**

- Purpose: Draw conclusions about a population based on sample data.
- Methods: point estimation, interval estimation, hypothesis testing, ANOVA, regression tests.
- Role: Provides probabilistic statements about population parameters.

**3. Predictive (Modeling) Analysis**

- Purpose: Build models using existing data to predict future or unknown outcomes.
- Methods: linear and nonlinear regression, time-series models, machine-learning models.
- Role: Focuses on predictive accuracy rather than interpretability.

# Chapter Ⅱ

## Mean squared error

$$
\text{MSE}(T;\theta)=\text{Var}(T)+[\text{Bias}(T)]^2
$$

If
$$
\text{MSE}(T;\theta)\to0\text{ as }n\to \infty
$$
then $T_n(\mathbf{X})$ is weakly consistent for $\theta$ 



# Chapter Ⅲ

## Maximum Likelihood Estimation

The **maximum likelihood estimate** of $\theta$ and is often written as $\hat{\theta}$ or $\hat{\Theta}$ for the high dimensional cases.

Obtain the **maximum likelihood** by evaluating the:
$$
\hat\theta=\arg\max_\theta \mathcal L(\theta;\mathbf X)
$$
which is commonly turned into the **natural logarithm of a likelihood function**:
$$
\hat\theta=\arg\max_\theta \log[\mathcal L(\theta;\mathbf x)]=\arg \max_\theta \mathcal l(\theta;\mathbf x)
$$
which may be solved by the **Score Equation**:
$$
\left.\frac{\partial\mathcal l (\theta;\mathbf x)}{\partial\theta}\right |_{\hat\theta}=0
$$

> **Theorem - Invariance property of MLE**
>
> If $\hat{\theta}$ is a maximum likelihood estimate of $\theta$ and $g$ is any function then $g(\hat{\theta})$ is a maximum likelihood estimate of $g(\theta)$.





## Non-regular cases

**Maximum Likelihood Estimation for $\theta$ in the Uniform$(0,\theta)$ Model**

Consider i.i.d. observations $X_1,\ldots,X_n \sim \mathcal U(0,\theta)$.
 The density is
$$
f(x;\theta)=
\begin{cases}
\frac{1}{\theta}, & 0\le x \le \theta,\\[4pt]
0, & \text{otherwise}.
\end{cases}
$$

### Likelihood function

Given observations $x_1,\ldots,x_n$, the likelihood is
$$
L(\theta)=\prod_{i=1}^n f(x_i;\theta)
=\begin{cases}
\theta^{-n}, & \theta \ge x_{(n)},\\[4pt]
0, & \theta < x_{(n)},
\end{cases}
$$
where $x_{(n)}=\max\{x_1,\ldots,x_n\}$.

For $\theta \ge x_{(n)}$, the likelihood $\theta^{-n}$ is decreasing in $\theta$.
Thus the maximum is achieved at the smallest admissible value:
$$
\hat{\theta}_{\mathrm{MLE}} = X_{(n)}.
$$


# Chapter Ⅳ

## Regularity conditions

**Regularity conditions** ensures that:

1. MLE exists
2. The only MLE
3. MLE consistent
4. MLE is approaching normalcy and is effective



The commonly stipulated **regularity conditons** are:

1. The likelihood function is continuous in $\theta$.

2. The domain of the probability density/mass function of $\mathbf{X}$ (i.e. its support) does not depend on $\theta$.

3. The **score function**, defined as:
   $$
   U(\theta;\mathbf X)=\frac{\partial}{\partial\theta}\log \mathcal{L}(\theta;\mathbf X)
   $$
   is supposed to satisfy:
   $$
   \mathbb{E}\left(U(\theta;\mathbf{X})\right) = 0.
   $$

4. The **Fisher information (expected information)**, defined as:
   $$
   \mathcal I(\theta)=\text{Var}(U(\theta;\mathbf X))=\sum_n\mathcal I_i(\theta;\mathbf X_i)
   $$
   is expected to be:
   $$
   \mathcal I(\theta)=\mathbb E\left[\left(\frac{\partial}{\partial\theta}\log\mathcal L(\theta;\mathbf X)\right)^2\right]
   $$

5. As $n\to \infty$,
   $$
   \hat{\theta}\sim\mathcal{N}\left(\theta,\frac{1}{\mathcal{I}(\theta)}\right)
   $$

6. It is satisfied around the **true parameter** $\theta_0$
   $$
   \mathbb E\!\left[-\frac{\partial^2 \ell(\theta_0)}{\partial\theta^2}\right] = I(\theta_0).
   $$
   
7. 



## Cramér-Rao Lower Bound

Under **Regularity conditions**, following inequality holds:
$$
\text{Var}(T(\mathbf X))\ge\frac{(\mathbb E_\theta[T]')^2}{\mathcal I(\theta)}
$$
Especially, when $T(X)$ is unbiased:
$$
\text{Var}(T(\mathbf{X}))\geq\frac{1}{\mathcal{I}(\theta)}
$$
and for $\hat\theta\sim\mathcal N(\theta,\frac{1}{\mathcal I(\theta)})$ as $n\to \infty$

then as $n\to\infty$:
$$
\text{Var}(\hat{\theta})\rightarrow\frac{1}{\mathcal{I}(\theta)}.
$$





## Confidence Intervals

Given the iid sample $X_{1},\ldots,X_{n}$ with $X_{i}\sim\mathcal{D}(\theta)$, we have seen that, under regularity conditions, the maximum likelihood estimator of $\theta$, written $\hat{\theta}$, has the asymptotic distribution 
$$
\hat{\theta}\sim\mathcal{N}\left(\theta,\frac{1}{\mathcal{I}(\theta)}\right).
$$
It follows that
$$
\sqrt{\mathcal{I}(\theta)}\left(\hat{\theta}-\theta\right)\sim\mathcal{N}(0,1).
$$
The approximated $100(1-\alpha)\%$ confidence interval for $\theta$ is given by:
$$
\left[\hat{\theta}(\mathbf{X})-\frac{z_{\frac{\alpha}{2}}}{\sqrt{\mathcal{I}(\hat{\theta})}}, \hat{\theta}(\mathbf{X})+\frac{z_{\frac{\alpha}{2}}}{\sqrt{\mathcal{I}(\hat{\theta})}}\right]
$$
where $\mathcal I(\hat\theta)$ can be replaced by:
$$
\mathcal{J}(\hat{\theta})=-\left.\frac{\partial^{2}\ell(\theta;\mathbf{x})}{\partial\theta^{2}}\right|_{\theta=\hat{\theta}}.
$$

## Pivotal Quantities

if $T(\mathbf{X};\theta)$ is a pivotal quantity then, for any set $\mathcal{A}$, we know that 
$$
\mathbb{P}(T(\mathbf{X};\theta)\in\mathcal{A})
$$
 cannot depend on $\theta$.

Hence, if $T(\mathbf{X};\theta)$ is a pivotal quantity and if we can find a set $\mathcal{A}$ such that
$$
\mathbb{P}(T(\mathbf{X};\theta)\in\mathcal{A}) = 1-\alpha
$$
then the set
$$
\left\{\theta\colon T(\mathbf{x},\theta)\in\mathcal{A}\right\}
$$
is a $100(1-\alpha)\%$ confidence interval (or set) for $\theta$.

**Commonly-used Pivotal Quantity**

| Pivotal Quantity                      | Distribution       |
| ------------------------------------- | ------------------ |
| $\frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$ | $\mathcal{N}(0,1)$ |
| $\frac{\bar{X}-\mu}{S/\sqrt{n}}$      | $t_{n-1}$          |
| $\frac{(n-1)S^{2}}{\sigma^{2}}$       | $\chi^{2}_{n-1}$   |

where
$$
S^{2} = \frac{1}{n-1}\sum_{i=1}^{n}(X_{i}-\bar{X})^{2}
$$




# Chapter Ⅴ

## Decisions and Errors

There are two possible errors that could be made when taking either of these decisions:

-**Type I Error**: Reject $\text{H}_{0}$ when $\text{H}_{0}$ is true (i.e. a false positive);

-**Type II Error**: Retain $\text{H}_{0}$ when $\text{H}_{0}$ is false (i.e. a false negative).



> [!note]
>
> Regard Type Ⅰ more serious than Type Ⅱ.



Suppose a hypothesis test has the form $$\text{H}_{0}\colon \theta\in\Theta_{0} \text{ }\text{ versus }\text{ } \text{H}_{1}\colon\theta\in\Theta_{1}$$ with $\Theta_{0}\cap\Theta_{1} = \emptyset$. The probability of a Type I error is
$$
\begin{align*} \alpha(\theta) &= \mathbb{P}(\text{Type I Error})\\               &= \mathbb{P}(\mathbf{X}\in\mathcal{C}\mid\theta\in\Theta_{0}).   \end{align*}
$$
The probability of a Type II error is
$$
\begin{align*}
\beta(\theta) &= \mathbb{P}(\text{Type II Error})\\
               &= \mathbb{P}(\mathbf{X}\notin\mathcal{C}\mid\theta\in\Theta_{1}).  
\end{align*}
$$



## Most powerful test



> **Lemma - Neyman-Pearson Lemma**
>
> Suppose that we have data $\mathbf{X}\sim\mathcal{D}(\theta)$ and we wish to test the **simple hypotheses**:
> $$
> \text{H}_{0}\colon \theta=\theta_{0} \text{ }\text{ versus }\text{ } \text{H}_{1}\colon \theta=\theta_{1}.
> $$
> Then if $\mathcal{L}(\theta_{0};\mathbf{X})$ and $\mathcal{L}(\theta_{1};\mathbf{X})$ are the corresponding likelihood functions under $\text{H}_{0}$ and $\text{H}_{1}$, respectively, the **most powerful test** of size $\leq\alpha$ has the critical region 
> $$
> \mathcal{C} = \left\{\mathbf{x}\colon\frac{\mathcal{L}(\theta_{1};\mathbf{x})}{\mathcal{L}(\theta_{0};\mathbf{x})}>k \right\}
> $$
>  where $k$ is such that
> $$
> \mathbb{P}(\mathbf{X}\in\mathcal{C}\mid \text{H}_{0}) = \alpha.
> $$
> Thus the **most powerful** test has the **test function**:
> $$
> \phi^*(x)=
> \begin{cases}
> 1, & \dfrac{f_1(x)}{f_0(x)}>k,\\[6pt]
> \gamma, & \dfrac{f_1(x)}{f_0(x)}=k,\\[6pt]
> 0, & \dfrac{f_1(x)}{f_0(x)}<k,
> \end{cases}
> $$
> where:
> $$
> \mathbb{E}_0[\phi^*]
> = P_0\{f_1(X)>k f_0(X)\} + \gamma\, P_0\{f_1(X)=k f_0(X)\} = \alpha.
> $$



More formally, a uniformly most powerful (UMP) test of size $\alpha$ is such that:

1. The test has size $\alpha$.

2. The power function, $\gamma(\theta)$, is as large as possible for all $\theta\in\Theta_{1}$.



## Generalised Likelihood Ratio test

### Simple Null Hypothesis, Composite Altetrnative

Suppose that we have a simple null hypothesis and a composite alternative hypothesis. That is, a hypothesis test of the form
$$
\text{H}_{0}\colon \theta=\theta_{0} \text{ }\text{ versus }\text{ } \text{H}_{1}\colon \theta\neq\theta_{0}\text{ }\text{ (i.e. $\theta\in\Theta, \theta\neq\theta_{0}$)}.
$$
If $\mathcal{L}(\theta;\mathbf{X})$ denotes the likelihood functio then the test statistic for the **generalised likelihood ratio test** is 
$$
2\log\left[\frac{\sup_{\theta\in\Theta}\mathcal{L}(\theta;\mathbf{X})}{\mathcal{L}(\theta_{0};\mathbf{X})}\right]=2\left[\ell(\hat{\theta};\mathbf{X})-\ell(\theta_{0};\mathbf{X})\right]
$$
where $\hat{\theta}$ is the maximum likelihood estimator of $\theta$.







### Composite Null and Alternative Hypotheses

Now we assume that we wish to test the hypotheses $$\text{H}_{0}\colon \theta\in\Theta_{0} \text{ }\text{ versus }\text{ } \text{H}_{1}\colon \theta\in\Theta_{1}$$ with $\Theta_{0}\cap\Theta_{1}=\emptyset$ and $\Theta_{1}=\Theta\setminus\Theta_{0}$.

Then the test statistic for a **generalised likelihood ratio test** of these hypotheses is
$$
2\log\left[\frac{\sup_{\theta\in\Theta}\mathcal{L}(\theta;\mathbf{X})}{\sup_{\theta\in\Theta_{0}}\mathcal{L}(\theta;\mathbf{X})}\right] = 2\left[\ell(\hat{\theta}_{1};\mathbf{X})-\ell(\hat{\theta}_{0};\mathbf{X})\right].
$$
where $\hat{\theta}_{0}$ is the maximum likelihood estimator of $\theta$ under $\text{H}_{0}$ and $\hat{\theta}_{1}$ is the maximum likelihood estimator of $\theta$ under $\text{H}_{1}$.



> **Theorem - Wilks Theorem**
>
> Under the regularity conditions and for large $n$
> $$
> 2\left[\ell(\hat{\theta}_{1};\mathbf{X})-\ell(\hat{\theta}_{0};\mathbf{X})\right] \sim\chi^{2}_{1}.
> $$
> In general,
> $$
> -2\log \Lambda \ \xrightarrow{d}\ \chi^2_{k},
> $$
> where
> $$
> k = \dim(\Theta)-\dim(\Theta_0),
> $$



# Chapter Ⅵ

## Hypothesis Test of multinomial model

Using our multinomial model, state these hypotheses as follows 
$$
\text{H}_{0}\colon p_{jk}=p^{A}_{j}p^{B}_{k}
$$
 versus
$$
\text{H}_{1}\colon p_{jk}=p_{jk} \text{ }\text{ (i.e. probabilities $p_{jk}$ are unrestricted).}
$$
note that

- under $\text{H}_{0}$ there are $(J-1)+(K-1)$ free parameters. under 

- $\text{H}_{1}$ there are $JK-1$ free parameters because
  $$
  \sum_{j=1}^{J}\sum_{k=1}^{K}p_{jk}=1.
  $$





Use a **generalised likelihood ratio test**, to perform the hypothesis test.

Suppose that:

- $\hat{\boldsymbol{p}}^{A}$ and $\hat{\boldsymbol{p}}^{B}$ are maximum likelihood estimators for $\boldsymbol{p}^{A}$ and $\boldsymbol{p}^{B}$, respectively, under $\text{H}_{0}$
- $\hat{\boldsymbol{p}}$ is the maximum likelihood estimator for $\boldsymbol{p}$ under $\text{H}_{1}$.



Then the generalised likelihood ratio test statistic is
$$
2\log\left[\frac{\mathcal{L}(\hat{\boldsymbol{p}};\mathbf{Y})}{\mathcal{L}(\hat{\boldsymbol{p}}^{A},\hat{\boldsymbol{p}}^{B};\mathbf{Y})}\right]=2\left[\ell(\hat{\boldsymbol{p}};\mathbf{Y})-\ell(\hat{\boldsymbol{p}}^{A},\hat{\boldsymbol{p}}^{B};\mathbf{Y})\right]
$$

>  [!note]
>
> Under $\text{H}_{0}$ it can be shown that this test statistic has a $\chi^{2}_{(J-1)(K-1)}$ (i.e. a Chi-squared distribution with $(J-1)(K-1)$ degrees of freedom).



We note that the number of degrees of freedom are determined using the rule:
$$
\begin{align*} \text{No. of free parameters under H}_{1} - \text{No. of free parameters under H}_{0} &= (JK-1)-(J-1)\\                                                                                      &\quad-(K-1)\\                                                                                      &= JK-J-K+1\\                                                                                      &= (J-1)(K-1). \end{align*}
$$
This is easily remembered using the rule
$$
(\text{Number of rows} - 1)\times(\text{Number of columns}-1).
$$


> **Theorem**
>
> Under $\text{H}_{0}$, maximum likelihood estimators are
> $$
> \begin{align*} \hat{p}^{A}_{j}&=\frac{Y_{j\mathbf{\cdot}}}{n}\\ \hat{p}^{B}_{j}&=\frac{Y_{\mathbf{\cdot}k}}{n} \end{align*}
> $$
> Under $\text{H}_{1}$, maximum likelihood estimators are
> $$
> \hat{p}_{jk} = \frac{Y_{jk}}{n}
> $$



Then the test statistic is:
$$
2\left[\ell(\hat{\boldsymbol{p}};\mathbf{Y})-\ell(\hat{\boldsymbol{p}}^{A},\hat{\boldsymbol{p}}^{B};\mathbf{Y})\right] = 2\sum_{j=1}^{J}\sum_{k=1}^{K}O_{jk}\log\left(\frac{O_{jk}}{E_{jk}}\right).
$$
where:

- $E_{jk} = \frac{Y_{j\cdot}Y_{\cdot k}}{n}.$
- $O_{jk}$ refers to the observed number in cell 



> **Theorem - Pearson’s chi-squared test statistic**  
>
> For large samples, the test statistic $2\sum_{j=1}^{J}\sum_{k=1}^{K}O_{jk}\log\left(\frac{O_{jk}}{E_{jk}}\right)$ is such that
> $$
> 2\sum_{j=1}^{J}\sum_{k=1}^{K}O_{jk}\log\left(\frac{O_{jk}}{E_{jk}}\right)\approx \sum_{j=1}^{J}\sum_{k=1}^{K}\frac{\left(O_{jk}-E_{jk}\right)^{2}}{E_{jk}}.
> $$



The critical region for the test is denoted 
$$
\mathcal{C}=\left\{\mathbf{y}:\sum_{j=1}^{J}\sum_{k=1}^{K}\frac{\left(o_{jk}-e_{jk}\right)^{2}}{e_{jk}}>\chi^{2}_{(J-1)(K-1)}(\alpha)\right\}
$$
 where :

- $\mathbf{y}=\left(o_{11},o_{12},\ldots,o_{JK}\right)^{\top}$ 

-  $e_{jk}=\frac{y_{j\cdot}y_{\cdot k}}{n}$

- $\chi^{2}_{\nu}(\alpha)$ denotes the $100(1-\alpha)\%$ quantile of the $\chi^{2}_{\nu}$ probability density function. That is, if $U\sim\chi^{2}_{\nu}$ then
  $$
  \mathbb{P}\left(U>\chi^{2}_{\nu}(\alpha)\right)=\alpha.
  $$



## Goodness-of-Fit Tests

Without loss of generality, define the $K$ categories that $X$ may take using numbers $\{1,\ldots,K\}$ and $p_{k}$ be the probability that $X$ belongs to the $k^{\text{th}}$ category.



$p_{k}$ ‘taking particular values’ (under $\text{H}_{0}$) means that there is a shared dependence amongst parameters $p_{1},\ldots,p_{K}$ on some parameter $\theta$. Formally, we might write our hypotheses as 
$$
\text{H}_{0}\colon p_{k}=p_{k}(\theta)\text{ }\text{ versus }\text{ }\text{H}_{1}\colon p_{1},\ldots,p_{K}\text{ }\text{ are unrestricted}
$$
where  $\sum_{k=1}^{K}p_{k}=1$ and $p_{k}\in[0,1]$.


$$
\sum_{k=1}^{K}\frac{(O_{k}-E_{k})^{2}}{E_{k}}
$$
where:

- $O_{k}$ denotes the **observed** number of cases of category $k$
- $E_{k}$ the expected number of cases of category $k$



under the assumption of $\text{H}_{0}$, this test statistic has a $\chi^{2}_{K-1}$ distribution.



> [!NOTE]
>
> The test relies on an asymptotic distributional approximation. As a result, in general, we should ensure that the observed frequency in **each cell is $\geq 5$ for the test to be valid**. 
>
> If we have cells with frequencies less than 5 we might like to pool categories or, in some cases, use an exact test such as **[[Fisher’s exact test]]** (not covered in MATH2108).



The critical region for a size $\alpha$ test is
$$
\mathcal{C}=\left\{\mathbf{o}\colon\sum_{k=1}^{K}\frac{(o_{k}-e_{k})^{2}}{e_{k}}>\chi^{2}_{K-1}(\alpha)\right\}.
$$
where:

- $\mathbf{o}=(o_{1},\ldots,o_{K})^{\top}$ denote observed of categories
- $\mathbf{e}=(e_{1},\ldots,e_{K})^{\top}$ denote expected values of categories



# Chapter Ⅶ

## Wilcoxon Signed-Rank Test

A sample of paired continuous data denoted $(X_{1},Y_{1}),\ldots,(X_{n},Y_{n})$ 

Investigate whether or not the distribution of $X_{1},\ldots,X_{n}$ is the same as that of $Y_{1},\ldots,Y_{n}$.



assume that $X_{i}$ and $Y_{i}$ are continuous random variables (for $i\in\{1,\ldots,n\}$) and define the difference $Z_{i}=X_{i}-Y_{i}$.

Under the null hypothesis assume that $Z_{1},\ldots,Z_{n}$ have the same probability distribution that is **symmetric about its median** and state that this distribution is that of the random variable $Z$.



The hypotheses that we test are
$$
\text{H}_{0}\colon \text{Median of $Z$ = 0} \text{ }\text{ versus }\text{ }\text{ H$_{1}\colon$ Median of $Z$ $\neq$ 0.}
$$

> [!note]
>
> Note that can specify a one sided alternative hypothesis if desired.
>
> No particular probability distribution is assumed on $X_i\&Y_i$



Perform the test as follows:

1. Having observed pairs $(x_{1},y_{1}),\ldots,(x_{n},y_{n})$ calculate the differences $z_{i}=x_{i}-y_{i}$.

2. Discard any values of $z_{i}$ that are 0, leaving a sample $z_{1},\ldots,z_{m}$ where $m\leq n$

3. Let $r_{1},\ldots,r_{m}$ be the **ranks** of $|z_{1}|,\ldots,|z_{m}|$. 

   If any values of $|z_{i}|$ are the same then the average of ranks that would be assigned is used instead.

4. For $i\in\{1,\ldots,m\}$ we define 
   $$
   \psi_{i}=\begin{cases}       1 & \text{if $z_{i}>0$;}\\       0 & \text{if $z_{i}<0$.}      \end{cases}
   $$
    and let
   $$
   \begin{align*} w^{+} &= \sum_{i=1}^{m}\psi_{i}r_{i} \text{ }\text{ (the sum of ranks for which $z_{i}>0$)}\\ w^{-} &= \sum_{i=1}^{m}\left(1-\psi_{i}\right)r_{i}\text{ }\text{ (the sum of ranks for which $z_{i}<0$)} \end{align*}
   $$

5. The test statistic, $w$, is defined 
   $$
   w = \text{min}(w^{+},w^{-}).
   $$



Depending on the chosen size/significance level of the test, $\alpha$ and the number of differences $m$, we compare $w$ to a relevant statistical table (e.g. H.R. Neave, Table 5.1).



## Mann-Whitney U Test

Suppose now that, rather than paired data, we have two **independent samples**$X_{1},\ldots,X_{m}$ and $Y_{1},\ldots,Y_{n}$ where $X_{i}$ and $Y_{j}$ are continuous random variables for $i\in\{1,\ldots,m\}$, $j\in\{1,\ldots,m\}$.

We assume that 

- each $X_{i}$ has the same probability distribution as the random variable $X$ with cumulative distribution function $F(.)$.

- each $Y_{j}$ has the same probability distribution as the random variable $Y$ with cumulative distribution function $G(.)$.

Our interest lies in whether or not the variables $X_{1},\ldots,X_{m}$ and $Y_{1},\ldots,Y_{n}$ have the same probability distribution.



The null and alternative hypotheses are stated as
$$
\text{H}_{0}\colon F(.)=G(.) \text{ }\text{ against }\text{ }\text{H}_{1}\colon F(u)\neq G(u) \text{ }\text{for at least one $u\in\mathbb{R}$.}
$$

> [!note]
>
> we make no assumption about the probability distribution of $X_{i}$ or $Y_{j}$ 



Tthe method of *Mann-Whitney U test* is outlined in the steps below.

1. Suppose that we have observed samples $x_{1},\ldots,x_{m}$ and $y_{1},\ldots,y_{n}$. We combine these into a single sample of size $m+n$. 

2. Let $r_{i}$ denote the rank of the $i^{\text{th}}$ member of the combined sample. 

   If two or more sample values are the same then the ranks are averaged (using a mean) and each of these equal sample values is assigned this mean rank.

3. We denote the combined sample $w_{1},\ldots,w_{m+n}$ and define
   $$
   \phi_{i} = \begin{cases}        1 & \text{if $w_{i}$ is from the sample $x_{1},\ldots,x_{m}$;}\\        0 & \text{if $w_{i}$ is from the sample $y_{1},\ldots,y_{n}$.}        \end{cases}
   $$

4. Define
   $$
   \begin{align*} r_{X} &= \sum_{i=1}^{m+n}\phi_{i}r_{i}\\ r_{Y} &= \sum_{i=1}^{m+n}(1-\phi_{i})r_{i} \end{align*}
   $$
   note that $r_{X}$ is the sum of the ranks for members of $x_{1},\ldots,x_{m}$ and $r_{Y}$ is the sum of ranks for members of $y_{1},\ldots,y_{n}$.

5. We calculate
   $$
   u_{X}=r_{X}-\frac{m(m+1)}{2}\text{ }\text{ and }\text{ }u_{Y}=r_{Y}-\frac{n(n+1)}{2}.
   $$
   The test statistic, $u$ is defined
   $$
   u=\text{min}\left(u_{X},u_{Y}\right)
   $$
   

Depending on the chosen size/significance level of the test, $\alpha$ and the size of the sample $m+n$, we compare $u$ to a relevant statistical table (e.g. H.R. Neave, Table 5.3). 



## One-sample Kolmogorov-Smirnov Test

a sample of independent and identically distributed random variables $X_{1},\ldots,X_{n}$

we wish to test whether or not these random variables have the same distribution as $X$, where $X$ has cumulative distribution function $F_{0}(x)$. 

11

 the hypotheses are
$$
\text{H}_{0}\colon F(x)=F_{0}(x) \text{ }\text{ against }\text{ }\text{H}_{1}\colon F(x)\neq F_{0}(x)\text{ }\text{ for at least one $x\in\mathbb{R}$.}
$$
where $F()$ denotes the cumulative distribution function of $X_{i}$ ($i\in\{1,\ldots,n\}$) then

The test statistic is
$$
D_{n}=\sup_{x\in\mathbb{R}}\left|F_{n}(x)-F_{0}(x)\right|
$$
 where $F_{n}(x)$ is the empirical distribution function based on an observed sample $x_{1},\ldots,x_{n}$.



Under $\text{H}_{0}$ we should expect $D_{n}$ to be small.

To obtain critical values for $D_{n}$ for a size $\alpha$ test and sample size $n$ we would use statistical tables (e.g. H.R. Neave Table 5.2(a)). 



## Two-sample Kolmogorov-Smirnov Test

Two independent samples of iid random variables, denoted $X_{1},\ldots,X_{m}$ and $Y_{1},\ldots,Y_{n}$ where:

- The variables $X_{1},\ldots,X_{m}$ each have the same distribution as $X$, where $X$ has cumulative distribution function $F(x)$.

- The variables $Y_{1},\ldots,Y_{n}$ each have the same distribution as $Y$, where $Y$ has cumulative distribution function $G(y)$.



We are interested whether or not $X_{1},\ldots,X_{m}$ and $Y_{1},\ldots,Y_{n}$ have the same probability distribution. In other words, is $F(u)=G(u)$ where $u\in\mathbb{R}$.



The hypotheses to test are
$$
\text{H}_{0}\colon F(u)=G(u) \text{ for all $u\in\mathbb{R}$}\text{ }\text{ against }\text{ }\text{H}_{1}\colon F(u)\neq G(u)  \text{ for at least one $u\in\mathbb{R}$.}
$$


We test these hypotheses using a **two-sample Kolmogorov-Smirnov test**.

- Given an observed sample $x_{1}\ldots,x_{m}$ of $X_{1},\ldots,X_{m}$, we define $F_{m}(x)$ to be the empirical distribution function of $X$, based on this sample.

- Given an observed sample $y_{1}\ldots,y_{n}$ of $Y_{1},\ldots,Y_{n}$, we define $G_{n}(y)$ to be the empirical distribution function of $Y$, based on this sample.



The test statistic is defined
$$
D_{m,n}=\sup_{u\in\mathbb{R}}\left|F_{m}(u)-G_{n}(u)\right|
$$
Under $\text{H}_{0}$ we should expect $D_{m,n}$ to be small.

To obtain critical values for $D_{m,n}$ for a size $\alpha$ test and sample size $m+n$, we would use statistical tables (e.g. H.R. Neave Table 5.2(c)).





# Chapter Ⅷ

## Beyesian Inference

> **Theorem - Bayes’ Theorem**
>
> For two events $A$ and $B$, with $\mathbb{P}(B)>0$, the statement of Bayes’ theorem is
> $$
> \mathbb{P}(A\mid B) = \frac{\mathbb{P}(B\mid A)\mathbb{P}(A)}{\mathbb{P}(B)}.
> $$
> Extending the above to more than two events, suppose that the events $A_{1},\ldots,A_{k}$ form a partition of a sample space $\Omega$. That is:
>
> - $A_{i}\cap A_{j} = \emptyset$ for $i\neq j$;
> - $A_{1}\cup\ldots\cup A_{k} = \Omega$;
> - $\mathbb{P}(A_{i})>0$ for all $i\in\{1,\ldots,k\}$.
>
> Then for any event $B$ with $\mathbb{P}(B)>0$
> $$
> \mathbb{P}(A_{i}\mid B) =\frac{\mathbb{P}(B\mid A_{i})\mathbb{P}(A_{i})}{\sum_{j=1}^{k}\mathbb{P}(B\mid A_{j})\mathbb{P}(A_{j})}.
> $$



Let $f(\mathbf{x};\theta)$ be the joint density of $X_{1},\ldots, X_{n}$, conditional on $\theta$. The inference process is as follows:

1. A **prior probability distribution** (commonly called a ‘prior’ or ‘prior distribution’) is specified for the parameter(s) of interest $\theta$. The prior distribution pdf/pmf is usually denoted $\pi(\theta)$.

2. Now, suppose that a sample of data $\mathbf{x} = (x_{1},\ldots, x_{n})^{\top}$ is observed. We construct a likelihood function using the specified model for the data and write this as
   $$
   \mathcal{L}(\theta;\mathbf{x}) = f(\mathbf{x};\theta).
   $$

3. We use **Bayes’ theorem** to combine the prior distribution and likelihood function and form a **posterior distribution** for $\theta$. Bayes’ theorem implies that 
   $$
   \text{Posterior distribution}\propto\text{ Prior distribution }\times\text{ Likelihood }
   $$
    We write this as
   $$
   \text{Posterior distribution}\propto\text{ Prior distribution }\times\text{ Likelihood }
   $$
   

## Example

We want to estimate the proportion $\theta$ of eligible voters in a British constituency who will vote Labour. A sample of 100 voters is taken, and each response is modeled as
$$
X_i \sim \text{Bernoulli}(\theta),\quad i=1,\dots,100.
$$
**Prior**

Because $\theta \in (0,1)$, we use a Beta prior:
$$
\theta \sim \text{Beta}(8,32),\qquad 
\pi(\theta)=\frac{\theta^{7}(1-\theta)^{31}}{B(8,32)}.
$$
This prior has mean $0.2$ and SD $0.062$, reflecting a belief that Labour support is likely around 20% and unlikely to exceed 40%.

**Data and Likelihood**

In the sample, 33 of 100 voters say they will vote Labour.
The likelihood is
$$
\mathcal{L}(\theta;\mathbf{x})=\binom{100}{33}\theta^{33}(1-\theta)^{67}.
$$
**Posterior**

Using
$$
\text{Posterior} \propto \text{Prior} \times \text{Likelihood},
$$
we obtain
$$
\pi(\theta \mid \mathbf{x})
    \propto \theta^{7}(1-\theta)^{31}\,\theta^{33}(1-\theta)^{67}
    \propto \theta^{40}(1-\theta)^{98}.
$$
This matches the kernel of a Beta distribution, so
$$
\theta \mid \mathbf{x} \sim \text{Beta}(41,99).
$$
where by:
$$
\begin{align*}
\int_{0}^{1}\pi(\theta\mid\mathbf{x})\mathrm{d}\theta &=1\\
\implies K\int_{0}^{1}\theta^{40}(1-\theta)^{98}\mathrm{d}\theta &= 1\\
\implies K\times B(41,99) &=1\\
\implies K &= \frac{1}{B(41,99)}
\end{align*}
$$
then

$$
\pi(\theta\mid\mathbf{x}) = \frac{\theta^{40}(1-\theta)^{98}}{B(41,99)}
$$


<div style="display: flex; justify-content: space-between;">
  <figure style="width: 48%; text-align: center;">
    <img src="C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251123051911381.png" alt="Image 1" style="width: 100%;">
    <figcaption>Prior</figcaption>
  </figure>
  <figure style="width: 48%; text-align: center;">
    <img src="C:\Users\19006\AppData\Roaming\Typora\typora-user-images\image-20251123051838306.png" alt="Image 2" style="width: 100%;">
    <figcaption>Posterior</figcaption>
  </figure>
</div>



# Chapter Ⅸ

## Choice of Prior distribution

### Personal Prior



### Uniform Prior

A **uniform prior** (or flat prior) is simply a prior distribution where each possible value of 

$\theta$ is, a priori, equally likely.

- If $\theta$ takes one of a set of discrete values then this prior would be a discrete uniform distribution.

- If $\theta$ is over a continuous range of values, then this prior would be a continuous uniform distribution.



### Conjugate Prior

A **conjugate prior** is a prior distribution where the resulting posterior distribution belongs to the same distributional family as the prior.

**Common conjugate prior distribution**

| Samplel/Model Distribution | Conjugate Prior Distribution |
| :------------------------: | :--------------------------: |
|           Normal           |            Normal            |
|     Binomial/Berouli.      |             Beta             |
|         Geometric          |             Beta             |
|       Poisson Gamma        |            Gamma             |
|     Exponential Gamma      |            Gamma             |
|           Gamma            |            Gamma             |



## Bayesian Point Estimation



Suppose that $t(\mathbf{x})$ is an estimate based on a sample of data $\mathbf{x}=(x_{1},\ldots,x_{n})^{\top}$ and it has been assumed that each observation, $x_{i}$, is a realisation of a random variable that has some probability distribution $\mathcal{D}(\theta)$.



Having specified a loss function, $L(\theta;t(\mathbf{x}))$ we define the **posterior expected loss** as
$$
\mathbb{E}\left[L\left(\theta,t(\mathbf{x})\right)\right] = \begin{cases}                                                            \int_{\Theta}L(\theta,t(\mathbf{x}))\pi(\theta\mid\mathbf{x})\mathrm{d}\theta &\text{ }\text{ (if $\theta$ is continuous);}\\ \sum_{\theta_{r}\in\Theta}L(\theta,t(\mathbf{x}))\mathbb{P}(\theta=\theta_{r}\mid\mathbf{x}) &\text{ }\text{ (if $\theta$ is discrete).}                                                                                                                        \end{cases}
$$
Once the posterior expected loss is determined, the **Bayes’ estimate** is defined
$$
\theta^{*} = \underset{t(\mathbf{x})}{\operatorname{argmin}}\mathbb{E}\left[L\left(\theta,t(\mathbf{x})\right)\right]
$$
The Bayes’ estimate, $\theta^{*}$, is the statistic $t(\mathbf{x})$ that minimises the posterior expected loss. In other words, the Bayes’ estimate has the smallest overall consequence when used as an estimate of $\theta$ based on the posterior distribution.



Bayes's estimate for common loss function

- Squared error loss
  $$
  t(\mathbf{x})=\mathbb{E}\left(\theta\mid\mathbf{x}\right).
  $$

- Absolute error loss
  $$
  t(\mathbf{x})=\theta_{med}
  $$

- $0-1$ error loss
  $$
  t(\mathbf{x})=\theta_{mode}
  $$

> [!note]
>
> Three popular **location** summaries for the posterior distribution are:
>
> 1. **Posterior mean**, defined
>    $$
>    \mathbb{E}(\theta\mid\mathbf{x})
>    $$
>    and we note that expectation is taken with respect to the posterior pdf/pmf $\pi(\theta\mid\mathbf{x})$.
>
> 2. **Posterior median**, defined as $\theta_{\text{med}}$ where
>    $$
>    \mathbb{P}(\theta\leq\theta_{\text{med}}\mid\mathbf{X}=\mathbf{x})=0.5.
>    $$
>
> 3. **Posterior mode**, defined
>    $$
>    \theta_{\text{mode}}=\underset{\theta\in\Theta}{\operatorname{argmax}}\pi(\theta\mid\mathbf{x}).
>    $$



## Bayesian Interval Estimation

### **1. Posterior Approximation for Large Samples**

If $X_{1},\ldots, X_{n}$ are i.i.d. and standard regularity conditions hold, then for large $n$ the posterior distribution is approximately
$$
\theta \mid \mathbf{x} \sim \mathcal{N}\!\left(\hat{\theta}, \frac{1}{\mathcal{I}(\hat{\theta})}\right),
$$
where

- $\hat{\theta}$ is the maximum likelihood estimator (MLE),
- $\mathcal{I}(\hat{\theta})$ is the Fisher information evaluated at $\hat{\theta}$.



### **2. Bayesian Credible Intervals**

Given a posterior distribution $\pi(\theta \mid x)$, a **credible interval** is an interval $C(x)$ satisfying:
$$
\mathbb{P}(\theta \in C(x)\mid x) = 1 - \alpha.
$$
This represents the posterior probability that the parameter lies in the interval.

> [!NOTE]
>
> Credible intervals are not unique.

------

### **3. Types of Credible Intervals**

#### **(a) Equal-Tailed Credible Interval**

Defined by:
$$
\mathbb{P}(\theta \le a \mid x) = \frac{\alpha}{2},\quad 
\mathbb{P}(\theta \ge b \mid x) = \frac{\alpha}{2}.
$$
Simple but not always the shortest.

------

#### **(b) Highest Posterior Density (HPD) Interval**

The **shortest** interval with posterior probability $1-\alpha$.

Defined as:
$$
C = \{\theta : \pi(\theta \mid x) \ge k\},
$$
for a constant $k$ chosen so that $\mathbb{P}(\theta \in C \mid x) = 1 - \alpha$.

HPD intervals contain the values of $\theta$ with the **highest posterior density** and are optimal in terms of length.

------

#### **(c) Central Credible Interval**

Sometimes used to mean the shortest symmetric interval or an interval centered around a point estimate, depending on context. More broadly, the term refers to choosing the “most central” region of the posterior.

In practice, HPD intervals are the standard choice when shortest length is desired.tive as we choose to suit our needs.
