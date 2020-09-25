"use strict";
/* eslint-disable func-names, global-require, import/no-dynamic-require */
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
let Page;
let ElementHandle; // eslint-disable-line no-redeclare
function requireOrUndefined(path) {
    try {
        return require(path);
    }
    catch (err) {
        return null;
    }
}
try {
    Page = require('playwright/lib/page.js');
    if (Page.Page)
        Page = Page.Page;
    ElementHandle = requireOrUndefined('playwright/lib/api.js');
    if (ElementHandle && ElementHandle.ElementHandle)
        ElementHandle = ElementHandle.ElementHandle;
    Page.prototype.getDocument = _1.getDocument;
    _1.getQueriesForElement(ElementHandle.prototype, function () {
        return this;
    });
    ElementHandle.prototype.getQueriesForElement = function () {
        return _1.getQueriesForElement(this);
    };
}
catch (err) {
    // eslint-disable-next-line no-console
    console.error('Could not augment playwright functions, do you have a conflicting version?');
    throw err;
}
//# sourceMappingURL=extend.js.map