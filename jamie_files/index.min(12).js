!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).httputil=n()}}(function(){return function(){function n(e,o,t){function r(u,f){if(!o[u]){if(!e[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var d=o[u]={exports:{}};e[u][0].call(d.exports,function(n){return r(e[u][1][n]||n)},d,d.exports,n,e,o,t)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)r(t[u]);return r}return n}()({1:[function(n,e,o){(function(){e.exports=function(n,e,o){var t;return e?document.cookie=n+"="+e+(o?";expires="+o:""):(t={},(document.cookie||"").split(";").map(function(n){return n.split("=").map(function(n){return n.trim()})}).map(function(n){return t[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}),n?t[n]:t)}}).call(this)},{}],2:[function(n,e,o){(function(){var o,t;o=n("./cookie"),t=n("./qs"),e.exports={cookie:o,qs:t}}).call(this)},{"./cookie":1,"./qs":3}],3:[function(n,e,o){(function(){var n;n={},e.exports=function(e){var o,t,r;return"object"==typeof e?"?"+function(){var n,r=[];for(o in n=e)t=n[o],r.push([o,t]);return r}().map(function(n){return encodeURIComponent(n[0])+"="+encodeURIComponent(n[1])}).join("&"):((r=n.querystring)||(n.querystring=r={},(window.location.search||"").replace(/^\?/,"").split("&").map(function(n){return decodeURIComponent(n).split("=")}).map(function(n){return r[n[0]]=n[1]})),e?r[e]:r)}}).call(this)},{}]},{},[2])(2)});
