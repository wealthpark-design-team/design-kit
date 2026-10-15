# 6大デザインシステム比較：設計思想・ブランド適用・画一化への対処と、100人規模企業のブランドキット設計指針

結論として、100人規模の企業が真似すべきなのは GOV.UK の「原則→スタイル→コンポーネント→パターン＋独立したコンテンツガイド」という薄く明快な層構造と、Atlassian の「性格語＋その強弱を状況で調整するスライダー」の書き方、そして M3 Expressive の研究が示した「表現は色・形・サイズ・モーション・コンテナで出し、操作の慣習（リストの構造、テキストラベル、標準パターン）は壊さない」という線引きの3点です。6システムとも「トークン（色・書体・形）は開放、振る舞い・アクセシビリティ・構造は固定」という同じ線を引いており、違いは開放の幅と、それを道具（Theme Builder、テーマ、トークン）で強制するか文章で促すかにあります。

## TL;DR

- **層構造と線引き**：6システムとも「原則／トークン／コンポーネント／パターン／コンテンツ」を分けていますが、原則とコンテンツを別サイトに切り出すのは GOV.UK（Government Design Principles、style guide）と IBM（IBM Design Language と Carbon）、プラットフォーム規約が全体を支配するのは Apple と Shopify です。ブランドに開放されるのは色・書体・形・モーションなどのトークン層で、操作の振る舞い・アクセシビリティ・コンポーネントの役割（role）はほぼ全システムで固定されています。
- **画一化への最も強い答えは M3 Expressive の研究**：Google は46の研究・18,000人超の参加者で、表現的デザインが全年齢で好まれ、主要UI要素を最大4倍速く見つけられ、45歳以上の注視時間の不利が消えたと報告しました。同時に「基本的なインタラクションの型を壊すと使いやすさが落ちる」とも明言しており、表現は「慣習の上に乗せるもの」と位置づけています。
- **100人規模への推奨**：原則（3〜5個、行動可能な文で「X、ただしYではない」形式）＋トークン＋テンプレートを中核にし、分量は「基礎・トークン 30%／テンプレート・作例 30%／コンテンツ（声とトーン）20%／原則 5〜10%／（自社プロダクトがある場合のみ）コンポーネント・パターン 残り」を目安にします。ロックするのはロゴ・コア色・可読性・アクセシビリティ、開放するのはアクセント色の組み合わせ・イメージ・トーンの強弱です。保守は1〜2名のオーナーと四半期ごとの見直しで回る規模に抑えるべきです。

## Key Findings

### 1. 情報の階層構造（5層へのマッピング）

| システム | 原則（foundations） | スタイル／トークン | コンポーネント | パターン | コンテンツ（文章） | 5層への収まり |
|---|---|---|---|---|---|---|
| Material 3 | M3 サイト内の Foundations と Styles。M3 Expressive は「新バージョンではなく M3 の進化」\[1\] | 参照（ref）・システム（sys）・コンポーネント（comp）の3階層トークン\[2\]\[3\]\[4\] | 独立セクション | Foundations 内に分散 | 独立したライティング層は薄い | ほぼ素直に対応。コンテンツ層が薄い |
| Apple HIG | Foundations（設計要素）＋原則（後述、2025年以降に表現が変化） | Foundations 内の Color／Typography／Materials など | Components | Patterns | Foundations 内の Writing など | 「Inputs」「Technologies」のように技術・入力軸の層があり、5層にきれいには収まらない |
| IBM Carbon | IBM Design Language（ibm.com/design/language）に哲学・原則を分離 | Elements（テーマ、トークン、タイポ、モーション） | Components | Patterns | Carbon 内のコンテンツガイド | ブランド言語（IBM Design Language）とプロダクト実装（Carbon）の二階建て |
| Shopify Polaris | 旧 Polaris サイトの experience values（現在はレガシー化） | トークン | Polaris Web Components（shopify.dev） | App Design Guidelines | Content／Voice and tone\[5\] | 2025年以降、ドキュメントが shopify.dev に再編され、原則層が見えにくくなった |
| Atlassian | Get started 内の values と principles | Foundations（トークン、色、タイポ、エレベーション）\[6\] | Components | AMP Patterns | Foundations 内の Content（voice and tone） | 素直に対応。ブランドキットは別ライブラリ |
| GOV.UK | Government Design Principles（gov.uk/guidance）と Service Manual | Styles | Components | Patterns | GOV.UK style guide（別サイト） | 最も層分離が明快。原則とコンテンツが Design System の外にある |

**分量比について**：今回の調査ではサイトマップを取得してページ数を数えることができませんでした。以下はナビゲーション構造の観察に基づく「重心」の定性評価であり、数値比ではありません。
- Material、Carbon、Atlassian、Polaris はコンポーネント層が最大の重心です。
- Apple はコンポーネントと Foundations がほぼ拮抗し、Patterns が厚めです。
- GOV.UK は Design System 単体ではコンポーネントとパターンが中心ですが、style guide と Service Manual を含めると、文章・プロセスの層が最大になります。
- 正確な比率が必要な場合は、各サイトの左ナビゲーションの項目数を同じ日に数えることを推奨します。

