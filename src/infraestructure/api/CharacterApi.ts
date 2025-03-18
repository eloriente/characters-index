/*** Entities ***/
import Character from "../../domain/entities/Character";
import ApiCharacter from "../../domain/entities/ApiCharacter";

/*** Repositories ***/
import CharacterRepository from "../../domain/repositories/CharacterRepository";

/*** Utils ***/
import getApiQueryParamsBase from "../utils/apiQueryBase";

class CharacterApi implements CharacterRepository {
  async getCharacter(limit: number): Promise<Character[]> {
    const queryParamsBase = getApiQueryParamsBase();
    const response = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/characters?${queryParamsBase}&limit=${limit}`
    );
    const charactersData = await response.json();

    if (charactersData.code !== 200) {
      throw new Error("Error requesting characters");
    }

    const characters: Character[] = charactersData.data.results.map(
      (character: ApiCharacter) => {
        return new Character(
          character.id,
          character.name,
          character.description,
          `${character.thumbnail.path}.${character.thumbnail.extension}`,
          character.comics.items
        );
      }
    );

    return characters;
  }
}

export default CharacterApi;
