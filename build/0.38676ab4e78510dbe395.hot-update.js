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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4c21pdGgvRGVza3RvcC96LWRldi96LWRldi1idWlsZHMvd2ViL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJwb3J0IiwicGFyc2VJbnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImRldiIsIk5PREVfRU5WIiwiYXBwIiwibmV4dCIsImhhbmRsZSIsImdldFJlcXVlc3RIYW5kbGVyIiwicHJlcGFyZSIsInRoZW4iLCJzZXJ2ZXIiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJnZXQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJsaXN0ZW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBT0MsU0FBU0MsUUFBUUMsR0FBUixDQUFZQyxJQUFyQixFQUEyQixFQUEzQixLQUFrQyxJQUEvQztBQUNBLElBQU1DLE1BQU1ILFFBQVFDLEdBQVIsQ0FBWUcsUUFBWixLQUF5QixZQUFyQztBQUNBLElBQU1DLE1BQU0sNENBQUFDLENBQUssRUFBRUgsUUFBRixFQUFMLENBQVo7QUFDQSxJQUFNSSxTQUFTRixJQUFJRyxpQkFBSixFQUFmOztBQUVBSCxJQUFJSSxPQUFKLEdBQ0NDLElBREQsQ0FDTSxZQUFNO0FBQ1YsTUFBTUMsU0FBUywrQ0FBQUMsRUFBZjtBQUNBRCxTQUFPRSxHQUFQLENBQVcsbURBQUFDLENBQVdDLElBQVgsRUFBWDs7QUFFQUosU0FBT0ssR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ3JDLFdBQU9YLE9BQU9VLE9BQVAsRUFBZ0JDLFFBQWhCLENBQVA7QUFDRCxHQUZEOztBQUlBUCxTQUFPUSxNQUFQLENBQWNyQixJQUFkLEVBQW9CLFVBQUNzQixHQUFELEVBQVM7QUFDM0IsUUFBSUEsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVEMsWUFBUUMsR0FBUixrQ0FBMkN4QixJQUEzQztBQUNELEdBSEQ7QUFJRCxDQWJELEUiLCJmaWxlIjoiMC4zODY3NmFiNGU3ODUxMGRiZTM5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBuZXh0IGZyb20gJ25leHQnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgMzAwMFxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuY29uc3QgYXBwID0gbmV4dCh7IGRldiB9KVxuY29uc3QgaGFuZGxlID0gYXBwLmdldFJlcXVlc3RIYW5kbGVyKClcblxuYXBwLnByZXBhcmUoKVxuLnRoZW4oKCkgPT4ge1xuICBjb25zdCBzZXJ2ZXIgPSBleHByZXNzKClcbiAgc2VydmVyLnVzZShib2R5UGFyc2VyLmpzb24oKSlcblxuICBzZXJ2ZXIuZ2V0KCcqJywgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIGhhbmRsZShyZXF1ZXN0LCByZXNwb25zZSlcbiAgfSlcblxuICBzZXJ2ZXIubGlzdGVuKHBvcnQsIChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnJcbiAgICBjb25zb2xlLmxvZyhgPiBSZWFkeSBvbiBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=