主な根拠：
- Apple のナビゲーション各セクションには公式の一行説明があります。Foundations は "Learn to understand fundamental design elements."（基本的なデザイン要素を理解する）、Patterns は "Get guidance on common actions, tasks, and experiences."（よくある操作・タスク・体験の指針）です。https://developer.apple.com/design/get-started/ \[7\]
- Atlassian の現在のトップナビゲーションは Get started、Foundations、Components、Rovo UI、Tools、AMP Patterns、Release phases です（about ページで確認、2026年）。https://atlassian.design/get-started/about-atlassian-design-system \[8\]
- GOV.UK Design System は自らを「Government Design Principles と GOV.UK Service Manual に従うのを助けるもの」と位置づけ、サイト自体も GOV.UK style guide に従うと明記しています。https://design-system.service.gov.uk/ \[9\]

### 2. 「固定」と「ブランドが変えてよい部分」

| システム | 開放している層 | 守らせている層 | カスタマイズ手段 |
|---|---|---|---|
| Material 3 | 色（シード色からの動的カラー）、書体、形、モーション\[2\] | コンポーネントの役割と構造、アクセシビリティ基準 | Material Theme Builder（Figma プラグイン／Web）。トークンを DSP や Compose 用コードとして書き出せる\[2\]\[10\] |
| Apple | アクセント色、カスタムフォント（見出し中心）、アプリアイコン | 標準パターンと振る舞い、本文の可読性、プラットフォーム規約 | HIG「Branding」ページ、システム色、Design Resources |
| Carbon | トークン値（テーマ）。独自トークンの追加も可 | トークン名と役割（role）。テーマ間で役割は不変 | 4つの標準テーマ（White／G10／G90／G100）＋Sass の `with` で値を上書き\[11\] |
| Polaris | ほぼなし。管理画面内アプリは Shopify に合わせる | 外観と振る舞い全般（Shopify admin との一致）\[5\] | Polaris Web Components（CDN 配信で自動的に最新化）、App Design Guidelines、Built for Shopify 認定 |
| Atlassian | アプリ独自のブランド色（ライト／ダークのモードに追従させれば可）\[12\] | 親アプリのテーマ（ライト／ダーク）への追従、トークン\[13\] | `@atlaskit/tokens`、`setGlobalTheme`、`data-color-mode` 属性\[14\]\[15\] |
| GOV.UK | GOV.UK 以外の組織は自社ロゴ・フォント・色を使う（むしろ義務） | GOV.UK 上のサービスはクラウン、GDS Transport、ブランド色が必須。GOV.UK 外のサービスはこれらを使ってはならない | GOV.UK Frontend（コード）、Generic header コンポーネント、「GOV.UK ブランドなしで使う」ガイド\[16\] |

**Material**：
- トークンは3階層です。参照トークンは "don't change based on context"（文脈で変わらない）。システムトークンは "can point to different reference tokens depending on the context, such as a light or dark theme"（ライト／ダークなどの文脈に応じて異なる参照トークンを指せる）。https://m3.material.io/foundations/design-tokens \[4\]
- Theme Builder は "exports design tokens directly as a Design Systems Package (DSP), and theming code"（トークンを DSP として、またテーマのコードとして直接書き出す）とされています。https://m3.material.io/blog/material-theme-builder \[10\]

**Apple**：
- 「Branding」ページの趣旨は、ブランドを出してよいが "feeling at home on the platform"（プラットフォームに馴染んでいる感覚）を保つことです。
- 具体的な指示は次の通りです。
  - "Consider choosing an accent color."（アクセント色の採用を検討する）\[17\]
  - "Consider using a custom font."（カスタムフォントの使用を検討する）。ただし本文とキャプションはシステムフォントを推奨しています。\[17\]
  - "Ensure branding always defers to content."（ブランドは常にコンテンツに道を譲る）\[17\]
- 出典：https://developers.apple.com/design/human-interface-guidelines/foundations/branding

**Carbon**：
- "Tokens are universal and never change across themes"（トークンは普遍で、テーマ間で変わらない）\[18\]
- "Roles cannot be changed between themes"（役割はテーマ間で変えられない）\[18\]
- 「値は変えてよい、名前と役割は変えるな」という線引きが最も明文化されています。https://carbondesignsystem.com/elements/themes/overview/
- 既定テーマを起点に、"Altering one, some, or all of the default token values will result in a new theme."（既定のトークン値を一部または全部変えれば新しいテーマになる）。https://www.carbondesignsystem.com/building-blocks/foundations/themes/overview \[11\]

**Polaris**：
- App Design Guidelines は "Match the rest of the Shopify admin and put merchant needs ahead of being different for its own sake."（Shopify 管理画面の他の部分に合わせ、違うこと自体を目的にせずマーチャントのニーズを優先せよ）と述べています。\[19\]
- Built for Shopify のデザイン要件を満たすと "earns preferential treatment in the Shopify App Store"（App Store で優遇される）ため、経済的インセンティブで画一性を担保しています。\[19\]
- 出典：https://shopify.dev/docs/apps/design

