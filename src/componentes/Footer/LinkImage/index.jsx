import styled from "styled-components";

const LinkImageEstilizado = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

const LinkImage = ({ href, children }) => {
  return (
    <LinkImageEstilizado target="_blank" href={`${href}`}>
      {children}
    </LinkImageEstilizado>
  );
};


export default LinkImage;