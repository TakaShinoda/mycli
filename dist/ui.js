"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const App = ({ name = "SHINODA Takahiro" }) => {
    return (react_1.default.createElement(ink_1.Box, { borderStyle: "double", padding: 1, borderColor: "green", width: 52 },
        react_1.default.createElement(ink_1.Text, null,
            "Hello, I'm ",
            react_1.default.createElement(ink_1.Text, { color: "green" }, name),
            react_1.default.createElement(ink_1.Newline, null),
            react_1.default.createElement(ink_1.Text, { color: "#1DA1F2" }, "Twitter:"),
            " https://twitter.com/tttttt_621_s",
            react_1.default.createElement(ink_1.Newline, null),
            react_1.default.createElement(ink_1.Text, { color: "#0e0c0d" }, "GitHub:"),
            " https://github.com/TakaShinoda",
            react_1.default.createElement(ink_1.Newline, null),
            react_1.default.createElement(ink_1.Text, { color: "#f39700" }, "Blog:"),
            " https://takashinoda.hatenablog.com/archive")));
};
module.exports = App;
exports.default = App;
