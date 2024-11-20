const productosTienda = [
    {
        "idProducto":1,
        "nombreProducto":"Tommy Hilfiger",
        "precioProducto": 4450,
        "descProducto":"Tommy Hilfiger Warren Oxford para hombre",
        "imagenProducto":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnU-xg4rDMGpK2PWCpQjOFQQpTETL6LR_lL5tisoNVLd2nIGzNz_3tnaXlguHm4FQD-JSA8zMjFXKVa5l2Uqc_f1IdK9ydJQ5N3y4N56MAngFjhBxgRqKrC4iun_T1&usqp=CAc",
        "codigoBarras":"TH8761341",
        "categoria":"Calzado"

    },
    {
        "idProducto":2,
        "nombreProducto":"Chaqueta de cuero",
        "precioProducto": 7890,
        "descProducto":"Chaqueta de cuero piel envejecida Cafe Racer",
        "imagenProducto":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeVBcbIIto4nIJ2pqWvSG3Q6fUPZOKJI2eXrNC7MY2fPSuwU421UPDIVYb9sepalWBqWZFnJQiMMlL3JpktibS4aXH327ZS-dBnPMQpGLR7RXrQijNFoXtf62h97mQ&usqp=CAc",
        "codigoBarras":"CC515661",
        "categoria":"Vestimenta"
    },
    {
        "idProducto":3,
        "nombreProducto":"Apple Watch",
        "precioProducto": 8100,
        "descProducto":"Apple - Reloj Inteligente Smartwatch",
        "imagenProducto":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxYq97epx46ds4h9H-DAJd6y1SCrWmOFxppUrVh7IR8d7QNCToHOf-i0eInYCdkIy_pV88UFXhjCE5ezIEx38li6jwMsNvfHi0OIUaoVwTtJDdWAHFVdNdZzzElQm_kA&usqp=CAc",
        "codigoBarras":"AW489794",
        "categoria":"Relojes"
    },
    {
        "idProducto":4,
        "nombreProducto":"Zapatillas Deportivas Air",
        "precioProducto": 6450,
        "descProducto":"Zapatillas Deportivas Air",
        "imagenProducto":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAU333VQw4BX38dfiVHITCTMVNjt_tz7uVi7ibmTHXVDxeqzXMtosagGHpzIBP1bJ_2YzZH3oWIep8iD5AQzqWDAu-fsHysNVEVoqKfy3_gLVUkYenIjoJVHsDLYToGA&usqp=CAc",
        "codigoBarras":"DA45646251",
        "categoria":"Calzado"
    },
    {
        "idProducto":5,
        "nombreProducto":"Monitor 27 LG",
        "precioProducto": 12100,
        "descProducto":"Monitor LG 27 IPS FHD con AMD FreeSync",
        "imagenProducto":"https://m.media-amazon.com/images/I/616ZOS5bnnL.._AC_SR160,160_.jpg",
        "codigoBarras":"MLG45412456",
        "categoria":"Electrodomesticos"
    },
    {
        "idProducto":6,
        "nombreProducto":"DeWalt - Taladro y destornillador",
        "precioProducto": 15500,
        "descProducto":"DeWalt - Taladro y destornillador de impacto",
        "imagenProducto":"https://m.media-amazon.com/images/I/81+vTBpIB9L.._AC_SR160,160_.jpg",
        "codigoBarras":"DW8818211",
        "categoria":"Herramientas"
    },
    {
        "idProducto":7,
        "nombreProducto":"Termo Stanley",
        "precioProducto": 2850,
        "descProducto":"Termo Stanley Clasico 1 Litro Linea 2019",
        "imagenProducto":"https://m.media-amazon.com/images/I/61ipKgHDXIL.._AC_SR160,160_.jpg",
        "codigoBarras":"TS454623",
        "categoria":"Electrodomesticos"
    },
    {
        "idProducto":8,
        "nombreProducto":"Sapiens - Yuval Noah Harari",
        "precioProducto": 2300,
        "descProducto":"El nacimiento de la humanidad",
        "imagenProducto":"https://m.media-amazon.com/images/I/81nDQWfw0NL._UX250_UY160_.jpg",
        "codigoBarras":"LB251271",
        "categoria":"Libros"
    },
    {
        "idProducto":9,
        "nombreProducto":"Lionel Messi - Campeón del Mundo",
        "precioProducto": 1800,
        "descProducto":"Messi 10 - El Pequeño Niño Que Se Convirtio En Campeon Mundo",
        "imagenProducto":"https://m.media-amazon.com/images/I/71fatppLDjL._UX250_UY160_.jpg",
        "codigoBarras":"LB789234",
        "categoria":"Libros"
    }

]

const getProductos = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(productosTienda);
    },3000);
});


export default productosTienda;