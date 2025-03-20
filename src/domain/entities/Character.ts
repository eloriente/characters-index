/*** Entities ***/
import OriginPlanet from "./OriginPlanet";
import Transformations from "./Transformations";

class Character {
  constructor(
    public id: number,
    public name: string,
    public ki: string,
    public maxKi: string,
    public race: string,
    public gender: string,
    public description: string,
    public image: string,
    public affiliation: string,
    public originPlanet: OriginPlanet,
    public transformations: Transformations[]
  ) {}
}

export default Character;
