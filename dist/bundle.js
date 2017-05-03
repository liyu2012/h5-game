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
exports.ane = exports.bg = exports.deltaTime = exports.lastTime = exports.my = exports.mx = exports.h = exports.w = exports.pen2 = exports.fruit = exports.mom = exports.babyEyeArray = exports.babyBodyArray = exports.babyTailArray = exports.momTail = exports.pen1 = exports.momEye = exports.momBodyOrange = exports.momBodyBlue = exports.data = exports.c2 = exports.baby = exports.c1 = exports.wave = exports.halo = exports.dustPic = exports.dust = undefined;

var _ane = __webpack_require__(2);

var _fruit = __webpack_require__(8);

var _bg = __webpack_require__(4);

var _mom = __webpack_require__(10);

var _baby = __webpack_require__(3);

var _data = __webpack_require__(6);

var _wave = __webpack_require__(11);

var _halo = __webpack_require__(9);

var _dust = __webpack_require__(7);

var _collision = __webpack_require__(5);

//定义需要的全局变量
//导入所需模块
var c1 = void 0,
    c2 = void 0,
    pen1 = void 0,
    pen2 = void 0,
    w = void 0,
    h = void 0,
    lastTime = void 0,
    deltaTime = void 0,
    mx = void 0,
    my = void 0,
    bg = void 0,
    ane = void 0,
    data = void 0,
    wave = void 0,
    halo = void 0,
    dust = void 0,
    dustPic = [],
    fruit = void 0,
    mom = void 0,
    baby = void 0,
    babyTailArray = [],
    babyEyeArray = [],
    babyBodyArray = [],
    momTail = [],
    momEye = [],
    momBodyOrange = [],
    momBodyBlue = [];
//共享模块内变量
exports.dust = dust;
exports.dustPic = dustPic;
exports.halo = halo;
exports.wave = wave;
exports.c1 = c1;
exports.baby = baby;
exports.c2 = c2;
exports.data = data;
exports.momBodyBlue = momBodyBlue;
exports.momBodyOrange = momBodyOrange;
exports.momEye = momEye;
exports.pen1 = pen1;
exports.momTail = momTail;
exports.babyTailArray = babyTailArray;
exports.babyBodyArray = babyBodyArray;
exports.babyEyeArray = babyEyeArray;
exports.mom = mom;
exports.fruit = fruit;
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
    //初始化全局变量
    init();
    exports.lastTime = lastTime = Date.now();
    exports.deltaTime = deltaTime = 0;
    gameloop();
}

