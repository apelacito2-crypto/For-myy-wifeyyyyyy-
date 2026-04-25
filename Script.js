// ============================================
// BIRTHDAY WEBSITE FOR MY LOVE
// Complete Interactive JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    startTypewriter();
    initializeAnimations();
    setupScrollAnimations();
    startCountdown();
    setupBigHeart();
    setupGiftBox();
    setupLoveLetter();
});

// ============================================
// FLOATING PARTICLES
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleEmojis = ['❤️', '💖', '💕', '💗', '🌺', '🌸', '✨', '💌', '🦋', '🌹', '💝', '🎀'];

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.fontSize = (Math.random() * 15 + 15) + 'px';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
function startTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const text = "Happy Birthday My Wifeyy 💕";
    let index = 0;
    
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    typewriterElement.appendChild(cursor);

    function type() {
        if (index < text.length) {
            typewriterElement.insertBefore(document.createTextNode(text.charAt(index)), cursor);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
}

// ============================================
// INITIALIZE ANIMATIONS
// ============================================
function initializeAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = (index * 0.2) + 's';
    });
}

// ============================================
// SCROLL ANIMATIONS (AOS)
// ============================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                
                if (entry.target.classList.contains('message-card')) {
                    animateMessageText();
                }
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-aos], .section-title, .message-card');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// MESSAGE TEXT ANIMATION
// ============================================
function animateMessageText() {
    const messageTexts = document.querySelectorAll('.message-text');
    messageTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in-animate');
        }, index * 800);
    });
}

// ============================================
// COUNTDOWN TIMER - June 2, 2025
// ============================================
function startCountdown() {
    const startDate = new Date(2025, 5, 2);
    
    function updateCountdown() {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// LIKE BUTTON FUNCTIONALITY
// ============================================
function toggleLike(button) {
    const heartIcon = button.querySelector('.heart-icon');
    if (!heartIcon) return;
    
    button.classList.toggle('liked');
    
    if (button.classList.contains('liked')) {
        heartIcon.textContent = '❤️';
        createFloatingHeart(button);
    } else {
        heartIcon.textContent = '🤍';
    }
}

// ============================================
// FLOATING HEART EFFECT
// ============================================
function createFloatingHeart(button) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    
    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + 'px';
    heart.style.top = rect.top + 'px';
    
    document.body.appendChild(heart);

    heart.animate([
        { transform: 'translateY(0px) scale(1)', opacity: 1 },
        { transform: 'translateY(-80px) scale(1.5)', opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => {
        document.body.removeChild(heart);
    };
}

// ============================================
// SMOOTH SCROLL TO SECTION
// ============================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============================================
// START CELEBRATION (CTA Button)
// ============================================
function startCelebration() {
    createConfetti();
    
    setTimeout(() => {
        scrollToSection('countdown');
    }, 500);
}

// ============================================
// CONFETTI EFFECT
// ============================================
function createConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#fdcb6e', '#a29bfe', '#ffeaa7', '#ff9a9e'];
    
    for (let i = 0; i < 25; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const rotation = Math.random() * 360;
        
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: 'translateY(100vh) rotate(' + rotation + 'deg)', opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            confetti.remove();
        };
    }
}

// ============================================
// BIG HEART SURPRISE
// ============================================
function setupBigHeart() {
    const bigHeart = document.getElementById('bigHeart');
    if (!bigHeart) return;
    
    bigHeart.addEventListener('click', function() {
        this.classList.add('opened');
        this.textContent = '❤️';
        
        setTimeout(() => {
            showLoveOverlay();
        }, 1000);
    });
}

// ============================================
// LOVE OVERLAY
// ============================================
function showLoveOverlay() {
    const existingOverlay = document.querySelector('.love-overlay');
    if (existingOverlay) {
        existingOverlay.classList.add('active');
        return;
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'love-overlay active';
    overlay.innerHTML = '<div class="love-overlay-content"><h2>I Love You Forever 💕</h2><p>Distance means so little when someone means so much. Soon we will be together!</p><button class="cta-button" onclick="closeLoveOverlay()" style="opacity: 1; animation: none;">Close 💝</button></div>';
    
    document.body.appendChild(overlay);
    createConfetti();
}

function closeLoveOverlay() {
    const overlay = document.querySelector('.love-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// ============================================
// GIFT BOX INTERACTION
// ============================================
function setupGiftBox() {
    const giftBox = document.getElementById('giftBox');
    if (!giftBox) return;
    
    giftBox.addEventListener('click', function() {
        createConfetti();
        this.style.animation = 'none';
        this.style.transform = 'scale(1.3) rotate(10deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.animation = 'giftBounce 2s ease-in-out infinite';
        }, 500);
    });
}

// ============================================
// LOVE LETTER MAIL FEATURE
// ============================================
function setupLoveLetter() {
    const messageSection = document.querySelector('.message-section');
    if (!messageSection) return;
    
    const loveLetterBtn = document.createElement('button');
    loveLetterBtn.className = 'love-letter-btn';
    loveLetterBtn.innerHTML = '💌 Open My Love Letter';
    loveLetterBtn.style.cssText = 'background: linear-gradient(45deg, #ff6b9d, #c44569); color: white; border: none; padding: 15px 30px; font-size: 1.1rem; font-family: Poppins, sans-serif; font-weight: 600; border-radius: 50px; cursor: pointer; margin-top: 30px; box-shadow: 0 10px 30px rgba(196, 69, 105, 0.35); transition: all 0.3s ease;';
    
    loveLetterBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 15px 40px rgba(196, 69, 105, 0.45)';
    });
    
    loveLetterBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(196, 69, 105, 0.35)';
    });
    
    loveLetterBtn.addEventListener('click', function() {
        openLoveLetterMail();
    });
    
    const messageCard = messageSection.querySelector('.message-card');
    if (messageCard) {
        messageCard.appendChild(loveLetterBtn);
    }
}

