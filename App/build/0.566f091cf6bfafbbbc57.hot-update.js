"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY),
/* harmony export */   "API_URL": () => (/* binding */ API_URL)
/* harmony export */ });
const API_KEY = "6e6af5c1-e966-4dba-bd7f-8a422c7b1c9b";
const API_URL = "https://todo-api.coderslab.pl/api";

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTasks": () => (/* binding */ getTasks)
/* harmony export */ });
/* harmony import */ var _api_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

const getTasks = async successCallback => {
  try {
    const response = await fetch(`${_api_const__WEBPACK_IMPORTED_MODULE_0__.API_URL}/tasks`, {
      headers: {
        'Authorization': _api_const__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.error || typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }
    successCallback(data.data);
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _API_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

const data = (0,_API_tasks__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
console.log(data);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("afc3fa7ba6d693cde83e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NjZmMDkxY2Y2YmZhZmJiYmM1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUFHLHNDQUFzQztBQUN0RCxNQUFNQyxPQUFPLEdBQUcsbUNBQW1DOzs7Ozs7Ozs7Ozs7QUNEWDtBQUV4QyxNQUFNQyxRQUFRLEdBQUcsTUFBT0MsZUFBZSxJQUFLO0VBQy9DLElBQUk7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVKLCtDQUFRLFFBQU8sRUFBRTtNQUM3Q0ssT0FBTyxFQUFFO1FBQ0wsZUFBZSxFQUFFTiwrQ0FBTztRQUN4QixjQUFjLEVBQUU7TUFFcEI7SUFDSixDQUFDLENBQUM7SUFFRixNQUFNTyxJQUFJLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLEVBQUU7SUFFbEMsSUFBSUQsSUFBSSxDQUFDRSxLQUFLLElBQUksT0FBT04sZUFBZSxLQUFLLFVBQVUsRUFBRTtNQUNyRCxNQUFNLElBQUlPLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUI7SUFFQVAsZUFBZSxDQUFDSSxJQUFJLENBQUNBLElBQUksQ0FBQztFQUM5QixDQUFDLENBQUMsT0FBT0ksR0FBRyxFQUFFO0lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7RUFDcEI7QUFDSixDQUFDOzs7Ozs7Ozs7QUN0QnFDO0FBRXRDLE1BQU1KLElBQUksR0FBR0wsb0RBQVEsRUFBRTtBQUN2QlUsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksQ0FBQzs7Ozs7Ozs7VUNIakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9BcHAvQVBJL2FwaV9jb25zdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9BcHAvQVBJL3Rhc2tzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL0FwcC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX0tFWSA9IFwiNmU2YWY1YzEtZTk2Ni00ZGJhLWJkN2YtOGE0MjJjN2IxYzliXCJcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL3RvZG8tYXBpLmNvZGVyc2xhYi5wbC9hcGlcIiIsImltcG9ydCB7IEFQSV9LRVksIEFQSV9VUkwgfSBmcm9tIFwiLi9hcGlfY29uc3RcIjtcblxuZXhwb3J0IGNvbnN0IGdldFRhc2tzID0gYXN5bmMgKHN1Y2Nlc3NDYWxsYmFjaykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdGFza3NgLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBBUElfS0VZLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5lcnJvciB8fCB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHtnZXRUYXNrc30gZnJvbSBcIi4uL0FQSS90YXNrc1wiO1xuXG5jb25zdCBkYXRhID0gZ2V0VGFza3MoKTtcbmNvbnNvbGUubG9nKGRhdGEpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFmYzNmYTdiYTZkNjkzY2RlODNlXCIpIl0sIm5hbWVzIjpbIkFQSV9LRVkiLCJBUElfVVJMIiwiZ2V0VGFza3MiLCJzdWNjZXNzQ2FsbGJhY2siLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJFcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9