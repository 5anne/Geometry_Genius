function convertToMeter(){
    const centArea = document.getElementById('default-area');
    const centValue = parseFloat(centArea.value);
    const meterArea = centValue / (100 * 100);
    console.log(meterArea);
    // getInnerText('default-area', meterArea);
    const convertedArea = document.getElementById('converted-area');
    convertedArea.innerText = ' ' + '=' + ' ' + meterArea + ' ' + 'm2';
}