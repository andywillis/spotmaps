import { signal, computed } from '@preact/signals';

export const library = signal([]);

export const filteredLibrary = signal(library);

export const numberOfPages = signal(0);

export const page = signal(1);

export const limit = signal(1);

export const mainWidth = signal(0);

export const listType = signal('');

export const getListByType = computed(() => {
  return library.value.flatMap(obj => obj[listType.value]);
});
