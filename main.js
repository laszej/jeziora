let fotoDiv = document.getElementById("foto");
let zdjecia = [`<img src="strzesz.jpg"`, `<img src="strzesz1.jpg"`, `<img src="strzesz2.jpg"`, 
`<img src="strzesz3.jpg"`, `<img src="rus.jpg"`, `<img src="rus1.jpg"`,  `<img src="rus2.jpg"`, 
`<img src="rus3.jpg"`]

    function zmiana(){
        for (i=0; i<zdjecia.length; i++){
           delay(i)
         }
         function delay(i) {
           setTimeout(() => {
               fotoDiv.innerHTML = `${zdjecia[i]}  class="foto-strony">`
           }, 3000 * i );}}

    


