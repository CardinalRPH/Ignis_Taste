import HomePage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
	'/': HomePage,
	'/homepage': HomePage,
	'/detail/:id': Detail,
	'/favorite': Favorite,
};

export default routes;
