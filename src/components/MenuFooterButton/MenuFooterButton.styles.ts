import styled, { css } from "styled-components";
import { FooterButtonType } from './MenuFooterButton';


const COLOR = {
    blue: css`
      color: #FFFFFF;
      background-color: #334C76;
    `,
    grey: css`
      color: #334C76;
      background-color: #D1D1D1;
    `,
  };

export const ButtonContainer = styled.div<FooterButtonType>`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    ${(props) => props.color && COLOR[props.color]};
`;

export const ButtonImg = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
`;

export const ButtonText = styled.p`
    font-weight: 400;
`;