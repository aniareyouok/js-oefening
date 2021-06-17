console.log('Zorg dat al jouw uitkomsten één voor één in de terminal worden gelogd! 📖');

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9 wanneer gelogd
// ==========================================

let sumIs9 = 4 + 5;

console.log(sumIs9);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364 wanneer gelogd
// ==========================================

let productIs364 = 7 * 52;

console.log(productIs364);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49 wanneer gelogd
// ==========================================

let productIs49 = (4 + 3) * 7;

console.log(productIs49);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12 wanneer gelogd
// ==========================================

let productIs12 = (36 / 6) * 2;

console.log(productIs12);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig' wanneer gelogd
// ==========================================

let taste = "zoet";
let texture = "sappig";
let overAllExperience = taste + texture;

console.log("De appel smaakt " + taste + " en is " + texture + ". Het is een " + overAllExperience + " appel." )

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters' wanneer gelogd
// ==========================================

const firstName = "ani";
const lastName = "öhman";
const completeName = firstName + " " + lastName;

console.log("Voornaam: " + firstName);
console.log("Achternaam: " + lastName);
console.log("Haar naam is " +completeName);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg wanneer gelogd
// ==========================================

let residence = "Lent";
let province = "Gelderland";
let location = residence + ", " + province;

console.log(residence + " -  gentrificatie op zijn best in " + province + "!");
console.log(location + " - aan het water, tegenover Nimma");