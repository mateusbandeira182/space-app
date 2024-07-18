import styled from "styled-components";
import Titulo from "../../Titulo";
import ImagemPopular from "./ImagemPopular";

const PopularContainer = styled.aside`
  display: flex;
  flex-direction: column;
`;
const ImagensContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;
const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = ({ imagesPopulares, handleZoomFotoSelecionada }) => {
  return (
    <PopularContainer>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ImagensContainer>
        {imagesPopulares.map((fotoPopular) => (
          <ImagemPopular
            key={fotoPopular.id}
            fotoPopular={fotoPopular}
            handleZoomClick={() => handleZoomFotoSelecionada(fotoPopular)}
          />
        ))}
      </ImagensContainer>
      <Botao>Ver mais</Botao>
    </PopularContainer>
  );
};

export default Populares;