**Atlassian**：
- アプリは親アプリのテーマに追従します。ただし "If your application uses colors that correspond to your unique brand, it is still possible to theme your app by querying the html[data-color-mode] attribute"（独自ブランド色を使う場合も、data-color-mode 属性を参照してテーマに追従させられる）とされています。https://developer.atlassian.com/platform/forge/design-tokens-and-theming/ \[12\]\[13\]
- ブランドキットは atlassian.design のフッターで "Brand kit" として別ライブラリ（orangedam.atlassian.com）に分けられ、プロダクト UI システムとブランド資産が分離されています。https://atlassian.design/get-started/about-atlassian-design-system \[8\]

**GOV.UK**：
- Service Manual は、GOV.UK 外のサービスにパターンとコードの利用を歓迎しつつ、"must not ... use the crown or GOV.UK logotype in the header ... use the GDS Transport typeface"（ヘッダーでクラウンや GOV.UK ロゴタイプを使ってはならない、GDS Transport 書体を使ってはならない）と定めています。\[20\]
- 理由は "you might confuse or mislead people if you do"（使うと人々を混乱させたり誤解させたりする恐れがある）、そして "You should also use the brand logo and font of your organisation."（自組織のロゴとフォントを使うべき）です。\[20\]
- 出典：https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk
- 2025年以降は「Generic header」コンポーネントが、非 GOV.UK サービスが自社ロゴ・ホームリンク・フォントを表示するための正式な手段になっています。https://design-system.service.gov.uk/components/generic-header/ \[16\]

### 3. 「原則」の書き方

| システム | 原則の数と形式 | 語彙 | 説明と例 | 具体的な判断への接続 |
|---|---|---|---|---|
| GOV.UK | 11個（2025年4月に10→11）。命令形の短文\[21\] | 行動可能な動詞句（"Start with user needs", "Do less"） | 各原則に段落の説明と事例ブログへのリンク | 強い。Service Manual と Design System に直結 |
| IBM Design Language | 3原則（Carefully Considered／Uniquely Unified／Expertly Executed）＋哲学\[22\] | 形容詞＋自問リスト\[22\] | 各原則にチェック用の問い\[22\] | 中。判断の問いとして機能 |
| Atlassian | 3つの価値＋3つの原則（"X before Y" のトレードオフ形式）。声は3つの性格語\[8\]\[23\] | 性格語（Bold／Optimistic／Practical, with a wink）＋トレードオフ文 | 声とトーンは「強める／弱める場面」をスライダーで例示 | 強い。状況別にトーンを調整 |
| Polaris | 旧 experience values は6個（Considerate、Empowering、Crafted、Efficient、Trustworthy、Familiar。Shopside 社の Medium 記事による二次情報で、公式ページは shopify.dev/docs/api/polaris へリダイレクト）。現行は App Design Guidelines の指示文 | 形容詞（Considerate、Familiar など） | 現行は指示文中心 | 強い（admin との一致に集約） |
| Apple | 2025年の Liquid Glass で Hierarchy／Harmony／Consistency が前面に。WWDC26\[24\] のセッション「Principles of great design」は8原則（Purpose、Agency、Responsibility、Familiarity、Flexibility、Simplicity、Craft、Delight）を提示し、新しい HIG ページ「Design principles」にリンク | 抽象名詞＋一文の定義 | 各ページの太字の命令文が実質的な原則 | 中〜強。ページ単位の太字の指示が判断に直結 |
| Material 3 | M3 Expressive では「表現的デザイン」の定義と戦術（tactics） | 感情語の評価軸（playful、energetic、friendly など） | 研究データと作例 | 強い。戦術（大きなボタン、色、形）が具体的 |

**引用例**：

- **GOV.UK「9. Be consistent, not uniform」**："This isn't a straitjacket or a rule book. Every circumstance is different."（これは拘束衣でもルールブックでもない。状況はそれぞれ違う。）https://www.gov.uk/guidance/government-design-principles \[21\]
  - このページは2025年4月2日に「11. Minimise environmental impact」が追加され、原則は11個になりました（同URLの更新履歴）。「10原則」という一般の理解は古くなっています。\[21\]
- **IBM「Uniquely Unified」**："Successful systems require both fixed and fluid elements of expression."（成功するシステムには、固定された表現要素と流動的な表現要素の両方が要る。）\[22\]
  - 自問として "If you covered up our logo or name, would you identify an execution as being designed by IBM?"（ロゴや社名を隠しても、それが IBM のデザインだと分かるか？）を掲げています。\[22\]
  - 出典：https://www.ibm.com/design/language/philosophy/principles
- **IBM 哲学**："Without aesthetic, design is either the humdrum repetition of familiar clichés or a wild scramble for novelty."（美学がなければ、デザインはありふれた決まり文句の退屈な反復か、新奇さを求める無秩序な争奪のどちらかになる。）https://ibm.com/design/language/philosophy/pov \[25\]
- **Atlassian の値「Foundational」**："We avoid consistency for the sake of consistency and reject infinite flexibility."（一貫性のための一貫性は避け、無限の柔軟性も拒む。）\[8\]
  - 原則は "Trusted fundamentals before comprehensive patterns."（網羅的なパターンより、信頼できる基礎を先に）のようなトレードオフ形式です。\[8\]
  - 出典：https://atlassian.design/get-started/about-atlassian-design-system
