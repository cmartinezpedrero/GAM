const fs = require('fs-extra');
const i18n = require('i18n');
const merge = require('lodash.merge');
const BBVA_USER_AGENT_POSITION = 8;


function recoverFile() {
	const file = 'resources/tabletConfiguration.json';

	return fs.readJsonSync(file, { throws: false });
}

function getInitialMessage(config, lang) {
	const initialMessage = {};

	initialMessage.message = config.initialMessage.message[lang];
	initialMessage.title = config.initialMessage.title[lang];
	initialMessage.actions = config.initialMessage.actions;
	initialMessage.typeInitialMessage = config.initialMessage.typeInitialMessage;
	return initialMessage;
}

function getConfig(tabletJson, lang) {
	const publicConfig = {};

	if (tabletJson && tabletJson.woodyParams) {
		publicConfig.woodyParams = tabletJson.woodyParams;
	}
	if (tabletJson && tabletJson.initialMessage) {
		publicConfig.initialMessage = getInitialMessage(tabletJson, lang);
	}
	return publicConfig;
}

function calculateConfig(tabletJson, appVersion, lang) {
	const configVersion = getConfig(tabletJson.publicConfig.versions[appVersion], lang);
	const configDefault = getConfig(tabletJson.publicConfig.default, lang);
	const configMandatory = getConfig(tabletJson.publicConfig.mandatory, lang);
	const config = merge(configDefault, configVersion);
	const publicConfig = merge(config, configMandatory);

	return publicConfig;
}

function calculatePublicConfig(body) {
	const appVersion = body.bbvaUserAgent.split(';')[BBVA_USER_AGENT_POSITION];
	const lang = body.lang;
	const tabletJson = recoverFile();

	i18n.configure({
		locales:['cat', 'eng', 'eus', 'glg', 'spa'],
		directory: 'locales',
		defaultLocale: lang
	});

	if (tabletJson && lang && appVersion) {
		const publicConfig = calculateConfig(tabletJson, appVersion, lang);

		return publicConfig;
	}

	const error = 'No ha sido posible cargar la configuracion';

	throw (error);
}

module.exports = { calculatePublicConfig };
