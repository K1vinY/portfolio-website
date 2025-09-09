// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 導航欄功能
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 漢堡選單切換
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 點擊導航連結時關閉選單
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // 平滑滾動到對應區段（僅同頁錨點）
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || '';
            // 僅攔截同頁 #anchor，跨頁連結（如 index.html#about）保持預設
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // 考慮固定導航欄高度
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
    
    // 導航欄滾動效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(184, 149, 107, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 專案篩選功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按鈕的 active 類別
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加 active 類別到當前按鈕
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 技能進度條動畫
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };
    
    // 當技能區段進入視窗時觸發動畫
    const skillsSection = document.querySelector('.skills');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // 滾動動畫效果
    const fadeElements = document.querySelectorAll('.about, .portfolio, .experience, .publications, .resume, .contact');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        fadeObserver.observe(element);
    });
    
    // 聯絡表單處理 - 已移除表單
    // const contactForm = document.querySelector('.contact-form form');
    
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         
    //         // 獲取表單數據
    //         const formData = new FormData(this);
    //         const name = this.querySelector('input[type="text"]').value;
    //         const email = this.querySelector('input[type="email"]').value;
    //         const subject = this.querySelectorAll('input[type="text"]')[1].value;
    //         const message = this.querySelector('textarea').value;
    //         
    //         // 簡單驗證
    //         if (!name || !email || !message) {
    //             alert('Please fill in all required fields');
    //             return;
    //         }
    //         
    //         // 模擬發送郵件
    //         const submitButton = this.querySelector('button[type="submit"]');
    //         const originalText = submitButton.textContent;
    //         
    //         submitButton.textContent = 'Sending...';
    //         submitButton.disabled = true;
    //         
    //         setTimeout(() => {
    //             alert('Message sent! I will get back to you soon.');
    //             this.reset();
    //             submitButton.textContent = originalText;
    //             submitButton.disabled = false;
    //         }, 2000);
    //     });
    // }
    
    // 專案項目點擊效果
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 檢查連結是否有有效的 href 屬性
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                // 如果有有效的連結，允許正常跳轉
                return true;
            } else {
                // 如果是佔位符連結，阻止跳轉並顯示提示
                e.preventDefault();
                alert('This is a demo link. In a real website, this would navigate to detailed project pages.');
            }
        });
    });
    
    // 社交媒體連結 - 移除 demo 攔截，讓連結正常工作
    // const socialLinks = document.querySelectorAll('.social-link');
    
    // socialLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         alert('This is a demo link. In a real website, this would navigate to your social media pages.');
    //     });
    // });
    
    // 返回頂部按鈕
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--mocha-mus);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(184, 149, 107, 0.3);
    `;
    
    document.body.appendChild(backToTopButton);
    
    // 顯示/隱藏返回頂部按鈕
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // 返回頂部功能
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 滑鼠懸停效果
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(184, 149, 107, 0.4)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(184, 149, 107, 0.3)';
    });
    
    // 打字機效果（可選）
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // 延遲開始打字機效果
        setTimeout(typeWriter, 1000);
    }
    
    // 添加 CSS 動畫
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .back-to-top:hover {
            background: var(--mocha-mus-dark) !important;
        }
        
        .portfolio-item {
            animation: fadeIn 0.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // 載入完成提示
    console.log('Kevin Yu Biological Data Science Portfolio loaded successfully!');
    console.log('Mocha Mousse color palette applied');
    console.log('All interactive features enabled');
});

// 頁面載入動畫
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});