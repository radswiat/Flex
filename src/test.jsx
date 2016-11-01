/** @jsx Flex.createElement */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var flex_1 = require('./src/flex');
console.log(flex_1.FlexComponent);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        var a = (<ul class="list">
        <li>item 1</li>
        <li>item 2</li>
      </ul>);
    }
    return Main;
}(flex_1.FlexComponent));
