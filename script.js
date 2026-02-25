// الأكواد المسموحة (تجريبية)
const allowedIDs = [
    "1577158357",
    "1579085903",
    "1578861649",
    "1579103337",
    "1578904909",
    "1578930863",
    "1578870431",
    "1578602441",
    "1578852955",
    "1578845759",
    "1578849207",
    "1578571663",
    "1578623813",
    "1578685235",
    "1577741919",
    "1578822711",
    "1578523699",
    "1578570513",
    "1577883371",
    "1578153415",
    "1578238061",
    "1578308311",
    "1577763915",
    "1578035401",
    "1577780899",
    "1577849179",
    "1577804103",
    "1577846231",
    "1577823547",
    "1577838901",
    "1577793499",
    "1577782829",
    "1577800051",
    "1577709555",
    "1577793325",
    "1577755853",
    "1577737835",
    "1577742001",
    "1577793013",
    "1577721103",
    "1577525419",
    "1577702529",
    "1577701283",
    "1577649427",
    "1577560969",
    "1577509533",
    "1577530111",
    "1577504503",
    "1577501407",
    "1577352135",
];

// تحديث عداد المستخدمين بشكل وهمي لزيادة الحماس
setInterval(() => {
    let count = Math.floor(Math.random() * (1500 - 1200) + 1200);
    document.getElementById('user-count').innerText = count.toLocaleString();
}, 3000);

function copyPromo() {
    const code = document.getElementById('promo-code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("✅ تم نسخ الكود بنجاح! استخدمه عند التسجيل.");
    });
}

function validateAndStart() {
    const idValue = document.getElementById('user-id').value;
    const errorMsg = document.getElementById('error-msg');
    const loadingScreen = document.getElementById('loading-screen');

    // 1. فحص الطول
    if (idValue.length < 9 || idValue.length > 10) {
        errorMsg.innerText = "⚠️ عذراً، الـ ID يجب أن يكون بين 9 و 10 أرقام.";
        return;
    }

    // 2. إظهار شاشة التحميل لإعطاء طابع احترافي
    loadingScreen.classList.remove('hidden');

    setTimeout(() => {
        // 3. التحقق من الـ ID
        if (allowedIDs.includes(idValue)) {
            window.location.href = "page2.html"; // الانتقال لصفحة التوقعات
        } else {
            loadingScreen.classList.add('hidden');
            errorMsg.innerText = "❌ هذا الـ ID غير مسجل أو غير مفعل حالياً.";
        }
    }, 2500); // إبقاء التحميل لمدة 2.5 ثانية
}














































