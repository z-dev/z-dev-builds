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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);






var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = __WEBPACK_IMPORTED_MODULE_1_next___default()({ dev: dev });
var handle = app.getRequestHandler();

app.prepare().then(function () {
  var server = __WEBPACK_IMPORTED_MODULE_0_express___default()();
  server.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

  server.get('*', function (request, response) {
    // eslint-disable-next-line no-restricted-syntax
    // for (const parameterizedRoute of parameterizedRoutes) {
    //   const { pathname, query } = parse(request.url, true)
    //   const params = match(pathname)
    //   if (pathname === parameterizedRoute.route) {
    //     return handle(request, response)
    //   }
    //   if (params !== false) {
    //     return app.render(request, response, parameterizedRoute.to, Object.assign(params, query))
    //   }
    // }
    return handle(request, response);
  });

  server.listen(port, function (err) {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + port);
  });
});

/***/ }),

/***/ "path-match":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4c21pdGgvRGVza3RvcC96LWRldi96LWRldi1idWlsZHMvd2ViL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJwb3J0IiwicGFyc2VJbnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImRldiIsIk5PREVfRU5WIiwiYXBwIiwibmV4dCIsImhhbmRsZSIsImdldFJlcXVlc3RIYW5kbGVyIiwicHJlcGFyZSIsInRoZW4iLCJzZXJ2ZXIiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJnZXQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJsaXN0ZW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU9DLFNBQVNDLFFBQVFDLEdBQVIsQ0FBWUMsSUFBckIsRUFBMkIsRUFBM0IsS0FBa0MsSUFBL0M7QUFDQSxJQUFNQyxNQUFNSCxRQUFRQyxHQUFSLENBQVlHLFFBQVosS0FBeUIsWUFBckM7QUFDQSxJQUFNQyxNQUFNLDRDQUFBQyxDQUFLLEVBQUVILFFBQUYsRUFBTCxDQUFaO0FBQ0EsSUFBTUksU0FBU0YsSUFBSUcsaUJBQUosRUFBZjs7QUFFQUgsSUFBSUksT0FBSixHQUNDQyxJQURELENBQ00sWUFBTTtBQUNWLE1BQU1DLFNBQVMsK0NBQUFDLEVBQWY7QUFDQUQsU0FBT0UsR0FBUCxDQUFXLG1EQUFBQyxDQUFXQyxJQUFYLEVBQVg7O0FBRUFKLFNBQU9LLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBT1gsT0FBT1UsT0FBUCxFQUFnQkMsUUFBaEIsQ0FBUDtBQUNELEdBYkQ7O0FBZUFQLFNBQU9RLE1BQVAsQ0FBY3JCLElBQWQsRUFBb0IsVUFBQ3NCLEdBQUQsRUFBUztBQUMzQixRQUFJQSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNUQyxZQUFRQyxHQUFSLGtDQUEyQ3hCLElBQTNDO0FBQ0QsR0FIRDtBQUlELENBeEJELEUiLCJmaWxlIjoiMC42NWEyNWE0NzA4N2MwNjkyNWE0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBuZXh0IGZyb20gJ25leHQnXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCdcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuY29uc3QgcG9ydCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKSB8fCAzMDAwXG5jb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG5jb25zdCBhcHAgPSBuZXh0KHsgZGV2IH0pXG5jb25zdCBoYW5kbGUgPSBhcHAuZ2V0UmVxdWVzdEhhbmRsZXIoKVxuXG5hcHAucHJlcGFyZSgpXG4udGhlbigoKSA9PiB7XG4gIGNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKVxuICBzZXJ2ZXIudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuXG4gIHNlcnZlci5nZXQoJyonLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAvLyBmb3IgKGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSBvZiBwYXJhbWV0ZXJpemVkUm91dGVzKSB7XG4gICAgLy8gICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UocmVxdWVzdC51cmwsIHRydWUpXG4gICAgLy8gICBjb25zdCBwYXJhbXMgPSBtYXRjaChwYXRobmFtZSlcbiAgICAvLyAgIGlmIChwYXRobmFtZSA9PT0gcGFyYW1ldGVyaXplZFJvdXRlLnJvdXRlKSB7XG4gICAgLy8gICAgIHJldHVybiBoYW5kbGUocmVxdWVzdCwgcmVzcG9uc2UpXG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAocGFyYW1zICE9PSBmYWxzZSkge1xuICAgIC8vICAgICByZXR1cm4gYXBwLnJlbmRlcihyZXF1ZXN0LCByZXNwb25zZSwgcGFyYW1ldGVyaXplZFJvdXRlLnRvLCBPYmplY3QuYXNzaWduKHBhcmFtcywgcXVlcnkpKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICByZXR1cm4gaGFuZGxlKHJlcXVlc3QsIHJlc3BvbnNlKVxuICB9KVxuXG4gIHNlcnZlci5saXN0ZW4ocG9ydCwgKGVycikgPT4ge1xuICAgIGlmIChlcnIpIHRocm93IGVyclxuICAgIGNvbnNvbGUubG9nKGA+IFJlYWR5IG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==