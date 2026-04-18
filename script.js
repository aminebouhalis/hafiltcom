document.addEventListener('DOMContentLoaded', () => {
    // 1. التعامل مع الـ Splash Screen
    const splash = document.getElementById('splash-screen');
    const app = document.getElementById('app-content');
    
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.classList.add('hidden');
            app.classList.remove('hidden');
        }, 500);
    }, 2500);

    // 2. تفعيل قائمة الجوال (Hamburger Menu)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // تحويل أيقونة القائمة لشكل X (اختياري)
            menuToggle.classList.toggle('open');
        });
    }

    // إغلاق القائمة عند الضغط على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// 3. وظائف لوحة التحكم
function showDashboard(type) {
    document.getElementById('app-content').classList.add('hidden');
    if(type === 'client') {
        document.getElementById('client-dashboard').classList.remove('hidden');
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showSection(id) {
    document.querySelectorAll('.dash-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('sec-' + id).classList.remove('hidden');
    
    // إخفاء السايدبار في الجوال بعد اختيار قسم
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}