import { movies } from "./movies (2).js";

const input = document.getElementById("input");
const select = document.getElementById("select");
const sortSelect = document.getElementById("sort-select");
const ota = document.getElementById("ota");

function kopiya(kinolar) {
    ota.innerHTML = "";
    kinolar.map((p) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
            ` <img src="./img/1200x675mf.jpg.png" alt="">
        <h3>${p.title}</h3>
          
        <p>${p.score}
2017              
     1 hr         6 min
${p.genre} </p>
          
       <button class="btn">
        More info 
       </button> 
       `;

        ota.appendChild(div);

    });
}
kopiya(movies);
input.addEventListener("input", () => {
   const yangiArray = movies.filter((p) =>
     p.title.toLowerCase().includes(input.value.toLowerCase())
   );
   kopiya(yangiArray);});
   


select.addEventListener("change", () => {
  if (select.value == "All") {
     kopiya(movies);
   } else {
     const a = movies.filter((p) => p.genre.includes(select.value));
     kopiya(a);
   }
 });

 sortSelect.addEventListener("change", () => {
    if (sortSelect.value== "A-Z") {
         const a = movies.sort((p1,p2) => p1.title.localeCompare(p2.title));
         kopiya(a);

     }else{
         const a = movies.sort((p1,p2) => p2.title.localeCompare(p1.title))
         kopiya(a);
     }
 });
 sortSelect.addEventListener("change", () => {
    if (sortSelect.value== "Reyting") {
         const a = movies.sort((r1,r2) => r2.score-r1.score);
         kopiya(a);

     }else if(sortSelect.value=="Z-A"){
         const a = movies.sort((r1,r2) => r2.title.localeCompare(r1.title))
         kopiya(a);
     }
     else if(sortSelect.value=="A-Z"){
         const a = movies.sort((r1,r2) => r1.title.localeCompare(r2.title))
         kopiya(a);
     }
 });





