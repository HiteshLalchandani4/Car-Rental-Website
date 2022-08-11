function validateForm()
{
	var i=document.forms["reg"]["un"].value;
	var k=document.forms["reg"]["em"].value;
	var ki = /^([A-Za-z0-9]{2,})+\@([A-Za-z0-9]{2,})+\.([A-Za-z]{2,3})$/
	var j=document.forms["reg"]["pa"].value;
	if(i=="")
	{
		alert("please enter user name");
		document.forms["reg"]["un"].focus();
		return false;
	}
	else if(i.length<6 || i.length>12)
	{
		alert("Username must be 6 to 12 characters");
		document.forms["reg"]["un"].focus();
		return false;
		
	}
	
	else if (j.length<7 || i.length>14)
	{
		alert("Password must be 7 to 14 characters");
		document.forms["reg"]["pa"].focus();
		return false;
	}
	
	else if (k.length=="")
	{
		alert("Please enter the E-mail address");
		document.forms["reg"]["em"].focus();
		return false;
	}
	else if(ki.test(k)==false)
	{
		alert("Please enter the correct E-mail address");
		document.forms["reg"]["em"].focus();
		return false;
	}
	
}