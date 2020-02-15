function getLShaped(ctx, x, y, color) {
  ctx.fillStyle = color;// '#030A8C' // #D90416
  ctx.fillRect(x, y, 80, 80);
  ctx.fillRect(x, y + 80, 80, 80);
  ctx.fillRect(x, y + 160, 80, 80);
  ctx.fillRect(x + 80, y + 160, 80, 80);

  // for (let i = 0; i < 4; i++) {
  //   for (let j = 0; j < 4; j++) {
  //     ctx.strokeRect(80 + 80 * i, 80 + 80 * j, 80, 80)
  //   }
  // }
}

export default getLShaped;