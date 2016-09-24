document.addEventListener("DOMContentLoaded",function (event) {

/*function sayHello(){
	this.textContent = "Said It";
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!!</h2>";
	document.getElementById("content").innerHTML = message; 
	
	if (name === "Helen") {
		var title = document.querySelector("h1").textContent + "Hey Beautiful";
		document.querySelector("h1").textContent = title;
		}
}

function add_content () {
	var para = "<p> This code belongs to Dinesh Hemnani </p>";
	document.querySelector("#foot").innerHTML = para;
}	

function mousedisp(event) {
	if (event.shiftKey === true) {
	console.log("x: " + event.clientX);
	console.log("x: " + event.clientY);
}
}

document.querySelector("button").onclick = sayHello;
document.querySelector("button").addEventListener("click",add_content);
document.querySelector("body").addEventListener("mousemove", mousedisp);
*/
document.querySelector("button").addEventListener("click",function () {
	var self = this;
	var name = "";
		
	$ajaxutils.sendGetRequest("/Data/name.json",function (res) {
		var message = res.firstName + " " +res.lastName;
		message += "<br>He uses " + res.numberOfDisplays + " to Work";
		document.querySelector("#content").innerHTML = "<h3>Hello " + message + " !</h3>";
	});

	});
});

