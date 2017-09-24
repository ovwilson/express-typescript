import { Schema, model, Model, Document } from 'mongoose';
import { tables } from './../helpers/utils';

const schemaName = 'Setting';

interface IDocument extends Document {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IModel extends Model<IDocument> {
    seed(quantity: number, cb: any): any;
}

const schema: Schema = new Schema({
    id: String,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
});

schema.statics.seed = function (quantity: number, cb: any) { // this function cannot use lamba or arrow function ( => )
    const attributes = tables.filter(table => table.name === schemaName)[0].attributes;
    const settings = [];
    for (let i = 0; i < quantity; i++) {
        const setting = Object.assign({}, attributes());
        settings.push(setting);
    }
    return this.collection.insert(settings, cb);
};

export default model<IDocument, IModel>(schemaName, schema);
