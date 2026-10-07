# カラー

基調は Black × White。カテゴリごとにアクセント色がある。値は assets/tokens.css と assets/tokens.json にも同じものがある。

## 共通トークン

| トークン | 値 | 用途 |
|---|---|---|
| --wp-color-black | #1A1A1A | 本文、見出し、ボタンの黒、アイコン |
| --wp-color-white | #FFFFFF | 背景、黒地の上の文字 |
| --wp-color-gray | #333333 | 補助テキスト |
| --wp-color-text-muted | #666666 | 注釈、プレースホルダー寄りの薄い文字 |
| --wp-color-bg | #F5F5F5 | セクションの薄い背景、カードの地 |
| --wp-color-border | #EEEEEE | 薄い罫線、区切り |
| --wp-color-border-strong | #CCCCCC | 入力欄の枠、強い罫線 |

## カテゴリ別アクセント

| カテゴリ | トークン | 値 | 備考 |
|---|---|---|---|
| コーポレート | --wp-color-accent-corporate | #B8A86F | Gold。会社案内、IR 的な資料、全社向け |
| WealthPark Business | --wp-color-accent-business | #2E6CFF | Blue。不動産管理会社向けサービスの資料・UI |
| DX コンサルティング | 未定 | | |
| 採用（Careers） | なし | | 暖色のグラデーションをキービジュアル画像で表現する。単色の指定はない |
| WealthPark RealEstate Technologies | 未定 | | Red 系と決まっているが値は未確定 |

対象外: WealthPark Investment（終了）、WealthPark Asset Management（このキットでは扱わない）。

## 補足

- カテゴリが決まっていないとき、複数のカテゴリにまたがるときは、コーポレートの Gold が目安
- 成功・警告・エラーなどの状態色はこのキットでは定義していない

## 旧実装からの移行表

コーポレートサイトの CSS には統一前の値が残っている。見つけたら次のように読み替える。

| 旧値 | 新値 |
|---|---|
| #000, #1B1B1B, #2B2B2B（文字・UI の黒） | #1A1A1A |
| #F1F1F1, #EFEFEF（薄い背景） | #F5F5F5 |
| #13367A（ネイビー） | 重要でない色。新規には使わない |
| --wp-color-link: #2E6CFF（全サイト共通扱い） | Business のアクセント。コーポレート配下では Gold か黒のリンクにする |
