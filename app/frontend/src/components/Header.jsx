import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clrToken, getToken } from '../utils/localStorageUtils';
import { validate } from '../utils/user';

function Header() {
  // valida o token ou vai pro email
  const [redirect, setRedirect] = useState(false);
  const token = getToken();
  if (!token || !validate(token.token, token.email)) { return <Redirect to="login" />; }
  if (redirect) { return <Redirect to="login" />; }
  return (
    <p>
      {`Name: ${token.name}  |  Email: ${token.email} | `}
      <button type="button" onClick={() => { clrToken(); setRedirect(true); }}>Log out</button>
    </p>

  );
}

Header.propTypes = {
  token: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  token: state.user.email,
});

export default connect(mapStateToProps)(Header);
