        var roommateList = [];

		function addRoommate() {
			var roommateInput = document.getElementById("roommate");
			var roommate = roommateInput.value;
			roommateList.push(roommate);
			roommateInput.value = "";
			updateRoommateList();
		}

		function clearList() {
			roommateList = [];
			updateRoommateList();
		}

		function updateRoommateList() {
			var roommateListElement = document.getElementById("roommateList");
			roommateListElement.innerHTML = "";
			for (var i = 0; i < roommateList.length; i++) {
				var roommateItem = document.createElement("li");
				roommateItem.textContent = roommateList[i];
				roommateListElement.appendChild(roommateItem);
			}
		}
        function submitForm() {
			var form = document.getElementsByTagName("form")[0];
			form.action = "calendar.html";
		}
		function getRoomateList(){
			return roommateList;
		}