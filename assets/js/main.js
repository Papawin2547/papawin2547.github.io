// -----------------------------------------------------------
// Javascript สำหรับอนิเมชั่นปุ่ม (เช่น Ripple effect เมื่อคลิก)
// -----------------------------------------------------------

const logoContainer = document.querySelector('.logo-container');

logoContainer.addEventListener('click', () => window.scrollTo(0, 0));
logoContainer.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.scrollTo(0, 0);
    }
});

const buttons = document.querySelectorAll('.btn-solid, .btn-outline');

buttons.forEach(button => {
    button.addEventListener('mousedown', event => {
        const bounds = button.getBoundingClientRect();
        const ripple = document.createElement('span');

        ripple.className = 'button-ripple';
        ripple.style.left = `${event.clientX - bounds.left}px`;
        ripple.style.top = `${event.clientY - bounds.top}px`;
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// -----------------------------------------------------------
// เปลี่ยนรูปจากขาวดำเป็นสีเมื่อส่วนผลงานเลื่อนเข้ามาในหน้าจอ
// -----------------------------------------------------------
const imageColorRevealTargets = document.querySelectorAll(
    '.about-container, .works-grid, .project-details, .physical-brand-content-grid, .game-design-project, .modeling-project, .graphic-design-project, .activity'
);

if ('IntersectionObserver' in window) {
    const imageColorObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in-view');
            } else {
                entry.target.classList.remove('is-in-view');
            }
        });
    }, { threshold: 0.15 });

    imageColorRevealTargets.forEach(target => imageColorObserver.observe(target));
} else {
    imageColorRevealTargets.forEach(target => target.classList.add('is-in-view'));
}

// -----------------------------------------------------------
// เปิดดูภาพเต็มสำหรับรูปภาพทุกภาพใน Portfolio
// -----------------------------------------------------------
const imageLightbox = document.querySelector('.image-lightbox');
const imageLightboxImage = document.querySelector('.image-lightbox-image');
const imageLightboxClose = document.querySelector('.image-lightbox-close');
const imagePreviewTriggers = document.querySelectorAll('img:not(.image-lightbox-image)');

const closeImageLightbox = () => {
    if (imageLightbox.open) {
        imageLightbox.close();
    }
};

const openImageLightbox = (image) => {
    imageLightboxImage.src = image.currentSrc || image.src;
    imageLightboxImage.alt = image.alt || 'Portfolio image';
    document.body.style.overflow = 'hidden';
    imageLightbox.showModal();
};

imagePreviewTriggers.forEach(image => {
    image.classList.add('image-preview-trigger');
    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-label', `${image.alt || 'Portfolio image'} — view full size`);

    image.addEventListener('click', () => openImageLightbox(image));
    image.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openImageLightbox(image);
        }
    });
});

imageLightboxClose.addEventListener('click', closeImageLightbox);

imageLightbox.addEventListener('click', event => {
    if (event.target === imageLightbox) {
        closeImageLightbox();
    }
});

imageLightbox.addEventListener('close', () => {
    document.body.style.overflow = '';
    imageLightboxImage.removeAttribute('src');
    imageLightboxImage.alt = '';
});

// -----------------------------------------------------------
// Javascript สำหรับพื้นหลังควันสีฟ้าตามเมาส์ (Interactive Smoke)
// -----------------------------------------------------------
const smoke1 = document.querySelector('.smoke-1');
const smoke2 = document.querySelector('.smoke-2');
const smoke3 = document.querySelector('.smoke-3');

// ตำแหน่งเริ่มต้น (กลางหน้าจอ)
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;

let curX1 = targetX, curY1 = targetY;
let curX2 = targetX, curY2 = targetY;
let curX3 = targetX, curY3 = targetY;

// ติดตามตำแหน่งเมาส์
document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

// ติดตามการสัมผัส (สำหรับมือถือ/แท็บเล็ต)
document.addEventListener('touchmove', (e) => {
    targetX = e.touches[0].clientX;
    targetY = e.touches[0].clientY;
});

function animateSmoke() {
    // ใช้สมการ Lerp (Linear Interpolation) สร้างความหน่วงให้ควันตามมาทีละชั้นไม่พร้อมกัน (เหมือนลมพัด)
    curX1 += (targetX - curX1) * 0.05;
    curY1 += (targetY - curY1) * 0.05;

    curX2 += (curX1 - curX2) * 0.04;
    curY2 += (curY1 - curY2) * 0.04;

    curX3 += (curX2 - curX3) * 0.03;
    curY3 += (curY2 - curY3) * 0.03;

    // อัปเดตตำแหน่งลงไปที่ CSS Variables
    if (smoke1) {
        smoke1.style.setProperty('--x', `${curX1}px`);
        smoke1.style.setProperty('--y', `${curY1}px`);
    }
    if (smoke2) {
        smoke2.style.setProperty('--x', `${curX2}px`);
        smoke2.style.setProperty('--y', `${curY2}px`);
    }
    if (smoke3) {
        smoke3.style.setProperty('--x', `${curX3}px`);
        smoke3.style.setProperty('--y', `${curY3}px`);
    }

    requestAnimationFrame(animateSmoke);
}

animateSmoke();
