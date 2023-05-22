import { openDB } from 'idb';
import { async } from 'regenerator-runtime';

const DATABASE_NAME = 'restaurant-fav';
const OBJECT_STORE_NAME = 'restaurant';

const dbPromise = openDB(DATABASE_NAME, 1, {
	upgrade(database) {
		database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
	},
});

const Database = {
	async getRestaurant(id) {
		return (await dbPromise).get(OBJECT_STORE_NAME, id);
	},
	async getAllRestaurant() {
		return (await dbPromise).getAll(OBJECT_STORE_NAME);
	},
	async addRestaurant(restaurant) {
		return (await dbPromise).add(OBJECT_STORE_NAME, restaurant);
	},
	async updateRestaurant(restaurant) {
		return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
	},
	async deleteRestaurant(id) {
		return (await dbPromise).delete(OBJECT_STORE_NAME, id);
	},
};

export default Database;
