function(e, personString){
document.getElementsByClassName("btn btn-block btn-md btn-success btn-start")[0].click();
 
	var persons = JSON.parse(personString)

	console.log(persons);
	
	console.log("Execution Started");
	persons.forEach(function(p) { fillFields(p); document.getElementsByClassName("btn btn-default")[0].click(); });
	console.log("Execution Ended");
}

function fillFields(person){
    var elemLabels = Array.from(document.getElementsByTagName("label"));
		console.log("Retrieved Label Elements, Number: " + elemLabels.length);
	for(var i = 0; i < elemLabels.length; i++){
		console.log("Current Iteration Started");
		console.log("Currently Looking At: " + elemLabels[i].textContent);
		switch(elemLabels[i].textContent){
		case "First Name":
				setValue(elemLabels[i], person.FirstName)
			break;
			case "Last Name":
				setValue(elemLabels[i], person.LastName)
			break;
			case "Email":
				setValue(elemLabels[i], person.Email)
			break;
			case "Address":
				setValue(elemLabels[i], person.Address)
			break;
			case "Phone Number":
			  setValue(elemLabels[i], person.PhoneNumber)
			break;
			case "Company Name":
				setValue(elemLabels[i], person.CompanyName)
			break; 
			case "Role in Company":
				setValue(elemLabels[i], person.RoleInCompany)
			break;
		}
		console.log("Current Iteration Ended");
	}
}

function setValue(currentLabel, value) {
	if(currentLabel.nextSibling.tagName == "BR"){
			currentLabel.nextSibling.nextSibling.value = value;
	} else{
			currentLabel.nextSibling.value = value;
	}
}