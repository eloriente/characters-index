/*** Vendors ***/
import { describe, it, expect, vi, beforeEach } from "vitest";
/*** Adapters ***/
import CharactersApi from "../CharacterApi";

/*** Mocks ***/
import {
  characterApiResultSuccessMock,
  characterApiResultErrorMock,
  characterApiReturnMock,
} from "./mocks/CharacterApi.mock";
global.fetch = vi.fn();

describe("src > adapters > api > CharactersApi", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call fetch with the correct params and return correct data format", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => characterApiResultSuccessMock,
    } as Response);

    const charactersApi = new CharactersApi();
    const data = await charactersApi.getCharacter(50);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual([characterApiReturnMock]);
  });

  it("should throw an error when the response code is different from 200", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => characterApiResultErrorMock,
    } as Response);

    const charactersApi = new CharactersApi();

    await expect(charactersApi.getCharacter(50)).rejects.toThrowError(
      "Error requesting characters"
    );
  });
});
