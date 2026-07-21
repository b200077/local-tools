// 1. 定義全站翻譯字典
const translations = {
  zh: {
    // 通用 / Navbar / Footer
    brand_name: "🔒 極速本地隱私工具箱",
    nav_home: "首頁",
    btn_lang: "English",
    btn_use_now: "立即使用 →",

    // index.html
    main_title: "🔒 極速本地隱私工具箱",
    main_subtitle: "一個專為個人與企業用戶打造的「100% 本地運算、斷網可用」網頁工具箱。",
    section_tools: "🛠 現有工具清單",

    // 1. 圖片轉 PDF (image-pdf.html)
    tool_img_pdf_title: "🖼 圖片轉 PDF 工具",
    tool_img_pdf_desc: "將多張 JPG、PNG 圖片，在前端極速打包成單一 PDF 檔案。",

    // 2. Excel 轉換器 (excel-tool.html)
    excel_page_title: "安全 Excel 轉 CSV/JSON - 100% 本地隱私安全",
    tool_excel_title: "📊 Excel 轉換器 (CSV/JSON)",
    tool_excel_desc: "將 .xlsx 或 .xls 檔案轉換成 CSV 或 JSON 格式，支援多工作表與 UTF-8 BOM 防亂碼。",
    excel_subtitle: "🔒 商業機密、客戶個資不外洩！100% 在本地瀏覽器完成轉檔，支援斷網操作",
    excel_dropzone: "拖曳 Excel 檔案 (.xlsx, .xls) 到此處，或點擊選擇檔案",
    excel_select_sheet: "請選擇要轉換的工作表 (Sheet)：",
    excel_btn_csv: "轉為 CSV 下載",
    excel_btn_json: "轉為 JSON 下載",
    excel_status_default: "尚未選擇檔案",
    excel_status_parsing: "⚡ 正在本地解析 Excel 中...",
    excel_status_success: "✅ 成功讀取檔案：",
    excel_status_error: "❌ 檔案解析失敗，請確認是否為正確的 Excel 格式。",
    excel_status_exported: "🎉 已成功匯出 ",

    // 3. 本地影音剪輯 (video-tool.html)
    tool_video_title: "🎥 本地影音轉換與剪輯工具",
    tool_video_desc: "純前端 FFmpeg WebAssembly 技術，影片無損秒切與格式轉換，檔案完全不流出。",

    // 4. PDF/PPT 轉文字 (pdf-ppt-text.html)
    tool_pdf_ppt_title: "📄 本地 PDF/PPTX 轉文字工具",
    tool_pdf_ppt_desc: "直接在瀏覽器解析 PDF 與 PowerPoint 簡報並提取純文字內容。"
  },
  en: {
    // General / Navbar / Footer
    brand_name: "🔒 Local Privacy Toolkits",
    nav_home: "Home",
    btn_lang: "繁體中文",
    btn_use_now: "Use Now →",

    // index.html
    main_title: "🔒 Local Privacy Toolkits",
    main_subtitle: "100% Client-Side Processing & Offline Ready Web Toolkits Built for Security and Speed.",
    section_tools: "🛠 Available Tools",

    // 1. Image to PDF (image-pdf.html)
    tool_img_pdf_title: "🖼 Image to PDF Converter",
    tool_img_pdf_desc: "Convert multiple JPG or PNG images into a single PDF directly inside your browser.",

    // 2. Excel Converter (excel-tool.html)
    excel_page_title: "Secure Excel to CSV/JSON - 100% Local & Private",
    tool_excel_title: "📊 Excel Converter (CSV/JSON)",
    tool_excel_desc: "Convert .xlsx or .xls files to CSV/JSON with multi-sheet support and UTF-8 BOM encoding.",
    excel_subtitle: "🔒 Zero Data Leakage! 100% processed locally in your browser. Fully offline capable.",
    excel_dropzone: "Drag & drop Excel files (.xlsx, .xls) here, or click to browse",
    excel_select_sheet: "Select a worksheet to convert:",
    excel_btn_csv: "Convert to CSV",
    excel_btn_json: "Convert to JSON",
    excel_status_default: "No file selected",
    excel_status_parsing: "⚡ Parsing Excel locally...",
    excel_status_success: "✅ File loaded successfully: ",
    excel_status_error: "❌ Failed to parse file. Please verify if it is a valid Excel file.",
    excel_status_exported: "🎉 Successfully exported ",

    // 3. Video Tools (video-tool.html)
    tool_video_title: "🎥 Local Video Converter & Trimmer",
    tool_video_desc: "Losslessly trim or convert video files client-side using FFmpeg WebAssembly. Zero uploads.",

    // 4. PDF/PPT Text Extractor (pdf-ppt-text.html)
    tool_pdf_ppt_title: "📄 Local PDF / PPTX Text Extractor",
    tool_pdf_ppt_desc: "Extract plain text from PDF documents and PowerPoint slides completely offline."
  }
};

// 2. 取得目前語言（優先使用 localStorage，次之根據瀏覽器預設）
let currentLang = localStorage.getItem('app_lang') || 
                  (navigator.language.startsWith('en') ? 'en' : 'zh');

// 3. 更新 UI 文字的函式
function updateUI() {
  // 搜尋所有帶有 data-i18n 屬性的 HTML 標籤
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // 更新切換按鈕的顯示文字
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = translations[currentLang].btn_lang;

  // 儲存語言設定
  localStorage.setItem('app_lang', currentLang);
}

// 4. 切換語言
function toggleLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  updateUI();
}

// 5. 當 DOM 載入完畢後自動執行一次
document.addEventListener('DOMContentLoaded', updateUI);