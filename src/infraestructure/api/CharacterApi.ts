/*** Entities ***/
import Character from "../../domain/entities/Character";

/*** Repositories ***/
import CharacterRepository from "../../domain/repositories/CharacterRepository";

class CharacterApi implements CharacterRepository {
  async getCharacter(limit: number): Promise<Character[]> {
    if (!import.meta.env.VITE_API_URL) {
      throw new Error("API URL not found");
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/characters?limit=${limit}`
    );
    const charactersData = await response.json();

    const characters: Character[] = charactersData.items.map(
      (character: Character) => character
    );

    return characters;
  }
}

export default CharacterApi;
