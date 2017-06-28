const resultErrorClassName = 'results--error';

window.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('.js-form');
  const inputEl = document.querySelector('.js-input');
  const resultsEl = document.querySelector('.js-results');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    runCode(inputEl.value);
  });

  function runCode(code) {
    fetch('/run', { method: 'POST', body: code })
      .then(res => res.json())
      .then(result => setResult(result));
  }

  function setResult(result) {
    const isInErrorState = resultsEl.classList.contains(resultErrorClassName);

    if (result.success && isInErrorState) {
      resultsEl.classList.remove(resultErrorClassName)
    }

    if (!result.success && !isInErrorState) {
      resultsEl.classList.add(resultErrorClassName)
    }

    resultsEl.textContent = result.data;
  }
});
