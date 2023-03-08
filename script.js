const output = document.querySelector(".output");
const select = document.querySelector(".select");

const getCarsData = () => {
  return fetch("./cars.json")
    .then((res) => res.json())
    .catch((error) => {
      console.log(error.message);
    });
};

select.addEventListener("change", (e) => {
  getCarsData()
    .then((data) => {
      // console.log(data);
      const select = data.cars.filter((car) => car.brand === e.target.value);

      try {
        if (e.target.value === "") {
          throw new Error("Тачка не выбрана");
        }

        output.innerHTML = "";
        output.innerHTML = `<p>Тачка: ${select[0].brand} ${select[0].model} </p>
    <p>Цена: ${select[0].price} ₽</p>`;
      } catch (error) {
        output.innerHTML = "";
        output.innerHTML = `<p>${error.message}</p>`;
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
});
