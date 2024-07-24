import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatus } from '../../redux/actions';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ todo }) {
  const dispatch = useDispatch()
  const { id, name, priority, completed } = todo

  const toggleCheckbox = () => {
    dispatch(setStatus(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
