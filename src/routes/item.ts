import { Request, Response, Router } from 'express';
import {
	createItem,
	deleteItem,
	getItem,
	getItems,
	updateItem,
} from '../controllers/item';

const router = Router();

/**
 * htpp://localhost:3002/items [GET]
 */
router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router };
