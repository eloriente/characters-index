/*** Entities ***/
import Character from "../../domain/entities/Character";

/*** Repositories ***/
import CharacterRepository from "../../domain/repositories/CharacterRepository";

class GetCharacters {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(limit: number): Promise<Character[]> {
    return this.characterRepository.getCharacter(limit);
  }
}

export default GetCharacters;
