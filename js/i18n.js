// 1. 定義全站翻譯字典
const translations = {
  zh: {
    // 通用 / Navbar / Footer
    brand_name: "🔒 極速本地隱私工具箱",
    nav_home: "← 首頁",
    btn_lang: "English",
    btn_use_now: "立即使用 →",

    // index.html
    main_title: "🔒 極速本地隱私工具箱",
    main_subtitle: "一個專為個人與企業用戶打造的「100% 本地運算、斷網可用」網頁工具箱。",
    section_tools: "🛠 現有工具清單",

    // --- zh (繁體中文) 追加部分 ---
    image_pdf_page_title: "🖼 本地圖片轉 PDF 工具 - 極速本地隱私工具箱",
    tool_img_pdf_title: "🖼 圖片轉 PDF 工具",
    img_pdf_heading: "🖼 本地圖片轉 PDF 工具",
    img_pdf_subtitle: "🔒 100% 在本地瀏覽器將圖片打包成 PDF，隱私安全免上傳",
    img_pdf_dropzone: "拖曳圖片 (.jpg, .png, .webp) 到此處，或點擊選擇檔案",
    img_pdf_btn_clear: "🗑 清空所有圖片",
    img_pdf_btn_convert: "🚀 開始轉換並下載 PDF",
    img_pdf_status_default: "尚未選取圖片",
    img_pdf_status_selected: "已選取 ",
    img_pdf_status_items: " 張圖片",
    img_pdf_status_generating: "⚡ 正在本地打包 PDF 中，請稍候...",
    img_pdf_status_success: "🎉 PDF 下載成功！",
    img_pdf_status_cleared: "已清空所有圖片",
    img_pdf_status_empty: "請先上傳至少一張圖片！",

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
    video_page_title: "🎬 本地影音處理工具 - 極速本地隱私工具箱",
    video_heading: "🎬 本地影音處理工具 (極速萬能轉檔)",
    video_status_prefix: "狀態：",
    video_status_loading: "正在載入 FFmpeg 核心...",
    video_status_ready: "FFmpeg 載入成功！請選擇檔案並點擊開始。",
    video_status_unsupported: "載入失敗，瀏覽器可能不支援 SharedArrayBuffer。",
    video_status_processing: "正在處理中，請稍候...",
    video_status_done: "處理完成！",
    video_status_failed: "處理失敗，請檢查檔案格式或時間設定。",
    video_label_file: "選擇檔案：",
    video_label_feature: "選擇功能：",
    video_opt_cut: "🎬 影片無損秒切 (不傷畫質)",
    video_opt_mp3: "🎵 提取音訊 (轉為 MP3)",
    video_opt_convert: "💻 影片格式轉換 (相容性優化 MP4)",
    video_label_start: "開始時間：",
    video_label_end: "結束時間：",
    video_btn_start: "開始處理",
    video_btn_download: "📥 下載處理完成檔案",

    // 4. PDF/PPT 轉文字 (pdf-ppt-text.html) - 新增專用項目
    pdf_ppt_page_title: "📄 本地 PDF/PPTX/Google簡報 轉文字工具 - 極速本地隱私工具箱",
    tool_pdf_ppt_title: "📄 本地 PDF/PPTX 轉文字工具",
    tool_pdf_ppt_desc: "直接在瀏覽器解析 PDF 與 PowerPoint 簡報並提取純文字內容。",
    pdf_ppt_heading: "📄 本地 PDF/PPTX/Google簡報 轉文字工具",
    pdf_ppt_privacy_tip: "🛡️ <b>安全提示：</b>本工具為 100% 純前端本地運算。強烈建議在<b>「瀏覽器無痕模式」</b>下使用，以防止瀏覽器外掛讀取記憶體或產生殘留。",
    pdf_ppt_status_prefix: "狀態：",
    pdf_ppt_status_waiting: "等待處理檔案...",
    pdf_ppt_status_selected: "已選取本地檔案：",
    pdf_ppt_status_detected_url: "已偵測到 Google 簡報網址，請點擊藍色匯入按鈕。",
    pdf_ppt_status_parsing: "正在本地極速解析中...",
    pdf_ppt_status_success: "本地檔案文字提取成功！",
    pdf_ppt_status_error: "解析失敗，請確認檔案是否損壞。",
    pdf_ppt_status_no_url: "請先輸入 Google 簡報網址！",
    pdf_ppt_status_invalid_url: "無法解析該網址，請確認是否為標準的 Google 簡報連結。",
    pdf_ppt_status_requesting_auth: "正在要求 Google 帳號授權...",
    pdf_ppt_status_downloading_cloud: "已取得授權，正在從雲端安全導流二進位檔...",
    pdf_ppt_status_parsing_cloud: "已直連接收檔案，正在本地解析文字...",
    pdf_ppt_status_google_success: "Google 簡報文字提取成功！",
    pdf_ppt_label_method1: "【方法一】選取本地 PDF 或 PPTX 檔案：",
    pdf_ppt_label_method2: "【方法二】輸入 Google 簡報共用網址：",
    pdf_ppt_ph_google_url: "https://docs.google.com/presentation/d/.../edit...",
    pdf_ppt_btn_extract: "開始提取純文字",
    pdf_ppt_btn_google: "從 Google 簡報匯入並提取",
    pdf_ppt_label_result: "提取結果：",
    pdf_ppt_ph_result: "提取出來的文字將會顯示在這裡..."
  },
  en: {
    // General / Navbar / Footer
    brand_name: "🔒 Local Privacy Toolkits",
    nav_home: "← Home",
    btn_lang: "繁體中文",
    btn_use_now: "Use Now →",

    // index.html
    main_title: "🔒 Local Privacy Toolkits",
    main_subtitle: "100% Client-Side Processing & Offline Ready Web Toolkits Built for Security and Speed.",
    section_tools: "🛠 Available Tools",

    // --- en (English) 追加部分 ---
    image_pdf_page_title: "🖼 Local Image to PDF - Local Privacy Toolkits",
    tool_img_pdf_title: "🖼 Image to PDF Converter",
    img_pdf_heading: "🖼 Local Image to PDF Converter",
    img_pdf_subtitle: "🔒 Pack images into a PDF 100% locally in your browser. Zero file uploads.",
    img_pdf_dropzone: "Drag & drop images (.jpg, .png, .webp) here, or click to browse",
    img_pdf_btn_clear: "🗑 Clear All Images",
    img_pdf_btn_convert: "🚀 Convert & Download PDF",
    img_pdf_status_default: "No images selected",
    img_pdf_status_selected: "Selected ",
    img_pdf_status_items: " image(s)",
    img_pdf_status_generating: "⚡ Packaging PDF locally, please wait...",
    img_pdf_status_success: "🎉 PDF downloaded successfully!",
    img_pdf_status_cleared: "Cleared all images",
    img_pdf_status_empty: "Please select at least one image!"

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
    video_page_title: "🎬 Local Video Tools - Local Privacy Toolkits",
    video_heading: "🎬 Local Media Processing Tool (Universal Converter)",
    video_status_prefix: "Status: ",
    video_status_loading: "Loading FFmpeg core...",
    video_status_ready: "FFmpeg loaded successfully! Please select a file and click Start.",
    video_status_unsupported: "Failed to load. Your browser may not support SharedArrayBuffer.",
    video_status_processing: "Processing, please wait...",
    video_status_done: "Processing complete!",
    video_status_failed: "Processing failed. Please check file format or time settings.",
    video_label_file: "Select File: ",
    video_label_feature: "Select Feature: ",
    video_opt_cut: "🎬 Lossless Trim (No Quality Loss)",
    video_opt_mp3: "🎵 Extract Audio (To MP3)",
    video_opt_convert: "💻 Convert Video Format (Optimized MP4)",
    video_label_start: "Start Time: ",
    video_label_end: "End Time: ",
    video_btn_start: "Start Processing",
    video_btn_download: "📥 Download Processed File",

    // 4. PDF/PPT Text Extractor (pdf-ppt-text.html) - New Items
    pdf_ppt_page_title: "📄 Local PDF/PPTX/Google Slides Text Extractor - Local Privacy Toolkits",
    tool_pdf_ppt_title: "📄 Local PDF / PPTX Text Extractor",
    tool_pdf_ppt_desc: "Extract plain text from PDF documents and PowerPoint slides completely offline.",
    pdf_ppt_heading: "📄 Local PDF / PPTX / Google Slides Text Extractor",
    pdf_ppt_privacy_tip: "🛡️ <b>Privacy Tip:</b> This tool runs 100% locally. Using Incognito Mode is recommended to prevent extension memory leaks.",
    pdf_ppt_status_prefix: "Status: ",
    pdf_ppt_status_waiting: "Waiting for file...",
    pdf_ppt_status_selected: "Selected local file: ",
    pdf_ppt_status_detected_url: "Google Slides URL detected. Click the blue Import button.",
    pdf_ppt_status_parsing: "Parsing locally...",
    pdf_ppt_status_success: "Text extracted successfully!",
    pdf_ppt_status_error: "Extraction failed. Please check if the file is corrupted.",
    pdf_ppt_status_no_url: "Please enter a Google Slides URL first!",
    pdf_ppt_status_invalid_url: "Invalid URL. Please make sure it is a valid Google Slides link.",
    pdf_ppt_status_requesting_auth: "Requesting Google authorization...",
    pdf_ppt_status_downloading_cloud: "Authorized! Securely downloading file from Google Cloud...",
    pdf_ppt_status_parsing_cloud: "File received. Extracting text locally...",
    pdf_ppt_status_google_success: "Google Slides text extracted successfully!",
    pdf_ppt_label_method1: "【Option 1】Select local PDF or PPTX file:",
    pdf_ppt_label_method2: "【Option 2】Enter Google Slides URL:",
    pdf_ppt_ph_google_url: "https://docs.google.com/presentation/d/.../edit...",
    pdf_ppt_btn_extract: "Start Text Extraction",
    pdf_ppt_btn_google: "Import & Extract from Google Slides",
    pdf_ppt_label_result: "Extracted Result:",
    pdf_ppt_ph_result: "Extracted text will appear here..."
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