const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`

const data = JSON.parse(jsonString)
const list = data.list;

const result = {
  first_name: list[0].name,
  age: list[0].age,
  prof: list[0].prof,
}
console.log('result', result)


