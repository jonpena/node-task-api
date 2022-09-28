import { Person } from '../interfaces/person.interface';
import ItemModel from '../models/person';

const getPersons = async () => {
	const responseItems = await ItemModel.find({});
	return responseItems;
};

const getPerson = async (id: string) => {
	const responseItems = await ItemModel.findOne({ _id: id });
	return responseItems;
};

const insertPerson = async (data: Person) => {
	const responseInsert = await ItemModel.create(data);
	return responseInsert;
};

const updatePerson = async (id: string, data: Person) => {
	const responseItems = await ItemModel.findOneAndUpdate(
		{
			_id: id,
		},
		data,
		{ new: true }
	);
	return responseItems;
};

const deletePerson = async (id: string) => {
	const responseItems = await ItemModel.remove({ _id: id });
	return responseItems;
};

export { insertPerson, getPersons, getPerson, updatePerson, deletePerson };
