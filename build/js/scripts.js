!function t(i,n,r){function o(s,c){if(!n[s]){if(!i[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(e)return e(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[s]={exports:{}};i[s][0].call(p.exports,function(t){var n=i[s][1][t];return o(n?n:t)},p,p.exports,t,i,n,r)}return n[s].exports}for(var e="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,i,n){var r=function(t){this.entity=t};r.prototype.draw=function(){console.log("Drawing a bird")},n.BirdGraphicsComponent=r},{}],2:[function(t,i,n){var r=t("../components/graphics/bird"),o=function(){console.log("Creating Bird Entity");var t=new r.BirdGraphicsComponent(this);this.components={graphics:t}};n.Bird=o},{"../components/graphics/bird":1}],3:[function(t,i,n){var r=t("./systems/graphics"),o=t("./entities/bird"),e=function(){this.entities=[new o.Bird],this.graphics=new r.GraphicsSystem(this.entities)};e.prototype.run=function(){this.graphics.run()},n.FlappyBird=e},{"./entities/bird":2,"./systems/graphics":5}],4:[function(t,i,n){$(function(){$("#bird").velocity({translateY:"-100vh"},0,function(){$("#bird").css({visibility:"visible"}).velocity({translateY:"0"},{duration:2500,easing:"ease-out"})}),$("#howTo-button").velocity("transition.slideLeftIn",{duration:3500}),$("#play-button").velocity("transition.slideRightIn",{duration:3500}).click(function(){$("#intro").hide(),$("#game").show()});var i=t("./flappy-bird");console.log(i),document.addEventListener("DOMContentLoaded",function(){var t=new i.FlappyBird;t.run()})})},{"./flappy-bird":3}],5:[function(t,i,n){var r=function(t){this.entities=t};r.prototype.run=function(){console.log("Running");for(var t=0;5>t;t++)this.tick()},r.prototype.tick=function(){for(var t=0;t<this.entities.length;t++){var i=this.entities[t];"graphics"in i.components&&i.components.graphics.draw(this.context)}},n.GraphicsSystem=r},{}]},{},[4]);