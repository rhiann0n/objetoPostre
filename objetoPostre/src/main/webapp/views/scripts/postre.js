class Postre {
    tipo;
    sabor;
    textura;
    temperatura;

    constructor(tipo, sabor, textura, temperatura) {
        this.tipo = tipo;
        this.sabor = sabor;
        this.textura = textura;
        this.temperatura = temperatura;
    }

    mostrar() {
        console.log(`Es un/una ${this.tipo} de ${this.sabor}, de textura ${this.textura}, y se sirve ${this.temperatura}`);

    }
}

let miPostre = new Postre("tarta", "fresa", "cremosa","fría");
miPostre.mostrar();
let miPostre1 = new Postre("flan", "vainilla", "gelatinosa", "frío");
miPostre1.mostrar();
let miPostre2 = new Postre("panqueque", "chocolate y nata", "esponjosa", "caliente");
miPostre2.mostrar();

for(dato in miPostre) {
    console.log(`${dato} : ${miPostre[dato]}`);
}

let texto = JSON.stringify(miPostre);
console.log(texto);
let texto1 = JSON.stringify(miPostre1);
console.log(texto1);
let texto2 = JSON.stringify(miPostre2);
console.log(texto2);