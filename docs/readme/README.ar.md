**ملاحظة مهمة حول الترجمة**

تمت ترجمة النص أدناه باستخدام أدوات الذكاء الاصطناعي (الترجمة الآلية). نظرًا لإمكانية احتواء هذه العملية على أخطاء أو عدم دقة، نوصي بالرجوع إلى النسخة الأصلية باللغة الإنجليزية أو الإسبانية لضمان دقة المعلومات.

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


# الإعداد
استخدم مع امتداد VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

ثبّت مُجمّع TeX (مثل TeX Live على نظام Linux).
```bash
sudo apt install texlive-full
```

# ملخص
في صناعة تربية الأحياء المائية، يُعد الرصد المستمر لصحة الأسماك أمرًا مهمًا للغاية. تسمح التطورات في مجال الرؤية الحاسوبية بإنجاز هذه المهمة بطريقة قابلة للتوسع وأقل تدخلاً. توفر شركة WildSense، وهي شركة ناشئة تابعة لجامعة UTFSM، خدمات لتقدير وزن أسماك السلمون، حيث تُعد التجزئة بالحالات والتتبع القائم على الكشف مكونات أساسية في خط السير، لكن لا يزال هناك مجال للتحسين.

يقوم هذا المشروع بتنقيح قاعدة بيانات للتجزئة بالحالات خاصة بأسماك السلمون عبر تصفيتها لتشمل فقط الحالات ذات الصلة، مما يتيح تدريب نماذج YOLO بأداء يفوق الأعمال السابقة. كما تُحسَّن المتغيرات الفائقة أثناء التدريب، ويتم تصدير النماذج إلى TensorRT من أجل تقليل أزمنة الاستدلال.

تُظهر النتائج أن قاعدة بيانات أكثر دقة تحسن جودة النماذج، وأن تحسين المتغيرات الفائقة يحقق نتائج أفضل، وأن تحويل النماذج إلى TensorRT يقلل بشكل كبير من أزمنة الاستدلال مع أدنى خسارة أداء ممكنة.

[**اقرأ المستند الكامل بصيغة PDF.**](https://juliopchile.github.io/memoria-informe/main.pdf)