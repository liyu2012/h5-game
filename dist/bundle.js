/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ane = exports.bg = exports.deltaTime = exports.lastTime = exports.my = exports.mx = exports.h = exports.w = exports.pen2 = exports.pen1 = exports.c2 = exports.c1 = undefined;

var _ane = __webpack_require__(1);

var _fruit = __webpack_require__(3);

var _bg = __webpack_require__(2);

var _mom = __webpack_require__(4);

var c1 = void 0,
    c2 = void 0,
    pen1 = void 0,
    pen2 = void 0,
    w = void 0,
    h = void 0,
    lastTime = void 0,
    deltaTime = void 0,
    mx = void 0,
    my = void 0;
var bg = void 0;
var ane = void 0;
var fruit = void 0;
var mom = void 0;
exports.c1 = c1;
exports.c2 = c2;
exports.pen1 = pen1;
exports.pen2 = pen2;
exports.w = w;
exports.h = h;
exports.mx = mx;
exports.my = my;
exports.lastTime = lastTime;
exports.deltaTime = deltaTime;
exports.bg = bg;
exports.ane = ane;


function gameStart() {
    init();
    exports.lastTime = lastTime = Date.now();
    exports.deltaTime = deltaTime = 0;
    gameloop();
}

function onMove(e) {
    if (e.offsetX) {
        exports.mx = mx = e.offsetX;
        exports.my = my = e.offsetY;
    }
    // console.log(mx)
}

function init() {
    exports.c1 = c1 = document.getElementById('c1');
    exports.c2 = c2 = document.getElementById('c2');
    exports.pen1 = pen1 = c1.getContext('2d');
    exports.pen2 = pen2 = c2.getContext('2d');
    c1.addEventListener('mousemove', onMove, false);
    exports.w = w = c1.width;
    exports.h = h = c1.height;
    exports.mx = mx = w / 2;
    exports.my = my = h / 2;
    exports.bg = bg = new Image();
    bg.src = "./img/background.jpg";
    (0, _bg.background)();
    exports.ane = ane = new _ane.AneObj();
    ane.init();
    fruit = new _fruit.Fruit();
    fruit.init();
    mom = new _mom.MomFish();
    mom.init();
}

