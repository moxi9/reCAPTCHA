
function pfRecaptchaCheck() {
	$('#js_registration_submit').parents('form:first').trigger('submit');
};

$Ready(function() {
	if (!pf_recaptcha_enabled) {
		$('#js_registration_submit').show();
		return;
	}

	var register = $('#js_registration_submit');
	if (register.length) {
		var button = register.parent();

		button.prepend('<div class="g-recaptcha" data-sitekey="' + pf_recaptcha_key + '" data-callback="pfRecaptchaCheck"></div>');
	}
});