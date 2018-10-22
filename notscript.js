function summarize() 
{
  var str = "name: " + document.getElementById("firstname").value.trim() + " " +
  document.getElementById("lastname").value.trim() + "<br />" +
  "email: " + document.getElementById("email").value.trim() + "<br />" + 
  "comment: " +
  document.getElementById("Comments").value.trim();
  document.getElementById("summary").innerHTML = str;
  document.getElementById("summary_wrapper").style.display = "block";
}

function reset_form() 
{
  document.getElementById("summary").innerHTML = "";
  document.getElementById("summary_wrapper").style.display = "none";
}

window.addEventListener('load', function() {
	var captions = document.getElements
var captions = document.getElementsByClassName("caption");
for(var i = 0; i < captions.length; i++){
	var elem = captions[i];
console.log(elem, captions, i)
	elem.addEventListener("mouseenter", function(){
		elem.style.transition = "opacity 0.5s";
		elem.style.opacity = 1;
});

	elem.addEventListener("mouseleave", function(){
		elem.style.transition = "opacity 0.5s";
		elem.style.opacity = 0;
});
}
})