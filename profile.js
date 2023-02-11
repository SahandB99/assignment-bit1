const movies = [
  "The Great Gatsby",
  "Inception",
  "The Revenant",
  "Shutter Island",
];

let ul = document.createElement("ul");

let li = document.createElement("li");

document.querySelector("#title").appendChild(ul);

movies.forEach((movie) => {
  li.innerHTML += movie;

  ul.appendChild(li);

  li = document.createElement("li");
});
