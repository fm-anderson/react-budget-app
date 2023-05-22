import { Form, NavLink } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid';
import logomark from '../assets/logomark.svg';

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logomark} alt="" height={30} />
        <span>BudgetApp</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(e) => {
            if (!confirm('Delete user and all data?')) {
              e.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
