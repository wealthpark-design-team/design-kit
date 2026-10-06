# タイポグラフィ

## フォント

| 役割 | 指定 |
|---|---|
| 本文・通常の見出し | 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', Meiryo, sans-serif |
| ヒーロー（ページ最上部の大見出し）のみ | 'Noto Sans JP'（簡体字は 'Noto Sans SC'、繁体字は 'Noto Sans TC'）。サブセットで読み込み、地の文には使わない |
| 使わない | 游ゴシック（Yu Gothic）、明朝体、手書き風、丸ゴシック |

スライドや Office 文書で Helvetica Neue が使えない環境では、英数字は Arial、日本語はヒラギノ角ゴ（Mac）かメイリオ（Windows）にする。Noto Sans JP が入っている環境でも、使うのはヒーロー相当の大見出しだけ。

## サイズ

| トークン | px | 主な用途 |
|---|---|---|
| --wp-font-size-xs | 12 | 注釈、キャプション |
| --wp-font-size-sm | 14 | 補助テキスト、表 |
| --wp-font-size-md | 16 | 本文 |
| --wp-font-size-lg | 18 | リード文 |
| --wp-font-size-xl | 22 | セクション見出し（小） |
| --wp-font-size-2xl | 24 | セクション見出し |
| --wp-font-size-3xl | 30 | ページ見出し |
| --wp-font-size-4xl | 40 | ヒーロー（モバイル） |
| --wp-font-size-5xl | 50 | ヒーロー |
| --wp-font-size-6xl | 64 | ヒーロー（大） |
| --wp-font-size-7xl | 72 | ヒーロー（最大） |

## 推奨の組み方

- ウェイトは本文 400、見出し 700 の 2 段階。中間ウェイトを増やさない
- 行間は本文 1.6〜1.8、見出し 1.2〜1.3
- 字間は詰めない（letter-spacing は 0）。英字の大見出しだけ必要に応じて -0.01em 程度
- 見出しは黒 #1A1A1A。アクセント色で見出し全体を塗らない。アクセントは下線や先頭の飾り、強調語に限る
- 本文は左揃え。中央揃えはヒーローと短い見出しだけ
- 1 行の文字数は日本語で 35〜45 字程度に収める

## 余白・角丸・線

| トークン | 値 |
|---|---|
| --wp-space-2xs / xs / sm / md / lg / xl / 2xl / 3xl / 4xl | 4 / 8 / 12 / 16 / 20 / 30 / 40 / 60 / 80 px |
| --wp-radius-sm / md / lg / pill | 3 / 4 / 12 / 999 px |
| --wp-border-width-regular / strong | 1 / 2 px |
| --wp-control-height / -lg | 40 / 50 px（ボタン・入力欄の高さ） |
