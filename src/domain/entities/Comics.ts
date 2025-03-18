class ComicsItem {
  constructor(public name: string, public resouceUri: string) {}
}

class Comics {
  constructor(
    public available: number,
    public collectionURI: string,
    public items: ComicsItem[],
    public returned: number
  ) {}
}

export default Comics;
