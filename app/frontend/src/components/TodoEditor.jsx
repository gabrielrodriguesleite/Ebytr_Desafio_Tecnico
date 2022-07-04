import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { todoAdd, todoUpd } from '../store/actions/todo';

function TodoEditor(props) {
  const { add, todo, updTodo } = props;
  const [title, setTitle] = useState(() => (todo ? todo.title : ''));
  const [status, setStatus] = useState(() => (todo ? todo.status : '0'));
  const addTodo = () => { add({ title, status }); setTitle(''); setStatus('0'); };
  return (
    <div className="TODO-Editor">
      <input placeholder="Tarefa" value={title} onChange={({ target: { value } }) => setTitle(value)} />
      <form>
        <label htmlFor="status">
          Status:
          {' '}
          <select name="gender" value={status} onChange={({ target: { value } }) => setStatus(value)}>
            <option defaultValue value="0">Pendente</option>
            <option value="1">Andamento</option>
            <option value="2">Pronto</option>
          </select>
        </label>
        {!todo
          ? <button type="button" onClick={addTodo} disabled={title.length < 3}>+</button>
          : (
            <button
              type="button"
              onClick={() => updTodo({ title, status, id: todo.id })}
              disabled={title.length < 3}
            >
              Save

            </button>
          )}
      </form>
    </div>
  );
}

TodoEditor.propTypes = {
  add: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  add: (todo) => dispatch(todoAdd(todo)),
  updTodo: (todo) => dispatch(todoUpd(todo)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
