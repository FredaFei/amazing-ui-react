(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./examples/markdown/tree-demo-1.md":
/*!******************************************!*\
  !*** ./examples/markdown/tree-demo-1.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [data] = useState([\\r\\n    {\\r\\n      text: '1',\\r\\n      key: '1',\\r\\n      children: [\\r\\n        {\\r\\n          text: '1.1',\\r\\n          key: '1.1',\\r\\n          children: [\\r\\n            {\\r\\n              text: '1.1.1',\\r\\n              key: '1.1.1',\\r\\n            },\\r\\n            {\\r\\n              text: '1.1.2',\\r\\n              key: '1.1.2',\\r\\n            }\\r\\n          ]\\r\\n        }, {\\r\\n          text: '1.2',\\r\\n          key: '1.2',\\r\\n        },\\r\\n      ],\\r\\n    }, {\\r\\n      text: '2',\\r\\n      key: '2',\\r\\n      children: [\\r\\n        {\\r\\n          text: '2.1',\\r\\n          key: '2.1',\\r\\n        }, {\\r\\n          text: '2.2',\\r\\n          key: '2.2',\\r\\n        }\\r\\n      ],\\r\\n    }\\r\\n  ]);\\r\\n  const [selectedValues, setSelectedValues] = useState(['1.1.1', '1.1','1']);\\r\\n  const onChange = (item: string[], setType: (value: string[]) => void) => {\\r\\n    setType(item);\\r\\n  };\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Tree sourceData={data} selected={selectedValues} multiple={true}\\r\\n                  onChange={(values) => onChange(values, setSelectedValues)}/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/tree-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/tree-demo-2.md":
/*!******************************************!*\
  !*** ./examples/markdown/tree-demo-2.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [data] = useState([\\r\\n    {\\r\\n      text: '1',\\r\\n      key: '1',\\r\\n      children: [\\r\\n        {\\r\\n          text: '1.1',\\r\\n          key: '1.1',\\r\\n          children: [\\r\\n            {\\r\\n              text: '1.1.1',\\r\\n              key: '1.1.1',\\r\\n            },\\r\\n            {\\r\\n              text: '1.1.2',\\r\\n              key: '1.1.2',\\r\\n            }\\r\\n          ]\\r\\n        }, {\\r\\n          text: '1.2',\\r\\n          key: '1.2',\\r\\n        },\\r\\n      ],\\r\\n    }, {\\r\\n      text: '2',\\r\\n      key: '2',\\r\\n      children: [\\r\\n        {\\r\\n          text: '2.1',\\r\\n          key: '2.1',\\r\\n        }, {\\r\\n          text: '2.2',\\r\\n          key: '2.2',\\r\\n        }\\r\\n      ],\\r\\n    }\\r\\n  ]);\\r\\n  const [selected, setSelected] = useState(['1.1']);\\r\\n  const onChange = (item: string[], setType: (value: string[]) => void) => {\\r\\n    setType(item);\\r\\n  };\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Tree sourceData={data} selected={selected} multiple={false}\\r\\n                  onChange={(values) => onChange(values, setSelected)}/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/tree-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/tree-demo-3.md":
/*!******************************************!*\
  !*** ./examples/markdown/tree-demo-3.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [customData] = useState([\\r\\n    {\\r\\n      text: ()=>{return <span><Icon name=\\\"settings\\\"/> 1</span>},\\r\\n      key: '1',\\r\\n      children: [\\r\\n        {\\r\\n          text: ()=>{return <span><Icon name=\\\"upload\\\"/> 1.1</span>},\\r\\n          key: '1.1',\\r\\n          children: [\\r\\n            {\\r\\n              text: '1.1.1',\\r\\n              key: '1.1.1',\\r\\n            },\\r\\n            {\\r\\n              text: '1.1.2',\\r\\n              key: '1.1.2',\\r\\n            }\\r\\n          ]\\r\\n        }, {\\r\\n          text: ()=>{return <span><Icon name=\\\"upload\\\"/> 1.2</span>},\\r\\n          key: '1.2',\\r\\n        },\\r\\n      ],\\r\\n    }, {\\r\\n      text: ()=>{return <span><Icon name=\\\"settings\\\"/>2</span>},\\r\\n      key: '2',\\r\\n      children: [\\r\\n        {\\r\\n          text: ()=>{return <span><Icon name=\\\"upload\\\"/>2.1</span>},\\r\\n          key: '2.1',\\r\\n        }, {\\r\\n          text: ()=>{return <span><Icon name=\\\"upload\\\"/>2.2</span>},\\r\\n          key: '2.2',\\r\\n        }\\r\\n      ],\\r\\n    }\\r\\n  ]);\\r\\n  const [customSelected, setCustomSelected] = useState(['1.1.1', '2.1']);\\r\\n  const onChange = (item: string[], setType: (value: string[]) => void) => {\\r\\n    setType(item);\\r\\n  };\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Tree sourceData={customData} selected={customSelected} multiple={true}\\r\\n              onChange={(values) => onChange(values, setCustomSelected)}/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/tree-demo-3.md?");

/***/ }),

