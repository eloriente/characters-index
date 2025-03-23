/*** Vendors ***/
import { create } from "zustand";
import { persist } from "zustand/middleware";

/*** Entitie ***/
import Character from "../../../domain/entities/Character";

/*** Repository ***/
import CharacterApi from "../../../infraestructure/api/CharacterApi";

/*** Use Cases ***/
import GetCharacters from "../../../application/useCases/GetCharacters";

interface State {
  characters: Character[];
  lastUpdate: number;
  setCharacters: (limit: number) => Promise<void>;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000;

const useCharactersStore = create<State>()(
  persist(
    (set, get) => {
      return {
        characters: [],
        lastUpdate: 0,
        setCharacters: async (limit: number) => {
          const lastUpdate = get().lastUpdate;
          const now = Date.now();
          if (now - lastUpdate < CACHE_DURATION) return;

          const getCharacterRepository = new CharacterApi();
          const getCharacters = new GetCharacters(getCharacterRepository);
          const characters = await getCharacters.execute(limit);
          set({ characters, lastUpdate: now });
        },
      };
    },
    { name: "characters" }
  )
);

export default useCharactersStore;
