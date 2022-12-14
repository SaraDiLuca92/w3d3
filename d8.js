/* ESERCIZIO 1
         Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */
/* Ho messo (nell'html) l'id="h1h1" all'h1 che volevo modificare, ho aggiunto (sempre nell'html) il
      <button onclick="cambiatitolo()">cambia titolo</button> unendolo quindi alla funzione cambiatitolo() 
      che poi ho ripreso qui nel foglio js, con .getelementbyid ho selezionato l'h1 tramite l'id e con 
      .innerhtml ho sostituito il contenuto del testo, quindi quando cliccherò il bottone nella pagina
      mi cambierà il contenuto testuale del titolo h1.
     */

function cambiatitolo() {
  document.getElementById("h1h1").innerHTML = "Ciao";
}
/* ESERCIZIO 2
            Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
         */
/*Ho creato la funzione addClassToTitle e gli ho detto di selezionare l'id dell'h1, poi ho voluto 
        aggiungere la classe myheading (che è definita in css)tramite .className */

const addClassToTitle = document.getElementById("h1h1");
h1h1.className = "myHeading";

/* ESERCIZIO 3
            Scrivi una funzione per che cambi il testo dei p figli di un div
           */

function changePcontent() {
  let x = document.getElementsByTagName("div");
  x.querySelector("p").textContent = "Ciao";
}

/* ESERCIZIO 4
            Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) 
            con il valore https://www.google.com
           */

const a = document
  .getElementById("link")
  .setAttribute("href", "https://www.youtube.com/watch?v=4AJ6EI3uda4");

/* ESERCIZIO 5
            Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
         */

const addToTheSecond = function () {};

/* ESERCIZIO 6
            Scrivi una funzione che aggiunga un secondo paragrafo al primo div
         */

const addParagraph = function () {};

/* ESERCIZIO 7
            Scrivi una funzione che faccia scomparire la prima lista non ordinata
         */

const hideFirstUl = function () {};

/* ESERCIZIO 8
            Scrivi una funzione che renda verde il background di ogni lista non ordinata
           */

const paintItGreen = function () {};

/* ESERCIZIO 9
            Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
           */

const makeItClickable = function () {};

/* ESERCIZIO 10
            Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
           */

const revealFooterLink = function () {};

/* ESERCIZIO 11
            Crea una funzione che crei una tabella nell'elemento con id "tableArea".
            La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
         */

const generateTable = function () {};

/* ESERCIZIO 12
            Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
         */

const addRow = function () {};

/* ESERCIZIO 14
           Crea una funzione che nasconda le immagini della tabella quando eseguita
         */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
           Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
         */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
           Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
         */ const deleteVowels = function () {};
