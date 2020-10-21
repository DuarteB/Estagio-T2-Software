import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  color: var(--default);
  
`;
export const ContentText = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 50vw;

  font-size: max(1.6vw, 10px);

  margin-left: 7%;
  margin-top: 8%;

  p {
    color: var(--default);
  }
`;
export const Title = styled.div`
  color: var(--icon);
  font-weight: bold;
  font-size: 3.9vw;
  margin-bottom: 4%;
`;
export const Image = styled.div`
  img {
    width: 100%;
    margin-top: -18%;
  }
`;
export const Text = styled.div`
  
`;
export const List = styled.div`
  position: absolute;
  z-index: 3;

  margin-top: -25%;
  a {
    display: flex;
    align-items: center;

    margin-left: 5vw;

    margin-top: 4%;
  }
  img{
    width: 10%;
    height: 20%;

    @media(min-width: 720px) {
      width: 12%;
      height: 24%;
    }

    margin-bottom: 20%;
  }
  p {
    margin-top: -37%;
    font-size: 2.9vw;
    margin-left: 2vw;
  }
`;
