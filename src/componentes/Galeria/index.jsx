import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";
import { useEffect } from "react";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [], onChangeFoto, fotosPopulares = [], onChangeFotoPopular, onToggleFavorito, setTag, tag }) => {

  return (
    <>
      <Tags setTag={setTag} selectedTag={tag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => <Imagem
              handleZoomFotoSelecionada={onChangeFoto}
              key={foto.id}
              foto={foto}
              onToggleFavorito={onToggleFavorito}
              />)}
          </ImagensContainer>
        </SecaoFluida>
        <Populares
          imagesPopulares={fotosPopulares}
          handleZoomFotoSelecionada={onChangeFotoPopular}
         />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
