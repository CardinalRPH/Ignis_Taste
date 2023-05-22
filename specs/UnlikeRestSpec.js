import Like_Button from "../src/scripts/utils/Init_like_dislike_btn.js";
import Database from "../src/scripts/data/restaurantDB.js";

describe('unliking a Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div class="favorite" id="favoriteId">';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await Database.addRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await Database.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1
            }
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1
            }
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1
            }
        });

        document.getElementById('outer-like').dispatchEvent(new Event('click'));
        console.log(await Database.getAllRestaurant());
        expect(await Database.getAllRestaurant()).toEqual([]);
    });
    
    it('should not throw error if the unliked restaurant is not in the list', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1
            }
        });

        await Database.deleteRestaurant(1);

        document.getElementById('outer-like').dispatchEvent(new Event('click'));
        expect(await Database.getAllRestaurant()).toEqual([]);
    });

})