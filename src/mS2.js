class carlo_tronnberg_yb_MS2 {
  constructor() {
    this.status = 'running';
  }

  getStatus() {
    return this.status;
  }

  getValue(x) {
    if (x == 1) return 'one';
    return 'two';
  }
}

module.exports = { carlo_tronnberg_yb_MS2 };

