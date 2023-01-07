import { filteredLibrary } from './signals';

export default async function spotmapsQuery() {

  const promises = filteredLibrary.value.map(async spotmap => {
    try {
      const response = await fetch(`/spotmap/${spotmap.id}`);
      if (response.ok) return response.json();
      throw Error('API request not fulfilled');
    } catch (err) {
      console.log(err);
    }
  });

  const spotmaps = await Promise.all(promises);
  return spotmaps;

}
