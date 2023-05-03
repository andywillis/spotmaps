import { batch } from '@preact/signals';

import {
  library,
  page,
  limit,
  spotmapsData,
  // filteredLibrary,
  numberOfPages
} from './signals';

/**
 * getLibrary
 *
 */
async function getLibrary() {
  const response = await fetch('/library');
  const data = await response.json();
  batch(() => {
    library.value = data;
    // filteredLibrary.value = data;
    numberOfPages.value = data.length;
  });
}

async function getSpotmaps(filteredLibrary) {

  const sliced = filteredLibrary.slice((page.value - 1) * limit.value, (page.value * limit.value));

  const promises = sliced.map(async spotmap => {
    try {
      const response = await fetch(`/spotmap/${spotmap.id}`);
      if (response.ok) return response.json();
      throw Error('API request not fulfilled');
    } catch (err) {
      console.log(err);
    }
  });

  const spotmapsData = await Promise.all(promises);

  return spotmapsData;

}

export default { getLibrary, getSpotmaps };
