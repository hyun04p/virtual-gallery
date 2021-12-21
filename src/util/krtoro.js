const f = (s) => {
  let u;
  let y;
  let t;
  let v;
  let x;
  let p;
  let V;
  let z;
  return [...s].map(
    (c) =>
      c < '!'
        ? c
        : ((u = c.charCodeAt() - 44032),
          (y = '1478ghjlmnpr'.search((p = t).toString(36))),
          (t = u % 28),
          (u = (u / 28) | 0),
          (v = u % 21),
          (x = [2, 5, 6, 11, 18].indexOf((u = (u / 21) | 0))),
          ~x & ~y && (z = parseInt(V[y + 68][x], 36)) > 10
            ? V[z + 69]
            : V[p + 40] + V[u + 21]) + V[v],
    (t = 0),
    (V = '8a6y8ye6e46ye4y64w8wa6o6y4u/w4w6wi/yu/eu/ui/i/g/k21d/t7r/3b/p0s/ss95j5ch/270h922/197l999930/77ng/77270h/bbcd6afaa8gghi5ffak8alaa8llmn4gghp8abaa8gghq5gghr5ggha5gghs8ng1ng3g/2ll/n1n3d/7r/m1m3b/0s/5ch/h'.replace(
      /\d/g,
      (n) => 'pnkmojeta/'[n] + '/'
    ).split`/`)
  ).join``;
};

export default f;
