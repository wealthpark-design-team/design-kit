# ブランドガイドラインはAIの出力を「無難」にするか：仮説の検証と、ブランドキット冒頭に置く指示文の設計

**結論：仮説「ブランドガイドラインを先に読ませると、読ませない場合より視覚的に平凡になる」は、そのままの形では支持できません（支持度：弱〜部分的）。** ガイドラインなしのAIは、すでに「Inter＋紫グラデーション＋同じ形のカード3枚」という統計的な中心に収束しています。\[1\]\[2\]\[3\]そのため、自社固有の値を持つガイドラインは、この基準と比べればむしろ個性を上げる側に働きます。平凡化を招くのはガイドラインの存在そのものではありません。①禁止事項ばかりの規則集、②空白部分の扱いを指示しないこと、③作例を「写すべき正解」として渡すこと、④規則が多すぎて長いこと、の4つです。

## TL;DR

- **仮説の評価は「弱〜部分的」**。直接検証した研究は見つかりませんでした。隣接する証拠を分けて見ると、次のとおりです。
  - 個性（distinctiveness）：ガイドなしの基準がすでに凡庸なので、自社固有の値を持つキットは改善側に働く。
  - 世代間の多様性：作例・制約・選好学習による収束が起きるため、狭まる方向。
  - ブランド準拠：明確に上がる。
- **効く対策**：方向性・人格を先に示し、固定項目と開放項目を明示する。禁止には必ず代替案と理由を添え、制作前に設計案を立てて自己批評させる。決定的なチェックは機械的なリンターに任せる。**効かない／逆効果の対策**：禁止だけのリストは別の決まり文句への「移転」を招きます。指示を大量に詰め込むこと、作例を1枚だけ見せて「これに合わせて」と言うことも同様です。
- **提示順序**：①冒頭に短い方向性と固定ルール、②中間に素材庫（長い資料）、③末尾にタスクと固定ルールの再掲、という「サンドイッチ型」を推奨します。ベンダー間で推奨が少し違うため（Anthropic は長文資料を上・質問を下、OpenAI は指示を資料の前後両方）、両者を満たす形にしています。\[4\]

## Key Findings

### 1. 仮説の支持度：3つの軸に分けると結論が変わる

| 軸 | 判定 | 主な根拠 | 証拠の強さ |
|---|---|---|---|
| 個性（平凡さ・魅力） | **仮説に反する（条件付き）**。固有の値を持つガイドラインは、ガイドなしの「AIスロップ」基準より個性を上げる | Anthropic の「distributional convergence」の説明。OpenAI の GPT-5.4 フロントエンド指針も、指示がなければ汎用的になると明記\[5\] | ベンダーブログ（定性的な前後比較） |
| 世代間の多様性 | **仮説を部分的に支持**。作例・強い制約・選好学習は出力を収束させる | Doshi & Hauser 2024（Science Advances）、Verbalized Sampling（2025）、CHI 2024 のデザイン固着研究 | 査読論文／プレプリント（ただしUI生成への直接適用ではない） |
| ブランド準拠 | **ガイドラインで上がる**が、静的な仕様だけでは不十分 | GUIDE（2026）：作例＋design.md の基準より、デザイナーのフィードバックで整合させた出力が有意に好まれた | プレプリント（N=12） |

**直接検証の欠如**：「同じ課題で、ブランドガイドラインあり／なしの出力の個性を人間評価で比べた」研究は、2024〜2026年の範囲では見つかりませんでした。サブエージェント調査でも、(a) トークンのみ、(b) トークン＋人格の散文、(c) トークン＋作例画像、を直接比較した研究はありませんでした。以下の結論は隣接証拠からの推論です。

### 2. ガイドなしの基準はすでに「平凡」：競合仮説が有力

- Anthropic は2025年11月のブログで、ガイダンスなしのランディングページは「ほぼ常に」Inter フォント・白背景に紫グラデーション・最小限のアニメーションに収束すると述べています。原因は、安全な選択が学習データを支配しているためだとしています（distributional convergence）。\[1\]
- OpenAI も GPT-5.4 のフロントエンド指針で、デザインシステム・タイポグラフィ・配色・レイアウトを最初に定義し、ムードボードや参照画像を渡すよう勧めています。紫×白や、ダークモードへの偏りを避けることも明記しています。\[6\]\[7\]
- したがって、比較すべきは「ガイドラインあり vs. 自由な創造性」ではありません。実際には **「ガイドラインあり vs. 統計的中心」** の比較です。ガイドラインの中身が「青＋Inter＋角丸カード」のように統計的中心と同じなら、そのガイドラインは平凡さを固定してしまいます。中身が固有なら、平凡さから引き離します。

