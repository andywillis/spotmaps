import DefaultLayout from '../../layouts/DefaultLayout';
import List from '../../components/List';

/**
 * Director
 *
 * @return {object} JSX
 */
function Director() {
  return (
    <DefaultLayout>
      <List type="director" />
    </DefaultLayout>
  );
}

export default Director;
