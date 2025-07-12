**关于翻译的重要说明**

以下文本已通过 AI 工具（自动翻译）进行了翻译。由于该过程可能包含错误或不准确之处，我们建议参考英文或西班牙文原文，以确保信息的准确性。

---

[![English](https://img.shields.io/badge/lang-English-blue)](README.en.md)
[![Español](https://img.shields.io/badge/lang-Español-purple)](README.es.md)
[![Français](https://img.shields.io/badge/lang-Français-yellow)](README.fr.md)
[![简体中文](https://img.shields.io/badge/lang-简体中文-darkred)](README.zh_CN.md)
[![繁體中文](https://img.shields.io/badge/lang-繁體中文-darkblue)](README.zh_TW.md)
[![Português](https://img.shields.io/badge/lang-Português-brightgreen)](README.pt.md)
[![Deutsch](https://img.shields.io/badge/lang-Deutsch-blueviolet)](README.de.md)
[![Italiano](https://img.shields.io/badge/lang-Italiano-orange)](README.it.md)
[![日本語](https://img.shields.io/badge/lang-日本語-yellowgreen)](README.jp.md)
[![العربية](https://img.shields.io/badge/lang-العربية-lightgrey)](README.ar.md)
[![עברית](https://img.shields.io/badge/lang-עברית-teal)](README.he.md)
[![Русский](https://img.shields.io/badge/lang-Русский-lightblue)](README.ru.md)
[![Українська](https://img.shields.io/badge/lang-Українська-skyblue)](README.uk.md)


# 设置
配合 VS Code 扩展使用：[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

安装 TeX 编译器（例如 Linux 下的 TeX Live）。
```bash
sudo apt install texlive-full
```

# 摘要
在水产养殖行业，持续监测鱼类健康至关重要。随着计算机视觉技术的发展，该任务可实现可扩展且低侵入的监测。WildSense 是 UTFSM 的衍生初创公司，为鲑鱼体重估算提供服务，其中实例分割与基于检测的跟踪是其流程的核心组成部分，但仍存在优化空间。

本项目在鲑鱼实例分割数据库上进行了精细化处理，仅保留与研究相关的案例，因而可以训练 YOLO 模型，其性能优于以往研究。训练过程中对超参数进行优化，并将模型导出为 TensorRT 格式，从而减少推理时间。

结果表明，更精确的数据库显著提升了模型质量；通过超参数优化，模型效果得到进一步提高；而将模型转换为 TensorRT 则能够在性能损失极小的情况下显著缩短推理时间。

[**阅读全文（PDF）。**](https://juliopchile.github.io/memoria-informe/main.pdf)