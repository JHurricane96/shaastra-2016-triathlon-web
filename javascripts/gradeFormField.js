(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gradeFormField.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\">\r\n	<div class=\"col-md-3 text-center\">\r\n		<input name=\"course-code-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot\" placeholder=\"Course Code\" />\r\n	</div>\r\n	<div class=\"col-md-5 text-center\">\r\n		<input name=\"course-name-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot\" placeholder=\"Course Name\" />\r\n	</div>\r\n	<div class=\"col-md-2 text-center\">\r\n		<input name=\"credits-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot\" placeholder=\"Credits\" />\r\n	</div>\r\n	<div class=\"col-md-2 col-xs-6 text-center\">\r\n		<input name=\"grade-"
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + "\" class=\"input-text form-control pad-bot\" placeholder=\"Grade\" maxlength=\"1\" />\r\n	</div>\r\n</div>";
},"useData":true});
})();