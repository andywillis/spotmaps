import { useRef } from 'preact/hooks';
// import { useRecoilValue } from 'recoil';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import { mainWidth } from '../../signals/signals';

import styles from './index.module.css';

/**
 * SpotmapContainer
 *
 * @param {object} props
 * @return {object} JSX
 */
function SpotmapContainer(props) {

  const { data: { hexData, numberOfSpots, ...details } } = props;

  const canvasRef = useRef(null);

  return (
    <section
      className={styles.spotmapContainer}
      style={{ width: mainWidth }}
    >
      <Details
        canvasRef={canvasRef}
        mainWidth={mainWidth}
        data={details}
      />
      <SpotmapCanvas
        mainWidth={mainWidth}
        numberOfSpots={numberOfSpots}
        hexData={hexData}
        canvasRef={canvasRef}
      />
    </section>
  );
}

export default SpotmapContainer;
