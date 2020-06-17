// arbeitszeit
// lernzeit
// wakeup
// lesezeit
// trainingheute
// schlafzeit
// kommentar

$("#tabellecontainer").hide();
$("#vorwaerts").hide();
// Heutiges Datum

let aktuellerTag;
let Dateobject = new Date();

const heuteEinfuegen = function () {
  aktuellerTag =
    Dateobject.getDate() +
    "-" +
    (Dateobject.getMonth() + 1) +
    "-" +
    Dateobject.getFullYear();

  $("#datumHaupt").html(aktuellerTag);
};

heuteEinfuegen();

// VOR UND ZURUECK (DATUM)

let counter = 0;
let neuesDatum = aktuellerTag;
let tag;
let monat = Dateobject.getMonth() + 1;
let jahr;

const datumBerechnen = function () {
  if (Dateobject.getDate() + counter < 1) {
    if ([0, 2, 4, 6, 7, 9, 11].includes(monat - 1)) {
      tag = 31;
      counter = 31 - Dateobject.getDate();
      monat = monat - 1;
      neuesDatum = tag + "-" + monat + "-" + Dateobject.getFullYear();
    } else {
      tag = 30;
      monat = monat - 1;
      counter = 30 - Dateobject.getDate();
      neuesDatum = tag + "-" + monat + "-" + Dateobject.getFullYear();
    }
  } else {
    neuesDatum =
      Dateobject.getDate() +
      counter +
      "-" +
      monat +
      "-" +
      Dateobject.getFullYear();
  }
};

$("#zurueck").click((event) => {
  event.preventDefault();
  $("#vorwaerts").show();
  counter = counter - 1;
  datumBerechnen();
  $("#datumHaupt").html(neuesDatum);
  $("#heuteform").trigger("reset");
});

$("#vorwaerts").click((event) => {
  event.preventDefault();
  counter = counter + 1;
  datumBerechnen();
  $("#datumHaupt").html(neuesDatum);
  $("#heuteform").trigger("reset");
});
