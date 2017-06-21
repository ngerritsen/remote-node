'use strict';

function runCode(code) {
  try {
    const result = eval(code);

    if (result instanceof Promise) {
      return result;
    }

    return Promise.resolve(result);
  } catch(err) {
    return Promise.reject(err);
  }
}

module.exports = runCode;
