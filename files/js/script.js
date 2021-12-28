(function () {
  const form = document.getElementById(`form`);

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const userInputs = document.querySelectorAll(`input, select, textarea`);
    const userData = {};

    for (let item of userInputs) {
      userData[item.name] = item.value;
    }
    localStorage.setItem(`dataStorage`, JSON.stringify(userData));
  });
})();
