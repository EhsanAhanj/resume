export const W = "w";
export const A = "a";
export const S = "s";
export const D = "d";
export const SHIFT = "shift";
export const DIRECTIONS = [W, A, S, D];

export class KeyDisplay {
  map = new Map();
  map2 = new Map();

  constructor() {
    const w = document.createElement("div");
    const a = document.createElement("div");
    const s = document.createElement("div");
    const d = document.createElement("div");
    const shift = document.createElement("div");
    const wMobile = document.createElement("div");
    const aMobile = document.createElement("div");
    const sMobile = document.createElement("div");
    const dMobile = document.createElement("div");
    const rowTop = document.createElement("div");
    rowTop.classList.add("row-top");
    wMobile.classList.add("controls-w");
    rowTop.appendChild(wMobile);
    const rowBottom = document.createElement("div");
    rowBottom.classList.add("row-bottom");
    rowBottom.appendChild(aMobile);
    rowBottom.appendChild(sMobile);
    rowBottom.appendChild(dMobile);
    const shiftMobile = document.createElement("div");
    const mobileControl = document.createElement("div");
    a.classList.add("controls");

    aMobile.classList.add("controls-a");
    sMobile.classList.add("controls-s");
    dMobile.classList.add("controls-d");
    const shiftWrapper = document.createElement("div");
    shiftWrapper.classList.add("shift-wrapper");

    shiftWrapper.appendChild(shiftMobile);
    const controlsWrapper = document.createElement("div");
    controlsWrapper.classList.add("controls-wrapper");
    controlsWrapper.appendChild(rowTop);
    controlsWrapper.appendChild(rowBottom);

    mobileControl.appendChild(shiftWrapper);
    mobileControl.appendChild(controlsWrapper);
    mobileControl.classList.add("controls-mobile");

    w.classList.add("controls", "w");
    a.classList.add("controls");
    s.classList.add("controls");
    d.classList.add("controls");
    shift.classList.add("controls");

    shiftMobile.classList.add("controls-shift");

    this.map.set(W, w);
    this.map.set(A, a);
    this.map.set(S, s);
    this.map.set(D, d);
    this.map.set(SHIFT, shift);

    this.map2.set("↑", wMobile);
    this.map2.set("←", aMobile);
    this.map2.set("↓", sMobile);
    this.map2.set("→", dMobile);
    this.map2.set("run", shiftMobile);

    this.map.forEach((v, k) => {
      v.style.color = "#8f8f8f";
      v.style.fontSize = "50px";
      v.style.fontWeight = "800";
      v.style.position = "absolute";
      v.textContent = k.toUpperCase();
    });
    this.map2.forEach((v, k) => {
      v.textContent = k;
    });

    this.updatePosition();

    this.map.forEach((v, _) => {
      document.body.append(v);
    });
    document.body.append(mobileControl);
  }

  updatePosition() {
    this.map.get(W).style.top = `${window.innerHeight - 150}px`;
    this.map.get(A).style.top = `${window.innerHeight - 100}px`;
    this.map.get(S).style.top = `${window.innerHeight - 100}px`;
    this.map.get(D).style.top = `${window.innerHeight - 100}px`;
    this.map.get(SHIFT).style.top = `${window.innerHeight - 100}px`;

    this.map.get(W).style.left = `${300}px`;
    this.map.get(A).style.left = `${200}px`;
    this.map.get(S).style.left = `${300}px`;
    this.map.get(D).style.left = `${400}px`;
    this.map.get(SHIFT).style.left = `${50}px`;
  }

  down(key) {
    if (this.map.get(key.toLowerCase())) {
      this.map.get(key.toLowerCase()).style.color = "red";
    }
  }

  up(key) {
    if (this.map.get(key.toLowerCase())) {
      this.map.get(key.toLowerCase()).style.color = "#8f8f8f";
    }
  }
}
