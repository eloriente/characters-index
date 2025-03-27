/*** Vendors ***/
import { useState } from "react";
import { useOutletContext } from "react-router";

/*** Components ***/
import Container from "../../components/commons/container/container.component";
import Card from "../../components/basics/card/card.component";
import Grid from "../../components/commons/grid/grid.component";
import Input from "../../components/basics/input/input.component";

/*** Types ***/
import RootLayoutaContextType from "../../types/RootLayoutContext.type";
import { InputPropsType } from "../../components/basics/input/input.component.types";

function App() {
  const [searchParams, setSearchParams] = useState<string>("");
  const { characters, favorites, onlyFavorites } =
    useOutletContext<RootLayoutaContextType>();

  function isSelected(id: number) {
    return favorites.some((fav) => fav.id === id);
  }

  let filteredCharacters =
    onlyFavorites && favorites.length > 0
      ? characters.filter((character) => isSelected(character.id))
      : characters;

  if (searchParams.trim() !== "") {
    filteredCharacters = filteredCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchParams.toLowerCase())
    );
  }

  const inputProps: InputPropsType = {
    counter: filteredCharacters.length,
    icon: "search.svg",
    onChange: setSearchParams,
    placeholder: "search a character...",
    type: "text",
  };

  return (
    <Container>
      <Input {...inputProps} />
      <Grid>
        {filteredCharacters.map((character) => (
          <Card
            id={character.id}
            name={character.name}
            image={character.image}
            key={character.id}
            selected={isSelected(character.id)}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
