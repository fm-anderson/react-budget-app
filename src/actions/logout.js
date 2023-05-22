// rrd imports
import { redirect } from 'react-router-dom';

// helpers
import { deleteItem } from '../helpers';

//Library
import { toast } from 'react-toastify';

export async function logoutAction() {
  deleteItem({
    key: 'userName',
  });
  deleteItem({
    key: 'budgets',
  });
  deleteItem({
    key: 'expenses',
  });
  toast.success("You've deleted your account!");
  return redirect('/');
}
