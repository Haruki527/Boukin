# ボウキン

ボウキンは 硬貨・棒金・紙幣の合計金額を
入力するだけで計算、表示するWebアプリケーションです

## アプリケーションのURL ##
トライアル版です、お試しできます

https://boukin-phi.vercel.app/

## アプリ概要

各金種の枚数・本数を半角数字で入力し、
「計算」ボタンを押すと合計金額を表示します。

未入力の項目は0円として扱い計算します。

## アプリを開発した背景
バイトをしていた時、決まった時間に金庫内残高を集計する業務がありました。その際に人の手で数えるにはやはり面倒な業務だと感じ、その業務を誰でも簡単に手早くできたらなと思い開発を目指しました。

## 使用技術
| Category           | Technology Stack      |
|--------------------|-----------------------|
| フロントエンド     | React, JavaScript     |
| バックエンド       | Java, SpringBoot      |
| API                | REST API              |
| データベース       | H2(今回は未実装)      |
| ビルドツール       | Maven, Maven  Wrapper |
| コンテナ           |Docker|
| フロントエンド公開 |Vercel|
| バックエンド公開   |Render|
| バージョン管理     | Git, GitHub           |

## アプリケーション機能
- 硬貨（1円～500円）の計算
- 棒金（1円～500円）の計算
    - 棒金とは硬貨50枚単位のこと
- 紙幣（1000円～10000円）の計算
- 合計金額の表示
- 入力内容の全クリア
- 未入力を0として計算
- 入力値チェック（0以上の半角数字かつ整数のみ）

# セットアップ

## 必要環境
- IntelliJ IDEA
- Git

## 起動手順
````
# 1. リポジトリをクローン
git clone https://github.com/Haruki527/Boukin
cd Boukin

# 2. IntelliJ IDEAでプロジェクトを開く
Boukin/src/main/javaの中にある
BoukinApplication.java　を起動する

# 3. npmを起動
cd productform-react でReactディレクトリへ移動
npm install
npm run dev
ブラウザで
https://localhost:5173 へアクセス
````

## API

| メソッド | URL | 内容 |
|----------|-----|------|
| POST | `/api/calculate` | 合計金額を計算する |

## 今後追加したい機能
- デザインの改善
- ダークモード対応
- 種ごとの小計表示
- 計算履歴の保存（H2 / PostgreSQL）
- PWA対応（スマホアプリ風）