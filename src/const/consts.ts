export const Languages = {
  EN: 'en',
  RU: 'ru'
}

export const NS = [
  'header'
]

export enum Vision {
  ANEMO = 'anemo',
  PYRO = 'pyro',
  ELECTRO = 'electro',
  CRYO = 'cryo',
  HYDRO = 'hydro',
  GEO = 'geo',
}

export const ServicePaths = {
  NAME: '/:name'
}

export enum RouteName {
  DEFAULT = '/teyvat-chronicles'
}

export const Section = {
  CHARACTER: `${RouteName.DEFAULT}${ServicePaths.NAME}`
}
