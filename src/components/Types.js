import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Types() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  let getPokemons = async () => {
    let pokemonData = [];
    let pokemonMerge = [];

    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    pokemonData = response.data.results;

    let promisePokemon = Promise.all(
      pokemonData.map(async (pokemon) => {
        await axios.get(pokemon.url).then((response) => {
          pokemonMerge.push(response.data);
        });
      })
    );

    await promisePokemon;

    setPokemons(pokemonMerge);
  };

  return (
    <div>
      {/* <Row style={{ paddingTop: "30px" }} xs={1} md={4} className="g-4">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pokemons[0]?.sprites?.front_default} />
              <Card.Body>
                <Card.Title className="PokemonName">{pokemons[0]?.name}</Card.Title>
              </Card.Body>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Peso: {pokemons[0]?.weight}</ListGroup.Item>

                      {pokemons[0]?.stats.map((stat) => (
                        <ListGroup.Item>
                          {stat.stat.name}:{stat.base_stat}
                        </ListGroup.Item>
                      ))}

                      <ListGroup.Item>
                        Tipo:
                        {pokemons[0]?.types.map((type) => {
                          return " " + type.type.name + " ";
                        })}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
      </Row> */}
      <Row style={{ paddingTop: "30px" }} xs={1} md={4} className="g-4">
        {pokemons ? (
          pokemons.map((pokemon, key) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }} key={key}>
                  <Card.Img
                 style={{alignItems:"center" }} 
                    variant="top"
                    src={pokemon?.sprites?.front_default}
                  />
                  <Card.Body>
                    <Card.Title className="PokemonName">
                      {pokemon.name}
                    </Card.Title>
                  </Card.Body>

                  <Accordion >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Info</Accordion.Header>
                      <Accordion.Body>
                          <ListGroup.Item>
                            Peso: {pokemon.weight}
                          </ListGroup.Item>
                          
                          {pokemon.stats.map((stat) => (
                            
                            <ListGroup.Item >
                              {stat.stat.name}:{stat.base_stat}
                              <ProgressBar striped variant="info" now={stat.base_stat} />
                            </ListGroup.Item>
                          ))}

                          <ListGroup.Item>
                            Tipo:
                            {pokemon.types.map((type) => {
                              return " " + type.type.name + " ";
                            })}
                          </ListGroup.Item>
                       
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Col>
            );
          })
        ) : (
          <p>No hay pokemons disponibles</p>
        )}
      </Row>
      
    </div>
    
  );
}
export default Types;
