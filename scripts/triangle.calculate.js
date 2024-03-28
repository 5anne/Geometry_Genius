function calculateTriangleArea(){
    const baseInput = document.getElementById('base');
    const base = parseFloat(baseInput.value);
    // console.log(baseInput.value);
    // console.log(typeof parseFloat(baseInput.value));

    const heightInput = document.getElementById('height');
    const height = parseFloat(heightInput.value);
    // console.log(heightInput.value);
    // console.log(typeof parseFloat(heightInput.value));

    const area = 0.5 * base * height;
    console.log('Area of the tiangle is:', area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

    
}

