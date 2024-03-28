function calculateEllipseArea(){
    const majorRadius = getNumber('major-radius');
    const minorRadius = getNumber('minor-radius');

    const area = 3.1416 * majorRadius * minorRadius;
    console.log('Area of the Ellipse is:', area);

    getInnerText('ellipse-area', area);
}