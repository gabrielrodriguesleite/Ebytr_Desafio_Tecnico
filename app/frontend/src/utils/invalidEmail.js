export default (email) => email.split('@').length !== 2
  || email.split('@')[1].split('.').length !== 2
  // || email[0] === '@'
  // || email[email.length - 1] === '.'
  || email.split('.')[email.split('.').length - 1].length < 2
  || email.split('@')[1].split('.')[0].length < 2
  || email.split('@')[0].length < 2;
