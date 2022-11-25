# アプリケーション名
指示値読み取りアプリ

# アプリケーション概要
現場型計器の画像から値を読み取ることができる。

# URL
http://

# テスト用アカウント
・Basic認証ID：ivp2admin  
・Basic認証パスワード：ivp2admin

# 利用方法
・画像をファイルから選ぶか、カメラを起動し撮影する  
・画像から読み取った値がテキスト内に入力されているか確認する  
・チェックボックスのいずれかを選択する  
・「保存する」ボタンを押し、保存する

# アプリケーションを作成した背景
アナログメータを作業員が読み取り・記録しているが、現場での作業時間削減や、記入モレ＆誤記をなくすために作成した。  
[![Image from Gyazo](https://i.gyazo.com/e929e3fb1d32417ffe26d0fc2ea51c1a.png)](https://gyazo.com/e929e3fb1d32417ffe26d0fc2ea51c1a)

# 洗い出した要件
[要件定義シート](https://docs.google.com/spreadsheets/d/1OfVnfMn3xicJdfNOWnvwagiJ2g-e1j8dqMf1R05AAqk/edit#gid=982722306)

# 実装した機能についての画像やGIFおよびその説明
[![Image from Gyazo](https://i.gyazo.com/b54d98b0b6b4cdd3c1926a8ed94cd598.png)](https://gyazo.com/b54d98b0b6b4cdd3c1926a8ed94cd598) . 
・画像をファイルから選ぶか、カメラを起動し撮影する  
・画像から読み取った値がテキスト内に入力されているか確認する  
・チェックボックスのいずれかを選択する  
・「保存する」ボタンを押し、保存する

# 実装予定の機能
今後は、値の検索機能実装予定

# データベース設計
[![Image from Gyazo](https://i.gyazo.com/664ab9cf3a9b03764fc8711ae2860075.png)](https://gyazo.com/664ab9cf3a9b03764fc8711ae2860075)

# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/26746cc40fdb6d564239c0a5413595ff.png)](https://gyazo.com/26746cc40fdb6d564239c0a5413595ff)

# 開発環境
・ruby 2.6.5  
・Rails 6.0.6  
・Visual Studio Code  
・Active Storage  
・jquery  

# ローカルでの動作方法
% git clone https://github.com/kawara-ite/ivp2_app.git  
% cd ivp2_app  
% bundle install  
% yarn install  
% yarn add jquery