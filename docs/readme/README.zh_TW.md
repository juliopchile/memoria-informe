**關於翻譯的重要說明**

以下文本已透過 AI 工具（自動翻譯）進行了翻譯。由於此過程可能包含錯誤或不精確之處，我們建議參考英文或西班牙文原文，以確保資訊的準確性。

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


# 設定
請搭配 VS Code 擴充功能使用：[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

安裝 TeX 編譯器（例如 Linux 下的 TeX Live）。
```bash
sudo apt install texlive-full
```

# 摘要
在水產養殖產業中，持續監測魚隻健康至關重要。伴隨電腦視覺技術的進步，這項工作能以更大規模且更低侵入性的方式進行。WildSense（源自 UTFSM 的衍生企業）提供鮭魚體重估算服務，其中實例分割與基於偵測的追蹤是其流程的關鍵要素，但仍有進一步優化的空間。

本計畫針對鮭魚實例分割資料庫進行精煉，只保留與研究相關的案例，這使得在訓練 YOLO 模型時能達到比以往研究更優的效能。訓練過程中進行超參數的優化，並將模型匯出為 TensorRT 格式，以縮短推論時間。

結果顯示，更精準的資料庫能顯著提升模型品質；透過超參數優化可進一步提升模型表現；而將模型轉換為 TensorRT 後，推論時間大幅縮短且僅帶來極小的效能損失。

[**閱讀完整 PDF。**](https://juliopchile.github.io/memoria-informe/main.pdf)