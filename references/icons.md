# アイコン

Google の Material Symbols を使う。Apache License 2.0 で、商用利用できる。ライセンス文は https://wealthpark-design-team.github.io/design-kit/assets/icons/LICENSE にある。コーポレートサイトも同じ系統（Material Symbols と、その前身の Material Icons）を使っている。

## ファイル

- 塗りあり: https://wealthpark-design-team.github.io/design-kit/assets/icons/filled/{名前}.svg
- 線のみ: https://wealthpark-design-team.github.io/design-kit/assets/icons/outlined/{名前}.svg
- どちらも 24px の正方形、太さ 400、色は黒 #1A1A1A。拡大しても劣化しない
- 塗りありと線のみのどちらを標準にするかは未定。コーポレートサイトは塗りあり、太さ 400 で使っている
- 1 つの制作物の中ではどちらかにそろえると統一感が出る

## 収録しているアイコンと用途の例

| 分類 | 名前 | 用途の例 |
|---|---|---|
| 操作 | arrow_forward | 次へ、矢印つきのリンク |
| 操作 | arrow_back | 戻る |
| 操作 | chevron_right | 一覧の行の右端、詳細へ |
| 操作 | chevron_left | 前へ |
| 操作 | close | 閉じる |
| 操作 | add | 追加、開く |
| 操作 | remove | 減らす、閉じる |
| 操作 | search | 検索 |
| 操作 | open_in_new | 外部サイトへのリンク |
| 操作 | download | ダウンロード、資料請求 |
| 不動産・会社 | home | 住まい、トップページ |
| 不動産・会社 | apartment | 集合住宅、物件 |
| 不動産・会社 | location_city | 街、エリア |
| 不動産・会社 | business | 会社、オフィスビル |
| 不動産・会社 | key | 鍵、入居、管理の受託 |
| お金・数字 | payments | 支払い、送金 |
| お金・数字 | account_balance | 銀行、金融機関 |
| お金・数字 | savings | 資産、貯蓄 |
| お金・数字 | receipt_long | 明細、収支報告 |
| お金・数字 | trending_up | 成長、上昇 |
| お金・数字 | leaderboard | 比較、ランキング |
| お金・数字 | pie_chart | 構成比 |
| お金・数字 | database | データ |
| 連絡 | chat | チャット、問い合わせ |
| 連絡 | mail | メール |
| 連絡 | call | 電話 |
| 連絡 | notifications | 通知、お知らせ |
| 連絡 | campaign | 告知、キャンペーン |
| 書類・日時 | description | 書類、契約書 |
| 書類・日時 | picture_as_pdf | PDF の資料 |
| 書類・日時 | calendar_month | 日付、予約、イベント |
| 書類・日時 | schedule | 時間、期限 |
| 人 | person | 個人、オーナー |
| 人 | groups | チーム、コミュニティ |
| 人 | handshake | 提携、契約 |
| 人 | support_agent | サポート窓口 |
| 人 | school | 研修、セミナー |
| 端末 | smartphone | スマホアプリ |
| 端末 | computer | PC、管理画面 |
| 端末 | devices | 複数の端末 |
| 状態 | info | 補足情報 |
| 状態 | help | ヘルプ、よくある質問 |
| 状態 | check_circle | 完了、できること |
| 状態 | warning | 注意 |
| 状態 | verified_user | 安全、セキュリティ |
| 状態 | lock | 非公開、ログイン |
| その他 | language | 言語、海外 |
| その他 | settings | 設定 |
| その他 | lightbulb | アイデア、ヒント |

表にないアイコンは https://fonts.google.com/icons で探す。名前はこの表と同じ書き方（小文字とアンダースコア）。

## Web で使う

ファイルを img で置くか、アイコンフォントを読み込む。フォントなら色とサイズを CSS で変えられる。

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0">
<style>
  .material-symbols-outlined { font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24; }
</style>
<span class="material-symbols-outlined" aria-hidden="true">apartment</span>
```

線のみにするときは `"FILL" 0` にする。上の値はコーポレートサイトの実装と同じ。

## スライド・文書で使う

- PowerPoint（Microsoft 365）は SVG をそのまま挿入でき、挿入後に「グラフィックの塗りつぶし」で色を変えられる
- Google スライドは SVG を挿入できない。https://fonts.google.com/icons で同じ名前のアイコンを選び、PNG でダウンロードして使う
- 文字と並べるときは、アイコンの高さを文字の高さとそろえると収まりがよい
