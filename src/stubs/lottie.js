const createAnimationStub = (options = {}) => ({
  container: options.container ?? null,
  play() {},
  stop() {},
  pause() {},
  destroy() {},
  addEventListener() {},
  removeEventListener() {},
});

const lottie = {
  loadAnimation(options) {
    return createAnimationStub(options);
  },
};

export default lottie;
