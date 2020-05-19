import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PersonajesService = class PersonajesService {
    constructor() {
        this.personaje = [
            {
                name: "Isaac Newton",
                desciption: "Fue un físico, teólogo, inventor, alquimista y matemático inglés. Es autor de los Philosophiæ naturalis principia mathematica, más conocidos como los Principia, donde describe la ley de la gravitación universal y estableció las bases de la mecánica clásica mediante las leyes que llevan su nombre. Entre sus otros descubrimientos científicos destacan los trabajos sobre la naturaleza de la luz y la óptica (que se presentan principalmente en su obra Opticks), y en matemáticas, el desarrollo del cálculo infinitesimal.",
                img: "https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/03/conocer-historia-isaac-newton-xlsemanal-2-1024x672.jpg",
                wiki: "https://es.wikipedia.org/wiki/Isaac_Newton"
            },
            {
                name: "Jesús de Nazaret",
                desciption: "fue un predicador y líder religioso judío del siglo i. Es la figura central del cristianismo y una de las más influyentes de la historia.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%C3%9Altima_Cena_-_Juan_de_Juanes.jpg/1280px-%C3%9Altima_Cena_-_Juan_de_Juanes.jpg",
                wiki: "https://es.wikipedia.org/wiki/Cristo"
            },
            {
                name: "Buda Gautama",
                desciption: "Fue un asceta, yogui, mendicante, filósofo y sabio en cuyas enseñanzas se fundó el budismo. Enseñó principalmente en el noroeste del subcontinente Indio por unos cuarenta años.​ Su enseñanza se basa en una visión del sufrimiento y el fin del sufrimiento nirvaṇa.",
                img: "https://i.pinimg.com/originals/4a/77/dc/4a77dc38ec7dde0b01d82f2b63349d57.jpg",
                wiki: "https://es.wikipedia.org/wiki/Buda_Gautama"
            },
            {
                name: "Confucio",
                desciption: "Fue un reconocido pensador chino cuya doctrina recibe el nombre de confucianismo.​ Procedente de una familia noble arruinada, a lo largo de su vida alternó periodos en los que ejerció como maestro con otros durante los cuales fue funcionario del pequeño estado de Lu, trabajó de carpintero en el noreste de China, durante la época de fragmentación del poder bajo la dinastía Zhou o período de los Reinos Combatientes.",
                img: "https://datosdefamosos.com/wp-content/uploads/2019/08/confucio-biografia.jpg",
                wiki: "https://es.wikipedia.org/wiki/Confucio"
            },
            {
                name: "Albert Einstein",
                desciption: "Fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se le considera el científico más importante, conocido y popular del siglo XX.",
                img: "https://media.metrolatam.com/2018/01/23/alberteinstein-1200x800.jpg",
                wiki: "https://es.wikipedia.org/wiki/Albert_Einstein"
            },
            {
                name: "Adolf Hitler",
                desciption: "Fue un político, militar y dictador alemán de origen austrohúngaro. Fue canciller imperial desde 1933 y Führer de Alemania desde 1934 hasta su muerte. Llevó al poder al Partido Nacionalsocialista Obrero Alemán o Partido Nazi,b​ estableciendo un régimen totalitario durante el período conocido como Tercer Reich o Alemania nazi.​ Inició la Segunda Guerra Mundial al invadir Polonia el 1 de septiembre de 1939 y es una figura clave en la perpetración del Holocausto.",
                img: "https://static1.abc.es/media/historia/2018/08/04/hitler1-kqfG--620x349@abc.jpg",
                wiki: "https://es.wikipedia.org/wiki/Adolf_Hitler"
            },
            {
                name: "Friedrich Nietzsche",
                desciption: "Fue un filósofo, poeta, músico y filólogo alemán del siglo XIX, considerado uno de los filósofos más importantes de la filosofía occidental, cuya obra ha ejercido una profunda influencia tanto en la historia como en la cultura occidental.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKH7XTpOOlwTMsjLS_ZbiG9kaU1evOaxjjfjz8H7c60DMyYDEo&usqp=CAU",
                wiki: "https://es.wikipedia.org/wiki/Friedrich_Nietzsche"
            },
            {
                name: "Virginia Woolf",
                desciption: "Fue una escritora británica, considerada una de las más destacadas figuras del vanguardista modernismo anglosajón del siglo XX y del feminismo internacional.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/800px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg",
                wiki: "https://es.wikipedia.org/wiki/Virginia_Woolf"
            },
            {
                name: "Cristina de Suecia",
                desciption: "fue reina de Suecia (1632-1654), duquesa de Bremen y princesa de Verden (1648-1654). Hija de Gustavo II Adolfo y de María Leonor de Brandeburgo. Protectora de las artes y mecenas, abdicó del trono de Suecia en 1654. Protestante de nacimiento, se convirtió al catolicismo el año de su abdicación. Murió en Roma a los 62 años.",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Jacob_Ferdinand_Voet_-_Queen_Christina_of_Sweden.jpg",
                wiki: "https://es.wikipedia.org/wiki/Cristina_de_Suecia"
            },
            {
                name: "Federico García Lorca",
                desciption: "fue el poeta de mayor influencia y popularidad de la literatura española del siglo xx. Como dramaturgo se le considera una de las cimas del teatro español del siglo xx, junto con Valle-Inclán y Buero Vallejo. Murió asesinado un mes después del golpe de Estado con el que tuvo lugar el inicio de la guerra civil española.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Federico_Garc%C3%ADa_Lorca._Huerta_de_San_Vicente%2C_Granada.jpg/220px-Federico_Garc%C3%ADa_Lorca._Huerta_de_San_Vicente%2C_Granada.jpg",
                wiki: "https://es.wikipedia.org/wiki/Cristina_de_Suecia"
            }
        ];
        console.log("Servicio listo para utilizar !");
    }
    /* Escribir todos los personaje*/
    getPersonajes() {
        return this.personaje;
    }
    /* Escribir solo un heroe */
    getPersonaje(idx) {
        return this.personaje[idx];
    }
    buscarPersonajes(termino) {
        let personajeArr = [];
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
};
PersonajesService = tslib_1.__decorate([
    Injectable()
], PersonajesService);
export { PersonajesService };
//# sourceMappingURL=people.service.js.map