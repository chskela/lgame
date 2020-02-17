import config from './config.js';

const { sizeFigures } = config;

const state = [
  {
    neutralFigure: [
      { x: sizeFigures * 1.5, y: sizeFigures * 1.5 },
      { x: sizeFigures * 4.5, y: sizeFigures * 4.5 }
    ],
    lShaped: [
      {
        sizeFigures: sizeFigures,
        x: sizeFigures * 2,
        y: sizeFigures * 2,
        color: '#030AF0',
        isFliped: false,
        orientation: 'bottom'
      },
      {
        sizeFigures: sizeFigures,
        x: sizeFigures * 4,
        y: sizeFigures * 4,
        color: '#D90416',
        isFliped: false,
        orientation: 'top'
      }
    ],
    step: 0
  }
]

export default state;