import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { loginAction } from '../store/actions/login';
import invalidEmail from '../utils/invalidEmail';
import { create } from '../utils/user';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [redirect, setRedirect] = useState(false);
  return (
    <div className="App">
      {redirect ? <Redirect to="/login" /> : null}
      <main className="App-main">
        <h2>Wellcome</h2>
        <label htmlFor="input-name">
          {'Name: '}
          <input
            id="input-name"
            type="text"
            placeholder="User Name"
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>

        <label htmlFor="input-email">
          {'Email: '}
          <input
            id="input-email"
            type="email"
            placeholder="email@email.com"
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>

        <label htmlFor="input-pass">
          {'Password: '}
          <input
            id="input-pass"
            type="password"
            placeholder="Password"
            onChange={({ target: { value } }) => setPass(value)}
          />
        </label>
        <hr width="80%" />
        <div>

          <button
            type="button"
            onClick={() => setRedirect(true)}
          >
            Back
          </button>
          {' '}
          <button
            type="button"
            onClick={async () => {
              await create({ name, email, pass });
              setRedirect(true);
            }}
            disabled={name.length < 3 || pass.length < 8 || invalidEmail(email)}
          >
            Sign In
          </button>
        </div>

        <p>{'You\'r new here?'}</p>

      </main>
    </div>
  );
}

SignIn.propTypes = {
  login: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginAction(data)),
});

export default connect(null, mapDispatchToProps)(SignIn);
