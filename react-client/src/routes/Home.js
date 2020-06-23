import React from "react";
import { Card, Input, Button, Form, Divider, List, Typography } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo, deleteToDo }) => {
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    form.resetFields()
    addToDo(values.todo)
    console.log(values)
  }
  return (
    <Card title="To Do Card"
      style={{ 
        width: 300,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="todo">
          <Input placeholder="Write Things To Do ..."></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">Submit</Button>
        </Form.Item>
        <Divider orientation="left">To Do List</Divider>
      </Form>
      <List 
        bordered
        dataSource={toDos}
        renderItem={item=>(
            <List.Item id={item.id}>
              <Typography.Text >{item.text}</Typography.Text>
              <Button onClick={()=>deleteToDo(item.id)} type="ghost">DEL</Button>
            </List.Item>
        )}/>
    </Card>
  )
}
// Connect Process
const mapStateToProps = (state, __) => {
  return { toDos: state };
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);