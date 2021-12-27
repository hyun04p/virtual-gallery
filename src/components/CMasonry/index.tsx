import CLogo from 'components/CNavbarLayout/CLogo';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectAllImagesByCategories } from 'store/webContent';
import CMasonryItem from './CMasonryItem';
import {
  CItemContainer,
  CItemModal,
  CItemModalImg,
  CMasonryContainer,
  CMasonryRow,
  CModalCloseBtn,
  CModalControllerContainer,
  CModalHeader,
} from './styled';

interface props {
  spacing?: number;
  ratio?: number;
}

const CMasonry: React.FC<props> = (props) => {
  const [modalData, setModalData] = useState('');
  const [modalIdx, setModalIdx] = useState(0);
  const image_by_category = useSelector(selectAllImagesByCategories());
  console.log('h', image_by_category);

  const getH = (w1: number, h1: number, w2: number, h2: number, W: number) => {
    if (w2 === 0 && h2 === 0) return (w1 * W) / h1;
    return ((h1 * W) / w1) * (1 / (1 + (w2 * h1) / (h2 * w1)));
  };
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const VW = vw;
  vw = vw * 0.92;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  let heightList: { height: number; elements: {}[] }[] = [];
  const RATIO = props.ratio || 0.5;
  const SPACING = props.spacing || 7; // default spacing 7px
  const MAX_HEIGHT = RATIO * vh;

  const children: any[] = React.Children.toArray(props.children);
  if (children.length === 0) return <CMasonryContainer></CMasonryContainer>;

  heightList.push({
    height: getH(children[0].props.height, children[0].props.width, 0, 0, vw),
    elements: [children[0]],
  });

  for (let i = 1; i < children.length; i++) {
    let { height, width } = children[i].props;
    const currHeight = heightList[heightList.length - 1].height;
    let newHeight = getH(width, height, vw, currHeight, vw);

    if (newHeight <= MAX_HEIGHT) {
      if (currHeight - MAX_HEIGHT > MAX_HEIGHT - newHeight) {
        heightList[heightList.length - 1].height = newHeight;
        heightList[heightList.length - 1].elements.push(children[i]);
      } else {
        // add spacing
        heightList[heightList.length - 1].height = getH(
          vw,
          heightList[heightList.length - 1].height,
          SPACING * heightList[heightList.length - 1].elements.length - 1,
          heightList[heightList.length - 1].height,
          vw
        );

        heightList.push({
          height: getH(height, width, 0, 0, vw),
          elements: [children[i]],
        });
      }
    } else {
      heightList[heightList.length - 1].height = newHeight;
      heightList[heightList.length - 1].elements.push(children[i]);
    }
  }

  // Calculate height of last row
  let avgHeight = 0;
  let isLastRowComplete = false;
  heightList.forEach(({ height }, i) => {
    if (i !== heightList.length - 1) avgHeight += height;
  });
  avgHeight = avgHeight / (heightList.length - 1);

  if (avgHeight < heightList[heightList.length - 1].height) {
    heightList[heightList.length - 1].height = avgHeight;
  } else {
    isLastRowComplete = true;
    heightList[heightList.length - 1].height = getH(
      vw,
      heightList[heightList.length - 1].height,
      SPACING * heightList[heightList.length - 1].elements.length - 1,
      heightList[heightList.length - 1].height,
      vw
    );
  }

  // Modal ==============

  const modalStyle = {
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      outline: 'none',
      padding: '4%',
    },
  };

  const openModal = (type: string, category: string, index: number) => {
    setModalData(category);
    setModalIdx(index);
  };

  const closeModal = () => {
    setModalData('');
  };

  const shiftModalIndexBy = (by: number) => () => {
    let idx = modalIdx;
    for (
      let i = idx + by;
      i >= 0 && i < image_by_category[modalData].length;
      i += by
    ) {
      if (image_by_category[modalData][i].type === 'image') {
        idx = i;
        break;
      }
    }
    setModalIdx(idx);
  };

  return (
    <CMasonryContainer>
      {VW < 801
        ? (() => {
            return React.Children.map(props.children, (child: any) => {
              return React.cloneElement(child, {
                openModal: () => {},
              });
            });
          })()
        : heightList.map(({ height, elements }, idx) => (
            <CMasonryRow
              height={height}
              spacing={SPACING}
              last={!isLastRowComplete && idx === heightList.length - 1}
              key={`CMRow-${idx}`}
            >
              {(() => {
                const ret = React.Children.map(elements, (child: any) => {
                  return React.cloneElement(child, {
                    openModal: openModal,
                    realHeight: height,
                  });
                });
                return ret;
              })()}
            </CMasonryRow>
          ))}
      <ReactModal
        style={modalStyle}
        isOpen={modalData !== ''}
        appElement={(() => {
          let ret = document.getElementById('app');
          if (ret !== null) return ret;
          return undefined;
        })()}
      >
        <CItemModal>
          <CModalHeader>
            <CModalCloseBtn onClick={closeModal}>CLOSE</CModalCloseBtn>
            <CLogo link={false} />
          </CModalHeader>
          <CItemContainer>
            <CItemModalImg
              src={
                modalData !== ''
                  ? image_by_category[modalData][modalIdx].data
                  : ''
              }
            />
          </CItemContainer>

          <CModalControllerContainer>
            <div onClick={shiftModalIndexBy(-1)}>{`prev`}</div>
            <div>
              {modalData !== ''
                ? `${modalIdx + 1}/${image_by_category[modalData].length}`
                : ''}
            </div>
            <div onClick={shiftModalIndexBy(1)}>{`next`}</div>
          </CModalControllerContainer>
        </CItemModal>
      </ReactModal>
    </CMasonryContainer>
  );
};

export { CMasonryItem };
export default CMasonry;