### 3. 「平凡化」を実際に起こすメカニズム（ガイドラインの書き方次第）

- **アンカリングと固着（作例の影響）**：Wadinambiarachchi ら（CHI 2024、N=60）は、AI画像生成器をインスピレーション源にした参加者のほうが、最初に見た作例への固着が強く、アイデアの数・多様性・独創性が低かったと報告しています。生成画像の44%が作例と概念的に似ていました。**これは人間の発想に関する類推証拠**で、\[8\]\[9\]モデル出力への直接証拠ではありません。また、独創性の差自体は「無視できる程度」とされています。\[9\]
- **集団的な均質化**：Doshi & Hauser（Science Advances, 2024）は、生成AIのアイデアを使うと個人の物語は「より創造的」と評価される一方、物語同士が互いに似てしまうことを示しました（査読論文）。\[10\]\[11\]トロント大学の Kumar ら（CHI 2025、事前登録、N=1,100）の無作為化実験では、GPT-4o の「戦略リスト」を見た参加者は、その後のLLMなしの回でも、LLMを使わなかった群よりアイデアが互いに似ていました（p=0.017）。一方、「アイデアリスト」を見た条件では、均質化は後の回まで持続しませんでした。
- **選好学習によるモード崩壊**：Verbalized Sampling（Zhang ら、arXiv 2510.01171、2025）は、人間のアノテーターが「典型的なテキスト」を好む典型性バイアスがモード崩壊の主要因だとし、学習なしで多様性を回復するプロンプト手法を提案しています（プレプリント）。\[12\]\[13\]
- **制約の数と創造性**：NeoCoder（NAACL 2025）では、制約を増やすと収束的創造性（正解かつ制約充足）が大きく下がりました。\[14\]一方、CS4（arXiv 2410.04197）では、制約を増やしても多様性は概ね変わりませんでした。**「制約が多様性を下げる」は一貫した結論ではありません**。\[15\]
- **ツール間の収束**：Design Theater（arXiv 2607.22928、2026年7月、プレプリント）は、5つのツール（ChatGPT、Claude、Firebase Studio、v0、Bolt）が同じプロンプトから作ったUIについて、見た目とレイアウト構成が収束し、色のばらつきは比較的大きいと報告しています。プロンプトに埋め込んだUX原則の認識率は平均0.54でした。\[16\]

### 4. 反証側の証拠：作例は多様性を「上げる」こともある

- GameUIAgent（arXiv 2603.14724、2026、プレプリント）のアブレーションでは、作例（exemplar）を外すとノード数が38%、キャンバス被覆率が39%、**色の多様性が42%減少**しました。一方、VLM評価スコアはほぼ変わりませんでした（Δ=-0.1）。作例は「構成の豊かさ」を担っていて、自動評価ではそれが見えにくいことを示しています。\[17\]
- UIDEC（arXiv 2501.18748）は、レイアウトの多様性を上げる目的でランダムな参照画面を加え、「構造だけ参考にし、個別のデザイン要素は無視せよ」と指示しています（設計上の根拠であり、数値評価は未確認）。\[18\]
- SpecifyUI（arXiv 2509.07334、N=16）は、参照スクリーンショットから抽出した構造化仕様による生成のほうが、プロンプトのみより参照意図を忠実に捉え、Google Stitch より意図整合・品質・操作性で有意に優れたと報告しています。\[19\]
- **含意**：作例は「1枚を正解として写させる」と固着を招きます。「複数枚を、構造や雰囲気の参考として役割を限定して渡す」と、むしろ豊かさを上げます。

### 5. 否定形指示と禁止リスト

