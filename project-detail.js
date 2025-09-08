// 專案詳情頁面 JavaScript

// 專案數據庫
const projects = {
    'coral-bleaching': {
        title: 'Predicting Coral Bleaching Using NCAA Database',
        time: 'Jan 2025 - May 2025',
        location: 'Arizona State University',
        category: 'Data Analysis',
        abstract: 'Coral bleaching has become a critical environmental issue driven by climate change and ocean stressors. This project utilizes environmental datasets from the NOAA Coral Reef Watch program to predict the severity of coral bleaching events using machine learning techniques. By integrating and preprocessing oceanographic variables, we applied multiple predictive models to identify high-risk zones and inform conservation efforts. Through performance tuning and evaluation, the models demonstrated strong forecasting capability and computational efficiency, providing a valuable tool for reef monitoring and environmental planning.',
        what: 'Coral bleaching poses a major threat to marine biodiversity and coastal ecosystems. With increasing sea temperatures and ocean acidification, traditional monitoring approaches fall short in providing timely forecasts. This project aimed to build a predictive system that can classify and anticipate the severity of coral bleaching using large-scale environmental data, helping scientists and policy makers intervene before irreversible damage occurs.',
        how: 'We collected and cleaned historical coral bleaching and sea condition data from the NOAA Coral Reef Watch database. Using features such as sea surface temperature, light stress, and depth, we trained and evaluated several classification models including XGBoost, Support Vector Machines (SVM), and a Random Classifier baseline. Feature engineering and hyperparameter tuning were conducted to improve performance. The entire pipeline was optimized for efficiency in cloud computing environments, ensuring scalability for future environmental monitoring use cases.',
        results: 'Among all models, XGBoost achieved the highest accuracy at 94%, significantly outperforming baseline classifiers. The model\'s ability to identify high-risk reef zones can support early-warning systems and resource allocation for coral reef conservation. Additionally, the computational pipeline was streamlined for deployment on cloud infrastructure, enabling real-time scalability for future integrations. This project demonstrates how data science can contribute to ecological forecasting and environmental sustainability.',
        technologies: ['Python', 'Machine Learning', 'Data Analysis', 'SVM', 'XGBoost', 'Random Classifier'],
        links: [
            { text: 'View Code', url: 'https://github.com/K1vinY/2025_ML-workshop', type: 'primary' },
            { text: 'Research Paper', url: '#', type: 'secondary' }
        ],
        images: [
            'images/coral-bleaching-score.png',
            'images/coral-bleaching-results.png'
        ]
    },
    'nhanes': {
        title: 'Applied Statistical Testing on Socioeconomic Impact Using NHANES Data',
        time: 'Jan 2025 - May 2025',
        location: 'Arizona State University',
        category: 'Data Analysis',
        abstract: 'This project analyzes NHANES (National Health and Nutrition Examination Survey) data to quantify relationships between socioeconomic status and key health indicators using statistical testing and modeling. Results aim to inform public health decision-making and equity-focused interventions.',
        what: 'We explored the associations between socioeconomic variables (e.g., income, education) and health outcomes (e.g., BMI, blood pressure) using NHANES datasets.',
        how: 'Data preprocessing, missing value handling, variable normalization, and hypothesis testing (t-test, ANOVA, chi-square), plus regression modeling to evaluate effect sizes and significance.',
        results: 'Identified statistically significant associations between socioeconomic strata and multiple health measures with effect sizes robust across sensitivity analyses.',
        technologies: ['Python', 'Pandas', 'NumPy', 'SciPy', 'StatsModels', 'Seaborn'],
        links: [
            { text: 'View Code', url: '#', type: 'primary' },
            { text: 'Report', url: '#', type: 'secondary' }
        ],
        images: [
            'images/nhanes-score.png',
            'images/nhanes-result.png'
        ]
    }
    // 其他專案數據可以在這裡添加
};

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    // 從 URL 參數獲取專案 ID
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    if (projectId && projects[projectId]) {
        loadProject(projects[projectId]);
    } else {
        // 如果沒有找到專案，顯示默認內容或錯誤信息
        showDefaultContent();
    }
});

// 載入專案數據
function loadProject(project) {
    // 更新頁面標題
    document.title = `${project.title} - Kevin Yu Portfolio`;
    
    // 更新專案標題
    document.getElementById('project-title').textContent = project.title;
    
    // 更新專案元數據
    document.getElementById('project-time').textContent = project.time;
    document.getElementById('project-location').textContent = project.location;
    document.getElementById('project-category').textContent = project.category;
    
    // 更新摘要
    document.getElementById('project-abstract').textContent = project.abstract;
    
    // 更新內容
    document.getElementById('project-what').innerHTML = `<p>${project.what}</p>`;
    document.getElementById('project-how').innerHTML = `<p>${project.how}</p>`;
    document.getElementById('project-results').innerHTML = `<p>${project.results}</p>`;
    
    // 更新技術標籤
    const techContainer = document.getElementById('project-tech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });
    
    // 更新相關連結
    const linksContainer = document.getElementById('project-links');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
        const button = document.createElement('a');
        button.href = link.url;
        button.className = `link-button ${link.type === 'secondary' ? 'secondary' : ''}`;
        button.textContent = link.text;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        linksContainer.appendChild(button);
    });
    
    // 更新圖片
    const imagesContainer = document.getElementById('project-images');
    if (project.images && project.images.length > 0) {
        imagesContainer.innerHTML = '';
        project.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${project.title} - Result Image`;
            img.onerror = function() {
                // 如果圖片載入失敗，顯示佔位符
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '<i class="fas fa-image"></i><p>Image not available</p>';
                imagesContainer.appendChild(placeholder);
            };
            imagesContainer.appendChild(img);
        });
    } else {
        // 如果沒有圖片，顯示佔位符
        imagesContainer.innerHTML = `
            <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <p>Project images will be added soon</p>
            </div>
        `;
    }
}

// 顯示默認內容
function showDefaultContent() {
    document.getElementById('project-title').textContent = 'Project Not Found';
    document.getElementById('project-abstract').textContent = 'The requested project could not be found. Please check the URL or return to the projects page.';
    
    // 隱藏其他內容區域
    document.querySelector('.project-content').style.display = 'none';
    document.querySelector('.project-technologies').style.display = 'none';
    document.querySelector('.project-links').style.display = 'none';
}

// 導航功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 漢堡選單切換
if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 點擊導航連結時關閉選單
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// 平滑滾動效果
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href') || '';
        // 僅在同頁內錨點時攔截，跨頁連結保持預設行為
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
    });
});

// 導航欄滾動效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(184, 149, 107, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});
