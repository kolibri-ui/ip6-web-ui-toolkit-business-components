export { switchBoxProjector }

const switchBoxProjector = () => {
    const switchBoxDivElement = document.createElement('div');
    switchBoxDivElement.classList.add('switch-div-frame');

    const h1Element = document.createElement('h1');
    h1Element.textContent = '2-State Switch';

    switchBoxDivElement.appendChild(h1Element);

    return switchBoxDivElement;
}