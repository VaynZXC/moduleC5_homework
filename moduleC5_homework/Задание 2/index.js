const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`

const parse = new DOMParser();

const xmlDOM = parse.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector('student');
const nameNode = xmlDOM.querySelector('name');
const firstNameNode = xmlDOM.querySelector('first');
const secondNameNode = xmlDOM.querySelector('second');
const ageNode = xmlDOM.querySelector('age');
const profNode = xmlDOM.querySelector('prof');

const categoryAtte = nameNode.getAttribute('lang')

const result = [
  {
  leng: categoryAtte,
  firstName: firstNameNode.textContent,
  age: ageNode.textContent,
  prof: profNode.textContent,
}]
console.log(result)