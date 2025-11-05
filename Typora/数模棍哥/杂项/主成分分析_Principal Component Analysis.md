[https://algo.ac.cn/archives/shen-ru-qian-chu-zhu-cheng-fen-fen-xi-pca-cong-yuan-li-dao-tui-dao-de-wan-quan-zhi-nan]:深入浅出主成分分析（PCA）：从原理到推导的完全指南
[https://zhuanlan.zhihu.com/p/37777074]:主成分分析（PCA）原理详解

[https://chatgpt.com/c/68ee551e-eb60-8329-9897-c57cd4681117]:

[https://chatgpt.com/c/68e984dd-8f18-832c-bf37-377e1b37e898]

# PCA的概念

**PCA(Principal Component Analysis)**，即**主成分分析**方法，是一种使用最广泛的数据降维算法.

PCA将原始的 n 维特征映射到 k 维正交新特征（主成分）。它通过在原空间中依次寻找方差最大的正交方向来构造新坐标轴：

- 第1轴取方差最大方向；
- 第2轴在与第1轴正交的平面内方差最大；
- 第3轴在与前两轴正交的平面内方差最大，依此类推

多数方差信息集中在前 k 个主成分中，后面轴的方差近 0 ，可忽略。保留前 k 个主成分即完成降维



# PCA的用途

对于一些数据点，其特征维度看起来很高，其中独立带来信息的维度可能并不多

例如在三维空间中的一条空间直线，它可以用一张二维平面无损的表示。上述例子类似于给定一个向量组，这个向量组中存在有冗余向量，即向量组中的向量之间是线性相关的。当向量组去除冗余向量后，可以降低计算复杂度和空间复杂度。此外，对于一些无法用低维的情况来表示高维的情况，其可能仅需要少数的特征/维度就能表示绝大部分的情况，对于计算资源有限等情况是非常有帮助的。

上述描述的就是**降维**（Dimensionality Reduction），其目标是将高维的数据点变换为低维空间数据点，并尽可能的减少信息的损失。

# 数学推导



## 数学目标(形式1)

给定数据矩阵 $X \in \mathbb{R}^{n\times p}$，**中心化**后（每列减去均值），PCA要找到一组单位向量 $w_1, w_2, \dots, w_k$ （称为主成分方向），使得：
$$
\max_{w_i} \mathrm{Var}(Xw_i)
$$
并且这些 $w_i$ 两两正交

即：

- 第一个方向 $w_1$：使投影方差最大；
- 第二个方向 $w_2$：在与 $w_1$ 正交的约束下，使方差次大；
- 依此类推

### 1.矩阵推导（从最大方差出发）

1. **数据准备**

设中心化数据矩阵
$$
X = 
\begin{bmatrix}
x_1^\top \\
x_2^\top \\
\vdots \\
x_n^\top
\end{bmatrix}
\in \mathbb{R}^{n\times p}, 
\quad \text{且 } \sum_i x_i = 0.
$$
协方差矩阵为
$$
\Sigma = \frac{1}{n} X^\top X.
$$

------

2. **最大方差方向**

第一个主成分方向 $w_1$ 满足
$$
\max_{w_1} \ \mathrm{Var}(Xw_1) = \max_{w_1} \ w_1^\top \Sigma w_1, \quad \text{s.t. } \|w_1\|=1.
$$
用拉格朗日乘子法：
$$
L(w_1,\lambda) = w_1^\top \Sigma w_1 - \lambda(w_1^\top w_1 -1).
$$
求导得
$$
\Sigma w_1 = \lambda w_1.
$$
所以 $w_1$ 是协方差矩阵的特征向量，$\lambda$ 为特征值。最大特征值对应最大方差方向。

------

3. **后续主成分**

第 $k$ 个主成分：
$$
\max_{w_k} w_k^\top \Sigma w_k, \quad 
\text{s.t. } \|w_k\|=1, \ w_k^\top w_i=0 \ (i<k).
$$
解为协方差矩阵第 $k$ 大特征向量

------

### 2.SVD 推导（从线性代数出发）

对中心化后的 $X$ 进行奇异值分解：
$$
X = U S V^\top,
$$
其中

- $U \in \mathbb{R}^{n\times p}$：左奇异向量（样本方向）
- $S = \operatorname{diag}(s_1, \dots, s_p)$：奇异值
- $V \in \mathbb{R}^{p\times p}$：右奇异向量（特征方向）

------

1. **协方差与特征分解**

$$
\Sigma = \frac{1}{n}X^\top X 
= \frac{1}{n} (V S U^\top)(U S V^\top)
= V \frac{S^2}{n} V^\top.
$$

所以：

- $V$：主成分方向
- $S^2/n$：特征值（对应每个主成分的方差）

------

2. **主成分得分**

主成分得分矩阵
$$
Z = XV = U S.
$$
第 $k$ 个主成分得分为第 $k$ 列 $U_k s_k$。

------

3. **截断与降维**

取前 $r$ 个奇异值与向量：
$$
X \approx U_r S_r V_r^\top,
$$
这是最优的秩 $r$ 近似（Eckart–Young 定理）：
$$
\min_{\operatorname{rank}(Y)=r} \|X - Y\|_F = \|X - U_r S_r V_r^\top\|_F.
$$

## 数学目标(形式2)

这个问题可以建模为一个有约束的优化问题：最小化总重建误差
$$
\begin{aligned}
\arg\min_{\{y_j\}_{j=1}^k} \quad 
& \sum_{i=1}^m 
\left\| 
\boldsymbol{x}_i - \sum_{j=1}^k (\boldsymbol{x}_i^\top \boldsymbol{y}_j)\boldsymbol{y}_j 
\right\|_2^2 \\
\text{s.t.} \quad 
& \boldsymbol{y}_i^\top \boldsymbol{y}_j = 0, \quad i \ne j,\ i,j \in \{1,2,\ldots,k\}, \\
& \boldsymbol{y}_i^\top \boldsymbol{y}_i = 1, \quad i \in \{1,2,\ldots,k\}.
\end{aligned}

$$

### **推导**

1. **目标函数矩阵化**

数据点 $x_i$ 向由 $k$ 个基向量张成的子空间的投影可以表示为：
$$
\hat{x}_i = YY^{\top} x_i, \quad \hat{x}_i \in \mathbb{R}^n
$$
其中
$$
Y = [y_1, y_2, \dots, y_k] \in \mathbb{R}^{n \times k}
$$
表示子空间的正交基矩阵。

------

于是目标函数为：
$$
\sum_{i=1}^m \| x_i - YY^{\top} x_i \|_2^2
$$
而该式正是矩阵 **Frobenius 范数** 的平方形式，因此可写为：
$$
\| X^{\top} - YY^{\top} X^{\top} \|_F^2
$$

------

因此，PCA 的优化问题可以表述为：
$$
\min_{Y} \ \| X^{\top} - YY^{\top} X^{\top} \|_F^2
\quad \text{s.t.} \quad Y^{\top}Y = I_k
$$
其中 $I_k$ 是 $k$ 阶单位矩阵。

2. **利用矩阵的迹化简**

由 Frobenius 范数的定义，有
$$
\|A\|_F^2 = \mathrm{tr}(A^{\top}A)
$$
因此对于目标函数：
$$
\|X^{\top} - YY^{\top}X^{\top}\|_F^2
$$
可得：
$$
\begin{aligned}
\|X^{\top} - YY^{\top}X^{\top}\|_F^2
&= \mathrm{tr}\!\left[(X^{\top} - YY^{\top}X^{\top})^{\top}(X^{\top} - YY^{\top}X^{\top})\right] \\[4pt]
&= \mathrm{tr}\!\left[(X - XYY^{\top})(X^{\top} - YY^{\top}X^{\top})\right] \\[4pt]
&= \mathrm{tr}\!\left(XX^{\top} - XYY^{\top}X^{\top} - XYY^{\top}X^{\top} + XYY^{\top}YY^{\top}X^{\top}\right)
\end{aligned}
$$

------

利用约束条件 $Y^{\top}Y = I_k$，有：
$$
XYY^{\top}YY^{\top}X^{\top} = XY(Y^{\top}Y)Y^{\top}X^{\top} = XYY^{\top}X^{\top}
$$
于是上式化简为：
$$
\|X^{\top} - YY^{\top}X^{\top}\|_F^2 = \mathrm{tr}(XX^{\top}) - \mathrm{tr}(XYY^{\top}X^{\top})
$$
由于 $\mathrm{tr}(XX^{\top})$ 为常数（与 $Y$ 无关），优化问题可简化为：
$$
\min_Y \|X^{\top} - YY^{\top}X^{\top}\|_F^2
\quad \Longleftrightarrow \quad
\max_Y \ \mathrm{tr}(Y^{\top}X^{\top}XY)
$$

3. **谱分解和最终求解**

已知
$$
C = X^{\top}X, \quad C^{\top} = C
$$
即 $C$ 为对称矩阵。根据谱分解定理，存在单位正交矩阵 $Q$ 和对角矩阵 $\Lambda = \mathrm{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$，使得
$$
C = Q\Lambda Q^{\top}
$$
其中 $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_n \ge 0$。

------

代入优化问题：
$$
\max_Y \ \mathrm{tr}(Y^{\top} C Y)
\quad \text{s.t.} \quad Y^{\top}Y = I_k
$$
即：
$$
\max_Y \ \mathrm{tr}(Y^{\top} Q\Lambda Q^{\top}Y)
\quad \text{s.t.} \quad Y^{\top}Y = I_k
$$
由于 $Q$ 是单位正交矩阵（$Q^{\top}Q = I$），可令
$$
Z = Q^{\top}Y
$$
则有约束 $Z^{\top}Z = I_k$，目标函数化为：
$$
\max_Z \ \mathrm{tr}(Z^{\top}\Lambda Z)
\quad \text{s.t.} \quad Z^{\top}Z = I_k
$$


对角矩阵 $\Lambda$ 的对角元素为 $\lambda_1, \lambda_2, \dots, \lambda_n$。
 记 $Z = [z_1, z_2, \dots, z_k]$，则目标函数为：
$$
\mathrm{tr}(Z^{\top}\Lambda Z) = \sum_{i=1}^k z_i^{\top}\Lambda z_i
$$
约束为 $z_i^{\top}z_j = \delta_{ij}$。

为了最大化 $\sum_i z_i^{\top}\Lambda z_i = \sum_i \sum_j \lambda_j (z_{ij})^2$，
 应当让每个 $z_i$ 的能量集中在最大的几个 $\lambda_j$ 对应的分量上。



令特征值按降序排列 $\lambda_1 \ge \lambda_2 \ge \dots$。
 则最优选择是：
$$
z_1 = [1, 0, 0, \dots, 0]^{\top}, \quad
z_2 = [0, 1, 0, \dots, 0]^{\top}, \quad \dots \quad
z_k = [0, 0, \dots, 1, 0, \dots]^{\top}
$$
即：
$$
Z_{\text{opt}} = 
\begin{bmatrix}
I_k \\[4pt]
0
\end{bmatrix}
$$


由 $Z = Q^{\top}Y$，可得：
$$
Y = QZ = Q
\begin{bmatrix}
I_k \\[4pt]
0
\end{bmatrix}
= [q_1, q_2, \dots, q_k]
$$
其中 $q_i$ 是 $C = X^{\top}X$ 的前 $k$ 个特征向量。

------

**结论：**
 最优的 $Y^*$ 由协方差矩阵 $X^{\top}X$ 的前 $k$ 个最大特征值对应的特征向量组成
 这就是 PCA 的主成分方向



# 解释性分析



## 方差解释率

方差解释率（**explained variance ratio**）表示主成分分析（PCA）中，每个主成分对原始数据总方差的解释程度。

定义：
 设原始数据的协方差矩阵为 $C = X^\top X / n$，其特征值为
$$
\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_n > 0
$$
则第 $k$ 个主成分的方差解释率为
$$
r_k = \frac{\lambda_k}{\sum_{i=1}^n \lambda_i}
$$
累计方差解释率为
$$
R_k = \frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^n \lambda_i}
$$
含义：

- $r_k$：单个主成分的贡献度。
- $R_k$：前 $k$ 个主成分共同保留了原始数据方差信息的比例。

常用判断：
 若 $R_k \ge 0.85$ 或 $0.90$，说明前 $k$ 个主成分能较好地代表原始数据，可用于降维



## 载荷矩阵分析

载荷矩阵 $L$ 给出每个原始变量与每个主成分的线性关系（权重或相关）。常用定义：

- 若用协方差矩阵（未标准化变量）：
  $$
  L = V \Lambda^{1/2},
  $$
  其中 $V$ 是协方差的特征向量（列正交），$\Lambda$ 对角包含对应特征值 $\lambda_k$。

- 若先把变量按列标准化（零均值、单位方差），则 $L$ 同样等于 $V\Lambda^{1/2}$，并且 $L_{jk}$ 等于变量 $j$ 与主成分 $k$ 的相关系数。

### 重要恒等与释义（公式）

1. **主成分方差**：
    $\mathrm{Var}(\text{PC}_k)=\lambda_k$.

2. **变量与主成分的相关**（标准化变量时）：
   $$
   \mathrm{corr}(x_j,\ \text{PC}_k)=L_{jk}=v_{jk}\sqrt{\lambda_k}.
   $$

3. **每个主成分上所有变量载荷的平方和等于该主成分的方差**：
   $$
   \sum_{j=1}^p L_{jk}^2=\lambda_k.
   $$

4. **变量的共同度（communalities）**：第 $j$ 个变量被前 $K$ 个主成分解释的方差
   $$
   h_j^2=\sum_{k=1}^K L_{jk}^2.
   $$
   若变量标准化，$0\le h_j^2\le1$。未被解释的部分是**唯一度** $u_j^2=1-h_j^2$。

5. **变量对某一主成分的贡献（contribution）**：
    对 PC$_k$ 而言，变量 $j$ 的相对贡献
   $$
   \text{contrib}_{j,k}=\frac{L_{jk}^2}{\sum_{i=1}^p L_{ik}^2}=\frac{L_{jk}^2}{\lambda_k}.
   $$
   乘 100 得百分比。

### 载荷的读法（实务）

- **绝对值大小**：$|L_{jk}|$ 大说明变量 $j$ 在 PC$_k$ 上权重大，解释力强。常用经验阈值：$|L|\ge0.3$ 可视为中等，$\ge0.5$ 为强贡献（仅作经验）。
- **符号**：正负表示方向。若多个变量在同一主成分上同号且模值大，则该主成分代表这组变量的“共同趋势”；若符号相反，则该主成分刻画变量间的对立/差异。
- **交叉载荷（cross-loading）**：若一个变量在多个主成分上都有较大载荷，说明该变量是复合特征，不利于简单解释。可考虑旋转或保留更多成分。
- **共同度低的变量**：若 $h_j^2$ 很低，说明前 $K$ 个主成分不能很好代表该变量，考虑单独分析或保留变量。

### 旋转（rotation）与可解释性

- **目的**：保持解释的总方差不变，但改变载荷分布，使每个变量在少数成分上有高载荷，从而更易解释。
- **正交旋转**（如 Varimax）：保持主成分之间正交。常用于要保持独立成分的场景。
- **斜交旋转**（oblique）：允许成分相关，可能更贴近实际因子结构，但会让成分相关矩阵出现非零项。
- **注意**：旋转后载荷发生变化，原始主成分方差分配也会变化（但总被解释方差不变）。是否旋转取决于解释需求。

### 可视化与量化工具

- **载荷表（loading table）**：列出 $L_{jk}$，并标注显著项（按阈值）。
- **双标图（biplot）**：变量作为箭头，长度表示载荷绝对值，方向表示与主成分的关系。适合二维主成分可视化。
- **热图**：载荷矩阵热图有助发现变量聚类。
- **贡献图**：显示每个变量对某 PC 的贡献百分比。
- **共同度表**：列出 $h_j^2$ 以评估每一变量被解释的程度。

### 稳定性检验

载荷有采样变动。实践中用两种方法评估稳定性：

1. **Bootstrap 重抽样**：重复抽样计算载荷分布并给出置信区间。
2. **交叉验证**：分割样本，比较各子样本载荷一致性。



# 具体过程

1. 输入数据矩阵 $X\in\mathbb R^{n\times p}$。每行是样本

    

2. 中心化：$\mu=\tfrac{1}{n}\sum_{i=1}^n x_i$，$X_c = X - \mathbf 1\mu^\top$

    

3. 计算协方差（若用 $1/n$ 约定）： $\Sigma=\tfrac{1}{n}X_c^\top X_c$

    

4. 求特征分解：$\Sigma = V\Lambda V^\top$，特征值按降序 $\lambda_1\ge\cdots\ge\lambda_p\ge0$
    或用 SVD： $X_c = U S V^\top$，奇异值 $s_1\ge\cdots\ge s_r>0$。注意 $\lambda_i = s_i^2/n$

    

5. 取前 $k$ 列 $V_k=[v_1,\dots,v_k]$。得分矩阵 $Z_k = X_c V_k$

    

6. 重构（中心化形式）： $\widehat X = Z_k V_k^\top = X_c V_k V_k^\top.$ 若需恢复原尺度，令 $\widehat X_{\text{orig}}=\widehat X + \mathbf 1\mu^\top$

    

7. 解释方差比：$\text{explained ratio}_i=\lambda_i/\sum_j\lambda_j$

    

8. 误差关系：$\|X_c - \widehat X\|_F^2 = \sum_{i=k+1}^r s_i^2 = n\sum_{i=k+1}^r \lambda_i.$