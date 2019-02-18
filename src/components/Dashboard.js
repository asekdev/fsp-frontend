import React, { Component } from "react";
import { Container, Header, Grid, Button, Icon } from "semantic-ui-react";
import {
  EmptyMessage,
  ProjectCard,
  CreateProjectModal
} from "./common";

const data = {
  title: "Social App",
  subject: "Tech",
  description:
    "Project dedicated to tech aroasdfasdfasdf asdfasdf asdf asdfas dfasund the world "
};

const data2 = {
  title: "Social App",
  subject: "Tech",
  description: "Project dedicated"
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      modalOpen: false
    };
  }

  hideMessage = () => {
    console.log("hitting here");
    this.setState({ visible: !this.state.visible });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <div style={{height: '100%'}}>
        <Container>
          {/* <EmptyMessage
          visible={this.state.visible}
          removeMessage={this.hideMessage}
        /> */}
          <Grid columns={2} style={{ marginTop: 30 }}>
            <Grid.Column textAlign="left">
              <Header
                as="h1"
                color="grey"
                content="Dashboard"
                icon="dashboard"
              />
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Button color="blue" size="small" onClick={this.toggleModal}>
                <Icon name="plus" />
                Create Project
              </Button>
            </Grid.Column>
          </Grid>
          <hr color="#DCDCDC" />
          <Header as="h3" color="grey" content="Your Projects" icon="folder" />

          <div>
            <Grid>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <ProjectCard project_data={data} />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <ProjectCard project_data={data} />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <ProjectCard project_data={data} />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <ProjectCard project_data={data} />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <ProjectCard project_data={data} />
              </Grid.Column>
              
            </Grid>
          </div>     
        </Container>
       
        <Container fluid>
        <CreateProjectModal
            size="small"
            open={modalOpen}
            onDismiss={this.toggleModal}
          />
      </Container>
      </div>
    );
  }
}

export default Dashboard;
