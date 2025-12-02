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

Use with the VsCode extension: [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

Install a Text compiler (eg. textlive in Linux Ubuntu).

```bash
sudo apt install texlive-full
```

### You can use Docker (Not reliable):

```bash
# Build the Docker container.
docker build -t memoria-informe .

# Remove the Docker container.
docker rm memoria-informe-dev then docker rmi memoria-informe
```

To run the container.

```bash
# Run the container.
docker run -d --name memoria-informe-dev -v "$PWD":/workspace -w /workspace memoria-informe:latest sleep infinity

# Stop the container.
docker stop memoria-informe-dev
docker rm -f memoria-informe-dev
```

(Optionally use this code if something goes wrong and you can't delete files in the repository after using the Docker); ``sudo chown -R "$USER":"$USER" path_to_repository/memoria-informe``

Then to use it with VsCode, open with Dev Container. Remember to install the [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) extension inside the Ubunto container.

# Abstract

In the aquaculture industry, the constant monitoring of fish health is crucial. Advances in computer vision now allow this task to be performed in a scalable and less invasive manner. WildSense, a spin-off company of the UTFSM, provides services for weight estimation in salmon, for which instance segmentation and detection-based tracking are integral components of its pipeline, although there remains room for optimization.

This project refines an instance segmentation dataset for salmon, with the aim of training YOLO models with superior performance. In addition, hyperparameters are optimized for training, and the models are exported to TensorRT in order to reduce their inference times.

The results demonstrate that a more precise dataset can enhance performance in tracking tasks by achieving better temporal association metrics (IDF1, AssA, HOTA, MOTA, MT\%, IDSW, Frag) and improving the quality of segmentations; hyperparameter optimization yields better outcomes; and the conversion to TensorRT significantly reduces inference times with minimal performance loss.

[See full PDF](build/main.pdf)

# Useful hotkeys

- From code -> to PDF: `ctrl` + `alt` + `j`
- From PDF -> to code: `ctrl` + `click`
