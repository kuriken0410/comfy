<h1 align="center">Webアプリケーション（Comfy）</h1>

![top_page](https://i.gyazo.com/d2926454a948049d5a7a8fa11eafcbfd.jpg)

## :globe_with_meridians: Comfyとは
* 部屋着を中心とした写真・テキストの投稿・共有ができるWebアプリケーションです。
* Trelloによるタスク管理

## :globe_with_meridians: 機能一覧
* ユーザーの新規登録/ログイン/ログアウト機能
* 投稿の一覧表示
* ページネーション機能(gem 'kaminari')
* 写真/テキストの投稿機能
* 投稿内容の編集/削除機能
* 投稿の詳細表示
* 投稿へのコメント機能
* 投稿の検索機能
* ユーザーマイページ

## :globe_with_meridians: 機能詳細
### ログイン関係（gem 'devise'を利用）  
1)nickname（9文字以下）,email,pwdの組み合わせでvalidationを実施。  
2)posts#index(root)ページは、application.html.hamlに - if user_signed_in? と書き、ログイン時、未ログイン時の表示を分けている（ログインボタンが異なる）。  
3)posts_controller に before_action :move_to_index, except: [:index, :show, :search] と記述し、未ログイン時に投稿しようとすると、index ページへ遷移するように設定している。（画面上では、そもそも投稿ボタンの設定自体が無い） 
<br>

### 投稿関連（コメント投稿機能を含む）   
1)indexページの投稿写真に表示される編集・削除ボタンについては、 renderファイルの _post.html.haml に、- if user_signed_in? && current_user.id == post.user_id と記述し、ログイン時、かつ投稿の user_id が, current_user と一致する投稿にのみ、表示される設定としている。  
2)投稿に表示されているニックネームには、user マイページへ遷移できるリンクボタンが設定されている。  
3)投稿詳細ページ（詳細ボタンをクリックすると遷移）に、コメント投稿機能を設置。  
①この実装に合わせて、postモデルとcommentモデル（一対多）、及びuserモデルとcommentモデル（一対多）にアソシエーションを定義（詳細はデータベース設計をご確認お願いします）。  
②comments_controllerのルーティングを、posts_controllerのルーティングの中にネストさせて、/posts/:post_id/commentsというルーティングを実現、post_idをcommentのparamsに追加。  
③show.html.hamlのコメント投稿関連部分に、 - if current_user と記述し、未ログイン状態でのコメント投稿ができないように設定。  
4)コメント投稿機能へ非同期通信を実装。JS（jQuery）を用いる。関連するファイルは、javascript/comment.js。投稿データ（form_with内のデータ）は、FormDataオブジェクトに格納。  
<br>

### テスト（Rspec）
１）ユーザー登録に関するテスト（単体テスト）。factory_botを活用し、以下の内容でテストを実施。 
* nicknameとemail、passwordとpassword_confirmationが存在すれば登録できること
* nicknameが空では登録できないこと
* emailが空では登録できないこと
* passwordが空では登録できないこと
* passwordが存在してもpassword_confirmationが空では登録できないこと
* nicknameが9文字以上であれば登録できないこと
* nicknameが8文字以下では登録できること
* 重複したemailが存在する場合登録できないこと
* passwordが6文字以上であれば登録できること
* passwordが5文字以下であれば登録できないこと
<br>

2）posts_controllerに関するテスト（単体テスト）。factory_botを活用し、以下の内容でテストを実施。 
* newアクションが動いたあとnew.html.hamlに遷移すること
* editアクションが動いたあとアクション内で定義されているインスタンス変数の値が期待したものになること
* editアクションをリクエストした後、edit.html.hamlに遷移すること
* indexアクションで定義している@postsは配列の形で取得されてくること
* indexアクションをリクエストした後、index.html.hamlに遷移すること
<br>

## :globe_with_meridians: 主な使用技術・言語・ツールなど
<a><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="70px;" /></a> <!-- rubyのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774548-731b2900-2fb4-11ea-99ba-565546c5acb4.png" height="60px;" /></a> <!-- RubyOnRailsのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="60px;" /></a> <!-- Hamlのロゴ -->
<a><<img src="https://user-images.githubusercontent.com/39142850/71774644-115bbe80-2fb6-11ea-822c-568eabde5228.png" height="60px" /></a> <!-- Scssのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774768-d064a980-2fb7-11ea-88ad-4562c59470ae.png" height="65px;" /></a> <!-- jQueryのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774786-37825e00-2fb8-11ea-8b90-bd652a58f1ad.png" height="60px;" /></a> <!-- AWSのロゴ -->
### ■ 言語

#### バックエンド
* Ruby 2.6.5

#### フロントエンド
* Haml 5.1.2
* Sass 3.7.4
* jquery-rails 4.4.0

### ■ フレームワーク
* Ruby on Rails 6.0.3.2
* BOOTSTRAP 4.2.1

### ■ データベース
* MySQL 5.6.50

### ■ インフラ
* AWS S3

### ■ デプロイ
* heroku 7.47.0
* https://comfy-kuri.herokuapp.com

### ■ コードレビューツール
* Sider
* Rubocop 0.92.0

## :globe_with_meridians: インストール方法
1.このリポジトリを複製<br>
`$ git clone https://github.com/kuriken0410/comfy.git`

2.インストールしたリポジトリに移動<br>
`$ cd comfy`

3.gemをアプリケーションに適用<br>
`$ bundle install`<br>

4.データベースの作成&反映<br>
`$ rails db:create`<br>
`$ rails db:migrate`<br>

5.アプリケーションの起動<br>
`$ rails s`<br>
:point_right:`http://localhost:3000`

## :page_facing_up: データベース設計

## ER図
![comｆｙ](https://gyazo.com/97f24ef339423a2cd9ef39fe224f83e9/raw)

## usersテーブル  
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :posts
- has_many :comments

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|post_id|integer|null: false, foreign_key: true|
### Association  
- belongs_to :post
- belongs_to :user  