- **LLMの皮肉なリバウンド**：「Don't Think of the White Bear」（arXiv 2511.12381、プレプリント）は、「Xに言及するな」と指示した後にXの出力確率が上がる現象を報告しています。認知負荷や意味的な妨害刺激があると強くなります。Castricato\[20\] らの Pink Elephant 論文（arXiv 2402.07896）の表1では、OpenHermes-13B が「話すな」と指示された話題に言及した率は、指示ありでもなしでも0.34で変わらず、OpenHermes-7B は指示によって0.33から0.36へむしろ上がりました。著者らは、ベースラインのモデルは指示後も同等かそれ以上に言及しやすいと書いています。
- **画像拡散モデル**：「Do not think about pink elephant!」（arXiv 2404.15154）は、DALL·E 3 で「〜なしで」と指示すると、むしろその対象が誇張される事例を示しました。Ban\[21\] ら（ECCV 2024）は、ネガティブプロンプトの効き方として「遅延効果」と「中和による削除」を示し、早く効かせすぎると逆に概念を誘発する場合があることも報告しています。**ただし、これはネガティブプロンプト欄（CFG）の話で、テキスト内の否定文とは仕組みが違います**。\[22\]\[23\]
- **禁止は「移転」させる**：Anthropic 自身が、特定フォントを禁じると今度は Space Grotesk に収束したと書いています。Impeccable\[1\] の作者 Paul Bakaus も講演「The Dark Arts of Skill Engineering」（AI Engineer）で、禁止は創造性を生まず、「禁止はモデルを次のクラスターへ移すだけ」「slop は動く標的」と述べ、Anthropic の frontend-design スキルを「名指しの禁止を並べた55行」と評しました。実際、AIスロップの典型は紫グラデーションから「Claude ベージュ（クリーム背景＋セリフ体）」へ移っています（講演要約記事。作者は競合スキルの開発者なので利害関係者の主張として扱う）。
- **現行の Anthropic frontend-design スキルもこれを認めています**。AI生成デザインが集まる3つの典型（①#F4F1EA 付近のクリーム背景＋高コントラストのセリフ見出し＋テラコッタ、②ほぼ黒の背景＋アシッドグリーンまたは朱色の単一アクセント、③細い罫線・角丸ゼロ・新聞風の段組み）を名指ししたうえで、「ブリーフが方向を指定している場合は正確に従う。空いている軸の自由をこれらのデフォルトに使うな」と書いています。\[24\]

### 6. 「固定項目は従う、空白は意図的に決める」型の指示の効果

- 現行の anthropics/skills の frontend-design SKILL.md（2026年9月更新）の要点は次のとおりです。
  - 「ブリーフの言葉が常に優先する」と明記している。
  - 制作前に、4〜6色の名前付き hex、2役以上の書体、レイアウト案、シグネチャー要素1つからなる「コンパクトなトークン体系」を作らせる。
  - その案が「似たページに誰でも出すデフォルトになっていないか」を自己点検させる。
  - 「大胆さは1か所に使い、周囲は静かに」と指示する。\[24\]
- **効果の証拠**：
  - Anthropic のブログは、スキルあり／なしの定性的な前後比較のみです（ベンダー主張）。\[1\]
  - Justin Wetch の再現可能な評価では、旧スキルを改訂した版が Claude 4.5 系3モデルの判定のつく比較で21勝7敗（勝率75%、二項検定 p=0.0063）でした。ただし審判は Claude Opus 4.5 によるスクリーンショット比較で、計30評価と小規模です（コミュニティ実験）。改訂の柱は、実行不能な指示（「世代間で収束するな」）の削除と、NEVER の後に INSTEAD（代替案）を置く構造です。\[25\]
  - 反対に、Bakaus は X での Impeccable 3.5 の発表で「Impeccable も Anthropic の frontend-design も、実際にはデザインがそれほど上手くなかった」と述べ、同じ投稿で自社測定として「74%のページがクリーム色のAIデフォルト背景、76%が極端な字間、90%超がコントラストの下限を満たさなかった」と主張しています（競合ベンダーの主張・自社測定）。