- **Atlassian の声**：性格語は "Bold / Optimistic / Practical, with a wink"（大胆／楽観的／実用的、ちょっとしたウィンクを添えて）です。各語に「もっと強める場面／弱める場面」が定義されています。例えば "All of our content should be practical at a minimum."（すべてのコンテンツは最低限、実用的であるべき）。https://atlassian.design/foundations/content/voice-tone \[26\]
- **Apple（WWDC25）**：新デザインの "three guiding principles ... First, establishing hierarchy. Second, creating harmony. And third, maintaining consistency."（3つの指針：階層を確立し、調和を生み、一貫性を保つ）。https://developer.apple.com/videos/play/wwdc2025/112/ \[27\]
  - 注意：HIG 本体の原則ページは JavaScript 必須のため、今回本文を直接確認できませんでした。HIG 上で「clarity, deference, depth」が「Hierarchy, Harmony, Consistency」に置き換わったという説明は二次情報（createwithswift.com など）によるものです。\[24\]\[28\]
  - さらに WWDC26 のセッション「Principles of great design」は、公式ページの章立てで Purpose、Agency、Responsibility、Familiarity、Flexibility、Simplicity、Craft、Delight の8原則を示し、リソース欄で新しい HIG ページ「Design principles」にリンクしています。トランスクリプトには "There's no formula or right way, to combine these principles that guarantees you'll arrive at the perfect solution."（原則の組み合わせ方に、完璧な答えを保証する公式や正解はない）とあります。Clarity は独立した原則名ではなく、Simplicity の章で扱われています。https://developer.apple.com/videos/play/wwdc2026/250/
- **Polaris（旧 experience values、二次情報経由）**：Familiar は "We want people to feel comfortable using our products, whether it's their first time using them or their hundredth."（初めてでも百回目でも、人々が快適に使えるようにしたい）とされています。公式ページは現在\[29\] shopify.dev/docs/api/polaris にリダイレクトされ、原文を確認できませんでした。

**傾向**：
- 抽象的な形容詞だけの原則（Polaris の旧 values、Apple の3語）は、各ページの具体的な指示とセットになって初めて機能しています。
- 単体で判断に効くのは GOV.UK の動詞句と Atlassian のトレードオフ文です。

### 4. 禁止事項（Don'ts）の扱い

| システム | Don't の表現 | 視覚例 | 強度の段階 | 肯定：否定の傾向（定性） |
|---|---|---|---|---|
| Material 3 | Do／Don't／Caution のカード | 画像ペアが豊富 | Do・Caution・Don't の3段階 | 肯定優位。Don't は画像で示す |
| Apple | 太字の命令文の中に "Avoid…"／"Don't…" が混在 | 画像は少なめ。主に文章 | 語彙で強度を示す（Prefer／Avoid／Don't） | 肯定優位（"Consider…" "Prefer…" が多い） |
| Carbon | Do／Don't カード | 画像ペア | 主に二段階 | 肯定優位 |
| Polaris | Do／Don't の例（特にコンテンツ） | 文章例のペア | 主に二段階 | 文章ガイドでは否定がやや多い |
| Atlassian | Do／Don't、トーンのスライダー | 画像・文例の両方 | 二段階＋スライダー | 肯定優位 |
| GOV.UK | "Do not use…"、"must"／"should" | コード例が中心で、Don't 画像は少ない | must／should／do not の法文的な段階 | style guide は否定形が多い（例："exclamation marks: Do not use"）\[30\] |

**方法の注記**：Button、Color、Typography、文章ページ1枚を対象に Do と Don't を数える定量計数は、今回の調査では実施できませんでした。上表は公式ページの観察に基づく定性評価です。

ただし傾向ははっきりしています。
- **視覚 UI 系（Material、Carbon、Atlassian）**：Don't を画像ペアで示し、文章は肯定形を主体にしています。
- **文章系（GOV.UK style guide、Polaris content）**：否定形の短いルール（"Do not use"、"Avoid"）が多くなります。\[30\]\[31\]
- GOV.UK の A to Z style guide は "Plain English is mandatory for all of GOV.UK so avoid using these words"（平易な英語は GOV.UK 全体で必須なので、これらの語は避けよ）として禁止語リストを持ちます。https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/ \[31\]

### 5. 作例とテンプレートの役割

| システム | 提供物 | 位置づけ |
|---|---|---|
| Material 3 | M3 Design Kit（Figma）、Theme Builder、研究記事中の Before／After 作例 | 例示（「実験せよ」と推奨） |
| Apple | Apple Design Resources（iOS／iPadOS 26 の Figma・Sketch キット、2025年6月9日公開。iOS 27 の Sketch キットは2026年6月8日に更新）\[32\]\[33\] | 正確なカンプを作るための素材。正解として写すものではなく「正確な部品」\[34\] |
| Carbon | Figma ライブラリ、React／Web Components、IBM.com 用の別ライブラリ | 部品と実装コード |
| Polaris | Web Components（CDN）、サンプルアプリ（QR コードアプリなど） | 事実上の正解。admin に合わせることが前提 |
| Atlassian | Figma ライブラリ（ライト／ダーク対応）、トークン\[35\] | 部品 |
| GOV.UK | Prototype Kit、ページテンプレート、Frontend コード、ブランド刷新用の rebrand オプション | 写すべき正解に近い（テンプレートをそのまま使うことが推奨される） |

