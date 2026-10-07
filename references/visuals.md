# ビジュアル素材

キービジュアル、テクスチャ、製品画面の使い方。ファイル一覧と一言説明は SKILL.md「2. ビジュアル素材」にある。ここでは選び方と置き方を決める。

## 原則

- 背景や写真が必要なとき、AI は画像を生成せず、ストック画像も探さず、このキットの素材から選ぶ。合うものがなければ素材なしで作り、ユーザーにその旨を伝える
- 1 ページ（1 スライド、1 画面）に背景素材は 1 つまで。テクスチャは表紙・扉・区切りに使い、本文ページには使わない
- 素材は切り抜き以外の加工をしない。色変更、反転、回転、ぼかし、フィルターは禁止。製品画面は切り抜きもしない
- 製品画面の数値・日付・物件名はデモ用。実績として引用しない。古い UI の可能性があるので、最新の画面が必要なときは担当者に確認する
- 写真の上に文字を置くときは、文字の下に黒 #1A1A1A の 50〜60% の帯を敷いてよい（テクスチャの上では帯を使わず、余白に置く）
- ロゴをビジュアルの上に置くときは、ロゴの周囲にシンボルの高さの 0.5 倍以上の余白が確保できる無地の領域だけに置く。地図やパターンの密な部分には置かない

## 用途から選ぶ

| 作るもの | 第一候補 | 代替 |
|---|---|---|
| コーポレート資料の表紙 | texture-triangle-gold.jpg | artwork-w-sculpture-02.jpg（右半分に写真、左に文字） |
| 全カテゴリ共通の控えめな表紙・背景 | texture-triangle-white.jpg | なし（白無地） |
| 暗い扉ページ、章の区切り | texture-map-black.jpg（白文字・白版ロゴ） | 黒無地 #1A1A1A |
| WealthPark Business の製品紹介 | product-devices-map-ja.jpg | product-laptop-cashflow-ja.jpg、product-business-pc-ja.png |
| オーナーアプリの紹介 | product-phones-3-ja.jpg | product-phone-top-ja.png ほか縦の単体画面 |
| 両製品をまとめて見せる | product-devices-ja.png | product-devices-map-ja.jpg |
| 会社紹介、カルチャー、採用 | artwork-w-sculpture-01.jpg / 02.jpg | 採用は object-gradient-pink.png も可 |
| Web のヒーロー | product-devices-map-ja.jpg（横 3:2） | texture-triangle-white.jpg の上に製品画面 |

## 文字を置く位置

| ファイル | 向き | 文字を置ける場所 | 文字色 |
|---|---|---|---|
| texture-triangle-gold.jpg | 縦寄り 1440×1567 | 左上〜中央左の白い領域。右側の金の面には置かない | 黒 |
| texture-triangle-white.jpg | 縦寄り 1440×1255 | 全面 | 黒 |
| texture-map-black.jpg | 横 1440×1024 | 全面（線が細いので可読） | 白 |
| object-gradient-pink.png | 横 1920×1080 | 左側の空いた領域 | 黒 |
| artwork-w-sculpture-01.jpg | 縦 1040×1560 | 上部の壁の領域 | 白（帯を敷く） |
| artwork-w-sculpture-02.jpg | 縦 1448×2172 | 上部の壁の領域 | 白（帯を敷く） |
| product-devices-map-ja.jpg | 横 3000×2000 | 左上。端末に重ねない | 黒 |
| product-devices-ja.png | 横 2240×1368 | 左側。端末に重ねない | 黒 |
| product-phones-3-ja.jpg | 横 3000×2000 | 上下の余白のみ | 黒 |
| product-laptop-cashflow-ja.jpg | 横 2400×1465 | 左右の余白のみ | 黒 |
| product-business-pc-ja.png | 横 1600×972 | 置かない（画面そのもの） | |
| product-phone-*.png | 縦 791×1600 | 置かない（画面そのもの）。横に文章を添える | |

## スライドや文書での使い方

- 表紙: テクスチャを全面に敷き、左に題名、右下にロゴ。ロゴは余白の規定どおり
- 製品ページ: 白背景に製品画面を 1 点。説明文は画面の横。画面を 2 点以上並べるときは同じ高さに揃える
- 区切りページ: texture-map-black.jpg に白文字の章題だけ。白版ロゴは任意
- 縦の画面（スマホ）は高さを揃えて 1〜3 点。4 点以上並べない

## 原本と追加

- 使える画像（jpg / png / svg）はすべてこのキットに置く。Google Drive はアクセス制限があり AI から読めないので、参照先にしない。Drive に残すのは Illustrator / Photoshop の原本（ai / psd）だけ
- 画像は Web 用のサイズにして置く（長辺 2400px 以下、1 点 1MB 以下が目安）。原寸が必要なときは Drive の原本を使う
- 素材を増やすときは、用途の分かる名前（`texture-` / `artwork-` / `product-` / `object-` + 内容 + 言語）を付け、SKILL.md の表に一言説明を書き、このファイルの「文字を置く位置」にも行を足す。説明がない素材は AI が選べないので、説明を書けない素材は入れない
