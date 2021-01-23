import styled from 'styled-components';

export const CardItem = styled.div`
  position: relative;
  width: 250px;
  text-align: center;
  :hover > .buttons{
      cursor: pointer;
      opacity: 1;
      visibility: visible;
      transition: all 500ms ease-out;
    }
  .image figure{
    margin: 0px;
  }
  .image figure img{
      object-fit: cover;
      width: fit-content;
      height: fit-content;
      max-width: 250px;
      max-height: 300px;
  }
  .buttons{
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
    visibility: hidden;
    h6{
      color: white;
      font-weight: 800;
      font-size: 20px;
      line-height: 20px;
      max-height: 1em;
      text-overflow: ellipsis;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      margin: 0px;
    }
    button{
      padding: 5px;
      border: 1px solid white;
      background-color: transparent;
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 12px;
      outline: none;
    }
    button:hover{
      cursor: pointer;
      background-color: #fce64d;
      border: 1px solid #fce64d;
      color: black;
    }
  }
`;