function calculatePentagonArea(){
    const perimeter = getNumber('pent-perimeter');
    const height = getNumber('pent-height');

    const area = 0.5 * perimeter * height;
    console.log('Area of the Pentagon is:', area);

    getInnerText('pentagon-area', area);
}

function getNumber(number){
    const pentValue = document.getElementById(number);
    return parseFloat(pentValue.value);
}