function onMove(e) {
    if (e.offsetX && data.gameOver == false) {
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
    exports.ane = ane = new _ane.AneObj();
    exports.fruit = fruit = new _fruit.Fruit();
    exports.mom = mom = new _mom.MomFish();
    exports.baby = baby = new _baby.BabyFish();

    for (var i = 0; i < 8; i++) {
        babyTailArray[i] = new Image();
        babyTailArray[i].src = './img/babyTail' + i + '.png';
    }
    for (var _i = 0; _i < 2; _i++) {
        babyEyeArray[_i] = new Image();
        babyEyeArray[_i].src = './img/babyEye' + _i + '.png';
    }
    for (var _i2 = 0; _i2 < 2; _i2++) {
        momEye[_i2] = new Image();
        momEye[_i2].src = './img/bigEye' + _i2 + '.png';
    }
    for (var _i3 = 0; _i3 < 20; _i3++) {
        babyBodyArray[_i3] = new Image();
        babyBodyArray[_i3].src = './img/babyFade' + _i3 + '.png';
    }
    for (var _i4 = 0; _i4 < 8; _i4++) {
        momTail[_i4] = new Image();
        momTail[_i4].src = './img/bigTail' + _i4 + '.png';
    }
    exports.data = data = new _data.Data();
    for (var _i5 = 0; _i5 < 8; _i5++) {
        momBodyOrange[_i5] = new Image();
        momBodyOrange[_i5].src = './img/bigEat' + _i5 + '.png';
        momBodyBlue[_i5] = new Image();
        momBodyBlue[_i5].src = './img/bigEatBlue' + _i5 + '.png';
    }
    pen1.fillStyle = 'white';
    pen1.font = '30px Verdana';
    pen1.textAlign = 'center';
    exports.wave = wave = new _wave.Wave();
    wave.init();
    exports.halo = halo = new _halo.Halo();
    exports.dust = dust = new _dust.Dust();
    for (var _i6 = 0; _i6 < 7; _i6++) {
        dustPic[_i6] = new Image();
        dustPic[_i6].src = './img/dust' + _i6 + '.png';
    }
}

function gameloop() {
    window.requestAnimationFrame(gameloop);
    var now = new Date();
    exports.deltaTime = deltaTime = now - lastTime;
    if (deltaTime > 50) exports.deltaTime = deltaTime = 50;
    exports.lastTime = lastTime = now;
    (0, _bg.background)();
    ane.draw();
    pen1.clearRect(0, 0, w, h);
    fruit.draw();
    mom.draw();
    baby.draw();
    (0, _collision.momFruitsCollision)();
    (0, _collision.momBabyCollision)();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
gameStart();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lerD = lerD;
exports.lerAngle = lerAngle;
exports.calDis = calDis;
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
function calDis(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

/***/ }),
/* 2 */
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
        this.heady = [];
        this.headx = [];
        this.time = 0;
        this.amp = [];
        this.init();
    }

    _createClass(AneObj, [{
        key: 'init',
        value: function init() {
            for (var index = 0; index < this.num; index++) {
                this.x[index] = index * 30 + Math.floor(Math.random() * 20);
                this.len[index] = 200 + Math.floor(Math.random() * 50);

                this.heady[index] = _main.h - this.len[index];
                this.amp[index] = Math.random() * 100 + 50;
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
            this.time = this.time > 10000 ? 0 : this.time + _main.deltaTime / 600;

            for (var index = 0; index < this.num; index++) {
                _main.pen2.beginPath();
                _main.pen2.moveTo(this.x[index], _main.h);
                this.headx[index] = this.x[index] + Math.sin(this.time) * this.amp[index];
                _main.pen2.quadraticCurveTo(this.x[index] + 30, this.heady[index] + 100, this.headx[index], this.heady[index]);
                // pen2.lineTo(this.x[index], h - this.len[index])

                _main.pen2.stroke();
            }
            _main.pen2.restore();
        }
    }]);

    return AneObj;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BabyFish = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

var _common = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BabyFish = exports.BabyFish = function () {
    function BabyFish() {
        _classCallCheck(this, BabyFish);

        this.x;
        this.y;
        this.angle = 0;
        this.timer = 0;
        this.Count = 0;
        this.eyeTimer = 0;
        this.eyeCount = 0;
        this.eyeInterval = 5000;
        this.bodyTimer = 0;
        this.bodyCount = 0;
        this.init();
    }

    _createClass(BabyFish, [{
        key: 'init',
        value: function init() {
            this.x = _main.w / 2 - 190;
            this.y = _main.h / 2;
        }
    }, {
        key: 'draw',
        value: function draw() {

            this.x = (0, _common.lerD)(_main.mom.x, this.x, 0.98);
            this.y = (0, _common.lerD)(_main.mom.y, this.y, 0.98);
            var dx = _main.mom.x - this.x;
            var dy = _main.mom.y - this.y;
            this.angle = (0, _common.lerAngle)(Math.atan2(-dy, -dx), this.angle, .1);
            this.timer += _main.deltaTime;
            if (this.timer > 50) {
                this.Count = (this.Count + 1) % 8;
                this.timer %= 50;
            }
            this.eyeTimer += _main.deltaTime;
            if (this.eyeTimer > this.eyeInterval) {
                this.eyeCount = (this.eyeCount + 1) % 2;
                this.eyeTimer %= this.eyeInterval;
                if (this.eyeCount === 0) {
                    this.eyeInterval = Math.random() * 2500 + 3000;
                } else {
                    this.eyeInterval = 200;
                }
            }
            //body animation
            this.bodyTimer += _main.deltaTime;
            if (this.bodyTimer > 300) {
                this.bodyCount++;
                this.bodyTimer %= 300;
                if (this.bodyCount > 19) {
                    this.bodyCount = 19;
                    _main.data.gameOver = true;
                }
            }
            _main.pen1.save();
            _main.pen1.translate(this.x, this.y);
            _main.pen1.rotate(this.angle);
            _main.pen1.drawImage(_main.babyTailArray[this.Count], -_main.babyTailArray[0].width / 2, -_main.babyTailArray[0].height / 2);
            _main.pen1.drawImage(_main.babyBodyArray[this.bodyCount], -_main.babyBodyArray[0].width / 2 - 25, -_main.babyBodyArray[0].height / 2);
            _main.pen1.drawImage(_main.babyEyeArray[this.eyeCount], -_main.babyEyeArray[0].width / 2 - 25, -_main.babyEyeArray[0].height / 2);
            _main.pen1.restore();
        }
    }]);

    return BabyFish;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.background = background;

var _main = __webpack_require__(0);

function background() {
    _main.pen2.drawImage(_main.bg, 0, 0, _main.w, _main.h);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.momFruitsCollision = momFruitsCollision;
exports.momBabyCollision = momBabyCollision;

var _main = __webpack_require__(0);

var _common = __webpack_require__(1);

function momFruitsCollision() {
    if (_main.data.gameOver == false) {
        for (var i = 0; i < _main.fruit.num; i++) {
            if (_main.fruit.alive[i] == true) {
                var l = (0, _common.calDis)(_main.fruit.x[i], _main.fruit.y[i], _main.mom.x, _main.mom.y);

                if (l < 20) {
                    _main.fruit.dead(i);
                    _main.data.fruitNum++;
                    _main.mom.bodyCount++;
                    if (_main.mom.bodyCount >= 7) _main.mom.bodyCount = 7;
                    if (_main.fruit.fruitType[i] == 'blue') {
                        console.log(_main.fruit.fruitType[i]);
                        _main.data.double = 2;
                    }

                    _main.wave.born(_main.fruit.x[i], _main.fruit.y[i]);
                }
            }
        }
    }
}
function momBabyCollision() {
    if (_main.data.gameOver == false) {
        var l = (0, _common.calDis)(_main.mom.x, _main.mom.y, _main.baby.x, _main.baby.y);
        if (l < 20 && _main.data.fruitNum > 0) {
            _main.halo.born(_main.baby.x, _main.baby.y);
            _main.mom.bodyCount = 0;
            _main.baby.bodyCount = 0;
            //data.reset()
            _main.data.updateScore();
        }
    }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Data = exports.Data = function () {
    function Data() {
        _classCallCheck(this, Data);

        this.fruitNum = 0;
        this.double = 1;
        this.score = 0;
        this.gameOver = false;
        this.opacity = 0;
    }

    _createClass(Data, [{
        key: 'reset',
        value: function reset() {
            this.fruitNum = 0;
            this.double = 1;
        }
    }, {
        key: 'updateScore',
        value: function updateScore() {
            this.score += this.fruitNum * 100 * this.double;
            this.double = 1;
            this.fruitNum = 0;
            // console.log(this.score)
        }
    }, {
        key: 'draw',
        value: function draw() {
            _main.pen1.fillText('score:' + this.score, _main.w * 0.5, _main.h * 0.5 + 200);

            if (this.gameOver == true) {
                _main.pen1.save();
                this.opacity = this.opacity > 1 ? 1 : this.opacity + _main.deltaTime * 0.0005;
                _main.pen1.shadowBlur = 10;
                _main.pen1.shadowColor = 'white';

                _main.pen1.fillStyle = 'rgba(255,255,255,' + this.opacity + ')';
                _main.pen1.fillText('Game Over', _main.w * 0.5, _main.h * 0.5);
                _main.pen1.restore();
            }
            //pen1.fillText(`num:${this.fruitNum}`, w * 0.5, h * 0.5 + 130)
        }
    }]);

    return Data;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dust = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dust = exports.Dust = function () {
    function Dust() {
        _classCallCheck(this, Dust);

        this.x = [];
        this.y = [];
        this.amp = [];
        this.num = 30;
        this.alpha = 0;
        this.id = [];
        this.init();
    }

    _createClass(Dust, [{
        key: 'init',
        value: function init() {
            for (var index = 0; index < this.num; index++) {
                this.x[index] = Math.random() * _main.w;
                this.y[index] = Math.random() * _main.h;
                this.amp[index] = 20 + Math.random() * 26;
                this.id[index] = Math.floor(Math.random() * 7);
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            _main.pen1.save();
            this.alpha = this.alpha > 10000 ? 0 : this.alpha + _main.deltaTime / 600;

            //console.log(this.alpha)
            for (var index = 0; index < this.num; index++) {
                // console.log(dustPic[this.id[index]])
                _main.pen1.drawImage(_main.dustPic[this.id[index]], this.x[index] + Math.sin(this.alpha) * this.amp[index], this.y[index]);
            }

            _main.pen1.restore();
        }
    }, {
        key: 'born',
        value: function born(x, y) {
            for (var index = 0; index < this.num; index++) {
                if (this.alive[index] == false) {
                    this.alive[index] = true;
                    this.r[index] += 10;
                    this.y[index] = y;
                    this.x[index] = x;
                    //console.log(x, y)
                    return;
                }
            }
        }
    }]);

    return Dust;
}();

/***/ }),
/* 8 */
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

        this.num = 20;
        this.alive = [];
        this.fruit = new Image();
        this.x = [];
        this.y = [];
        this.l = [];
        this.id = [];
        this.spd = [];
        this.fruitType = [];
        this.init();
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
                this.id[i] = 0;
                this.born(i);
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
                        this.x[i] = _main.ane.headx[this.id[i]];
                        this.y[i] = _main.ane.heady[this.id[i]];
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
        key: 'dead',
        value: function dead(i) {
            this.alive[i] = false;
        }
    }, {
        key: 'born',
        value: function born(i) {
            this.id[i] = Math.floor(Math.random() * _main.ane.num);
            this.x[i] = _main.ane.x[this.id[i]];
            this.y[i] = _main.ane.heady[this.id[i]];
            this.l[i] = 0;
            this.alive[i] = true;
            var ran = Math.random();
            if (ran < 0.2) this.fruitType[i] = 'blue';else this.fruitType[i] = 'orange';
        }
    }, {
        key: 'fruitMonitor',
        value: function fruitMonitor() {
            var num = 0;
            for (var index = 0; index < this.num; index++) {
                if (this.alive[index]) num++;
            }
            if (num < 15) {
                this.sendFruit();
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Halo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Halo = exports.Halo = function () {
    function Halo() {
        _classCallCheck(this, Halo);

        this.x = [];
        this.y = [];
        this.alive = [];
        this.r = [];
        this.num = 5;
        this.init();
    }

    _createClass(Halo, [{
        key: 'init',
        value: function init() {
            for (var index = 0; index < this.num; index++) {
                this.alive[index] = false;
                this.r[index] = 0;
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            _main.pen1.save();
            _main.pen1.shadowBlur = 3;
            _main.pen1.shadowColor = 'orange';
            _main.pen1.lineWidth = 3;
            for (var index = 0; index < this.num; index++) {
                if (this.alive[index] == true) {
                    this.r[index] = this.r[index] > 60 ? 60 : this.r[index] + _main.deltaTime * .05;
                    _main.pen1.strokeStyle = 'rgba(135,45,155,' + (1 - this.r[index] / 60) + ')';
                    if (this.r[index] >= 60) {
                        this.alive[index] = false;
                        this.r[index] = 0;
                        break;
                    }
                    _main.pen1.beginPath();
                    _main.pen1.arc(this.x[index], this.y[index], this.r[index], 0, 2 * Math.PI);

                    _main.pen1.closePath();
                    _main.pen1.stroke();
                }
            }
            _main.pen1.restore();
        }
    }, {
        key: 'born',
        value: function born(x, y) {

            for (var index = 0; index < this.num; index++) {
                if (this.alive[index] == false) {
                    this.alive[index] = true;
                    this.r[index] += 10;
                    this.y[index] = y;
                    this.x[index] = x;
                    // console.log(x, y)
                    return;
                }
            }
        }
    }]);

    return Halo;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MomFish = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

var _common = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MomFish = exports.MomFish = function () {
    function MomFish() {
        _classCallCheck(this, MomFish);

        this.x;
        this.y;
        this.angle = 0;
        this.bigBody = new Image();
        this.eyeTimer = 0;
        this.eyeCount = 0;
        this.eyeInterval = 5000;
        this.timer = 0;
        this.Count = 0;
        this.bodyCount = 0;
        this.init();
    }

    _createClass(MomFish, [{
        key: 'init',
        value: function init() {
            this.x = _main.w / 2;
            this.y = _main.h / 2;
            this.mx = _main.w / 2;
            this.my = _main.h / 2;
            this.bigBody.src = './img/big.png';
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.x = (0, _common.lerD)(_main.mx, this.x, 0.95);
            this.y = (0, _common.lerD)(_main.my, this.y, 0.95);
            var dx = _main.mx - this.x;
            var dy = _main.my - this.y;
            this.angle = (0, _common.lerAngle)(Math.atan2(-dy, -dx), this.angle, .2);
            this.timer += _main.deltaTime;
            if (this.timer > 50) {
                this.Count = (this.Count + 1) % 8;
                this.timer %= 50;
            }
            //eye animation
            this.eyeTimer += _main.deltaTime;
            if (this.eyeTimer > this.eyeInterval) {
                this.eyeCount = (this.eyeCount + 1) % 2;
                this.eyeTimer %= this.eyeInterval;
                if (this.eyeCount === 0) {
                    this.eyeInterval = Math.random() * 2500 + 3000;
                } else {
                    this.eyeInterval = 200;
                }
            }

            _main.pen1.save();
            _main.pen1.translate(this.x, this.y);
            _main.pen1.rotate(this.angle);
            _main.pen1.drawImage(_main.momTail[this.Count], _main.momTail[0].width / 2 + 12, _main.momTail[0].height / 2 - 30);
            if (_main.data.double == 1) {
                _main.pen1.drawImage(_main.momBodyOrange[this.bodyCount], -_main.momBodyOrange[0].width / 2 + 14, -_main.momBodyOrange[0].height / 2 + 13);
            } else {
                _main.pen1.drawImage(_main.momBodyBlue[this.bodyCount], -_main.momBodyOrange[0].width / 2 + 14, -_main.momBodyOrange[0].height / 2 + 15);
            }
            _main.pen1.drawImage(_main.momEye[this.eyeCount], _main.momEye[0].width / 2, _main.momEye[0].height / 2);

            _main.pen1.restore();
        }
    }]);

    return MomFish;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wave = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wave = exports.Wave = function () {
    function Wave() {
        _classCallCheck(this, Wave);

        this.x = [];
        this.y = [];
        this.alive = [];
        this.r = [];
        this.num = 10;
    }

    _createClass(Wave, [{
        key: 'init',
        value: function init() {
            for (var index = 0; index < this.num; index++) {
                this.alive[index] = false;
                this.r[index] = 0;
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            _main.pen1.save();

            _main.pen1.shadowBlur = 10;
            _main.pen1.shadowColor = 'white';
            _main.pen1.lineWidth = 3;
            for (var index = 0; index < this.num; index++) {
                if (this.alive[index] == true) {

                    this.r[index] = this.r[index] > 100 ? 100 : this.r[index] + _main.deltaTime * .1;
                    _main.pen1.strokeStyle = 'rgba(255,255,255,' + (1 - this.r[index] / 100) + ')';
                    if (this.r[index] >= 100) {
                        this.alive[index] = false;
                        this.r[index] = 0;
                        break;
                    }
                    _main.pen1.beginPath();
                    _main.pen1.arc(this.x[index], this.y[index], this.r[index], 0, 2 * Math.PI);
                    _main.pen1.stroke();
                    _main.pen1.closePath();
                }
            }
            _main.pen1.restore();
        }
    }, {
        key: 'born',
        value: function born(x, y) {
            for (var index = 0; index < this.num; index++) {
                if (this.alive[index] == false) {
                    this.alive[index] = true;
                    this.r[index] += 10;
                    this.y[index] = y;
                    this.x[index] = x;
                    //console.log(x, y)
                    return;
                }
            }
        }
    }]);

    return Wave;
}();

/***/ })
/******/ ]);