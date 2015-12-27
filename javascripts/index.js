$(document).ready(function () {
	$gradeInputSheet = $("#grade-input-sheet");
	//Grade Input Config
	var grdInpConf = {
		"curCount" : 1,
		"maxCount" : 8,
		"minCount" : 1,
		"addBtn": $("#btn-add-grade-input"),
		"rmvBtn": $("#btn-remove-grade-input")
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

	grdInpConf.addBtn.click(function () {
		this.disabled = true;
		grdInpConf.rmvBtn.prop("disabled", true);
		var $newField = $(Handlebars.templates["gradeFormField.hbs"](
			{"number" : ++grdInpConf.curCount
		}));

		$gradeInputSheet.append($newField);
		$newField.css({
			"max-height": "0",
			"padding-top": "0"
		});

		$newField.stop().animate({"max-height": 200, "padding-top": 15}, 1000, function() {
			if (grdInpConf.curCount < grdInpConf.maxCount)
				grdInpConf.addBtn.prop("disabled", false);
			if (grdInpConf.curCount > grdInpConf.minCount) {
				grdInpConf.rmvBtn.prop("disabled", false);
			}
		});
	});

	grdInpConf.rmvBtn.click(function () {
		this.disabled = true;
		grdInpConf.addBtn.prop("disabled", true);
		$("#grade-input-sheet .row:last-child").stop().animate({"height": 0, "padding": 0}, 1400, "easeOutExpo", function() {
			$("#grade-input-sheet .row:last-child").remove();

			grdInpConf.curCount--;
			if (grdInpConf.curCount > grdInpConf.minCount)
				grdInpConf.rmvBtn.prop("disabled", false);
			if (grdInpConf.curCount < grdInpConf.maxCount)
				grdInpConf.addBtn.prop("disabled", false);
		});
	});
});