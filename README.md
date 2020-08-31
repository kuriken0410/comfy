# README

<h1 align="center">フリーマーケットサイト</h1>

## アプリケーション概要
* フリーマーケット用のWebアプリです。５人のチームでアジャイル開発を行いました。
* 作成期間： 2020/8/4 〜 2020/8/26
* - ![top_page](https://gyazo.com/eefeaf33a0a7cddf32a078460e93b02d/raw)

## 機能一覧
- ユーザー登録、ログイン機能（ウィザード形式）
- ユーザー登録、ログインがお済みでない方も商品の一覧、詳細を閲覧可能です。
- 商品出品機能（画像や商品カテゴリを含めた複数項目の情報をDBへ登録）
- 商品購入機能（ユーザーが所持するクレジットカードを用いて商品の購入）
- クレジットカード登録機能（PayJp）

## 主な使用技術
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

### ■ データベース
* MySQL 5.6.47

### ■ インフラ
* AWS EC2
* AWS S3

### ■ デプロイ
* Capistranoによる自動デプロイ

## :globe_with_meridians: インストール方法
1.このリポジトリを複製<br>
`$ git clone https://github.com/kuriken0410/fleamarket_sample_80a`

2.インストールしたリポジトリに移動<br>
`$ cd fleamarket_sample_80a.git`

3.gemをアプリケーションに適用<br>
`$ bundle install`<br>

4.DBの作成&反映<br>
`$ rails db:create`<br>
`$ rails db:migrate`<br>

5.カテゴリ一覧の反映<br>
`$ rails db:seed`<br>

6.アプリケーションの起動<br>
`$ rails s`<br>
:point_right:`http://localhost:3000`

# :page_facing_up: DB設計

## ER図
![Fleamarket_sample_80a](https://user-images.githubusercontent.com/63842526/91152535-09de5680-e6fa-11ea-95e3-b4273edfb7ac.jpg)

## usersテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|nickname|string|null:false|
|email|string|null:false|
|password|string|null:false|
|password_confirm|string|null:false|
|first_name|string|null:false|
|last_name|string|null:false|
|first_name_kana|string|null:false|
|last_name_kana|string|null:false|
|birthday|date||
### Association
* has_many :products, dependent:delete_all
* has_one :address,dependent:delete

## addessesテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|user_id|reference|null:false, foreign_key:true|
|postal_code|string|null:false|
|prefecture_id|integer|null:false,foreign_key:true|
|municipality|string|null:false|
|block_number|string|null:false|
|apartment_name|string||
### Association
* belongs_to :user

## cardsテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|user_id|integer|null:false, foreign_key:true|
|customer_id|string|null:false|
|card_id|string|null:false|
### Associtation
* belongs_to :user

## productsテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|name|string|null:false|
|price|integer|null:false|
|send_price|integer|null:false|
|description|text|null:false|
|condition|integer|null:false|
|brand|string||
|status|integer|null:false|
|ship_day|string|null:false|
|category_id|integer|null:false|
### Association
* has_many :images
* belongs_to :user
* belongs_to :category

## imagesテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|image|string|null:false|
|product_id|reference|null:false, foreign_key:true|
### Associtation
* belongs_to :product

## categoriesテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|name|string|null:false|
|ancestry|string|null: false|
### Association
* has_many :products
* has_ancestry

## contractsテーブル
|Column|Type|Options|
|:-----|:--:|------:|
|user_id|integer|null:false, foreign_key:true|
|product_id|integer|null: false, foreign_key:true|
### Association
* belongs_to :product
* belongs_to :user















# README

## 概要
Rails練習用アプリケーション

## 仕様
CRUDに基づいた記事投稿型App
- 記事一覧・詳細表示
- 記事編集・削除
- ユーザー登録・編集
- コメント

# Pictweet DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :tweets
- has_many :comments

## tweetsテーブル
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
|tweet_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :tweet
- belongs_to :user





# DB設計

## tweetsテーブル
|Column|Type|Option|
|------|----|------|
|id|integer(11)|null: false, AI|
|text|text||
|user_id|integer(11)|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :comments
- has_many :photos

## usersテーブル
|Column|Type|Option|
|------|----|------|
|id|integer(11)|null: false, AI|
|nickname|varchar(255)|null: false|
|email|varchar(255)|null: false|
|password|varchar(255)|null: false|

### Association
- has_many :tweets
- has_many :comments

## commentsテーブル
|Column|Type|Option|
|------|----|------|
|id|integer(11)|null: false, AI|
|text|text||
|user_id|integer(11)|null: false|
|tweet_id|integer(11)|null: false|

### Association
- belongs_to :tweets
- has_many :comments




# pictweet README
# 概要
TECH::EXPERT短期集中コースのカリキュラム内で最初に作成した、簡易twitter型ウェブApp。簡易ではあるが、MVCモデルに基づいた各種機能を網羅。応用カリキュラムに入ってからはコメント投稿時の非同期通信を追加実装、また、単体テストを実施している。フロントサイドは全て用意されたものを使用。したがって本件でマークアップは実行していない。  

## デプロイ先について
URL：https://pictweet8686.herokuapp.com/    
【サインアップ画面】  
![サインアップ画面](https://user-images.githubusercontent.com/56028886/72418344-fceda200-37bd-11ea-8b47-64021e72ab65.png)  
【ログイン画面】  
![サインイン画面](https://user-images.githubusercontent.com/56028886/72418345-fceda200-37bd-11ea-9fd2-9b2b0012517a.png)  
## example user 情報  
### user1:  
email:abcdf@yahoo.co.jp  
pwd: 1234567yy  
nickname: moon  
### user2：  
email:sunlight@gmail.com  
pwd: 1234567yy  
nickname: sunny  
## バージョン情報  
 Rails 5.2.3  
 ruby 2.5.1  
  
# DB設計  
## usersテーブル  
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :tweets
- has_many :comments

## tweetsテーブル
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
|tweet_id|integer|null: false, foreign_key: true|
### Association  
- belongs_to :tweet  
- belongs_to :user  
  
# 機能  
## ログイン関係（gem 'devise'を利用）  
1)nickname（6文字以上）,email,pwdの組み合わせでvalidationを実施。  
2)tweets#index(root)ページは、application.htmlに<% if user_signed_in? %>と書き、ログイン時、未ログイン時の表示を分けている（ログインボタンが異なる）。  
①ログイン状態：  
![ログイン状態](https://user-images.githubusercontent.com/56028886/72418346-fceda200-37bd-11ea-97c2-d3598f45d528.png)  
②未ログイン状態：  
![未ログイン状態](https://user-images.githubusercontent.com/56028886/72418348-fceda200-37bd-11ea-9e22-066178857fd6.png)  
3)tweets_controller に before_action :move_to_index, except: [:index, :show] と記述し、未ログイン時に投稿しようとすると、index ページへ飛ぶように設定している。（画面上では、そもそも投稿ボタンの設定自体が無い）  
## Tweet 関連（コメント投稿機能を含む）   
1)indexページの投稿写真に表示されるツイート削除ボタンについては、 renderファイルのtweet.html.erb に、<% if user_signed_in? && current_user.id == tweet.user_id %>と記述し、ログイン時、かつ投稿のuser_id が,current_userと一致する投稿にのみ、表示される設定としている。  
【ログイン状態（ユーザ自身の投稿）】  
![ログイン状態（ユーザー自身の投稿）](https://user-images.githubusercontent.com/56028886/72418636-8b622380-37be-11ea-9000-1b7fca661cf5.png)  

2)投稿した写真右下に表示されているニックネームには、user マイページへ遷移できるリンクが設定されている。  
【未ログイン状態】   
![未ログイン状態（投稿）](https://user-images.githubusercontent.com/56028886/72418638-8bfaba00-37be-11ea-881d-018af1261768.png)  

3)投稿詳細ページ（詳細ボタンをクリックすると遷移）に、コメント投稿機能を設置。  
①この実装に合わせて、tweetモデルとcommentモデル（一対多）、及びuserモデルとcommentモデル（一対多）にアソシエーションを定義（詳細はDB設計をご確認お願いします）。  
②comments_controllerのルーティングを、tweets_controllerのルーティングの中にネストさせて、/tweets/:tweet_id/commentsというルーティングを実現、tweet_idをcommentのparamsに追加。  
③show.html.erbのコメント投稿関連部分に、 <% if current_user %> と記述し、未ログイン状態でのコメント投稿ができないように設定。  
4)コメント投稿機能へ非同期通信を実装。これが初めてAppに実装した非同期通信。JS（jQuery）を用いる。関連するファイルは、javascripts/comment.js。  
投稿データ（form_tag内のデータ）は、FormDataオブジェクトに格納。  
## User 関連  
１）ユーザー登録に関するテスト（単体テスト）を実施。factory_botを活用し、以下の内容（一部抜粋）で  
テストを行う。  
①nicknameとemail、passwordとpassword_confirmationが存在すれば登録できること。  
②nicknameが空では登録できないこと。  
③passwordが空では登録できないこと。  
  
以上です。  