- **他社の同型指示**：
  - OpenAI GPT-5.4 指針：「既存のサイトやデザインシステム内で作業する場合は、確立したパターンと視覚言語を保持する」という例外規定がある。\[6\]
  - OpenAI GPT-5.1 指針：トークン以外の色をハードコードさせない「tokens-first」の強制ブロックを示している。\[26\]\[27\]
  - Claude Design のシステムプロンプト（流出版、非公式）：「ブランド／デザインシステムの色を使う。制約がきつすぎる場合は、既存パレットに調和する色を oklch で定義する」とあり、まさに「素材庫＋拡張ルール」型の書き方です。ここでも、攻撃的なグラデーション背景、ブランドにない絵文字、左ボーダーのアクセント付き角丸コンテナ、Inter/Roboto/Arial/Fraunces が「AIスロップの定型」として挙げられています。\[28\]\[29\]

### 7. 提示順序の根拠（公式推奨は一致していない）

- **Anthropic**：長い文書（約2万トークン以上）はプロンプト上部、質問・指示は末尾に置く。末尾に質問を置くと、テストで応答品質が最大30%改善したとしています（ベンダー主張）。\[30\]
- **OpenAI（GPT-4.1 指針）**：長いコンテキストでは、指示を前後の両方に置くのが最良。1回だけなら、上に置くほうが下より良いとしています。\[31\]
- **研究**：
  - Lost in the Middle（Liu ら、TACL 2024）：関連情報が入力の冒頭か末尾にあると性能が高く、中間にあると大きく劣化する。GPT-3.5-Turbo では、中間配置時の性能が文書なしの closed-book（56.1%）を下回った（査読論文）。\[32\]
  - IFScale（Jaroslawicz ら、2025）：指示を10〜500個に増やしたとき、500個で最良の gemini-2.5-pro でも68.9%しか守れず、前に置いた指示ほど守られる初頭効果が150〜200個付近で最大になった（プレプリント）。\[33\]
  - ただし Arize AI の Laurie Voss による2026年5月の再実験では、1年前は同時制約200〜300個あたりで最前線モデルが指示を見失い始めていたのに対し、その境界は現在2,000個近くまで上がったとされます（最良は GPT 5.5、最下位は DeepSeek V4 Pro。測っているのは名前付きキーワードを含めるかどうかだけ）。指示過多の影響はモデル世代で急速に変わっているので、**「規則は少数・明確に」は安全側の原則として残しつつ、効果の大きさは自社のモデルで確かめる必要があります**。
- **Anthropic の context engineering の原則**：指示は「適切な高度（right altitude）」で書く。脆いハードコードと、共有文脈を前提にした曖昧な指示の中間を狙うということです。\[34\]\[35\]frontend ブログでは、低高度の典型として「正確な hex コードの指定」を挙げています。**ブランドの\[1\] hex は守るべき固定値ですが、それだけを並べても「どう使うか」という判断の信号にはならない**、という含意です。

## Details

### 効く対策・効かない対策の一覧

| 対策 | 判定 | 根拠 | 証拠の強さ |
|---|---|---|---|
| 方向性・人格・題材を冒頭で言語化させ、デザイン案（色・書体・レイアウト・シグネチャー）を先に作らせる | **効く** | Anthropic frontend-design SKILL.md の2パス設計。OpenAI GPT-5.4 指針の「デザインシステムを先に定義」\[6\] | ベンダー推奨＋コミュニティ評価（Wetch：勝率75%） |
| 固定項目と開放項目を明示する（「指定箇所は正確に従い、空いた軸はデフォルトで埋めない」） | **効く（推定）** | frontend-design 現行版、OpenAI の既存デザインシステム保持の例外規定、Claude Design の oklch 拡張ルール\[6\]\[28\] | ベンダー推奨（定量評価なし） |
| 禁止に「代わりにこうせよ＋理由」を添える（NEVER/INSTEAD） | **効く** | Anthropic「何をすべきかを伝えよ」「理由を添えると汎化する」、Wetch の改訂 | ベンダー推奨＋コミュニティ評価 |
| 禁止だけのリスト（「Inter禁止、紫禁止」） | **効果は短期的・移転する** | Anthropic（Space Grotesk への再収束）、Bakaus（slop は動く標的）、ironic rebound 研究\[36\] | ベンダー記述＋プレプリント |
| 決定的な検出をリンター／フックで行う（例：Impeccable の59ルールの検出器） | **効く（補助として）** | 左ボーダー、紫グラデーション、コントラスト不足などをLLMなしで検出\[36\]\[37\] | ベンダー（ツール作者）主張 |
| 反アトラクター手順（最初に浮かんだ候補を列挙して捨てさせる、ランダムな起点色） | **多様性には効く** | Impeccable の color.js（100色超の起点）、Verbalized Sampling\[36\]\[38\] | ツール作者主張＋プレプリント |
| 作例を複数・役割を限定して渡す（「構造の参考、要素は写さない」） | **効く** | GameUIAgent（作例除去で色の多様性−42%）、UIDEC、SpecifyUI | プレプリント |
| 作例1枚を「これに合わせて」と渡す | **固着リスク** | CHI 2024 デザイン固着研究（類推） | 査読論文（人間の発想、類推） |
| 規則を大量に詰め込み、重要事項を中間に埋める | **逆効果** | Lost in the Middle、IFScale の初頭効果 | 査読論文／プレプリント |
| 「世代間で収束するな」「毎回違うデザインに」 | **実行不能** | モデルは他のセッションを見られない（Wetch、PR #210）\[25\]\[39\] | コミュニティ分析 |
| 自己批評・スクリーンショット確認 | **効く（品質面）** | frontend-design の「批評→構築→再批評」、Bakaus の二系統の独立した批評\[24\]\[36\]\[40\] | ベンダー推奨 |

