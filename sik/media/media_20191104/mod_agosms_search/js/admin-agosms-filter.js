$=jQuery.noConflict();
$(document).ready(function(){var l=$(".ValueSelectVal"),e="<select class='field_type_select'><option class='multifield-available' value='text'>Text</option><option value='select'>Drop-down Select Box</option><option value='checkboxes'>Checkboxes</option><option value='radio'>Radio</option><option value='agosmsaddressmarker'>AgosmsAdressMarker</option></select>";
l.each(function(){if($(this).val()!=""){var p=$(this),s=$(this).val().split("\n");
for(var i=0;i<s.length;i++){var o="";
p.parent().find("select.ValueSelect").find("option").each(function(){if(s[i].split(":")[0]=="field"){if($(this).val().split(":")[1]==s[i].split(":")[1]){o=$(this).text()}}
else{if($(this).val()==s[i]){o=$(this).text()}}});
var t=$(e);
if(s[i].split(":")[0]=="field"){var c=s[i].split(":")[2];
if(s[i].split("{")[1]){var n="{"+s[i].split(/\{(.+)/)[1],a=JSON.parse(n);
c=a["type"]};
t.find("option").each(function(){if($(this).val()==c){$(this).attr("selected","selected")}});
t="<select class='field_type_select'>"+t.html()+"</select>"}
else{t=""};
var l="";
if(s[i].split("{")[1]){var n="{"+s[i].split(/\{(.+)/)[1],a=JSON.parse(n);
if(a["radicalmultifield_fields"]){l="<select class=\"multifield_select\">";
l+="<option value=\"\">Field</option>";
$.each(a["radicalmultifield_fields"],function(e,t){l+="<option value=\""+t.name+"\"";
if(a["selected"]==t.name){l+=" selected=\"selected\""};
l+=">"+t.title+"</option>"});
l+="</select>";
t=$(t).find("option.multifield-available").wrapAll("<div class=\"dummy\" />").parents(".dummy");
t="<select class='field_type_select'>"+t.html()+"</select>"};
if(a["repeatable_fields"]){l="<select class=\"multifield_select\">";
l+="<option value=\"\">Field</option>";
$.each(a["repeatable_fields"],function(e,t){l+="<option value=\""+t.name+"\"";
if(a["selected"]==t.name){l+=" selected=\"selected\""};
l+=">"+t.title+"</option>"});
l+="</select>";
t=$(t).find("option.multifield-available").wrapAll("<div class=\"dummy\" />").parents(".dummy");
t="<select class='field_type_select'>"+t.html()+"</select>"}};
p.parent().find(".sortableFields").append("<li><span class='val' rel='"+s[i]+"'>"+o+"</span><span class='sortableRightBlock'>"+l+t+"<span class='deleteFilter icon-cancel'></span></span></li>")}}});
$(".sortableFields").sortable({update:function(e,l){updateFiltersVal(l.item.parents(".controls"))},});
$("body").on("click",".sortableFields .deleteFilter",function(e){init_field=$(this).parents(".controls");
$(this).parent().parent().remove();
updateFiltersVal(init_field)});
$("body").on("change",".sortableFields .field_type_select",function(){var l=$(this).find("option:selected").val(),e=$(this).parent().siblings(".val").attr("rel").split(":");
if(e[2]=="radicalmultifield"||e[2]=="repeatable"){var i="{"+$(this).parent().siblings(".val").attr("rel").split(/\{(.+)/)[1],t=JSON.parse(i);
t["type"]=l;
$(this).parent().siblings(".val").attr("rel",e[0]+":"+e[1]+":"+e[2]+":"+JSON.stringify(t))}
else{$(this).parent().siblings(".val").attr("rel",e[0]+":"+e[1]+":"+l)};
init_field=$(this).parents(".controls");
updateFiltersVal(init_field)});
$("body").on("change",".sortableFields .multifield_select",function(){var t=$(this).find("option:selected").val(),e=$(this).parent().siblings(".val").attr("rel").split(":"),i="{"+$(this).parent().siblings(".val").attr("rel").split(/\{(.+)/)[1],l=JSON.parse(i);
l["selected"]=t;
$(this).parent().siblings(".val").attr("rel",e[0]+":"+e[1]+":"+e[2]+":"+JSON.stringify(l));
init_field=$(this).parents(".controls");
updateFiltersVal(init_field)});
$(".ValueSelect").on("change",function(){var n=$(this),i=$(this).find("option:selected");
if(i.val()!=""&&i.val()!=0){var l=e;
if(i.val().split(":")[0]!="field"){l=""};
var t="";
if(i.val().split("{")[1]){var a="{"+i.val().split(/\{(.+)/)[1],s=JSON.parse(a);
if(s["radicalmultifield_fields"]){t="<select class=\"multifield_select\">";
t+="<option value=\"\">Field</option>";
$.each(s["radicalmultifield_fields"],function(e,l){t+="<option value=\""+l.name+"\">"+l.title+"</option>"});
t+="</select>";
l=$(l).find("option.multifield-available").wrapAll("<div class=\"dummy\" />").parents(".dummy");
l="<select class='field_type_select'>"+l.html()+"</select>"};
if(s["repeatable_fields"]){t="<select class=\"multifield_select\">";
t+="<option value=\"\">Field</option>";
$.each(s["repeatable_fields"],function(e,l){t+="<option value=\""+l.name+"\">"+l.title+"</option>"});
t+="</select>";
l=$(l).find("option.multifield-available").wrapAll("<div class=\"dummy\" />").parents(".dummy");
l="<select class='field_type_select'>"+l.html()+"</select>"}};
n.parent().find(".sortableFields").append("<li><span class='val' rel='"+i.val()+"'>"+i.text()+"</span><span class='sortableRightBlock'>"+t+l+"<span class='deleteFilter icon-cancel'></span></span></li>");
init_field=$(this).parents(".controls");
updateFiltersVal(init_field)};
$(".ValueSelect").val(0).trigger("liszt:updated")})});
function updateFiltersVal(e){var l="";
e.find(".sortableFields li span.val").each(function(e){if(e>0){l=l+"\r\n"};
l=l+$(this).attr("rel")});
e.find(".ValueSelectVal").val(l)};