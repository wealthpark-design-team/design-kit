# デザインスキル

WealthPark のデザインチームが使っているデザインスキル。参考として載せている。載せるスキルは随時入れ替える。

デザインスキルは Agent Skills という共通の形式で書かれている。手順を書いた SKILL.md と、必要な参照ファイルやスクリプトをまとめたフォルダ。ChatGPT と Codex、Gemini CLI、GitHub Copilot、Cursor、Claude をはじめ、多くの AI ツールが同じ形式を読める（対応ツールの一覧: https://agentskills.io ）。

## 目次

- 使い方
- このキットと一緒に使うとき
- 各スキル

## 使い方

スキルによって、URL を渡すだけで使えるものと、AI ツールへの導入が必要なものがある。中でプログラムを動かすスキルは導入が必要。

- **URL を渡す**: AI に「この手順に沿って作って」と SKILL.md の URL を渡す。手順の文章だけでできているスキルはこれで使える
- **AI ツールの追加機能**: スキルを追加する機能がある AI ツールでは、スキルのフォルダを追加する。手順は各ツールの説明に従う
- **コマンドで導入**: コーディング用の AI ツールでは、次のコマンドで入る。79 種類の AI ツールに対応していて、入れる先のツールを選べる

```bash
npx skills add <リポジトリ> --skill <スキル名>
```

## このキットと一緒に使うとき

- 制作物に使うロゴ、色、フォントは、依頼文の中で指定として書く。スキルが判断するのは、指定のない構成や表現の部分になる
- いくつかのスキルは、作るたびに違う書体や配色を選ぶよう AI に促している。このキットの色やフォントを使う制作物では、依頼文に書いた指定がその選択の代わりになる
- 依頼文の例:

```text
WealthPark の会社紹介スライドを作ってください。スライドのデザインは frontend-slides の手順で。ロゴ、色、フォントは https://wealthpark-design-team.github.io/design-kit/ に載っているものを使ってください。
```

## 各スキル

### frontend-design（Web デザイン）

ありがちな見た目を避けた、意図のある Web ページやコンポーネントを作る。作る前に、題材に合った色、書体、レイアウトの方針を決めさせる。依頼文の指定がある部分はそれに従う。

- 提供: Anthropic（anthropics/skills）
- 手順: https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md
- 導入: `npx skills add anthropics/skills --skill frontend-design`
- 要るもの: なし。手順の文章だけなので、URL を渡せば使える

### ui-ux-pro-max（UI デザイン）

配色、書体の組み合わせ、UI のスタイル、UX の指針を検索しながら、Web、モバイル、デスクトップの画面を作る。アクセシビリティや操作性の点検の観点も含む。

- 提供: nextlevelbuilder（ui-ux-pro-max-skill、MIT ライセンス）
- リポジトリ: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- 導入: `npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max`
- 要るもの: Python。スキルの中の検索スクリプトを動かすので、導入が必要

### frontend-slides（スライド、HTML）

ブラウザで表示する 16:9 のスライドを、1 つの HTML ファイルで作る。PowerPoint のファイルを HTML のスライドに変換することもできる。スタイルの見本を見せて選ばせる手順がある。

- 提供: zarazhangrui（frontend-slides、MIT ライセンス）
- リポジトリ: https://github.com/zarazhangrui/frontend-slides
- 導入: `npx skills add zarazhangrui/frontend-slides`
- 要るもの: スタイル見本のファイルを読むので、導入した方が手順どおりに動く

### pptx（スライド、PowerPoint）

編集できる .pptx のファイルを作る。既存の .pptx をテンプレートとして読み込み、レイアウトを再利用することもできる。

- 提供: Anthropic（anthropics/skills）。ソースは公開されているが、自由に改変して配布できるライセンスではない
- 手順: https://raw.githubusercontent.com/anthropics/skills/main/skills/pptx/SKILL.md
- 導入: `npx skills add anthropics/skills --skill pptx`
- 要るもの: コードを実行できる環境。ファイルの生成にスクリプトを使う

### banner-design（バナー）

SNS、広告、Web のヒーロー、印刷用のバナーを、サイズごとの決まりに沿って複数案で作る。ブランドの指定（ロゴ、色、書体）を最初に確認する手順がある。

- 提供: nextlevelbuilder（ui-ux-pro-max-skill と同じリポジトリ、MIT ライセンス）
- リポジトリ: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- 導入: `npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill banner-design`
- 要るもの: 参照ファイルを読むので、導入した方が手順どおりに動く
