// summeWakeup
// averageWakeup
// emptyWakeup

const summieren = function (spalte) {
  var mvar = [];
  $(spalte).each(function () {
    console.log($(this).html());
    mvar.push(Number($(this).html()));
  });
  console.log(mvar);
  sum = mvar.reduce((pv, cv) => pv + cv, 0);
  console.log(sum);
  $("#statistikErgebnis").html(sum);
};

$("#summeArbeitszeit").click(() => {
  let einsetzen = ".summiereArbeitszeit";
  summieren(einsetzen);
});

$("#summeLernzeit").click(() => {
  console.log("lernzeit summe geklickt");
  let einsetzen = ".summiereLernzeit";
  summieren(einsetzen);
});
$("#summeLesezeit").click(() => {
  let einsetzen = ".summiereLesezeit";
  summieren(einsetzen);
});
$("#summeSchlafzeit").click(() => {
  let einsetzen = ".summiereSchlafzeit";
  summieren(einsetzen);
});

// AVERAGE Statistik

const average = function (spalte) {
  var mvar = [];
  $(spalte).each(function () {
    console.log($(this).html());
    mvar.push(Number($(this).html()));
  });
  sum = mvar.reduce((pv, cv) => pv + cv, 0);

  let average = sum / mvar.length;
  console.log(average);
  $("#statistikErgebnis").html(average);
};

$("#averageArbeitszeit").click(() => {
  let einsetzen = ".summiereArbeitszeit";
  average(einsetzen);
});

$("#averageLernzeit").click(() => {
  let einsetzen = ".summiereLernzeit";
  average(einsetzen);
});
$("#averageLesezeit").click(() => {
  let einsetzen = ".summiereLesezeit";
  average(einsetzen);
});
$("#averageSchlafzeit").click(() => {
  let einsetzen = ".summiereSchlafzeit";
  average(einsetzen);
});

$("#emptyTraining").click(() => {
  emptyCount();
});

const emptyCount = function () {
  var mvar = [];
  let counter = 0;
  $(".summiereTraining").each(function () {
    console.log("einmal", $(this).html());
    if ($(this).html() == "") {
      mvar.push(1);
    }
    counter = counter + 1;
  });
  console.log(mvar.length);
  $("#statistikErgebnis").html(100 * (mvar.length / counter) + "%");
};
