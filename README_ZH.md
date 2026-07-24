[ 繁體中文 ](README_ZH.md) | [ English ](README.md)

# 🔒 極速本地隱私工具箱 (Local Privacy Toolkits)

[![GitHub license](https://img.shields.io/github/license/b200077/local-tools?color=blue)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen)](https://b200077.github.io/local-tools/)

一個專為個人與企業用戶打造的**「100% 本地運算、斷網可用」**網頁工具箱。所有檔案的解析、轉換、打包工作，全部直接在您的本機瀏覽器內完成。

> 💡 **核心承諾**：您的機密合約、客戶個資、公司財務報表，**絕對不會上傳到任何伺服器**。我們從不收集、也無法收集您的任何資料。

🛡️ 資安與隱私使用建議
為了確保您的極致隱私，強烈建議您**「開啟瀏覽器的無痕模式（隱私視窗）」**來使用本工具。
這能有效防止：
1. 瀏覽器惡意擴充功能（Extensions）側錄您的網頁內容。
2. 暫存檔與記憶體殘留留在公用電腦中。
3. 關閉視窗後，所有當次處理的機密資料隨即從瀏覽器記憶體中徹底釋放。

---

## 🚀 線上即刻使用

👉 **[點此進入「極速本地隱私工具箱」](https://b200077.github.io/local-tools/)**

---

## 🛠️ 現有工具清單

### 1. 🖼️ 圖片轉 PDF 工具 (Image to PDF)
*   **功能描述**：將多張 JPG、PNG 圖片，在前端極速打包成單一 PDF 檔案。
*   **技術實現**：使用 `pdf-lib` 進行非同步二進位讀取與 PDF 序列化，確保大檔案打包時網頁依然流暢不卡死。
*   **適用情境**：證件掃描、機密合約打包、私人相簿備份。

### 2. 📊 Excel 轉換器 (Excel to CSV/JSON)
*   **功能描述**：將 `.xlsx` 或 `.xls` 檔案轉換成純文字的 `CSV` 格式或結構化的 `JSON` 檔案。支援擁有多個工作表 (Sheets) 的活頁簿自由切換匯出。
*   **技術實現**：整合 `SheetJS (xlsx)` 套件進行前端資料解析，並特別針對台灣用戶加入 **UTF-8 BOM 標頭** 處理，確保轉出的 CSV 檔案在 Windows Excel 直接開啟時中文**絕對不亂碼**。
*   **適用情境**：客戶個資名單整理、商務數據清洗、工程開發與網頁 i18n 多國語言對照。

### 3. 📄 PDF / PPTX 轉文字工具 (PDF/PPTX to Text)

* **功能描述**：一鍵提取 PDF 簡報與 PowerPoint (`.pptx`) 檔案中的所有純文字內容，省去逐頁複製貼上的麻煩。
* **技術實現**：在前端直接解析二進位文件結構，極速提取文本並排版輸出，全程無需安裝任何 Office 軟體。
* **適用情境**：課堂講義重點摘要、會議簡報文字整理、合約報告內容快速檢索。

### 4. 🎬 影音轉換與無損秒切工具 (FFmpeg Video Tool)

* **功能描述**：本地端的高效影音剪輯與格式轉換利器。支援影片無損秒切（不需重新編碼、不傷畫質），以及影片與音訊的格式轉換。
* **技術實現**：利用 `coi-serviceworker` 啟用強大的瀏覽器隔離安全機制，並導入 `FFmpeg WASM (WebAssembly)` 技術，直接將 C/C++ 編譯的頂級影音引擎搬到前端瀏覽器運行。
* **適用情境**：影片長度快速裁剪，且完全不用擔心隱私影片外流。
---

## ✨ 專案特色與優勢

1.  **極致隱私安全**：完全無後端（No-Backend）架構，檔案不離機，適合企業內部資安合規政策。
2.  **速度極快**：省去網路上傳與下載的時間，大檔案轉換僅取決於您本機電腦的硬體效能。
3.  **無痛中文相容**：針對繁體中文語系與 MS Office 軟體生態系進行深度優化（自動補足 CSV BOM 檔頭）。
4.  **離線可用 (Offline-ready)**：網頁載入後，即使拔掉網路線、在無網環境（如飛機上或機房內）依然能正常運作。
5.  **精緻 UI 設計**：採用現代感護眼的 Dark Mode 暗色系風格，支援流暢的**拖曳上傳（Drag and Drop）**體驗。

---

## 📦 技術棧 (Tech Stack)

* **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6)
* **PDF Engine**: [pdf-lib](https://github.com/Hopding/pdf-lib)
* **Data Parser**: [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs)
* **Audio/Video Engine**: [FFmpeg WASM (WebAssembly)](https://github.com/ffmpegwasm/ffmpegwasm) 
* **Browser Security**: `coi-serviceworker` (啟用 Cross-Origin Isolation 以支援 SharedArrayBuffer 高效能運算)
* **Deployment**: GitHub Pages

---

## 🤝 貢獻與反饋

如果您有任何新的工具構想（希望能透過純前端、本地安全運算的方式實現），或是遇到任何 Bug，歡迎提出 [Issue](https://github.com/b200077/local-tools/issues) 或是提交 Pull Request！

*   Author: [b200077](https://github.com/b200077)
