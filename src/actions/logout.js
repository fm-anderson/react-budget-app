// rrd imports
import { redirect } from 'react-router-dom';

// helpers
import { deleteItem } from '../helpers';

export async function logoutAction() {
  deleteItem({
    key: 'userName',
  });
  return redirect('/');
}
