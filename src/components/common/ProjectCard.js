import React from "react";
import { Button, Card, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProjectCard = props => {
  const { project_data } = props;

  return (
    <Card style={{ height: "100%" }} fluid>
      <Card.Content>
        <Label style={{ float: "right" }}>
          <Icon name="calendar" /> 23rd Jan
        </Label>
        <Card.Header>{project_data.title}</Card.Header>
        <Card.Meta>{project_data.subject}</Card.Meta>
        <Card.Description>{project_data.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            animated="fade"
            color="instagram"
            as={Link}
            to={`/project/${project_data.id}`}
          >
            <Button.Content visible>Go to project</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export { ProjectCard };
