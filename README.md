### 🌍 Available Languages

| Language     | File Location                          | Description         |
| ------------ | -------------------------------------- | ------------------- |
| 🇺🇸 English | `README.md`                            | Default main readme |
| 🇯🇵 日本語     | [docs/README.ja.md](docs/README.ja.md) | 日本語による解説            |
| 🇨🇳 简体中文    | [docs/README.zh.md](docs/README.zh.md) | 中文文档                |

---

# 🚀 gatsby-desktop-kit

A minimal, extensible starter kit for building cross-platform desktop apps using **Gatsby + Electron + TypeScript**.

---

## ✨ Features

* ⚡ Gatsby frontend + Electron backend
* 🛠️ Minimal setup with maximum flexibility
* 🔤 Desktop-ready architecture

---

## ⚠️ Notice

* Currently tested only on **Windows**
* **macOS / Linux** support is unverified — PRs welcome!
* If the app is still running, **build commands may fail** due to locked files. Kill Electron from your Task Manager if needed.

The `/gatsby` directory is essentially a slightly customized Gatsby frontend, which can be deployed to the web using services like Netlify.
By unifying data storage via `localStorage`, both the web and desktop (Electron) versions can share the same behavior from a single codebase.

---

## 🛠 Usage

```bash
git clone https://github.com/tatsuoNakano/gatsby-desktop-kit-template
cd gatsby-desktop-kit-template
npm install
cd gatsby
npm install
cd ../
npm run dev:web
```

---

## 📂 Directory Structure

```text
// This project is an Electron app powered by Gatsby for the frontend.
gatsby-desktop-kit-template/
├── electron/              // Electron code
├── gatsby/                // Gatsby frontend
│   └── .env.example       // Gatsby-specific env template
├── .env.example           // Electron Root-level env template
├── docs/                  // Multilingual documentation (ja, zh, en)
└── scripts/               // ⚠️ Internal scripts — avoid editing unless necessary
```

---

## 📦 Available npm Scripts

* `npm run dev` — Runs Gatsby and Electron in parallel for development
  → Internally runs `dev:web` and `dev:app` using `concurrently`

* `npm run dev:web` — Starts the Gatsby development server inside the `gatsby` folder

* `npm run dev:app` — Launches the Electron app using `ts-node` with `electron/main.js` as the entry point

---

## 🏗️ Build Commands

* `npm run build` — Full build: Generates static site with Gatsby, copies it to Electron, and builds the desktop app
* `npm run build:web` — Builds the static site using `gatsby build` with path prefixing enabled
* `npm run build:app` — Uses `electron-builder` to package the Electron app for production

---

## 📁 Asset Copying

* `npm run copy` — Copies Gatsby’s `public` output into `electron/public` for loading via `file://` or local server

---

## 🪩 Clean Commands

* `npm run clean` — Removes all build artifacts from both Gatsby and Electron
* `npm run clean:web` — Cleans Gatsby’s `.cache` and `public` directories
* `npm run clean:app` — Deletes Electron’s `dist` and `public` folders

---

## ⚙️ .env

Create a `.env` file from `.env.example` to configure ports and metadata:

```env
ELECTRON_PORT=9003
GATSBY_PORT=9000
GATSBY_SERVE_PORT=9001
```

---

## 🫠 Architecture Note

This project uses [`electron-serve`](https://github.com/sindresorhus/electron-serve) to unify the behavior between the web version and the desktop app.
By serving the Gatsby static output consistently, both environments share the same UI, routing, and storage logic.
This makes development and testing much simpler and more reliable.

---

## 🤝 Contributing

PRs and issues are welcome — especially for macOS/Linux support and improvements.

---

## 📄 License

MIT License — © 2025
