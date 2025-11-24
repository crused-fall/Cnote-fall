# 目录 Catalogue

**概率与统计检验方法完整分类（中英对照版）**

**Complete Classification of Probability and Statistical Tests (Bilingual Version)**

------

## 一、单变量与分布检验 | One-Variable and Distribution Tests

用于检验单个变量的分布特征或与理论分布的比较。
(Used to test the distribution characteristics of a single variable or compare it to a theoretical distribution.)

| 检验方法                                                     | 核心用途                                                     | 参数/非参数               | 关键假设/特点                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------ |
| **单样本t检验**   **One-Sample t-test**                      | 样本均值 vs 已知总体均值   (Sample mean vs. Known population mean) | 参数   (Parametric)       | 数据近似正态分布   (Data approximately normally distributed) |
| **单样本Z检验**   **One-Sample Z-test**                      | 样本均值 vs 已知总体均值   (Sample mean vs. Known population mean) | 参数   (Parametric)       | 总体方差已知或大样本(n>30)   (Population variance known or large sample, n>30) |
| **Shapiro-Wilk检验**   **Shapiro-Wilk Test**                 | 数据是否服从正态分布   (Whether data follows a normal distribution) | -                         | 小样本(n<50)最有效   (Most effective for small samples, n<50) |
| **Kolmogorov-Smirnov检验**   **Kolmogorov-Smirnov Test**     | 样本是否来自特定分布   (Whether a sample comes from a specified distribution) | 非参数   (Non-parametric) | 也可用于两样本分布比较   (Can also compare two sample distributions) |
| **Anderson-Darling检验**   **Anderson-Darling Test**         | 正态性/分布拟合检验   (Normality/Goodness-of-fit test)       | -                         | 对分布尾部差异更敏感   (More sensitive to differences in distribution tails) |
| **Jarque-Bera检验**   **Jarque-Bera Test**                   | 基于偏度和峰度的正态性检验   (Normality test based on skewness and kurtosis) | -                         | 常用于金融、计量经济学   (Commonly used in finance, econometrics) |
| **卡方拟合优度检验**   **Chi-Square Goodness-of-Fit Test**   | 观察频数分布 vs 理论分布   (Observed frequency distribution vs. Theoretical distribution) | 非参数   (Non-parametric) | 适用于分类数据，期望频数≥5   (For categorical data, expected frequency ≥5) |
| **单样本符号检验**   **One-Sample Sign Test**                | 中位数是否等于某值   (Whether the median equals a specified value) | 非参数   (Non-parametric) | 仅使用符号信息，功效较低   (Uses only sign information, lower power) |
| **单样本Wilcoxon符号秩检验**   **One-Sample Wilcoxon Signed-Rank Test** | 中位数是否等于某值   (Whether the median equals a specified value) | 非参数   (Non-parametric) | 比符号检验更强，使用符号和秩   (Stronger than Sign test, uses signs and ranks) |

------

## 二、双样本与多组比较检验 | Two-Sample and Multiple Group Comparison Tests

用于比较两个或多个组别之间的差异。
(Used to compare differences between two or more groups.)

| 数据类型/设计                                                | 参数检验                                              | 非参数检验                                           |
| ------------------------------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------- |
| **两独立样本**   (Two Independent Samples)                   | **独立样本t检验**   (Independent Samples t-test)      | **Mann-Whitney U检验**   (Mann-Whitney U Test)       |
| **两配对/相关样本**   (Two Paired/Related Samples)           | **配对样本t检验**   (Paired Samples t-test)           | **Wilcoxon符号秩检验**   (Wilcoxon Signed-Rank Test) |
| **三组及以上独立样本**   (Three or More Independent Samples) | **单因素ANOVA**   (One-Way ANOVA)                     | **Kruskal-Wallis H检验**   (Kruskal-Wallis H Test)   |
| **三组及以上相关样本**   (Three or More Related Samples)     | **重复测量ANOVA**   (Repeated Measures ANOVA)         | **Friedman检验**   (Friedman Test)                   |
| **多因素设计**   (Multi-Factor Design)                       | **多因素ANOVA / MANOVA**   (Multi-Way ANOVA / MANOVA) | -                                                    |

------

## 三、方差齐性检验 | Homogeneity of Variances Tests

用于检验多组数据的方差是否相等，是参数检验（如ANOVA）的重要前提。
(Used to test if variances are equal across multiple groups; a key assumption for parametric tests like ANOVA.)

