import styled from 'styled-components';
import { devices } from 'util/BreakPoints';

export const CNavbarContainer = styled.nav`
  min-height: 250px;
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

export const MenuContainer = styled.div<{ active: boolean }>`
  @media ${devices.mobile} {
    padding-top: 7px;
    display: ${({ active }) => (active ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    > a > button {
      margin: 5px 0;
    }
  }
`;

interface CMenuItemProps {
  last?: boolean;
  active: boolean;
}
export const CMenuItem = styled.button<CMenuItemProps>`
  margin-right: ${(props) => (props.last ? '0px' : '28px')};
  color: ${(props) => (props.active ? '#333' : '#aaa')};
  font-family: Helvetica;
  background-color: #ffffff00;
  border: 0;
  font-size: 15px;
  padding: 0;
  margin-bottom: 8px;
  &:hover {
    color: #555;
  }
  cursor: pointer;
`;

export const ToggleMobileMenuBtn = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
`;

export const MenuLabel = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-family: Helvetica;
`;
