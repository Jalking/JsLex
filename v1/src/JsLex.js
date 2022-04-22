//JsLex
//Author: Chisom Ukeh(Jalking)
//created in N days

function JsLex(input){
  var pos = 0, //pos
      tokens = [], //tokens
      rules = []; //rules
  
  return {
    //lex
    //getTokens long as !isAtEndOfFile()
    lex: function(){
      while(!isAtEndOfFile()){
        tokens.push(getTokens());
        break;
        }
      
      //check if there are still characters
      //if the check returns true, it means some character don't has a match rule
      //throw error then
      if(!isAtEndOfFile()){
        throw new  Error("no match rules for "+ peek());
        }
      
      //return tokens
      return tokens;
      },
    
    addRules
    };
  
  //readWhile
  //read a stream of character as long the condition is true
  //require 1 parameter(function)
  function readWhile(condi){
    var lexeme ="";
    while(!isAtEndOfFile() && condi(peek())){
      lexeme = lexeme+advance();
      }
    
    return {
      type:new condi().name,
      value: lexeme
      };
    }
  
  //getTokens
  //iterate over the rules and tokenize the match character
  function getTokens(){
    for(var i = 0; i < rules.length; i++){
      return readWhile(rules[i]);
      }
    }
  
  //isAtEndOfFile
  //return true otherwise false if no more character in stream
  function isAtEndOfFile(){
    return peek() == "";
    }
  
  //peek
  //return the current character without consuming it
  function peek(){
    return input.charAt(pos);
    }
  
  //advance
  //return the current character and consume it
  function advance(){
    return input.charAt(pos++);
    }
  
  //addRules
  //require 1 parameter which must be a function
  function addRules(func){
    //chck func
    if(func instanceof Function){
      rules.push(func);
      return;
      }
    
    //trow error if the rules is not a function
    throw new Error(func + " " + "must be function");
    }
  }

//exporting.....
module.exports = JsLex;

