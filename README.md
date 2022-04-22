# JsLex
A lexical analyzer tool

##test
first:
import JsLex to the js file you intend to use and initialize it

```javascript
var jsLex = require("JsLex");

jsLex = jsLex("abc");
```

second:
add create and add the rules for the token you like to match

```javascript
jsLex.addRule(function(ch){
    this.name = "IDENTIFIER"; //token name
    return /[a-zA-z]/.test(ch);

   //ch represent the current character in stream
   });
```

addRules() parameter must be a function

third:
call the lex() method on the jsLex object to get the tokenize tokens

```javascript
console.log(jsLex.lex());
//output:
//abc
```






