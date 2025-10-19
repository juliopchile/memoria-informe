**Nota importante sulla traduzione**

Il testo seguente è stato tradotto mediante strumenti di intelligenza artificiale (traduzione automatica). Poiché questo processo potrebbe contenere errori o imprecisioni, si consiglia di consultare la versione originale in inglese o in spagnolo per garantire l'accuratezza delle informazioni.

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

# Configurazione
Da usare con l’estensione di VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

Installa un compilatore TeX (es. TeX Live su Linux).
```bash
sudo apt install texlive-full
```

# Riassunto
Nell'industria dell'acquacoltura, il monitoraggio continuo della salute dei pesci è essenziale. I progressi nella visione artificiale consentono di svolgere questo compito in modo scalabile e meno invasivo. WildSense, uno spin-off dell'UTFSM, offre servizi di stima del peso dei salmoni, in cui la segmentazione di istanze e il tracciamento basato sul rilevamento sono componenti fondamentali del pipeline, benché vi siano ancora margini di ottimizzazione.

Questo progetto perfeziona un database di segmentazione di istanze di salmoni, con l'obiettivo di addestrare modelli YOLO con prestazioni superiori. Inoltre si ottimizzano gli iperparametri durante l'addestramento e i modelli vengono esportati in TensorRT per ridurre i tempi di inferenza.

I risultati dimostrano che un database più accurato può migliorare le prestazioni nelle attività di tracking raggiungendo metriche di associazione temporale migliori (IDF1, AssA, HOTA, MOTA, MT\%, IDSW, Frag) e migliorare la qualità delle segmentazioni; l'ottimizzazione degli iperparametri produce risultati migliori; e la conversione in TensorRT riduce in modo significativo i tempi di inferenza con una perdita di prestazioni minima.

[**Lire le PDF complet.**](https://juliopchile.github.io/memoria-informe/main.pdf)
