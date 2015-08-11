
function pfRecaptchaCheck() {
	$('#js_registration_submit').parents('form:first').trigger('submit');
	// p(grecaptcha);
};

function pfRecaptchaLoad() {
	if (pf_recaptcha_enabled == '0') {
		return;
	}

	var register = $('#js_registration_submit');
	if (!register.length) {
		return;
	}

	grecaptcha.render(document.getElementById('g-recaptcha-id'), {
		sitekey : pf_recaptcha_key,
		callback: pfRecaptchaCheck
	});
};

$Ready(function() {
	if (pf_recaptcha_enabled == '0') {
		$('#js_registration_submit').show();
		return;
	}

	var register = $('#js_registration_submit');
	if (register.length) {
		var button = register.parent();

		button.prepend('<div id="g-recaptcha-id"></div>');
		if (typeof(grecaptcha) == 'object') {
			pfRecaptchaLoad();
		}
	}
});