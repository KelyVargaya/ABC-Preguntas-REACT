let preguntas = [
  {
			imagen: 'img/bill.png',
			pregunta: '¿Como se llama la empresa a la que le debe su fortuna Bill Gates?',
			opciones: {A:'Microsoft', B:'Windows', C:'IBM'},
  },
  {
			imagen: 'img/hacker.png',
			pregunta: '¿En cual de las clasificaciones de SOMBRERO esta un Hackers??',
			opciones: {A:'Blanco', B:"Negro", C:"Azul"},
  },
  {
			imagen: 'img/steve-jobs.jpg',
			pregunta: 'Cual fue la compañia creada por Steve Jobs despues de ser expulsado de Apple?',
			opciones: {A:'Next', B:'Pixar', C:'Mac'},
  },
  {
			imagen: 'img/bill.png',
			pregunta: '¿Como se llama la empresa a la que le debe su fortuna Bill Gates?',
			opciones: {A:'Microsoft', B:'Windows', C:'IBM'},
  },
  {
			imagen: 'img/hacker.png',
			pregunta: '¿En cual de las clasificaciones de SOMBRERO esta un Hackers??',
			opciones: {A:'Blanco', B:"Negro", C:"Azul"},
  }
]
class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
      respondidas: null,
    }
  }
  
  siguiente(){
    this.setState({
      contador: this.state.contador + 1,
    })
  }


ReactDOM.render(<Application />, document.getElementById('container'));