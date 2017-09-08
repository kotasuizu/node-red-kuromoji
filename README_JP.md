# node-red-kuromoji

Kuromoji.jsを用いた形態素解析を行います。

Kuromoji.jsについては、以下サイトをご確認ください。  
https://github.com/takuyaa/kuromoji.js

## How to Install

インストール方法は以下サイトをご確認ください。  
https://nodered.org/docs/getting-started/adding-nodes  
(Japanese) https://nodered.jp/docs/getting-started/adding-nodes  

## How to Use

### Nodeの設定は、、、

Nodeの設定は特にありません。  
NodeInputのpayloadに形態素解析したいStringを入力すると、Outputとして解析結果のJSONが返却されます。

### Kuromojiの辞書は、、、

依存するKuromoji配下のdictディレクトリにある辞書を使用します。  
```
node_modules/kuromoji/dict
```


## Copyright and license

Copyright (c) 2016, 2017 Kota Suizu  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php
