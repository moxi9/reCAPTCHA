<?php

if (setting('pf_recaptcha_enabled')) {
	$recaptcha = new \ReCaptcha\ReCaptcha(setting('pf_recaptcha_secret'));
	if (!isset($_POST['g-recaptcha-response'])) {
		$_POST['g-recaptcha-response'] = '';
	}
	$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
	if (!$resp->isSuccess()) {
		Phpfox_Error::set('Captcha failed. Try again.');
	}
}