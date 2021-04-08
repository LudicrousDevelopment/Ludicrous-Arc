function alloy() {
document.location.href="/alloy"
}
function womginx() {
  alert("Womginx Has Not Been Added Yet")
}
function voidnet() {
document.location.href="/voidnet"
}
function pydodge () {
document.location.href="/py"
}
function molten() {
  alert("Molten Is In Beta And Will Be Ready Soon")
}
function alloygo() {
var ainput = document.getElementById('url')
window.location.assign('http://a.'+document.location.host+`/prox/?url=${btoa(ainput.value)}`);
}
function womginxgo() {

}
function voidnetgo() {
var empt = document.check.url.value;
if (empt === "")
{
alert("Please Provide a URL.");
return false;
}
else 
{
var url = document.getElementById("url").value
window.open("http://"+document.location.host+"/go?url="+url)
return true; 
}
}
function pygo() {
  var ainput = document.getElementById('url')
  window.location.assign('http://p.'+document.location.host+`/py/${ ainput.value }`);
}