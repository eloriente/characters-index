/*** Vendors ***/
import { describe, it, expect, vi, beforeEach } from "vitest";

/*** Api ***/
import CharacterApi from "../../../infraestructure/api/CharacterApi";

/*** useCases ***/
import GetCharacters from "../../../application/useCases/GetCharacters";

/*** Mocks ***/
import {
  characterApiResultSuccessMock,
  characterApiResultErrorMock,
  characterApiReturnMock,
} from "../../mocks/CharacterApi.mock";
global.fetch = vi.fn();

describe("src > application > useCases > GetCharacters", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call fetch with the correct params and return correct data format", async () => {
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => characterApiResultSuccessMock,
    } as Response);

    const charactersRepository = new CharacterApi();
    const getCharacters = new GetCharacters(charactersRepository);
    const data = await getCharacters.execute(50);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(data).toEqual([characterApiReturnMock]);

    fetchSpy.mockRestore();
  });

  it("should throw an error when the API url it's not defined", async () => {
    import.meta.env.VITE_API_URL = "";
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => characterApiResultErrorMock,
    } as Response);

    const charactersRepository = new CharacterApi();
    const getCharacters = new GetCharacters(charactersRepository);

    expect(getCharacters.execute(50)).rejects.toThrowError("API URL not found");

    fetchSpy.mockRestore();
  });
});
