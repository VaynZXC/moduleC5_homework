const resultNode = document.querySelector('.result-img')
const btnNode = document.querySelector('.btn-request')

const url = 'https://picsum.photos/v2/list?'

function displayResult(apiData){
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
      <div class ="card">
        <img width = "250px"
          src = "${item.download_url}"
          class = "card-image"
        />
        <span>${item.author} </span>
      </div>
      `;
    cards = cards + cardBlock
  });
  resultNode.innerHTML = cards;
};

const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', function(event) {
  event.preventDefault()
  console.log('Отправка!')
})

const useRequest = (url) => {
  return fetch(url)
    .then((Response) => {
      console.log('response от запроса: ', Response);
      return Response.json();
    })
    .then((json) => {
      console.log('json от запроса: ', json);
      return json;
    })
    .catch(() => { console.log('ошибка')
  })
}

if (localStorage.getItem('savePics') != null) {
  displayResult(JSON.parse(localStorage.getItem('savePics')));}


btnNode.addEventListener('click', async () => {
  const value1 = Math.round(document.querySelector('.first').value);
  const value2 = Math.round(document.querySelector('.second').value);
  if(isNaN(value1) || value1>10 || value1<1 || isNaN(value2) || value2>10 || value2<1){
    alert('Одно или несколько аргументов не заданы, заполните все поля.')
  } else {
    const Url = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
    resultNode.innerHTML = '<div class="message">Загрузка изоброжений...</div>';
    const requestResult = await useRequest(Url);
    displayResult(requestResult)
    const json_string = JSON.stringify(requestResult)
    localStorage.setItem('savePics', json_string);
  }
})

const btnClear = document.querySelector('.btn-clear')

btnClear.addEventListener('click', () => {
  localStorage.clear();
  console.log('Хранилище очищено.')
})