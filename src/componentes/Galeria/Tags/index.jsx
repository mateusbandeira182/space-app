import tags from "./tags.json";
import styled from "styled-components";

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  max-width: 219px;
  width: 100%;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background-color: rgba(217, 217, 217, 0.35);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: ${props => props.$selectedTag ? '2px solid #c98cf1' : '2px solid transparent'};
  &:hover {
    border-color: #c98cf1;
  }
`;
const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 24px;
  margin-top: 56px;
`;

const Tags = ({ setTag, selectedTag }) => {
  return (
    <TagContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <Tag $selectedTag={selectedTag === tag} key={tag.id} onClick={() => setTag(tag)}>
          {tag.titulo}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
