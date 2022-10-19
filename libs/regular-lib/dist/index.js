"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.howdy = void 0;
exports.useCustomState = useCustomState;
var _react = require("react");
var howdy = "heyo!";
exports.howdy = howdy;
function useCustomState() {
  return (0, _react.useState)();
}