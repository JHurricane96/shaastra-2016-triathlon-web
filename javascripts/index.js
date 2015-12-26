$(document).ready(function () {
	$("#form-dob").mask("00/00/0000");
	$("#form-batch").mask("2099-99", {
		"translation": {
			9: {
				"pattern": /[0-9]/
			},
			0: 0
		}
	});
	$("select").selectBoxIt({
		"showFirstOption": false,
		"showEffect": "fadeIn",
		"showEffectSpeed": 100,
		"hideEffect": "fadeOut",
		"hideEffectSpeed": 100
	});
});