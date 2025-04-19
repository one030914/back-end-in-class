## WSL 環境建置

### WSL 安裝

開啟 Windows 終端機安裝 WSL

```bash
wsl --install
```

安裝後重啟電腦，並檢查是否安裝成功

```bash
wsl -v
```

### 安裝 Linux

可先查看有哪些版本可以安裝

```bash
wsl -l -o
```

> -l -> \--list \
> -o -> \--online \
> 以上CLI參數相等

這邊我安裝 Ubuntu 22.04 版

```bash
wsl --install ubuntu-22.04
```

安裝完後會直接要求新增使用者，直接輸入 username 與 password 就行

### 安裝 Linux 套件

安裝 unzip 與 bun，unzip 是為了解壓縮 bun 安裝檔

```bash
sudo apt-get install unzip
curl -fsSL https://bun.sh/install | bash
```

安裝完後重啟終端機，並檢查版本

```bash
unzip -v
bun -v
```

Ubuntu 終端機可在開始的快捷欄或是 Window11 終端機的下拉式選單找到

### 掛載資料夾

先創建放置專案的資料夾，並在 Ubuntu 的終端機中移動到專案路徑

這邊先列出幾個基本 Linux OS 常用的檔案操作 CLI

| CLI                    | 意思                                                                                          |
|:---------------------- |:--------------------------------------------------------------------------------------------- |
| ```cd [PATH]```        | (change directory) 移動到某個路徑，同 Windows                                                  |
| ```ls [-arg] [PATH]``` | (list directory contents) 檢視目前工作路徑底下的資料，參數與路徑可選，Windows 是使用 ```dir``` |
| ```mkdir [name]```     | (make directory) 創建資料夾，同 Windows                                                        |

如專案要放在 ```D:\myproject\``` 底下，Ubuntu 終端機需移動到

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

## Docker 環境建置（進階）

如果不想一直重建 Linux 環境，可以使用 container 的方式來快速建置環境，以下我會用 [Docker](https://www.docker.com/) 示範

### Build Image

[這裡](https://github.com/one030914/back-end-in-class/blob/main/Dockerfile)有提供 Dockerfile 範例來建置 Image

下載之後，先開啟 Docker Desktop 來啟用 Docker CLI，再到終端機建置 Image

```bash
# 建立 image 並命名為 [tag]，來源為指定的 [PATH]
docker build -t [tag] [PATH]

# 查看 image
docker images

# 刪除 image
docker rmi [name/ID]
```

### Run Container

[這裡](https://hub.docker.com/r/one030914/bun_debian/tags)也有提供 Image 來運行 Container

```bash
# 從 Docker Hub 拉 image
docker pull [tag]

# Run container
docker run -it --name [name] -d -p 3000:3000 [name/ID]
# -it           讓容器可以互動（interactive + tty）
# --name        指定容器名稱
# -d            背景執行（detached mode）
# -p 3000:3000  將主機的 3000 port 映射到容器的 3000 port
# [name/ID]     要執行的 image（可以是名稱或 ID）

# 查看 container
docker ps -a
# -a            查看所有（包含關閉）的 container

# 刪除 container
docker rm [name/ID]
# [name/ID]     要刪除的 container（可以是名稱或 ID）

# 開啟 container
docker start [name/ID]
# [name/ID]     要開啟的 container（可以是名稱或 ID）

# 關閉 container
docker stop [name/ID]
# [name/ID]     要關閉的 container（可以是名稱或 ID）

# 進入 container
docker exec -it -d [name/ID] bash
# -it           讓容器可以互動（interactive + tty）
# -d            背景執行（detached mode）
# [name/ID]     要開啟的 container（可以是名稱或 ID）
```

在執行上面的 docker run 後會直接進入 container，因為環境的 OS 是 Debain Linux 且有 bun 與 git，所以可以在終端機裡面拉你的 github repo 並且執行

按 `CTRL + D` 是退出 container，如果有背景執行按 `CTRL + P` 接著 `CTRL + Q`

### Dev Container（額外）

在 VS code Extension 中有 [Dev Container](https://marketplace.cursorapi.com/items?itemName=ms-vscode-remote.remote-containers) 提供更方便管理在 container 中的檔案

安裝完會多一個遠端管理圖示，裡面會列出所有的 container，可以直接在 VS code 與 container 連接並且執行

## Next 環境建置

### 創建 Next.js 專案

創建 Next.js 專案並移動到專案裡

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

### VScode 環境

安裝完後使用 VScode 開啟專案 ```code .```

安裝 VScode extension，[Next.js](https://marketplace.cursorapi.com/items?itemName=foxundermoon.next-js) 與 [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)

然後開啟 `package.json` 檔案修改 `script>dev` 的值為 ```bun --bun next dev --turbopack```

> bun -> 取代 npm 執行 \
> \--bun -> 取代 node.js 執行

新增 Radix UI 與 Shadcn 元件

```bash
bun add @radix-ui/react-dropdown-menu @radix-ui/react-icons class-variance-authority clsx tailwind-merge
bunx shadcn@latest init
bunx shadcn@latest add
```

Shadcn 元件初始化選項都可以選

```
style use? New York (Recommended)
base color? Stone
```

而元件項目為了方便，所以先全部裝，按 A 選擇全部，以及 Enter 安裝

最後 ```bun dev``` or ```bun run dev``` 執行專案

## CLI

### Git CLI

| CLI                            | 說明                   |
|:------------------------------ |:---------------------- |
| `git init`                     | git 初始化             |
| `git status`                   | 顯示 git 狀態          |
| `git add [address/file]`       | 新增到 Staged 狀態     |
| `git commit -m "[commit msg]"` | 新增到 Unmodified 狀態 |
| `git push`                     | 上傳 Github            |
| `git pull`                     | 下載到本地             |
| `git clone [url]`              | 複製到本地             |
| `git remote [url]`             | 連結到 Github          |

### Prisma CLI

| CLI                                       | 說明                                    |
|:----------------------------------------- |:--------------------------------------- |
| `bun add -D prisma`                       | 新增 Prisma 模組到 `devDependencies` 中 |
| `bun add @prisma/client`                  | 新增 Prisma Client 端                   |
| `bunx prisma init`                        | 初始化 Prisma                           |
| `bunx prisma migrate dev --name "[name]"` | 更新本地資料庫綱要到雲端資料庫          |