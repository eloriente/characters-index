/*** Components ***/
import Card from "../../components/basics/card/card.component";
import Grid from "../../components/commons/grid/grid.component";

/*** Hooks ***/
import useCharactersStore from "../../hooks/characters/characters.hook";

function App() {
  const { characters } = useCharactersStore();

  return (
    <Grid>
      {characters.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          image={character.image}
          key={character.id}
        />
      ))}
    </Grid>
  );
}

export default App;
