const RESULT_ERROR_CLASS_NAME = 'results--error';
const TAB_KEY_CODE = 9;
const TAB_SIZE = 2;

window.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('.js-form');
  const inputEl = document.querySelector('.js-input');
  const resultsEl = document.querySelector('.js-results');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    runCode(inputEl.value);
  });

  inputEl.addEventListener('keydown', (e) => {
    if (event.keyCode === TAB_KEY_CODE) {
      e.preventDefault();
      handleTab();
    }
  });

  function runCode(code) {
    fetch('/run', { method: 'POST', body: code })
      .then(res => res.json())
      .then(result => setResult(result));
  }

  function setResult(result) {
    const isInErrorState = resultsEl.classList.contains(RESULT_ERROR_CLASS_NAME);

    if (result.success && isInErrorState) {
      resultsEl.classList.remove(RESULT_ERROR_CLASS_NAME)
    }

    if (!result.success && !isInErrorState) {
      resultsEl.classList.add(RESULT_ERROR_CLASS_NAME)
    }

    resultsEl.textContent = result.data;
  }

  function handleTab() {
    const { value, selectionStart: start } = inputEl;
    const newCursorPosition = start + TAB_SIZE;

    inputEl.value = value.substring(0, start) + generateSpaces() + value.substring(start);
    inputEl.selectionStart = newCursorPosition;
    inputEl.selectionEnd = newCursorPosition;
  }

  function generateSpaces() {
    let spaces = '';

    for (let i = 0; i < TAB_SIZE; i++) {
      spaces += ' ';
    }

    return spaces;
  }
});
