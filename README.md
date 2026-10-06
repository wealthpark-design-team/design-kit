# WealthPark Design Kit

WealthPark のブランド資産（ロゴ、カラー、フォント、トーン&マナー、会社情報）を、人と AI が同じ形で参照するためのキットです。

**公開ページ: https://wealthpark-design-team.github.io/design-kit/**

## 使い方

### 誰でも: URL を AI に渡す

ChatGPT、Claude、Gemini、Copilot などに、作りたいものと一緒にこう伝えるだけです。インストールや設定は要りません。

> デザインは https://wealthpark-design-team.github.io/design-kit/ に従ってください。

### エンジニア: スキルとして導入する

このリポジトリは [Agent Skills](https://agentskills.io) 標準の形式です。`SKILL.md` がそのままスキルになります。

```bash
# Claude Code / Cursor / Codex など、対応エージェントにまとめて導入
npx skills add wealthpark-design-team/design-kit

# Claude Code にプロジェクト単位で入れる場合
git clone https://github.com/wealthpark-design-team/design-kit .claude/skills/wealthpark-design-kit
```

## 構成

```
SKILL.md          本文。唯一のソース。公開ページはこのファイルを GitHub Pages が描画したもの
references/       詳細（ロゴ規定、カラー、タイポグラフィ、トーン、会社情報）
assets/logo/      ロゴ（SVG / PNG）と公式ロゴガイドライン PDF
assets/tokens.css デザイントークン（CSS 変数）
assets/tokens.json 同じ値の JSON
assets/starter/   トークンとロゴを組み込んだ最小の HTML テンプレート
assets/screenshots/ キービジュアルと製品画面
_config.yml       GitHub Pages（Jekyll）の設定
_layouts/ web/    公開ページの見た目だけ（ロゴのサムネイル、色見本、コピーボタン）。キットの内容ではなく、SKILL.md のテキストには影響しない
```

## 更新のしかた

- 文言やルールの変更は `SKILL.md` と `references/` を直して Pull Request を出す。`main` にマージされると公開ページに反映される
- 本文は `SKILL.md` にだけ書く。公開ページ用に別のファイルを作らない（ずれの原因になる）
- `SKILL.md` は短く保つ（目安 150 行）。詳細は `references/` に書き、`SKILL.md` からは URL で参照する
- ロゴを差し替えるときはファイル名を変えない。URL を参照している資料が壊れる

## 利用条件

ロゴ、スクリーンショット、社名は WealthPark株式会社の資産です。公式ロゴガイドライン（`assets/logo/Logo-Guideline_WealthPark_JP.pdf`）に従って使ってください。ガイドラインにない使い方は広報部（pr@wealth-park.com）に事前に確認してください。
