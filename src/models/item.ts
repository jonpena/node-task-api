import { Schema, Types, model, Model } from 'mongoose';
import { Item } from '../interfaces/item.interface';

const ItemSchema = new Schema<Item>(
	{
		name: { type: String, required: true },
		price: { type: Number, required: true },
		type: { type: String, enum: ['gasoline', 'electric'] },
		year: { type: Number },
		description: { type: String },
	},
	{ timestamps: true, versionKey: false }
);

const ItemModel = model('items', ItemSchema);

export default ItemModel;
