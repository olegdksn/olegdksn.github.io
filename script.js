// $("#suchen").on("click", (event) => {
//   event.preventDefault();
//   console.log("funktioniert");
// });

// let stadtinput  = Suchfeld Eingabe
// let suchen = Button Submit
// let ort  =  Heading Ort

const key = "1763822c1f9595fbdaa793c7f0b863bb";
let stadt;

$("#suchform").submit((event) => {
  event.preventDefault();
  console.log("submitted");
  stadt = $("#stadtinput").val();
  console.log(stadt);
  wetterAbruf();
});

const wetterAbruf = function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      stadt +
      "&appid=" +
      key
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
      $("#jsonErgebnis").html(
        "Temperatur in F: " +
          celcius +
          "<p> Humidiy: " +
          data["main"]["humidity"]
      );
    });
};
