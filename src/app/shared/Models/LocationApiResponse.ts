interface GeoName {
  adminCode1: string;
  lng: string;
  geonameId: Number;
  toponymName: string;
  countryId: string;
  fcl: string;
  population: Number;
  countryCode: string;
  name: string;
  fclName: string;
  adminCodes1: {
    ISO3166_2: string;
  };
  countryName: string;
  fcodeName: string;
  adminName1: string;
  lat: string;
  fcode: string;
}

export interface LocationResponse {
  totalResultsCount: Number;
  geonames: GeoName[];
}
