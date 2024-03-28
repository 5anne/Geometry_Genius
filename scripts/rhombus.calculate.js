function calculateRhombusArea(){
    const firstDiagonal = getDiagonal('diagonal-one');
    const secondDiagonal = getDiagonal('diagonal-two');

    const area = 0.5 * firstDiagonal * secondDiagonal;
    console.log('Area of the Rhombus is:', area);

    getInnerText('rhombus-area', area);
}

function getDiagonal(diagonalInput){
    const inputDiagonal = document.getElementById(diagonalInput);
    return parseFloat(inputDiagonal.value);
}

function getInnerText(areaOfRhombus, area){
    const rhombusArea = document.getElementById(areaOfRhombus);
    rhombusArea.innerText = area;
}