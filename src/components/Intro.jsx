import { Form } from 'react-router-dom';

// Library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import illustration from '../assets/illustration.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="What is your name?"
            required
          />
          <input type="hidden" name="_action" value="newUser" />
          <button className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};

export default Intro;
