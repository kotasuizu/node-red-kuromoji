/**
* Copyright (c) 2016 Kota Suizu
* Released under the MIT license
* http://opensource.org/licenses/mit-license.php
**/

module.exports = function(RED) {
    "use strict";
    var KuromojiHelper = require('./KuromojiHelper.js');
    var helper = new KuromojiHelper();


    // Kuromoji Tokenizer-Node NodeIO処理
    function KuromojiTokenizer(n) {
        RED.nodes.createNode(this, n);

        var node = this;
        this.on('input', function(msg) {
            if (_isTypeOf('String', msg.payload)) {
                // tokenizer.tokenize に文字列を渡すと、その文を形態素解析してくれます。
                helper.toTokenize(msg.payload.toString(), function(tokens) {
                    msg.payload = tokens;
                    node.send(msg);
                    node.log(RED._('Succeeded to tokenize.'));
                });
            } else {
                node.error("Failed to tokenize. Payload is not String.");
            }
        });
    }
    RED.nodes.registerType("Kuromoji Tokenizer", KuromojiTokenizer);

    function _isTypeOf(type, obj) {
        var clas = Object.prototype.toString.call(obj).slice(8, -1);
        return obj !== undefined && obj !== null && clas === type;
    }
}
