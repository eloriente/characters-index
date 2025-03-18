/*** Entities ***/
import Character from "../entities/Character";

/*** Repositories ***/
import CharacterRepository from "../ports/CharacterRepository";

class GetCharacters {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(limit: number): Promise<Character[]> {
    return this.characterRepository.getCharacter(limit);
  }
}

export default GetCharacters;
