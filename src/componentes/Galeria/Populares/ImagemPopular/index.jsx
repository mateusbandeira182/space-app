import styled from "styled-components"

const Figure = styled.figure`
  width: ${props => props.$expandida ? '90%' : '212px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px;
  }
`;


const ImagemPopular = ({ fotoPopular, handleZoomClick }) => {
  return (
    <Figure $expandida={false} id={`foto-${fotoPopular.id}`} onClick={handleZoomClick}>
      <img src={fotoPopular.path} alt={fotoPopular.alt} />
    </Figure>
  )
};

export default ImagemPopular;