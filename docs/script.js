const translations = {
  es: {
    label: "Español",
    flag: "fi-es",
    title:
      "Segmentación de instancias y seguimiento basado en detección para caracterización de biomasa y salud en la salmonicultura.",
    subtitle:
      "Memoria para optar al título de Ingeniero Civil Electrónico, Mención en Computadores y Sub-Mención en Telecomunicaciones.",
    abstractTitle: "Abstract",
    abstract1:
      "En la industria piscícola, el monitoreo constante de la salud de los peces es crucial. Gracias a los avances en visión por computadora es posible realizar esta labor de forma escalable y menos invasiva. WildSense, empresa spin-off de la UTFSM, provee servicios para la estimación de masa en salmones, donde la segmentación de instancias y seguimiento basado en detección son parte fundamental de su pipeline, pero aún presenta oportunidades de optimización.",
    abstract2:
      "Este proyecto perfecciona una base de datos de segmentación de instancias de salmones, al depurarla para incluir únicamente casos de interés, lo que permite entrenar modelos YOLO con rendimientos superiores a trabajos previos. Se optimizan los hiperparámetros durante el entrenamiento y se exportan los modelos a TensorRT para reducir los tiempos de inferencia.",
    abstract3:
      "Los resultados demuestran que una base de datos más precisa mejora la calidad de los modelos, la optimización de hiperparámetros produce mejores resultados y la conversión a TensorRT reduce significativamente los tiempos de inferencia, con mínima pérdida de desempeño.",
    linksTitle: "Enlaces",
    pdf: "Leer PDF",
    code: "Código del proyecto",
    latex: "Código LaTeX",
    darkModeOn: "🌓 Modo oscuro",
    darkModeOff: "☀️ Modo claro",
  },
  en: {
    label: "English",
    flag: "fi-gb",
    title:
      "Instance segmentation and tracking by detection for biomass and health characterization in aquaculture of salmonids.",
    subtitle:
      "Final Project Report for the Electronic Civil Engineering degree with Minor in Computers and Secondary Minor in Telecommunications.",
    abstractTitle: "Abstract",
    abstract1:
      "In the aquaculture industry, the constant monitoring of fish health is crucial. Advances in computer vision now allow this task to be performed in a scalable and less invasive manner. WildSense, a spin-off company of the UTFSM, provides services for weight estimation in salmon, for which instance segmentation and detection-based tracking are integral components of its pipeline, although there remains room for optimization.",
    abstract2:
      "This project refines an instance segmentation database for salmon by filtering it to include only relevant cases, thereby enabling the training of YOLO models with performance superior to previous works. Hyperparameters are optimized during training, and the models are exported to TensorRT in order to reduce inference times.",
    abstract3:
      "The results demonstrate that a more precise database enhances the quality of the models, hyperparameter optimization yields better outcomes, and the conversion to TensorRT significantly reduces inference times with minimal performance loss.",
    linksTitle: "Links",
    pdf: "Read PDF (spanish only)",
    code: "Project code",
    latex: "LaTeX source",
    darkModeOn: "🌓 Dark mode",
    darkModeOff: "☀️ Light mode",
  },
  // Arabic
  ar: {
    label: "العربية",
    flag: "fi-sa",
    title:
      "تجزئة الحالات والتتبع القائم على الكشف لتوصيف الكتلة الحيوية والصحة في استزراع السالمونيات.",
    subtitle:
      "تقرير المشروع النهائي لنيل درجة الهندسة المدنية الإلكترونية مع تخصص فرعي في الحاسبات وتخصص ثانوي في الاتصالات.",
    abstractTitle: "ملخص",
    abstract1:
      "في صناعة تربية الأحياء المائية، يُعد الرصد المستمر لصحة الأسماك أمرًا مهمًا للغاية. تسمح التطورات في مجال الرؤية الحاسوبية بإنجاز هذه المهمة بطريقة قابلة للتوسع وأقل تدخلاً. توفر شركة WildSense، وهي شركة ناشئة تابعة لجامعة UTFSM، خدمات لتقدير وزن أسماك السلمون، حيث تُعد التجزئة بالحالات والتتبع القائم على الكشف مكونات أساسية في خط السير، لكن لا يزال هناك مجال للتحسين.",
    abstract2:
      "يقوم هذا المشروع بتنقيح قاعدة بيانات للتجزئة بالحالات خاصة بأسماك السلمون عبر تصفيتها لتشمل فقط الحالات ذات الصلة، مما يتيح تدريب نماذج YOLO بأداء يفوق الأعمال السابقة. كما تُحسَّن المتغيرات الفائقة أثناء التدريب، ويتم تصدير النماذج إلى TensorRT من أجل تقليل أزمنة الاستدلال.",
    abstract3:
      "تُظهر النتائج أن قاعدة بيانات أكثر دقة تحسن جودة النماذج، وأن تحسين المتغيرات الفائقة يحقق نتائج أفضل، وأن تحويل النماذج إلى TensorRT يقلل بشكل كبير من أزمنة الاستدلال مع أدنى خسارة أداء ممكنة.",
    linksTitle: "روابط",
    pdf: "قراءة ملف PDF (بالإسبانية فقط)",
    code: "كود المشروع",
    latex: "كود LaTeX",
    darkModeOn: "🌓 وضع الداكن",
    darkModeOff: "☀️ الوضع الفاتح",
  },

  // German
  de: {
    label: "Deutsch",
    flag: "fi-de",
    title:
      "Instanzsegmentierung und Tracking durch Detektion zur Charakterisierung von Biomasse und Gesundheit in der Lachs-Aquakultur.",
    subtitle:
      "Abschlussarbeit im Studiengang Elektronische Bauingenieurwesen mit Schwerpunkt Computertechnik und Nebenfach Telekommunikation.",
    abstractTitle: "Zusammenfassung",
    abstract1:
      "In der Aquakultur ist die ständige Überwachung der Fischgesundheit von entscheidender Bedeutung. Fortschritte in der Computer Vision ermöglichen es, diese Aufgabe skalierbar und weniger invasiv zu erfüllen. WildSense, ein Spin-off der UTFSM, bietet Dienste zur Gewichtsschätzung von Lachsen an, bei denen Instanzsegmentierung und detektionsbasiertes Tracking wesentliche Bestandteile der Pipeline sind, obgleich noch Optimierungspotenzial besteht.",
    abstract2:
      "Dieses Projekt verfeinert eine Datenbank zur Instanzsegmentierung von Lachsen, indem sie auf relevante Fälle beschränkt wird und dadurch das Training von YOLO-Modellen ermöglicht wird, die bessere Leistung als frühere Arbeiten aufweisen. Während des Trainings werden Hyperparameter optimiert und die Modelle nach TensorRT exportiert, um die Inferenzzeiten zu verkürzen.",
    abstract3:
      "Die Ergebnisse zeigen, dass eine genauere Datenbank die Qualität der Modelle verbessert, die Optimierung der Hyperparameter zu besseren Ergebnissen führt und die Konvertierung nach TensorRT die Inferenzzeiten deutlich reduziert – bei minimalem Leistungsverlust.",
    linksTitle: "Links",
    pdf: "PDF lesen (nur auf Spanisch)",
    code: "Projekt-Code",
    latex: "LaTeX-Quellcode",
    darkModeOn: "🌓 Dunkelmodus",
    darkModeOff: "☀️ Heller Modus",
  },

  // French
  fr: {
    label: "Français",
    flag: "fi-fr",
    title:
      "Segmentation d’instances et suivi par détection pour la caractérisation de la biomasse et de la santé dans la salmoniculture.",
    subtitle:
      "Rapport de projet de fin d’études pour le diplôme d’Ingénieur Civil Électronique avec option en Informatique et sous-option en Télécommunications.",
    abstractTitle: "Résumé",
    abstract1:
      "Dans l’industrie de l’aquaculture, le suivi permanent de la santé des poissons est essentiel. Les avancées en vision par ordinateur permettent désormais de réaliser cette tâche de manière évolutive et moins invasive. WildSense, une spin-off de l’UTFSM, fournit des services d’estimation de la masse des saumons, pour lesquels la segmentation d’instances et le suivi par détection sont des éléments clés de sa chaîne de traitement, bien qu’il subsiste un potentiel d’optimisation.",
    abstract2:
      "Ce projet affine une base de données de segmentation d’instances de saumons en ne conservant que les cas pertinents, permettant ainsi d’entraîner des modèles YOLO dont les performances sont supérieures aux travaux antérieurs. Les hyperparamètres sont optimisés pendant l’entraînement et les modèles sont exportés vers TensorRT pour réduire les temps d’inférence.",
    abstract3:
      "Les résultats montrent qu’une base de données plus précise améliore la qualité des modèles, que l’optimisation des hyperparamètres conduit à de meilleurs résultats et que la conversion vers TensorRT diminue considérablement les temps d’inférence, avec une perte de performance minimale.",
    linksTitle: "Liens",
    pdf: "Lire le PDF (en espagnol uniquement)",
    code: "Code du projet",
    latex: "Code LaTeX",
    darkModeOn: "🌓 Mode sombre",
    darkModeOff: "☀️ Mode clair",
  },

  // Hebrew
  he: {
    label: "עברית",
    flag: "fi-il",
    title:
      "חלוקת מופעים ומעקב המבוסס על זיהוי לאפיון ביומסה ובריאות בגידול סלמון בחקלאות מים.",
    subtitle:
      "דוח פרויקט סיום לתואר בהנדסת אלקטרוניקה אזרחית עם התמחות משנית במחשבים ותת־התמחות בתקשורת.",
    abstractTitle: "תקציר",
    abstract1:
      "בתעשיית חקלאות המים, מעקב מתמיד אחר בריאות הדגים הוא חיוני. התקדמות בתחום הראייה הממוחשבת מאפשרת לבצע משימה זו באופן רחב היקף ופחות פולשני. WildSense, חברת ספין-אוף של UTFSM, מספקת שירותי הערכת משקל לדגי סלמון, כאשר חלוקת מופעים ומעקב המבוסס על זיהוי מהווים חלק מרכזי בצינור העבודה, אם כי יש עוד מקום לאופטימיזציה.",
    abstract2:
      "בפרויקט זה משופרת מסד נתונים של חלוקת מופעים בדגי סלמון על ידי סינון המקרים הרלוונטיים בלבד, דבר המאפשר אימון מודלי YOLO בעלי ביצועים עדיפים על עבודות קודמות. ההיפר־פרמטרים עוברים אופטימיזציה במהלך האימון, והמודלים מיוצאים ל-TensorRT במטרה להפחית את זמני ההסקה.",
    abstract3:
      "התוצאות מצביעות על כך שמסד נתונים מדויק יותר משפר את איכות המודלים, שאופטימיזציית ההיפר־פרמטרים מובילה לתוצאות טובות יותר, ושמעבר ל-TensorRT מקצר באופן משמעותי את זמני ההסקה עם פגיעה מינימלית בביצועים.",
    linksTitle: "קישורים",
    pdf: "קרא PDF (רק בספרדית)",
    code: "קוד הפרויקט",
    latex: "קוד LaTeX",
    darkModeOn: "🌓 מצב כהה",
    darkModeOff: "☀️ מצב בהיר",
  },

  // Italian
  it: {
    label: "Italiano",
    flag: "fi-it",
    title:
      "Segmentazione di istanze e tracciamento tramite rilevamento per la caratterizzazione della biomassa e della salute nell’acquacoltura di salmonidi.",
    subtitle:
      "Relazione finale del progetto per la laurea in Ingegneria Civile Elettronica con specializzazione in Informatica e sottospecializzazione in Telecomunicazioni.",
    abstractTitle: "Abstract",
    abstract1:
      "Nell’industria dell’acquacoltura, il monitoraggio continuo della salute dei pesci è essenziale. I progressi nella visione artificiale consentono di svolgere questo compito in modo scalabile e meno invasivo. WildSense, uno spin-off dell’UTFSM, offre servizi di stima del peso dei salmoni, in cui la segmentazione di istanze e il tracciamento basato sul rilevamento sono componenti fondamentali del pipeline, benché vi siano ancora margini di ottimizzazione.",
    abstract2:
      "Questo progetto affina un database di segmentazione di istanze di salmoni filtrandone i casi per includere solo quelli rilevanti, consentendo il training di modelli YOLO con prestazioni superiori rispetto ai lavori precedenti. Durante l’addestramento si ottimizzano gli iperparametri e i modelli vengono esportati in TensorRT per ridurre i tempi di inferenza.",
    abstract3:
      "I risultati dimostrano che un database più accurato migliora la qualità dei modelli, che l’ottimizzazione degli iperparametri produce risultati migliori e che la conversione in TensorRT riduce significativamente i tempi di inferenza con una perdita di prestazioni minima.",
    linksTitle: "Link",
    pdf: "Leggi PDF (solo in spagnolo)",
    code: "Codice del progetto",
    latex: "Codice LaTeX",
    darkModeOn: "🌓 Modalità scura",
    darkModeOff: "☀️ Modalità chiara",
  },

  // Japanese
  ja: {
    label: "日本語",
    flag: "fi-jp",
    title:
      "サケ養殖におけるバイオマスと健康評価のためのインスタンスセグメンテーションと検出ベースのトラッキング",
    subtitle:
      "コンピュータ専攻および通信副専攻を含む電子土木工学学位取得のための最終プロジェクトレポート",
    abstractTitle: "概要",
    abstract1:
      "水産養殖業界では、魚の健康状態を常時監視することがきわめて重要です。コンピュータビジョンの進歩により、この作業をスケーラブルかつ低侵襲で実施できるようになりました。UTFSMのスピンオフ企業であるWildSenseはサケの体重推定サービスを提供しており、インスタンスセグメンテーションと検出ベースのトラッキングはパイプラインに不可欠ですが、さらなる最適化の余地があります。",
    abstract2:
      "本プロジェクトでは、サケのインスタンスセグメンテーション用データベースを関連事例のみに絞ることで精緻化し、従来の研究よりも優れた性能を発揮するYOLOモデルの学習を可能としました。学習中にハイパーパラメータを最適化し、推論時間を減らすためにモデルをTensorRTにエクスポートしています。",
    abstract3:
      "結果として、より精度の高いデータベースがモデルの品質を向上させ、ハイパーパラメータの最適化がより良い成果をもたらし、TensorRTへの変換により推論時間が大幅に短縮され、性能損失は最小限に抑えられました。",
    linksTitle: "リンク",
    pdf: "PDFを読む（スペイン語のみ）",
    code: "プロジェクトコード",
    latex: "LaTeXソース",
    darkModeOn: "🌓 ダークモード",
    darkModeOff: "☀️ ライトモード",
  },

  // Portuguese
  pt: {
    label: "Português",
    flag: "fi-br",
    title:
      "Segmentação de instâncias e rastreamento por detecção para caracterização de biomassa e saúde na aquicultura de salmões.",
    subtitle:
      "Relatório de Projeto Final para o curso de Engenharia Civil Eletrônica, com ênfase em Computadores e subênfase em Telecomunicações.",
    abstractTitle: "Resumo",
    abstract1:
      "Na indústria de aquicultura, o monitoramento constante da saúde dos peixes é crucial. Os avanços em visão computacional agora permitem realizar essa tarefa de forma escalável e menos invasiva. A WildSense, uma spin-off da UTFSM, fornece serviços para estimar o peso de salmões, nos quais a segmentação de instâncias e o rastreamento baseado em detecção são componentes fundamentais do pipeline, embora ainda haja espaço para otimização.",
    abstract2:
      "Este projeto aprimora uma base de dados de segmentação de instâncias para salmões, filtrando-a para incluir apenas casos relevantes, permitindo o treinamento de modelos YOLO com desempenho superior em comparação a trabalhos anteriores. Os hiperparâmetros são otimizados durante o treinamento e os modelos são exportados para TensorRT a fim de reduzir os tempos de inferência.",
    abstract3:
      "Os resultados mostram que uma base de dados mais precisa melhora a qualidade dos modelos, a otimização de hiperparâmetros gera melhores resultados e a conversão para TensorRT reduz significativamente os tempos de inferência, com perda mínima de desempenho.",
    linksTitle: "Links",
    pdf: "Ler PDF (apenas em espanhol)",
    code: "Código do projeto",
    latex: "Fonte LaTeX",
    darkModeOn: "🌓 Modo escuro",
    darkModeOff: "☀️ Modo claro",
  },

  // Russian
  ru: {
    label: "Русский",
    flag: "fi-ru",
    title:
      "Сегментация экземпляров и отслеживание на основе детекции для характеристики биомассы и здоровья в аквакультуре лососевых.",
    subtitle:
      "Выпускная работа для получения степени инженера гражданской электроники со специализацией в компьютерных технологиях и дополнительной специализацией в телекоммуникациях.",
    abstractTitle: "Резюме",
    abstract1:
      "В индустрии аквакультуры постоянный мониторинг здоровья рыб имеет первостепенное значение. Прогресс в области компьютерного зрения позволяет выполнять эту задачу масштабируемо и менее инвазивно. WildSense, спин-офф компания UTFSM, предоставляет услуги по оценке веса лосося, где сегментация экземпляров и отслеживание на основе детекции — важные компоненты пайплайна, хотя есть потенциал для оптимизации.",
    abstract2:
      "В рамках данного проекта была усовершенствована база данных по сегментации экземпляров лосося, путём фильтрации и включения только релевантных случаев. Это даёт возможность обучать модели YOLO, превосходящие предыдущие работы по производительности. Во время обучения оптимизируются гиперпараметры, а модели экспортируются в TensorRT для сокращения времени инференса.",
    abstract3:
      "Результаты показывают, что более точная база данных улучшает качество моделей, оптимизация гиперпараметров даёт лучшие результаты, а конвертация в TensorRT существенно снижает время инференса при минимальных потерях в производительности.",
    linksTitle: "Ссылки",
    pdf: "Читать PDF (только на испанском)",
    code: "Код проекта",
    latex: "LaTeX исходник",
    darkModeOn: "🌓 Тёмный режим",
    darkModeOff: "☀️ Светлый режим",
  },

  // Ukrainian
  uk: {
    label: "Українська",
    flag: "fi-ua",
    title:
      "Сегментація інстанцій і відстеження шляхом детекції для характеристики біомаси та здоров’я у вирощуванні лососевих.",
    subtitle:
      "Підсумковий проєкт для здобуття ступеня інженера з цивільної електроніки зі спеціалізацією в комп’ютерних науках і додатковою спеціалізацією в телекомунікаціях.",
    abstractTitle: "Анотація",
    abstract1:
      "У галузі аквакультури постійний моніторинг здоров’я риби є надзвичайно важливим. Завдяки досягненням у галузі комп’ютерного зору цю роботу можна виконувати у масштабованіший і менш інвазивний спосіб. WildSense, спін-оф компанія UTFSM, надає послуги з оцінки маси лососів, де сегментація інстанцій та відстеження на основі детекції є ключовими компонентами конвеєрного процесу, хоча ще є можливості для вдосконалення.",
    abstract2:
      "Цей проєкт вдосконалює базу даних сегментації інстанцій лососів, відфільтровуючи тільки релевантні випадки, що дозволяє тренувати моделі YOLO з вищою продуктивністю порівняно з попередніми розробками. Під час тренування оптимізуються гіперпараметри, а моделі експортуються в TensorRT, аби зменшити час на інференс.",
    abstract3:
      "Результати показують, що ретельніша база даних підвищує якість моделей, оптимізація гіперпараметрів дає кращі результати, а перетворення в TensorRT суттєво скорочує час інференсу при мінімальних втратах продуктивності.",
    linksTitle: "Посилання",
    pdf: "Читати PDF (лише іспанською)",
    code: "Код проєкту",
    latex: "LaTeX-джерело",
    darkModeOn: "🌓 Темна тема",
    darkModeOff: "☀️ Світла тема",
  },
  // Chinese (Simplified, China)
  zh: {
    label: "简体中文",
    flag: "fi-cn",
    title: "用于鲑鱼养殖中生物量与健康表征的实例分割与基于检测的跟踪",
    subtitle: "毕业论文（为获得电子工程学位，主修计算机方向与电信副修所撰写）",
    abstractTitle: "摘要",
    abstract1:
      "在水产养殖行业，持续监测鱼类健康至关重要。随着计算机视觉技术的发展，该任务可实现可扩展且低侵入的监测。WildSense 是 UTFSM 的衍生初创公司，为鲑鱼体重估算提供服务，其中实例分割与基于检测的跟踪是其流程的核心组成部分，但仍存在优化空间。",
    abstract2:
      "本项目在鲑鱼实例分割数据库上进行了精细化处理，仅保留与研究相关的案例，因而可以训练 YOLO 模型，其性能优于以往研究。训练过程中对超参数进行优化，并将模型导出为 TensorRT 格式，从而减少推理时间。",
    abstract3:
      "结果表明，更精确的数据库显著提升了模型质量；通过超参数优化，模型效果得到进一步提高；而将模型转换为 TensorRT 则能够在性能损失极小的情况下显著缩短推理时间。",
    linksTitle: "相关链接",
    pdf: "阅读PDF（仅含西班牙语）",
    code: "项目代码",
    latex: "LaTeX源码",
    darkModeOn: "🌓 深色模式",
    darkModeOff: "☀️ 浅色模式",
  },
  // Chinese (Traditional, Taiwan)
  zh_TW: {
    label: "繁體中文",
    flag: "fi-tw",
    title: "基於實例分割與基於檢測的追蹤之鮭魚養殖生物量與健康表徵",
    subtitle: "畢業論文（為取得電子工程學位，主修電腦並副修電信所撰寫）",
    abstractTitle: "摘要",
    abstract1:
      "在水產養殖產業中，持續監測魚隻健康至關重要。伴隨電腦視覺技術的進步，這項工作能以更大規模且更低侵入性的方式進行。WildSense（源自 UTFSM 的衍生企業）提供鮭魚體重估算服務，其中實例分割與基於偵測的追蹤是其流程的關鍵要素，但仍有進一步優化的空間。",
    abstract2:
      "本計畫針對鮭魚實例分割資料庫進行精煉，只保留與研究相關的案例，這使得在訓練 YOLO 模型時能達到比以往研究更優的效能。訓練過程中進行超參數的優化，並將模型匯出為 TensorRT 格式，以縮短推論時間。",
    abstract3:
      "結果顯示，更精準的資料庫能顯著提升模型品質；透過超參數優化可進一步提升模型表現；而將模型轉換為 TensorRT 後，推論時間大幅縮短且僅帶來極小的效能損失。",
    linksTitle: "連結",
    pdf: "閱讀 PDF（僅西文）",
    code: "專案程式碼",
    latex: "LaTeX 原始碼",
    darkModeOn: "🌓 深色模式",
    darkModeOff: "☀️ 淺色模式",
  },
};
const rtlLangs = ["ar", "he"];
const supportedLangs = Object.keys(translations);
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");
const currentFlag = document.getElementById("current-flag");
const currentLabel = document.getElementById("current-label");
const darkToggle = document.getElementById("dark-toggle");

