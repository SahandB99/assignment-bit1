const movies = [
  "The Great Gatsby",
  "Inception",
  "The Revenant",
  "Shutter Island",
];

let text = "<ul>";
movies.forEach(myFunction);
text += "</ul>";
document.getElementById("title").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
