let uchwyt = document.getElementById("foto");
let zdjecia = [`<div id="foto"><img src= "strzesz.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "strzesz1.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "strzesz2.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "strzesz3.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "rus.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "rus1.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "rus2.jpg"  class="foto-strony" ></div>`,
`<div id="foto"><img src= "rus3.jpg"  class="foto-strony" ></div>`
]

//let wybrane = function() {zdjecia.Math.floor(Math.random() * zdjecia.length);}


    function zmiana(){
        for (i=0; i<zdjecia.length; i++){
           delay(i)
         }
         function delay(i) {
           setTimeout(() => {
               uchwyt.innerHTML= zdjecia[i];
           }, 3000 * i );}}

    


