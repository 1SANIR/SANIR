function startPrediction() {
    const btn = document.getElementById('start-btn');
    const status = document.getElementById('system-status');
    const cups = [document.getElementById('cup-0'), document.getElementById('cup-1'), document.getElementById('cup-2')];
    const ball = document.getElementById('the-ball');
    const wrapper = document.getElementById('cups-wrapper');

    // 1. إعداد الواجهة
    btn.disabled = true;
    status.innerText = "جاري تتبع الكرة...";
    status.style.color = "#ffcc00";
    ball.style.display = "none"; // إخفاء الكرة في البداية
    
    // إرجاع الأكواب لمكانها إذا كانت مرفوعة
    cups.forEach(c => c.classList.remove('lift-up'));

    // 2. تفعيل حركة الخلط العشوائي (2 ثانية)
    wrapper.classList.add('shuffling');

    setTimeout(() => {
        // 3. إيقاف الخلط
        wrapper.classList.remove('shuffling');
        status.innerText = "تم تحديد موقع الكرة!";
        status.style.color = "#00ff00";

        // 4. اختيار كوب عشوائي ليكون هو الفائز (هذا هو "التوقع")
        const winningIndex = Math.floor(Math.random() * 3);
        const winningSlot = document.getElementById(`slot-${winningIndex}`);
        
        // نقل الكرة برمجياً تحت الكوب الفائز
        winningSlot.appendChild(ball);
        ball.style.display = "block";

        // 5. رفع الكوب الفائز للكشف عن الكرة
        setTimeout(() => {
            const winningCup = document.getElementById(`cup-${winningIndex}`);
            winningCup.classList.add('lift-up');
            
            // 6. إضافة النتيجة للسجل
            addHistory(winningIndex + 1);
            
            // 7. إعادة تفعيل الزر
            btn.disabled = false;
            btn.innerText = "تحليل جولة جديدة";
        }, 500);

    }, 2000);
}

function addHistory(cupNum) {
    const list = document.getElementById('history-list');
    const newItem = document.createElement('div');
    newItem.className = 'history-item';
    const roundID = Math.floor(Math.random() * 9000) + 1000;
    newItem.innerHTML = `<span>الجولة #${roundID}</span> <span class="win">الكوب ${cupNum} ✅</span>`;
    list.prepend(newItem); // إضافة النتيجة في الأعلى
}