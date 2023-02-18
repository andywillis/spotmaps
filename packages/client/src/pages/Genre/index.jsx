import DefaultLayout from '../../layouts/DefaultLayout';
import List from '../../components/List';

/**
 * Genre
 *
 * @return {object} JSX
 */
function Genre() {
  return (
    <DefaultLayout>
      <List type="genre" />
    </DefaultLayout>
  );
}

export default Genre;
