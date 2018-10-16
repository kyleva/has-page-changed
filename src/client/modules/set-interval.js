let interval = null;

const set = (method, timeout = 5000) => {
  interval = setInterval(method, timeout);
};

const get = () => interval;

const clear = () => {
  clearTimeout(interval);
  interval = null;
};

module.exports = {
  set,
  get,
  clear
};
