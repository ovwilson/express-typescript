import { Schema, model } from 'mongoose';

const faker = require('faker');
const schemaName = 'Setting';

const schema: Schema = new Schema({
    id: String,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
});

schema.statics.seed = () => {
    //for (let i = 0; i < quantity; i++) {

    //             }
    const setting = new this();
    setting.title = faker.company.companyName();
    setting.description = faker.lorem.paragraph();
    this.create(setting, (err: any, data: any) => err ? '' : '');
    // this.save((err,))
};

export default model(schemaName, schema);