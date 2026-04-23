import './App.css'

function App() {
  return (
    <main className="policy-wrapper">
      <header className="policy-header">
        <h1>プライバシーポリシー / Privacy Policy</h1>
        <dl className="policy-meta">
          <dt>アプリ名</dt><dd>Routepia</dd>
          <dt>提供者</dt><dd>lizdev</dd>
          <dt>連絡先</dt><dd><a href="mailto:lizdev.contact@gmail.com">lizdev.contact@gmail.com</a></dd>
          <dt>最終更新日</dt><dd>2025-04-23</dd>
          <dt>発効日</dt><dd>2025-04-23</dd>
        </dl>
      </header>

      <article className="policy-body">

        <section>
          <h2>1. はじめに</h2>
          <p>Routepia（以下「本アプリ」）は、ユーザーが訪れた場所を地図上にビジュアル化することを目的とした Android / iOS 向けモバイルアプリケーションです。本プライバシーポリシーは、本アプリがどのような情報を取得し、どのように利用・保存・共有するかを説明します。</p>
          <p>本アプリを利用することで、本ポリシーに同意したものとみなされます。</p>
        </section>

        <section>
          <h2>2. 取得する情報</h2>

          <h3>2.1 位置情報（最も重要）</h3>
          <ul>
            <li><strong>種類</strong>: 緯度・経度（GPS / ネットワーク測位）</li>
            <li><strong>取得タイミング</strong>:
              <ul>
                <li>アプリ起動中（フォアグラウンド）</li>
                <li>アプリをバックグラウンドに置いている間</li>
                <li>画面オフ状態、およびユーザーが他のアプリを使用している間</li>
              </ul>
            </li>
            <li><strong>取得頻度</strong>: 約 1 秒ごと、または一定距離以上移動した時</li>
            <li><strong>目的</strong>:
              <ul>
                <li>ユーザーが訪れた場所をヒートマップとして可視化する</li>
                <li>訪問回数・面積などの統計を計算する</li>
              </ul>
            </li>
          </ul>

          <h3>2.2 通知権限</h3>
          <p>Android 13 以降で位置情報記録中の常駐通知を表示するために使用します。通知内容は「位置情報を記録中」の旨のみで、個人情報は含みません。</p>

          <h3>2.3 広告に関する情報（AdMob 経由）</h3>
          <p>本アプリは収益化のために Google AdMob を利用し、バナー広告を表示します。AdMob は広告配信・不正防止・効果測定のために以下の情報を自動的に取得する場合があります：</p>
          <ul>
            <li>広告 ID（Android Advertising ID / iOS IDFA）</li>
            <li>デバイス情報（OS バージョン、モデル名、言語設定等）</li>
            <li>IP アドレス</li>
            <li>アプリ内の広告操作ログ（広告の表示・クリック）</li>
          </ul>
          <p>これらは <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google のプライバシーポリシー</a>に従って取り扱われます。</p>

          <h3>2.4 収集しない情報</h3>
          <p>本アプリは、以下の情報を取得しません：</p>
          <ul>
            <li>氏名・メールアドレス・電話番号などの個人識別情報</li>
            <li>アカウント登録情報（本アプリにはアカウント機能がありません）</li>
            <li>連絡先・カレンダー・写真などの他のアプリデータ</li>
            <li>カメラ・マイク</li>
          </ul>
        </section>

        <section>
          <h2>3. 情報の利用目的</h2>
          <table>
            <thead>
              <tr><th>情報</th><th>利用目的</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>位置情報</td>
                <td>ヒートマップ描画、訪問統計の計算、ユーザー自身が閲覧するためのローカル履歴</td>
              </tr>
              <tr>
                <td>通知権限</td>
                <td>バックグラウンドでの位置情報記録中の常駐通知表示</td>
              </tr>
              <tr>
                <td>AdMob 関連情報</td>
                <td>広告配信・不正防止・広告パフォーマンス測定（Google が主体）</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>4. 情報の保存場所</h2>

          <h3>4.1 位置情報および訪問履歴</h3>
          <ul>
            <li><strong>すべてユーザーの端末内にのみ保存されます。</strong></li>
            <li>保存先: 端末内部の SQLite データベース（アプリのサンドボックス領域）</li>
            <li>開発者 / 第三者のサーバーには一切送信されません。</li>
            <li>ユーザーがアプリをアンインストールすると、保存された位置情報も端末から完全に削除されます。</li>
            <li>本アプリのメニューから「全データリセット」を実行すると、即座に削除されます。</li>
          </ul>

          <h3>4.2 AdMob 関連情報</h3>
          <p>Google のサーバー上で処理・保存されます。保存期間や保管方法は Google のポリシーに従います。開発者はユーザー個人を識別する情報にアクセスできません。</p>
        </section>

        <section>
          <h2>5. 第三者への提供</h2>
          <ul>
            <li>位置情報・訪問履歴は、いかなる第三者にも提供しません。</li>
            <li>広告配信に必要な情報は Google AdMob（Google LLC）が取得します。開発者がこれを再提供することはありません。</li>
            <li>法令に基づく正当な要請（裁判所命令等）があった場合を除き、端末外に情報が送信されることはありません。</li>
          </ul>
        </section>

        <section>
          <h2>6. バックグラウンドでの位置情報利用について</h2>
          <p>本アプリは、以下の理由でバックグラウンド位置情報（Android の <code>ACCESS_BACKGROUND_LOCATION</code>、iOS の "Always" 許可）を使用します：</p>
          <ul>
            <li><strong>用途</strong>: 画面を閉じている間、あるいは他のアプリを使用している間も、ユーザーが移動した経路をヒートマップに反映するため。</li>
            <li><strong>データの扱い</strong>: 取得した位置情報は<strong>端末内にのみ保存</strong>され、外部サーバーには送信しません。</li>
            <li><strong>停止方法</strong>: アプリ内メニューの「位置情報を記録」スイッチを OFF にすることで、いつでも記録を停止できます。停止中は常駐通知も消去されます。</li>
            <li><strong>通知</strong>: 記録中は必ず常駐通知を表示し、ユーザーが位置情報の取得状態を常に確認できるようにしています。</li>
          </ul>
        </section>

        <section>
          <h2>7. ユーザーの権利</h2>
          <ul>
            <li><strong>アクセス権</strong>: 保存されている位置情報は、本アプリの画面上（ヒートマップ、統計）でいつでも閲覧できます。</li>
            <li><strong>削除権</strong>:
              <ul>
                <li>アプリ内メニューの「全データリセット」により即時削除できます。</li>
                <li>アプリをアンインストールすると、端末内のすべての位置情報が完全に削除されます。</li>
              </ul>
            </li>
            <li><strong>記録停止権</strong>: アプリ内メニューの「位置情報を記録」スイッチで、いつでも記録を停止できます。</li>
            <li><strong>位置情報許可の撤回</strong>: OS（Android / iOS）の設定画面から、本アプリの位置情報許可をいつでも取り消せます。</li>
            <li><strong>広告 ID のリセット / オプトアウト</strong>: OS 設定の「広告 ID のリセット」またはパーソナライズ広告のオプトアウトが可能です。</li>
          </ul>
        </section>

        <section>
          <h2>8. データの安全性</h2>
          <ul>
            <li>位置情報は Android / iOS のアプリサンドボックス機能により、他のアプリからアクセスできない領域に保存されます。</li>
            <li>データの暗号化は、OS が提供する端末暗号化（Android: File-Based Encryption、iOS: Data Protection）に依存します。</li>
            <li>開発者は端末内のデータに一切アクセスできません。</li>
          </ul>
        </section>

        <section>
          <h2>9. 子どものプライバシー</h2>
          <p>本アプリは特定の年齢層をターゲットにしていませんが、13 歳未満（または居住地の法律で定められた年齢未満）の子どもから意図的に個人情報を収集することはありません。位置情報もサーバーに送信しないため、子どもの位置情報が外部に流出することはありません。</p>
        </section>

        <section>
          <h2>10. 本ポリシーの変更</h2>
          <p>本プライバシーポリシーは、機能追加や法令の改定等により予告なく変更することがあります。重要な変更がある場合は、アプリ内または本ドキュメントの公開ページで通知します。変更後も本アプリの利用を継続した場合、変更に同意したものとみなします。</p>
        </section>

        <section>
          <h2>11. お問い合わせ</h2>
          <p>本プライバシーポリシーに関するご質問・ご要望は、以下までご連絡ください：</p>
          <ul>
            <li>メール: <a href="mailto:lizdev.contact@gmail.com">lizdev.contact@gmail.com</a></li>
          </ul>
        </section>

        <section className="english-summary">
          <h2>12. English Summary</h2>
          <p>This application ("Routepia") collects GPS location data on the user's device to visualize visited places as a heatmap. All location data is stored <strong>only on the user's device</strong> and is <strong>never transmitted to any external server</strong>. Background location access is used to record the user's path while the app is not in the foreground; users can stop recording at any time via the in-app switch, and a persistent notification is always shown while recording is active. The app displays ads via Google AdMob, which may collect advertising identifiers according to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. No personal identifiers (name, email, phone) are collected. Users can delete all stored data by using the in-app reset function or by uninstalling the app.</p>
          <p>For questions, contact: <a href="mailto:lizdev.contact@gmail.com">lizdev.contact@gmail.com</a></p>
        </section>

      </article>
    </main>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
