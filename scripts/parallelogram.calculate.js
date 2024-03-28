function calculateParallelogramArea(){
    // console.log('inside function')
    const baseInput = document.getElementById('para-base');
    const base = parseFloat(baseInput.value);

    const heightInput = document.getElementById('para-height');
    const height = parseFloat(heightInput.value);

    const area = base * height;
    console.log('Area of the parallelogram is:', area);

    const parallelogramArea = document.getElementById('para-area');
    parallelogramArea.innerText = area;
}