import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li>{itemProp.title}</li>;
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
};
