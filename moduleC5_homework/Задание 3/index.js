function useReqeust(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result)
      }
    }
  }

  xhr.onerror = function() {
    console.log('Ошиюка! Статус ответа: ', xhr.status);
  };

  xhr.send();
}


const resultNode = document.querySelector('.result-img');
const btnNode = document.querySelector('.btn-request');
const formNode = document.querySelector('form')

function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
      <div class ="card">
        <img width = '250px'
          src = "${item.download_url}"
          class = "card=image"
        />
        <p>${item.author}</p>
      </div>
      `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
};

const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', function(event) {
  event.preventDefault()
  console.log('Отправка!')
})


btnNode.addEventListener('click', () => {
  const value = document.querySelector('input').value;
  const array = [1,2,3,4,5,6,7,8,9,10]
  if(value in array){
    useReqeust('https://picsum.photos/v2/list?limit=' + value, displayResult)
  }if(value <= 0){
    resultNode.innerHTML = `<p>Слишком много фотографий. Введите число от 1 до 10</p>`
  }
  else {
    resultNode.innerHTML = `<p>Слишком много фотографий. Введите число от 1 до 10</p>`
  }
})
