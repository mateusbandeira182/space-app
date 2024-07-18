import styled from "styled-components"
import EstiloGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import fotosPopulares from "./fotosPopulares.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] =  useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [fotosPopularesGaleria, setFotosPopularesGaleria] = useState(fotosPopulares);
  const [busca, setBusca] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroTag = !tag || foto.tagId === tag.tag || tag.id === 4;
      const filtroPorTitulo = foto.titulo.toLowerCase().includes(busca.toLowerCase());
      return filtroTag && filtroPorTitulo;
    });
    setFotosGaleria(fotosFiltradas);
  }, [tag, busca]);

  const onCloseModal = () => {
    setFotoSelecionada(null);
  }

  const onToggleFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }));
  }

  return (
    <FundoGradiente>
      <EstiloGlobais />
      <AppContainer>
        <Cabecalho
          setBusca={setBusca}
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage="/assets/banner.png"
            />
            <Galeria
              setTag={setTag}
              tag={tag}
              onChangeFoto={foto => setFotoSelecionada(foto)}
              fotos={fotosGaleria}
              fotosPopulares={fotosPopularesGaleria}
              onChangeFotoPopular={foto => setFotoSelecionada(foto)}
              onToggleFavorito={onToggleFavorito}
            />
          </ConteudoGaleria>
        </MainContainer>
        <ModalZoom
          foto={fotoSelecionada}
          onClose={onCloseModal}
          onToggleFavorito={onToggleFavorito}
        />
      </AppContainer>
      <Footer />
    </FundoGradiente>
  )
}

export default App
