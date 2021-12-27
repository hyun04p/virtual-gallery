import styled from 'styled-components';

export const CFooterContainer = styled.footer`
  margin-top: 50px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-family: Helvetica;
  font-size: 14px;
  > div:first-child {
    margin-top: 7px;
  }
`;

export const Logo = styled.img`
  width: 21px;
  height: 21px;
  margin: 0 15px;
`;
export const LogoContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;
