const histories = document.getElementById("histories");

function addHistory(questionText, roundTimeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${roundTimeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, roundTimeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("col");

    newRow.innerHTML = `
    <div class="card">
    <h3 class="mb-3">${test.questionText}</h3>
    <p class="mb-3">You took: <span class="bold">${test.roundTimeTaken}</span> seconds</p>
      <p class="mb-3">You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  </div>
  `;

    histories.appendChild(newRow);
  });
}

