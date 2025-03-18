/*** Entities ***/
import Character from "../entities/Character";

interface CharacterRepository {
  getCharacter(limit: number): Promise<Character[]>;
}

export default CharacterRepository;
