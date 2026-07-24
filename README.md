[ 繁體中文 ](README_ZH.md) | [ English ](README.md)

# 🔒 Local Privacy Toolkits

An ultra-fast, 100% client-side, offline-capable web toolkit designed for personal and enterprise privacy. All file processing, conversion, and packaging are executed entirely within your local browser.

💡 Privacy First Commitment: Your confidential documents, personal data, and financial reports NEVER leave your machine or upload to any server. We do not and cannot collect any of your data.

🚀 Live Demo: [b200077.github.io/local-tools](https://b200077.github.io/local-tools/) 

---

### 🛠 Tools List

1. 🖼 Image to PDF Tool
   * Description: Convert multiple JPG/PNG images into a single PDF directly in your browser.
   * Tech: Built with `pdf-lib` for async binary processing to prevent browser UI freezing.

2. 📊 Excel Converter (Excel to CSV/JSON)
   * Description: Convert `.xlsx` or `.xls` files into CSV or JSON formats with multi-sheet support.
   * Tech: Powered by `SheetJS (xlsx)` with automatic UTF-8 BOM injection to ensure Chinese characters display correctly in Excel on Windows.

3. 🎥 Local Video / Audio Converter & Trimmer (FFmpeg WebAssembly)
   * Description: Losslessly trim videos or convert media formats locally inside your browser without uploading to any server.
   * Tech: Utilizes `FFmpeg.wasm` and `coi-serviceworker` to perform client-side media processing and high-performance video cutting.

4. 📄 Local PDF & PPTX Text Extractor
   * Description: Extract plain text from PDF and PowerPoint (`.pptx`) documents locally with 100% data privacy.
   * Tech: Client-side document parsing to process slide decks and PDFs completely offline.

---

## ✨ Key Features

1. Absolute Privacy: No-backend architecture ensures files stay on your device.
2. Lightning Fast: Zero network latency; performance depends entirely on your local hardware[cite: 22].
3. Offline Ready: Works completely offline once loaded—perfect for air-gapped or high-security environments[cite: 22].
4. Modern UI: Dark mode design with drag-and-drop file support[cite: 22].

---

## 📦 Tech Stack

* Frontend: HTML5, CSS3, JavaScript (Vanilla ES6) [cite: 22]
* Libraries: [pdf-lib](https://github.com/Hopding/pdf-lib), [SheetJS](https://github.com/SheetJS/sheetjs) [cite: 22]
* Hosting: GitHub Pages [cite: 22]

⭐ If you find this project helpful, please consider giving it a Star! It really helps support the project.