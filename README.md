# node-red-kuromoji

A Node-RED node of Japanese morphological analyzer  
Mainly assumes the running at Node-RED on the IBM Bluemix.

About Kuromoji.js, please check the following site.  
https://github.com/takuyaa/kuromoji.js


## How to Install

Run the following command in the root directory of your Node-RED install

```
npm install node-red-kuromoji
```

## How to Use

### Kuromoji Tokenizer Node settings are as follows:

Node configuration is nothing.   
If you enter a String to Input Payload, analysis result JSON is output.


### If you want to customize the dictionary of Kuromoji:

Kuromoji dictionary directory is the following.  
If you want to customize the dictionary, please customize the dictionary in this directory.
```
node-red-kuromoji/node_modules/kuromoji/dist/dict
```


## Copyright and license

Copyright (c) 2016 Kota Suizu  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php
