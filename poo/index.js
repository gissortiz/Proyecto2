class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
    this.resultados = {};
  }

  agregarPregunta(pregunta, opciones) {
    if (opciones.length < 2) throw new Error('Cada pregunta debe tener al menos 2 opciones.');
    this.preguntas.push({ pregunta, opciones });
    this.resultados[pregunta] = Object.fromEntries(opciones.map(opcion => [opcion, 0]));
  }
  
  votar(pregunta, opcion) {
    if (!this.resultados[pregunta] || !(opcion in this.resultados[pregunta])) throw new Error('Opción no válida.');
    this.resultados[pregunta][opcion] += 1;
  }

  mostrarResultados() {
    if (this.preguntas.length < 8) throw new Error('La encuesta debe tener al menos 8 preguntas para mostrar resultados.');
    console.log(`Resultados de la encuesta: ${this.titulo}`);
    this.preguntas.forEach(({ pregunta }) => {
      console.log(`\nPregunta: ${pregunta}`);
      Object.entries(this.resultados[pregunta]).forEach(([opcion, votos]) => {
        console.log(`  - ${opcion}: ${votos} votos`);
      });
    });
  }
}

class GestorDeEncuestas {
  constructor() {
    this.encuestas = [];
  }

  crearEncuesta(titulo) {
    const nuevaEncuesta = new Encuesta(titulo);
    this.encuestas.push(nuevaEncuesta);
    return nuevaEncuesta;
  }

  listarEncuestas() {
    console.log('Encuestas disponibles:');
    this.encuestas.forEach(({ titulo }, index) => console.log(`${index + 1}. ${titulo}`));
  }
}

const gestor = new GestorDeEncuestas();
const encuesta = gestor.crearEncuesta('Encuesta de preferencias de tecnología');

[
  ['¿Qué sistema operativo prefieres?', ['Windows', 'macOS', 'Linux']],
  ['¿Qué marca de smartphone prefieres?', ['Apple', 'Samsung', 'Xiaomi']],
  ['¿Prefieres trabajar en oficina o remoto?', ['Oficina', 'Remoto', 'Híbrido']],
  ['¿Qué lenguaje de programación te gusta más?', ['JavaScript', 'Python', 'Java']],
  ['¿Prefieres laptops o PCs de escritorio?', ['Laptops', 'PCs de escritorio']],
  ['¿Qué navegador usas más frecuentemente?', ['Chrome', 'Firefox', 'Edge']],
  ['¿Qué tipo de tecnología te interesa más?', ['IA', 'Blockchain', 'Ciberseguridad']],
  ['¿Qué tipo de videojuegos prefieres?', ['Acción', 'Aventura', 'Deportes', 'Estrategia']]
].forEach(([pregunta, opciones]) => encuesta.agregarPregunta(pregunta, opciones));

encuesta.votar('¿Qué sistema operativo prefieres?', 'Linux');
encuesta.votar('¿Qué sistema operativo prefieres?', 'Linux');
encuesta.votar('¿Qué sistema operativo prefieres?', 'Windows');
encuesta.votar('¿Qué marca de smartphone prefieres?', 'Apple');

encuesta.mostrarResultados();
gestor.listarEncuestas();