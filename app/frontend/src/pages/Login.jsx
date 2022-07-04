import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { loginAction } from '../store/actions/login';
import invalidEmail from '../utils/invalidEmail';
import { saveToken } from '../utils/localStorageUtils';
import { login } from '../utils/user';

function Login({ posLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [logon, setLogon] = useState(false);
  const [fail, setFail] = useState(false);
  return (
    <div className="App">
      {redirect ? (<Redirect to="/signin" />) : null}
      {logon ? (<Redirect to="/" />) : null}
      <main className="App-main">
        <h2>Login</h2>

        <label htmlFor="input-email">
          {'Email: '}
          <input
            id="input-email"
            type="email"
            placeholder="email@email.com"
            onChange={({ target: { value } }) => { setEmail(value); setFail(false); }}
          />
        </label>

        <label htmlFor="input-pass">
          {'Password: '}
          <input
            id="input-pass"
            type="password"
            value={pass}
            placeholder="Password"
            onChange={({ target: { value } }) => { setPass(value); setFail(false); }}
          />
        </label>
        <hr width="80%" />
        <div>

          <button
            type="button"
            onClick={async () => {
              const user = await login({ email, pass });
              if (user) {
                saveToken(user);
                posLogin(user);
                setLogon(true);
              }
              setPass('');
              setFail(true);
            }}
            disabled={pass.length < 8 || invalidEmail(email)}
          >
            Login
          </button>
          {' '}
          <button type="button" onClick={() => setRedirect(true)}>Sign In</button>
        </div>
        <p>{fail ? 'email or password incorrect :(' : null}</p>
      </main>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  posLogin: (data) => dispatch(loginAction(data)),
});

export default connect(null, mapDispatchToProps)(Login);
