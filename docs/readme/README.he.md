**הערה חשובה לגבי התרגום**

הטקסט הבא תורגם באמצעות כלים של בינה מלאכותית (תרגום אוטומטי). מכיוון שתהליך זה עלול לכלול שגיאות או חוסר דיוקים, אנו ממליצים לעיין בגרסה המקורית באנגלית או בספרדית כדי להבטיח את דיוק המידע.

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

# הגדרה
להשתמש עם התוסף ב־VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

התקן מהדר TeX (כגון TeX Live בלינוקס).
```bash
sudo apt install texlive-full
```

# תקציר
בתעשיית חקלאות המים, מעקב מתמיד אחר בריאות הדגים הוא חיוני. התקדמות בתחום הראייה הממוחשבת מאפשרת לבצע משימה זו באופן רחב היקף ופחות פולשני. WildSense, חברת ספין-אוף של UTFSM, מספקת שירותי הערכת משקל לדגי סלמון, כאשר חלוקת מופעים ומעקב המבוסס על זיהוי מהווים חלק מרכזי בצינור העבודה, אם כי יש עוד מקום לאופטימיזציה.

הפרויקט מעדן מסד נתונים של חלוקת מופעים לדגי סלמון, במטרה לאמן מודלי YOLO בעלי ביצועים עדיפים. נוסף לכך, מבוצעת אופטימיזציה של היפר־פרמטרים במהלך האימון והמודלים מיוצאים ל‑TensorRT לקיצור זמני האינפרנס.

התוצאות מראות שמסד נתונים מדויק יותר יכול לשפר את הביצועים במשימות מעקב באמצעות השגת מדדי שיוך זמני טובים יותר (IDF1, AssA, HOTA, MOTA, MT%, IDSW, Frag) ולשפר את איכות הסגמנטציות; שאופטימיזציית ההיפר־פרמטרים מניבה תוצאות טובות יותר; והמרה ל‑TensorRT מקטינה משמעותית את זמני האינפרנס עם אובדן ביצועים מזערי.

[**קרא את ה־PDF המלא.**](https://juliopchile.github.io/memoria-informe/main.pdf)
