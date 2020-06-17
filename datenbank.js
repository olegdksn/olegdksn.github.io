let contentTabelle = $("#anfangsTabelle").html();

// Form SUBMIT
$("#heuteform").submit((event) => {
  event.preventDefault();
  $("#anfangsTabelle").html(contentTabelle);
  let arbeitszeit = $("#arbeitszeit").val();
  let lernzeit = $("#lernzeit").val();
  let wakeup = $("#wakeup").val();
  let lesezeit = $('input[name="lesezeit1"]').val();
  let trainingheute = $("#trainingheute").val();
  let schlafzeit = $("#schlafzeit").val();
  let kommentar = $("#kommentar").val();

  if (neuesDatum == aktuellerTag) {
    db.collection("user1").doc(aktuellerTag).set({
      Arbeitszeit: arbeitszeit,
      Lernzeit: lernzeit,
      Wakeup: wakeup,
      Lesezeit: lesezeit,
      Trainingheute: trainingheute,
      Schlafzeit: schlafzeit,
      Kommentar: kommentar,
    });
  } else {
    db.collection("user1").doc(neuesDatum).set({
      Arbeitszeit: arbeitszeit,
      Lernzeit: lernzeit,
      Wakeup: wakeup,
      Lesezeit: lesezeit,
      Trainingheute: trainingheute,
      Schlafzeit: schlafzeit,
      Kommentar: kommentar,
    });
  }
});
