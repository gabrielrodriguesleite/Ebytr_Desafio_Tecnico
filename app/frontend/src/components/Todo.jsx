import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { todoDel, todoEdt } from '../store/actions/todo';

const STATUS = 'Pendente Andamento Pronto'.split(' ');

function Todo(props) {
  const { todo, delTodo, edtTodo } = props;
  return (
    <div className="TODO">
      <h3>{`Title: ${todo.title}`}</h3>
      <p>
        <b>Status:</b>
        {' '}
        { STATUS[todo.status] }
      </p>
      <button type="button" onClick={() => delTodo(todo)}>Delete</button>
      <button type="button" onClick={() => edtTodo(todo)}>Edit</button>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.objectOf(string),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  delTodo: (todo) => dispatch(todoDel(todo)),
  edtTodo: (todo) => dispatch(todoEdt(todo)),
});

export default connect(null, mapDispatchToProps)(Todo);
