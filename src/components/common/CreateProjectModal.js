import React from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

const CreateProjectModal = props => {
  const { size, open, onDismiss } = props;

  return (
    <Modal
      size={size}
      dimmer
      open={open}
      onClose={onDismiss}
      centered={true}
    >
      <Modal.Header>
        <Icon name="columns" />
        Create Project</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Project Name" placeholder="Project Name" />
            <Form.Input label="Category" placeholder="Category" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              label="Description"
              placeholder="Give your project a short description"
              style={{ minHeight: "75px", maxHeight: "75px" }}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={onDismiss}>
          No
        </Button>
        <Button positive icon="checkmark" labelPosition="right" content="Yes" />
      </Modal.Actions>
    </Modal>
  );
};

export { CreateProjectModal };
