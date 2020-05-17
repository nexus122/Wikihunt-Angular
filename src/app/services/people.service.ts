import { Injectable } from '@angular/core'

@Injectable()
export class PersonajesService {
    private personaje: Personaje[] = [
        {
            name: "Aquaman",
            desciption: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "https://www.cinemascomics.com/wp-content/uploads/2019/08/aquaman-2.jpg"
        },
        {
            name: "Batman",
            desciption: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
            img: "https://www.cinemascomics.com/wp-content/uploads/2017/01/batman-David-Larrad.jpg",
        },
        {
            name: "Daredevil",
            desciption: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
            img: "https://elintransigente.com/wp-content/uploads/2019/12/Daredevil.jpg?w=1024?w=1000&h=600&crop=1",
        },
        {
            name: "Hulk",
            desciption: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
            img: "https://as.com/meristation/imagenes/2019/10/08/noticias/1570522585_909312_1570522675_noticia_normal.jpg"
        },
        {
            name: "Linterna Verde",
            desciption: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
            img: "https://www.cinemascomics.com/wp-content/uploads/2010/11/Linterna-Verde-2011.jpg"
        },
        {
            name: "Spider-Man",
            desciption: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
            img: "https://cnet1.cbsistatic.com/img/rfzZ-7G32v_qEt2uCD0b4KB2rho=/940x0/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg"
        },
        {
            name: "Lobezno",
            desciption: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hugh-jackman-lobezno-1542885513.jpg?crop=1.00xw:0.446xh;0,0.116xh&resize=480:*"
        }
    ];

    constructor() {
        console.log("Servicio listo para utilizar !")
    }

    /* Escribir todos los personaje*/
    getPersonajes(): Personaje[] {
        return this.personaje;
    }

    /* Escribir solo un heroe */
    getPersonaje(idx: string) {
        return this.personaje[idx];
    }

    buscarPersonajes(termino: string) {
        let personajeArr: Personaje[] = [];
        termino = termino.toLowerCase();

        for (let i = 0; i < this.personaje.length; i++) {
            let heroe = this.personaje[i];

            let name = heroe.name.toLowerCase();

            if (name.indexOf(termino) >= 0) {
                heroe.idx = i;
                personajeArr.push(heroe);
            }

        }
        return personajeArr;
    }

}

export interface Personaje {
    name: string;
    desciption: string;
    img: string;
    idx?: number;
}