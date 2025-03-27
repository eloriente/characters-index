/*** Vendors ***/
import { useOutletContext } from "react-router";

/*** Components ***/
import Card from "../../components/basics/card/card.component";
import Grid from "../../components/commons/grid/grid.component";

/*** Types ***/
import RootLayoutaContextType from "../../types/RootLayoutContext.type";

function App() {
  const { characters, favorites, onlyFavorites } =
    useOutletContext<RootLayoutaContextType>();

  function isSelected(id: number) {
    return favorites.some((fav) => fav.id === id);
  }

  const filteredCharacters =
    onlyFavorites && favorites.length > 0
      ? characters.filter((character) => isSelected(character.id))
      : characters;

  return (
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
  );
}

export default App;
