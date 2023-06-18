const url = 'https://picsum.photos/'

const resultNode = document.querySelector('.result-img');
const btnNode = document.querySelector('.btn-request');

function displayResult(url) {
    const card = `
      <div class="card">
        <img width='250px'
          src = "${url}"
          class = "card=image"
        />
      </div>
      `;
  resultNode.innerHTML = card;
};

const useRequest = (url) => {
  return fetch(url)
    .then((Response) =>{
      return Response.url;
    })
    .catch(() => { console.log('ошибка') })
}

const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', function(event) {
  event.preventDefault()
  console.log('Отправка!')
})

btnNode.addEventListener('click', async () => {
  const value1 = Math.round(document.querySelector('.first').value);
  const value2 = Math.round(document.querySelector('.second').value);
  if(isNaN(value1) || value1>300 || value1<100 || isNaN(value2) || value2>300 || value2<100){
    alert('Одно из чисел вне диапозона от 100 до 300');
  } else { 
    resultNode.innerHTML = '<div class="message">Загрузка изображения</div>';
    const requestResult = await useRequest(url+value1+'\\'+value2);
    displayResult(requestResult)
  }
})