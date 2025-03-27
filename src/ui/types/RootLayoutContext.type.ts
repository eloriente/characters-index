/*** Entities ***/
import Character from "../../domain/entities/Character";

interface Favorite {
  id: number;
}

type RootLayoutaContextType = {
  characters: Character[];
  favorites: Favorite[];
  onlyFavorites: boolean;
};

export default RootLayoutaContextType;