| 检验方法                                         | 核心用途                                                     | 关键假设/特点                                                |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **F检验**   **F-test**                           | 比较两个独立组的方差   (Compare variances of two independent groups) | 要求数据严格服从正态分布   (Requires data to be strictly normally distributed) |
| **Bartlett's检验**   **Bartlett's Test**         | 比较多个组的方差是否相等   (Compare if variances are equal across multiple groups) | 对正态性敏感，比Levene检验更强   (Sensitive to normality, more powerful than Levene's) |
| **Levene's检验**   **Levene's Test**             | 比较多个组的方差是否相等   (Compare if variances are equal across multiple groups) | 对偏离正态性更稳健   (More robust to deviations from normality) |
| **Brown-Forsythe检验**   **Brown-Forsythe Test** | Levene检验的变体，使用中位数   (Variant of Levene's test using median) | 对异常值更稳健   (More robust to outliers)                   |

------

## 四、比例与分类数据检验 | Proportions and Categorical Data Tests

用于处理分类变量（定性数据）和比例。
(Used for categorical variables (qualitative data) and proportions.)

| 检验方法                                                 | 核心用途                                                     | 关键假设/特点                                                |
| -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **单比例Z检验**   **One-Proportion Z-test**              | 样本比例 vs 已知总体比例   (Sample proportion vs. Known population proportion) | 大样本近似   (Large sample approximation)                    |
| **两比例Z检验**   **Two-Proportion Z-test**              | 比较两个独立组的比例   (Compare proportions of two independent groups) | 大样本近似   (Large sample approximation)                    |
| **卡方独立性检验**   **Chi-Square Test of Independence** | 两个分类变量是否相关/独立   (Whether two categorical variables are associated/independent) | 列联表分析，期望频数≥5   (Contingency table analysis, expected frequency ≥5) |
| **卡方同质性检验**   **Chi-Square Test of Homogeneity**  | 多个总体的分布是否相同   (Whether distributions are identical across multiple populations) | 多个样本的列联表分析   (Contingency table analysis for multiple samples) |
| **Fisher精确检验**   **Fisher's Exact Test**             | 2x2列联表的独立性   (Independence in 2x2 contingency tables) | 小样本或期望频数<5时使用   (Used for small samples or expected frequency <5) |
| **McNemar检验**   **McNemar's Test**                     | 配对分类数据的比例变化   (Test for change in proportions in paired categorical data) | 用于2x2配对列联表   (For 2x2 paired contingency tables)      |
| **Cochran's Q检验**   **Cochran's Q Test**               | 三个及以上相关二分变量的比较   (Compare three or more related dichotomous variables) | 是McNemar检验的多组扩展   (McNemar's test extended for multiple groups) |

------

## 五、相关与关联性检验 | Correlation and Association Tests

用于评估变量之间的相关关系或关联强度。
(Used to assess the relationship or association between variables.)

| 检验方法                                                     | 核心用途                                                     | 关键假设/特点                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Pearson相关检验**   **Pearson Correlation Test**           | 两连续变量的线性相关程度   (Linear relationship between two continuous variables) | 要求变量正态分布   (Requires variables to be normally distributed) |
| **Spearman秩相关检验**   **Spearman Rank Correlation Test**  | 两变量的单调关系强度   (Monotonic relationship between two variables) | 基于秩，不要求正态分布   (Rank-based, no normality assumption) |
| **Kendall's τ相关检验**   **Kendall's Tau Rank Correlation Test** | 两变量的单调关系强度   (Monotonic relationship between two variables) | 基于一致对，小样本更稳健   (Based on concordant pairs, more robust for small samples) |

------

## 六、回归分析中的检验 | Tests in Regression Analysis

用于验证回归模型的假设和评估模型效果。
(Used to verify regression model assumptions and evaluate model performance.)

| 检验方法                                                     | 核心用途                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **回归系数t检验**   **t-test for Regression Coefficients**   | 检验单个自变量对因变量的影响是否显著   (Test if a single independent variable significantly affects the dependent variable) |
| **回归模型F检验**   **F-test for Overall Regression Model**  | 检验整个回归模型的显著性   (Test the overall significance of the regression model) |
| **Durbin-Watson检验**   **Durbin-Watson Test**               | 检验回归残差是否存在自相关性   (Test for autocorrelation in regression residuals) |
| **Breusch-Pagan / White检验**   **Breusch-Pagan / White Test** | 检验回归模型是否存在异方差性   (Test for heteroscedasticity in the regression model) |
| **VIF (方差膨胀因子)**   **Variance Inflation Factor (VIF)** | 诊断自变量间的多重共线性（非检验，但重要）   (Diagnose multicollinearity among independent variables - not a test, but important) |
| **似然比检验**   **Likelihood Ratio Test (LRT)**             | 比较两个嵌套模型的拟合优度   (Compare the goodness-of-fit of two nested models) |
| **Wald检验**   **Wald Test**                                 | 检验一个或多个参数是否为零   (Test whether one or more parameters are zero) |
| **Score检验**   **Score Test (Lagrange Multiplier Test)**    | 与LRT、Wald检验类似，只需估计原模型   (Similar to LRT and Wald test, only requires estimating the null model) |

------

## 七、时间序列检验 | Time Series Tests

专门用于分析时间序列数据。
(Specifically for analyzing time series data.)

| 检验方法                                                     | 核心用途                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Augmented Dickey-Fuller (ADF) 检验**   **Augmented Dickey-Fuller (ADF) Test** | 检验时间序列是否存在单位根（是否平稳）   (Test for a unit root in a time series - is it stationary?) |
| **Granger因果检验**   **Granger Causality Test**             | 检验一个序列是否有助于预测另一个序列   (Test if one time series helps predict another) |
| **Ljung-Box检验**   **Ljung-Box Test**                       | 检验时间序列残差是否存在自相关   (Test for autocorrelation in time series residuals) |

------

## 八、非参数与随机性检验 | Non-Parametric and Randomness Tests

不依赖于总体分布假设的检验方法。
(Tests that do not rely on assumptions about the population distribution.)

| 检验方法                                                     | 核心用途                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Runs检验 (游程检验)**   **Runs Test (Wald-Wolfowitz Test)** | 检验一个二元序列的随机性   (Test the randomness of a binary sequence) |

------

## 九、生存分析检验 | Survival Analysis Tests

用于分析直到某个事件发生的时间数据。
(Used to analyze time-to-event data.)

| 检验方法                                                 | 核心用途                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| **Log-rank检验**   **Log-Rank Test**                     | 比较两组或多组生存曲线   (Compare two or more survival curves) |
| **Cox比例风险模型**   **Cox Proportional Hazards Model** | 分析多个因素对生存时间的影响   (Analyze the effect of multiple factors on survival time) |

------

## 十、其他特殊检验 | Other Specialized Tests

| 检验方法                                                 | 核心用途                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| **Grubbs'检验**   **Grubbs' Test**                       | 检验单变量数据集中是否存在异常值   (Test for the presence of an outlier in a univariate dataset) |
| **二项检验/泊松检验**   **Binomial Test / Poisson Test** | 检验数据是否遵循二项分布或泊松分布   (Test if data follows a Binomial or Poisson distribution) |

------

# 选择指南 | Selection Guide

**实用决策路径**：
(Practical Decision Path:)

- **第一步**：明确你的研究问题和数据类型（连续、分类）。
  (Step 1: Define your research question and data type - continuous, categorical.)
- **第二步**：确定数据设计（单样本、独立样本、配对样本、多组）。
  (Step 2: Determine the data design - one sample, independent samples, paired samples, multiple groups.)
- **第三步**：检查参数检验的前提条件（特别是正态性和方差齐性）。
  (Step 3: Check the assumptions for parametric tests - especially normality and homogeneity of variances.)
- **第四步**：根据以上步骤，从上表中选择最合适的检验方法。
  (Step 4: Select the most appropriate test from the tables above based on the previous steps.)



# 一、单变量与分布检验

## 单样本t检验

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



## 单样本Z检验

## Shapiro-Wilk检验

## Kolmogorov-Smirnov检验

## Anderson-Darling检验

## Jarque-Bera检验

## 卡方拟合优度检验

## 单样本符号检验

## 单样本Wilcoxon符号秩检验

------

# 二、双样本与多组比较检验

## 独立样本t检验

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

### 方差齐性 t 检验（Pooled t-test）

假设两个总体方差相同：
$$
\sigma_X^2=\sigma_Y^2.
$$
合并方差估计：
$$
S_p^2=\frac{(n_1-1)S_X^2 + (n_2-1)S_Y^2}{n_1+n_2-2}.
$$
统计量：
$$
t=\frac{\bar X - \bar Y}{S_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}, \quad t\sim t_{n_1+n_2-2}.
$$

### Welch t 检验（方差不齐性 t 检验）

不假设方差相等。

统计量：
$$
t=\frac{\bar X - \bar Y}{\sqrt{S_X^2/n_1 + S_Y^2/n_2}}.
$$


## 配对样本t检验

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
用途：比较两个相关样本（例如前后对比、左手右手测量）。

方法：将差值 $D_i=X_i-Y_i$ 看作一个新样本。

检验：

- $H_0:\mu_D = 0$

统计量：
$$
t=\frac{\bar D}{S_D/\sqrt{n}},\quad t\sim t_{n-1}.
$$


## 单因素ANOVA

## 重复测量ANOVA

## 多因素ANOVA / MANOVA

## Mann-Whitney U检验

## Wilcoxon符号秩检验

## Kruskal-Wallis H检验

## Friedman检验

------

# 三、方差齐性检验

## F检验

## Bartlett's检验

## Levene's检验

## Brown-Forsythe检验

------

# 四、比例与分类数据检验

## 单比例Z检验

## 两比例Z检验

## 卡方独立性检验

## 卡方同质性检验

## Fisher精确检验

## McNemar检验

## Cochran's Q检验

------

# 五、相关与关联性检验

## Pearson相关检验

## Spearman秩相关检验

## Kendall's τ相关检验

------

# 六、回归分析中的检验

## 回归系数t检验

## 回归模型F检验

## Durbin-Watson检验

## Breusch-Pagan检验

## White检验

## 方差膨胀因子(VIF)

## 似然比检验

## Wald检验

## Score检验

------

# 七、时间序列检验

## Augmented Dickey-Fuller (ADF) 检验

## Granger因果检验

## Ljung-Box检验

------

# 八、非参数与随机性检验

## Runs检验（游程检验）

------

# 九、生存分析检验

## Log-rank检验

## Cox比例风险模型

------

# 十、其他特殊检验

## Grubbs'检验

## 二项检验

## 泊松检验



