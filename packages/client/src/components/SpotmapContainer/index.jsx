import { useRef } from 'preact/hooks';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import { mainWidth } from '../../store/signals';

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
      style={{ width: mainWidth.value }}
    >
      <Details
        canvasRef={canvasRef}
        mainWidth={mainWidth.value}
        data={details}
      />
      <SpotmapCanvas
        mainWidth={mainWidth.value}
        numberOfSpots={numberOfSpots}
        hexData={hexData}
        canvasRef={canvasRef}
      />
    </section>
  );
}

export default SpotmapContainer;
