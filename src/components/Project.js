import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  Icon
} from "semantic-ui-react";
import { ProjectColumn } from "./common";
import AddTaskModal from "../components/AddTaskModal";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskModalVisible: false
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    console.log("id for this page =", id);
  }

  toggleTaskModal = () => {
    this.setState({ taskModalVisible: !this.state.taskModalVisible });
  };

  render() {
    const { taskModalVisible } = this.state;

    return (
      <Container style={{ marginTop: 50 }}>
        <Header as="h1" content="Social App" />
        <Button
          content="Add Task"
          icon="plus"
          color="blue"
          inverted
          onClick={this.toggleTaskModal}
        />
        <Grid
          columns="equal"
          style={{ paddingTop: "30px", height: "100%" }}
          stretched
        >
          <ProjectColumn title="To Do" colour="red" />
          <ProjectColumn title="In Progress" colour="yellow" />
          <ProjectColumn title="Done" colour="green" />
        </Grid>
        <AddTaskModal
          size="small"
          open={taskModalVisible}
          onDismiss={this.toggleTaskModal}
        />
      </Container>
    );
  }
}

export default Project;
