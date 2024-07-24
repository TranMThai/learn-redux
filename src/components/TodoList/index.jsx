import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { PRIORITY_MEDIUM } from '../../constants/Priority';
import { filtedTodoList } from '../../redux/selectors';
import Todo from '../Todo';
import todoListSlice from './TodoListSlice';

export default function TodoList() {
  const dispatch = useDispatch()
  const [todoName, setTodoName] = useState('')
  const [todoPriority, setTodoPriority] = useState(PRIORITY_MEDIUM)
  const todoList = useSelector(filtedTodoList)

  const handleAdd = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: uuidV4(),
      name: todoName,
      completed: false,
      priority: todoPriority
    }))
    setTodoName(''),
      setTodoPriority(PRIORITY_MEDIUM)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map(todo =>
            <Todo key={todo.id} todo={todo} />
          )
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={e => setTodoName(e.target.value)} />
          <Select defaultValue="Medium" value={todoPriority} onChange={value => setTodoPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
