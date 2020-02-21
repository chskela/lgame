function getLShaped(ctx, ...options) {
  const [sizeFigures, x, y, color, isFliped, orientation] = options;
  ctx.fillStyle = color;// '#030A8C' // #D90416
  let fl = 1;
  if (isFliped) fl = -1;

  ctx.translate(x, y)
  switch (orientation) {
    case 'right':
      ctx.rotate(-90 * Math.PI / 180);
      break;
    case 'top':
      ctx.rotate(-180 * Math.PI / 180);
      // ctx.lineTo(x, y - 3 * sizeFigures);
      // ctx.lineTo(x - 2 * sizeFigures, y - 3 * sizeFigures);
      // ctx.lineTo(x - 2 * sizeFigures, y - 2 * sizeFigures);
      // ctx.lineTo(x - sizeFigures, y - 2 * sizeFigures);
      // ctx.lineTo(x - sizeFigures, y);
      break;
    case 'left':
      ctx.rotate(90 * Math.PI / 180);
      // ctx.lineTo(x - 3 * sizeFigures, y);
      // ctx.lineTo(x - 3 * sizeFigures, y + 2 * sizeFigures);
      // ctx.lineTo(x - 2 * sizeFigures, y + 2 * sizeFigures);
      // ctx.lineTo(x - 2 * sizeFigures, y + sizeFigures);
      // ctx.lineTo(x, y + sizeFigures);
      break;
    case 'bottom':
      ctx.rotate(0 * Math.PI / 180);
      // ctx.lineTo(x, y + 3 * sizeFigures);
      // ctx.lineTo(x + 2 * sizeFigures, y + 3 * sizeFigures);
      // ctx.lineTo(x + 2 * sizeFigures, y + 2 * sizeFigures);
      // ctx.lineTo(x + sizeFigures, y + 2 * sizeFigures);
      // ctx.lineTo(x + sizeFigures, y);
      break;
  }
  // ctx.beginPath();
  // //ctx.moveTo(x, y);
  // ctx.lineTo(0, 3 * sizeFigures);
  // ctx.lineTo(2 * sizeFigures, 3 * sizeFigures);
  // ctx.lineTo(2 * sizeFigures, 2 * sizeFigures);
  // ctx.lineTo(sizeFigures, 2 * sizeFigures);
  // ctx.lineTo(sizeFigures, 0);
  // ctx.lineTo(0, 0);
  // ctx.fill();
  // ctx.closePath();
  ctx.fillRect(0, 0, sizeFigures, sizeFigures)
  ctx.fillRect(0, sizeFigures, sizeFigures, sizeFigures)
  ctx.fillRect(0, 2 * sizeFigures, sizeFigures, sizeFigures)
  ctx.fillRect(fl * sizeFigures, 2 * sizeFigures, sizeFigures, sizeFigures)
  ctx.closePath();
  ctx.setTransform(1, 0, 0, 1, 0, 0)
}

export default getLShaped;