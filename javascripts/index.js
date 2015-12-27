$(document).ready(function () {
	$gradeInputSheet = $("#grade-input-sheet");
	var gradeInputConfig = {
		"curCount" : 1,
		"maxCount" : 8,
		"minCount" : 1
	};
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
	$("#btn-add-grade-input").click(function () {
		$gradeInputSheet.append(Handlebars.templates["gradeFormField.hbs"](
			{"number" : ++gradeInputConfig.curCount
		}));
		if (gradeInputConfig.curCount >= gradeInputConfig.maxCount)
			this.disabled = true;
		if (gradeInputConfig.curCount > gradeInputConfig.minCount) {
			$("#btn-remove-grade-input").prop("disabled", false);
		}
	});
	$("#btn-remove-grade-input").click(function (event) {
		$("#grade-input-sheet .row:last-child").remove();
		gradeInputConfig.curCount--;
		if (gradeInputConfig.curCount <= gradeInputConfig.minCount)
			this.disabled = true;
		if (gradeInputConfig.curCount < gradeInputConfig.maxCount)
			$("#btn-add-grade-input").prop("disabled", false);
	});
});