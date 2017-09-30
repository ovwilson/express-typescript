"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexRouter {
    constructor() { }
    getIndex(request, response) {
        response.send('<h1>Express Server Loaded using TypeScript</h1>');
    }
}
exports.indexRouter = new IndexRouter().getIndex;
//# sourceMappingURL=Index.js.map