### 推奨する提示順序（ブランドキットの構成）

1. **冒頭（10行以内）**：方向性・人格 → 固定項目 → 開放項目と判断の原則（下の推奨文）。
2. **中間（素材庫）**：役割付きパレット、書体ペアと用途、モチーフ、写真の方向性、「こういう時に使う」注記、作例は複数（DESIGN.md／DTCG トークンなど）。\[41\]
3. **末尾（タスク側）**：個別の依頼文と、固定項目の1行再掲（ロゴ・コアカラー・書体・コントラスト）。

根拠：Anthropic の「長文資料は上、質問は下」、OpenAI の「指示は前後両方」、Lost in the Middle と IFScale の位置効果を同時に満たす形です。冒頭の指示文は短いので「長文資料」には当たらず、上に置いても Anthropic の推奨とは矛盾しません。

### ブランドキット冒頭に置く「AIへの指示」推奨文案（10行）

```
1. 私たちは〔人格：例「誠実で、少しだけ遊び心のある技術者集団」〕。成果物はまず、この人格が伝わるかで判断する。
2. 作る前に「題材・読み手・この成果物の唯一の目的」を1行で書き、方向性（トーン、構図、見せ場1つ）を決めてから手を動かす。
3. 固定（変更不可）：ロゴ（クリアスペース・最小サイズ厳守）、コアカラー〔#XXXXXX＝主役／#XXXXXX＝アクセント〕の役割、和文〔書体名〕・欧文〔書体名〕、本文コントラストは WCAG AA 以上。
4. 開放（意図的に選ぶ）：レイアウト、余白のリズム、写真の切り取り、補助色の比率、見せ場の置き場所。選んだ理由を一言添える。
5. 素材庫（パレット・モチーフ・作例）は部品と参考であり正解ではない。作例は構造や雰囲気の参考にとどめ、構図をそのまま写さない。
6. 指定が足りない所を流行の定型（青紫グラデーション、絵文字アイコンのカード、左ボーダー付きカード、均等な3カラム）で埋めず、コアカラーの濃淡と、書体の太さ・サイズの差で階層をつくる。
7. 和欧混植：和文は〔和文書体〕、英字・数字は〔欧文書体〕で組み、本文の行間は広め（目安1.7前後）にとる。和文に斜体や極端な字間詰めは使わず、強調は太さか色で行う。
8. 大胆さは1か所だけに使い、ほかは静かに整える。
9. 仕上げ前に「ロゴを同業他社のものに差し替えても成立しないか」を自問し、成立してしまうなら方向性から見直す。
10. 固定項目に反する依頼を受けたら、黙って従わず、理由を添えて確認する。
```

**各行の意図**

