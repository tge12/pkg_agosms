(function(){'use strict';
document.addEventListener('DOMContentLoaded',function(){const;
cordsTextField=document.getElementById('jform_paramsmodal_cords_map');
const;
unique=cordsTextField.getAttribute('data-unique');
window['mymap'+unique]=L.map('mapid'+unique).setView([50.27264,7.26469],3);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(window['mymap'+unique]);
window['mymap'+unique].on('click',a);
var o=L.marker([50.28,7.27]).addTo(window['mymap'+unique]).bindPopup(Joomla.JText._('COM_AGOSMS_BUTTON_DEFAULT_POPUP_PROMPT')).openPopup();
cordsTextField.value='50.28, 7.27';
function a(e){const;
cordsTextField=document.getElementById('jform_paramsmodal_cords_map');
if(cordsTextField){cordsTextField.value=e.latlng.lat+', '+e.latlng.lng;
var t=(e.latlng.lat),n=(e.latlng.lng),d=new L.LatLng(t,n);
o.setLatLng(d)}};
var n=window.location.search.substr(1).split('&'),d={};
for(var e=0;e<n.length;e++){var t=n[e].split('=');
d[decodeURIComponent(t[0])]=decodeURIComponent(t[1])};
const;
buttonSaveSelected=document.getElementById('buttonsaveselected');
const;
cordsParentTextField=window.parent.document.getElementById(d.fieldid);
if(buttonSaveSelected&&cordsParentTextField&&cordsTextField){buttonSaveSelected.addEventListener('click',function(){cordsParentTextField.setAttribute('readonly',!1);
cordsParentTextField.value=cordsTextField.value;
cordsParentTextField.setAttribute('readonly',!0);
window.parent.jModalClose()})}})})();
