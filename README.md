[![English](https://img.shields.io/badge/lang-English-blue)](docs/readme/README.en.md)
[![Español](https://img.shields.io/badge/lang-Español-purple)](docs/readme/README.es.md)
[![Français](https://img.shields.io/badge/lang-Français-yellow)](docs/readme/README.fr.md)
[![简体中文](https://img.shields.io/badge/lang-简体中文-darkred)](docs/readme/README.zh_CN.md)
[![繁體中文](https://img.shields.io/badge/lang-繁體中文-darkblue)](docs/readme/README.zh_TW.md)
[![Português](https://img.shields.io/badge/lang-Português-brightgreen)](docs/readme/README.pt.md)
[![Deutsch](https://img.shields.io/badge/lang-Deutsch-blueviolet)](docs/readme/README.de.md)
[![Italiano](https://img.shields.io/badge/lang-Italiano-orange)](docs/readme/README.it.md)
[![日本語](https://img.shields.io/badge/lang-日本語-yellowgreen)](docs/readme/README.jp.md)
[![العربية](https://img.shields.io/badge/lang-العربية-lightgrey)](docs/readme/README.ar.md)
[![עברית](https://img.shields.io/badge/lang-עברית-teal)](docs/readme/README.he.md)
[![Русский](https://img.shields.io/badge/lang-Русский-lightblue)](docs/readme/README.ru.md)
[![Українська](https://img.shields.io/badge/lang-Українська-skyblue)](docs/readme/README.uk.md)

# Setup
Use with the VsCode extension: [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop).

Install a Text compiler (eg. textlive in Linux).
```bash
sudo apt install texlive-full
```

# Abstract
In the aquaculture industry, the constant monitoring of fish health is crucial. Advances in computer vision now allow this task to be performed in a scalable and less invasive manner. WildSense, a spin-off company of the UTFSM, provides services for weight estimation in salmon, for which instance segmentation and detection-based tracking are integral components of its pipeline, although there remains room for optimization.

This project refines an instance segmentation database for salmon by filtering it to include only relevant cases, thereby enabling the training of YOLO models with performance superior to previous works. Hyperparameters are optimized during training, and the models are exported to TensorRT in order to reduce inference times.

The results demonstrate that a more precise database enhances the quality of the models, hyperparameter optimization yields better outcomes, and the conversion to TensorRT significantly reduces inference times with minimal performance loss.

[See full PDF](build/main.pdf)