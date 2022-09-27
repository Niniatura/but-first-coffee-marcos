const data = [
    {
    id: 1,
    title: "ETHIOPIA",
    price: 1556,
    detail: "Este café de origen proveniente de la región de Huila conlleva un proceso lavado en donde como resultado nos brinda un café con acidez prolongada. Presenta un aroma frutal y notas a nueces y melaza.",
    img: "/images/Cafe/1.jpeg",
    stock: 71,
    category: "cafe"
  }, {
    id: 2,
    title: "GUATEMALA",
    price: 4316,
    detail: "Es un café con aroma a cacao y frutos secos, sabor a membrillo y chocolate blanco.",
    img: "/images/Cafe/2.jpeg",
    stock: 29,
    category: "cafe"
  }, {
    id: 3,
    title: "RWANDA",
    price: 417,
    detail: " La fazenda Daterra, situada al oeste del estado de Minas Gerais, es un laboratorio de variedades de café y de procesos de poscosecha. Esto los posicionó como uno de los productores de café más destacados de la última década.",
    img: "/images/Cafe/3.jpeg",
    stock: 89,
    category: "cafe"
  }, {
    id: 4,
    title: "NICARAGUA",
    price: 1503,
    detail: "Los cafés de este país son tan característicos que es muy fácil perderse entre tantos aromas a frutas y flores como mango, hibisco, naranja o durazno. ",
    img: "/images/Cafe/4.jpeg",
    stock: 90,
    category: "cafe"
  }, {
    id: 5,
    title: "Hario V60 02 Pour Over Kit 700ml",
    price: 1117,
    detail: "El gotero de cerámica V60 está fabricado con el tradicional Método Arita yaki que se ha transmitido durante 400 años. El tradicional japonés Monozukuri (producción innovadora) espíritu que presta atención a los pequeños detalles apoya la belleza funcional de HARIO.",
    img: "/images/Cafeteras/5.jpeg",
    stock: 39,
    category: "cafeteras"
  }, {
    id: 6,
    title: "Aeropress",
    price: 3789,
    detail: "La cafetera de viaje Aeropress brinda a los amantes del café todo lo que necesitan para preparar un café excelente en cualquier lugar. Diseñada para ser llevada de viaje, es compacta, liviana y duradera; todo se empaqueta perfectamente en la taza incluida.",
    img: "/images/Cafeteras/6.jpeg",
    stock: 60,
    category: "cafeteras"
  }, {
    id: 7,
    title: "Hario V60 02 Clear Coffee Dripper With Filters",
    price: 2505,
    detail: "El V60 es icónico y reconocido en todo el mundo por su funcionalidad y diseño.La forma cónica del V60 permite una capa más profunda de café, y sus crestas en espiral y la falta de restricción de flujo permiten al usuario verter el agua rápidamente para un cuerpo delicado o lentamente para un sabor más pesado.El gotero cuenta con el vidrio resistente al calor característico de Hario, lo que hace que el gotero sea hermoso y resistente.",
    img: "/images/Cafeteras/7.jpeg",
    stock: 82,
    category: "cafeteras"
  }, {
    id: 8,
    title: "Hario Coffee Dripper V60 01 Plastic - Red",
    price: 1374,
    detail: "Este dripper V60 Hario está hecho en plástico de muy buena calidad y diseño icónico en un rojo punzó. El dripper se puede colocar tanto en la jarra Hario de la medida 02 como en cualquier taza directo para tomar. Incluye también una cuchara medidora para medir los gramos de café que vertemos sobre la cafetera.",
    img: "/images/Cafeteras/8.jpeg",
    stock: 95,
    category: "cafeteras"
  }, {
    id: 9,
    title: "Hario V60 Drip Station Pour Over",
    price: 1894,
    detail: "EBandeja de goteo bellamente elaborada, perfecta para los conocedores del café.Compatible con el gotero de café V60.Fácil de usar y limpiar.Estación transparente que va perfectamente con cualquiera de los goteros V60.Diseñado y fabricado en Japón.",
    img: "/images/Cafeteras/9.jpeg",
    stock: 91,
    category: "cafeteras"
  }, {
    id: 10,
    title: "Hario Fretta V60 Iced & Hot Coffee Maker",
    price: 4109,
    detail: "Nuestra taza de café un sabor se puede degustar en casa; Bella de café para un profesional. Hario en japonés significa King de vidrio. Experiencia profesional. Fácil de usar y de limpiar. Fabricado en Japón",
    img: "/images/Cafeteras/10.jpeg",
    stock: 78,
    category: "cafeteras"
  }, {
    id: 11,
    title: "Pezzetti Italexpress Moka Espresso Coffeemaker 2 Cups",
    price: 3321,
    detail: "Café tradicional. Con un sabor concentrado y un aroma que se apodera de tu casa, tu café moka es el complemento ideal para cualquier momento del día.",
    img: "/images/Cafeteras/11.jpeg",
    stock: 77,
    category: "cafeteras"
  }, {
    id: 12,
    title: "Ibrik Brass for Greek/Turkish Coffee - 140ml",
    price: 65,
    detail: "Estilo: cafetera turca grande de cobre martillado con diferentes motivos hechos a mano. Esta cafetera también se conoce como ibrik o cezve en la cultura turca y ampliamente utilizada en la cultura árabe como cafetera árabe y en la cultura griega se llama briki. Fabricado en Turquía.",
    img: "/images/Cafeteras/12.jpeg",
    stock: 91,
    category: "cafeteras"
  }, {
    id: 13,
    title: "Chemex",
    price: 1628,
    detail: "Café vertido: la cafetera manual te permite preparar una excelente taza de café en cuestión de minutos. Rápido y fácil: simplemente añade café molido grueso al filtro, vierte una pequeña cantidad de agua con un movimiento circular sobre el café molido hasta que se empape, añade el agua restante y deja gotear.",
    img: "/images/Cafeteras/13.jpeg",
    stock: 52,
    category: "cafeteras"
  }, {
    id: 14,
    title: "Yama CD-8 Brewing Device for Pour Over & Cold Brew",
    price: 4644,
    detail: "Preparación versátil: prepara un delicioso café aromático utilizando el proceso automatizado de la cafetera de vertido cuando sea conveniente, o prepara vertido tradicional cuando tengas más tiempo para hacer café y quieres más control.",
    img: "/images/Cafeteras/14.jpeg",
    stock: 63,
    category: "cafeteras"
  }, {
    id: 15,
    title: "Pezzetti Steelexpress Moka Espresso Coffeemaker 4 Cups",
    price: 2968,
    detail: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    img: "/images/Cafeteras/15.jpeg",
    stock: 90,
    category: "cafeteras"
  }, {
    id: 16,
    title: "Hario Coffee Syphon Technica 3 Cup TCA-3",
    price: 3199,
    detail: "Hecho de la mejor vidrio de borosilicato resistente al calor de Hario. Incluye un hollín última intervensión denatured quemador de alcohol. Fácil de usar. Fácil de limpiar. Importado de Japón",
    img: "/images/Cafeteras/16.jpeg",
    stock: 25,
    category: "cafeteras"
  }, {
    id: 17,
    title: "Tiamo Coffee Syphon 3 Cups with Micro Gas Burner",
    price: 1419,
    detail: "5 taza capacidad; Fácil de usar; fácil de limpiar. Hecho de la mejor vidrio de borosilicato resistente al calor. El mango te permitirá para mantener y pour de la capacidad de la jarra de tan pronto como usted acabado preparación. El filtro de acero inoxidable y algodón es seguro que usted un durar mucho tiempo. Utiliza las propiedades de siphoning (syphoning) a la Brew.",
    img: "/images/Cafeteras/17.jpeg",
    stock: 94,
    category: "cafeteras"
  }, {
    id: 18,
    title: "COLOMBIA",
    price: 2069,
    detail: "Es un tipo de café frío que preparamos de manera artesanal. Durante 24 horas el agua fría extrae los sabores y aroma provenientes del origen de nuestros cafés. Hacemos una trazabilidad completa al grano desde la siembra y recolección del fruto hasta su preparación, para asegurarnos de aprovechar al máximo su potencial. Es una bebida natural llena de matices y sabores intensos, con la energía de la cafeína, pero sin la amargura del aceite del café.",
    img: "/images/ColdBrew/18.jpeg",
    stock: 23,
    category: "cold-brew"
  }, {
    id: 19,
    title: "NICARAGUA",
    price: 786,
    detail: "Una bebida concentrada de café, delicada, rica en antioxidantes, llena de energía, de baja acidez y que ayuda al metabolismo!. Esta super bebida es el resultado de un proceso de extracción en frío cuidadosamente elaborado por muchas horas.",
    img: "/images/ColdBrew/19.jpeg",
    stock: 94,
    category: "cold-brew"
  }, {
    id: 20,
    title: "KENYA",
    price: 3678,
    detail: "Es todo lo contrario a un espresso porque, mientras éste tarda 25 segundos en ser extraído por calor, el cold brew coffee necesita entre 12 y 24 horas para obtener toda su esencia. Esto significa que el sabor, el olor y los aromas, es decir, todas sus características organolépticas, se obtienen por tiempo de infusión y no por calor.",
    img: "/images/ColdBrew/20.jpeg",
    stock: 45,
    category: "cold-brew"
  }
];

export default function getItems(){
    return new Promise( (resolve) => {
    setTimeout( () =>{
       resolve(data); 
    },1200);

})
}

export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {

    let itemFind = data.filter((item) => {
      return item.category === cat;
    });
    setTimeout( () => {
      console.log("Encontramos:",itemFind)
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 1500)

  });

}

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {

    let itemFind = data.find((item) => {
      return item.id === parseInt(idItem);
    })
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 1500)

  });

}
