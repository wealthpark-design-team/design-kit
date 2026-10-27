# タイポグラフィ

Web、スライド、チラシ、動画で共通の目安。サイズの体系は未定なので、決まっている範囲だけ書く。

## フォントの優先順

| 優先 | 欧文 | 和文 | 備考 |
|---|---|---|---|
| 1 | Helvetica Neue | ヒラギノ角ゴシック（Hiragino Kaku Gothic ProN / Hiragino Sans） | Mac と iOS に標準で入っている |
| 2 | Noto Sans | Noto Sans JP | 1 が無い環境（Windows、Google スライドなど）。セリフ体が必要なときは Noto Serif JP |
| 3 | 游ゴシック | 游ゴシック | 1 も 2 も無い環境（Windows の Office など） |

Web の CSS ではこの順にフォールバックする指定を assets/tokens.css に入れている。

## スライドの書体

| 出力先 | 和文 | 欧文 | 理由 |
|---|---|---|---|
| Google スライド（社内で使い回す資料） | Noto Sans JP | Arial | Google スライドには游ゴシックとヒラギノが無い。游ゴシックを指定しても代わりの書体で表示される |
| PowerPoint だけで使う資料 | 游ゴシック | Arial または游ゴシック | Windows と Mac の Office に入っている |

2026-10-27、WealthPark RealEstate Technologies の会社紹介資料で決めた。1 つの文の中でも、和文の部分と欧文の部分に別の書体を当てる（PowerPoint と Google スライドは文字の範囲ごとに書体を持つ）。

## サイズ

- Web の本文の目安: 16px、行間 1.7〜1.8
- 見出し、キャプション、スライド、チラシ、動画のサイズは未定

## Web の UI（CSS 変数）

サイズスケール（12 / 14 / 16 / 18 / 22 / 24 / 30 / 40 / 50 / 64 / 72 px）、余白（4〜80px）、角丸（3 / 4 / 12 / 999px）、線幅（1 / 2px）は assets/tokens.css にある。コーポレートサイトの実装値なので、参考値として使う。
