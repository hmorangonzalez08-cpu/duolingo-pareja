/* =====================================================================
   CONTENIDO DEL JUEGO: edita solo este archivo.

   PREGUNTAS (20 por nivel, 5 retos de 4 preguntas cada uno):
     { q: "Pregunta", ok: "Respuesta correcta", mal: ["Falsa 1", "Falsa 2", "Falsa 3"] }
   Si en un nivel hay menos de 20, el resto se rellenan con preguntas de
   prueba para que puedas probar el juego mientras escribes las tuyas.

   CAMINO: lista de retos de cada nivel, en orden.
     { tipo: 'preguntas' }                      -> 4 preguntas (cambia con n: 5)
     { tipo: 'juego', juego: 'tetris', meta: 500 }

   JUEGOS Y SUS AJUSTES:
     tetris     meta (puntos), vel (ms por caída; menos = más difícil)
     ahorcado   palabra, pista, fallos
     wordle     palabra, pista, intentos
     snake      meta (manzanas), vel (ms), muros (nº de obstáculos), tam
     memoria    pares (6, 8, 10 o 12), fallos (máximo permitido)
     puzzle     tam (3 o 4), foto (nº de foto: 0 = la primera), movimientos (opcional)
     laberinto  tam (impar: 15, 21, 25...), tiempo (segundos), niebla (radio de visión; 0 = sin niebla)
     sopa       palabras [...], tam (8-12), dir (3 = fácil, 5 o 8 = difícil)
     simon      rondas, vel (ms)

   Palabras en MAYÚSCULAS y sin acentos (la Ñ sí vale).

   TRUCOS PARA PROBAR:
     index.html?dev    desbloquea todos los retos
     index.html?reset  borra el progreso guardado
   ===================================================================== */

