/*** Entities ***/
import Comics from "./Comics";

class Character {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public image: string,
    public comics: Comics["items"]
  ) {}
}

export default Character;
