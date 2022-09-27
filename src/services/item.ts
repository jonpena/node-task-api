import { Item } from '../interfaces/item.interface';
import ItemModel from '../models/item';

const insertItem = async (item: Item) => {
	const responseInsert = await ItemModel.create(item);
	return responseInsert;
};

export { insertItem };
