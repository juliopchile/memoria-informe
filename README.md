[![English](https://img.shields.io/badge/lang-English-blue)](docs/readme/README.en.md)
[![Español](https://img.shields.io/badge/lang-Español-green)](docs/readme/README.es.md)

# Setup
Use with VsCode extension: [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop).

Install a Text compiler (eg. textlive in Linux).
```bash
sudo apt install texlive-full
```

# Abstract
In the aquaculture industry, the constant monitoring of fish health is crucial. Advances in computer vision now allow this task to be performed in a scalable and less invasive manner. WildSense, a spin-off company of the UTFSM, provides services for weight estimation in salmon, for which instance segmentation and detection-based tracking are integral components of its pipeline, although there remains room for optimization.

This project refines an instance segmentation database for salmon by filtering it to include only relevant cases, thereby enabling the training of YOLO models with performance superior to previous works. Hyperparameters are optimized during training, and the models are exported to TensorRT in order to reduce inference times.

The results demonstrate that a more precise database enhances the quality of the models, hyperparameter optimization yields better outcomes, and the conversion to TensorRT significantly reduces inference times with minimal performance loss.

[See full PDF](build/main.pdf)

