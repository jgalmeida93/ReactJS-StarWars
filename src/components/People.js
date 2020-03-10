import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function People({ data }) {
  // data que é passada pelo App é recebida aqui
  return (
    <>
      <h1 className="header">Personagens</h1>
      <Grid stackable>
        {data.map((people, i) => {
          return (
            <Grid.Column computer={4} tablet={4} mobile={1} key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Peso</strong>
                    <p>{people.height}</p>
                    <strong>Massa</strong>
                    <p>{people.mass}</p>
                    <strong>Cor do cabelo</strong>
                    <p>{people.hair_color}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
