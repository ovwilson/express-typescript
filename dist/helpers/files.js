"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Files {
    constructor(store) { Store = store; }
    get readFile$() {
        return Rx.Observable.create((observer) => {
            fs.readFile(Store.fileName, Store.fileFormat, (err, file) => {
                err ? observer.error(err) : Store.file = file;
                !err ? observer.next(`Reading ${Store.fileName} ...`) : '';
            });
        });
    }
    get writeFile$() {
        return Rx.Observable.create((observer) => {
            fs.writeFile(Store.fileName, Store.contents, Store.fileFormat, (err) => {
                err ? observer.error(err) : observer.next(`Successfully updated ${Store.fileName}!`);
            });
        });
    }
}
exports.Files = Files;
//# sourceMappingURL=files.js.map