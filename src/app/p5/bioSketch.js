"use client";

let mParticles;

let startX, endX, startY, endY;

export const bioSketch = {
  setup: (p5) => {
    // p5.resizeCanvas(300, p5.windowHeight);
    p5.resizeCanvas(300, 1500);
    p5.noLoop();
    startX = -50;
    endX = p5.width + 50;
    startY = 0;
    endY = p5.height + 50;
    mParticles = bioSketch.createParticles(p5, 300, startX, endX, startY, endY);

    p5.stroke(255);
    p5.fill(100, 200, 100);
  },

  draw: (p5) => {
    bioSketch.drawMountains(p5, "#656255", 0.5, 200, 0.005);
  },

  // windowResized: (p5) => {
  //   p5.resizeCanvas(300, p5.windowHeight);
  // },

  drawMountains: (p5, col, dimension = 2, steps = 500, noiseScale = 0.003) => {
    for (let i = 0; i < steps; i++) {
      const strokeColor = p5.color(col);

      strokeColor.setAlpha(p5.random(80, 100));
      p5.stroke(strokeColor);
      p5.strokeWeight(p5.random(0.1, 2.5));

      bioSketch.drawFlowField(p5, mParticles, noiseScale, startX, endX, startY, endY, dimension);
    }
  },

  drawFlowField: (
    p5,
    particles,
    noiseScale,
    min_x = 0,
    max_x = width,
    min_y = 0,
    max_y = width,
    dimension = 1
  ) => {
    for (const p of particles) {
      p5.point(p.x, p.y);

      const n = p5.noise(p.x * noiseScale, p.y * noiseScale, dimension);
      const a = 2 * p5.PI * n;
      p.x += p5.cos(a);
      p.y += p5.sin(a);
      if (!bioSketch.onScreen(p, min_x, max_x, min_y - 50, max_y + 50)) {
        p.x = p5.random(min_x, max_x);
        p.y = p5.random(min_y, max_y);
      }
    }
  },

  onScreen: (v, min_x, max_x, min_y, max_y) => {
    return v.x >= min_x && v.x <= max_x && v.y >= min_y && v.y <= max_y;
  },

  createParticles: (p5, num, min_x, max_x, min_y, max_y) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(p5.createVector(p5.random(min_x, max_x), p5.random(min_y, max_y)));
    }
    return arr;
  },
};
