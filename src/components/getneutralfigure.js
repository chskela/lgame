function getNeutralFigure(ctx, x, y) {
  ctx.fillStyle = '#000000';
  ctx.arc(x, y, 38, 0, 2 * Math.PI, true);
  ctx.fill();
}

export default getNeutralFigure;