/***/ "./examples/markdown/tree-doc.md":
/*!***************************************!*\
  !*** ./examples/markdown/tree-doc.md ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| sourceData         |treeNodes 数据 |Array<{key, text, children}> |—— |—— |\\r\\n| selected |设置选中的树节点 |String[] |—— |—— |\\r\\n| multiple      |支持点选多个节点  |Boolean |true |false |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onChange    | 点击树节点触发 |       (values:String[]) => void |—— |—— |\");\n\n//# sourceURL=webpack:///./examples/markdown/tree-doc.md?");

/***/ }),

/***/ "./examples/tree.example.tsx":
/*!***********************************!*\
  !*** ./examples/tree.example.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_tree_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/tree/tree */ \"./packages/tree/tree.tsx\");\n/* harmony import */ var _markdown_tree_demo_1_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown/tree-demo-1.md */ \"./examples/markdown/tree-demo-1.md\");\n/* harmony import */ var _markdown_tree_demo_2_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/tree-demo-2.md */ \"./examples/markdown/tree-demo-2.md\");\n/* harmony import */ var _markdown_tree_demo_3_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/tree-demo-3.md */ \"./examples/markdown/tree-demo-3.md\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _markdown_tree_doc_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markdown/tree-doc.md */ \"./examples/markdown/tree-doc.md\");\n/* harmony import */ var _packages_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../packages/index */ \"./packages/index.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var data = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([\r\n        {\r\n            text: '1',\r\n            key: '1',\r\n            children: [\r\n                {\r\n                    text: '1.1',\r\n                    key: '1.1',\r\n                    children: [\r\n                        {\r\n                            text: '1.1.1',\r\n                            key: '1.1.1',\r\n                        },\r\n                        {\r\n                            text: '1.1.2',\r\n                            key: '1.1.2',\r\n                        }\r\n                    ]\r\n                }, {\r\n                    text: '1.2',\r\n                    key: '1.2',\r\n                },\r\n            ],\r\n        }, {\r\n            text: '2',\r\n            key: '2',\r\n            children: [\r\n                {\r\n                    text: '2.1',\r\n                    key: '2.1',\r\n                }, {\r\n                    text: '2.2',\r\n                    key: '2.2',\r\n                }\r\n            ],\r\n        }\r\n    ])[0];\r\n    var customData = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([\r\n        {\r\n            text: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], { name: \"settings\" }),\r\n                \" 1\"); },\r\n            key: '1',\r\n            children: [\r\n                {\r\n                    text: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], { name: \"upload\" }),\r\n                        \" 1.1\"); },\r\n                    key: '1.1',\r\n                    children: [\r\n                        {\r\n                            text: '1.1.1',\r\n                            key: '1.1.1',\r\n                        },\r\n                        {\r\n                            text: '1.1.2',\r\n                            key: '1.1.2',\r\n                        }\r\n                    ]\r\n                }, {\r\n                    text: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], { name: \"upload\" }),\r\n                        \" 1.2\"); },\r\n                    key: '1.2',\r\n                },\r\n            ],\r\n        }, {\r\n            text: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], { name: \"settings\" }),\r\n                \"2\"); },\r\n            key: '2',\r\n            children: [\r\n                {\r\n                    text: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], { name: \"upload\" }),\r\n                        \"2.1\"); },\r\n                    key: '2.1',\r\n                }, {\r\n                    text: function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], { name: \"upload\" }),\r\n                        \"2.2\"); },\r\n                    key: '2.2',\r\n                }\r\n            ],\r\n        }\r\n    ])[0];\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(['1.1']), selected = _a[0], setSelected = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(['1.1.1', '1.1', '1']), selectedValues = _b[0], setSelectedValues = _b[1];\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(['2.1']), customSelected = _c[0], setCustomSelected = _c[1];\r\n    var onChange = function (item, setType) {\r\n        setType(item);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"\\u591A\\u9009\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                \"selectedValues: \",\r\n                selectedValues.join('、')),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_tree_tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { sourceData: data, selected: selectedValues, multiple: true, onChange: function (values) { return onChange(values, setSelectedValues); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { content: _markdown_tree_demo_1_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"\\u5355\\u9009\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                \"selected: \",\r\n                selected),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_tree_tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { sourceData: data, selected: selected, multiple: false, onChange: function (values) { return onChange(values, setSelected); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { content: _markdown_tree_demo_2_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"\\u81EA\\u5B9A\\u4E49\\u8282\\u70B9\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_tree_tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { sourceData: customData, selected: customSelected, multiple: true, onChange: function (values) { return onChange(values, setCustomSelected); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { content: _markdown_tree_demo_3_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { source: _markdown_tree_doc_md__WEBPACK_IMPORTED_MODULE_7__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/tree.example.tsx?");

/***/ })

}]);