import { API_END_POINT } from "../globals/config";

const get_all_data = () => new Promise((resolve, reject) => {
	fetch(API_END_POINT.GET_ALL).then((response) => response.json()).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

const get_detail_data = (id) => new Promise((resolve, reject) => {
	fetch(`${API_END_POINT.GET_DETAIL}/${id}`).then((response) => response.json()).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

const post_review = (data) => new Promise((resolve, reject) => {
	fetch(API_END_POINT.POST_REVIEW, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then((response) => response.json()).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	})
});

export { get_all_data, get_detail_data, post_review };
