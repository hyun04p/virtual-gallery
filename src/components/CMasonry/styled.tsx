import styled from 'styled-components';
import { devices } from 'util/BreakPoints';

export const CMasonryContainer = styled.div`
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */

  @media ${devices.mobile} {
    flex-direction: column;
  }

  @media ${devices.nonmobile} {
  }
`;

export const CMasonryItemContainer = styled.div<{ type: string }>`
  ${(props) =>
    props.type !== 'video'
      ? `&:hover {
    filter: brightness(45%);
  }`
      : ''}

  cursor: pointer;
`;

export const CMasonryItemVideo = styled.div<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  > iframe {
    height: 100%;
    width: 100%;
  }
`;

export const CMaonryItemImg = styled.img`
  @media ${devices.mobile} {
    width: 100%;
  }

  @media ${devices.nonmobile} {
    height: 100%;
  }
`;

export const CItemModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
export const CModalHeader = styled.div``;
export const CModalCloseBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  color: #aaa;
  &:hover {
    color: #333;
  }
  font-family: Helvetica;
  cursor: pointer;
`;

export const CItemModalImg = styled.img`
  width: auto; /* set to anything and aspect ratio is maintained - also corrects glitch in Internet Explorer */
  height: auto; /* set to anything and aspect ratio is maintained */
  max-height: 80%;
  max-width: 100%;
  object-fit: contain;
`;

interface CMasonryRowProps {
  height: number;
  spacing: number;
  last?: boolean;
}
export const CMasonryRow = styled.div`
  height: ${(props: CMasonryRowProps) => props.height}px;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.spacing}px;
  ${(props) => {
    const spacing = props.spacing;
    if (props.last) {
      return `
        justify-content: flex-start;
        > *:not(:last-child) {
          margin-right: ${spacing}px;
        }
      `;
    }
  }}
`;
