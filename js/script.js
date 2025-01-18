//window.alert("This is a scam website."); Fixed the scam!

document.addEventListener("DOMContentLoaded", function() {
	const funMeetingNotes = ["Tech companies want to start nuclear plants","Sakana AI - Pretty cool stuff","Nvidia GPU - AI is through the roof (new GPU came out)Tech companies"];
	const mainContainer = document.getElementById("main-container");
	const meetingNotes = document.createElement("ul");
	funMeetingNotes.forEach(note => {
		const currentList = document.createElement("li");
		currentList.textContent = (note);
		meetingNotes.append(currentList);
	});
	
	mainContainer.append(meetingNotes);
});
