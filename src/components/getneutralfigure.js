function getNeutralFigure(ctx, sizeFigures, x, y) {
  ctx.beginPath();
  ctx.fillStyle = '#000000';
  //ctx.fillRect(x, y, sizeFigures, sizeFigures);
  ctx.arc(x + sizeFigures / 2, y + sizeFigures / 2, sizeFigures / 2 - 2, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.closePath();
}

export default getNeutralFigure;