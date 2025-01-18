document.addEventListener("DOMContentLoaded", function() {
	const mainContainer = document.getElementById("main-container");
	const coolPlaces = document.createElement("ul");
	
	const kanagawaCoolPlaces = ["Enoshima: Beach Area", "Yokohama: Bay/Cool scene (Minato Mirai)", "Yokosuka City: Bay/Naval Base", "Fujisawa: Beach", "Kamakura: Beach, Big Buddah"];

	kanagawaCoolPlaces.forEach(coolPlace => {
		const currentCoolPlace = document.createElement("li");
		currentCoolPlace.textContent = (coolPlace);
		coolPlaces.append(currentCoolPlace);
	});

	mainContainer.append(coolPlaces);
});
