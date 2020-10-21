import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 1280px;
`;
export const Logo = styled.div`
  width: 21vw;
  height: 21vh;

  img {
    margin-left: 30%;
    margin-top: 24px;

    width: 100%;
    height: 52%;
  }

  @media(min-width: 720px) {
    width: 20vw;
    height: 22vh;

    display: flex;

    img {
      margin: auto auto;

      width: 90%;
      height: 85%;
    }

    border-radius: 0px 0px 23px 23px;
    
    box-shadow: #4f4f4f 0 1px 1px 1px;

    margin-left: 60px;
    margin-top: -1px;

    background: var(--primary);
  }
`;

export const Itens = styled.div`
  display: flex;
  align-items: center;

  margin-left: 16%;


  font-size: 2.5vw;
  color: var(--white);

  @media(min-width: 480px){
    margin-left: 29%;

    font-size: 1.8vw;
  }
  
  @media(min-width: 720px) {
    margin-left: 35%;

    font-size: 1.8vw;
  }
`;
export const Functions = styled.div`
 
`;
export const Contact = styled.div`
  margin-left: 6%;
`;
export const FacebookIcon = styled.div`
  a img {
    height: 20px;
    width: 20px;
  }

  @media(min-width: 720px) {
    a img {
    height: 35px;
    width: 35px;
  }
  }

  margin-left: 6%;
`;
