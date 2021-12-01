export {cardProjector}

/**
 * Creates a Kolibri Card
 * @returns {HTMLDivElement}
 * @param title {string}
 * @param body {*[HTMLElement]}
 */
const cardProjector = (title = '', body = [null]) => {

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const cardTitleElement = document.createElement('div');
    cardTitleElement.classList.add('card-title');
    cardTitleElement.innerText = title;

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');
    body.forEach(e => cardBodyElement.appendChild(e));

    cardElement.appendChild(cardTitleElement);
    cardElement.appendChild(cardBodyElement);


    return cardElement;
}