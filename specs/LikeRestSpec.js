import Like_Button from "../src/scripts/utils/Init_like_dislike_btn.js";
import Database from "../src/scripts/data/restaurantDB.js";


describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div class="favorite" id="favoriteId">';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1,

            }
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the movie has not been liked before', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1,

            }
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1,

            }
        });
        document.getElementById('outer-like').dispatchEvent(new Event('click'));
        console.log(await Database.getRestaurant(1));
        //result must "{ id: 1 }"
        expect(await Database.getRestaurant(1)).toEqual({ id: 1 });

        Database.deleteRestaurant(1);

    });

    it('should not add a restaurant again when its already liked', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: 1,

            }
        });


        //error was here
        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await Database.addRestaurant({ id: 1 });

        // Simulasikan pengguna menekan tombol suka film
        document.getElementById('outer-like').dispatchEvent(new Event('click'));

        // tidak ada film yang ganda
        expect(await Database.getAllRestaurant()).toEqual([{ id: 1 }]);
        await Database.deleteRestaurant(1);
    });

    xit('should not add a restaurant when it has no id', async () => {
        await Like_Button.init({
            LContainer: document.getElementById('favoriteId'),
            data: {
                id: {},

            }
        });
        document.getElementById('outer-like').dispatchEvent(new Event('click'));
        expect(await Database.getAllRestaurant()).toEqual([]);
    });
})