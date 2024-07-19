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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useLocalStorage */ \"(app-pages-browser)/./hooks/useLocalStorage.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_ChatContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/ChatContext */ \"(app-pages-browser)/./app/ChatContext.js\");\n/* harmony import */ var _app_SocketContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/SocketContext */ \"(app-pages-browser)/./app/SocketContext.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Next.js 13+ useRouter\n\n\n\n\n\nfunction Login() {\n    _s();\n    const { setChatNotOpen } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_ChatContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    //local storage\n    const { setItem } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"currentLoggedIn\");\n    const { getItems } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"users\");\n    const { setItems } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"users\");\n    const { setItems: setNotConnectedUsers } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"notConnectedUsers\");\n    const { getItems: getEmailToUsernameMapping, setEmailToUsernameMapping } = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)(\"emailToUsernameMappings\");\n    //hooks\n    //useStates\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        \"email\": \"\",\n        \"password\": \"\"\n    });\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //useContexts\n    const { socket } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_SocketContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    // const socket = useSocket();\n    const { isLoggedIn, setIsLoggedIn } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_ChatContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    //useRouter\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    //useEffects\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (localStorage.getItem(\"currentLoggedIn\")) {\n            router.push(\"/auth/login\");\n        }\n    }, [\n        router\n    ]);\n    // NextAuth session\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status === \"authenticated\") {\n            setIsLoggedIn(true);\n            const username = session.user.name;\n            const email = session.user.email;\n            setItem(email);\n            const allUserEmails = getEmailToUsernameMapping();\n            let existingMappingsString = localStorage.getItem(\"emailToUsernameMapping\");\n            console.log(existingMappingsString);\n            existingMappingsString = JSON.parse(existingMappingsString);\n            console.log(existingMappingsString);\n            alert(1);\n            if (!Object.keys(allUserEmails).includes(email)) {\n                setNotConnectedUsers(email);\n                setItems({\n                    username,\n                    email,\n                    NaN\n                });\n                setEmailToUsernameMapping(email, username);\n            }\n            router.push(\"/chat\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    // handle submit of form\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const { email, password } = formData;\n        const storedUsers = getItems();\n        const user = storedUsers.find((user)=>user.email === email);\n        if (email === \"\" || password === \"\") {\n            setErrorMessage(\"One or more fields are missing!\");\n            return;\n        }\n        if (!user || user.password !== password) {\n            setErrorMessage(\"Invalid email or password.\");\n            return;\n        }\n        setItem(user.email); //set current logged in user\n        setIsLoggedIn(true);\n        setFormData({\n            \"email\": \"\",\n            \"password\": \"\"\n        });\n        setErrorMessage(\"\");\n        console.log(\"going to emit\");\n        setChatNotOpen(false);\n        socket.emit(\"login\", {\n            \"email\": user.email\n        });\n    };\n    // set formData whenever input field of id email changes\n    const handleChange = (e)=>{\n        let updatedFormData = {\n            ...formData,\n            [e.target.name]: e.target.value\n        };\n        setFormData(updatedFormData);\n    };\n    // if already logged in, redirect to chat page\n    if (isLoggedIn) {\n        router.push(\"/chat\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-container max-w-[400px] my-20 p-5 mx-auto rounded-md bg-white border border-gray-400 border-solid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-5 text-xl font-bold text-black\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-600\",\n                    children: errorMessage\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                    lineNumber: 119,\n                    columnNumber: 34\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    class: \"block mb-2 font-bold text-black\",\n                                    htmlFor: \"email\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"w-[270px] p-0.5 border border-gray-400 border-solid rounded-md bg-white text-black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                            lineNumber: 123,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    class: \"block mb-2 font-bold text-black\",\n                                    htmlFor: \"password\",\n                                    children: \"Password:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    value: formData.password,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"w-[270px] p-0.5 border border-gray-400 border-solid rounded-md bg-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex justify-center mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                                        onClick: handleSubmit,\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex justify-center mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signIn)(),\n                                        children: [\n                                            \"Login With Google\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faGoogle,\n                                                className: \"ml-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                                lineNumber: 153,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                            lineNumber: 147,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/react-training/chatapp-nextjs/chatapp-nextjs/app/auth/login/page.js\",\n        lineNumber: 116,\n        columnNumber: 9\n    }, this);\n}\n_s(Login, \"ZQlDUHbeI2H/tZN+xg4N8IoQYDc=\", false, function() {\n    return [\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL2xvZ2luL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDSTtBQUNsQixDQUFDLHdCQUF3QjtBQUN6QjtBQUNJO0FBQ2lCO0FBQ0g7QUFDRDtBQUU5QyxTQUFTYTs7SUFDcEIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR1osaURBQVVBLENBQUNJLHdEQUFXQTtJQUVqRCxlQUFlO0lBQ2YsTUFBTSxFQUFFUyxPQUFPLEVBQUUsR0FBR2YsdUVBQWVBLENBQUM7SUFDcEMsTUFBTSxFQUFFZ0IsUUFBUSxFQUFFLEdBQUdoQix1RUFBZUEsQ0FBQztJQUNyQyxNQUFNLEVBQUVpQixRQUFRLEVBQUUsR0FBR2pCLHVFQUFlQSxDQUFDO0lBQ3JDLE1BQU0sRUFBRWlCLFVBQVVDLG9CQUFvQixFQUFFLEdBQUdsQix1RUFBZUEsQ0FBQztJQUMzRCxNQUFNLEVBQUVnQixVQUFVRyx5QkFBeUIsRUFBRUMseUJBQXlCLEVBQUUsR0FBR3BCLHVFQUFlQSxDQUFDO0lBRTNGLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQUM7UUFDckMsU0FBUztRQUNULFlBQVk7SUFDaEI7SUFDQSxNQUFNLENBQUNtQixjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRWpELGFBQWE7SUFDYixNQUFNLEVBQUVxQixNQUFNLEVBQUUsR0FBR3ZCLGlEQUFVQSxDQUFDSywwREFBYUE7SUFDM0MsOEJBQThCO0lBQzlCLE1BQU0sRUFBRW1CLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUd6QixpREFBVUEsQ0FBQ0ksd0RBQVdBO0lBRTVELFdBQVc7SUFDWCxNQUFNc0IsU0FBU3ZCLDBEQUFTQTtJQUV4QixZQUFZO0lBQ1pGLGdEQUFTQSxDQUFDO1FBQ04sSUFBSTBCLGFBQWFDLE9BQU8sQ0FBQyxvQkFBb0I7WUFDekNGLE9BQU9HLElBQUksQ0FB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Ozs4Q0FDbEUsOERBQUNDO29DQUNHQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIbEMsTUFBSztvQ0FDTHVCLE9BQU92QyxTQUFTZ0MsUUFBUTtvQ0FDeEJtQixVQUFVZjtvQ0FDVmdCLFFBQVE7b0NBQ1JYLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNEOzRCQUFJTSxPQUFNOzs4Q0FDUCw4REFBQ047b0NBQUlNLE9BQU07OENBQ1AsNEVBQUNPO3dDQUFPSixNQUFLO3dDQUFTSCxPQUFNO3dDQUFxTlEsU0FBU3pCO2tEQUFjOzs7Ozs7Ozs7Ozs4Q0FFNVEsOERBQUNXO29DQUFJTSxPQUFNOzhDQUNQLDRFQUFDTzt3Q0FBT0osTUFBSzt3Q0FBU0gsT0FBTTt3Q0FBcU5RLFNBQVMsSUFBTWhFLHVEQUFNQTs7NENBQUk7MERBQ3RRLDhEQUFDSCwyRUFBZUE7Z0RBQ1pvRSxNQUFNbkUsd0VBQVFBO2dEQUNkcUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU5QztHQTFKd0JqRDs7UUFJQWIsbUVBQWVBO1FBQ2RBLG1FQUFlQTtRQUNmQSxtRUFBZUE7UUFDT0EsbUVBQWVBO1FBQ2lCQSxtRUFBZUE7UUFnQjNFSyxzREFBU0E7UUFVVUssdURBQVVBOzs7S0FsQ3hCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXV0aC9sb2dpbi9wYWdlLmpzPzhlNTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICdAL2hvb2tzL3VzZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJzsgLy8gTmV4dC5qcyAxMysgdXNlUm91dGVyXG5pbXBvcnQgQ2hhdENvbnRleHQgZnJvbSAnQC9hcHAvQ2hhdENvbnRleHQnO1xuaW1wb3J0IFNvY2tldENvbnRleHQgZnJvbSAnQC9hcHAvU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFHb29nbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCB7IHNldENoYXROb3RPcGVuIH0gPSB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcblxuICAgIC8vbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHsgc2V0SXRlbSB9ID0gdXNlTG9jYWxTdG9yYWdlKCdjdXJyZW50TG9nZ2VkSW4nKTtcbiAgICBjb25zdCB7IGdldEl0ZW1zIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3VzZXJzJyk7XG4gICAgY29uc3QgeyBzZXRJdGVtcyB9ID0gdXNlTG9jYWxTdG9yYWdlKCd1c2VycycpO1xuICAgIGNvbnN0IHsgc2V0SXRlbXM6IHNldE5vdENvbm5lY3RlZFVzZXJzIH0gPSB1c2VMb2NhbFN0b3JhZ2UoJ25vdENvbm5lY3RlZFVzZXJzJyk7XG4gICAgY29uc3QgeyBnZXRJdGVtczogZ2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZywgc2V0RW1haWxUb1VzZXJuYW1lTWFwcGluZyB9ID0gdXNlTG9jYWxTdG9yYWdlKCdlbWFpbFRvVXNlcm5hbWVNYXBwaW5ncycpO1xuXG4gICAgLy9ob29rc1xuICAgIC8vdXNlU3RhdGVzXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICdlbWFpbCc6ICcnLFxuICAgICAgICAncGFzc3dvcmQnOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvL3VzZUNvbnRleHRzXG4gICAgY29uc3QgeyBzb2NrZXQgfSA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XG4gICAgLy8gY29uc3Qgc29ja2V0ID0gdXNlU29ja2V0KCk7XG4gICAgY29uc3QgeyBpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluIH0gPSB1c2VDb250ZXh0KENoYXRDb250ZXh0KTtcblxuICAgIC8vdXNlUm91dGVyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvL3VzZUVmZmVjdHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRMb2dnZWRJbicpKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKVxuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pXG5cbiAgICAvLyBOZXh0QXV0aCBzZXNzaW9uXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcbiAgICAgICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24udXNlci5uYW1lO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gICAgICAgICAgICBzZXRJdGVtKGVtYWlsKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsVXNlckVtYWlscyA9IGdldEVtYWlsVG9Vc2VybmFtZU1hcHBpbmcoKTtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ01hcHBpbmdzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsVG9Vc2VybmFtZU1hcHBpbmcnKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZXhpc3RpbmdNYXBwaW5nc1N0cmluZyk7XG4gICAgICAgICAgICBleGlzdGluZ01hcHBpbmdzU3RyaW5nID0gSlNPTi5wYXJzZShleGlzdGluZ01hcHBpbmdzU3RyaW5nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nTWFwcGluZ3NTdHJpbmcpO1xuXG5cbiAgICAgICAgICAgIGFsZXJ0KDEpO1xuICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhhbGxVc2VyRW1haWxzKS5pbmNsdWRlcyhlbWFpbCkpIHtcbiAgICAgICAgICAgICAgICBzZXROb3RDb25uZWN0ZWRVc2VycyhlbWFpbCk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMoeyB1c2VybmFtZSwgZW1haWwsIE5hTiB9KTtcbiAgICAgICAgICAgICAgICBzZXRFbWFpbFRvVXNlcm5hbWVNYXBwaW5nKGVtYWlsLCB1c2VybmFtZSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY2hhdCcpO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXR1cywgcm91dGVyXSk7XG4gICAgLy8gaGFuZGxlIHN1Ym1pdCBvZiBmb3JtXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZm9ybURhdGE7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkVXNlcnMgPSBnZXRJdGVtcygpO1xuICAgICAgICBjb25zdCB1c2VyID0gc3RvcmVkVXNlcnMuZmluZCh1c2VyID0+IHVzZXIuZW1haWwgPT09IGVtYWlsKTtcblxuICAgICAgICBpZiAoZW1haWwgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiT25lIG9yIG1vcmUgZmllbGRzIGFyZSBtaXNzaW5nIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVzZXIgfHwgdXNlci5wYXNzd29yZCAhPT0gcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SXRlbSh1c2VyLmVtYWlsKTsvL3NldCBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyXG4gICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgJ2VtYWlsJzogJycsXG4gICAgICAgICAgICAncGFzc3dvcmQnOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvaW5nIHRvIGVtaXQnKVxuICAgICAgICBzZXRDaGF0Tm90T3BlbihmYWxzZSk7XG4gICAgICAgIHNvY2tldC5lbWl0KCdsb2dpbicsIHsgJ2VtYWlsJzogdXNlci5lbWFpbCB9KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgZm9ybURhdGEgd2hlbmV2ZXIgaW5wdXQgZmllbGQgb2YgaWQgZW1haWwgY2hhbmdlc1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVkRm9ybURhdGEgPSB7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEZvcm1EYXRhKHVwZGF0ZWRGb3JtRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gaWYgYWxyZWFkeSBsb2dnZWQgaW4sIHJlZGlyZWN0IHRvIGNoYXQgcGFnZVxuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvY2hhdCcpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyIG1heC13LVs0MDBweF0gbXktMjAgcC01IG14LWF1dG8gcm91bmRlZC1tZCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1zb2xpZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTUgdGV4dC14bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCI+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayBtYi0yIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCIgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI3MHB4XSBwLTAuNSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1zb2xpZCByb3VuZGVkLW1kIGJnLXdoaXRlIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgbWItMiBmb250LWJvbGQgdGV4dC1ibGFja1wiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyNzBweF0gcC0wLjUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBib3JkZXItc29saWQgcm91bmRlZC1tZCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1lLTIgbWItMiBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbWUtMiBtYi0yIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCIgb25DbGljaz17KCkgPT4gc2lnbkluKCl9PkxvZ2luIFdpdGggR29vZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VMb2NhbFN0b3JhZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNoYXRDb250ZXh0IiwiU29ja2V0Q29udGV4dCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhR29vZ2xlIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJMb2dpbiIsInNldENoYXROb3RPcGVuIiwic2V0SXRlbSIsImdldEl0ZW1zIiwic2V0SXRlbXMiLCJzZXROb3RDb25uZWN0ZWRVc2VycyIsImdldEVtYWlsVG9Vc2VybmFtZU1hcHBpbmciLCJzZXRFbWFpbFRvVXNlcm5hbWVNYXBwaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInNvY2tldCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwicm91dGVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInVzZXJuYW1lIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImFsbFVzZXJFbWFpbHMiLCJleGlzdGluZ01hcHBpbmdzU3RyaW5nIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImFsZXJ0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwiTmFOIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFzc3dvcmQiLCJzdG9yZWRVc2VycyIsImZpbmQiLCJlbWl0IiwiaGFuZGxlQ2hhbmdlIiwidXBkYXRlZEZvcm1EYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJmb3JtIiwibGFiZWwiLCJjbGFzcyIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/login/page.js\n"));

/***/ })

});