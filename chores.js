var choreList = [];

		function addChore() {
			var choreInput = document.getElementById("chore");
			var frequencyInput = document.getElementById("frequency");
			var chore = choreInput.value;
			var frequency = frequencyInput.value;
			choreList.push({chore: chore, frequency: frequency});
			choreInput.value = "";
			frequencyInput.selectedIndex = 0;
			updateChoreList();
		}

		function clearList() {
			choreList = [];
			updateChoreList();
		}

		function updateChoreList() {
			var choreListElement = document.getElementById("choreList");
			choreListElement.innerHTML = "";
			for (var i = 0; i < choreList.length; i++) {
				var choreItem = document.createElement("li");
				choreItem.innerHTML = choreList[i].chore + " (needs to be completed " + getFrequencyText(choreList[i].frequency) + ")";
				choreListElement.appendChild(choreItem);
			}
		}

		function getFrequencyText(frequency) {
			switch(frequency) {
				case "1":
					return "once a week";
				case "2":
					return "twice a week";
				case "3":
					return "three times a week";
				case "4":
					return "four times a week";
				case "5":
					return "five times a week";
				case "6":
					return "six times a week";
				case "7":
					return "seven times a week";
				default:
					return "";
			}
		}

		function submitForm() {
			var form = document.getElementsByTagName("form")[0];
			form.action = "roomates.html";
		}