- Apple の iOS／iPadOS 26 キットは "Rebuilt from the ground up ... includes liquid glass materials, app icons, updated system colors and a comprehensive set of app UI components"（ゼロから作り直し、Liquid Glass のマテリアル、アプリアイコン、更新されたシステム色、包括的な UI コンポーネントを含む）と説明されています。https://developer.apple.com/design/whats-new/ \[33\]\[36\]
- GOV.UK の Prototype Kit は、2025年6月25日のブランド刷新に合わせて config.json に `"rebrand": true` を追加するだけで新ブランドを適用できます（GOV.UK Frontend v5.10.0 以降が必要）。https://prototype-kit.service.gov.uk/docs/use-govuk-brand-refresh \[37\]

### 6. 画一化問題への各社の対処

#### M3 Expressive の研究（中心）

出典：Google Design「Better, Easier, Emotional UX」 https://design.google/library/expressive-material-design-google-research

**発端**：2022年、インターンの研究をきっかけにチーム内で議論が起きました。"Why did all these apps look so similar? So boring? Wasn't there room to dial up the feeling?"（なぜどのアプリも似ていて退屈なのか。感情を高める余地はないのか？）\[38\]

**規模と方法**：
- "46 separate research studies with hundreds of designs, and more than 18,000 participants from around the world"（46件の研究、数百のデザイン、世界18,000人超の参加者）\[38\]
- 手法は視線計測（eye tracking）、サーベイとフォーカスグループ、実験、ユーザビリティテストです。\[38\]

**主な結果**：
- **嗜好**：表現的デザインは全年齢で好まれ、18〜24歳では最大87%が支持しました。\[38\]
- **望ましさ**："subculture"（サブカルチャー的な関連性）の知覚が32%、"modernity"（現代性）が34%、"rebelliousness"（反骨性）が30%上昇しました。\[38\]
- **使いやすさ**：10個のアプリを M3 と M3 Expressive の両版で比較した視線計測で、"Participants were able to spot key UI elements up to four times faster"（主要な UI 要素を最大4倍速く見つけられた）。メールアプリでは、送信ボタンを大きくしキーボード直上に置いたことで発見が4倍速くなりました。\[38\]
- **年齢**："a dramatic erasure of age effects in fixation times, helping 45-plus-year-old users perform on par with their younger counterparts"（注視時間の年齢効果が劇的に消え、45歳以上が若年層と同等になった）\[38\]
- **運動機能・視覚能力**：機能や能力の異なる参加者にとっても、より使いやすいと評価されました。\[38\]

**壊してはいけない慣習**：
- 総論："Product makers need to respect well-established UI patterns and standards."（作り手は確立された UI パターンと標準を尊重すべき）\[38\]
- 失敗例1：プレイリストの縦スクロールのリストをアルバムアートの無秩序な配置に置き換えたところ、「モダンで刺激的」と評価されたにもかかわらず、ユーザビリティのスコアは下がりました。\[38\]
- 失敗例2：メールの操作からテキストラベルを除くと、使いやすさが低下しました。\[38\]
- 結論："When basic interaction paradigms are broken, expressive design can lead to poor usability or negative sentiment."（基本的なインタラクションの型が壊れると、表現的デザインは使いにくさや否定的な感情を招く）\[38\]
- 行動指針："No amount of emotion can compensate for a lack of clarity."（どれだけ感情に訴えても、明瞭さの欠如は補えない）\[38\]
- 少数派への配慮："a strong minority of users preferred calmer, less intense versions"（かなりの少数派が、より穏やかで控えめな版を好んだ）\[38\]
- 文脈依存：銀行アプリのような文脈には不向きな場合があり、慣れの不足が評価に影響したことも認めています。\[38\]

**評価**：
- これは Google 自身による研究報告で、査読論文ではありません。「最大4倍」は最良ケースの値です。
- それでも、「感情＝装飾」ではなく「感情＝色・形・サイズ・コンテナによる注意誘導」と定義し直した点が、ブランドキット設計にとって最も有用な示唆です。

#### 他の5システム

- **Apple**："Help people feel comfortable by using standard patterns consistently. Even a highly stylized interface can be approachable if it maintains familiar behaviors."（標準パターンを一貫して使い、人々に安心感を与える。高度に様式化された UI でも、馴染みのある振る舞いを保てば親しみやすい。）https://developers.apple.com/design/human-interface-guidelines/foundations/branding \[17\]
  - 外見は個性化してよく、振る舞いは標準に従う、という M3 Expressive と同じ線引きです。
- **Carbon／IBM**：Productive（タスク集中、速い、控えめ）と Expressive（重要な瞬間、鮮やか）を、書体とモーションの両方で使い分けます。"Reserve expressive motion for occasional, important moments"（表現的なモーションは、時折の重要な瞬間のために取っておく）。https://carbondesignsystem.com/elements/motion/overview/ \[39\]
  - 書体も productive はプロダクト向け、expressive は IBM.com の編集的なページ向けに分かれています。https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies \[40\]
  - 「表現の量を場面で配分する」仕組みとして最も再利用しやすい設計です。
