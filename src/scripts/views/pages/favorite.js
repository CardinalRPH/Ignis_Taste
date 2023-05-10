import Database from "../../data/restaurantDB";
const Favorite = {
    async render() {
        return `
    <div class="container my-5 mt-8e text-center" id="post-contain">
        <h1 class="post-title">Favourite</h1>
        <div class="grid-container" id="grid-container-1">
        </div>
    </div>
        `
    },

    async afterRender() {
        Database.getAllRestaurant().then((data) => {
            favBuilder(data);
        }).catch((error) => console.log(error));

        const favBuilder = (data) => {
            for (let i in data) {
                document.querySelector('#grid-container-1').innerHTML += `
                <card-post
                                src="${data[i].picId}"
                                alt="" food="${data[i].name}" rating="${data[i].rating}" city="${data[i].city}" desc="${data[i].desc}" resId="${data[i].id}"></card-post>
                `;
            }
        }
    }
}

export default Favorite;