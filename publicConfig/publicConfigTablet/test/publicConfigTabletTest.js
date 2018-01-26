const expect = require('chai').expect;
const calculatePublicConfig = require('../js/publicConfigTablet');
const BBVA_USER_AGENT_350 = ';Android;samsung;SM-G920F;1440x2560;Android;6.0.1;BMES;3.5.0;xxxhdpi';
const BBVA_USER_AGENT_400 = ';Android;samsung;SM-G920F;1440x2560;Android;6.0.1;BMES;4.0.0;xxxhdpi';
const BBVA_USER_AGENT_500 = ';Android;samsung;SM-G920F;1440x2560;Android;6.0.1;BMES;5.0.0;xxxhdpi';
const optionalUpdateText_spa = 'Estamos trabajando para mejorar nuestros sistemas';
const optionalUpdateTitle_spa = 'Atención';
const optionalUpdateText_eus = 'Gure sistemak hobetzeko lanean ari gara';
const optionalUpdateTitle_eus = 'Kontuz!';


describe('Test de pruebas de configuracion publica para Tablet: ', () => {
	describe('TEST salida servicio: ** calculatePublicConfig.calculatePublicConfig **', () => {
		it('v4.0.0 || lang = spa ', () => {
			const body = {
				lang: 'spa',
				bbvaUserAgent: BBVA_USER_AGENT_400
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);
			console.log('***************** ENTRADA SERVICIO **************');
			console.log('BBVA-User-Agent: ;Android;samsung;SM-G920F;1440x2560;Android;6.0.1;BMES;4.0.0;xxxhdpi');
			console.log('lang: spa');
			console.log('***************** SALIDA SERVICIO **************');
			console.log(result);
			console.log('*******************************');
		});
	});
	describe(`Check BBVA-UserAgent: ${ BBVA_USER_AGENT_400}`, () => {
		it('v4.0.0 || lang = spa ', () => {
			const body = {
				lang: 'spa',
				bbvaUserAgent: BBVA_USER_AGENT_400
			};
			const publicConfig = {
				woodyParams: {
					releaseHTMLBranch: 'tags/4.0.0'
				},
				initialMessage: {
					message: optionalUpdateText_spa,
					title: optionalUpdateTitle_spa,
					actions: {
						description: 'Continuar',
						url: ''
					},
					typeInitialMessage: 'AdvisorMessage'
				}
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);

			expect(result).to.be.eql(publicConfig);
		});
		it('v4.0.0 || lang = eus ', () => {
			const body = {
				lang: 'eus',
				bbvaUserAgent: BBVA_USER_AGENT_400
			};
			const publicConfig = {
				woodyParams: {
					releaseHTMLBranch: 'tags/4.0.0'
				},
				initialMessage: {
					message: optionalUpdateText_eus,
					title: optionalUpdateTitle_eus,
					actions: {
						description: 'Continuar',
						url: ''
					},
					typeInitialMessage: 'AdvisorMessage'
				}
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);

			expect(result).to.be.eql(publicConfig);
		});
	});
	describe(`Check BBVA-UserAgent: ${ BBVA_USER_AGENT_500}`, () => {
		it('v5.0.0 || lang = spa ', () => {
			const body = {
				lang: 'spa',
				bbvaUserAgent: BBVA_USER_AGENT_500
			};
			const publicConfig = {
				woodyParams: {
					releaseHTMLBranch: 'tags/5.0.0'
				},
				initialMessage: {
					message: optionalUpdateText_spa,
					title: optionalUpdateTitle_spa,
					actions: {
						description: 'Continuar',
						url: ''
					},
					typeInitialMessage: 'AdvisorMessage'
				}
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);

			expect(result).to.be.eql(publicConfig);
		});
		it('v5.0.0 || lang = eus ', () => {
			const body = {
				lang: 'eus',
				bbvaUserAgent: BBVA_USER_AGENT_500
			};
			const publicConfig = {
				woodyParams: {
					releaseHTMLBranch: 'tags/5.0.0'
				},
				initialMessage: {
					message: optionalUpdateText_eus,
					title: optionalUpdateTitle_eus,
					actions: {
						description: 'Continuar',
						url: ''
					},
					typeInitialMessage: 'AdvisorMessage'
				}
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);

			expect(result).to.be.eql(publicConfig);
		});
	});
	describe(`Check BBVA-UserAgent: ${ BBVA_USER_AGENT_350}`, () => {
		it('v3.5.0 || lang = spa ', () => {
			const body = {
				lang: 'spa',
				bbvaUserAgent: BBVA_USER_AGENT_350
			};
			const publicConfig = {
				initialMessage: {
					message: optionalUpdateText_spa,
					title: optionalUpdateTitle_spa,
					actions: {
						description: 'Continuar',
						url: ''
					},
					typeInitialMessage: 'AdvisorMessage'
				}
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);

			expect(result).to.be.eql(publicConfig);
		});
		it('v3.5.0 || lang = eus ', () => {
			const body = {
				lang: 'eus',
				bbvaUserAgent: BBVA_USER_AGENT_350
			};
			const publicConfig = {
				initialMessage: {
					message: optionalUpdateText_eus,
					title: optionalUpdateTitle_eus,
					actions: {
						description: 'Continuar',
						url: ''
					},
					typeInitialMessage: 'AdvisorMessage'
				}
			};

			const result = calculatePublicConfig.calculatePublicConfig(body);

			expect(result).to.be.eql(publicConfig);
		});
	});
});