- **Polaris**：画一性を意図的に選んでいます。"This consistency builds merchant trust, because merchant workflows often cross between apps and native pages"（マーチャントの業務フローはアプリとネイティブページを行き来するため、一貫性が信頼を生む）。https://shopify.dev/docs/apps/design \[19\]
  - 2025年10月1日に Polaris Web Components がリリースされ、Polaris React は非推奨になりました（Shopify のアーカイブ済み GitHub リポジトリの記載）。CDN\[41\] 配信により、アプリは "automatically inherit updates to Shopify's design system"（Shopify のデザインシステムの更新を自動的に引き継ぐ）ことになります。https://www.shopify.com/partners/blog/polaris-goes-stable-the-future-of-shopify-app-development-is-here \[42\]
- **Atlassian**："We avoid consistency for the sake of consistency"（一貫性のための一貫性は避ける）とし、トーンを状況別のスライダーで調整します。これにより、画一性を文章の層で崩す仕組みを持っています。\[8\]\[23\]
- **GOV.UK**：「consistent, not uniform」を、同じ書体・色・グリッドと少数の文字サイズで異なる画面を作る形で実践しています。"These pages all look visually different because they all have different user needs, but they are all consistent."（これらのページはユーザーニーズが違うので見た目は異なるが、すべて一貫している。）https://designnotes.blog.gov.uk/2014/07/08/being-consistent-not-uniform/ \[43\]
  - 2025年6月のブランド刷新では、ヘッダーを黒から青に変え、ロゴの「ドット」をターコイズにして持ち上げ、色パレットを拡張しました。PublicTechnology\[44\]\[45\] によれば、プロジェクトには "an accessibility specialist had been embedded"（アクセシビリティの専門家が常駐していた）うえ、"the introduction of animation into the GOV.UK identity, primarily in the GOV.UK App and on GOV.UK's social media accounts"（主に GOV.UK アプリと SNS アカウントで、GOV.UK のアイデンティティにアニメーションを導入する）とされ、ブランド表現の幅自体を広げたことになります。https://design-system.service.gov.uk/ 、https://www.publictechnology.net/2025/06/30/society-and-welfare/gds-unveils-colourful-500k-refresh-of-gov-uk/ （後者は PublicTechnology の2025年6月30日付記事〔Jim Dunton 記者〕による二次情報で、費用は "a confirmed cost of 'about £532,000'"〔確認済みの費用は約53万2,000ポンド〕。M&C Saatchi が2024年に受注した2件の "brand identity refresh" 契約は "a combined value range of up to £750,000"〔合計で最大75万ポンド〕）

## Recommendations：100人規模企業のブランドキット設計

### A. 含める層と分量比

| 層 | マーケ・コミュニケーション中心の企業 | 自社デジタルプロダクトを持つ企業 | 手本 |
|---|---|---|---|
| 原則（価値観・人格） | 5〜10%（1〜2ページ） | 5%（1〜2ページ） | GOV.UK、Atlassian |
| 基礎・トークン（ロゴ、色、書体、余白、イメージ） | 30〜35% | 20% | Carbon（役割名の固定）、Material（3階層トークン） |
| コンテンツ（声とトーン、用語集、禁止語） | 20% | 15% | Atlassian のスライダー、GOV.UK style guide |
| テンプレート・作例 | 30〜35%（スライド、文書、SNS、名刺、メール） | 15% | GOV.UK のページテンプレート、Apple Design Resources |
| コンポーネント・パターン | 0〜5% | 40〜45% | Polaris、Carbon（既存 OSS のテーマ化を推奨） |

プロダクト企業は、コンポーネントを自作せず、Material／Carbon／既存 OSS の上にトークンでテーマを当てる方式を取るべきです。Carbon の「値は変えてよい、名前と役割は変えない」規則をそのまま採用すると、少人数でも保守できます。

### B. ロックするものと開放するもの

- **ロック（must）**：
  - ロゴとクリアスペース
  - コア色の値と役割名（例：brand-primary、text-primary）
  - 本文書体と最小サイズ
  - コントラスト基準（WCAG AA）
  - プロダクトの操作パターン（ナビゲーション、フォーム、ボタンラベル）
  - 根拠：Carbon の不変の役割、GOV.UK の must／must not、M3 Expressive の「慣習を壊すな」
- **開放（may）**：
  - アクセント色の組み合わせ
  - 写真・イラストの選択
  - 見出しの表現的な書体とサイズ
  - 形（角丸）とモーションの強弱
  - トーンの強弱
  - 根拠：Apple の accent color と見出し用カスタムフォント、Carbon の productive／expressive、Atlassian のスライダー
- **段階表示**：Must／Should／May の3段階で書きます。GOV.UK の must／should／do not と、Material の Do／Caution／Don't を合わせた形です。

### C. 原則の書き方（テンプレート）

- 数は3〜5個にします（IBM は3、Atlassian は3＋3）。
- 形式は「動詞で始まる一文＋"X、ただしYではない"（Shopify の旧 voice や GOV.UK の "consistent, not uniform" 型）＋判断の問い（IBM 型）＋Do/Don't 例1組」とします。

```
原則名：はっきり言う、でも冷たくしない
一文定義：結論を先に書き、専門用語は使わない。
こう判断する：この文を初めての顧客が10秒で理解できるか？
強める場面：料金・期限・エラー（もっと「はっきり」）
弱める場面：お祝い・オンボーディング（温かさを足す）
Do：「3月31日までにお支払いください」
Don't：「お支払い期限の到来にご留意いただけますと幸いです」
```

