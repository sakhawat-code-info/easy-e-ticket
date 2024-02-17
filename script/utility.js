function getId(id) {
    document.getElementById(id);
}

function getIdSetValue(id, value) {
    document.getElementById(id).innerHTML = value;
}

function convertTextIdToInt(id) {
    const idInnerText = document.getElementById(id).innerText;
    const textToInt = parseInt(idInnerText);
    return textToInt;
}

function convertTwoTextIdToIntWithSum(id1, id2) {
    const idOne = document.getElementById(id1).innerText;
    const idOneInt = parseInt(idOne);

    const idTwo = document.getElementById(id2).innerText;
    const idTwoInt = parseInt(idTwo);

    return idOneInt + idTwoInt;
}

function givePlaceIdCreateElement(whereShow, createWhat) {
    const placeTaken = document.getElementById(whereShow);
    const created = document.createElement(createWhat);
    placeTaken.appendChild(created);
}









