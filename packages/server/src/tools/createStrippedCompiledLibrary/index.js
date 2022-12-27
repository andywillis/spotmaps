import { writeFile } from 'fs/promises';

import compiledLibrary from '../../../data/library/compiledLibrary' assert { type: 'json' };

import rootname from '../../../rootname';

const strippedCompiledLibrary = compiledLibrary.map(({ id, hexData }) => {
  return { id, hexData };
});

const filePath = `${rootname}/data/library/strippedCompiledLibrary.json`;

try {
  await writeFile(filePath, JSON.stringify(strippedCompiledLibrary), 'utf8');
  console.log('File saved');
} catch (err) {
  console.log(err);
}
