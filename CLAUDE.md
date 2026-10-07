# CLAUDE.md

規約は `AGENTS.md` が正本。ここには Claude Code 固有の事項だけ書く。

@AGENTS.md

## Claude Code 固有

- 自動モードでは `git push` が「公開」として止められることがある。止まったら言い換えて再試行せず、push コマンドを提示してユーザーに実行を依頼する
- ユーザー固有の設定（アカウント、SSH エイリアス、引き継ぎメモ）は `CLAUDE.local.md`（git 管理外）にある
