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
      imagen: "",
      nombre: "Ferrari Roma",
      descripcion: "La piu veloce de tuta Italia",
      comentarios: [
        { nombreUsuario: "PanchoPro", texto: "Tremenda nave", imagenDePerfil: "" },
      ]
    },
    {
      id: 2,
      imagen: "",
      nombre: "Ferrari Roma",
      descripcion: "La piu veloce de tuta Italia",
      comentarios: [
        { nombreUsuario: "PanchoPro2", texto: "Otra que nave, un cohete", imagenDePerfil: "" },
      ]
    },
    {
      id: 3,
      imagen: "",
      nombre: "Ferrari SF90 Stradale",
      descripcion: "La híbrida más potente del cavallino rampante",
      comentarios: [
        { nombreUsuario: "LuchoRacing", texto: "Un misil con ruedas", imagenDePerfil: "" },
      ]
    },
    {
      id: 4,
      imagen: "",
      nombre: "Ferrari 488 Pista",
      descripcion: "Diseñada para la pista pero lista para la calle",
      comentarios: [
        { nombreUsuario: "NicoSpeed", texto: "La manejaría todos los días", imagenDePerfil: "" },
      ]
    },
    {
      id: 5,
      imagen: "",
      nombre: "Ferrari F8 Tributo",
      descripcion: "Un homenaje al motor V8 más premiado de la historia",
      comentarios: [
        { nombreUsuario: "CamiF1", texto: "Mi sueño desde siempre", imagenDePerfil: "" },
      ]
    },
    {
      id: 6,
      imagen: "",
      nombre: "Ferrari Portofino M",
      descripcion: "Elegancia descapotable con alma deportiva",
      comentarios: [
        { nombreUsuario: "JuanchoGT", texto: "Perfecto para la costa", imagenDePerfil: "" },
      ]
    },
    {
      id: 7,
      imagen: "",
      nombre: "Ferrari LaFerrari",
      descripcion: "El híbrido que redefinió el superdeportivo",
      comentarios: [
        { nombreUsuario: "ValeTurbo", texto: "Simplemente arte sobre ruedas", imagenDePerfil: "" },
      ]
    },
    {
      id: 8,
      imagen: "",
      nombre: "Ferrari Enzo",
      descripcion: "El legado de la Fórmula 1 llevado a la calle",
      comentarios: [
        { nombreUsuario: "MaxiDriver", texto: "Ícono eterno", imagenDePerfil: "" },
      ]
    },
    {
      id: 9,
      imagen: "",
      nombre: "Ferrari Testarossa",
      descripcion: "Clásico de los 80 con un diseño inconfundible",
      comentarios: [
        { nombreUsuario: "RetroCar", texto: "La mejor época de Ferrari", imagenDePerfil: "" },
      ]
    },
    {
      id: 10,
      imagen: "",
      nombre: "Ferrari 812 Superfast",
      descripcion: "Un V12 atmosférico que ruge como ninguno",
      comentarios: [
        { nombreUsuario: "SofiTrack", texto: "El sonido es una sinfonía", imagenDePerfil: "" },
      ]
    }
  ],
  filtrarPorId: function( idBuscado ) { 
    let listaNueva = [];
    for (let i = 0; i < this.productos.length; i++) {
      const autoIterado = this.productos[i];
      if (autoIterado.id == idBuscado) {
        listaNueva.push(autoIterado);
      }
    }
    return listaNueva;
  }
};

module.exports = autos;
