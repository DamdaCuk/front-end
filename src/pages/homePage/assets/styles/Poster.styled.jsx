import styled from "styled-components";

export const PosterContainer = styled.div`
  width: auto;
  height: 500px;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px 150px;
  position: fixed;
  top: 150px;
  left: 600px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PosterBackground = styled.div`
  width: 154px;
  height: 230px;
  background: ${({ $image }) => ($image ? `url(${$image})` : "white")};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  &.third-poster {
    grid-column: span 2;
    justify-self: center;
  }
`;

export const PosterPin = styled.img`
  position: absolute;
  top: -10px;
  left: -5px;
  z-index: 5;
`;
