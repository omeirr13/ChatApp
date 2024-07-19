"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/components/AllUserItems.jsx":
/*!*****************************************!*\
  !*** ./app/components/AllUserItems.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllUserItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_ChatContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/ChatContext */ \"(app-pages-browser)/./app/ChatContext.js\");\n/* harmony import */ var _app_SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/SocketContext */ \"(app-pages-browser)/./app/SocketContext.js\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useLocalStorage */ \"(app-pages-browser)/./hooks/useLocalStorage.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AllUserItem(param) {\n    let { email } = param;\n    _s();\n    //hooks\n    //useContext\n    const { socket } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_SocketContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const { setRefreshAllUserBar, refreshAllUserBar } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_ChatContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    //useLocalStorage\n    const { getItem: getEmail } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"currentLoggedIn\");\n    const { removeItem: removeUser } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"notConnectedUsers\");\n    const loggedInUserEmail = getEmail();\n    const { getItems: getEmailToUsernameMapping } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"emailToUsernameMapping\");\n    const emailToUsernameMap = getEmailToUsernameMapping();\n    const handleClick = ()=>{\n        console.log(email, loggedInUserEmail);\n        removeUser(email);\n        setRefreshAllUserBar(!refreshAllUserBar);\n        socket.emit(\"sendRequest\", email, loggedInUserEmail);\n    };\n    const getInitials = (name)=>{\n        const words = name.split(\" \");\n        const initials = words.map((word)=>word.charAt(0).toUpperCase()).join(\"\");\n        return initials;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between pl-2 border-b border-gray-100 border-solid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[100%] flex items-center text-white overflow-x-hidden overflow-y-hidden h-20 py-1 px-1 rounded-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chatListItemImage\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"chatListItemImageText\",\n                                    children: getInitials(emailToUsernameMap[email])\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#4d4d4d] text-base font-bold\",\n                                children: email\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleClick,\n                        className: \"bg-[blue] h-9 w-24 rounded-[34px]\",\n                        children: \"Send Req\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(AllUserItem, \"4V6oKv0PtqfR2D5ZyLyWL49K5wY=\", false, function() {\n    return [\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage\n    ];\n});\n_c = AllUserItem;\nvar _c;\n$RefreshReg$(_c, \"AllUserItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FsbFVzZXJJdGVtcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0k7QUFDVTtBQUN2QjtBQUVwQixTQUFTSSxZQUFZLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFFaEMsT0FBTztJQUNQLFlBQVk7SUFDWixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSCxpREFBVUEsQ0FBQ0YsMERBQWFBO0lBRzNDLE1BQU0sRUFBRU0sb0JBQW9CLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdMLGlEQUFVQSxDQUFDSCx3REFBV0E7SUFDMUUsaUJBQWlCO0lBQ2pCLE1BQU0sRUFBRVMsU0FBU0MsUUFBUSxFQUFFLEdBQUdSLHVFQUFlQSxDQUFDO0lBQzlDLE1BQU0sRUFBRVMsWUFBWUMsVUFBVSxFQUFFLEdBQUdWLHVFQUFlQSxDQUFDO0lBRW5ELE1BQU1XLG9CQUFvQkg7SUFFMUIsTUFBTSxFQUFFSSxVQUFVQyx5QkFBeUIsRUFBRSxHQUFHYix1RUFBZUEsQ0FBQztJQUNoRSxNQUFNYyxxQkFBcUJEO0lBRTNCLE1BQU1FLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ2QsT0FBT1E7UUFDbkJELFdBQVdQO1FBQ1hFLHFCQUFxQixDQUFDQztRQUN0QkYsT0FBT2MsSUFBSSxDQUFDLGVBQWVmLE9BQU9RO0lBQ3RDO0lBQ0EsTUFBTVEsY0FBYyxDQUFDQztRQUNqQixNQUFNQyxRQUFRRCxLQUFLRSxLQUFLLENBQUM7UUFDekIsTUFBTUMsV0FBV0YsTUFBTUcsR0FBRyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxJQUFJQyxJQUFJLENBQUM7UUFFdEUsT0FBT0w7SUFDWDtJQUVBLHFCQUNJLDhEQUFDTTtrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDQztvQ0FBS0QsV0FBVTs4Q0FBeUJYLFlBQVlMLGtCQUFrQixDQUFDWCxNQUFNOzs7Ozs7Ozs7OzswQ0FFbEYsOERBQUM2QjtnQ0FBRUYsV0FBVTswQ0FBc0MzQjs7Ozs7Ozs7Ozs7O2tDQUV2RCw4REFBQzhCO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTcEI7d0JBQWFlLFdBQVU7a0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlHO0dBaER3QjVCOztRQVNVRixtRUFBZUE7UUFDVkEsbUVBQWVBO1FBSUZBLG1FQUFlQTs7O0tBZDNDRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9BbGxVc2VySXRlbXMuanN4P2ZhOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRDb250ZXh0IGZyb20gXCJAL2FwcC9DaGF0Q29udGV4dFwiO1xuaW1wb3J0IFNvY2tldENvbnRleHQgZnJvbSBcIkAvYXBwL1NvY2tldENvbnRleHRcIjtcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gXCJAL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxVc2VySXRlbSh7IGVtYWlsIH0pIHtcblxuICAgIC8vaG9va3NcbiAgICAvL3VzZUNvbnRleHRcbiAgICBjb25zdCB7IHNvY2tldCB9ID0gdXNlQ29udGV4dChTb2NrZXRDb250ZXh0KTtcblxuICAgIFxuICAgIGNvbnN0IHsgc2V0UmVmcmVzaEFsbFVzZXJCYXIsIHJlZnJlc2hBbGxVc2VyQmFyIH0gPSB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcbiAgICAvL3VzZUxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IHsgZ2V0SXRlbTogZ2V0RW1haWwgfSA9IHVzZUxvY2FsU3RvcmFnZSgnY3VycmVudExvZ2dlZEluJyk7XG4gICAgY29uc3QgeyByZW1vdmVJdGVtOiByZW1vdmVVc2VyIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ25vdENvbm5lY3RlZFVzZXJzJyk7XG5cbiAgICBjb25zdCBsb2dnZWRJblVzZXJFbWFpbCA9IGdldEVtYWlsKCk7XG5cbiAgICBjb25zdCB7IGdldEl0ZW1zOiBnZXRFbWFpbFRvVXNlcm5hbWVNYXBwaW5nIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2VtYWlsVG9Vc2VybmFtZU1hcHBpbmcnKTtcbiAgICBjb25zdCBlbWFpbFRvVXNlcm5hbWVNYXAgPSBnZXRFbWFpbFRvVXNlcm5hbWVNYXBwaW5nKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwsIGxvZ2dlZEluVXNlckVtYWlsKVxuICAgICAgICByZW1vdmVVc2VyKGVtYWlsKTtcbiAgICAgICAgc2V0UmVmcmVzaEFsbFVzZXJCYXIoIXJlZnJlc2hBbGxVc2VyQmFyKTtcbiAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRSZXF1ZXN0JywgZW1haWwsIGxvZ2dlZEluVXNlckVtYWlsKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEluaXRpYWxzID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBuYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxzID0gd29yZHMubWFwKHdvcmQgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSkuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxzO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwbC0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBib3JkZXItc29saWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEwMCVdIGZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1oaWRkZW4gaC0yMCBweS0xIHB4LTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRMaXN0SXRlbUltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hhdExpc3RJdGVtSW1hZ2VUZXh0XCI+e2dldEluaXRpYWxzKGVtYWlsVG9Vc2VybmFtZU1hcFtlbWFpbF0pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzRkNGQ0ZF0gdGV4dC1iYXNlIGZvbnQtYm9sZFwiPntlbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiYmctW2JsdWVdIGgtOSB3LTI0IHJvdW5kZWQtWzM0cHhdXCI+U2VuZCBSZXE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJpdGVtLXRleHRcIj57bGFzdE1lc3NhZ2V9PC9wPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJDaGF0Q29udGV4dCIsIlNvY2tldENvbnRleHQiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJ1c2VDb250ZXh0IiwiQWxsVXNlckl0ZW0iLCJlbWFpbCIsInNvY2tldCIsInNldFJlZnJlc2hBbGxVc2VyQmFyIiwicmVmcmVzaEFsbFVzZXJCYXIiLCJnZXRJdGVtIiwiZ2V0RW1haWwiLCJyZW1vdmVJdGVtIiwicmVtb3ZlVXNlciIsImxvZ2dlZEluVXNlckVtYWlsIiwiZ2V0SXRlbXMiLCJnZXRFbWFpbFRvVXNlcm5hbWVNYXBwaW5nIiwiZW1haWxUb1VzZXJuYW1lTWFwIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsImdldEluaXRpYWxzIiwibmFtZSIsIndvcmRzIiwic3BsaXQiLCJpbml0aWFscyIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwicCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AllUserItems.jsx\n"));

/***/ })

});