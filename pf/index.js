const crearEncuesta = (titulo) => ({
  titulo,
  preguntas: [],
  resultados: {},
});

const agregarPregunta = (encuesta, pregunta, opciones) => {
  if (opciones.length < 2) return encuesta;

  return {
    ...encuesta,
    preguntas: [...encuesta.preguntas, { pregunta, opciones }],
    resultados: {
      ...encuesta.resultados,
      [pregunta]: Object.fromEntries(opciones.map(opcion => [opcion, 0])),
    },
  };
};

const votar = (encuesta, pregunta, opcion) => {
  if (!(pregunta in encuesta.resultados) || !(opcion in encuesta.resultados[pregunta])) return encuesta;

  return {
    ...encuesta,
    resultados: {
      ...encuesta.resultados,
      [pregunta]: {
        ...encuesta.resultados[pregunta],
        [opcion]: encuesta.resultados[pregunta][opcion] + 1,
      },
    },
  };
};

const mostrarResultados = (encuesta) => {
  if (encuesta.preguntas.length < 8) {
    console.log(`La encuesta "${encuesta.titulo}" necesita al menos 8 preguntas.`);
    return;
  }

  console.log(`Resultados de la encuesta: ${encuesta.titulo}`);
  Object.entries(encuesta.resultados).forEach(([pregunta, opciones]) => {
    console.log(`\nPregunta: ${pregunta}`);
    Object.entries(opciones).forEach(([opcion, votos]) => console.log(`  - ${opcion}: ${votos} votos`));
  });
};

const crearGestorDeEncuestas = () => ({ encuestas: [] });

const agregarEncuesta = (gestor, encuesta) => (
  encuesta.preguntas.length < 8 ? gestor : { ...gestor, encuestas: [...gestor.encuestas, encuesta] }
);

const listarEncuestas = (gestor) => {
  console.log('Encuestas disponibles:');
  gestor.encuestas.forEach(({ titulo }, index) => console.log(`${index + 1}. ${titulo}`));
};

let gestor = crearGestorDeEncuestas();
let encuesta = crearEncuesta('Encuesta de tecnología');

[
  ['¿Qué sistema operativo prefieres?', ['Windows', 'macOS', 'Linux']],
  ['¿Qué marca de smartphone prefieres?', ['Apple', 'Samsung', 'Xiaomi']],
  ['¿Prefieres trabajar en oficina o remoto?', ['Oficina', 'Remoto', 'Híbrido']],
  ['¿Qué lenguaje de programación te gusta más?', ['JavaScript', 'Python', 'Java']],
  ['¿Prefieres laptops o PCs de escritorio?', ['Laptops', 'PCs de escritorio']],
  ['¿Qué navegador usas más frecuentemente?', ['Chrome', 'Firefox', 'Edge']],
  ['¿Qué tipo de tecnología te interesa más?', ['IA', 'Blockchain', 'Ciberseguridad']],
  ['¿Qué tipo de videojuegos prefieres?', ['Acción', 'Aventura', 'Deportes', 'Estrategia']],
].forEach(([pregunta, opciones]) => encuesta = agregarPregunta(encuesta, pregunta, opciones));

gestor = agregarEncuesta(gestor, encuesta);
encuesta = votar(encuesta, '¿Qué sistema operativo prefieres?', 'Linux');
encuesta = votar(encuesta, '¿Qué sistema operativo prefieres?', 'Windows');
encuesta = votar(encuesta, '¿Qué marca de smartphone prefieres?', 'Apple');
encuesta = votar(encuesta, '¿Qué sistema operativo prefieres?', 'Linux');
encuesta = votar(encuesta, '¿Qué sistema operativo prefieres?', 'Linux');

mostrarResultados(encuesta);
listarEncuestas(gestor);
