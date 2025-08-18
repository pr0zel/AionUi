<p align="center">
  <img src="./resources/aionui_readme_header_0807.png" alt="AionUi Logo" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/office-sec/AionUi?style=flat-square&color=32CD32" alt="Version">
  &nbsp;
  <img src="https://img.shields.io/badge/license-Apache--2.0-32CD32?style=flat-square&logo=apache&logoColor=white" alt="License">
  &nbsp;
  <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-6C757D?style=flat-square&logo=linux&logoColor=white" alt="Platform">
  &nbsp;
  <img src="https://img.shields.io/badge/Electron-37.2.0-007ACC?style=flat-square&logo=electron&logoColor=white" alt="Electron">
  &nbsp;
  <img src="https://img.shields.io/badge/React-19.1.0-FF6B35?style=flat-square&logo=react&logoColor=white" alt="React">
</p>

---

<p align="center">
  <strong>コマンドラインの機能を、現代的で効率的なAIチャットインターフェースに置き換える。</strong>
</p>

<p align="center">
  <a href="./readme.md">English</a> | <a href="./readme_ch.md">简体中文</a> | <strong>日本語</strong> | <a href="https://www.aionui.com" target="_blank">官网</a> | <a href="https://twitter.com/AionUI" target="_blank">Twitter</a>
</p>

<p align="center">
  <table align="center">
    <tr>
      <td style="border: 2px solid #6b7280; padding: 8px;">
        <img src="./resources/AionUI_screenrecord.gif" alt="AionUiの実演" width="800">
      </td>
    </tr>
  </table>
</p>

## 📋 目次

