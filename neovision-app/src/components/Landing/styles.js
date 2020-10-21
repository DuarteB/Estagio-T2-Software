import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(var(--primary), #35145d);
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  
  display: flex;
  align-items: center;

  img {
    margin-top: 30px;
    margin-left: 20px;
    
    height: 40%;
    width: 47%;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 2.1vw;

  margin: 0 auto;

  h2 {
    font-size: 4.2vw;
  }
`;
