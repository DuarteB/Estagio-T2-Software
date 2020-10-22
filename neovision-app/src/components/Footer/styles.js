import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50%;

  background: #321b5c;
`;
export const Text = styled.div`
  margin: 40px auto;
  font-size: 80%;

  @media(min-width: 450px) {
    margin: 40px auto;
    font-size: 120%;
  }
`;
