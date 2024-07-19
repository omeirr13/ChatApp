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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllUserItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_ChatContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/ChatContext */ \"(app-pages-browser)/./app/ChatContext.js\");\n/* harmony import */ var _app_SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/SocketContext */ \"(app-pages-browser)/./app/SocketContext.js\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useLocalStorage */ \"(app-pages-browser)/./hooks/useLocalStorage.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AllUserItem(param) {\n    let { email } = param;\n    _s();\n    //hooks\n    //useContext\n    const { socket } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_SocketContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const { setRefreshAllUserBar, refreshAllUserBar } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_ChatContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    //useLocalStorage\n    const { getItem: getEmail } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"currentLoggedIn\");\n    const { removeItem: removeUser } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"notConnectedUsers\");\n    const loggedInUserEmail = getEmail();\n    const { getItems: getEmailToUsernameMapping } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"emailToUsernameMapping\");\n    const emailToUsernameMap = getEmailToUsernameMapping();\n    const handleClick = ()=>{\n        removeUser(email);\n        setRefreshAllUserBar(!refreshAllUserBar);\n        socket.emit(\"sendRequest\", email, loggedInUserEmail);\n    };\n    const getInitials = (name)=>{\n        const words = name.split(\" \");\n        const initials = words.map((word)=>word.charAt(0).toUpperCase()).join(\"\");\n        return initials;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between pl-2 border-b border-gray-100 border-solid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[100%] flex items-center text-white overflow-x-hidden overflow-y-hidden h-20 py-1 px-1 rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[100%] flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-10 h-10 rounded-3xl mr-2 flex justify-center items-center bg-[#e8b9b1]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: getInitials(emailToUsernameMap[email])\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[#4d4d4d] text-base font-bold\",\n                                    children: emailToUsernameMap[email]\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: handleClick,\n                            className: \"bg-[#173c5f] h-9 w-24 rounded-[34px]\",\n                            children: \"Send Req\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/components/AllUserItems.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(AllUserItem, \"4V6oKv0PtqfR2D5ZyLyWL49K5wY=\", false, function() {\n    return [\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage\n    ];\n});\n_c = AllUserItem;\nvar _c;\n$RefreshReg$(_c, \"AllUserItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FsbFVzZXJJdGVtcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0k7QUFDVTtBQUN2QjtBQUVwQixTQUFTSSxZQUFZLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFFaEMsT0FBTztJQUNQLFlBQVk7SUFDWixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSCxpREFBVUEsQ0FBQ0YsMERBQWFBO0lBRzNDLE1BQU0sRUFBRU0sb0JBQW9CLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdMLGlEQUFVQSxDQUFDSCx3REFBV0E7SUFDMUUsaUJBQWlCO0lBQ2pCLE1BQU0sRUFBRVMsU0FBU0MsUUFBUSxFQUFFLEdBQUdSLHVFQUFlQSxDQUFDO0lBQzlDLE1BQU0sRUFBRVMsWUFBWUMsVUFBVSxFQUFFLEdBQUdWLHVFQUFlQSxDQUFDO0lBRW5ELE1BQU1XLG9CQUFvQkg7SUFFMUIsTUFBTSxFQUFFSSxVQUFVQyx5QkFBeUIsRUFBRSxHQUFHYix1RUFBZUEsQ0FBQztJQUNoRSxNQUFNYyxxQkFBcUJEO0lBRTNCLE1BQU1FLGNBQWM7UUFDaEJMLFdBQVdQO1FBQ1hFLHFCQUFxQixDQUFDQztRQUN0QkYsT0FBT1ksSUFBSSxDQUFDLGVBQWViLE9BQU9RO0lBQ3RDO0lBQ0EsTUFBTU0sY0FBYyxDQUFDQztRQUNqQixNQUFNQyxRQUFRRCxLQUFLRSxLQUFLLENBQUM7UUFDekIsTUFBTUMsV0FBV0YsTUFBTUcsR0FBRyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxJQUFJQyxJQUFJLENBQUM7UUFFdEUsT0FBT0w7SUFDWDtJQUVBLHFCQUNJLDhEQUFDTTtrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0M7a0RBQU1aLFlBQVlILGtCQUFrQixDQUFDWCxNQUFNOzs7Ozs7Ozs7Ozs4Q0FFaEQsOERBQUMyQjtvQ0FBRUYsV0FBVTs4Q0FBc0NkLGtCQUFrQixDQUFDWCxNQUFNOzs7Ozs7Ozs7Ozs7c0NBRXBGLDhEQUFDNEI7NEJBQU9DLE1BQUs7NEJBQVNDLFNBQVNsQjs0QkFBYWEsV0FBVTtzQ0FBdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqSDtHQWpEd0IxQjs7UUFTVUYsbUVBQWVBO1FBQ1ZBLG1FQUFlQTtRQUlGQSxtRUFBZUE7OztLQWQzQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQWxsVXNlckl0ZW1zLmpzeD9mYTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGF0Q29udGV4dCBmcm9tIFwiQC9hcHAvQ2hhdENvbnRleHRcIjtcbmltcG9ydCBTb2NrZXRDb250ZXh0IGZyb20gXCJAL2FwcC9Tb2NrZXRDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiQC9ob29rcy91c2VMb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsVXNlckl0ZW0oeyBlbWFpbCB9KSB7XG5cbiAgICAvL2hvb2tzXG4gICAgLy91c2VDb250ZXh0XG4gICAgY29uc3QgeyBzb2NrZXQgfSA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XG5cbiAgICBcbiAgICBjb25zdCB7IHNldFJlZnJlc2hBbGxVc2VyQmFyLCByZWZyZXNoQWxsVXNlckJhciB9ID0gdXNlQ29udGV4dChDaGF0Q29udGV4dCk7XG4gICAgLy91c2VMb2NhbFN0b3JhZ2VcbiAgICBjb25zdCB7IGdldEl0ZW06IGdldEVtYWlsIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2N1cnJlbnRMb2dnZWRJbicpO1xuICAgIGNvbnN0IHsgcmVtb3ZlSXRlbTogcmVtb3ZlVXNlciB9ID0gdXNlTG9jYWxTdG9yYWdlKCdub3RDb25uZWN0ZWRVc2VycycpO1xuXG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyRW1haWwgPSBnZXRFbWFpbCgpO1xuXG4gICAgY29uc3QgeyBnZXRJdGVtczogZ2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZyB9ID0gdXNlTG9jYWxTdG9yYWdlKCdlbWFpbFRvVXNlcm5hbWVNYXBwaW5nJyk7XG4gICAgY29uc3QgZW1haWxUb1VzZXJuYW1lTWFwID0gZ2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZygpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVVzZXIoZW1haWwpO1xuICAgICAgICBzZXRSZWZyZXNoQWxsVXNlckJhcighcmVmcmVzaEFsbFVzZXJCYXIpO1xuICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZFJlcXVlc3QnLCBlbWFpbCwgbG9nZ2VkSW5Vc2VyRW1haWwpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0SW5pdGlhbHMgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB3b3JkcyA9IG5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbHMgPSB3b3Jkcy5tYXAod29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpKS5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbHM7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHBsLTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGJvcmRlci1zb2xpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTAwJV0gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWhpZGRlbiBoLTIwIHB5LTEgcHgtMSByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTAwJV0gZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLTN4bCBtci0yIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLVsjZThiOWIxXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Z2V0SW5pdGlhbHMoZW1haWxUb1VzZXJuYW1lTWFwW2VtYWlsXSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM0ZDRkNGRdIHRleHQtYmFzZSBmb250LWJvbGRcIj57ZW1haWxUb1VzZXJuYW1lTWFwW2VtYWlsXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJnLVsjMTczYzVmXSBoLTkgdy0yNCByb3VuZGVkLVszNHB4XVwiPlNlbmQgUmVxPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIml0ZW0tdGV4dFwiPntsYXN0TWVzc2FnZX08L3A+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkNoYXRDb250ZXh0IiwiU29ja2V0Q29udGV4dCIsInVzZUxvY2FsU3RvcmFnZSIsInVzZUNvbnRleHQiLCJBbGxVc2VySXRlbSIsImVtYWlsIiwic29ja2V0Iiwic2V0UmVmcmVzaEFsbFVzZXJCYXIiLCJyZWZyZXNoQWxsVXNlckJhciIsImdldEl0ZW0iLCJnZXRFbWFpbCIsInJlbW92ZUl0ZW0iLCJyZW1vdmVVc2VyIiwibG9nZ2VkSW5Vc2VyRW1haWwiLCJnZXRJdGVtcyIsImdldEVtYWlsVG9Vc2VybmFtZU1hcHBpbmciLCJlbWFpbFRvVXNlcm5hbWVNYXAiLCJoYW5kbGVDbGljayIsImVtaXQiLCJnZXRJbml0aWFscyIsIm5hbWUiLCJ3b3JkcyIsInNwbGl0IiwiaW5pdGlhbHMiLCJtYXAiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJqb2luIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInAiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AllUserItems.jsx\n"));

/***/ })

});