- [🤔 どうして AionUi を選ぶべきなのか？](#-どうして-AionUi-を選ぶべきなのか)
- [✨ 主要機能](#-主要機能)
  - [💬 強化されたチャット体験](#-強化されたチャット体験)
  - [🗂️ ファイル・プロジェクト管理](#️-ファイル・プロジェクト管理)
  - [⚡ 開発者ワークフロー](#-開発者ワークフロー)
- [🚀 クイックスタート](#-クイックスタート)
  - [📥 ダウンロード](#-ダウンロード)
  - [📋 システム要件](#-システム要件)
  - [🔧 インストール](#-インストール)
  - [🏗️ アプリケーションをビルド](#️-アプリケーションをビルド)
- [🛠️ 技術スタック](#️-技術スタック)
- [📁 プロジェクト構造](#-プロジェクト構造)
- [🎯 主な利用シーン](#-主な利用シーン)
- [🔧 設定](#-設定)
  - [🔑 API 設定](#-API-設定)
  - [🌐 プロキシ設定](#-プロキシ設定)
- [🚀 今後の展望](#-今後の展望)
  - [📍 现在在哪](#-现在在哪)
  - [🎯 要去哪里](#-要去哪里)
- [📄 许可证](#-许可证)
- [🤝 贡献](#-贡献)

---

## 🤔 どうして AionUi を選ぶべきなのか

公式の Gemini CLI は高機能ですが、日常的なオペレーションにおいてはいくつかの限界があります。AionUi は、これらの課題に対応する GUI ベースの代替手段を提供します：

- **ファイル管理：** `@` コマンドを使ったコードコンテキストの管理は煩雑になりがちです。
- **チャット履歴：** CLI ウィンドウを閉じると、会話履歴が失われます。
- **チャット体験：** コマンドラインインターフェースは、自然なチャットのやり取りに欠けます。
- **マルチタスク：** シングルダイアログモデルは、並行したワークフローを制限します。

AionUi は、より効率的なワークフローを求める開発者に、使いやすい最新のインターフェースを提供します。

## ✨ 主要機能

### 💬 **強化されたチャット体験**

- **複数チャットの同時管理** - 複数の独立したチャットセッションを同時に管理します。
- **履歴の永続化** - すべての会話をローカルに保存し、作業内容を失うことがありません。
- **現代的な UI** - 自然なチャット UI と、使い慣れたメッセージコントロールを備えています。

### 🗂️ **ファイル・プロジェクト管理**

- **ビジュアル・ファイルツリー** - ファイルを参照・選択すれば、すぐにチャットに統合できます。
- **ファイルの追加** - ファイルをドラッグ＆ドロップで追加し、AI で処理します。データは安全な一時ストレージに保存されます。
- **コード差分ビュー** - ファイルの変更点を並べて比較。

### ⚡ **開発者ワークフロー**

- **関数呼び出し** - 高度な機能に対応した、完全な Gemini API の統合。
- **RichText をレンダリング** - コードブロックや整形済みコンテンツを、見やすく美しくレンダリング
- **簡単なセットアップ** - インターフェースから直接、API キーを設定可能。

## 🚀 クイックスタート

### 📥 ダウンロード

AionUi をお試しですか？お使いの環境に合った最新版を、リリースぺージからダウンロードいただけます。

<p>
  <a href="https://github.com/office-sec/AionUi/releases">
    <img src="https://img.shields.io/badge/ダウンロード-最新版-32CD32?style=for-the-badge&logo=github&logoColor=white" alt="最新版をダウンロード">
  </a>
</p>

### 📋 システム要件

- Node.js >= 16.0.0
- npm >= 8.0.0
- Google Gemini API キー ([API キーの取得](https://aistudio.google.com/app/apikey))

### 🔧 インストール

1. **リポジトリをクローン**

   ```bash
    git clone https://github.com/office-sec/AionUi.git
    cd AionUi
   ```

2. **依存関係をインストール**

   ```bash
   npm install
   ```

3. **API キーを設定**

   - アプリを開いて、設定に進んでください。
   - お手持ちの Google Gemini API キーを入力してください。
   - Gemini API キー、Vertex AI、個人認証など、複数の認証方法に対応しています。

4. **アプリケーションを起動**
   ```bash
   npm start
   ```

### 🏗️ アプリケーションをビルド

```bash
# macOS版をビルド
npm run build-mac --arch=arm64  # Apple Silicon
npm run build-mac --arch=x64    # Intel

# Windows版をビルド
npm run build-win

# 全てのプラットフォームをビルド
npm run build
```

## 🛠️ 技術スタック

- **デスクトップアプリ**: Electron 37.2.0
- **フロントエンドフレームワーク**: React 19.1.0
- **UI コンポーネントライブラリ**: Arco Design Web React
- **AI エンジン**: Google Gemini CLI Core
- **フレームワーク**: UnoCSS
- **ビルドツール**: Webpack + TypeScript
- **アイコンライブラリ**: IconPark React

## 📁 プロジェクト構造

```
AionUI/
├── src/
│   ├── adapter/          # アダプター層
│   ├── agent/           # AI エージェント
│   │   └── gemini/      # Gemini AI統合
│   ├── common/          # 共通モジュール
│   ├── process/         # メインプロセス
│   ├── renderer/        # レンダラープロセス
│   │   ├── components/  # UI コンポーネント
│   │   ├── conversation/# 会話関連
│   │   └── messages/    # メッセージ処理
│   └── worker/          # ワーカープロセス
├── config/              # 設定ファイル
├── public/              # 静的リソース
└── package.json
```

## 🎯 主な利用シーン

- **コード開発**: コードレビュー、リファクタリングの提案、エラー修正
- **ドキュメント作成**: ドキュメントの自動生成、レポートの要約
- **データ分析**: データ可視化、分析レポート
- **プロジェクト管理**: タスク計画、進捗追跡
- **学習アシスタント**: 質疑応答、概念の説明

## 🔧 設定

### 🔑 API 設定

3 つの認証方法に対応しています。

1. **Gemini API キー**: Gemini API を直接使用する
2. **Vertex AI**: Google Cloud の Vertex AI を利用する
3. **個人認証**: OAuth による個人認証

### 🌐 プロキシ設定

プロキシ設定に対応しており、ネットワークが制限された環境でも利用できます。

## 🚀 今後の展望

### 📍 現状

AionUi は、Gemini CLI の強力な GUI インターフェースとして、強化されたチャット体験、ファイル管理、開発ワークフローの最適化を実現します。

### 🎯 要去哪里

我们设想 AionUi 将发展成为一个**通用智能体平台**，让普通用户也能使用强大的 AI 智能体来处理日常工作：

#### 🤖 **多智能体生态系统**

- **终端智能体**：从 Gemini CLI 开始，扩展到其他基于终端的智能体
- **浏览器智能体**：集成开源浏览器自动化智能体来处理网页任务
- **统一体验**：适用于所有智能体类型的简单聊天界面
- **智能体发现**：轻松访问新推出的智能体

#### 🔄 **灵活的 LLM 绑定**

- **多 LLM 支持**：将不同的语言模型（Gemini、Claude、GPT 等）绑定到任何智能体
- **模型切换**：轻松在不同 LLM 之间切换，而无需改变工作流
- **自定义配置**：为每个模型独立配置 API 密钥和设置

#### 🎯 **让 AI 智能体触手可及**

我们的目标是让强大的 AI 智能体为所有人所用，而不仅仅是开发者。我们相信：

- **复杂任务应该感觉简单**：用户不应该需要为不同的智能体学习不同的界面
- **AI 应该适应用户**：而不是相反
- **开源很重要**：我们优先集成开源智能体，确保透明度和社区控制
- **聊天是通用的**：简单的对话界面可以处理复杂的工作流

AionUi 旨在弥合强大 AI 能力与日常可用性之间的差距，让复杂的 AI 智能体像与朋友聊天一样简单易用。

---

## 📄 许可证

本项目采用 [Apache-2.0](LICENSE) 许可证。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

---

## 📊 Star 历史

<p align="center">
  <a href="https://www.star-history.com/#office-sec/aionui&Date" target="_blank">
    <img src="https://api.star-history.com/svg?repos=office-sec/aionui&type=Date" alt="GitHub 星星趋势" width="600">
  </a>
</p>

<div align="center">

**⭐ 如果喜欢就给我们一个星吧**

[报告 Bug](https://github.com/office-sec/AionUi/issues) · [创建功能请求](https://github.com/office-sec/AionUi/issues)

</div>
