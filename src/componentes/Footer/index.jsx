import styled from "styled-components";
import LinkImage from "./LinkImage";
import Titulo from "../Titulo";

const FooterEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
  background: rgba(4, 36, 79, 1);
  margin-top: 74px;
`;

const ListaEstilizada = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 34px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TitleFooter = styled.h4`
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <ListaEstilizada>
        <li>
          <LinkImage href="#">
            <img src="/imagens/sociais/facebook.svg" alt="Facebook" />
          </LinkImage>
        </li>
        <li>
          <LinkImage href="#">
            <img src="/imagens/sociais/twitter.svg" alt="Twitter" />
          </LinkImage>
        </li>
        <li>
          <LinkImage href="#">
            <img src="/imagens/sociais/instagram.svg" alt="Instagram" />
          </LinkImage>
        </li>
      </ListaEstilizada>
      <TitleFooter>
        Desenvolvido por <strong>Alura</strong>.
      </TitleFooter>
    </FooterEstilizado>
  );
};

export default Footer;