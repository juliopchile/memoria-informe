**Importante sobre a tradução**

O texto abaixo foi traduzido usando ferramentas de IA (tradução automática). Como esse processo pode conter erros ou imprecisões, recomendamos consultar a versão original em inglês ou espanhol para garantir a precisão das informações.

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

# Configuração
Usar com a extensão do VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

Instale um compilador TeX (ex.: TeX Live no Linux).
```bash
sudo apt install texlive-full
```

# Resumo
Na indústria de aquicultura, o monitoramento constante da saúde dos peixes é crucial. Os avanços em visão computacional agora permitem realizar essa tarefa de forma escalável e menos invasiva. A WildSense, uma spin-off da UTFSM, fornece serviços para estimar o peso de salmões, nos quais a segmentação de instâncias e o rastreamento baseado em detecção são componentes fundamentais do pipeline, embora ainda haja espaço para otimização.

Este projeto refina uma base de dados de segmentação de instâncias de salmões, com o objetivo de treinar modelos YOLO com desempenho superior. Além disso, otimizam-se os hiperparâmetros durante o treinamento e os modelos são exportados para TensorRT para reduzir os tempos de inferência.

Os resultados demonstram que uma base de dados mais precisa pode ampliar o desempenho em tarefas de rastreamento ao alcançar melhores métricas de associação temporal (MOTA, HOTA, IDFW) e melhorar a qualidade das segmentações; que a otimização de hiperparâmetros gera melhores resultados; e que a conversão para TensorRT reduz significativamente os tempos de inferência com perda mínima de desempenho.

[**Ler o PDF completo.**](https://juliopchile.github.io/memoria-informe/main.pdf)
