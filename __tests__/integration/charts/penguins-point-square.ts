import { G2Spec } from '../../../src';

export function penguinsPointSquare(): G2Spec {
  return {
    type: 'square',
    data: {
      type: 'fetch',
      value: 'data/penguins.csv',
    },
    paddingRight: 80,
    paddingBottom: 50,
    paddingLeft: 50,
    height: 600,
    encode: {
      x: 'sex',
      y: 'species',
    },
    children: [
      {
        type: 'point',
        facet: false,
        frame: false,
        encode: {
          x: 'culmen_depth_mm',
          y: 'culmen_length_mm',
        },
        style: {
          r: 3,
          fill: '#ddd',
          stroke: 'none',
        },
      },
      {
        type: 'point',
        encode: {
          x: 'culmen_depth_mm',
          y: 'culmen_length_mm',
          color: 'island',
        },
      },
    ],
  };
}