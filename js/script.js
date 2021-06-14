//- Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//- Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//- Creare un array di oggetti di studenti.
//- Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//- Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var student = {
    "nome": "fabio",
    "cognome": "cannavaro",
    "eta": 28
}


for (var dati in student) {
    console.log("lo studente è " + dati + ": " + student[dati]);
}

console.log("FINITA PRIMA PARTE DELL'ESERCIZIO")

/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

var studenti = [
    {
        "nome": "christian",
        "cognome": "vieri",
        "eta": 28

    },
    {
        "nome": "francesco",
        "cognome": "totti",
        "eta": 30

    },
    {
        "nome": "alessandro",
        "cognome": "del piero",
        "eta": 28

    },
    {
        "nome": "paolo",
        "cognome": "maldini",
        "eta": 35

    },
    {
        "nome": "antonio",
        "cognome": "di natale",
        "eta": 36

    }
];


for (var i = 0; i < studenti.length; i++) {

     var appoggio = "";
    for (var proprieta in studenti[i]) {
        if (proprieta != "eta") {
            console.log("Il nome della proprietà di STUDENTE è:", proprieta, "e il relativo valore è:", studenti[i][proprieta]);

             appoggio += studenti[i][proprieta] + " ";
        }
    }
     console.log(appoggio);
}


console.log("FINITA SECONDA PARTE DELL'ESERCIZIO")

/*- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var newStudent = {}

studenti.push(newStudent);
console.log(studenti)

var nomeInput = prompt("inserisci il nome dell'utente");
var cognomeInput = prompt("inserisci il cognome dell'utente");

while (isNaN(etaInput)) {
    var etaInput = parseInt(prompt("inserisci l'età dell'utente"));
}

newStudent.nome = nomeInput;
newStudent.cognome = cognomeInput;
newStudent.eta = etaInput;

console.log("il nuovo oggetto è:", newStudent);
console.log("i nuovi studenti sono : ")



for (var j = 0; j < studenti.length; j++) {

    console.log(studenti[j].nome + " " + studenti[j].cognome);
}