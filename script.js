function checkMC() {
  const mcInput = document.getElementById("mcInput").value;
  const resultBox = document.getElementById("resultBox");
  const mcNumber = document.getElementById("mcNumber");
  const truckCount = document.getElementById("truckCount");
  const driverCount = document.getElementById("driverCount");

  if (!/^\d{6}$/.test(mcInput)) {
    alert("Please enter a valid 6-digit MC number.");
    return;
  }

  const trucks = Math.floor(Math.random() * 50) + 1;
  const drivers = Math.floor(Math.random() * 50) + 1;

  mcNumber.textContent = mcInput;
  truckCount.textContent = trucks;
  driverCount.textContent = drivers;

  resultBox.classList.remove("hidden");
}
