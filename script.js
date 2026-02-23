// الأكواد المسموحة (تجريبية)
const allowedIDs = [
    "1577158357",
    "1577525419",
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








