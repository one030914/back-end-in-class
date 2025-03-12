## 環境建置

### WSL安裝

開啟Windows終端機安裝WSL

```bash
wsl --install
```

安裝後重啟電腦，並檢查是否安裝成功

```bash
wsl -v
```

### 安裝Linux

可先查看有哪些版本可以安裝

```bash
wsl -l -o
```

> -l -> \--list \
> -o -> \--online \
> 以上CLI參數相等

這邊我安裝Ubuntu 22.04版

```bash
wsl --install ubuntu-22.04
```

安裝完後會直接要求新增使用者，直接輸入username與password就行

### 安裝Linux套件

安裝unzip與bun，unzip是為了解壓縮bun安裝檔

```bash
sudo apt-get install unzip
curl -fsSL https://bun.sh/install | bash
```

安裝完後重啟終端機，並檢查版本

```bash
unzip -v
bun -v
```

Ubuntu終端機可在開始的快捷欄或是Window11終端機的下拉式選單找到

### 掛載資料夾

先創建放置專案的資料夾，並在Ubuntu的終端機中移動到專案路徑

這邊先列出幾個基本Linux OS常用的檔案操作CLI

| 指令用法 | 意思 |
| -------- | -------- |
| ```cd [dirname]``` | (change directory) 移動到某個路徑，同Windows |
| ```ls [-arg] [dirname]``` | (list directory contents) 檢視目前工作路徑底下的資料，參數與路徑可選，Windows是使用 ```dir``` |
| ```mkdir [name]``` | (make directory) 創建資料夾，同Windows |

如專案要放在 ```D:\myproject\``` 底下，Ubuntu終端機需移動到

```bash
cd /mnt/d/myproject
```

如檔案名中有空白，路徑用雙引號包起來或是用倒斜線空白

```bash
cd /mnt/d/my\ project
```

or

```bash
cd /mnt/d
cd "my project"
```

### 創建Next.js專案

創建Next.js專案並移動到專案裡

```bash
bun create next-app [name]
cd [name]
```

創建途中有好幾個選項，請依序選擇

```
TypeSript? No
ESLint? Yes
Tailwind? Yes
`src/` directory? No
App Router? Yes
Turbopack for `next dev`? Yes
import alias? No
```

### VScode環境

安裝完後使用VScode開啟專案```code .```

安裝VScode extension，[Next.js](https://marketplace.cursorapi.com/items?itemName=foxundermoon.next-js)與[Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)

然後開啟`package.json`檔案修改`script>dev`的值為```bun --bun next dev --turbopack```

> bun -> 取代npm執行 \
> \--bun -> 取代node.js執行

新增Radix UI與Shadcn元件

```bash
bun add @radix-ui/react-dropdown-menu @radix-ui/react-icons class-variance-authority clsx tailwind-merge
bunx shadcn@latest init
bunx shadcn@latest add
```

Shadcn元件初始化選項都可以選

```
style use? New York (Recommended)
base color? Stone
```

而元件項目為了方便，所以先全部裝，按A選擇全部，以及Enter安裝

```bun dev``` or ```bun run dev``` 執行專案

### Git CLI

初始化

```bash
git init
```

顯示git狀態

```bash
git status
```

新增到Staged狀態

```bash
git add [address/file]
```

新增到Unmodified狀態

```bash
git commit -m "[commit msg]"
```

上傳Github

```bash
git push
```

下載到本地

```bash
git pull
```

複製到本地

```bash
git clone [url]
```

連結到Github

```bash
git remote [url]
```