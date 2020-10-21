import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 60vh;

  margin-top: -6px;

  background: var(--icon);

  @media(min-width: 720px){
    height: 40vh;
  }

  
`;

export const Title = styled.div`
  margin: 50px auto 40px;

  font-size: 5vw;

  @media(min-width: 856px){
    font-size: 30px;
  }
  @media(min-width: 720px){
    font-size: 30px;
  }
  @media(min-width: 447spx){
    font-size: 20px;
  }
`;

export const InputArea = styled.div`
  @media(min-width: 720px) {
    display: flex;
    align-items: center;

    margin: 0 auto;
  }
`;

export const Input = styled.div`
  cursor: pointer;

  padding: 15px 60px;
  border-radius: 20px;
  background: var(--white);

  width: 300px;
  margin: 0 auto;

  span {
    color: var(--default);
    margin-left: -40px;
  }

  @media(min-width: 720px) {
    width: 20vw;
  }
`;

export const NameInput = styled.div`
 
`;
export const EmailInput = styled.div`
  margin-top: 3%;

  @media(min-width: 720px) {
    margin-top: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const InputButton = styled.div`
  margin: 0 auto;
  background: var(--primary);
  border-radius: 20px;
  padding: 8px;
  width: 110px;

  margin-top: 15px;

  @media(min-width: 720px) {
    margin-top: 0;
  }

  cursor: pointer;

  button {
    cursor: pointer;
    font-size: 20px;
    margin-left: 18px;
  }
`;
