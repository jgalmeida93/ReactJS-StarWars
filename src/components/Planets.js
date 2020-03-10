import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Planets({ data }) {
  // data que é passada pelo App é recebida aqui
  return (
    <>
      <h1 className="header">Planetas</h1>
      <Grid columns={3}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                    <strong>Clima</strong>
                    <p>{planets.climate}</p>
                    <strong>Diâmetro</strong>
                    <p>{planets.diameter}</p>
                    <strong>População</strong>
                    <p>{planets.population}</p>
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
