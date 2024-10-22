function selectionChange(color) {
    const style = document.createElement('style');
    style.innerHTML = `
        ::selection {
            background: none;
            color: ${color};
        }

        select {
            background: none;
            padding-right: 20px;
        }

        select::-ms-expand {
            display: none;
        }

        select {
            padding-right: 40px;
        }
    `;
    document.head.appendChild(style);
}
