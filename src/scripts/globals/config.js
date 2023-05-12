const CONFIG = {
	BASE_URL: 'https://restaurant-api.dicoding.dev',
	CACHE_NAME: new Date().toISOString(),
};

const API_END_POINT = {
	GET_ALL: `${CONFIG.BASE_URL}/list`,
	GET_DETAIL: `${CONFIG.BASE_URL}/detail`,
	POST_REVIEW: `${CONFIG.BASE_URL}/review`,
};

const GET_SM_IMG = (id) => `${CONFIG.BASE_URL}/images/small/${id}`;
const GET_MD_IMG = (id) => `${CONFIG.BASE_URL}/images/medium/${id}`;
const GET_LG_IMG = (id) => `${CONFIG.BASE_URL}/images/large/${id}`;

export {
	CONFIG, API_END_POINT, GET_LG_IMG, GET_MD_IMG, GET_SM_IMG,
};
