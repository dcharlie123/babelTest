import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
var fn = function fn() {
  console.log('hello');
};
var isHas = [1, 2, 3].includes(2);
var p = new Promise(function (resolve, reject) {
  resolve(100);
});
var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  _createClass(Point, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }]);
  return Point;
}();
var cp = new ColorPoint(25, 8);