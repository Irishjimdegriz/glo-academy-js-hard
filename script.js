const textInput = document.querySelector('.translate-text'),
      translateButton = document.querySelector('.translate-button'),
      translationBox = document.querySelector('.translation-result'),
      languageSelect = document.querySelector('#language-select');

translateButton.addEventListener('click', () => {
  let url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190704T212630Z.c409bb9604ae7251.df09dbd89372575b02298ed0970f8e45c749648b
  &text=${textInput.value}&lang=${languageSelect.options[languageSelect.selectedIndex].value}`;

  fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: '',
    mode: 'cors'
  })
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Что-то пошло не так, код ошибки - ${response.status}`);
    }

    return response.json();
  })
  .then((response) => {
    translationBox.textContent = response.text.join(' ');
  })
  .catch((error) => {
    console.log(error);
  });
});