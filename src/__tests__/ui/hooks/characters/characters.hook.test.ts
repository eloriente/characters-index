/*** Vendors ***/
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

/*** Hooks ***/
import useCharactersStore from "../../../../ui/hooks/characters/characters.hook";

/*** Use Cases ***/
import GetCharacters from "../../../../application/useCases/GetCharacters";

vi.mock("../../../../infraestructure/api/CharacterApi");
vi.mock("../../../../application/useCases/GetCharacters");

const mockCharacters = [
  { id: 1, name: "Character 1" },
  { id: 2, name: "Character 2" },
];

describe("useCharactersStore", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(global, "localStorage", {
      value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });
    localStorage.clear();
  });

  it("should be initialized with default values", () => {
    const { result } = renderHook(() => useCharactersStore());
    expect(result.current.characters).toEqual([]);
    expect(result.current.lastUpdate).toBe(0);
  });

  it("should update the characters if the cache time has elapsed", async () => {
    const mockExecute = vi.fn().mockResolvedValue(mockCharacters);
    vi.spyOn(GetCharacters.prototype, "execute").mockImplementation(
      mockExecute
    );

    const { result } = renderHook(() => useCharactersStore());

    await act(async () => {
      await result.current.setCharacters(2);
    });

    expect(mockExecute).toHaveBeenCalledWith(2);
    expect(result.current.characters).toEqual(mockCharacters);
    expect(result.current.lastUpdate).toBeGreaterThan(0);
  });

  it("should not update the characters if the cache is still valid", async () => {
    const mockExecute = vi.fn().mockResolvedValue(mockCharacters);
    vi.spyOn(GetCharacters.prototype, "execute").mockImplementation(
      mockExecute
    );

    const { result } = renderHook(() => useCharactersStore());

    await act(async () => {
      await result.current.setCharacters(2);
    });

    const firstUpdate = result.current.lastUpdate;
    expect(mockExecute).toHaveBeenCalledTimes(0);

    await act(async () => {
      await result.current.setCharacters(2);
    });

    expect(mockExecute).toHaveBeenCalledTimes(0);
    expect(result.current.lastUpdate).toBe(firstUpdate);
  });
});
