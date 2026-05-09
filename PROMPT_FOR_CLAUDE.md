# PROMPT_FOR_CLAUDE.md — أول prompt تكتبيه لـ Claude Code

> هذا الملف فيه الـ prompts الجاهزة التي تنسخيها وتلصقيها في Claude Code
> (أو Cursor، Windsurf، Claude.ai Project) عند بدء العمل.

---

## 🚀 Prompt #1 — أول مرة تفتحي المشروع

انسخي وألصقي الـ prompt ده **بالظبط** في أول رسالة لـ Claude Code:

```
السلام عليكم. أنا بدأت مشروع Jilbada — موقع براند أزياء محتشمة فاخرة 
مستوحى من الأندلس.

قبل أي شيء، اقرأ هذه الملفات بالترتيب وافهم السياق كاملاً:

1. CLAUDE.md       (ذاكرتك الأساسية)
2. PROJECT_OVERVIEW.md (نظرة عامة على المشروع)
3. BRAND_GUIDELINES.md (هوية البراند الكاملة)
4. DESIGN_DECISIONS.md (لماذا اتخذنا كل قرار تصميمي)

بعد قراءتها:
- لخّصلي في 5 نقاط ما فهمته من فلسفة البراند
- اذكرلي 3 قرارات تصميمية تعتبرها الأهم في هذا المشروع
- اسألني عن أي شيء غير واضح قبل ما نبدأ كود

لا تكتب أي كود الآن. هدف هذا الـ session هو التأكد إنك فاهم السياق صح.
```

**ليه ده مهم**: ده بيخلي Claude يقرأ كل المراجع قبل ما يكتب أي حاجة، ويتأكد إنه فاهم البراند.

---

## 🏗️ Prompt #2 — لما تبدأي تطوير الـ Home Page

```
حلو، هنبدأ بالـ Home page (index.html).

قبل ما تكتب أي كود، أعطيني خطة (plan) لـ:

1. الـ HTML structure (semantic, accessibility-first)
2. الـ sections اللي هتكون في الصفحة بالترتيب
3. الـ assets اللي هتستخدمها من /assets/ (سمّيها بالاسم)
4. الـ animations / interactions المخططة
5. أي قرارات تحتاج تأكيد مني قبل البدء

اعرض الخطة بشكل مختصر وواضح. لا كود بعد. هنوافق على الخطة الأول.
```

**ليه ده مهم**: بيمنع Claude من إنه يكتب 500 سطر كود غلط. بنوافق على الخطة الأول.

---

## 🎨 Prompt #3 — لما تطلبي تنفيذ section معين

```
نفّذ الـ Hero section.

المتطلبات:
- صورة الـ hero: assets/images/lifestyle/archportal.jpg (الـ Andalusi arch)
- النص الرئيسي بالعربي: "دومًا مُلهِمة"
- النص الفرعي بالإنجليزي: "Always Inspiring"
- زر CTA: "Discover Collections" يقود لـ /collections
- الخلفية: الصورة مع overlay خفيف بـ Forest Green (opacity 30%)
- النص بالكريم (#E8E1D3)
- على الموبايل: النص في المنتصف، الصورة full screen

نفّذ في:
- index.html (جزء الـ Hero فقط)
- css/components/hero.css (CSS الخاص)

التزم بـ:
- BRAND_GUIDELINES.md للـ typography والـ colors
- DESIGN_DECISIONS.md رقم 9 (animations بطيئة 400-600ms)
- mobile-first
- accessible (alt text, aria-labels, keyboard nav)

اكتب الكود + اشرحلي قراراتك في تعليقات قصيرة في الـ HTML.
```

---

## 🔧 Prompt #4 — لما تحتاجي تعديل/تحسين

```
عايزة أعدل الـ [اسم الـ component]:

التعديل المطلوب: [وصف التعديل]

قبل ما تنفذ:
1. راجع الكود الحالي
2. تأكد إن التعديل ما يكسرش أي قرار في DESIGN_DECISIONS.md
3. لو فيه conflict، نبهني واقترح بديل

نفذ التعديل + أعرضلي الـ before/after للجزء المعدل فقط.
```

---

## 🐛 Prompt #5 — لما تكون عندك مشكلة (debug)

```
عندي مشكلة:

المشكلة: [وصف المشكلة]
المتوقع: [ايه اللي مفروض يحصل]
الحاصل: [ايه اللي بيحصل فعلاً]
الـ browser/device: [مثلاً Chrome على iPhone 13]

الـ files المتعلقة:
- [أسماء الـ files]

ابحث عن السبب. اشرحلي:
1. ايه اللي اكتشفته (root cause)
2. الحل المقترح
3. ليه الحل ده أفضل من البدائل

لا تنفذ الحل قبل ما توافقني.
```

---

## 📝 Prompt #6 — لما تطلبي محتوى/كتابة

```
محتاجة نص لـ [اسم الـ section/page]:

المعلومات:
- الـ section بيتكلم عن: [الموضوع]
- الـ tone: [راقي شاعري / إخباري / دعوي للعمل]
- اللغة: [عربي / إنجليزي / الاتنين]
- الطول: [عدد الكلمات أو الفقرات]
- الـ keywords المهمة: [إن وُجدت]

التزم بـ BRAND_GUIDELINES.md قسم "Voice & Tone".

اعرضلي 2-3 خيارات مختلفة لأختار منهم.
```

---

## 🌍 Prompt #7 — لإضافة الـ Arabic version

