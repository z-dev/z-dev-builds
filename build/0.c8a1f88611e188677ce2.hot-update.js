exports.id = 0;
exports.modules = {

/***/ "./server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next__ = __webpack_require__("next");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);





var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = __WEBPACK_IMPORTED_MODULE_1_next___default()({ dev: dev });
var handle = app.getRequestHandler();

console.log(__WEBPACK_IMPORTED_MODULE_1_next___default.a);

app.prepare().then(function () {
  var server = __WEBPACK_IMPORTED_MODULE_0_express___default()();
  server.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());

  server.get('*', function (request, response) {
    return handle(request, response);
  });

  server.listen(port, function (err) {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + port);
  });
});

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4c21pdGgvRGVza3RvcC96LWRldi96LWRldi1idWlsZHMvd2ViL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJwb3J0IiwicGFyc2VJbnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImRldiIsIk5PREVfRU5WIiwiYXBwIiwibmV4dCIsImhhbmRsZSIsImdldFJlcXVlc3RIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInByZXBhcmUiLCJ0aGVuIiwic2VydmVyIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwiZ2V0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwibGlzdGVuIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBT0MsU0FBU0MsUUFBUUMsR0FBUixDQUFZQyxJQUFyQixFQUEyQixFQUEzQixLQUFrQyxJQUEvQztBQUNBLElBQU1DLE1BQU1ILFFBQVFDLEdBQVIsQ0FBWUcsUUFBWixLQUF5QixZQUFyQztBQUNBLElBQU1DLE1BQU0sNENBQUFDLENBQUssRUFBRUgsUUFBRixFQUFMLENBQVo7QUFDQSxJQUFNSSxTQUFTRixJQUFJRyxpQkFBSixFQUFmOztBQUVBQyxRQUFRQyxHQUFSLENBQVksNENBQVo7O0FBRUFMLElBQUlNLE9BQUosR0FDQ0MsSUFERCxDQUNNLFlBQU07QUFDVixNQUFNQyxTQUFTLCtDQUFBQyxFQUFmO0FBQ0FELFNBQU9FLEdBQVAsQ0FBVyxtREFBQUMsQ0FBV0MsSUFBWCxFQUFYOztBQUVBSixTQUFPSyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDckMsV0FBT2IsT0FBT1ksT0FBUCxFQUFnQkMsUUFBaEIsQ0FBUDtBQUNELEdBRkQ7O0FBSUFQLFNBQU9RLE1BQVAsQ0FBY3ZCLElBQWQsRUFBb0IsVUFBQ3dCLEdBQUQsRUFBUztBQUMzQixRQUFJQSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUYixZQUFRQyxHQUFSLGtDQUEyQ1osSUFBM0M7QUFDRCxHQUhEO0FBSUQsQ0FiRCxFIiwiZmlsZSI6IjAuYzhhMWY4ODYxMWUxODg2NzdjZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgbmV4dCBmcm9tICduZXh0J1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDMwMDBcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbmNvbnN0IGFwcCA9IG5leHQoeyBkZXYgfSlcbmNvbnN0IGhhbmRsZSA9IGFwcC5nZXRSZXF1ZXN0SGFuZGxlcigpXG5cbmNvbnNvbGUubG9nKG5leHQpXG5cbmFwcC5wcmVwYXJlKClcbi50aGVuKCgpID0+IHtcbiAgY29uc3Qgc2VydmVyID0gZXhwcmVzcygpXG4gIHNlcnZlci51c2UoYm9keVBhcnNlci5qc29uKCkpXG5cbiAgc2VydmVyLmdldCgnKicsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiBoYW5kbGUocmVxdWVzdCwgcmVzcG9uc2UpXG4gIH0pXG5cbiAgc2VydmVyLmxpc3Rlbihwb3J0LCAoZXJyKSA9PiB7XG4gICAgaWYgKGVycikgdGhyb3cgZXJyXG4gICAgY29uc29sZS5sb2coYD4gUmVhZHkgb24gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YClcbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9