- 性格語は形容詞3つまでにします（Atlassian の Bold／Optimistic／Practical 型）。各語に「強める場面と弱める場面」を必ず付けてください。形容詞だけで止めると、旧 Polaris の values のように参照されなくなります。

### D. Do/Don't の比率と視覚例

- 目安は肯定（Do／Should）2：否定（Don't）1 程度です。今回は定量計数ができなかったため、観察した傾向に基づく推奨値です。
- 視覚系（ロゴ、色、レイアウト）は、Don't を必ず画像ペアで示します（Material／Carbon 型）。
- 文章系は、禁止語リストを短い否定形で示します（GOV.UK 型）。
- 「Never」は法務・アクセシビリティ・ロゴ改変に限定し、乱用しないようにします。

### E. 提供すべきテンプレートと作例

- **マーケ中心の企業**：スライドのマスター（表紙・章扉・本文・データ・締め）、文書（提案書・プレスリリース）、SNS 画像（3サイズ×3パターン）、メール署名、名刺、採用資料。
- **プロダクト企業**：上記に加え、Figma ライブラリ（トークン連動）、主要画面テンプレート3〜5種、コード上のテーマファイル。
- **位置づけ**：テンプレートは「写す正解」（GOV.UK・Polaris 型）として配布し、作例ギャラリーは「幅を示す例示」（GOV.UK の consistent-not-uniform ブログ、M3 Expressive の作例型）として分けて載せます。同じトークンで見た目の異なる完成例を6〜10点並べることが、画一化を防ぐ最も安価な手段です。

### F. 画一化を避けつつ一貫性を保つ方法

1. **表現の「予算」を場面で配分する**（Carbon の productive／expressive）。業務資料・プロダクトの操作画面は控えめにし、キャンペーン・イベント・オンボーディングは表現を強めます。
2. **表現は色・形・サイズ・コンテナで出し、構造とラベルは崩さない**（M3 Expressive）。
3. **「ロゴを隠しても自社と分かるか」を品質チェックの問いにする**（IBM の Uniquely Unified）。\[22\]
4. **一貫性は「同じ見た目」ではなく「同じ判断」と定義する**（GOV.UK の原則9、Atlassian の Foundational）。

### G. 現実的な範囲と保守モデル（約100人）

- **体制**：オーナー1名（デザイナー）＋文章担当0.5名＋各部門の窓口。プロダクト企業はフロントエンド担当0.5名を追加します。
- **初版の範囲**：原則・基礎・声とトーン・テンプレート10点前後に絞ります。コンポーネントは既存の OSS をテーマ化して済ませます。
- **配布**：単一の URL（Notion／社内 Wiki／静的サイト）とテンプレートのクラウド共有にします。トークンは1ファイルを正とし、Figma とコードへ書き出します（Theme Builder 的な発想）。\[2\]
- **更新**：四半期ごとにレビューし、変更履歴をページ冒頭に記載します（GOV.UK の Design Principles ページの更新履歴と同じ方式）。
- **貢献**：提案フォームを置き、作例ギャラリーへの追加は随時受け付けます（GOV.UK の「Make things open」）。

## Caveats

- **分量比**：各システムのページ数を実際に数えた分量比は今回取得できておらず、ナビゲーション構造からの定性評価にとどまります。Do/Don't の比率も同様です。
- **Apple の原則**：HIG 本体の原則ページは JavaScript 必須で、本文を直接確認できませんでした。「Hierarchy／Harmony／Consistency」は WWDC25 の公式動画と二次情報で確認したものです。WWDC26\[24\] のセッション「Principles of great design」は Purpose、Agency、Responsibility、Familiarity、Flexibility、Simplicity、Craft、Delight の8原則を示し、新しい HIG ページ「Design principles」にリンクしているため、HIG の現行文言はこの8原則に更新されている可能性が高いです。
- **Polaris の experience values**：現在は公式ページがリダイレクトされ、レガシーサイトでのみ残っているとみられます。引用は二次情報経由です。
- **Atlassian の原則**："Build trust in every interaction" などの旧原則セットが外部サイトで引用され続けていますが、現行の atlassian.design では values（Foundational／Harmonious／Empowering）と "X before Y" の原則に置き換わっています。\[8\]\[46\]
- **M3 Expressive の研究**：Google 自身による報告で、個々の研究の詳細（各サンプルサイズ、統計的検定）は公開されていません。「最大4倍」は最良ケースです。
- **GOV.UK のブランド刷新費用**：PublicTechnology の2025年6月30日付記事は "a confirmed cost of 'about £532,000'"（確認済みの費用は約53万2,000ポンド）と報じ、M&C Saatchi の2件の契約は合計で最大75万ポンドとしています（業界メディアの報道）。

## 出典

