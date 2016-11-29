var charNumber;
var diceResult;
var floorRoll;
//var diceDisplay
charNumber = 0;

$(function(){
	$("#createButton").click(function(){
		var name = $("#name").val();
		addCharacter(name);
		console.log(name);
		$('#name').val('');
		return false;
	});
	$("#rollButton").click(function(){
		var numberOfDice = $("diceBox").val();
		rollDice(numberOfDice);
		return false;
	});
	$("#randomTrait").click(function(){
		var trait = traits[Math.floor(Math.random() * traits.length)];
		document.getElementById("randomResult").innerHTML =
			'<p>' + trait.text + '</p>';
	});
	$("#randomItem").click(function(){
		var item = items[Math.floor(Math.random() * items.length)];
		document.getElementById("randomResult").innerHTML =
			"<p>" + item.text + "</p>";
	});
	$("#searchButton").click(function(){
		var searchString = $("#searchBar").val();
		console.log(searchString);
		findObjects(searchString)
		return false;
	});
	
});
function findObjects(searchString){
	$("#searchResult").html("");
	var allThings = traits.concat(items);
	var results = new Array();
	var resultSpot = $("#searchResult")
	for (var key in allThings){
		var thing = allThings[key];
		var stringTest = thing.title;
		var stringTest = stringTest.toLowerCase();
		var searchString = searchString.toLowerCase();
		var match = stringTest.includes(searchString);
		if (match == true){
			console.log("Woo!");
			results.push(thing.title);
		}
	}
	if (results.length == 0){
		console.log("Damn...");
		document.getElementById("searchResult").innerHTML =
			"<p>No Result</p>";	
	}else{
		for (i = 0; i < results.length; i++){
			resultSpot.append("<div class='searchResult' id='" + results[i] + "' onclick='expandResult(" + results[i] + ")'>" + results[i] + "</div>");
		}
	}
	
}
function addCharacter(name) {
	var charId ='char' + charNumber;
	var killId ='kill' + charNumber;
	console.log(charId);
	var newChar = $("<div class='character' id=" + charId + ">" + name + "<input type='number' value='0' class='healthBox'>" + "</div>");
	var charList = $("#characterList");
	var deleteButton = $("<input type='submit' value='Delete' id='deleteButton'>");
	(newChar).append(deleteButton);
	(deleteButton).click(function(){
		newChar.remove();
	});
	newChar.id = name;
	charNumber ++
	charList.append(newChar);
}
function rollDice(numberOfDice) {
	floorRoll = Math.ceil(Math.random() * 500);
	if (floorRoll < 500){
		diceResult = Math.ceil(Math.random() * 20);
		$("#diceResultSpot").html(diceResult);
		//console.log(diceResult);
		if (diceResult == 1){
			$("#diceResultSpot").css("color", "red");
		}else if (diceResult == 20){
			$("#diceResultSpot").css("color", "green");
		}else{
			$("#diceResultSpot").css("color", "black");
		}
	}else{
		diceResult = "It fell on the floor...";
		$("#diceResultSpot").html(diceResult);
	}
}
function expandResult(thingTitle){
	$("#searchResult").html("");
	var resultSpot = $("#searchResult")
	var allThings = traits.concat(items);
	console.log(thingTitle);
	for (var key in allThings){
		var thing = allThings[key];
		var stringTest = thing.title;
		var stringTest = stringTest.toLowerCase();
		var thingTitle = thingTitle.toLowerCase();
		var match = stringTest.includes(thingTitle);
		if (match == true){
			resultSpot.append("<div class='searchResult' id=" + thingTitle + ">" + thing.text + "</div>");
		}
	}
}

/*function rollDice(numberOfDice) {
	var diceList = $("#diceResultSpot");
	for (i=0; i<numberOfDice; i++){
		var diceResult = dMath.floor((Math.random() * 10) + 1);
		console.log(diceResult);
		diceDisplay = $("<div class='diceDisplay'>" + diceResult + "</div>")
	};
	diceList.append(diceDisplay);
}*/

//append variable & declare outside

/*function findObjects(searchString){
	var allThings = traits.concat(items);
	for (var key in allThings){
		var thing = allThings[key];
		var stringTest = thing.title;
		var stringTest = stringTest.toLowerCase();
		var searchString = searchString.toLowerCase();
		var match = stringTest.includes(searchString);
		if (match == true){
			console.log("Woo!");
			document.getElementById("searchResult").innerHTML =
				"<p>" + thing.text + "</p>";
			return;
		}
	}
}*/