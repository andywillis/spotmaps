import { batch, effect, useSignal } from '@preact/signals';
import { useRef, useEffect } from 'preact/hooks';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

// import {
//   useRecoilValue,
//   useRecoilState,
//   useRecoilValueLoadable,
//   useSetRecoilState
// } from 'recoil';

import Spinner from '../Spinner';
import SpotmapContainer from '../SpotmapContainer';
import PageNumbers from '../PageNumbers';

import api from '../../signals/api';

import useWindowResize from '../../hooks/useWindowResize';

import {
  mainWidth,
  page,
  pageValue,
  pageType
} from '../../signals/signals';

import { spotmapsSelector } from '../../signals/selectors';
// import { spotmapsDataQuery } from '../../store/queries';

import styles from './index.module.css';

/**
 * SpotmapList
 *
 * @return {object} JSX
 */
function SpotmapList() {

  const spotmapsData = useSignal([]);

  const windowSize = useWindowResize();
  const mainRef = useRef(null);

  const { type, value } = useParams();

  effect(() => {
    batch(() => {
      pageType.value = type;
      pageValue.value = value;
      page.value = 1;
    });
  });

  effect(() => {
    async function getSpotmaps() {
      if (spotmapsSelector.value.length) {
        const data = await api.getSpotmaps(spotmapsSelector.value);
        console.log(data, spotmapsSelector.value);
        spotmapsData.value = data;
      }
    }
    getSpotmaps();
  });

  // const { state, contents } = useRecoilValueLoadable(spotmapsDataQuery(spotmaps));

  useEffect(() => {
    const bound = mainRef.current.getBoundingClientRect();
    mainWidth.value = Math.floor(bound.width);
  }, [ windowSize.width ]);

  const spotmapContainerStyle = classNames({
    [styles.spotmapList]: true,
    [styles.visible]: true
    // [styles.fadeOutContainer]: state === 'loading' && mainWidth > 0,
    // [styles.fadeInContainer]: state === 'hasValue' && mainWidth > 0
  });

  return (
    <>
      <PageNumbers />
      <div ref={mainRef} className={spotmapContainerStyle}>
        {spotmapsData.value.length
          ? (
            spotmapsData.value.map(data => {
              return (
                <SpotmapContainer
                  key={data.id}
                  data={data}
                />
              );
            })
          ) : <Spinner />}
      </div>
    </>
  );

}

export default SpotmapList;