- **1行目（人格を最初に）**：分布の中心に引き寄せられる前に、評価軸を「ブランドらしさ」に固定します。Anthropic の「問題の高次の文脈を先に与えると出力が較正される」、\[1\]OpenAI の「明確な視覚的方向を選べ」に対応します。\[6\]
- **2行目（設計を先に）**：frontend-design の「題材・読み手・唯一の役割を先に決める」と2パス設計の要約です。\[24\]いきなり作り始めて統計的中心に落ちるのを防ぎます。
- **3行目（固定項目）**：固定を短く列挙すると、守るべき事項が少数で明確になり、IFScale のような指示過多による取りこぼしを避けられます。アクセシビリティは frontend-design の「品質の下限」と同じ扱いです。\[24\]
- **4行目（開放項目＋理由）**：「空白は意図的に決める」型の中核です。理由を書かせると、デフォルトを無自覚に選びにくくなります（Anthropic の「理由を添えると汎化する」の応用）。\[42\]
- **5行目（素材庫として扱う）**：CHI 2024 の固着研究（類推）と、UIDEC の「構造だけ参考」に基づきます。作例の効果（GameUIAgent）は残しつつ、写すことは防ぎます。
- **6行目（禁止＋代替）**：決まり文句を名指しするのは4つまでにとどめ、必ず代替手段とセットにしています（NEVER/INSTEAD 型）。ironic rebound のリスクを下げるため、禁止語の羅列は避けています。
- **7行目（和欧混植）**：この行は今回の調査で出典を確認できていません。日本語組版の一般的な実務慣行に基づく提案です。行間の数値や書体は自社の組版規定で置き換えてください。
- **8行目（大胆さは1か所）**：frontend-design の「大胆さは1か所に、周囲は静かに」と、Chanel の「アクセサリーを1つ外す」の助言に対応します。\[24\]無難化と過剰装飾の両方を防ぎます。
- **9行目（差し替えテスト）**：frontend-design の「似たプロンプトで同じ所に着地しないか確認せよ」を、ブランド文脈に翻訳した自己批評です。\[24\]
- **10行目（確認）**：固定項目を守らせつつ、ユーザーの明示的な指示が優先される場合（frontend-design の「ブリーフの言葉が常に優先」）との衝突を、確認という手順で解消します。\[24\]

## Recommendations

1. **ブランドキットの冒頭に、上の10行を置いてください**。規定・禁止事項の章より前に置き、末尾の依頼テンプレートで固定項目を1行だけ再掲します。
2. **素材庫は「役割」と「使う場面」を付けて書いてください**。例は次のとおりです。
   - 「#XXXXXX：主役。見出しの帯、主要ボタン。面積は画面の10〜20%」
   - 「写真：自然光、人物は横顔か手元」
   単なる hex の羅列は、Anthropic のいう「低高度」の指示にとどまります。
3. **作例は3〜5点、意図的に幅を持たせて渡してください**。Anthropic のプロンプト指針は、例を3〜5個、多様に、`<example>` タグで指示と区別することを勧めています。各作例に「何を参考にすべきか（余白の取り方、写真のトーンなど）」を注記します。\[42\]
4. **禁止リストは「避ける→代わりに→理由」の3列表にしてください**。Impeccable のような決定的リンターを CI に入れ、言葉での禁止は最小限にします。\[43\]
5. **社内で小さな評価を回してください**。まだ直接検証がないためです。同じ依頼10件を「キットなし」「規則集のみ」「推奨構成」で生成し、デザイナー2名がブランドらしさ・個性・品質を盲検で評価します。Wetch の評価設計（ランダム抽出プロンプト、匿名化したA/B比較、複数の評価軸）が参考になります。LLM審判は最大主義に偏りがちだという\[25\] Bakaus の指摘があるので、最終判断は人間が行ってください。\[36\]
6. **多様性が欲しい場面（キャンペーン案出しなど）では、案を複数出させてから選んでください**。「方向性の異なる3案を、それぞれの狙いとともに」と依頼するのは Verbalized Sampling の考え方の応用で、1案だけ生成するよりモード崩壊を避けられます。\[44\]

## Caveats

