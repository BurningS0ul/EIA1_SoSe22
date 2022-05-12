//Set values

const mycountry = ["Deutschland", "Italien", "Frankreich", "Spanien"];

var GER21 = "83.2";
var GER08= "82.0";

var ITA21 = "59.58";
var ITA08 = "59.0";

var FRA21 = "65.3";
var FRA08 = "62.14";

var SPA21 = "47.16";
var SPA08 = "45.98";

var EU = "447.01";

//set texts

const x = "Gesamtzahl Einwohnerinnen und Einwohner in ";
const x2 = " im Jahr 2021";
const x3 = ": ";
const x4 = " Mio"
const y = "Relativ zur Gesamtzahl der EU: ";
const y2 = "%";
const z = "Wachstumsrate seit 2008: ";
const z2 = "Wachstumsrate gesamt zwischen 2008 und 2021: ";

//set console logs

console.log(x + mycountry[0] + x2 + x3 + GER21 + x4);
console.log(y + Math.abs((GER21/EU)*100).toFixed(2) + y2);
console.log(z + Math.abs((GER08/GER21)).toFixed(2) + y2);
console.log(z2 + Math.abs(GER21-GER08).toFixed(2) + x4); 

console.log(x + mycountry[1] + x2 + x3 + ITA21 + x4);
console.log(y + Math.abs((ITA21/EU)*100).toFixed(2) + y2);
console.log(z + Math.abs((ITA08/ITA21)).toFixed(2) + y2);
console.log(z2 + Math.abs(ITA21-ITA08).toFixed(2) + x4);

console.log(x + mycountry[2] + x2 + x3 + FRA21 + x4);
console.log(y + Math.abs((FRA21/EU)*100).toFixed(2) + y2);
console.log(z + Math.abs((FRA08/FRA21)).toFixed(2) + y2);
console.log(z2 + Math.abs(FRA21-FRA08).toFixed(2) + x4);

console.log(x + mycountry[3] + x2 + x3 + SPA21 + x4);
console.log(y + Math.abs((SPA21/EU)*100).toFixed(2) + y2);
console.log(z + Math.abs((SPA08/SPA21)).toFixed(2) + y2);
console.log(z2 + Math.abs(SPA21-SPA08).toFixed(2) + x4);

//functions

function GERMANY() {
    GerxEU: Math.abs((GER21/EU)*100).toFixed(2);
    GERxGER: Math.abs((GER08/GER21)).toFixed(2);
    GERxOLD: Math.abs(GER21-GER08).toFixed(2);
    console.log(GERxEU + GERxGER + GERxOLD);
}
window.addEventListener('load', function()){
    document.querySelector(".germany").setAttribute('class','active');
    document.querySelector(".germany").addEventListener('click', GERMANY);
}