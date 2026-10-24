# Artificial Intelligence & Machine Learning (AI/ML) — Zero to Deep Mastery

A comprehensive, zero-level to deep technical curriculum covering mathematical foundations, classical machine learning algorithms, deep neural architectures, computer vision, transformers, Large Language Models (LLMs), and production MLOps deployment.

---

## Course Curriculum Overview

| Module | Focus Area | Lessons |
| :--- | :--- | :--- |
| **Module A** | Mathematics, NumPy Vectorization & Data Pipelines | Lessons 01 – 03 |
| **Module B** | Classical Machine Learning (Theory, Math & Code) | Lessons 04 – 08 |
| **Module C** | Deep Learning Foundations & PyTorch Mechanics | Lessons 09 – 11 |
| **Module D** | Computer Vision & Modern Architectures | Lessons 12 – 13 |
| **Module E** | NLP, Transformers & Large Language Models (LLMs) | Lessons 14 – 16 |
| **Module F** | Tools, MLOps, Hardware & Production Serving | Lesson 17 |

---

## Complete Lesson Index

### Module A · Foundations & Data Pipelines
1. [0001 · Mathematical Foundations & Vectorized NumPy](lessons/0001-math-foundations-linear-algebra-calculus-probability.html)
   - Tensors, Matrix Multiplication, Multivariable Gradients (&nabla;f), Maximum Likelihood, SIMD NumPy vectorization, Broadcasting.
2. [0002 · Data Preprocessing & Feature Engineering](lessons/0002-data-preprocessing-and-feature-engineering.html)
   - Missing data imputation, Categorical encodings, Scalers (Standard vs MinMax), Class imbalance (SMOTE), Leak-free Scikit-Learn Pipelines.
3. [0003 · Dimensionality Reduction: PCA, t-SNE & UMAP](lessons/0003-dimensionality-reduction-pca-tsne-umap.html)
   - Curse of Dimensionality, Covariance matrix, Eigenvalues, NumPy PCA from scratch, t-SNE vs UMAP. *(Includes StatQuest Video)*

### Module B · Classical Machine Learning
4. [0004 · Linear Regression & Gradient Descent](lessons/0004-linear-regression-and-gradient-descent.html)
   - Closed-form Normal Equation, Batch/Mini-batch/Stochastic Gradient Descent, Ridge (L2) vs Lasso (L1) regularization, NumPy implementation.
5. [0005 · Logistic Regression & Classification Metrics](lessons/0005-logistic-regression-and-classification-metrics.html)
   - Sigmoid function, Log-odds, Binary Cross-Entropy derivation, Precision, Recall, F1-score, ROC-AUC, NumPy implementation.
6. [0006 · Decision Trees & Ensemble Learning](lessons/0006-decision-trees-and-ensemble-learning.html)
   - Gini Impurity vs Shannon Entropy, Bagging vs Boosting, Random Forests, XGBoost/LightGBM production pipelines. *(Includes StatQuest Video)*
7. [0007 · Support Vector Machines (SVM) & K-Nearest Neighbors (KNN)](lessons/0007-support-vector-machines-and-knn.html)
   - Maximum Margin Hyperplane, Slack variables, RBF Kernel Trick, KD-Tree and Ball-Tree spatial search indexing.
8. [0008 · Clustering & Anomaly Detection](lessons/0008-unsupervised-learning-clustering-and-anomaly-detection.html)
   - K-Means Lloyd's algorithm, DBSCAN density clustering, Hierarchical dendrograms, Isolation Forests for fraud/cyber intrusion detection.

### Module C · Deep Learning Foundations & PyTorch
9. [0009 · Neural Networks & Backpropagation Calculus](lessons/0009-neural-networks-and-backpropagation-calculus.html)
   - Universal approximation, Multivariable Chain Rule derived, 2-layer Neural Network from scratch in pure NumPy. *(Includes 3Blue1Brown & Karpathy Videos)*
10. [0010 · PyTorch Foundations & Canonical Training Loop](lessons/0010-pytorch-foundations-autograd-and-training-loop.html)
    - GPU tensors, Dynamic computation graphs (Autograd), Custom `nn.Module`, 5-step canonical train/eval loop.
11. [0011 · Deep Learning Optimization & Regularization](lessons/0011-deep-learning-optimization-and-regularization.html)
    - Momentum, RMSprop, AdamW decoupled weight decay, BatchNorm vs LayerNorm, Dropout, Gradient clipping, Cosine learning rate scheduling.

### Module D · Computer Vision
12. [0012 · Convolutional Neural Networks & ResNets](lessons/0012-convolutional-neural-networks-and-modern-architectures.html)
    - Spatial locality, 2D Convolution kernels, Stride, Padding, Pooling, ResNet Skip Connections ($F(x)+x$), PyTorch Residual block.
13. [0013 · Transfer Learning & Vision Transformers (ViT)](lessons/0013-transfer-learning-and-vision-transformers.html)
    - Pretrained backbones, Linear probing vs fine-tuning, Image patch tokenization, Global self-attention across visual tokens.

### Module E · NLP & Large Language Models (LLMs)
14. [0014 · NLP Foundations, Dense Embeddings & Sequential RNNs](lessons/0014-nlp-foundations-embeddings-and-rnns.html)
    - Byte-Pair Encoding (BPE), Word2Vec semantics, Recurrent hidden state ($h_t$), Vanishing gradients, LSTM Forget/Input/Output gates.
15. [0015 · The Transformer Architecture & Self-Attention](lessons/0015-the-transformer-architecture-and-self-attention.html)
    - Parallel attention, $QK^T/\sqrt{d}$ formula, Multi-Head Attention, Causal lower-triangular masking, GPT architecture. *(Includes 3Blue1Brown & Karpathy Videos)*
16. [0016 · LLM Fine-Tuning, LoRA, RAG & Inference Optimization](lessons/0016-llm-fine-tuning-lora-rag-and-inference.html)
    - SFT, Low-Rank Adaptation (LoRA), QLoRA 4-bit NF4, Retrieval-Augmented Generation (Vector DBs), KV Cache, PagedAttention.

### Module F · Tools, MLOps & Production
17. [0017 · MLOps, Hardware Acceleration & Production Serving](lessons/0017-mlops-experiment-tracking-and-model-serving.html)
    - WandB experiment tracking, Optuna Bayesian tuning, CUDA FP16/BF16 Automatic Mixed Precision, ONNX runtime, FastAPI low-latency microservice.
