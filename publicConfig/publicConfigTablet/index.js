const { publicConfigTablet } = require('./js/publicConfigTablet');

const STATUS_CODE_500 = 500;
const STATUS_CODE_200 = 200;


function createResponseBody(body, status) {
	return {
		statusCode: status || STATUS_CODE_200,
		headers: {
			'response-type': 'apiResponse',
			'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify(body),
		isBase64Encoded: false
	};
}

exports.calculatePublicConfig = function(event, context, callback) {
	const body = event.body || {};

	const isBodyEmpty = Object.keys(body) === 0;

	if (!isBodyEmpty) {
		const publicConfig = publicConfigTablet.calculatePublicConfig(body);

		return callback(null, createResponseBody(publicConfig));
	}
	const error = {
		message: 'The body was empty'
	};

	return callback(null, createResponseBody(error, STATUS_CODE_500));
};
