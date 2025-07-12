**翻訳に関する重要な注意事項**

以下のテキストは AI（自動翻訳）ツールを使用して翻訳されています。この過程には誤りや不正確さが含まれる可能性があるため、情報の正確性を確保するには 英語またはスペイン語の原文を参照することをお勧めします。

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


# セットアップ
VS Code 拡張機能 [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) と併用してください。.

TeX コンパイラをインストール（例：Linux では TeX Live）。
```bash
sudo apt install texlive-full
```

# 概要
水産養殖業界では、魚の健康状態を常時監視することがきわめて重要です。コンピュータビジョンの進歩により、この作業をスケーラブルかつ低侵襲で実施できるようになりました。UTFSMのスピンオフ企業であるWildSenseはサケの体重推定サービスを提供しており、インスタンスセグメンテーションと検出ベースのトラッキングはパイプラインに不可欠ですが、さらなる最適化の余地があります。

本プロジェクトでは、サケのインスタンスセグメンテーション用データベースを関連事例のみに絞ることで精緻化し、従来の研究よりも優れた性能を発揮するYOLOモデルの学習を可能としました。学習中にハイパーパラメータを最適化し、推論時間を減らすためにモデルをTensorRTにエクスポートしています。

結果として、より精度の高いデータベースがモデルの品質を向上させ、ハイパーパラメータの最適化がより良い成果をもたらし、TensorRTへの変換により推論時間が大幅に短縮され、性能損失は最小限に抑えられました。

[**PDF全文を読む。**](https://juliopchile.github.io/memoria-informe/main.pdf)