const CONTENIDO = {
  titulo: "Para Morr💘",
  apodo: "Morr",
  yo: "Hectitorrr",

  // Fotos en la carpeta "fotos": foto1.jpeg ... foto20.jpeg (las que no existan se ignoran)
  fotos: Array.from({ length: 20 }, (_, i) => `fotos/foto${i + 1}.jpeg`),

  // MENSAJE FINAL: sustituye los textos entre corchetes. Cada línea de "parrafos" es un bloque.
  final: {
    saludo: "Hola, Morr💘",
    parrafos: [
      "Holaaa mi bebe lindoooooo, ya veo que has podido superar todo el minijuego y has conseguido pasarte mi duolingo enteroooo. Te quiero un montón y espero que te haya gustado todo lo que he preparado para ti, porque lo he hecho con todo mi amor y cariño. <3",
      "Ya quería aprovechar este momento para decirte que eres la mujer más maravillosa del mundo y que me siento muy afortunado de tenerte a mi lado. Cada día contigo es una aventura y un regalo, y no puedo esperar a seguir construyendo recuerdos juntos. Espero poder criar contigo a Enzo y Noah y que nunca te arrepientas de nada de lo que estamos logrando y haciendo dia a dia porque para mi es super importante. Agradecerte por ser la persona que eres conmigo y por amarme de la manera en que lo haces, porque me haces sentir especial y amado cada día.",
      "Quiero que sepas que siempre estaré aquí para ti, en los buenos y malos momentos, y que mi amor por ti es incondicional. Eres mi compañera, mi confidente y mi todo, y no puedo imaginar mi vida sin ti. Gracias por ser tú y por hacerme tan feliz. Te amo con todo mi corazón, Morr💘.",
      "Espero que nunca te canses de mi y de mis mini detalles que te hago"
    ],
    despedida: "Gracias por todo, mi pequee,te quiero mucho💘",
    firma: "— Hectitorrr:)"
  },

  niveles: [
    /* ---------------------------- NIVEL 1 ---------------------------- */
    {
      titulo: "Nivel 1",
      subtitulo: "Los inicios",
      color: "#a855f7", color2: "#ec4899",
      preguntas: [
        // --- BLOQUE 1 (Preguntas 1 a 4) ---
        { q: "¿Dónde fuimos la primera vez que quedamos a solas?", ok: "A dar un paseo por el parque", mal: ["Al cine", "A tomar un café", "A cenar"] },
        { q: "¿Qué es lo primero que pensé cuando te vi por primera vez?", ok: "DIOSSS QUE MUJER TAN GUAPA Y TODO MIA!", mal: ["¡Qué bajita es!", "Se me va a caer la baba", "Qué buen rollo transmite"] },
        { q: "¿Cuál es nuestra canción por excelencia?", ok: "Aire, de Lucho RK", mal: ["Cosas que no te dije - Mora", "El himno del Atleti", "Muero x esa Carita - ceaxe"] },
        { q: "¿Qué prenda mía te queda mejor?", ok: "Cualquier camisetita del atleti", mal: ["Una sudadera negra", "Mis pantalones de deporte", "Un pijama de invierno"] },

        // --- BLOQUE 2 (Preguntas 5 a 8) ---
        { q: "¿Cómo suelo llamarte más cariñosamente?", ok: "Morrr", mal: ["Peque", "Princesa", "Gordi"] },
        { q: "¿Qué día marcó el inicio de nuestra historia?", ok: "El 4 de noviembre", mal: ["El 7 de julio", "El 21 de noviembre", "El 1 de septiembre"] },
        { q: "¿Qué animalito te enamoró por completo en aquel día de animalitos que pasamos juntos?", ok: "Los pingüinos", mal: ["Los pandas", "Los delfines", "Los koalas"] },
        { q: "¿Cual es tu posición favorita para dormir o estar juntos?", ok: "Tú (encima de mí)", mal: ["En un lado apartado sin mi", "Cerca de mí", "Ninguno, no te aguanto"] },

        // --- BLOQUE 3 (Preguntas 9 a 12) ---
        { q: "¿Qué equipo de fútbol nos dio aquel pedazo de día juntos?", ok: "El Atleti", mal: ["El Real Madrid", "La Selección Española", "El Rayo Vallecano"] },
        { q: "¿Qué es lo que siempre te repito cuando dudas sobre tu físico?", ok: "Que eres la mujer más hermosa del mundo y perfecta!", mal: ["Que tienes que ir más al gimnasio", "Que no te preocupes por tonterías", "Que te ves bien con cualquier cosa"] },
        { q: "¿De qué color era aquella rosa especial con la que te hice una foto súper linda?", ok: "Amarilla", mal: ["Roja", "Blanca", "Azul"] },
        { q: "¿Cuál es una de nuestras costumbres más graciosas cuando estamos juntos?", ok: "Mordernos y hacernos bromas todo el rato", mal: ["No hablar en horas", "Jugar a algun juego del movil", "Ver una pelicula"] },

        // --- BLOQUE 4 (Preguntas 13 a 16) ---
        { q: "¿Qué detalle floral te he regalado más de una vez porque me encanta verte sonreír?", ok: "Ramos de flores", mal: ["Un cactus", "Un bonsái", "Girasoles de plástico"] },
        { q: "¿Quién de los dos tarda más en decidir qué película o serie poner?", ok: "Tú, tardas la vida entera", mal: ["Yo, soy súper indeciso", "Siempre lo echamos a suertes", "Ponemos lo primero que sale"] },
        { q: "¿Qué pasa siempre que nos hacemos una foto intentando salir serios?", ok: "Acabamos haciendo muecas o riéndonos", mal: ["Salimos como modelos profesionales", "Borramos la foto al segundo", "Nunca nos hacemos fotos"] },
        { q: "¿Cómo te ves en mis brazos según te digo siempre?", ok: "Súper petit y perfecta", mal: ["Muy alta", "Incómoda", "Con ganas de escaparte"] },

        // --- BLOQUE 5 (Preguntas 17 a 20) ---
        { q: "¿Cuál es nuestro plan favorito para una tarde tranquila de invierno (que ojala pasase)?", ok: "Quedarnos acurrucados viendo pelis o series", mal: ["Ir a correr una maratón", "Ir de museos", "Estudiar matemáticas"] },
        { q: "¿Qué es lo que más me gusta ver en tu cara cada día?", ok: "Tu sonrisa y cómo me miras", mal: ["Cuando te enfadas", "Cuando estás dormida", "Cuando bostezas"] },
        { q: "¿Qué pasaría si nos vamos un finde solos a una cabaña perdida?", ok: "Que no saldríamos de la cama", mal: ["Nos aburriríamos a las dos horas", "Estaríamos todo el rato con el móvil", "Nos volveríamos el mismo día"] },
        { q: "¿Cuánto te quiero del 1 al 10?", ok: "Infinito, más cada día que pasa", mal: ["Un 10 justito", "Un 8,5", "Depende del día"] }
      ],
      camino: [
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'ahorcado', palabra: 'MIMARNOS', pista: 'Lo que mas nos gusta a los dos', fallos: 8 }, // <-- PALABRA SECRETA AHORCADO: MIMARNOS
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'memoria', pares: 6, fallos: 12 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'snake', meta: 8, vel: 170 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'sopa', palabras: ['TELEFONICA', 'ATLETI', 'AIRE', 'MORR'], tam: 11, dir: 5 }, // <-- PALABRAS SOPA: TELEFONICA, ATLETI, AIRE, MORR
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'tetris', meta: 300, vel: 800 }
      ]
    },

    /* ---------------------------- NIVEL 2 ---------------------------- */
    {
      titulo: "Nivel 2",
      subtitulo: "Nuestros momentos",
      color: "#8b5cf6", color2: "#f472b6",
      preguntas: [
        // --- BLOQUE 1 ---
        { q: "¿Cuál fue el primer ramo que te regalé y que tanto te gustó?", ok: "Un ramo con una rosa amarilla que te veias super linda", mal: ["Un ramo de tulipanes azules", "Un centro de mesa", "Unas flores secas"] },
        { q: "¿Qué pasa siempre en nuestras fotos más espontáneas?", ok: "Que salimos haciendo el tonto o 'cucuuu'", mal: ["Que salimos súper serios", "Que siempre salen borrosas", "Que miramos hacia otro lado"] },
        { q: "¿Qué te dije aquella vez que te hice una foto en un paisaje precioso?", ok: "Que no sabía si estaba más enamorado de ti o del paisaje", mal: ["Que te apartaras que tapabas las vistas", "Que hacía demasiado frío", "Que repitiéramos la foto diez veces"] },
        { q: "¿Qué comentario gracioso dije en aquella foto donde salíamos con las perritas?", ok: "Con tres perras...", mal: ["Paseando por el campo", "Tarde de perros", "Nuestras mascotas"] },

        // --- BLOQUE 2 ---
        { q: "¿Qué posición es la que tanto te gusta?", ok: "Tu encima mia mirandome a los ojos", mal: ["A 4", "Patitas al hombro", "Yo encima tuya"] },
        { q: "¿Qué pasa cuando salimos juntos de compras?", ok: "Que nos lo pasamos genial viendo cosas juntos, y nos distraimos en los probadores jejej", mal: ["Que nos enfadamos a los cinco minutos", "Que no entramos en ninguna tienda", "Que siempre se nos olvida la cartera"] },
        { q: "¿Qué te digo siempre sobre el 'flow' que tienes en las fotos?", ok: "Que tienes más flow que yo", mal: ["Que tienes que aprender a posar", "Que yo visto mejor", "Que siempre pones la misma cara"] },
        { q: "¿Qué decía siempre cuando nos estabamos conociendo y decia algo fuera de lugar?", ok: "#broma#bromi#bromita", mal: ["UPSSSSSSS", "MENTIRAAAAAA", "ME HACKEARON EL MOVIL"] },

        // --- BLOQUE 3 ---
        { q: "¿Cuál es mi plan estrella para una cita improvisada?", ok: "Ir a un mirador, cenar juntos y tener nuestro momento intimo", mal: ["Hacer cosas de mayores durante todo el dia", "Dar una vuelta por el centro", "Que me dejes jugar a la play"] },
        { q: "¿Qué es lo que más me gusta hacerte en el pelo cuando estamos tumbados?", ok: "Caricias hasta que te quedas frita", mal: ["Despeinarte a propósito", "Hacerte trenzas", "Echarte laca"] },
        { q: "¿Qué dulce o merienda nos pega más para una tarde de frío?", ok: "Chocolate caliente con churros o tortitas", mal: ["Una ensalada César", "Un vaso de agua del tiempo", "Fruta cortada"] },
        { q: "¿Qué comida rápida es apuesta segura para una noche de peli en casa?", ok: "Tu hamburguesa o pizza favorita", mal: ["Sopa de verduras", "Pescado hervido", "Arroz blanco"] },

        // --- BLOQUE 4 ---
        { q: "¿Cuál es tu postre favorito cuando salimos a darnos un capricho?", ok: "Yo", mal: ["Una pieza de fruta", "Un yogur natural", "Nada, nunca pedimos postre"] },
        { q: "¿Qué plan navideño o de invierno me encantaria hacer cogidos de la mano?", ok: "Pasear viendo las luces con algo calentito", mal: ["Ir a la piscina descubierta", "Quedarnos cada uno en su casa", "Ir de rebajas a primera hora"] },
        { q: "¿Qué pasa despues de decirte un piropo?", ok: "Que te pones roja como un tomate", mal: ["Te da la verguenza y te ries como una cerdita", "Me lo devuelves con algo más bonito", "Que te enfadas"] },
        { q: "¿Cómo describimos nuestras fotos cuando vamos arreglados?", ok: "Que vaya par de guapos somos", mal: ["Que vamos demasiado informales", "Que nos falta combinar la ropa", "Que parecemos hermanos"] },

        // --- BLOQUE 5 ---
        { q: "¿Qué es lo que más brilla cuando te pones contenta por una sorpresa?", ok: "Tus ojos cuando sonríes", mal: ["La pantalla del móvil", "Tus zapatillas nuevas", "El reloj"] },
        { q: "¿Qué palabra define mejor cómo te quedas cuando te doy un masaje en la espalda?", ok: "Relajada y lista para dormir", mal: ["Con ganas de salir a correr", "Más nerviosa que antes", "Haciéndome cosquillas"] },
        { q: "¿Qué pasa cuando me miras con esa carita tuya tan linda?", ok: "Que se me cae la baba por completo", mal: ["Que miro hacia otro lado", "Que me pongo serio", "Que te digo que pares"] },
        { q: "¿Por qué cada día contigo es una aventura nueva?", ok: "Porque haces que cualquier plan normal sea especial", mal: ["Porque siempre nos perdemos", "Porque nunca planeamos nada", "Porque nos vamos de viaje cada martes"] }
      ],
      camino: [
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'wordle', palabra: 'PARQUE', pista: 'Un lugar importante para nosotros (por muchas muchas razones)', intentos: 8 }, // <-- PALABRA SECRETA WORDLE: PARQUE
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'simon', rondas: 8, vel: 650 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'puzzle', tam: 3, foto: 0 }, // <-- USA foto1.jpeg (índice 0)
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'laberinto', tam: 17, tiempo: 90 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'tetris', meta: 500, vel: 750 }
      ]
    },

    /* ---------------------------- NIVEL 3 ---------------------------- */
    {
      titulo: "Nivel 3",
      subtitulo: "Lo que nos une",
      color: "#c026d3", color2: "#fb7185",
      preguntas: [
        // --- BLOQUE 1 ---
        { q: "¿Qué fecha en noviembre marcó un antes y un después para dar el paso?", ok: "El miercoles 4 de noviembre", mal: ["El 31 de octubre", "El 15 de noviembre", "El 1 de diciembre"] },
        { q: "¿Qué pasó en agosto que nos hizo darnos cuenta de lo fuerte que era lo nuestro?", ok: "Que tras un bache me di cuenta de que te quería más que el primer día", mal: ["Que nos enfadamos y nos distanciamos", "Me enfade contigo y deje de hablarte", "Que nos dimos cuenta de que nos queríamos"] },
        { q: "¿A quién le confesé que cada día que pasaba me daba más cuenta de lo mucho que te amaba?", ok: "A Sandra", mal: ["A mi vecino", "A mi madre", "A un desconocido en el metro"] },
        { q: "¿Qué es lo que te digo sobre cómo haces cada día a mi lado?", ok: "Que lo haces mágico, único e irrepetible", mal: ["Que es un día más", "Que es bastante tranquilo", "Que pasa muy lento"] },

        // --- BLOQUE 2 ---
        { q: "¿Qué es lo que más agradezco de nuestra relación además de las risas y los abrazos?", ok: "Que te hayas quedado conmigo incluso tras las discusiones", mal: ["Que nunca discutamos por nada", "Que siempre me des la razón", "Que te guste el fútbol"] },
        { q: "¿Qué es lo que me duele que pienses a veces de ti misma?", ok: "Que pienses mal sobre tu físico", mal: ["Que creas que cocinas mal", "Que pienses que eres despistada", "Que digas que duermes mucho"] },
        { q: "¿Cuál es la verdad absoluta sobre tu físico según mis ojos?", ok: "Que eres la mujer más hermosa del mundo y perfecta para mí", mal: ["Que estás bien pero podrías mejorar", "Que dependes de cómo te vistas", "Que eres del montón"] },
        { q: "¿Qué papel ocupas en mi vida además de ser mi pareja?", ok: "Mi compañera, mi confidente y mi todo", mal: ["Mi compañera de estudios", "Mi entrenadora personal", "Mi asesora financiera"] },

        // --- BLOQUE 3 ---
        { q: "¿Qué colores fueron los elegidos para diseñar todo este rincón nuestro?", ok: "Rosa y morado, nuestros favoritos", mal: ["Verde y amarillo", "Negro y gris", "Naranja y marrón"] },
        { q: "¿Qué es lo que deseas con ganas?", ok: "Dormir juntos", mal: ["Cenar fuera", "Elegir siempre el restaurante", "No madrugar los lunes"] },
        { q: "¿Qué pasa cuando intentamos estar serios mirándonos a los ojos?", ok: "Que nos entran ganas de reírnos o besarnos", mal: ["Que aguantamos diez minutos sin pestañear", "Que nos ponemos a hablar de política", "Que nos quedamos dormidos"] },
        { q: "¿Cuál es nuestra forma favorita de resolver cualquier mini-enfado?", ok: "Con un abrazo fuerte y hablando las cosas", mal: ["Estarnos una semana sin hablar", "Echar una partida al parchís", "Hacer como que no ha pasado nada"] },

        // --- BLOQUE 4 ---
        { q: "¿Qué es lo que más nos une cuando estamos lejos durante el día?", ok: "Nuestros mensajes y las ganas de vernos", mal: ["Jugar online al mismo juego", "Ver las noticias a la vez", "Mandarnos correos electrónicos"] },
        { q: "¿Qué significa para mí cada día que paso a tu lado?", ok: "Un regalo que quiero seguir construyendo contigo", mal: ["Una rutina normal", "Un pasatiempo", "Una obligación"] },
        { q: "¿Qué es lo que nunca va a cambiar pase lo que pase?", ok: "Que siempre estaré a tu lado para apoyarte y amarte", mal: ["Que seguiremos viviendo en el mismo barrio", "Que nunca discutiremos", "Que siempre hará buen tiempo"] },
        { q: "¿Qué sentimos cuando estamos abrazados sin decir ni una palabra?", ok: "Una paz y una conexión brutal", mal: ["Aburrimiento", "Ganas de mirar el móvil", "Sueño inmediato"] },

        // --- BLOQUE 5 ---
        { q: "¿Qué canción o música es capaz de transportarme directo a ti?", ok: "Aire de Lucho RK y las canciones que nos dedicamos", mal: ["La música clásica", "El reggaeton antiguo", "La radio por las mañanas"] },
        { q: "¿Por qué somos un equipo invencible?", ok: "Porque nos complementamos en lo bueno y en lo malo", mal: ["Porque pensamos exactamente igual en todo", "Porque nunca tenemos problemas", "Porque ganamos siempre a las cartas"] },
        { q: "¿Qué es lo que más valoro de ti en mis días malos?", ok: "Tu apoyo y cómo consigues sacarme una sonrisa", mal: ["Que me dejes solo todo el día", "Que me des consejos técnicos", "Que me hagas reír con chistes malos"] },
        { q: "¿Cómo definirías lo que sentimos el uno por el otro?", ok: "Un amor real y sano que crece cada día más. Y nunca lo hemos tenido con nadie", mal: ["Un capricho pasajero", "Una amistad con derechos", "Algo normalito"] }
      ],
      camino: [
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'ahorcado', palabra: 'PINGUINO', pista: 'Tu animal favorito', fallos: 6 }, // <-- PALABRA SECRETA AHORCADO: PINGUINO
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'memoria', pares: 8, fallos: 10 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'snake', meta: 12, vel: 150, muros: 5 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'sopa', palabras: ['ATLETI', 'PARQUE', 'AIRE', 'MORR', 'PINGUINO', 'CAMISETA'], tam: 11, dir: 5 }, // <-- PALABRAS SOPA: ATLETI, PARQUE, AIRE, MORR, PINGUINO, CAMISETA
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'tetris', meta: 800, vel: 700 }
      ]
    },

    /* ---------------------------- NIVEL 4 ---------------------------- */
    {
      titulo: "Nivel 4",
      subtitulo: "Sin red",
      color: "#7c3aed", color2: "#d946ef",
      preguntas: [
        // --- BLOQUE 1 ---
        { q: "¿Qué recuerdo guardas de nuestra 'Foto megafavorita'?", ok: "Que es la foto que más nos gusta de todas las que tenemos", mal: ["Que salió movida", "Que estábamos enfadados", "Que fue hace dos años"] },
        { q: "¿Cuál es la frase que resume cómo te ves cuando te abrazo fuerte?", ok: "Súper petit en mis bracitos", mal: ["Muy incómoda", "Con calor", "Intentando soltarte"] },
        { q: "¿Qué ocurre cuando nos quedamos a solas y tú pones las reglas por 30 minutos?", ok: "Que yo obedezco en todo sin rechistar", mal: ["Que nos ponemos a limpiar la casa", "Que jugamos al twister", "Que vemos una peli"] },
        { q: "¿Qué es lo que más te pone nerviosa cuando me acerco mucho a ti?", ok: "Que te mire fijamente a los ojos y a los labios", mal: ["Que te cuente un chiste", "Que te susurre al oído", "Que te pida la hora"] },

        // --- BLOQUE 2 ---
        { q: "¿Qué pasa cuando te doy besos por el cuello por sorpresa?", ok: "Que te entran escalofríos y pierdes el control", mal: ["Que te da igual", "Que te alejas de mi", "Que te pones a estudiar"] },
        { q: "¿Cuál es nuestra regla no escrita en las tardes de sofá y manta (nos gustaria)?", ok: "Acabar acurrucados y tú dormida encima de mí", mal: ["Cada uno en una punta del sofá", "Ver tres películas seguidas sin hablar", "No taparnos con la manta"] },
        { q: "¿Qué es lo que más me gusta de cómo me miras en nuestras fotos íntimas?", ok: "Esa mirada pícara y llena de cariño", mal: ["Que siempre sales con los ojos cerrados", "Que miras a la cámara de reojo", "Que pones cara de susto"] },
        { q: "¿Qué haríamos si nos quedáramos encerrados en un ascensor los dos solos?", ok: "Aprovechar el tiempo para comernos a besos", mal: ["Llamar al técnico y esperar en silencio", "Ponernos a leer los carteles", "Sentarnos en esquinas opuestas"] },

        // --- BLOQUE 3 ---
        { q: "¿Qué pasa cuando me muerdes el labio o me haces bromas picantes?", ok: "Que saltan chispas entre nosotros", mal: ["Que me enfado de verdad", "Que me voy a dormir", "Que cambio de tema"] },
        { q: "¿Cuál es tu debilidad cuando te agarro de la cintura de repente?", ok: "Que te derrites al instante", mal: ["Que me apartas las manos", "Que te pones a hacer cosquillas", "Que sales corriendo"] },
        { q: "¿Qué es lo que más nos gusta hacer cuando no tenemos prisa por ir a ningún sitio?", ok: "Quedarnos en la cama abrazados y hablando de todo", mal: ["Hacer recados por el centro", "Jugar a videojuegos", "Salir a correr"] },
        { q: "¿Qué tipo de besos son los que nos dejan sin respiración?", ok: "Los besos largos, lentos y con mucha pasión", mal: ["Los besos rápidos en la mejilla", "Los besos de despedida en el portal", "Los besos esquivos"] },

        // --- BLOQUE 4 ---
        { q: "¿Qué pasa cuando te susurro algo al oído con voz baja?", ok: "Que te pones nerviosa y te encanta", mal: ["Que no me escuchas", "Que te tapas los oídos", "Que me pides que hable más alto"] },
        { q: "¿Cuál es el mejor plan para una noche de lluvia estando los dos solos?", ok: "Manta, peli, mimos y lo que surja", mal: ["Salir a pasear sin paraguas", "Quedarnos cada uno en su casa", "Ponernos a hacer ejercicio"] },
        { q: "¿Qué es lo que más me gusta de tu forma de ser cuando estamos en confianza?", ok: "Lo cariñosa, divertida y traviesa que eres", mal: ["Lo tímida que te pones", "Que casi no hablas", "Que siempre estás seria"] },
        { q: "¿Qué ocurre cuando nos damos un abrazo de esos que duran minutos?", ok: "Que parece que se para el mundo entero", mal: ["Que nos cansamos a los diez segundos", "Que nos entra calor y nos soltamos", "Que nos ponemos a hablar del tiempo"] },

        // --- BLOQUE 5 ---
        { q: "¿Qué es lo que más te gusta de mis manos?", ok: "Cómo te acarician y la seguridad que te dan", mal: ["Lo frías que están siempre", "Que son muy pequeñas", "Nada en especial"] },
        { q: "¿Cuál es nuestra mejor arma cuando queremos picarnos el uno al otro?", ok: "Los susurros y los besos lentos con lengua", mal: ["Ignorarnos todo el día", "Mandarnos stickers", "Hablar de trabajo"] },
        { q: "¿Qué pasa cuando te digo 'Eres solo mía' al oído?", ok: "Que sonríes y te encanta escucharlo", mal: ["Que dices que no", "Que te pones a reír sin parar", "Que cambias de conversación"] },
        { q: "¿Por qué este nivel se llama 'Sin red'?", ok: "Porque aquí ya nos conocemos al 100% y sin filtros", mal: ["Porque no hay Wi-Fi", "Porque es el último nivel", "Porque no tiene preguntas"] }
      ],
      camino: [
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'wordle', palabra: 'ANILLO', pista: 'Mi regalo favorito para ti', intentos: 6 }, // <-- PALABRA SECRETA WORDLE: ANILLO
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'simon', rondas: 7, vel: 550 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'puzzle', tam: 4, foto: 1 }, // <-- USA foto2.jpeg (índice 1)
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'laberinto', tam: 21, tiempo: 100, niebla: 4 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'tetris', meta: 1200, vel: 650 }
      ]
    },

    /* ---------------------------- NIVEL 5 ---------------------------- */
    {
      titulo: "Nivel 5",
      subtitulo: "El último tramo",
      color: "#9333ea", color2: "#f43f5e",
      preguntas: [
        // --- BLOQUE 1 ---
        { q: "¿Quién es la persona favorita de Héctor en todo el universo?", ok: "Victoria (tú, mi Morrr)", mal: ["Fernando Torres", "Mi vecino del quinto", "Lucia (GTAVI)"] },
        { q: "¿Qué es lo que más deseo construir contigo de aquí en adelante?", ok: "Un futuro juntos lleno de viajes, risas y recuerdos", mal: ["Una casa en la luna", "Una colección de sellos", "Un equipo de bolos"] },
        { q: "¿Cómo me imagino despertando dentro de muchos años?", ok: "A tu lado todas las mañanas", mal: ["Solo en una isla desierta", "En un hotel de carretera", "Sin acordarme de nada"] },
        { q: "¿Qué significa este juego que he programado entero para ti?", ok: "Una forma única de demostrarte todo lo que te quiero", mal: ["Un trabajo de clase sin más", "Una prueba de informática", "Un pasatiempo aburrido"] },

        // --- BLOQUE 2 ---
        { q: "¿Cuál es nuestro próximo gran viaje o escapada soñada (nos gustaria)?", ok: "Perdernos juntos en una cabaña o viajar por el mundo", mal: ["Ir al supermercado del barrio", "Una excursión con el colegio", "Quedarnos en la estación"] },
        { q: "¿Qué fecha no tiene caducidad en nuestro calendario?", ok: "Nuestra historia juntos", mal: ["El ticket del súper", "La garantía del móvil", "El abono transporte"] },
        { q: "¿Qué te prometo hacer siempre, incluso en los días más complicados?", ok: "Intentarlo de la mejor manera y nunca soltarte la mano", mal: ["No volver a equivocarme nunca", "Comprarte todo lo que veas", "No enfadarme jamás"] },
        { q: "¿Cómo nos veo cuando seamos viejitos y tengamos 80 años?", ok: "Arrugados pero riéndonos exactamente igual que hoy", mal: ["Sin hablarnos", "Viviendo en países distintos", "Siendo súper serios"] },

        // --- BLOQUE 3 ---
        { q: "¿Qué es lo que más te enamora de nuestra historia desde aquel día 4?", ok: "Cómo empezamos sin prisa y acabamos siendo inseparables", mal: ["Que fue todo muy rápido y sin pensar", "Que nos conocimos ayer", "Que casi no nos vemos"] },
        { q: "¿Qué pasa cuando piensas en todo lo que hemos vivido estos meses?", ok: "Que te das cuenta de que ha sido la mejor etapa", mal: ["Que se te ha hecho eterno", "Que no te acuerdas de nada", "Que cambiarías todo"] },
        { q: "¿Cuál es el mejor regalo que me puedes hacer cada día?", ok: "Tu sonrisa, tus abrazos y seguir siendo tú misma", mal: ["Un coche deportivo", "Un reloj de oro", "Un viaje a Londres"] },
        { q: "¿Qué siento cada vez que te veo aparecer cuando hemos quedado?", ok: "La misma ilusión y nervios que el primer día", mal: ["Nada especial", "Prisa por volver a casa", "Me sale la mirada tontita"] },

        // --- BLOQUE 4 ---
        { q: "¿Qué es lo que nunca me cansaré de repetirte?", ok: "Que te amo con todo mi corazón y que eres preciosa", mal: ["Que llegas tarde", "Que hace frío", "Que tengo hambre"] },
        { q: "¿Qué te espera justo al terminar este último nivel?", ok: "La recompensa final. (Regalito)", mal: ["Un examen de sexo", "Volver a empezar desde el nivel 1", "Una pantalla en negro"] },
        { q: "¿Por qué elegí el nombre 'El último tramo' para el Nivel 5?", ok: "Porque estás a un paso de abrir tu sorpresa final", mal: ["Porque me quedé sin ideas", "Porque es el nivel más corto", "Porque es un maratón"] },
        { q: "¿Qué harías si pudieras volver atrás al primer día que nos vimos?", ok: "Volvería a elegirte a ti mil veces más", mal: ["Me quedaría en casa", "Iría a otro parque", "No te contestaría al mensaje"] },

        // --- BLOQUE 5 ---
        { q: "¿Cuál es nuestra mayor fortaleza como pareja?", ok: "La confianza, el cariño y las ganas de estar juntos", mal: ["Que nunca nos decimos la verdad", "Que vivimos muy lejos", "Que somos muy orgullosos"] },
        { q: "¿Qué deseo pido cada vez que pienso en nosotros?", ok: "Que sigamos sumando años, aventuras y momentos juntos", mal: ["Que me toque la lotería solo", "Que se acabe el verano", "No pido nada"] },
        { q: "¿Cuánto te quiero hoy en comparación con el primer día?", ok: "Muchísimo más, y cada día que pasa te quiero más", mal: ["Exactamente igual", "Un poquito menos", "No sabría decirlo"] },
        { q: "¿Estás lista para abrir tu recompensa final, Morrr? 💖", ok: "¡Sí, vamos a por ello!", mal: ["No, prefiero repetir el Tetris", "Mejor lo dejo para mañana", "Me da pereza"] }
      ],
      camino: [
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'ahorcado', palabra: 'VICTORIA', pista: 'Mi persona favorita', fallos: 5 }, // <-- PALABRA SECRETA AHORCADO: VICTORIA
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'memoria', pares: 12, fallos: 10 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'snake', meta: 18, vel: 130, muros: 8 },
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'sopa', palabras: ['VICTORIA', 'HECTOR', 'ATLETI', 'PARQUE', 'TELEFONICA', 'BANCO', 'FAUNIA', 'ESTACION'], tam: 12, dir: 8 }, // <-- PALABRAS SOPA: VICTORIA, HECTOR, ATLETI, PARQUE, TELEFONICA, BANCO, FAUNIA, ESTACION
        { tipo: 'preguntas' },
        { tipo: 'juego', juego: 'tetris', meta: 2000, vel: 600 }
      ]
    }
  ]
};