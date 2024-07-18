import styled from "styled-components";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #C98CF1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  ::placeholder {
    font-family: GandhiSansRegular;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = ({ setBusca }) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado placeholder="O que você procura?" onChange={(event) => setBusca(event.target.value)} />
      <IconeLupa src="icones/search.png" alt="Ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;