(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gradeFormField.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\">\r\n	<div class=\"col-md-3 text-center\">\r\n		<input name=\"course-code-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot form-course-code\" placeholder=\"Course Code\" pattern=\"[A-Z]{2}[0-9]{3}\" maxlength=\"5\" required />\r\n	</div>\r\n	<div class=\"col-md-5 text-center\">\r\n		<input name=\"course-name-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot form-course-name\" placeholder=\"Course Name\" maxlength=\"128\" required />\r\n	</div>\r\n	<div class=\"col-md-2 text-center\">\r\n		<input name=\"credits-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot form-credits\" placeholder=\"Credits\" pattern=\"[0-9]\" maxlength=\"1\" required />\r\n	</div>\r\n	<div class=\"col-md-2 col-xs-6 text-center\">\r\n		<input name=\"grade-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot form-grade\" placeholder=\"Grade\" pattern=\"[SABCDEF]\" maxlength=\"1\" required />\r\n	</div>\r\n</div>";
},"useData":true});
})();