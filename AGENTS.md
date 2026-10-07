# AGENTS

このリポジトリで作業するエージェントと人のための決まり。

## 目的

WealthPark の制作物をブランドに合わせるための共通参照先。利用者の多くは非エンジニアで、公開ページの URL を AI に貼るだけで使う。インストールや設定を前提にしない。

## 単一ソース

- 本文は `SKILL.md` だけ。公開ページ（https://wealthpark-design-team.github.io/design-kit/ ）は GitHub Pages がこのファイルを描画したもの。別のファイルに本文を複製しない
- `SKILL.md` は素のテキストに保つ。画像タグ、色見本、ボタンなど見た目の要素は `_layouts/default.html` と `web/` に置く（ブラウザで動く JS/CSS）。AI が取得する内容を変えないため
- 詳細は `references/` に置き、`SKILL.md` からは絶対 URL で参照する。`references/*.md` は素の Markdown のまま配信される
- ファイル参照はすべて絶対 URL（`https://wealthpark-design-team.github.io/design-kit/...`）。インストールして使う人にも URL のまま届く

## 素材

- ロゴ: `assets/logo/`。正本はデザインチームの Google Drive「共有素材 / 001_Logo」。ファイル名は `wealthpark-<brand>-logo(-inverse).<svg|png>`、シンボルは `wealthpark-<brand>-symbol`
- ビジュアル: `assets/visuals/`。名前は `texture-` / `background-` / `artwork-` / `product-` + 内容 + 言語。長辺 2400px 以下。1 点ごとに `SKILL.md` の表に一言説明を書く。説明がない素材は AI が選べないので入れない。ai / psd は入れない（Drive に残す）
- Google Drive は AI から読めないので、参照先に書かない
- 既存のファイル名は変えない。URL を参照している資料が壊れる

## 決まりの書き方

- 人が決めたことと AI の下書きを区別する。AI が書いた仮の決まりには「暫定」と明記し、承認されるまでルールとして扱わない
- 「未定」は未定のまま書く。もっともらしい値を埋めない
- 翻訳や断定の根拠が公式ガイドライン PDF（`assets/logo/Logo-Guideline_WealthPark_JP.pdf`）にある場合はそれを正とする

## 確認と公開

- 変更前に `scripts/preview.sh` でローカル描画を見る（デスクトップとモバイルのスクリーンショットを出す）
- `main` への push がそのまま公開。数十秒で反映される
- Pages のビルド状態: `gh api repos/wealthpark-design-team/design-kit/pages/builds/latest --jq .status`
- コミットメッセージは英語、Conventional Commits
