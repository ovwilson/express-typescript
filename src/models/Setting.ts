import { Schema, model } from 'mongoose';

export const schemaName = 'Setting';

const schema: Schema = new Schema({
    id: String,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
});

schema.methods.search = () => {
    this.find()
};

export default model(schemaName, schema);