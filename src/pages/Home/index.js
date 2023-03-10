import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <>
      <div >
        <Menu />
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que eh Front-end? Trabalhando na area os termos HTML, CSS e JavaScript fazer parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem afinal? Descubra com a Vanessa!"} />
        
        <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[0]} />
        
        <Carousel category={dadosIniciais.categorias[1]} />
        <Carousel category={dadosIniciais.categorias[2]} />
        <Carousel category={dadosIniciais.categorias[3]} />
        <Carousel category={dadosIniciais.categorias[4]} />
        <Carousel category={dadosIniciais.categorias[5]} />

        <Footer 
          category={dadosIniciais.categorias[0]}
        />

      </div>          
    </>
  
  );
}

export default Home;
