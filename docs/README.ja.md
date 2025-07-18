### 🌍 対応言語

| 言語           | ファイルパス                                        | 説明           |
| ------------ |-----------------------------------------------| ------------ |
| 🇺🇸 English | `../README.md`                                | 英語のメインドキュメント |
| 🇯🇵 日本語     | `README.ja.md`                                | このファイルです     |
| 🇨🇳 中文      | [`./docs/README.zh.md`](../docs/README.zh.md) | 中国語ドキュメント    |



# 🚀 gatsby-desktop-kit

**Gatsby + Electron + TypeScript** を使ってクロスプラットフォームなデスクトップアプリを構築するための、最小限かつ拡張性の高いスターターキットです。

---

## ✨ 特長

* ⚡ Gatsbyフロントエンド + Electronバックエンド
* 🛠️ 柔軟性の高い最小構成
* 🌐 デスクトップ対応アーキテクチャ

---

## ⚠️ 注意事項

* 現在は **Windows** のみで動作確認済み
* **macOS / Linux** の動作は未検証です（PR歓迎！）
* アプリが起動したままだと **ビルドコマンドが失敗** することがあります。必要に応じてタスクマネージャーからElectronを終了してください。

`/gatsby` ディレクトリは、わずかにカスタマイズされた Gatsby フロントエンドであり、Netlifyなどを使ってWebにもデプロイできます。
`localStorage` を用いたデータ共有により、Web版とデスクトップ版（Electron）の動作を1つのコードベースで統一できます。

---

## 🛠 使い方

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

## 📂 ディレクトリ構成

```text
// このプロジェクトは Electron アプリであり、Gatsby をフロントエンドとして使用しています。
gatsby-desktop-kit-template/
├── electron/              // Electronコード
├── gatsby/                // Gatsbyフロントエンド
│   └── .env.example       // Gatsby用の環境変数テンプレート
├── .env.example           // ルート用のElectron環境変数テンプレート
├── docs/                  // 多言語ドキュメント（ja, zh, en）
└── scripts/               // ⚠️ 内部スクリプト - 基本的に編集しないこと
```

---

## 📦 利用可能な npm スクリプト

* `npm run dev` — GatsbyとElectronを並列起動（開発用）
  → 内部で `dev:web` と `dev:app` を `concurrently` 経由で実行

* `npm run dev:web` — `gatsby` フォルダ内でGatsby開発サーバーを起動

* `npm run dev:app` — `electron/main.js` をエントリーポイントとして Electron アプリを `ts-node` で起動

---

## 🏗️ ビルドコマンド

* `npm run build` — Gatsbyで静的サイトをビルドし、Electronにコピーしてデスクトップアプリを生成
* `npm run build:web` — `gatsby build` を使ってWeb用にビルド（パスプリフィックス対応）
* `npm run build:app` — `electron-builder` を使ってElectronアプリをパッケージ

---

## 📁 アセットコピー

* `npm run copy` — Gatsbyの `public` 出力を `electron/public` にコピー。`file://` またはローカルサーバーで読み込み可能に

---

## 🪩 クリーンコマンド

* `npm run clean` — Gatsby/Electron 両方のビルド成果物を削除
* `npm run clean:web` — Gatsby の `.cache` と `public` を削除
* `npm run clean:app` — Electron の `dist` と `public` フォルダを削除

---

## ⚙️ .env の設定

`.env.example` を元に `.env` ファイルを作成し、ポートやメタ情報を設定します：

```env
ELECTRON_PORT=9003
GATSBY_PORT=9000
GATSBY_SERVE_PORT=9001
```

---

## 🫠 アーキテクチャメモ

本プロジェクトは [`electron-serve`](https://github.com/sindresorhus/electron-serve) を使用して、Web版とデスクトップアプリの挙動を統一しています。
Gatsbyのビルド成果物を一貫して配信することで、UIやルーティング、ストレージの動作を両環境で共有できます。
これにより、開発・テストの信頼性と一貫性が向上します。

---

## 🤝 コントリビューション

PR・Issue大歓迎です！特に macOS / Linux サポートや改善提案をお待ちしています。

---

## 📄 ライセンス

MIT License — © 2025
