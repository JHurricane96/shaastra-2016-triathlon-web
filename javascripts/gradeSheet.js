function gradeSheetFunc () {
	$moreDetails = $("#more-details");
	$("#btn-toggle-details").click(function () {
		this.disabled = true;
		if ($moreDetails.is(":hidden")) {
			$(this).html('<span class="glyphicon glyphicon-chevron-up"></span> Less')
		}
		else {
			$(this).html('<span class="glyphicon glyphicon-chevron-down"></span> More')
		}
		$moreDetails.slideToggle("400", function () {
			$("#btn-toggle-details").prop("disabled", false);
		});
	});
}