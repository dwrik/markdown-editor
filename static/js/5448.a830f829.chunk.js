"use strict";(self.webpackChunkmarkdown_editor=self.webpackChunkmarkdown_editor||[]).push([[5448],{5448:function(e,t,n){function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{modelica:function(){return z}});var o=r("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"),i=r("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"),a=r("Real Boolean Integer String"),l=[].concat(Object.keys(o),Object.keys(i),Object.keys(a)),u=/[;=\(:\),{}.*<>+\-\/^\[\]]/,s=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,c=/[0-9]/,k=/[_a-zA-Z]/;function f(e,t){return e.skipToEnd(),t.tokenize=null,"comment"}function p(e,t){for(var n,r=!1;n=e.next();){if(r&&"/"==n){t.tokenize=null;break}r="*"==n}return"comment"}function m(e,t){for(var n,r=!1;null!=(n=e.next());){if('"'==n&&!r){t.tokenize=null,t.sol=!1;break}r=!r&&"\\"==n}return"string"}function d(e,t){for(e.eatWhile(c);e.eat(c)||e.eat(k););var n=e.current();return!t.sol||"package"!=n&&"model"!=n&&"when"!=n&&"connector"!=n?t.sol&&"end"==n&&t.level>0&&t.level--:t.level++,t.tokenize=null,t.sol=!1,o.propertyIsEnumerable(n)?"keyword":i.propertyIsEnumerable(n)?"builtin":a.propertyIsEnumerable(n)?"atom":"variable"}function b(e,t){for(;e.eat(/[^']/););return t.tokenize=null,t.sol=!1,e.eat("'")?"variable":"error"}function h(e,t){return e.eatWhile(c),e.eat(".")&&e.eatWhile(c),(e.eat("e")||e.eat("E"))&&(e.eat("-")||e.eat("+"),e.eatWhile(c)),t.tokenize=null,t.sol=!1,"number"}var z={name:"modelica",startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(e,t){if(null!=t.tokenize)return t.tokenize(e,t);if(e.sol()&&(t.sol=!0),e.eatSpace())return t.tokenize=null,null;var n=e.next();if("/"==n&&e.eat("/"))t.tokenize=f;else if("/"==n&&e.eat("*"))t.tokenize=p;else{if(s.test(n+e.peek()))return e.next(),t.tokenize=null,"operator";if(u.test(n))return t.tokenize=null,"operator";if(k.test(n))t.tokenize=d;else if("'"==n&&e.peek()&&"'"!=e.peek())t.tokenize=b;else if('"'==n)t.tokenize=m;else{if(!c.test(n))return t.tokenize=null,"error";t.tokenize=h}}return t.tokenize(e,t)},indent:function(e,t,n){if(null!=e.tokenize)return null;var r=e.level;return/(algorithm)/.test(t)&&r--,/(equation)/.test(t)&&r--,/(initial algorithm)/.test(t)&&r--,/(initial equation)/.test(t)&&r--,/(end)/.test(t)&&r--,r>0?n.unit*r:0},languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},autocomplete:l}}}}]);
//# sourceMappingURL=5448.a830f829.chunk.js.map