- **直接検証の欠如**：「ガイドラインあり／なし」の個性を比較した研究は見つかっていません。本レポートの判定は、ベンダーの前後比較、隣接分野の査読研究（文章創作、人間の発想）、プレプリントからの推論です。
- **ベンダー主張の比重が大きい**：Anthropic、OpenAI、Impeccable（Bakaus）の主張はいずれも自社製品の文脈です。Bakaus は Anthropic のスキルを批判していますが、競合する立場にあります。Claude Design のシステムプロンプトは流出版で、公式文書ではありません。
- **モデル世代による変化**：IFScale（2025）と Arize（2026）の結果が大きく違うように、指示追従の限界は急速に動いています。「規則は少なく」は安全側の原則であり、\[33\]\[45\]上限の数値は固定的に受け取らないでください。
- **否定形の研究の範囲**：ironic rebound 研究は合成データ・英語のみ・対数確率による評価です。\[20\]拡散モデルの研究はネガティブプロンプト欄の仕組みに関するもので、LLMへの文章指示に直接当てはまるとは限りません。\[22\]
- **和文組版**：7行目の行間・字間の推奨は、今回の調査で英語圏の出典を確認できていない実務上の提案です。自社の既存組版規定を優先してください。
- **今回扱えなかった領域**：DesignArena などのUI生成アリーナ、Adobe Firefly のスタイル参照、Gamma／SlideSpeak のスライド生成の比較データ、PrototypeFlow のアブレーション数値は確認できていません。Midjourney の --sref は「スタイルは参照画像、内容はテキスト」という役割分担を公式に推奨していますが、ブランド文脈での定量比較は見つかりませんでした。\[46\]\[47\]

## 出典

