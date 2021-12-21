import styled from 'styled-components';
import { devices } from 'util/BreakPoints';

export const CNavbarContainer = styled.nav`
  height: 250px;
  padding: 0 4%;
  box-sizing: border-box;
  display: flex;
  @media ${devices.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
  @media ${devices.labtop} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    align-items: center;
  }
`;

export const CLogoText = styled.h1`
  font-family: Helvetica;
  font-size: 52px;
  font-weight: bold;
  margin: 20px 0;
`;

interface CMenuItemProps {
  last?: boolean;
  active: boolean;
}
export const CMenuItem = styled.button<CMenuItemProps>`
  margin-right: ${(props) => (props.last ? '0px' : '40px')};
  color: ${(props) => (props.active ? '#333' : '#aaa')};
  font-family: Helvetica;
  background-color: #ffffff00;
  border: 0;
  font-size: 18px;
  padding: 0;
  &:hover {
    color: #555;
  }
  cursor: pointer;
`;
