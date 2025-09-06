# 摩卡慕斯主題作品集網站

這是一個基於 Pantone 17-1230 摩卡慕斯調色板的個人作品集網站，採用現代化的設計風格和響應式布局。

## 🎨 設計特色

### 色彩主題
- **主色調**: Pantone 17-1230 摩卡慕斯 (#B8956B)
- **輔助色調**: 輕鬆優雅配色方案
  - Cannoli Cream (#F5F1E8)
  - Cream Tan (#E8DCC6)
  - Safari (#D4C4A8)
  - Sirocco (#C4A882)
  - Chanterelle (#B8956B)

### 設計理念
- 溫暖優雅的視覺風格
- 現代簡約的布局設計
- 流暢的動畫效果
- 完全響應式設計

## 📁 文件結構

```
portfolio-website/
├── index.html          # 主頁面
├── styles.css          # 樣式文件
├── script.js           # JavaScript 功能
└── README.md           # 說明文件
```

## 🚀 功能特色

### 導航功能
- 固定頂部導航欄
- 平滑滾動到對應區段
- 響應式漢堡選單
- 滾動時導航欄樣式變化

### 首頁區域
- 吸引人的標題和副標題
- 動態幾何圖形背景
- 行動呼籲按鈕
- 打字機效果

### 關於我區域
- 個人介紹
- 統計數據展示
- 響應式布局

### 作品集區域
- 作品分類篩選
- 懸停效果
- 網格布局
- 作品詳情彈窗

### 技能區域
- 動態進度條
- 技能分類展示
- 滾動觸發動畫

### 聯絡我區域
- 聯絡資訊展示
- 表單驗證
- 社交媒體連結
- 響應式表單設計

## 🛠️ 技術規格

- **HTML5**: 語義化標記
- **CSS3**: 現代 CSS 特性，包括 Grid 和 Flexbox
- **JavaScript ES6+**: 現代 JavaScript 功能
- **響應式設計**: 支援各種設備尺寸
- **字體**: Noto Sans TC (繁體中文優化)

## 📱 響應式設計

網站完全支援響應式設計，在不同設備上都能提供最佳體驗：

- **桌面版**: 完整功能展示
- **平板版**: 優化的布局和導航
- **手機版**: 簡化的界面和觸控優化

## 🎯 使用方式

1. 直接在瀏覽器中打開 `index.html`
2. 或使用本地伺服器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx serve .
   ```

## ✨ 自定義指南

### 修改個人資訊
在 `index.html` 中修改以下內容：
- 個人姓名和標題
- 關於我描述
- 聯絡資訊
- 社交媒體連結

### 添加作品
在作品集區域添加新的 `.portfolio-item`：
```html
<div class="portfolio-item" data-category="類別">
    <div class="portfolio-image">
        <div class="image-placeholder">
            <i class="fas fa-icon-name"></i>
        </div>
        <div class="portfolio-overlay">
            <h3>作品標題</h3>
            <p>作品描述</p>
            <a href="#" class="portfolio-link">查看詳情</a>
        </div>
    </div>
</div>
```

### 修改技能
在技能區域更新技能項目和進度百分比。

### 調整色彩
在 `styles.css` 的 `:root` 選擇器中修改 CSS 變數。

## 🔧 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 授權

此項目僅供個人作品集使用。請根據需要修改內容以符合您的個人品牌。

## 🤝 貢獻

歡迎提出建議和改進意見！

---

**設計靈感**: [Pantone 2025 年度代表色 - 摩卡慕斯](https://www.pantone.com/hk/tc/color-of-the-year/2025)
