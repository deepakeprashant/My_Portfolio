function myfunction()
{
	var modal = document.getElementById("popup-model").style.display='block';
	document.getElementById("popup").src='./images/Mgm Internship1.jpg';
	window.onclick = function(event)
	{
		if (event.target == modal)
		{ 
			modal.style.display = "none";
		}
	}
}

function myfunction2()
{
	var modal = document.getElementById("popup-model").style.display='block';
	document.getElementById("popup").src='./images/Salesforce certificate1.jpg';
	window.onclick = function(event)
	{
		if (event.target == modal)
		{ 
			modal.style.display = "none";
		}
	}
}

function myfunction3()
{
	var modal = document.getElementById("popup-model").style.display='block';
	document.getElementById("popup").src='./images/error.png';
	window.onclick = function(event)
	{
		if (event.target == modal)
		{ 
			modal.style.display = "none";
		}
	}
}


function myfunction4()
{
	var modal = document.getElementById("popup-model").style.display='block';
	document.getElementById("popup").src='./images/hacker rank.JPG';
	window.onclick = function(event)
	{
		if (event.target == modal)
		{ 
			modal.style.display = "none";
		}
	}
}

function closefunction() 
{
	document.getElementById("popup-model").style.display='none';
}