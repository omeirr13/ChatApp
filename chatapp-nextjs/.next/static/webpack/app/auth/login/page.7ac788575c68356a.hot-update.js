"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./app/auth/login/page.js":
/*!********************************!*\
  !*** ./app/auth/login/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useLocalStorage */ \"(app-pages-browser)/./hooks/useLocalStorage.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_ChatContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/ChatContext */ \"(app-pages-browser)/./app/ChatContext.js\");\n/* harmony import */ var _app_SocketContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/SocketContext */ \"(app-pages-browser)/./app/SocketContext.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Next.js 13+ useRouter\n\n\n\n\n\nfunction Login() {\n    _s();\n    const { setChatNotOpen } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_ChatContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    //local storage\n    const { setItem } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"currentLoggedIn\");\n    const { getItems } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"users\");\n    const { setItems } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"users\");\n    const { setItems: setNotConnectedUsers } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"notConnectedUsers\");\n    const { getItems: getEmailToUsernameMapping, setEmailToUsernameMapping } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"emailToUsernameMappings\");\n    //hooks\n    //useStates\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        \"email\": \"\",\n        \"password\": \"\"\n    });\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //useContexts\n    const { socket } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_SocketContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    // const socket = useSocket();\n    const { isLoggedIn, setIsLoggedIn } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_ChatContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    //useRouter\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    //useEffects\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (localStorage.getItem(\"currentLoggedIn\")) {\n            router.push(\"/auth/login\");\n        }\n    }, [\n        router\n    ]);\n    // NextAuth session\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status === \"authenticated\") {\n            setIsLoggedIn(true);\n            const username = session.user.name;\n            const email = session.user.email;\n            setItem(email);\n            const allUserEmails = getEmailToUsernameMapping();\n            console.log(allUserEmails);\n            alert(1);\n            if (!Object.keys(allUserEmails).includes(email)) {\n                setNotConnectedUsers(email);\n                setItems({\n                    username,\n                    email,\n                    NaN\n                });\n                setEmailToUsernameMapping(email, username);\n            }\n            router.push(\"/chat\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    // handle submit of form\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const { email, password } = formData;\n        const storedUsers = getItems();\n        const user = storedUsers.find((user)=>user.email === email);\n        if (email === \"\" || password === \"\") {\n            setErrorMessage(\"One or more fields are missing!\");\n            return;\n        }\n        if (!user || user.password !== password) {\n            setErrorMessage(\"Invalid email or password.\");\n            return;\n        }\n        setItem(user.email); //set current logged in user\n        setIsLoggedIn(true);\n        setFormData({\n            \"email\": \"\",\n            \"password\": \"\"\n        });\n        setErrorMessage(\"\");\n        console.log(\"going to emit\");\n        setChatNotOpen(false);\n        socket.emit(\"login\", {\n            \"email\": user.email\n        });\n    };\n    // set formData whenever input field of id email changes\n    const handleChange = (e)=>{\n        let updatedFormData = {\n            ...formData,\n            [e.target.name]: e.target.value\n        };\n        setFormData(updatedFormData);\n    };\n    // if already logged in, redirect to chat page\n    if (isLoggedIn) {\n        router.push(\"/chat\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-container max-w-[400px] my-20 p-5 mx-auto rounded-md bg-white border border-gray-400 border-solid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-5 text-xl font-bold text-black\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-600\",\n                    children: errorMessage\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                    lineNumber: 113,\n                    columnNumber: 34\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    class: \"block mb-2 font-bold text-black\",\n                                    htmlFor: \"email\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"w-[270px] p-0.5 border border-gray-400 border-solid rounded-md bg-white text-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    class: \"block mb-2 font-bold text-black\",\n                                    htmlFor: \"password\",\n                                    children: \"Password:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    value: formData.password,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"w-[270px] p-0.5 border border-gray-400 border-solid rounded-md bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                            lineNumber: 129,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex justify-center mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                                        onClick: handleSubmit,\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex justify-center mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signIn)(),\n                                        children: [\n                                            \"Login With Google\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faGoogle,\n                                                className: \"ml-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                                lineNumber: 147,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                            lineNumber: 141,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, this);\n}\n_s(Login, \"ZQlDUHbeI2H/tZN+xg4N8IoQYDc=\", false, function() {\n    return [\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL2xvZ2luL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDSTtBQUNsQixDQUFDLHdCQUF3QjtBQUN6QjtBQUNJO0FBQ2lCO0FBQ0g7QUFDRDtBQUU5QyxTQUFTYTs7SUFDcEIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR1osaURBQVVBLENBQUNJLHdEQUFXQTtJQUVqRCxlQUFlO0lBQ2YsTUFBTSxFQUFFUyxPQUFPLEVBQUUsR0FBR2YsdUVBQWVBLENBQUM7SUFDcEMsTUFBTSxFQUFFZ0IsUUFBUSxFQUFFLEdBQUdoQix1RUFBZUEsQ0FBQztJQUNyQyxNQUFNLEVBQUVpQixRQUFRLEVBQUUsR0FBR2pCLHVFQUFlQSxDQUFDO0lBQ3JDLE1BQU0sRUFBRWlCLFVBQVVDLG9CQUFvQixFQUFFLEdBQUdsQix1RUFBZUEsQ0FBQztJQUMzRCxNQUFNLEVBQUVnQixVQUFVRyx5QkFBeUIsRUFBRUMseUJBQXlCLEVBQUUsR0FBR3BCLHVFQUFlQSxDQUFDO0lBRTNGLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQUM7UUFDckMsU0FBUztRQUNULFlBQVk7SUFDaEI7SUFDQSxNQUFNLENBQUNtQixjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRWpELGFBQWE7SUFDYixNQUFNLEVBQUVxQixNQUFNLEVBQUUsR0FBR3ZCLGlEQUFVQSxDQUFDSywwREFBYUE7SUFDM0MsOEJBQThCO0lBQzlCLE1BQU0sRUFBRW1CLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUd6QixpREFBVUEsQ0FBQ0ksd0RBQVdBO0lBRTVELFdBQVc7SUFDWCxNQUFNc0IsU0FBU3ZCLDBEQUFTQTtJQUV4QixZQUFZO0lBQ1pGLGdEQUFTQSxDQUFDO1FBQ04sSUFBSTBCLGFBQWFDLE9BQU8sQ0FBQyxvQkFBb0I7WUFDekNGLE9BQU9HLElBQUksQ0FB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ZjtvQ0FDVmdCLFFBQVE7b0NBQ1JYLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNEOzRCQUFJTSxPQUFNOzs4Q0FDUCw4REFBQ047b0NBQUlNLE9BQU07OENBQ1AsNEVBQUNPO3dDQUFPSixNQUFLO3dDQUFTSCxPQUFNO3dDQUFxTlEsU0FBU3pCO2tEQUFjOzs7Ozs7Ozs7Ozs4Q0FFNVEsOERBQUNXO29DQUFJTSxPQUFNOzhDQUNQLDRFQUFDTzt3Q0FBT0osTUFBSzt3Q0FBU0gsT0FBTTt3Q0FBcU5RLFNBQVMsSUFBTTdELHVEQUFNQTs7NENBQUk7MERBQ3RRLDhEQUFDSCwyRUFBZUE7Z0RBQ1ppRSxNQUFNaEUsd0VBQVFBO2dEQUNka0QsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU5QztHQXBKd0I5Qzs7UUFJQWIsbUVBQWVBO1FBQ2RBLG1FQUFlQTtRQUNmQSxtRUFBZUE7UUFDT0EsbUVBQWVBO1FBQ2lCQSxtRUFBZUE7UUFnQjNFSyxzREFBU0E7UUFVVUssdURBQVVBOzs7S0FsQ3hCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXV0aC9sb2dpbi9wYWdlLmpzPzhlNTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJzsgLy8gTmV4dC5qcyAxMysgdXNlUm91dGVyXG5pbXBvcnQgQ2hhdENvbnRleHQgZnJvbSAnQC9hcHAvQ2hhdENvbnRleHQnO1xuaW1wb3J0IFNvY2tldENvbnRleHQgZnJvbSAnQC9hcHAvU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFHb29nbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCB7IHNldENoYXROb3RPcGVuIH0gPSB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcblxuICAgIC8vbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHsgc2V0SXRlbSB9ID0gdXNlTG9jYWxTdG9yYWdlKCdjdXJyZW50TG9nZ2VkSW4nKTtcbiAgICBjb25zdCB7IGdldEl0ZW1zIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3VzZXJzJyk7XG4gICAgY29uc3QgeyBzZXRJdGVtcyB9ID0gdXNlTG9jYWxTdG9yYWdlKCd1c2VycycpO1xuICAgIGNvbnN0IHsgc2V0SXRlbXM6IHNldE5vdENvbm5lY3RlZFVzZXJzIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ25vdENvbm5lY3RlZFVzZXJzJyk7XG4gICAgY29uc3QgeyBnZXRJdGVtczogZ2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZywgc2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZyB9ID0gdXNlTG9jYWxTdG9yYWdlKCdlbWFpbFRvVXNlcm5hbWVNYXBwaW5ncycpO1xuXG4gICAgLy9ob29rc1xuICAgIC8vdXNlU3RhdGVzXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICdlbWFpbCc6ICcnLFxuICAgICAgICAncGFzc3dvcmQnOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvL3VzZUNvbnRleHRzXG4gICAgY29uc3QgeyBzb2NrZXQgfSA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XG4gICAgLy8gY29uc3Qgc29ja2V0ID0gdXNlU29ja2V0KCk7XG4gICAgY29uc3QgeyBpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluIH0gPSB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcblxuICAgIC8vdXNlUm91dGVyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvL3VzZUVmZmVjdHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRMb2dnZWRJbicpKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKVxuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pXG5cbiAgICAvLyBOZXh0QXV0aCBzZXNzaW9uXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcbiAgICAgICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24udXNlci5uYW1lO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gICAgICAgICAgICBzZXRJdGVtKGVtYWlsKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsVXNlckVtYWlscyA9IGdldEVtYWlsVG9Vc2VybmFtZU1hcHBpbmcoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFVzZXJFbWFpbHMpO1xuICAgICAgICAgICAgYWxlcnQoMSlcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoYWxsVXNlckVtYWlscykuaW5jbHVkZXMoZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgc2V0Tm90Q29ubmVjdGVkVXNlcnMoZW1haWwpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHsgdXNlcm5hbWUsIGVtYWlsLCBOYU4gfSk7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZyhlbWFpbCwgdXNlcm5hbWUpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoYXQnKTtcbiAgICAgICAgfVxuICAgIH0sIFtzdGF0dXMsIHJvdXRlcl0pO1xuICAgIC8vIGhhbmRsZSBzdWJtaXQgb2YgZm9ybVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGZvcm1EYXRhO1xuXG4gICAgICAgIGNvbnN0IHN0b3JlZFVzZXJzID0gZ2V0SXRlbXMoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IHN0b3JlZFVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCk7XG5cbiAgICAgICAgaWYgKGVtYWlsID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIk9uZSBvciBtb3JlIGZpZWxkcyBhcmUgbWlzc2luZyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VyIHx8IHVzZXIucGFzc3dvcmQgIT09IHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEl0ZW0odXNlci5lbWFpbCk7Ly9zZXQgY3VycmVudCBsb2dnZWQgaW4gdXNlclxuICAgICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICdlbWFpbCc6ICcnLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogJydcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnb2luZyB0byBlbWl0JylcbiAgICAgICAgc2V0Q2hhdE5vdE9wZW4oZmFsc2UpO1xuICAgICAgICBzb2NrZXQuZW1pdCgnbG9naW4nLCB7ICdlbWFpbCc6IHVzZXIuZW1haWwgfSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGZvcm1EYXRhIHdoZW5ldmVyIGlucHV0IGZpZWxkIG9mIGlkIGVtYWlsIGNoYW5nZXNcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlZEZvcm1EYXRhID0ge1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBzZXRGb3JtRGF0YSh1cGRhdGVkRm9ybURhdGEpO1xuICAgIH1cblxuICAgIC8vIGlmIGFscmVhZHkgbG9nZ2VkIGluLCByZWRpcmVjdCB0byBjaGF0IHBhZ2VcbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2NoYXQnKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lciBtYXgtdy1bNDAwcHhdIG15LTIwIHAtNSBteC1hdXRvIHJvdW5kZWQtbWQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBib3JkZXItc29saWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01IHRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgbWItMiBmb250LWJvbGQgdGV4dC1ibGFja1wiIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyNzBweF0gcC0wLjUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBib3JkZXItc29saWQgcm91bmRlZC1tZCBiZy13aGl0ZSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIG1iLTIgZm9udC1ib2xkIHRleHQtYmxhY2tcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjcwcHhdIHAtMC41IGJvcmRlciBib3JkZXItZ3JheS00MDAgYm9yZGVyLXNvbGlkIHJvdW5kZWQtbWQgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtZS0yIG1iLTIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1lLTIgbWItMiBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5Mb2dpbiBXaXRoIEdvb2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yYWdlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDaGF0Q29udGV4dCIsIlNvY2tldENvbnRleHQiLCJGb250QXdlc29tZUljb24iLCJmYUdvb2dsZSIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiTG9naW4iLCJzZXRDaGF0Tm90T3BlbiIsInNldEl0ZW0iLCJnZXRJdGVtcyIsInNldEl0ZW1zIiwic2V0Tm90Q29ubmVjdGVkVXNlcnMiLCJnZXRFbWFpbFRvVXNlcm5hbWVNYXBwaW5nIiwic2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzb2NrZXQiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInJvdXRlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJ1c2VybmFtZSIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJhbGxVc2VyRW1haWxzIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwiTmFOIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmQiLCJzdG9yZWRVc2VycyIsImZpbmQiLCJlbWl0IiwiaGFuZGxlQ2hhbmdlIiwidXBkYXRlZEZvcm1EYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJmb3JtIiwibGFiZWwiLCJjbGFzcyIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/login/page.js\n"));

/***/ })

});