function buildLangMenu() {
  langMenu.innerHTML = "";
  supportedLangs.forEach((lang) => {
    const meta = translations[lang];
    const li = document.createElement("li");
    li.dataset.lang = lang;
    li.innerHTML = `<span class="fi ${meta.flag}"></span>${meta.label}`;
    li.addEventListener("click", () => {
      setLanguage(lang);
      toggleLangMenu(false);
    });
    langMenu.appendChild(li);
  });
}

function toggleLangMenu(show) {
  langMenu.style.display = show ? "block" : "none";
}

langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleLangMenu(langMenu.style.display !== "block");
});
document.addEventListener("click", () => toggleLangMenu(false));

function setLanguageFont(lang) {
  document.body.classList.remove(
    "noto-sans-jp",
    "noto-sans-sc",
    "noto-sans-tc",
    "noto-sans-hebrew",
    "noto-sans-arabic",
    "noto-sans"
  );
  if (lang === "ja") {
    document.body.classList.add("noto-sans-jp");
  } else if (lang == "zh" || lang == "zh_HANS" || lang == "zh_CN") {
    document.body.classList.add("noto-sans-sc");
  } else if (lang == "zh_HANT" || lang == "zh_TW") {
    document.body.classList.add("noto-sans-tc");
  } else if (lang === "he") {
    document.body.classList.add("noto-sans-hebrew");
  } else if (lang === "ar") {
    document.body.classList.add("noto-sans-arabic");
  } else {
    document.body.classList.add("noto-sans");
  }
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
  setLanguageFont(lang);
}

function applyLanguage(lang) {
  const tx = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  currentFlag.className = `fi ${tx.flag}`;
  currentLabel.textContent = tx.label;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.textContent = tx[el.getAttribute("data-i18n")] || ""));
  document
    .querySelectorAll("[data-i18n-link]")
    .forEach(
      (el) => (el.textContent = tx[el.getAttribute("data-i18n-link")] || "")
    );
  updateDarkToggleText(lang);
  if (rtlLangs.includes(lang)) {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
  updateDarkToggleText(localStorage.getItem("lang") || "es");
}

function updateDarkToggleText(lang) {
  const tx = translations[lang] || translations.es;
  const key = document.body.classList.contains("dark-mode")
    ? "darkModeOff"
    : "darkModeOn";
  darkToggle.textContent = tx[key];
}

window.addEventListener("DOMContentLoaded", () => {
  buildLangMenu();
  if (localStorage.getItem("darkMode") === "true")
    document.body.classList.add("dark-mode");
  setLanguage(localStorage.getItem("lang") || "es");
  darkToggle.addEventListener("click", toggleDarkMode);
});
