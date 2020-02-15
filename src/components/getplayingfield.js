function getPlayingField(ctx) {
  ctx.fillStyle = '#77ABD9'
  ctx.fillRect(0, 0, 500, 500)
  ctx.fillStyle = '#BBD8F2'
  ctx.fillRect(80, 80, 320, 320)
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      ctx.strokeRect(80 + 80 * i, 80 + 80 * j, 80, 80)
    }
  }
}

export default getPlayingField;