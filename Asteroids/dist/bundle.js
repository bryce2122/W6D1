/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {


  function movingObject(optionsObj) {
    this.xpos = optionsObj['pos'][0];
    this.ypos = optionsObj['pos'][1];
    this.xvel = optionsObj['vel'][0];
    this.yvel = optionsObj['vel'][1];
    this.radius = optionsObj['radius'];
    this.color = optionsObj['color'];
  }

  movingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.xpos,this.ypos, this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

  };

  movingObject.prototype.move = function() {
    this.xpos = 100;
    // this.ypos += this.yvel;
  };

  module.exports = movingObject;

// let hash = { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" };
// let circle = movingObject(hash);
// circle.draw(ctx);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(3);
const Gameview = __webpack_require__(6);

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("myCanvas");
  const asteroidContext = canvas.getContext("2d");
  let gameview = new Gameview(new Game(), canvas);
  gameview.start();
  });


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let movingObject = __webpack_require__(1);
let Asteroid = __webpack_require__(4);


function Game() {
  const DIM_X = 0;
  const DIM_Y = 0;
  const NUM_ASTEROIDS = 0;
  this.asteroidArray = [];

}

Game.prototype.addAsteroids = function() {
  const asteroidArray = [];
  for(let i = 0;i < 30;i++) {
    let x = Math.floor((Math.random() * 100) + 1);
    let y = Math.floor((Math.random() * 100) + 1);
    asteroidArray.push(new Asteroid([x,y]));
  }


  this.asteroidArray = asteroidArray;

};

Game.prototype.draw = function(ctx, canvas) {
  // ctx.beginPath();
  // ctx.arc(20, 10, 40, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();


 let circle = new Asteroid([30,30]);
 circle.draw(ctx);
  // let raw = new movingObject([5,20]);
  // raw.draw(ctx);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // this.asteroidArray.forEach(el => {
  //   el.draw(ctx);
  // });
};

Game.prototype.movingObjects = function(ctx) {
  this.asteroidArray.forEach(el => {
    el.move();
  });
};




  module.exports = Game;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let MovingObject = __webpack_require__(1);
let util = __webpack_require__(5);

function Asteroid(pos) {

  this.radius = 10;
  this.color = 'grey';
  this.xpos = pos[0];
  this.ypos = pos[1];
  this.xvel = 10;
  this.yvel = 10;
}
util.inherits(Asteroid, MovingObject);
// window.Asteroid = Asteroid;

module.exports = Asteroid;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Util = {
  inherits: function(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.contructor = childClass;
  },
  randomVec: function(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  scale: function(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;


/***/ }),
/* 6 */
/***/ (function(module, exports) {


function gameview(game) {
  this.game = game;
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
}

gameview.prototype.start = function() {
  setInterval(this.game.draw(this.ctx, this.canvas), 20);
  setInterval(this.game.moveObjects, 20);
};

module.exports = gameview;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map