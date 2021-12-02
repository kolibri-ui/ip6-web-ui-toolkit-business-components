export { switchBoxProjector }

const switchBoxProjector = switchName => {
    const switchBoxDivElement = document.createElement('div');
    switchBoxDivElement.classList.add('switch-div-frame');

    const h1Element = document.createElement('h1');
    h1Element.textContent = switchName;

    switchBoxDivElement.appendChild(h1Element);

    return switchBoxDivElement;
}