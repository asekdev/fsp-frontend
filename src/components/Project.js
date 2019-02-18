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

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    console.log("id for this page =", id);
  }

  render() {
    return (
      <Container style={{ marginTop: 50 }}>
        <Header as="h1" content="Social App" />
        <Button content="Add Task" icon="plus" color="blue" inverted />

        <Grid columns="equal" style={{ paddingTop: "30px", height: '100%' }} stretched >
          <ProjectColumn title="To Do" colour="red" />
          <ProjectColumn title="In Progress" colour="yellow" />
          <ProjectColumn title="Done" colour="green" />
        </Grid>
      </Container>
    );
  }
}

export default Project;
