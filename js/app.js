'use strict';
let people =[];
function Person (name,email,department){
  this.name =name;
  this.email=email;
  this.department=department;
  people.push(this);
}

Person.prototype.getsalary=function(min,max){
  this.salary=gitRandomNumber(min,max);
};

Person.prototype.render=function(){
  const myTable=document.getElementById('table');
  const newRow=document.createElement('tr');
  myTable.appendChild(newRow);
  const td1el=document.createElement('td');
  newRow.appendChild(td1el);
  td1el.textContent=this.name;
  const td2el=document.createElement('td');
  newRow.appendChild(td2el);
  td2el.textContent=this.email;
  const td3el=document.createElement('td');
  newRow.appendChild(td3el);
  td3el.textContent=this.department;
  const td4el=document.createElement('td');
  newRow.appendChild(td4el);
  td4el.textContent=this.salary;

};



function gitRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

let forma = document.getElementById("form");
document.getElementById("submit").addEventListener("click", displayDate);

function displayDate() {
  let name1=document.getElementById('name').value; 
  let email1=document.getElementById('email').value;
  let dep=document.getElementById('deparment').value;
  const moh=new Person (name1 , email1, dep);
  moh.render();
  moh.getsalary(100,500);
} 

