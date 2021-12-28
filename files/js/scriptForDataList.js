(function () {
  const dataLocalStorage = JSON.parse(localStorage.getItem(`dataStorage`));
  console.log(dataLocalStorage);

  const ul = document.createElement(`ul`);

  for (let key in dataLocalStorage) {
    const li = document.createElement(`li`);
    li.append(`${key} : ${dataLocalStorage[key]}`);
    if (dataLocalStorage[key] === "") {
      console.log(`This user hadn't entered all data yet.`);
      return;
    }
    ul.append(li);
  }

  console.log(ul);
  document.body.append(ul);
})();
