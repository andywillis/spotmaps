import { computed } from '@preact/signals';

import { library, pageType, pageValue } from './signals';

export const typeSelector = computed(() => {
  const typeList = library.value.flatMap(obj => obj[pageType.value]);
  const dedupedList = [ ...new Set(typeList) ];
  dedupedList.sort();
  return dedupedList;
});

export const spotmapsSelector = computed(() => {

  if (pageType.value && pageValue.value) {

    return library.value.filter(spotmap => {
      if (pageType.value === 'year') {
        return spotmap.year === +pageValue.value;
      }
      return spotmap[pageType.value].includes(pageValue.value);
    });

  }

  return library.value;

});
