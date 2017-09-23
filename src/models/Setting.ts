import { Schema, model } from 'mongoose';

const schemaName = 'Setting';

const schema: Schema = new Schema({
    id: String,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
});

schema.methods.seed = (record: any) => {

    // this.save((err,))
};

export default model(schemaName, schema);