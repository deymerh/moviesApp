import styled from 'styled-components';

export const MovieId = styled.div`
    background: linear-gradient(180deg, #FFBE40 16.72%, rgba(255, 229, 102, 0) 100%);
    padding: 50px;
    height: 74vh;
    display: grid;
    grid-template-columns: 400px 1fr;
    padding: 35px 80px;
    gap: 1rem;
    .container__img{
      img{
          box-shadow: 0px 1px 0px 1px #00000014;
          max-width: 400px;
          object-fit: cover;
      }
    }
`; 