1. [Start building with Material 3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)
2. [What Is Material Design 3? A Complete Guide](https://euleinstitute.com/en/blog/material-design-3/)
3. [Design Tokens and Theming Architecture — Sujeet Jaiswal - Principal Software Engineer](https://sujeet.pro/articles/design-tokens-and-theming)
4. [Design tokens](https://m3.material.io/foundations/design-tokens)
5. [Shopify Polaris Design System: The Complete Guide to Components, Icons, Forms, and Best Practices (2026)](https://impexinfotech.com/blog-post/shopify-polaris-design-system-the-complete-guide-to-components-icons-forms-and-best-practices-2026/)
6. [Atlassian Design System - Juan Fernando Pacheco](https://juanfernandopacheco.com/2025/06/atlassian-design-system/)
7. [Get Started - Design - Apple Developer](https://developer.apple.com/design/get-started/)
8. [Overview - About atlassian design system - Atlassian Design](https://atlassian.design/get-started/about-atlassian-design-system)
9. [Design your service using GOV.UK styles, components and patterns](https://design-system.service.gov.uk/)
10. [Introducing Material Theme Builder - Material Design Blog](https://m3.material.io/blog/material-theme-builder)
11. [Themes](https://www.carbondesignsystem.com/building-blocks/foundations/themes/overview)
12. [Design tokens and theming](https://developer.atlassian.com/platform/forge/design-tokens-and-theming/)
13. [Theming Connect apps](https://developer.atlassian.com/cloud/bitbucket/jsapi/connect-theming/)
14. [Overview - Use tokens in code - Atlassian Design](https://atlassian.design/foundations/tokens/use-tokens-in-code)
15. [Prepare your Data Center app for the dark theme](https://developer.atlassian.com/platform/marketplace/dc-apps-preparing-for-dark-theme/)
16. [Generic header](https://design-system.service.gov.uk/components/generic-header/)
17. [Branding - Foundations - Human Interface Guidelines - Design - Apple Developer](https://developers.apple.com/design/human-interface-guidelines/foundations/branding)
18. [Themes](https://carbondesignsystem.com/elements/themes/overview/)
19. [App Design Guidelines](https://shopify.dev/docs/apps/design)
20. [Making your service look like GOV.UK](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk)
21. [Government Design Principles](https://www.gov.uk/guidance/government-design-principles)
22. [www.ibm.com](https://www.ibm.com/design/language/philosophy/principles)
23. [Voice and tone - Content - Atlassian Design System](https://atlassian.design/content/voice-tone/)
24. [Liquid Glass: Redefining design through Hierarchy, Harmony and Consistency](https://www.createwithswift.com/liquid-glass-redefining-design-through-hierarchy-harmony-and-consistency/)
25. [ibm.com](https://ibm.com/design/language/philosophy/pov)
26. [Overview - Voice tone - Atlassian Design](https://atlassian.design/foundations/content/voice-tone)
27. [Platforms State of the Union (ASL) - WWDC25 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2025/112/)
28. [Human Interface Guidelines (HIG): The Complete iOS Design Guide](https://www.bitcot.com/ios-human-interface-guidelines/)
29. [3 Things to Know About Shopify Polaris](https://www.fullstack.com/labs/resources/blog/3-things-that-you-should-know-about-shopify-polaris)
30. [HMRC style guide - Design resources for HMRC — GOV.UK](https://design.tax.service.gov.uk/hmrc-content-style-guide/)
31. [A to Z style guide - GOV.UK content and publishing guidance](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)
32. [iOS and iPadOS 26 design kits are here - Latest News - Apple Developer](https://developer.apple.com/news/?id=pnfbj8je)
33. [What’s new - Design - Apple Developer](https://developer.apple.com/design/whats-new/)
34. [30+ Best Free iOS UI Kits & GUI Design Kits (Updated for iOS 27) - 365 Web Resources](https://365webresources.com/ios-gui-design-kits/)
35. [Start using design tokens in your apps, and try dark theme in Jira Cloud - Ecosystem Design Announcements - The Atlassian Developer Community](https://community.developer.atlassian.com/t/start-using-design-tokens-in-your-apps-and-try-dark-theme-in-jira-cloud/64147)
36. [What’s new - Design - Apple Developer](https://developer.apple.com/design/whats-new/?id=01262021)
37. [Use the GOV.UK brand refresh in your prototype](https://prototype-kit.service.gov.uk/docs/use-govuk-brand-refresh)
38. [Expressive Design: Google's UX Research - Google Design](https://design.google/library/expressive-material-design-google-research)
39. [Motion](https://carbondesignsystem.com/elements/motion/overview/)
40. [Typography](https://www.carbondesignsystem.com/building-blocks/foundations/typography/style-strategies)
41. [GitHub - Shopify/polaris-react-archive: Shopify's Polaris Design System - React implementation (Deprecated) · GitHub](https://github.com/Shopify/polaris-react-archive)
42. [Polaris unified is here](https://www.shopify.com/partners/blog/polaris-goes-stable-the-future-of-shopify-app-development-is-here)
43. [being consistent not uniform](https://designnotes.blog.gov.uk/2014/07/08/being-consistent-not-uniform/)
44. [GDS unveils colourful £500k refresh of GOV.UK](https://www.publictechnology.net/2025/06/30/society-and-welfare/gds-unveils-colourful-500k-refresh-of-gov-uk/)
45. [The (not quite new) GOV.UK brand / Blog / beeps](https://beeps.website/blog/2025-06-25-the-not-quite-new-govuk-brand/)
46. [Atlassian Design Principles](https://principles.design/examples/atlassian-design-principles)
