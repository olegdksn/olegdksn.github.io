// Tabelle Zeigen
$("#tabellezeigen").click(() => {
  $("#hauptform").hide();
  $("#tabellecontainer").show();
});

db.collection("user1")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      //   console.log(doc.data().Arbeitszeit);
      console.log(`hallo ${doc.id} geht das?`);
      console.log(`<td>${doc.data().Wakeup}</td>`);
      // hier wird jede zeile angefuegt in die Tabelle:
      $("#tabellenbody").append(
        `<tr>
      <th scope="row">${doc.id}</th>
      <td class="summiereWakeup" >${doc.data().Wakeup}</td>
      <td class="summiereArbeitszeit" >${doc.data().Arbeitszeit}</td>
      <td class="summiereLernzeit">${doc.data().Lernzeit}</td>
      <td class="summiereLesezeit">${doc.data().Lesezeit}</td>
      <td class="summiereSchlafzeit">${doc.data().Schlafzeit}</td>
      <td class="summiereTraining">${doc.data().Trainingheute}</td>
      <td >${doc.data().Kommentar}</td>
    </tr>`
      );
      // Bis hier Zeile einfuegen.
    });
  });

// const tabelleZeile = function () {
//   // anfuegen an DOM ELEMENT:
//   $("#tabellenbody").append(
//     `<tr>
//   <th scope="row">${doc.id}</th>
//   <td>${Wakeup}</td>
//   <td>${Arbeitszeit}</td>
//   <td>${Lernzeit}</td>
//   <td>${Lesezeit}</td>
//   <td>${Schlafzeit}</td>
//   <td>${Trainingheute}</td>
//   <td>${Kommentar}</td>
// </tr>`
//   );
// };

$("#formanzeigen").click(() => {
  $("#hauptform").show();
  $("#tabellecontainer").hide();

  // Tabelle nochmal laden:
  db.collection("user1")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        //   console.log(doc.data().Arbeitszeit);
        console.log(`hallo ${doc.id} geht das?`);
        console.log(`<td>${doc.data().Wakeup}</td>`);
        // hier wird jede zeile angefuegt in die Tabelle:
        $("#tabellenbody").append(
          `<tr>
      <th scope="row">${doc.id}</th>
      <td>${doc.data().Wakeup}</td>
      <td>${doc.data().Arbeitszeit}</td>
      <td>${doc.data().Lernzeit}</td>
      <td>${doc.data().Lesezeit}</td>
      <td>${doc.data().Schlafzeit}</td>
      <td>${doc.data().Trainingheute}</td>
      <td>${doc.data().Kommentar}</td>
    </tr>`
        );
        // Bis hier Zeile einfuegen.
      });
    });
});
