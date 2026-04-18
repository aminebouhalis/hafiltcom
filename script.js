document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const themeToggle = document.getElementById('theme-toggle');

    // 1. إدارة شاشة الترحيب (Splash Screen)
    // تختفي بعد 3 ثوانٍ وتظهر الصفحة الرئيسية
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
    }, 3500);

    // 2. إدارة الوضع الداكن (Dark Mode)
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // تحميل السمة المحفوظة مسبقاً
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // 3. وظائف تجريبية للأزرار
    window.showAuth = (type) => {
        if(type === 'signup') {
            alert('سيتم توجيهك لصفحة "انضم لنا" (قيد التطوير)');
        } else {
            alert('سيتم توجيهك لصفحة تسجيل الدخول (قيد التطوير)');
        }
    };
});