function storeName() {
    var name = document.getElementById("name").value;
    sessionStorage.setItem("name", name);
  }
  function storeChore() {
    var chore = document.getElementById("chore").value;
    sessionStorage.setItem("chore", chore);
  }
  function displayStats() {
    alert(sessionStorage.getItem("name") + "'s chore is " + sessionStorage.getItem("chore"));
  }
  function runFunctions() {
    storeName();
    storeChore();
    displayStats();
  }