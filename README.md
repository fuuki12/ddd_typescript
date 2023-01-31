# ddd_typescript

ddd_typescript

https://scrapbox.io/kawasima/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%A2%E3%83%87%E3%83%AB%E8%B2%A7%E8%A1%80%E7%97%87
型で業務上取り扱いの変わるデータの違いを表現しておくと、これを使う側の間違いをなくすことができるし、型そのものが業務知識

状況

- 3 つの状態掛け合わせ
  - タスクステータス
  - タスクの優先度
  - タスクの延期回数

アプローチ

- 状態ごとにクラスを用意する

メリット

- 型によって不整合なデータを防ぐことができる

デメリット

- Infra 層で DB の値からドメインオブジェクトを生成する際に分岐処理が必要
  - ドメイン層に再構成用ファクトリクラスを用意