```
حان وقت إضافة النسخة العربية لـ [اسم الصفحة].

المطلوب:
1. إنشاء الصفحة في /ar/[page-name].html
2. تطبيق dir="rtl" على الـ html element
3. تطبيق lang="ar" على الـ html element
4. استخدام الـ Arabic font stack من BRAND_GUIDELINES.md
5. التأكد إن الـ layout يعمل صح RTL (flex direction, margins, إلخ)
6. إضافة hreflang tags في الـ <head>
7. ربط الـ language switcher بين الـ EN/AR versions

النص العربي:
[ضعي النصوص هنا أو اطلبي مني أن أوفّرها]

اعرضلي الـ HTML الكامل + أي تعديلات على الـ CSS اللازمة للـ RTL.
```

---

## ✨ Prompt #8 — قبل الـ Launch

```
هنعمل final review قبل الـ launch.

اعمل checklist شامل وراجع كل الـ pages:

1. **Performance**:
   - Lighthouse score على كل page (Performance, Accessibility, SEO, Best Practices)
   - حجم الصور optimized
   - أي console errors / warnings
   
2. **Accessibility**:
   - Alt texts على كل الصور
   - ARIA labels حيث يلزم
   - Keyboard navigation شغّال
   - Color contrast يحقق WCAG AA
   
3. **Responsive**:
   - 375px, 768px, 1024px, 1440px, 1920px
   - Landscape mobile
   - Tablet portrait
   
4. **Browser compatibility**:
   - Chrome, Safari, Firefox (latest)
   - Safari iOS
   - Chrome Android
   
5. **SEO**:
   - Meta tags كاملة
   - OG tags كاملة
   - hreflang للـ AR/EN
   - Schema.org Organization
   
6. **Brand consistency**:
   - الألوان متطابقة مع الـ palette
   - الـ typography صحيحة
   - الـ tone والـ voice متناسق
   
7. **Forms**:
   - Email signup شغّال (test submission)
   - Contact form شغّال
   - Validation messages واضحة
   
8. **Links**:
   - كل الـ internal links شغّالة
   - Social media links صحيحة
   - 404 page موجودة وأنيقة

اعرضلي الـ checklist مع status لكل بند (✅ / ⚠️ / ❌) واقتراحات للإصلاحات.
```

---

## 💡 Tips للتعامل مع Claude Code

### 1. ابدئي صغير، تأكدي، كبري
لا تطلبي "اعملي كل الموقع" دفعة واحدة. ابدئي بـ Hero، تأكدي إنه عظيم، بعدين انتقلي.

### 2. اطلبي الخطة قبل التنفيذ
دائماً: "اعرضلي خطة الأول، بعدين ننفذ".

### 3. صحّحي السياق أول ما تشوفي خطأ
لو Claude غلط في فهم البراند، صحّحيه فوراً ووضّحي السبب.

### 4. استخدمي الـ context references
"التزم بـ DESIGN_DECISIONS.md رقم 5" — اشاراتك للملفات بتقوّي السياق.

### 5. اطلبي تعليقات في الكود
"اشرح قراراتك في تعليقات قصيرة" — يساعدك تفهمي وتراجعي.

### 6. لو الـ session طال، ذكّري Claude
"تذكر، إحنا شغالين على Jilbada، التزم بـ CLAUDE.md".

### 7. حافظي على نسخ احتياطية
استخدمي Git commits صغيرة. كل feature في commit.

### 8. لا توافقي على كود مش فاهماه
لو Claude كتب حاجة مش واضحة، اطلبي شرح. مش عيب.

---

## 🚨 Red Flags — لما توقفي وتراجعي

لو لاحظتي Claude:
- ❌ بيستخدم ألوان غير الـ palette
- ❌ بيقترح Tailwind بدون ما تطلبي
- ❌ بيكتب "Lorem Ipsum"
- ❌ بيحاول يعمل carousel للـ hero
- ❌ بيضيف emojis في الـ UI الأساسي
- ❌ بيكتب copy مبيعاتي صاخب
- ❌ بيتجاهل الـ Arabic typography
- ❌ بيكتب 500 سطر كود قبل ما توافقي على الخطة

**أوقفيه فوراً وذكّريه**: "راجع CLAUDE.md و BRAND_GUIDELINES.md".

---

## 🎯 Prompt #0 — لو Claude نسي السياق (في session جديد)

لو فتحتي session جديد و Claude مش فاكر السياق:

```
أنا بكمل مشروع Jilbada (موقع براند أزياء محتشمة).

قبل أي حاجة:
1. اقرأ CLAUDE.md
2. اقرأ BRAND_GUIDELINES.md  
3. اقرأ DESIGN_DECISIONS.md
4. اقرأ PROJECT_OVERVIEW.md

بعدها قول "جاهز" وانتظر السؤال التالي.
```

---

## 📚 Prompts قصيرة للاستخدام اليومي

### للتعديلات السريعة:
> "عدّل [الجزء] ليكون [التغيير]. التزم بالـ guidelines."

### للأسئلة:
> "ايه أفضل طريقة نعمل [حاجة] بحيث تتماشى مع فلسفة Jilbada؟"

### للمراجعة:
> "راجع [الـ file] وقولي لو فيه أي تعارض مع DESIGN_DECISIONS.md."

### للتحسين:
> "حسّن performance الـ [page]. عرض الخطوات قبل التنفيذ."

---

*هذه الـ prompts قابلة للتعديل حسب احتياجك.*
*كل ما تتعمقي في المشروع، هتطوّري الـ prompts بنفسك.*

*Jilbada™ — Always Inspiring*
