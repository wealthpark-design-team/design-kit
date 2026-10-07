# ビジュアル素材

キービジュアル、テクスチャ、製品画面の使い方。ファイル一覧と一言説明は SKILL.md「2. ビジュアル素材」にある。ここでは使用例と、文字やロゴを置くときの参考を書く。

## 原則

- このキットには製品画面や共通のテクスチャ・背景などの素材を用意している。必要に応じて使う
- 製品画面の数値・日付・物件名はデモ用。実績として引用しない。古い UI の可能性があるので、最新の画面が必要なときは担当者に確認する
- 写真の上に文字を置くときは、文字の下に黒 #1A1A1A の 50〜60% の帯を敷くと読みやすい
- ロゴをビジュアルの上に置くときは、ロゴの周囲にシンボルの高さの 0.5 倍以上の余白が確保できる無地の領域だけに置く。地図やパターンの密な部分には置かない

## 使用例

あくまで例。用途に合えば、ほかの素材を使ってよい。

| 作るもの | 例 | ほかの候補 |
|---|---|---|
| コーポレート資料の表紙 | texture-map-gray.jpg | background-white-polygons.jpg |
| 全カテゴリ共通の控えめな背景 | background-white-polygons.jpg | background-white-waves.jpg |
| 暗い扉ページ、章の区切り | texture-map-black.jpg（白文字・白版ロゴ） | artwork-steel-structure.jpg |
| WealthPark Business のバナー・ヘッダー | background-blue-waves.jpg（白文字） | background-white-waves.jpg |
| WealthPark Business の製品紹介 | product-laptop-cashflow-ja.jpg | product-business-pc-ja.png |
| オーナーアプリの紹介 | product-phones-3-ja.jpg | product-phone-top-ja.png ほか縦の単体画面 |
| 両製品をまとめて見せる | product-devices-ja.png | product-phones-3-ja.jpg + product-laptop-cashflow-ja.jpg |
| 会社紹介、カルチャー | artwork-gallery-w-wall.jpg | artwork-steel-structure.jpg |
| 採用 | artwork-steel-structure.jpg | artwork-gallery-w-wall.jpg |
| Web のヒーロー | background-white-waves.jpg の上に製品画面 | texture-map-gray.jpg |

## 文字を置きやすい位置

| ファイル | 向き | 文字を置きやすい場所 | 文字色 |
|---|---|---|---|
| texture-map-gray.jpg | 横 1440×1027 | 全面 | 黒 |
| texture-map-black.jpg | 横 1440×1024 | 全面（線が細いので可読） | 白 |
| background-white-polygons.jpg | 横 2400×1268 | 全面 | 黒 |
| background-white-waves.jpg | 横長 2400×800 | 全面。左寄せが収まりやすい | 黒 |
| background-blue-waves.jpg | 横長 2400×800 | 全面。左寄せが収まりやすい | 白 |
| artwork-gallery-w-wall.jpg | 横 1920×1080 | 上部の壁の余白 | 黒（帯なし）または白（帯あり） |
| artwork-steel-structure.jpg | 縦 1216×1824 | 下部の暗い部分 | 白（帯を敷く） |
| product-devices-ja.png | 横 2240×1368 | 左側。端末に重ねない | 黒 |
| product-phones-3-ja.jpg | 横 3000×2000 | 上下の余白のみ | 黒 |
| product-laptop-cashflow-ja.jpg | 横 2400×1465 | 左右の余白のみ | 黒 |
| product-business-pc-ja.png | 横 1600×977 | 置かない（画面そのもの） | |
| product-phone-*.png | 縦 790×1600 | 置かない（画面そのもの）。横に文章を添える | |

## 原本と追加

- 使える画像（jpg / png / svg）はすべてこのキットに置く。Google Drive はアクセス制限があり AI から読めないので、参照先にしない。Drive に残すのは Illustrator / Photoshop の原本（ai / psd）だけ
- 画像は Web 用のサイズにして置く（長辺 2400px 以下、1 点 1MB 以下が目安）。原寸が必要なときは Drive の原本を使う
- 素材を増やすときは、用途の分かる名前（`texture-` / `background-` / `artwork-` / `product-` + 内容 + 言語）を付け、SKILL.md の表に一言説明を書き、このファイルの「文字を置く位置」にも行を足す。説明がない素材は AI が選べないので、説明を書けない素材は入れない
