$(document).ready(function () {
	$gradeInputSheet = $("#grade-inputs");
	//Grade Input Config
	var grdInpConf = {
		"curCount" : 1,
		"maxCount" : 8,
		"minCount" : 1,
		"addBtn": $("#btn-add-grade-input"),
		"rmvBtn": $("#btn-remove-grade-input")
	};

	var gradeMap = {
		"S": 10,
		"A": 9,
		"B": 8,
		"C": 7,
		"D": 6,
		"E": 5,
		"F": 0
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

		$newField.stop().animate({"max-height": 220, "padding-top": 15}, 400, function() {
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
		$("#grade-inputs .row:last-child").stop().animate({"height": 0, "padding": 0}, 400, "easeOutExpo", function() {
			$("#grade-inputs .row:last-child").remove();

			grdInpConf.curCount--;
			if (grdInpConf.curCount > grdInpConf.minCount)
				grdInpConf.rmvBtn.prop("disabled", false);
			if (grdInpConf.curCount < grdInpConf.maxCount)
				grdInpConf.addBtn.prop("disabled", false);
		});
	});

	$("form").submit(function (event) {
		event.preventDefault();
		var serialArr = [];
		var formDataRaw = {};
		var formData = {};
		var noCourses;
		var cgpa = 0, totCredits = 0;
		serialArr = $(this).serializeArray();
		serialArr.forEach(function (record) {
			formDataRaw[record.name] = record.value;
		});
		for(noCourses = 1; formDataRaw["course-code-" + noCourses] !== undefined; ++noCourses);
		noCourses--;
		formData = {
			"name": formDataRaw.name,
			"rollNumber": formDataRaw["roll-number"],
			"dob": formDataRaw.dob,
			"batch": formDataRaw.batch,
			"degree": formDataRaw.degree,
			"department": formDataRaw.department,
			"phoneNumber": formDataRaw["phone-number"],
			"emailId": formDataRaw["email-id"],
			"gradeSheet": []
		};
		for (var i = 1; i <= noCourses; ++i) {
			formData.gradeSheet.push({
				"courseCode": formDataRaw["course-code-" + i],
				"courseName": formDataRaw["course-name-" + i],
				"credits": formDataRaw["credits-" + i],
				"grade": formDataRaw["grade-" + i]
			});
			totCredits += +formDataRaw["credits-" + i];
			cgpa += gradeMap[formDataRaw["grade-" + i].toUpperCase()] * +formDataRaw["credits-" + i];
		}
		cgpa /= totCredits;
		formData.cgpa = cgpa.toFixed(2);
		$("#navbar").hide();
		$(".container").html(Handlebars.templates["gradeTable.hbs"](formData));
	});
});