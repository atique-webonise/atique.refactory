Opera.Driver.YUI.Ajax={DEPENDENCIES:["connection","json"],EXPORT:["ajax","decodeJson","encodeJson"],ajax:function(c,g,b,a){var e=YAHOO.util;a===void 0&&(a={});
if(!a.method)a.method="GET";
if(b!==void 0&&typeof b==="object")
{var f=[],d;
for(d in b)f.push(encodeURIComponent(d)+"="+encodeURIComponent(b[d]));
b=f.join("&")}a!==void 0&&a.form!==void 0&&e.Connect.setForm(a.form);
a.method.toUpperCase()=="GET"&&b&&(c+="?"+b);
return e.Connect.asyncRequest(a.method.toUpperCase(),c,g,b)},decodeJson:function(c)
{return YAHOO.lang.JSON.parse(c)},
encodeJson:function(c)
{return YAHOO.lang.JSON.stringify(c)}};
