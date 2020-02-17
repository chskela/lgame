function getLShaped(ctx, ...options) {
  const [sizeFigures, x, y, color, isFliped, orientation] = options;
  ctx.fillStyle = color;// '#030A8C' // #D90416

  let fl = 1;
  if (isFliped) fl = -1;

  ctx.translate(x, y);

  switch (orientation) {
    case 'right':
      ctx.rotate(-90 * Math.PI / 180);
      break;
    case 'top':
      ctx.rotate(180 * Math.PI / 180);
      break;
    case 'left':
      ctx.rotate(90 * Math.PI / 180);
      break;
    case 'bottom':
      ctx.rotate(0 * Math.PI / 180);
      break;

  }

  ctx.fillRect(0, 0, sizeFigures, sizeFigures);
  ctx.fillRect(0, sizeFigures, sizeFigures, sizeFigures);
  ctx.fillRect(0, 2 * sizeFigures, sizeFigures, sizeFigures);
  ctx.fillRect(fl * sizeFigures, 2 * sizeFigures, sizeFigures, sizeFigures);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

}

export default getLShaped;