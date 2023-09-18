export interface IPlanetProps {
  id: string;
  name: string;
  englishName: string;
  isPlanet: true;
  moons: [
    {
      moon: string;
      rel: string;
    }
  ];
  semimajorAxis: 0;
  perihelion: 0;
  aphelion: 0;
  eccentricity: 0;
  inclination: 0;
  mass: {
    massValue: 0;
    massExponent: 0;
  };
  vol: {
    volValue: 0;
    volExponent: 0;
  };
  density: 0;
  gravity: 0;
  escape: 0;
  meanRadius: 0;
  equaRadius: 0;
  polarRadius: 0;
  flattening: 0;
  dimension: string;
  sideralOrbit: 0;
  sideralRotation: 0;
  aroundPlanet: {
    planet: string;
    rel: string;
  };
  discoveredBy: string;
  discoveryDate: string;
  alternativeName: string;
  axialTilt: 0;
  avgTemp: 0;
  mainAnomaly: 0;
  argPeriapsis: 0;
  longAscNode: 0;
  bodyType: string;
  rel: string;
}

export interface ILink {
  href: string;
  name: string;
}

export interface IDescription {
  title?: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ITPlanetContextData {
  planets: Array<IPlanetProps>;
}
