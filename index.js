// ================================
// MENU HAMBURGER (MOBILE)
// ================================
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ================================
// LIGHTBOX GALERIE
// ================================
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCap = document.getElementById('lightbox-caption');
const closeBtn    = document.getElementById('lightbox-close');
const prevBtn     = document.getElementById('lightbox-prev');
const nextBtn     = document.getElementById('lightbox-next');

const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
let currentIndex   = 0;

function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[index];
    lightboxImg.src         = item.querySelector('img').src;
    lightboxImg.alt         = item.querySelector('img').alt;
    lightboxCap.textContent = item.querySelector('.gallery-overlay p')?.textContent || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', () => openLightbox((currentIndex + 1) % galleryItems.length));
prevBtn.addEventListener('click', () => openLightbox((currentIndex - 1 + galleryItems.length) % galleryItems.length));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft')  prevBtn.click();
    if (e.key === 'Escape')     closeLightbox();
});

// ================================
// WAVE — LIEN DIRECT
// Ouvre pay.wave.com/m/788988476
// sur mobile ça lance l'app Wave
// ================================
document.querySelectorAll('.wave-pay').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const url = 'https://pay.wave.com/m/788988476';
        window.open(url, '_blank', 'noopener,noreferrer');
    });
});

// ================================
// ORANGE MONEY — MODAL
// ================================
const omModal = document.getElementById('om-modal');

function openOrangeMoneyModal() {
    omModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrangeMoneyModal() {
    omModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Ferme en cliquant sur le fond
omModal.addEventListener('click', function(e) {
    if (e.target === omModal) closeOrangeMoneyModal();
});

// Ferme avec Échap
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && omModal.classList.contains('active')) closeOrangeMoneyModal();
});

// ================================
// FORMULAIRE → WHATSAPP
// ================================
const memoryForm = document.getElementById('memory-form');

if (memoryForm) {
    memoryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name     = document.getElementById('name').value.trim();
        const relation = document.getElementById('relation').value.trim();
        const message  = document.getElementById('message').value.trim();
        const phone    = '221788988476';
        const text     = encodeURIComponent(
            `*Hommage à Abdallah Cissé*\n` +
            `*De :* ${name} (${relation})\n` +
            `*Message :* ${message}`
        );
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
        alert(`Merci ${name}.\nVotre souvenir a été partagé avec respect.`);
        this.reset();
    });
}

// ================================
// FONCTION LEGACY (conservée)
// ================================
function showDonationInfo(plateforme, numero) {
    if (plateforme === 'Wave') {
        window.open('https://pay.wave.com/m/788988476', '_blank', 'noopener,noreferrer');
    } else {
        openOrangeMoneyModal();
    }
}