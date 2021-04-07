import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');

  useEffect(()=> {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=8e04f17d896248ee8d97596441cfcbe9`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(categoria);
      console.log(noticias.articles);
    
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
          titulo='Buscador de Noticias'
      />

      <div className="container-white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>

    </Fragment>
  );
}

export default App;
