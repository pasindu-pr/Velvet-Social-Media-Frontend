export interface ILocation {
  city: string;
  region: string;
  country: string;
}

export class CityLocation {
  constructor(
    public city: string,
    public region: string,
    public country: string
  ) {}
}
