CREATE SCHEMA integradorGrupo3;
USE integradorGrupo3;

CREATE TABLE usuarios (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  contrasena VARCHAR(100) NOT NULL,
  foto_de_perfil VARCHAR(500) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME DEFAULT NULL
);

CREATE TABLE productos (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  imagen VARCHAR(500) NOT NULL,
  producto VARCHAR(500) NOT NULL,
  descripcion TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME DEFAULT NULL,

  id_usuario INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_post INT UNSIGNED NOT NULL,
  id_usuario INT UNSIGNED NOT NULL,
  comentario TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME DEFAULT NULL,

  FOREIGN KEY (id_post) REFERENCES productos(id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (email, contrasena, foto_de_perfil)
VALUES
('rafaelmuller@gmail.com','riverplate','rafa.jpg'),
('pancho@gmail.com','hinchadelciclon','fotopancho.jpg'),
('rmuller@udesa.edu.ar','RiverElMasGrande','fotoraflow.jpg'),
('felix@gmail.com','clave1234','fotofelix.jpg'),
('lautipro@gmail.com','hinchaderecing','fotoracing.jpg');

INSERT INTO productos (imagen, producto, descripcion, id_usuario)
VALUES 
('https://www.exoticcarhacks.com/wp-content/uploads/2025/01/Used-2024-Ferrari-Roma-w-FULL-Stealth-PPF-Custom-Specs-Carbon-Driver-Zone-1731015795.jpg','Ferrari Roma','La piu veloce de tuta Italia',1),
('https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080','Ferrari Puro Sangue','La piu veloce de tuta Italia',1),
('https://revista-lagunas.s3.us-east-2.amazonaws.com/2023/12/1102-ferrari-sf90-stradale-el-auto-mas-caro-del-mundo-y-los-dos-que-completan-el-podio-153-big.jpg','Ferrari SF90 Stradale','La híbrida más potente del cavallino rampante',2),
('https://cdn.ferrari.com/cms/network/media/img/resize/5d371735c3f9ec0af647572d-ferrari_488pista_intro_socialshare?width=1080','Ferrari 488 Pista','Diseñada para la pista pero lista para la calle',2),
('https://cdn.ferrari.com/cms/network/media/img/resize/5d26fdb7c3f9ec0af6475619-01_fb_ppl_intro_lp3lhwq8?width=1080','Ferrari F8 Tributo','Un homenaje al motor V8 más premiado de la historia',3),
('https://cdn.ferrari.com/cms/network/media/img/resize/5f620f2810313d0ac518254d-ferrari-portofino-m-social-card-cover-intro-new?width=1080','Ferrari Portofino M','Elegancia descapotable con alma deportiva',3),
('https://cdn.ferrari.com/cms/network/media/img/resize/5ddb97392cdb32285a799dfa-laferrari-2013-share?width=1080','Ferrari LaFerrari','El híbrido que redefinió el superdeportivo',4),
('https://www.amalgamcollection.com/cdn/shop/articles/Ferrari_Enzo_-_M5267--00006_1024x1024.jpg?v=1665397938','Ferrari Enzo','El legado de la Fórmula 1 llevado a la calle',4),
('https://cloudfront-us-east-1.images.arcpublishing.com/artear/UC6FZ4FCGRHA5C5L6YTFEUIQ3A.jpg','Ferrari Testarossa','Clásico de los 80 con un diseño inconfundible',5),
('https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.547xw:0.548xh;0.127xw,0.342xh&resize=1200:*','Ferrari 812 Superfast','Un V12 atmosférico que ruge como ninguno',5);


INSERT INTO comentarios (id_post, id_usuario, comentario) VALUES
(1,1,'Increíble diseño, el Ferrari Roma es único.'),
(1,2,'Lo vi en persona y me enamoré.'),
(1,3,'Definitivamente mi Ferrari favorito.'),

(2,2,'El Purosangue es brutal, un SUV con alma de Ferrari.'),
(2,4,'Es el sueño del pibes'),
(2,5,'Ferrari camioneta, un producto magnifico'),

(3,1,'Vuela esa nave.'),
(3,3,'Una belleza total'),
(3,5,'El mejor híbrido que existe, sin lugar a dudas.'),

(4,1,'La 488 Pista me parece un auto pensado para correr.'),
(4,2,'Increíble en pista y también en ciudad.'),
(4,4,'El sonido del motor es adictivo.'),

(5,3,'Realmente imrpesionante.'),
(5,4,'Me parece una joya moderna de Ferrari.'),
(5,5,'elegancia y potencia.'),

(6,2,'Ideal para disfrutar descapotado.'),
(6,3,'Elegante y deportivo al mismo tiempo.'),
(6,5,'Me encanta para viajes largos.'),

(7,1,'LaFerrari es el tope de gama, impresionante.'),
(7,4,'Una maravilla con todas las letras'),
(7,5,'Un auto de colección que nunca pasará de moda.'),

(8,2,' Es historia pura de Ferrari.'),
(8,3,'Un clásico moderno, único.'),
(8,5,'Lo mejor que salió en honor a Enzo Ferrari.'),

(9,1,'El Testarossa me recuerda a Diegote Armando Maradona.'),
(9,2,'Un clásico que siempre me gustó.'),
(9,4,'Ese diseño tremendo'),

(10,1,'Tremenda la potencia de este auto'),
(10,3,'Una obra de arte.'),
(10,5,'Del rey de los Ferrari.');
