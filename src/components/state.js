import config from './config.js';

const { sizeFigures } = config;

const state = {
  neutralFigure: [
    {
      size: sizeFigures,
      x: sizeFigures,
      y: sizeFigures
    },
    {
      size: sizeFigures,
      x: sizeFigures * 4,
      y: sizeFigures * 4
    }
  ],
  lShaped: [
    {
      size: sizeFigures,
      x: sizeFigures * 2,
      y: sizeFigures * 2,
      color: '#030AF0',
      isFliped: false,
      orientation: 'bottom'
    },
    {
      size: sizeFigures,
      x: sizeFigures * 4,
      y: sizeFigures * 4,
      color: '#D90416',
      isFliped: false,
      orientation: 'top'
    }
  ],
  step: 0
}


export default state;