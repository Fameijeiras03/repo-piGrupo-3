const autos = {
  usuario: {
    email: "eferrari@maranello.com.it",
    nombre: "Enzo Ferrari",
    contraseña: "Fangio1951",
    fechaNacimiento: "1898-2-18", 
    nroDocumento: 12345678,
    fotoDePerfil: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Enzo-Ferrari.jpg" 
  },
  productos: [
    {
      id: 1,
      imagen: 'https://www.exoticcarhacks.com/wp-content/uploads/2025/01/Used-2024-Ferrari-Roma-w-FULL-Stealth-PPF-Custom-Specs-Carbon-Driver-Zone-1731015795.jpg',
      nombre: "Ferrari Roma",
      descripcion: "La piu veloce de tuta Italia",
      comentarios: [
        { nombreUsuario: "PanchoPro", texto: "Tremenda nave", imagenDePerfil: "" },
      ]
    },
    {
      id: 2,
      imagen: 'https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080',
      nombre: "Ferrari Puro Sangue",
      descripcion: "La piu veloce de tuta Italia",
      comentarios: [
        { nombreUsuario: "PanchoPro2", texto: "Otra que nave, un cohete", imagenDePerfil: "" },
      ]
    },
    {
      id: 3,
      imagen: "https://revista-lagunas.s3.us-east-2.amazonaws.com/2023/12/1102-ferrari-sf90-stradale-el-auto-mas-caro-del-mundo-y-los-dos-que-completan-el-podio-153-big.jpg",
      nombre: "Ferrari SF90 Stradale",
      descripcion: "La híbrida más potente del cavallino rampante",
      comentarios: [
        { nombreUsuario: "LuchoRacing", texto: "Un misil con ruedas", imagenDePerfil: "" },
      ]
    },
    {
      id: 4,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/5d371735c3f9ec0af647572d-ferrari_488pista_intro_socialshare?width=1080",
      nombre: "Ferrari 488 Pista",
      descripcion: "Diseñada para la pista pero lista para la calle",
      comentarios: [
        { nombreUsuario: "NicoSpeed", texto: "La manejaría todos los días", imagenDePerfil: "" },
      ]
    },
    {
      id: 5,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/5d26fdb7c3f9ec0af6475619-01_fb_ppl_intro_lp3lhwq8?width=1080",
      nombre: "Ferrari F8 Tributo",
      descripcion: "Un homenaje al motor V8 más premiado de la historia",
      comentarios: [
        { nombreUsuario: "CamiF1", texto: "Mi sueño desde siempre", imagenDePerfil: "" },
      ]
    },
    {
      id: 6,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/5f620f2810313d0ac518254d-ferrari-portofino-m-social-card-cover-intro-new?width=1080",
      nombre: "Ferrari Portofino M",
      descripcion: "Elegancia descapotable con alma deportiva",
      comentarios: [
        { nombreUsuario: "JuanchoGT", texto: "Perfecto para la costa", imagenDePerfil: "" },
      ]
    },
    {
      id: 7,
      imagen: "https://cdn.ferrari.com/cms/network/media/img/resize/5ddb97392cdb32285a799dfa-laferrari-2013-share?width=1080",
      nombre: "Ferrari LaFerrari",
      descripcion: "El híbrido que redefinió el superdeportivo",
      comentarios: [
        { nombreUsuario: "ValeTurbo", texto: "Simplemente arte sobre ruedas", imagenDePerfil: "" },
      ]
    },
    {
      id: 8,
      imagen: "https://www.amalgamcollection.com/cdn/shop/articles/Ferrari_Enzo_-_M5267--00006_1024x1024.jpg?v=1665397938",
      nombre: "Ferrari Enzo",
      descripcion: "El legado de la Fórmula 1 llevado a la calle",
      comentarios: [
        { nombreUsuario: "MaxiDriver", texto: "Ícono eterno", imagenDePerfil: "" },
      ]
    },
    {
      id: 9,
      imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/UC6FZ4FCGRHA5C5L6YTFEUIQ3A.jpg",
      nombre: "Ferrari Testarossa",
      descripcion: "Clásico de los 80 con un diseño inconfundible",
      comentarios: [
        { nombreUsuario: "RetroCar", texto: "La mejor época de Ferrari", imagenDePerfil: "" },
      ]
    },
    {
      id: 10,
      imagen: "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.547xw:0.548xh;0.127xw,0.342xh&resize=1200:*",
      nombre: "Ferrari 812 Superfast",
      descripcion: "Un V12 atmosférico que ruge como ninguno",
      comentarios: [
        { nombreUsuario: "SofiTrack", texto: "El sonido es una sinfonía", imagenDePerfil: "" },
      ]
    }
  ],
};

module.exports = autos;
