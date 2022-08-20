import styled from "styled-components/native";

export const SectionWrapper = styled.View<{ mb?: number }>`
  width: 100%;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "30px")};
  padding: 0;
  min-height: 50px;
`;
