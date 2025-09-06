"use client";

let mParticles;
let step = 0;
let particleColor;

const maxSteps = 600;

const palette = ["#73310a", "#80aaed", "#eb4034", "#75160f", "#ffffff"];

const nParticles = 50;

const minHeight = 100;

const noiseScale = 0.005;

let dimension = 1;

export const sketch = {
  setup: (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    // p5.noLoop();
    mParticles = sketch.createParticles(p5, nParticles, 50, p5.width + 50, minHeight, p5.height);
    particleColor = palette[0];

    p5.stroke(255);
    p5.fill(100, 200, 100);
    // p5.pixelDensity(1);
  },

  draw: (p5) => {
    // sketch.drawCircle(p5, p5.width / 2, p5.height / 2, 100);
    if (step < maxSteps) sketch.drawMountains(p5, particleColor, dimension, noiseScale);
    if (step === maxSteps) {
      particleColor = p5.random(palette);
      dimension = p5.random(100);
      mParticles = sketch.createParticles(p5, nParticles, 0, p5.width + 50, minHeight, p5.height);
      step = 0;
    }
    step++;
  },

  windowResized: (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.clear();
    mParticles = sketch.createParticles(p5, nParticles, 0, p5.width + 50, minHeight, p5.height);
    step = 0;
  },

  drawCircle: (p5, x, y, r) => {
    p5.ellipse(x, y, r, r);
  },

  drawMountains: (p5, col, dimension = 2, noiseScale = 0.003) => {
    const strokeColor = p5.color(col);
    strokeColor.setAlpha(p5.random(80, 100));
    p5.stroke(strokeColor);
    p5.strokeWeight(p5.random(0.1, 3));

    sketch.drawFlowField(p5, mParticles, noiseScale, 30, p5.width + 50, minHeight, p5.height, dimension);
  },

  drawFlowField: (
    p5,
    particles,
    noiseScale,
    minX = 0,
    maxX = p5.width,
    minY = 0,
    maxY = p5.height,
    dim = 1
  ) => {
    for (const p of particles) {
      p5.point(p.x, p.y);

      const n = p5.noise(p.x * noiseScale, p.y * noiseScale, dim);
      const a = 2 * p5.PI * n;
      p.x += p5.cos(a);
      p.y += p5.sin(a);
      if (!sketch.onScreen(p, minX, maxX, minY - 50, maxY + 50)) {
        p.x = p5.random(minX, maxX);
        p.y = p5.random(minY, maxY);
      }
    }
  },

  onScreen: (v, minX, maxX, minY, maxY) => {
    return v.x >= minX && v.x <= maxX && v.y >= minY && v.y <= maxY;
  },

  createParticles: (p5, num, minX, maxX, minY, maxY) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(p5.createVector(p5.random(minX, maxX), p5.random(minY, maxY)));
    }
    return arr;
  },
};
