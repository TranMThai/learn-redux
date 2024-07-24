import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './FilterSlice'

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState({
    search: '',
    status: 'All',
    priority: []
  })

  const handleChangeFilter = (e) => {
    const { name, value } = e.target
    setFilter({
      ...filter,
      [name]: value
    })
  }
  const handleSelect = (e) => {
    setFilter({
      ...filter,
      priority: e
    })
  }

  useEffect(() => {
    dispatch(filterSlice.actions.search(filter))
  }, [filter])

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' name='search' value={filter.search} onChange={handleChangeFilter} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group name='status' onChange={handleChangeFilter} defaultValue={"All"}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handleSelect}
        >
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
      </Col>
    </Row>
  );
}
