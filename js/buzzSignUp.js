//ideabuzz-controller.js under featureInitialization

'ga-signup-1' : function (container) {
	container.find('[class^=log-btn-]').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 1 | signupMethod : ' + this.find('a').attr('data-social-auth-provider'););
		return;
	});
	container.find('#signup-form button').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 1 | signupMethod : email');
		return;
	});
},

'ga-signup-2' : function (container) {
	container.find('button.btn-primary').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 2 | Cleared!');
		return;
	});
},

'ga-signup-3' : function (container) {
	container.find('button.continue').on('click', function () {
		ga('send', 'event', 'Buzz sign up', 'click', 'Stage 3 | Cleared!');
	 	return;
	});
},