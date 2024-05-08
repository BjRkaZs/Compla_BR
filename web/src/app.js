const doc= {
    complaBody : document.querySelector("#complaBody"),
    idInput : document.querySelector('#idInput'),
    descriptionInput : document.querySelector('#descriptionInput'),
    complainantInput : document.querySelector('#complainantInput'),
    productsInput : document.querySelector('#productsInput'),
    typeInput : document.querySelector('#typeInput'),
}

const state = {
    host: 'http://localhost:8000',
    endpoint:'complaints',
    id: 0,
    description: '',
    complainant: '',
    products: '',
    type: '',
    mode: 'add'
}


/*
* File: app.js
* Author: Bajusz Réka
* Copyright: 2024, Bajusz Réka
* Group: Szoft V
* Date: 2024-05-07
* Github: https://github.com/BjRkaZs/Compla_BR.git
* Licenc: GNU GPL
*/
getComplaints()
function setComplaintsState() { 
    state.id = doc.idInput.value
    state.description= doc.descriptionInput.value
    state.complainant= doc.complainantInput.value
    state.products= doc.productsInput.value
    state.type= Number(doc.typeInput.value)
    deleteOperatorContent()
}

function getComplaints(){
    let url = state.host + '/' + state.endpoint
    fetch(url)
    .then( response => response.json())
    .then(result => {
        console.log(result)
        renderComplaints(result)
    })
}

function renderComplaints(complaList) {
    complaList.forEach(compla => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${compla.id}</td>
            <td>${compla.description}</td>
            <td>${compla.complainant}</td>
            <td>${compla.products}</td>
            <td>${compla.type}</td>
        `
        doc.complaBody.appendChild(tr)
        console.log(compla.id)
    });
}