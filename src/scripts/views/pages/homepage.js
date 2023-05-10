import { get_all_data } from "../../data/restaurantData";

const HomePage = {
    async render() {
        return `
        <div class="container-fluid">
        <div class="jumbotron" id="jumbotron">
            <div class="jumbotron-body">
                <div class="inner-bg-body">
                    <h1>Fresh and Delicious</h1>
                    <div class="sub-title-bg">
                        <p>traditional &nbsp;
                        <mark>Nusantara</mark>
                        &nbsp; food to delight whole family</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-5 text-center" id="post-contain">
        <h1 class="post-title">Explore Something</h1>
        <div class="grid-container" id="grid-container-1">
        </div>
    </div>
        `
    },

    async afterRender() {
        document.getElementById('jumbotron').style.backgroundImage = "url('../public/images/hero-image_2.jpg')";
        const getAllData = () => {
            get_all_data().then((data) => {
                if (data.restaurants.length !=0) {
                    homeBuilder(data);
                } else {
                    // is_null();
                }
            }).catch((error) => {
                console.log(error);
                // let cuserror = new ErrorHandler("Api can't Load Character Query");
                // throw cuserror;
            });
        }

        const homeBuilder = (data) => {
            for (let i in data.restaurants) {
                document.querySelector('#grid-container-1').innerHTML += `
                <card-post
                                src="${data.restaurants[i].pictureId}"
                                alt="" food="${data.restaurants[i].name}" rating="${data.restaurants[i].rating}" city="${data.restaurants[i].city}" desc="${data.restaurants[i].description}" resId="${data.restaurants[i].id}"></card-post>
                `;
            }
        }

        getAllData();
    }
}

export default HomePage;