function gameloop() {
    window.requestAnimationFrame(gameloop);
    var now = new Date();
    exports.deltaTime = deltaTime = now - lastTime;
    exports.lastTime = lastTime = now;
    ane.draw();
    pen1.clearRect(0, 0, w, h);
    fruit.draw();
    mom.draw();

    //console.log(deltaTime)

}
gameStart();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AneObj = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AneObj = exports.AneObj = function () {
    function AneObj() {
        _classCallCheck(this, AneObj);

        this.x = [];
        this.len = [];
        this.num = 40;
    }

    _createClass(AneObj, [{
        key: 'init',
        value: function init() {
            for (var index = 0; index < this.num; index++) {
                this.x[index] = index * 30 + Math.floor(Math.random() * 20);
                this.len[index] = 200 + Math.floor(Math.random() * 50);
            }
            //console.log(this.x, this.len)
        }
    }, {
        key: 'draw',
        value: function draw() {
            _main.pen2.save();
            _main.pen2.strokeStyle = "#3b154e";
            _main.pen2.lineWidth = 20;
            _main.pen2.lineCap = 'round';
            _main.pen2.globalAlpha = 0.6;
            for (var index = 0; index < this.num; index++) {
                _main.pen2.beginPath();
                _main.pen2.moveTo(this.x[index], _main.h);
                _main.pen2.lineTo(this.x[index], _main.h - this.len[index]);
                _main.pen2.stroke();
                _main.pen2.closePath();
            }
            _main.pen2.restore();
        }
    }]);

    return AneObj;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.background = background;

var _main = __webpack_require__(0);

function background() {
    _main.bg.onload = function () {

        _main.pen2.drawImage(_main.bg, 0, 0, _main.w, _main.h);
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Fruit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fruit = exports.Fruit = function () {
    function Fruit() {
        _classCallCheck(this, Fruit);

        this.num = 30;
        this.alive = [];
        this.fruit = new Image();

        this.x = [];
        this.y = [];
        this.l = [];
        this.spd = [];
        this.fruitType = [];
    }

    _createClass(Fruit, [{
        key: 'init',
        value: function init() {
            for (var i = 0; i < this.num; i++) {
                this.alive[i] = false;
                this.x[i] = 0;
                this.y[i] = 0;
                this.l[i] = 0;
                this.spd[i] = Math.random() * 0.017 + 0.002;
                this.fruitType[i] = '';
                this.born(_main.ane, _main.h, i);
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            //console.log(this.fruitType)

            for (var i = 0; i < this.num; i++) {
                if (this.alive[i] === true) {
                    if (this.fruitType[i] == 'orange') {
                        this.fruit.src = './img/fruit.png';
                    } else {
                        this.fruit.src = './img/blue.png';
                    }

                    if (this.l[i] <= 14) {
                        this.l[i] += this.spd[i] * _main.deltaTime;
                    } else {
                        this.y[i] -= this.spd[i] * 4 * _main.deltaTime;
                    }

                    //  console.log(this.l[i])
                    _main.pen1.drawImage(this.fruit, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
                    if (this.y[i] < 10) this.alive[i] = false;
                }
                //}
            }
            this.fruitMonitor();
        }
    }, {
        key: 'update',
        value: function update() {
            var num = 0;
            for (var index = 0; index < this.num; index++) {

                if (this.alive[index]) num++;
            }
        }
    }, {
        key: 'born',
        value: function born(i) {
            var aneId = Math.floor(Math.random() * _main.ane.num);
            this.x[i] = _main.ane.x[aneId];
            this.y[i] = _main.h - _main.ane.len[aneId];
            this.l[i] = 0;
            this.alive[i] = true;
            var ran = Math.random();
            if (ran < 0.3) this.fruitType[i] = 'blue';else this.fruitType[i] = 'orange';
        }
    }, {
        key: 'fruitMonitor',
        value: function fruitMonitor() {
            var num = 0;
            for (var index = 0; index < this.num; index++) {
                if (this.alive[index]) num++;
            }
            if (num < 15) {
                this.sendFruit(_main.ane, _main.h, index);
            }
        }
    }, {
        key: 'sendFruit',
        value: function sendFruit() {
            for (var index = 0; index < this.num; index++) {
                if (!this.alive[index]) {
                    this.born(index);
                }
            }
        }
    }]);

    return Fruit;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MomFish = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

var _common = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MomFish = exports.MomFish = function () {
    function MomFish() {
        _classCallCheck(this, MomFish);

        this.x;
        this.y;
        this.angle = 0;
        this.bigEye = new Image();
        this.bigBody = new Image();
        this.bigTail = new Image();
    }

    _createClass(MomFish, [{
        key: 'init',
        value: function init() {
            this.x = _main.w / 2;
            this.y = _main.h / 2;
            this.mx = _main.w / 2;
            this.my = _main.h / 2;
            this.bigEye.src = './img/bigEye0.png';
            this.bigTail.src = './img/bigTail0.png';
            this.bigBody.src = './img/big.png';
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.x = (0, _common.lerD)(_main.mx, this.x, 0.9);
            this.y = (0, _common.lerD)(_main.my, this.y, 0.9);
            var dx = _main.mx - this.x;
            var dy = _main.my - this.y;
            this.angle = (0, _common.lerAngle)(Math.atan2(-dy, -dx), this.angle, .6);
            console.log(this.angle);
            _main.pen1.save();
            _main.pen1.translate(this.x, this.y);
            _main.pen1.rotate(this.angle);
            _main.pen1.drawImage(this.bigEye, this.bigEye.width / 2, this.bigEye.height / 2);
            _main.pen1.drawImage(this.bigBody, this.bigEye.width / 2 - this.bigBody.width / 2 + 6, this.bigEye.height / 2 - this.bigBody.height / 2 + 5);
            _main.pen1.drawImage(this.bigTail, this.bigEye.width / 2 + 20, this.bigEye.height / 2 - 15);
            _main.pen1.restore();
        }
    }]);

    return MomFish;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lerD = lerD;
exports.lerAngle = lerAngle;
function lerD(aim, c, ratio) {
    var x = c - aim;
    return aim + ratio * x;
}
function lerAngle(aim, c, ratio) {
    var d = aim - c;
    if (d > Math.PI) {
        d = d - 2 * Math.PI;
    }
    if (d < -Math.PI) {
        d = d + 2 * Math.PI;
    }
    return c + ratio * d;
}

/***/ })
/******/ ]);