function openLoveLetterMail() {
    const existingMail = document.querySelector('.love-letter-overlay');
    if (existingMail) {
        existingMail.classList.add('active');
        return;
    }
    
    const mailOverlay = document.createElement('div');
    mailOverlay.className = 'love-letter-overlay';
    
    var letterHTML = '<div class="love-letter-container">';
    letterHTML += '<div class="envelope">';
    letterHTML += '<div class="envelope-flap"></div>';
    letterHTML += '<div class="envelope-body">';
    letterHTML += '<div class="letter">';
    letterHTML += '<div class="letter-header">';
    letterHTML += '<span class="letter-stamp">💕</span>';
    letterHTML += '<span class="letter-date">June 2, 2025</span>';
    letterHTML += '</div>';
    letterHTML += '<h2 class="letter-title">To My Dearest Love 💌</h2>';
    letterHTML += '<div class="letter-content">';
    letterHTML += '<p>My Love,</p>';
    letterHTML += '<p>Even though miles separate us right now, my heart is always with you. From the moment we connected, I knew you were special. Every day I count down the moments until I can finally hold you in my arms.</p>';
    letterHTML += '<p>You are my sunshine on cloudy days, my strength when I feel weak, and the reason I smile at my phone screen like an idiot. Your voice is my favorite sound, and your messages are the highlight of my day.</p>';
    letterHTML += '<p>I promise to love you more with each passing day, to stand by you through every storm, and to never let the distance come between us. Soon we will be together, and every moment of waiting will be worth it. You are my best friend, my partner, my soulmate, and my forever.</p>';
    letterHTML += '<p>Happy Birthday, my love. I cannot wait to celebrate with you in person soon!</p>';
    letterHTML += '<p class="letter-closing">Forever Yours,<br>Raj 💗</p>';
    letterHTML += '</div>';
    letterHTML += '<div class="letter-actions">';
    letterHTML += '<button class="reply-btn" onclick="replyToLoveLetter()">📱 Reply on Instagram</button>';
    letterHTML += '<button class="close-letter-btn" onclick="closeLoveLetter()">Close Letter</button>';
    letterHTML += '</div>';
    letterHTML += '</div>';
    letterHTML += '</div>';
    letterHTML += '</div>';
    letterHTML += '</div>';
    
    mailOverlay.innerHTML = letterHTML;
    
    document.body.appendChild(mailOverlay);
    
    setTimeout(() => {
        mailOverlay.classList.add('active');
    }, 100);
    
    createConfetti();
}

function closeLoveLetter() {
    const mailOverlay = document.querySelector('.love-letter-overlay');
    if (mailOverlay) {
        mailOverlay.classList.remove('active');
    }
}

function replyToLoveLetter() {
    // Open Instagram profile - Replace 'rajj._thakurr' with your actual Instagram username
    window.open('https://instagram.com/rajj._thakurr', '_blank');
}

// ============================================
// MUSIC PLAYER
// ============================================
let isMusicPlaying = false;

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    if (!music || !btn) return;

    if (isMusicPlaying) {
        music.pause();
        btn.innerHTML = '🎵';
        btn.classList.remove('playing');
        btn.title = 'Play Music';
        isMusicPlaying = false;
    } else {
        music.volume = 0.5;
        music.play().then(() => {
            btn.innerHTML = '⏸️';
            btn.classList.add('playing');
            btn.title = 'Pause Music';
            isMusicPlaying = true;
        }).catch(err => {
            console.log('Music play failed:', err);
            btn.innerHTML = '🔇';
            btn.title = 'Click to try again';
            isMusicPlaying = false;
        });
    }
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.querySelectorAll('.cta-button, .like-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = 'position: absolute; width: ' + size + 'px; height: ' + size + 'px; left: ' + x + 'px; top: ' + y + 'px; background: rgba(255, 255, 255, 0.4); border-radius: 50%; transform: scale(0); animation: ripple 0.6s ease-out; pointer-events: none;';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = '@keyframes ripple { to { transform: scale(2); opacity: 0; } }';
document.head.appendChild(rippleStyle);

// ============================================
// PHOTO ENTRANCE ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const photoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.photo-card').forEach(card => {
        photoObserver.observe(card);
    });
});
