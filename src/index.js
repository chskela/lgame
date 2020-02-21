import css from './styles/index.css';
import getPlayingField from './components/getplayingfield';
import getNeutralFigure from './components/getneutralfigure';
import getLShaped from './components/getlshaped';
import state from './components/state.js';

const canvas = document.getElementById('canvas');
canvas.width = '500';
canvas.height = '500';
const ctx = canvas.getContext('2d');
const BB = canvas.getBoundingClientRect();
const offsetX = BB.left;
const offsetY = BB.top;

const history = [].push(state);
const figureManagement = {
  rightPressed: false,
  leftPressed: false,
  topPressed: false,
  bottomPressed: false,
  rotateClockwisePressed: false,
  rotateCounterClockwisePressed: false,
  flipPressed: false
};

canvas.addEventListener('mousedown', myDown, false);
canvas.addEventListener('mouseup', myUp, false);
canvas.addEventListener('mousemove', myMove, false);
// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 37: leftPressed = true; break;
    case 38: topPressed = true; break;
    case 39: rightPressed = true; break;
    case 40: bottomPressed = true; break;
    //case 37: leftPressed = true; break;
    // case 37: leftPressed = true; break;

  }
}
function keyUpHandler(e) {
  switch (e.keyCode) {
    case 37: leftPressed = false; break;
    case 38: topPressed = false; break;
    case 39: rightPressed = false; break;
    case 40: bottomPressed = false; break;
    //case 37: leftPressed = true; break;
    // case 37: leftPressed = true; break;

  }
}

let dragok = false;
let startX, startY;

const figures = [];
const lastStep = Object.create(state);

lastStep.neutralFigure.forEach(({ size, x, y }) => {
  figures.push({ size, x, y, isDragging: false, type: 'N-figure' })
});

lastStep.lShaped.forEach((options) => {
  const { size, x, y, color, isFliped, orientation } = options;
  figures.push({ size, x, y, color, isFliped, orientation, isDragging: false, type: 'L-figure' })
});
//figures[3].type = 'R-figure'
draw();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  getPlayingField(ctx);

  // console.log(figures);
  figures.forEach((e) => {
    if (e.type === 'N-figure') {
      getNeutralFigure(ctx, e.size, e.x, e.y);
    }
    if (e.type === 'L-figure') {
      getLShaped(ctx, e.size, e.x, e.y, e.color, e.isFliped, e.orientation);
    }
  })
}

function myDown(e) {
  e.preventDefault();
  e.stopPropagation();

  // get the current mouse position
  const mx = parseInt(e.clientX - offsetX);
  const my = parseInt(e.clientY - offsetY);

  // test each figures to see if mouse is inside
  dragok = false;

  for (let i = 0; i < figures.length; i++) {
    const { size, x, y, type } = figures[i];

    if (type === 'N-figure') {
      if (mx > x && mx < x + size && my > y && my < y + size) {
        // if yes, set that figure isDragging=true
        dragok = true;
        figures[i].isDragging = true;
      };
    };

    if (type === 'L-figure') {
      if (figures[i].color === "#D90416") {
        // if yes, set that figure isDragging=true
        dragok = true;
        figures[i].isDragging = true;
      };
      if (figures[i].color === '#030AF0') {
        // if yes, set that figure isDragging=true
        dragok = true;
        figures[i].isDragging = true;
      };
    };
  }
  // save the current mouse position
  startX = mx;
  startY = my;
}

function myUp(e) {
  e.preventDefault();
  e.stopPropagation();

  // clear all the dragging flags
  dragok = false;
  for (let i = 0; i < figures.length; i++) {
    figures[i].isDragging = false;
  };
}

function myMove(e) {
  if (dragok) {

    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    const mx = parseInt(e.clientX - offsetX);
    const my = parseInt(e.clientY - offsetY);

    // calculate the distance the mouse has moved
    // since the last mousemove
    const dx = mx - startX;
    const dy = my - startY;

    // move each figure that isDragging 
    // by the distance the mouse has moved
    // since the last mousemove
    for (let i = 0; i < figures.length; i++) {
      const r = figures[i];
      if (r.isDragging) {
        r.x += dx;
        r.y += dy;
      }
    }

    // redraw the scene with the new rect positions
    draw();

    // reset the starting mouse position for the next mousemove
    startX = mx;
    startY = my;
  }
}

