function calculateRectangleArea(){
    // console.log('inside function')
    const widthInput = document.getElementById('width');
    const width = parseFloat(widthInput.value);

    const lengthInput = document.getElementById('length');
    const length = parseFloat(lengthInput.value);

    const area = width * length;
    console.log('Area of the Rectangle is:', area);

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}
