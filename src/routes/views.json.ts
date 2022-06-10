let views = 0;

export async function get() {
	views++;

	return {
		status: 200,
		body: {
			views
		}
	};
}
