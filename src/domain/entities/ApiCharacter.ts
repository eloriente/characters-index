/*** Entities ***/
import Comics from "./Comics";
import Thumbnail from "./Thumnail";

class ApiCharacter {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public thumbnail: Thumbnail,
    public comics: Comics
  ) {}
}

export default ApiCharacter;
