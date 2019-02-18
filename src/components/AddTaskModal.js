import React, { Component } from "react";
import { Button, Modal, Form, Icon, Select } from "semantic-ui-react";

const selectOptions = [
  { key: "t", text: "To Do", value: "to_do" },
  { key: "d", text: "In Progress", value: "in_progress" },
  { key: "t", text: "Done", value: "done" }
];

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size, open, onDismiss } = this.props;

    return (
      <Modal size={size} dimmer open={open} onClose={onDismiss} centered={true}>
        <Modal.Header>
          <Icon name="columns" />
          Add Task
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input label="Summary" placeholder="Task summary" />
              <Form.Field
                control={Select}
                options={selectOptions}
                label={{
                  children: "Status",
                  htmlFor: "form-select-control-gender"
                }}
                placeholder="Status"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.TextArea
                label="Description"
                placeholder="Give your task a short description"
                style={{ minHeight: "75px", maxHeight: "75px" }}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onDismiss}>Cancel</Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="left"
            content="Add Task"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddTaskModal;
