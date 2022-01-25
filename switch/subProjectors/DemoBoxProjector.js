export {DemoBoxProjector}

const DemoBoxProjector = (switchName, elementCode, ...element) => {
    const switchBoxDivElement = document.createElement('div');
    switchBoxDivElement.classList.add('demo-box');

    const spanElement = document.createElement('span');
    spanElement.classList.add("demo-title");
    spanElement.textContent = switchName;


    const codeElement = document.createElement('code');
    codeElement.classList.add('code', 'demo-code');
    codeElement.innerHTML = elementCode;


    switchBoxDivElement.appendChild(spanElement);


    element.forEach(e => {
        const demoElement = document.createElement('div');
        demoElement.classList.add('demo-element');
        demoElement.appendChild(e);

        switchBoxDivElement.appendChild(demoElement);
    });

    if (elementCode !== null) {
        switchBoxDivElement.appendChild(codeElement);
    }


    return switchBoxDivElement;
}