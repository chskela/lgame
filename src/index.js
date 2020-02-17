import css from './styles/index.css';
import getPlayingField from './components/getplayingfield';
import getNeutralFigure from './components/getneutralfigure';
import getLShaped from './components/getlshaped';
import state from './components/state.js';

const canvas = document.querySelector('#canvas');
canvas.width = '500';
canvas.height = '500';
const ctx = canvas.getContext('2d');

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  getPlayingField(ctx);

  const lastStep = state[state.length - 1];

  lastStep.neutralFigure.forEach(({ x, y }) => {
    getNeutralFigure(ctx, x, y);
  });

  lastStep.lShaped.forEach((options) => {
    const { sizeFigures, x, y, color, isFliped, orientation } = options;
    getLShaped(ctx, sizeFigures, x, y, color, isFliped, orientation);
  });

  //requestAnimationFrame(draw);
}

draw();