1. [Improving frontend design through Skills | Claude by Anthropic](https://claude.com/blog/improving-frontend-design-through-skills)
2. [Why Your AI Keeps Building the Same Purple Gradient Website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
3. [Design Systems for AI Coding: Stop Getting Purple Gradients](https://www.braingrid.ai/blog/design-system-optimized-for-ai-coding)
4. [PromptHub Blog: The Complete Guide to GPT-4.1: Models, Performance, Pricing, and Prompting Tips](https://www.prompthub.us/blog/the-complete-guide-to-gpt-4-1-models-performance-pricing-and-prompting-tips)
5. [OpenAI publishes a prompting playbook that helps designers get better frontend results from GPT-5.4](https://the-decoder.com/openai-publishes-a-prompting-playbook-that-helps-designers-get-better-frontend-results-from-gpt-5-4/)
6. [Designing delightful frontends with GPT-5.4](https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4)
7. [GPT-5.4 UI generation is on another level. Official OpenAI prompt techniques｜こたぽん](https://note.com/cotapon/n/n1991ab1331d6?hl=en)
8. [The Effects of Generative AI on Design Fixation and Divergent Thinking](https://dl.acm.org/doi/full/10.1145/3613904.3642919)
9. [The Effects of Generative AI on Design Fixation and Divergent Thinking](https://dl.acm.org/doi/fullHtml/10.1145/3613904.3642919)
10. [Generative AI enhances individual creativity but reduces the collective diversity of novel content - UCL Discovery](https://discovery.ucl.ac.uk/id/eprint/10195027/)
11. [Generative AI enhances individual creativity but reduces the collective diversity of novel content](https://explore.openaire.eu/search/publication?pid=10.1126%2Fsciadv.adn5290)
12. [Verbalized Sampling: How to Mitigate Mode Collapse and Unlock LLM Diversity](https://arxiv.org/html/2510.01171v3)
13. [Verbalized Sampling: How to Mitigate Mode Collapse and Unlock LLM Diversity - Paper Detail](https://deeplearn.org/arxiv/641996/verbalized-sampling:-how-to-mitigate-mode-collapse-and-unlock-llm-diversity)
14. [Benchmarking Language Model Creativity: A Case Study ...](https://aclanthology.org/2025.naacl-long.141.pdf)
15. [CS4: Measuring the Creativity of Large Language Models Automatically by Controlling the Number of Story-Writing Constraints](https://arxiv.org/pdf/2410.04197)
16. [Design Theater: A Benchmark for Generative UI](https://arxiv.org/html/2607.22928v1)
17. [GameUIAgent: An LLM-Powered Framework for Automated Game UI Design with Structured Intermediate Representation](https://arxiv.org/html/2603.14724v1)
18. [Dancing With Chains: Ideating Under Constraints With UIDEC in UI/UX Design](https://arxiv.org/pdf/2501.18748)
19. [SpecifyUI: Supporting Iterative UI Design Intent Expression through Structured Specifications and Generative AI](https://arxiv.org/html/2509.07334v1)
20. [Don't Think of the White Bear: Ironic Negation in Transformer Models Under Cognitive Load](https://arxiv.org/pdf/2511.12381)
21. [Do not think about pink elephant!](https://arxiv.org/pdf/2404.15154)
22. [Understanding the Impact of Negative Prompts: When and How Do They Take Effect?](https://link.springer.com/chapter/10.1007/978-3-031-73024-5_12)
23. [VSF: Simple, Efficient, and Effective Negative Guidance in Few-Step Image Generation Models By Value Sign Flip](https://arxiv.org/pdf/2508.10931)
24. [skills/skills/frontend-design/SKILL.md at main · anthropics/skills](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
25. [Teaching Claude to Design Better: Improving Anthropic's Frontend Design Skill](https://www.justinwetch.com/blog/improvingclaudefrontend/)
26. [GPT-5.1 Prompting Guide](https://developers.openai.com/cookbook/examples/gpt-5/gpt-5-1_prompting_guide)
27. [GPT-5.2 Prompting Guide](https://developers.openai.com/cookbook/examples/gpt-5/gpt-5-2_prompting_guide)
28. [system\_prompts\_leaks/Anthropic/claude-design/claude-design.md at main · asgeirtj/system\_prompts\_leaks · GitHub](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Anthropic/claude-design/claude-design.md)
29. [claude design system prompt · GitHub](https://gist.github.com/hqman/f46d5479a5b663c282c94faa8be866de)
30. [Long context prompting tips - Claude Docs](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips)
31. [GPT-4.1 Prompting Guide](https://developers.openai.com/cookbook/examples/gpt4-1_prompting_guide)
32. [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/html/2307.03172v3)
33. [How Many Instructions Can LLMs Follow at Once? · Pith Review](https://pith.science/paper/2507.11538)
34. [Effective context engineering for AI agents \\ Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
35. [How to write a system prompt that actually works in practice](https://www.bespokeprompting.com/guides/how-to-write-a-system-prompt)
36. [Paul Bakaus: AI Models Can't Be Trusted to Judge Design Taste — Here's What Works Instead — BigGo Finance](https://finance.biggo.com/news/71cfafb357af64ab)
37. [GitHub - pbakaus/impeccable: The design language that makes your AI harness better at design. · GitHub](https://github.com/pbakaus/impeccable)
38. [Paul Bakaus on X: "Impeccable 2 (my take on the most effective way to make your AI harness better at design) dropped last week. But I was so busy working on the next iteration that I buried the lede a bit. So here's a detailed post on what's new and improved: 1. CLI: npx impeccable detect. Scans … / X](https://x.com/pbakaus/status/2044505743144194514)
39. [Improve frontend-design skill clarity and actionability by justinwetch · Pull Request #210 · anthropics/skills · GitHub](https://github.com/anthropics/skills/pull/210)
40. [The Dark Arts of Skill Engineering](https://x.com/pbakaus/article/2077114326985687525)
41. [Google's open-source DESIGN.md gives AI agents a prompt-ready blueprint for brand-consistent design](https://the-decoder.com/googles-open-source-design-md-gives-ai-agents-a-prompt-ready-blueprint-for-brand-consistent-design/)
42. [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
43. [Impeccable — AI Design Skills for Cursor & Claude Code — Web Developer](https://webdeveloper.com/tools/impeccable/)
44. [Verbalized Sampling: Turning Mode Collapse into Multiplicity](https://medium.com/@mcraddock/verbalized-sampling-turning-mode-collapse-into-multiplicity-78c5fea11570)
45. [Models got an order of magnitude better at following instructions in one year - Arize AI](https://arize.com/blog/llm-instruction-following-benchmark-2026/)
46. [Midjourney --sref Explained: Style References, Codes and Weights (2026)](https://www.prompt-architects.com/blog/214-style-references-in-midjourney-sref-explained)
47. [Mastering Midjourney Style Reference: How to Control Any Aesthetic Like a Pro?](https://midjourneyai.online/midjourney-style-reference/)
