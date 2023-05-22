import Database from "../data/restaurantDB";
import { LikeButton, LikedButton } from '../views/templates/like_dislike_btn'

const Like_Button = {
    async init({ LContainer, data }) {
        this._LContainer = LContainer;
        this._data = data
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._data;
        if (await this._isDataExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isDataExist(id) {
        const Data = await Database.getRestaurant(id);
        // console.log(Data);
        if (Data) {
            return true;
        } else {
            return false;
        }
    },

    async _renderLike() {
        this._LContainer.innerHTML = LikedButton;
        this._LContainer.title = 'Add to Favorite';
        const likeBtn = document.getElementById('outer-like');
        likeBtn.addEventListener('click', async () => {
            const { id } = this._data;
            const Data = await Database.getRestaurant(id);
            if (!Data) {
                await Database.addRestaurant(this._data);
                this._LContainer.title = 'Remove from favorite';
                await this._renderButton();
            }
        });
    },

    async _renderLiked() {
        this._LContainer.innerHTML = LikeButton;
        this._LContainer.title = 'Remove from favorite';
        const likeBtn = document.getElementById('outer-like');

        likeBtn.addEventListener('click', async () => {
            const { id } = this._data;
            const Data = await Database.getRestaurant(id);
            if (Data) {
                await Database.deleteRestaurant(this._data.id);
                this._LContainer.title = 'Add to Favorite';
                await this._renderButton();
            }
        });
    },
};

export default Like_Button;