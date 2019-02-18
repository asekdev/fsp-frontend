import React from "react";
import NotFoundImage from "../../assets/images/404-error.png";
import { Container, Message, Icon, Grid, Image } from "semantic-ui-react";
import "./index.css";

const PathNotFound = () => {
  return (
    <Container className="not-found-content">
      <Grid>
        <Grid.Column width={16} widescreen={16}>
          <Image className="not-found-image" src={NotFoundImage} centered />
        </Grid.Column>
      </Grid>
      <Message icon>
        <Icon name="compass outline" />
        <Message.Content>
          <Message.Header>Yikes, page not found!</Message.Header>
          Looks like you tried accessing a page that doesn't exist.
        </Message.Content>
      </Message>
    </Container>
  );
};

export { PathNotFound };
