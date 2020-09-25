"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = exports.within = exports.getQueriesForElement = exports.configure = exports.waitFor = exports.wait = exports.getDocument = void 0;
const fs_1 = require("fs");
const path = require("path");
const wait_for_expect_1 = require("wait-for-expect");
const domLibraryAsString = fs_1.readFileSync(path.join(__dirname, '../dom-testing-library.js'), 'utf8').replace(/process.env/g, '{}');
/* istanbul ignore next */
function convertProxyToRegExp(o, depth) {
    if (typeof o !== 'object' || !o || depth > 2)
        return o;
    if (!o.__regex || typeof o.__flags !== 'string') {
        const copy = Object.assign({}, o);
        for (const key of Object.keys(copy)) {
            copy[key] = convertProxyToRegExp(copy[key], depth + 1);
        }
        return copy;
    }
    return new RegExp(o.__regex, o.__flags);
}
/* istanbul ignore next */
function mapArgument(o) {
    return convertProxyToRegExp(o, 0);
}
function convertRegExpToProxy(o, depth) {
    if (typeof o !== 'object' || !o || depth > 2)
        return o;
    if (!o.constructor.toString().includes('function RegExp()')) {
        const copy = Object.assign({}, o);
        for (const key of Object.keys(copy)) {
            copy[key] = convertRegExpToProxy(copy[key], depth + 1);
        }
        return copy;
    }
    return { __regex: o.source, __flags: o.flags };
}
const delegateFnBodyToExecuteInPageInitial = `
  ${domLibraryAsString};
  ${convertProxyToRegExp.toString()};

  const mappedArgs = args.map(${mapArgument.toString()});
  const moduleWithFns = fnName in __dom_testing_library__ ?
    __dom_testing_library__ :
    __dom_testing_library__.__moduleExports;
  return moduleWithFns[fnName](container, ...mappedArgs);
`;
let delegateFnBodyToExecuteInPage = delegateFnBodyToExecuteInPageInitial;
function createElementHandle(handle) {
    return __awaiter(this, void 0, void 0, function* () {
        const element = handle.asElement();
        if (element)
            return element;
        yield handle.dispose();
        return null;
    });
}
function createElementHandleArray(handle) {
    return __awaiter(this, void 0, void 0, function* () {
        const lengthHandle = yield handle.getProperty('length');
        const length = (yield lengthHandle.jsonValue());
        const elements = [];
        /* eslint-disable no-plusplus, no-await-in-loop */
        for (let i = 0; i < length; i++) {
            const jsElement = yield handle.getProperty(i.toString());
            const element = yield createElementHandle(jsElement);
            if (element)
                elements.push(element);
        }
        /* eslint-enable no-plusplus, no-await-in-loop */
        return elements;
    });
}
function covertToElementHandle(handle, asArray) {
    return __awaiter(this, void 0, void 0, function* () {
        return asArray ? createElementHandleArray(handle) : createElementHandle(handle);
    });
}
function processNodeText(handles) {
    return handles.containerHandle.evaluate(handles.evaluateFn, ['getNodeText']);
}
function processQuery(handles) {
    return __awaiter(this, void 0, void 0, function* () {
        const { containerHandle, evaluateFn, fnName, argsToForward } = handles;
        try {
            const handle = yield containerHandle.evaluateHandle(evaluateFn, [fnName, ...argsToForward]);
            return yield covertToElementHandle(handle, fnName.includes('All'));
        }
        catch (err) {
            err.message = err.message.replace('[fnName]', `[${fnName}]`);
            err.stack = err.stack.replace('[fnName]', `[${fnName}]`);
            throw err;
        }
    });
}
function createDelegateFor(fnName, contextFn, processHandleFn) {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    processHandleFn = processHandleFn || processQuery;
    return function delegate(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const containerHandle = contextFn ? contextFn.apply(this, args) : this;
            // @ts-ignore
            // eslint-disable-next-line no-new-func, @typescript-eslint/no-implied-eval
            const evaluateFn = new Function('container, [fnName, ...args]', delegateFnBodyToExecuteInPage);
            let argsToForward = args;
            // Remove the container from the argsToForward since it's always the first argument
            if (containerHandle === args[0]) {
                argsToForward = argsToForward.slice(1);
            }
            // Convert RegExp to a special format since they don't serialize well
            argsToForward = argsToForward.map(convertRegExpToProxy);
            return processHandleFn({ fnName, containerHandle, evaluateFn, argsToForward });
        });
    };
}
function getDocument(_page) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        const page = _page || this;
        const documentHandle = yield page.mainFrame().evaluateHandle('document');
        const document = documentHandle.asElement();
        if (!document)
            throw new Error('Could not find document');
        return document;
    });
}
exports.getDocument = getDocument;
function wait(callback, { timeout = 4500, interval = 50 } = {}) {
    return wait_for_expect_1.default(callback, timeout, interval);
}
exports.wait = wait;
exports.waitFor = wait;
function configure(options) {
    if (!options) {
        return;
    }
    const { testIdAttribute } = options;
    if (testIdAttribute) {
        delegateFnBodyToExecuteInPage = delegateFnBodyToExecuteInPageInitial.replace(/testIdAttribute: (['|"])data-testid(['|"])/g, `testIdAttribute: $1${testIdAttribute}$2`);
    }
}
exports.configure = configure;
function getQueriesForElement(object, contextFn) {
    const o = object;
    // eslint-disable-next-line no-param-reassign
    if (!contextFn)
        contextFn = () => o;
    const functionNames = [
        'queryByPlaceholderText',
        'queryAllByPlaceholderText',
        'getByPlaceholderText',
        'getAllByPlaceholderText',
        'findByPlaceholderText',
        'findAllByPlaceholderText',
        'queryByText',
        'queryAllByText',
        'getByText',
        'getAllByText',
        'findByText',
        'findAllByText',
        'queryByLabelText',
        'queryAllByLabelText',
        'getByLabelText',
        'getAllByLabelText',
        'findByLabelText',
        'findAllByLabelText',
        'queryByAltText',
        'queryAllByAltText',
        'getByAltText',
        'getAllByAltText',
        'findByAltText',
        'findAllByAltText',
        'queryByTestId',
        'queryAllByTestId',
        'getByTestId',
        'getAllByTestId',
        'findByTestId',
        'findAllByTestId',
        'queryByTitle',
        'queryAllByTitle',
        'getByTitle',
        'getAllByTitle',
        'findByTitle',
        'findAllByTitle',
        'queryByRole',
        'queryAllByRole',
        'getByRole',
        'getAllByRole',
        'findByRole',
        'findAllByRole',
        'queryByDisplayValue',
        'queryAllByDisplayValue',
        'getByDisplayValue',
        'getAllByDisplayValue',
        'findByDisplayValue',
        'findAllByDisplayValue',
    ];
    functionNames.forEach(functionName => {
        o[functionName] = createDelegateFor(functionName, contextFn);
    });
    o.getQueriesForElement = () => getQueriesForElement(o, () => o);
    o.getNodeText = createDelegateFor('getNodeText', contextFn, processNodeText);
    return o;
}
exports.getQueriesForElement = getQueriesForElement;
exports.within = getQueriesForElement;
// @ts-ignore
exports.queries = {};
getQueriesForElement(exports.queries, el => el);
//# sourceMappingURL=index.js.map