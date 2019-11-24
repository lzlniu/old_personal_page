function login() { 
	var _pw=document.getElementById('_pw').value;
	var user=document.getElementById('user').value;
	if(user=="" && _pw=="") {
		alert("Nice, you are in! there is no username or password.");
		document.forms[0].action="W/page在/BW.html";
		return true;
	}
	else {
		alert("Error! Please contact lizelin@stu.ouc.edu.cn");
		return false;
	}
}
