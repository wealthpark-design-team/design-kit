# B. AIエージェント向けデザインガイドライン配布の実践と証拠（2026年10月時点）

Oct 15, 2026 · @Kaya

## 対象と前提

2025〜2026年に登場した「AI にブランドやデザインシステムを読ませる」8系統を「形式」「想定する読み手」「配布経路」「効果の証拠」「日本語タイポグラフィ」の5軸で比較しました。英語の一次資料（仕様、公式リポジトリ、公式ブログ）を優先し、開いて確認できなかった事項は本文で「未確認」と明記しています。

## 1. Google Stitch の DESIGN.md 系

DESIGN.md は「YAML のトークン（規範値）＋Markdown の散文（使い方と理由）」をリポジトリ直下の1ファイルにまとめる形式です。2026年4月21日に Google がドラフト仕様を公開しました（[Google 公式ブログ](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/)）。2026年10月時点でも version は `alpha` です。

**公式仕様（[google-labs-code/design.md](https://github.com/google-labs-code/design.md)、最新リリース 0.3.0、2026年6月15日）**

| 観点 | 内容 |
| --- | --- |
| 形式 | YAML front matter に colors、typography、rounded、spacing、components を書きます。これが規範値で、本文はその適用理由です。本文の `##` 節は Overview、Colors、Typography、Layout、Elevation & Depth、Shapes、Components、Do's and Don'ts の順です。省略はできますが、順序は固定です。長さの規定はありません。 |
| 想定する読み手 | コーディングエージェントと Stitch です。リポジトリの説明自体が「コーディングエージェントに視覚アイデンティティを伝える形式」です。 |
| 配布経路 | リポジトリ同梱が基本です。Stitch ではプロジェクト間でインポートとエクスポートができます。CLI（`@google/design.md`）は lint、diff、export（Tailwind v3/v4、DTCG）を持ちます。lint は参照切れや WCAG AA コントラストなど9ルールを検査します。 |
| 効果の証拠 | Google による生成品質の定量評価は公開されていません。担保は lint による構造とコントラストの検証です。 |
| 日本語 | typography には lineHeight、letterSpacing、fontFeature があります。禁則や改行の専用項目はありません。 |

**コミュニティの配布物**

| 配布物 | 形式 | 規模 | 配布経路 | 日本語 |
| --- | --- | --- | --- | --- |
| [awesome-design-md](https://www.sourcepulse.org/projects/27256155)（VoltAgent、2026年3月31日公開） | 散文中心の9節。Visual Theme から Agent Prompt Guide まで。公開 CSS からの抽出で、各ブランドの公式資料ではありません。 | 報道により55〜73ファイル | git clone とコピー。各ファイルに preview.html 付き | なし |
| [awesome-design-md-jp](https://ai-heartland.com/agent/awesome-design-md-jp/)（kzhrknt、2026年4月6日公開） | 本家の9節を土台に Typography を拡張しています。CSS 変数の表と CSS 断片で記述します。 | 182サイト（二次報道） | git clone とコピー。GitHub Pages にギャラリーあり | あり（「日本語タイポグラフィ」節を参照） |
| [shadcn.io/design](https://www.shadcn.io/design) | Google 仕様準拠（YAML ＋散文）。ライブモック付きで、運営は shadcn/ui 本体とは別のサイトです。 | 500システム（2026年10月閲覧時） | ページからダウンロード。別途 MCP もあります | 未確認 |

注意点が2つあります。

- **形式の分裂**：VoltAgent 版と jp 版は、Google 仕様（YAML トークン＋8節）が公開される前の「散文中心の9節」系統です。そのため lint や export がそのままは効きません。
- **非エンジニアの利用**：URL を1つ渡すだけの使い方は、公開 URL を Web 取得できるチャット AI に貼る場合に限られます。仕様はこの経路を定めていません。

## 2. Anthropic Agent Skills（SKILL.md）

SKILL.md は、「何をし、いつ使うか」を書いた短いメタデータと手順書をフォルダにまとめる形式です。DESIGN.md との違いは2点あります。必要なときだけ読み込まれることと、テンプレートやスクリプトを同梱できることです。仕様は [agentskills.io](https://agentskills.io/specification) でオープン標準として公開されています（[Claude 公式ブログ](https://claude.com/blog/organization-skills-and-directory)）。

| 観点 | 内容 |
| --- | --- |
| 形式 | 必須は frontmatter の `name` と `description` だけです。`name` は64字以内、`description` は1,024字以内で、何をし、いつ使うかを書きます。本文の形式は自由です。推奨は本文500行未満・約5,000トークン未満で、詳細は `references/`、テンプレートは `assets/`、処理は `scripts/` に分けます。トークン専用の欄はありません。 |
| 想定する読み手 | Claude のチャット、Claude Code、API です。他社のエージェントも同じ形式を読めます。 |
| 配布経路 | Claude アプリでは、設定の Capabilities から有効化します。Team・Enterprise では、オーナーが管理設定から組織全体に配布できます（[ヘルプ](https://support.claude.com/en/articles/13119606-managing-skills-as-an-admin)）。Claude Code ではリポジトリ同梱かプラグイン、API では `/v1/skills` を使います。URL を1つ貼るだけで使う経路はありません。 |
| 効果の証拠 | Anthropic は約400トークンの指示でフロントエンドの出力が改善した例を、使用前後の画像で示しています（[記事](https://claude.com/blog/improving-frontend-design-through-skills)、2025年11月12日）。定量評価はありません。 |
| 日本語 | 仕様上の規定はありません。公式の brand-guidelines も欧文フォントのみを指定しています。 |

**anthropics/skills の4つの公式スキル**

| スキル | 中身 | ブランド配布での使い方 |
| --- | --- | --- |
| [brand-guidelines](https://raw.githubusercontent.com/anthropics/skills/HEAD/skills/brand-guidelines/SKILL.md) | 約70行です。主要色4色とアクセント3色を hex と用途で示します。見出しは Poppins（代替 Arial）、本文は Lora（代替 Georgia）です。適用先は python-pptx の RGBColor です。 | 自社版の雛形に向きます。ただし日本語フォントの代替指定を足す必要があります。 |
| [frontend-design](https://claude.com/blog/improving-frontend-design-through-skills) | Inter や白地に紫のグラデーションなど、「ありがちな見た目」を避けて独自性を出す指示です。毎回フォントやテーマを変えるよう促します。 | 自社ブランドと同時に使うと、「毎回変える」と「固定する」が衝突します。自社ブランドを優先する旨を明記してください。 |
| [canvas-design](https://agentskillsfinder.com/skills/canvas-design) | まず「デザイン哲学」を Markdown で書き、次にそれを PNG・PDF の静的ビジュアルにする2段階です。フォントも同梱されています。 | キービジュアルの方向出しに向きます。定型ブランド物の量産には向きません。 |
| [pptx](https://agentskillsfinder.com/skills/pptx) | 既存テンプレートを編集する経路と、ゼロから生成する経路があります。テンプレートは thumbnail.py でレイアウトを可視化してから使います。 | ブランドのスライドマスター（.pptx）を `assets/` に同梱します。Anthropic はテンプレートをそのままスキル化する [ppt-template-creator](https://skillselion.com/skills/anthropics/financial-services/ppt-template-creator) も公開しています。 |

同じ記事で Anthropic は、特定の定番を禁じてもモデルが別の定番（Space Grotesk など）に収束すると述べています。禁止リストだけでは、広がりを制御しきれません。

## 3. Claude Design と Design System アーティファクト

Claude Design は、デザインシステムを取り込み、出力を自己点検して直す製品です。2026年9月からは Claude 本体のアーティファクトとして動きます。形式は公開されていません。その代わり、組織の「既定デザインシステム」を設定すれば、使う人は何も貼らずにブランドが適用されます。

| 日付 | 出来事 |
| --- | --- |
| 2026年9月 | Claude 本体に統合されました。デザイン、デザインシステム、スライドはアーティファクトとして作られます（[移行ガイド](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude.md)）。単独サイト claude.ai/design は2026年12月14日に閉鎖予定です。 |
| 2026年6月17日 | 取り込みが作り直されました。出力をデザインシステムと照合して修正する機能と、管理者が標準システムを承認してロックする機能が加わりました（[公式ブログ](https://claude.com/blog/claude-design-stays-on-brand-for-daily-work)）。 |
| 2026年4月17日 | Anthropic Labs が研究プレビューとして公開しました（[PureAI](https://pureai.com/articles/2026/06/17/anthropic-overhauls-claude-design.aspx)）。 |

| 観点 | 内容 |
| --- | --- |
| 形式 | 公開仕様はありません。GitHub リポジトリ、デザインファイル、アップロードから取り込み、ファイル群として保持します。Claude Code では `/design-sync` でコードベースから取り込みます。 |
| 想定する読み手 | Claude 本体（チャット、Claude Code、Artifacts タブ）です。対象はデザイン、プロトタイプ、スライドです。 |
| 配布経路 | Team・Enterprise のオーナーが「Set as default」を選ぶと、新しい作業が自動でそれを使います。公開したデザインシステムは組織全員のメニューに出ます。Enterprise では既定でオフで、ゼロデータ保持（ZDR）の組織は使えません。 |
| 効果の証拠 | 公式は「見せる前に照合して直す」と説明しています。ただし照合の方法や精度は公開されていません。公開初週の利用者は100万人超ですが、これは利用規模であって効果ではありません。 |
| 日本語 | 公式資料に日本語タイポグラフィの記載は見当たりません（未確認）。 |

非エンジニアにとっては、最も手間の少ない経路です。一方で、取り込んだデザインシステムを他社の AI へそのまま持ち出す経路はありません。そのため、正本は別に持つ必要があります。

## 4. Vercel agent-skills

[Vercel のスキル集](https://github.com/vercel-labs/agent-skills/wiki)はブランドを運ぶものではありません。「生成した後に規約で検査する」型の手本です。中でも web-design-guidelines は、実行のたびに公開 URL から最新の規約を取得し、違反を `file:line` 形式で列挙します。

| 観点 | 内容 |
| --- | --- |
| 形式 | Agent Skills 形式です。web-design-guidelines の SKILL.md は手順だけを書いた約20行です。規約本体は別の Markdown（[command.md](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md)）に置いています。規約は短い命令文の箇条書きで、Accessibility、Typography、Content & Copy などのカテゴリと「検出すべきアンチパターン」で構成されます。 |
| 想定する読み手 | コーディングエージェント（Claude Code、Cursor など）です。 |
| 配布経路 | `npx skills add vercel-labs/agent-skills` でリポジトリに入れます。規約本体は raw.githubusercontent.com の URL で配布し、毎回取得します。「薄いスキル＋正本 URL」の構成なので、規約の更新が全利用者に即座に届きます。 |
| 効果の証拠 | 公開ベンチマークは見当たりません（未確認）。検査型なので、生成時に指示が無視されても事後に検出できます。 |
| 日本語 | 規約は英語 UI が前提です。見出しとボタンの Title Case や曲がった引用符など、日本語 UI では誤検出しうる項目があります。一方、日付や数値に `Intl` を使うなどの i18n 規約はそのまま使えます。 |

自社ブランドで真似るなら、「ブランド検査スキル」として取り入れます。規約は禁止色、任意の hex 値、フォント名、禁則などを検出可能な形で書き、社内 URL から取得させます。

## 5. Figma MCP と Dev Mode

Figma MCP はブランド文書を配るのではありません。デザインファイルそのものを、構造化した文脈としてエージェントに渡す経路です。公式ガイド自身が、トークンが無視される典型的な原因と対処を書いています（[figma/mcp-server-guide](https://github.com/figma/mcp-server-guide)）。

| 観点 | 内容 |
| --- | --- |
| 形式 | MCP ツールの応答です。`get_design_context` は選択範囲を React＋Tailwind の表現で返します。`get_variable_defs` は使われている変数（色、余白、文字）を返します。ほかに `get_screenshot`、`get_metadata` と、コード部品との対応を管理する Code Connect 系のツールがあります。 |
| 想定する読み手 | コーディングエージェント（VS Code、Cursor、Claude Code、Gemini CLI）が中心です。リモート版はキャンバスへの書き込みもできます（ベータ、将来は従量課金）。 |
| 配布経路 | リモート版（`https://mcp.figma.com/mcp`）と、Figma デスクトップアプリ内のローカル版があります。Claude Code と Cursor では、MCP 設定とスキルをまとめた Figma プラグインが推奨です。使う人はフレームのリンクを貼るだけです。ただし Starter プランや View・Collab 席は月最大6回しか呼べません。実用には有償プランの Dev 席か Full 席が必要です。 |
| 効果の証拠 | Figma は定量評価を公開していません。ただし失敗の形は明記しています。Code Connect がなければモデルは部品を推測すること、トークンではなく生の値が出たら `get_variable_defs` を明示的に呼ぶこと、選択範囲が大きいと応答が不完全になること、の3点です。 |
| 日本語 | 日本語組版についての記載はありません。フォントや行間は Figma 変数として渡せますが、禁則や混植の規則は変数では表せません。 |

公式ガイドが勧める「ルールファイル」には、取得の順番が書かれています。まず構造、次にスクリーンショット、最後に実装して照合します。さらに、Tailwind のクラスを自社トークンに置き換えるよう明記しています。Figma を使う場合も、「何をハードコードしてはいけないか」を書いた文書は別に必要だということです。

## 6. ブランド素材を配る MCP サーバー

ブランド MCP は、「文書を読ませる」のではなく「承認済みの素材を問い合わせさせる」経路です。ロゴファイル、フォントファイル、スライドレイアウトのような「文字では渡せないもの」を届けられるのが強みです。2026年6月時点の主な選択肢は次のとおりです（一覧は SlideSpeak 社の[解説記事](https://slidespeak.co/blog/best-design-mcp-servers)によるもので、同社は自社製品を含むと開示しています）。

| サーバー | 届けるもの | 読み手 |
| --- | --- | --- |
| SlideSpeak Onbrand | 色とトークン、ロゴの各種、ライセンス済みフォント（ファイルごと）、承認済み画像、アイコン、名前付きのスライドレイアウト（HTML/CSS）です。 | スライド生成が主です。Claude、Codex、Cursor などから使えます。 |
| Frontify MCP（2026年5月発表） | ロゴ、ビジュアル体系、テンプレート、トーン・オブ・ボイス、メッセージ体系、ローカライズ情報です。 | Frontify を既に使う企業向けです。 |
| zeroheight MCP | デザインシステム文書（トークン、コンポーネントの使用規則）です。 | プロダクト UI 向けです。 |
| Paper.design | エージェントが読み書きできる共有キャンバスです。 | 方向性の探索向けです。 |

| 観点 | 内容 |
| --- | --- |
| 形式 | MCP のツールとリソースです。素材の構造は各社独自で、共通スキーマはありません。Onbrand は OAuth の読み取り・書き込みスコープを分けています（[Glama 掲載情報](https://glama.ai/mcp/servers/g0q2f9lr9z)）。 |
| 想定する読み手 | スライドや販促物を作るチャット AI とエージェントです。 |
| 配布経路 | リモート MCP の URL です。Claude では、この URL をカスタムコネクタとして登録できます（[ヘルプ](https://support.claude.com/en/articles/11175166)）。Team・Enterprise ではオーナーが一度追加すれば、各自は接続するだけです。接続は Anthropic のクラウドから行われるため、サーバーはインターネットから到達できる必要があります。 |
| 効果の証拠 | 第三者による比較評価は見当たりません。公開情報はベンダー自身の説明です。 |
| 日本語 | 各社とも日本語組版の扱いは公開していません（未確認）。フォントファイルを配れる点は、和文フォントの代替問題に有利です。 |

同じ記事は、良いブランド MCP の条件を5つ挙げています。最新の状態を返すこと、構造化されていること、承認と版管理があること、範囲を絞れること、監査できること、です。自社で小さな MCP を建てる場合の要件としても使えます。
