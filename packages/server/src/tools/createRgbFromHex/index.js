import { writeFile } from 'fs/promises';
import quantize from 'quantize';

import library from '../../../data/library/library' assert { type: 'json' };
import compiledLibrary from '../../../data/library/compiledLibrary' assert { type: 'json' };

import rootname from '../../../rootname';

const hexData= compiledLibrary.map(({ title, hexData }) => {
  return { title, hexData };
});

const rgbLibrary = hexData.map(obj => {

  const { title, hexData } = obj;

  const rgbFull = [];

  for (let i = 0; i < hexData.length; i += 6) {

    const r = parseInt(hexData.slice(i, i + 2), 16);
    const g = parseInt(hexData.slice(i + 2, i + 4), 16);
    const b = parseInt(hexData.slice(i + 4, i + 6), 16);
  
    rgbFull.push([ r, g, b ]);
  
  }

  return { title, rgbData: quantize(rgbFull, 4).palette() };

});

const libraryRgb = library.map(obj => {
  const found = rgbLibrary.find(rgb => rgb.title === obj.title);
  if (found) return { ...obj, rgbData: found.rgbData };
  return obj;
});

const compiledLibraryRgb = compiledLibrary.map(obj => {
  const found = rgbLibrary.find(rgb => rgb.title === obj.title);
  if (found) return { ...obj, rgbData: found.rgbData };
  return obj;
});


const filePathLibraryRgb = `${rootname}/data/library/libraryRgb.json`;
const filePathcompiledLibraryRgb = `${rootname}/data/library/compiledLibraryRgb.json`;

try {
  await writeFile(filePathLibraryRgb, JSON.stringify(libraryRgb), 'utf8');
  await writeFile(filePathcompiledLibraryRgb, JSON.stringify(compiledLibraryRgb), 'utf8');
  console.log('Files saved');
} catch (err) {
  console.log(err);
}
