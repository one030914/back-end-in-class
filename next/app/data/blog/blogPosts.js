export const blogPost = [
  {
    userId: 3,
    postId: 1,
    title: "響應式設計的實戰心得",
    content:
      "最近在實作響應式網站時發現，使用Flexbox結合CSS Grid能大幅提升排版效率！建議新手先從移動端樣式開始設計，再透過media query逐步調整桌面版佈局。別忘了在<meta>標籤設定viewport，這是避免版面錯亂的基礎設定唷～",
  },
  {
    userId: 2,
    postId: 2,
    title: "Vue.js初學者常見誤區解析",
    content:
      "剛接觸Vue時常犯的錯誤是過度使用計算屬性，其實methods和computed要分清楚使用時機。另外元件之間的props傳遞要記得設定type驗證，這能幫助團隊協作時減少很多莫名其妙的bug！",
  },
  {
    userId: 5,
    postId: 3,
    title: "CSS動畫效能優化技巧",
    content:
      "製作載入動畫時發現，使用transform取代top/left屬性變化能有效減少重繪次數。推薦多用硬體加速特性如translateZ(0)，但要注意過度使用可能導致記憶體消耗增加，平衡點需要實際測試拿捏。",
  },
  {
    userId: 1,
    postId: 4,
    title: "Webpack設定踩坑記錄",
    content:
      "打包時遇到路徑問題？記得在config檔案設定正確的publicPath。最近發現splitChunks功能超好用，能將第三方套件拆分獨立檔案。建議定期執行bundle分析，那些過大的模組可能就是需要優化的目標！",
  },
  {
    userId: 4,
    postId: 5,
    title: "TypeScript型別守衛實用技巧",
    content:
      "型別守衛(type guards)能讓程式碼更安全，推薦多用typeof和instanceof做型別檢查。最近嘗試自定義型別謂詞，配合聯合型別使用時，可以大幅提升IDE的自動提示準確度呢！",
  },
  {
    userId: 3,
    postId: 6,
    title: "前端錯誤監測實務分享",
    content:
      "使用window.onerror捕捉全域錯誤時，記得設定crossOrigin屬性才能正確取得外部腳本的錯誤資訊。推薦搭配Sentry服務記錄用戶端異常，實際部署後幫我們減少了30%的未預期錯誤！",
  },
  {
    userId: 2,
    postId: 7,
    title: "ES6解構賦值妙用三招",
    content:
      "除了基本變數交換，解構賦值在函式參數處理特別方便！搭配預設值使用可以取代options物件模式，最近還發現能用來快速提取正則表達式的匹配結果，程式碼簡潔度直接提升一個等級～",
  },
  {
    userId: 5,
    postId: 8,
    title: "瀏覽器渲染原理實戰應用",
    content:
      "理解Critical Rendering Path後，學會將CSS放在<head>、JS加上async屬性。實際測試發現首屏載入時間縮短了1.2秒！記得避免在CSS使用@import語法，這會增加渲染阻塞的時間唷。",
  },
  {
    userId: 1,
    postId: 9,
    title: "React Hooks使用心法整理",
    content:
      "useEffect的依賴陣列千萬不能留空！最近在處理訂閱功能時，忘記加入依賴參數導致狀態不更新。推薦自訂hook時遵循use開頭的命名慣例，這能讓團隊成員更容易理解程式碼結構。",
  },
  {
    userId: 4,
    postId: 10,
    title: "前端資安防護實作筆記",
    content:
      "表單記得加入CSRF token防護，使用CSP標頭阻擋非法腳本執行。最近在處理XSS漏洞時，發現textContent比innerHTML安全得多，第三方套件都要仔細檢查是否有執行eval的危險操作！",
  },
  {
    userId: 3,
    postId: 11,
    title: "SASS模組化開發心得",
    content:
      "善用@use取代@import能避免變數污染問題！顏色管理推薦用map結構儲存，搭配自訂function生成色階。最近嘗試將按鈕樣式拆分成mixin，不同主題只需傳入參數就能快速生成樣式表～",
  },
  {
    userId: 2,
    postId: 12,
    title: "前端測試入門踩坑記",
    content:
      "Jest快照測試更新時要特別小心，養成檢視diff的習慣。測試React元件時，發現testing-library比enzyme更直覺好用！Mock API回應時記得同時模擬成功與失敗案例，覆蓋率才能達標。",
  },
  {
    userId: 5,
    postId: 13,
    title: "效能優化之圖片懶加載",
    content:
      "使用Intersection Observer API實作懶加載時，記得設定rootMargin預先載入畫面外圖片。WebP格式雖好但要注意相容性，最近採用<picture>元素搭配多種格式來源，有效減少30%圖片流量！",
  },
  {
    userId: 1,
    postId: 14,
    title: "Node.js整合前端工作流",
    content:
      "用script-runner平行執行npm script超方便！自訂腳本處理SCSS編譯時，發現chokidar套件比原生watch更穩定。重要技巧：在package.json設定pre/post鉤子，能自動化許多部署前準備工作～",
  },
  {
    userId: 4,
    postId: 15,
    title: "UI元件庫設計原則",
    content:
      "設計可復用元件時，務必遵循單一職責原則！最近發現為元件添加data-attribute方便測試選取。樣式封裝推薦採用CSS-in-JS方案，能有效避免類別名稱衝突，主題切換也變得更容易實作。",
  },
  {
    userId: 3,
    postId: 16,
    title: "前端路由權限控制實作",
    content:
      "在Vue Router中使用導航守衛時，記得處理next()的呼叫時機！後端返回的權限列表要轉換為路由映射表，動態掛載到router實例。實測發現路由懶加載能有效提升初始載入速度呢～",
  },
  {
    userId: 2,
    postId: 17,
    title: "WebSocket即時應用實戰",
    content:
      "處理斷線重連時，發現指數退避演算法比定時重試更有效率！重要資料記得要設計確認機制，避免訊息遺失。最近改用二進位傳輸格式，相比JSON節省了40%的頻寬用量，效果超顯著！",
  },
  {
    userId: 5,
    postId: 18,
    title: "前端國際化最佳實踐",
    content:
      "使用i18next時，將翻譯檔按語言拆分能提升載入效率。日期格式記得用Intl.DateTimeFormat處理，貨幣轉換要考慮匯率更新機制。最近發現用命名空間管理不同模組文案，維護性大大提升！",
  },
  {
    userId: 1,
    postId: 19,
    title: "Chrome DevTools進階技巧",
    content:
      "Network面板的Throttling功能可模擬弱網環境，Audits能快速檢測SEO問題。最近愛用Recorder工具錄製使用者操作流程，自動產生Puppeteer測試腳本，省下超多手動編寫的時間！",
  },
  {
    userId: 4,
    postId: 20,
    title: "前端工程師的Debug心法",
    content:
      "遇到詭異bug時，console.log不是唯一解法！推薦多用debugger指令中斷點，搭配Scope面板觀察閉包變數。最近學會用Performance錄製分析，揪出某個第三方套件導致的主執行緒阻塞問題～",
  },
];
