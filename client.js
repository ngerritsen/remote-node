window.addEventListener('load', main);

function main() {
  document.querySelector('.js-submit').addEventListener('submit', () => {
    event.preventDefault();

    const code = document.querySelector('.js-input').value;

    runCode(code);
  })
}

function runCode(code) {
  fetch('http://localhost:3000', {
    method: 'POST',
    body: code
  })
    .then((res) => {
      if (res.status < 200 || res.status >= 400) {
        setError();
      } else {
        unsetError();
      }

      return res.text();
    })
    .then(res => writeResult(res))
    .catch(err => console.error(err));
}

function writeResult(result) {
  const resultEl = document.querySelector('.js-result');

  resultEl.textContent = result;
}

function setError() {
  const resultEl = document.querySelector('.js-result');

  if (!resultEl.classList.contains('result--error')) {
    resultEl.classList.add('result--error')
    console.log(resultEl.classList.contains('result--error'));
  }
}

function unsetError() {
  const resultEl = document.querySelector('.js-result');

  if (resultEl.classList.contains('result--error')) {
    resultEl.classList.remove('result--error')
  }
}
