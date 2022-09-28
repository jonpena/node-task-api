import { Person } from '../interfaces/person.interface';
import { Schema, Types, model, Model } from 'mongoose';

const PersonSchema = new Schema<Person>(
	{
		name: { type: String, required: true },
		lastname: { type: String },
		gender: { type: String, enum: ['male', 'female'] },
		age: { type: Number, required: true },
	},
	{ timestamps: true, versionKey: false }
);

const ItemModel = model('person', PersonSchema);

export default ItemModel;
