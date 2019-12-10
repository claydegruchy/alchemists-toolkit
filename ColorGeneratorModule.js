function Make3Dig(min, max) {
    numA = Math.floor(Math.random() * (max - min + 1)) + min;
    return numA
}

function Make1Dig() {
    numB = Math.random();
    return numB
}

// takes an array
function randomRGBAGenerator(rgba) {
    R = Make3Dig(0, 255);
    rgba.push(R);
    G = Make3Dig(0, 255);
    rgba.push(G);
    B = Make3Dig(0, 255);
    rgba.push(B);
    A = Make1Dig();
    rgba.push(A)
    return '(' + rgba.toString() + ')'
}

let colorMixOutput = []

//takes two strings: e.g. 'let firstcolor = '255, 0, 102,0.5' let secondcolor = '204,102,51,0.5'
function colorMixerForTwoStrings(first, second) {
    let AArray = first.split(',').map(Number)
    let BArray = second.split(',').map(Number)
    let alphalong = (AArray[3] + BArray[3] * (1 - AArray[3])).toFixed(1)
    let alpha = parseFloat(alphalong, 10)
    let R = Math.round(AArray[0] * AArray[3] * (1 - BArray[3]) + BArray[0] * BArray[3])
    let G = Math.round(AArray[1] * AArray[3] * (1 - BArray[3]) + BArray[1] * BArray[3])
    let B = Math.round(AArray[2] * AArray[3] * (1 - BArray[3]) + BArray[2] * BArray[3])
    colorMixOutput.push(R);
    colorMixOutput.push(G)
    colorMixOutput.push(B)
    colorMixOutput.push(alpha)
    return colorMixOutput
}

//takes two objects which have r g b a values
function colorMixerForTwoObjects(first, second) {
    let alphalong = (first.a + second.a * (1 - first.a)).toFixed(1)
    let alpha = parseFloat(alphalong, 10)
    let Red = Math.round(first.r * first.a * (1 - second.a) + second.r * second.a)
    let Green = Math.round(first.g * first.a * (1 - second.a) + second.g * second.a)
    let Blue = Math.round(first.b * first.a * (1 - second.a) + second.b * second.a)
    colorMixOutput.push(Red);
    colorMixOutput.push(Green)
    colorMixOutput.push(Blue)
    colorMixOutput.push(alpha)
    return colorMixOutput
}

let hexstring = ''

function hexToRGBString(hex) {
    let hexvalue = hex.split('')
    r = "0x" + hexvalue[1] + hexvalue[2];
    g = "0x" + hexvalue[3] + hexvalue[4];
    b = "0x" + hexvalue[5] + hexvalue[6];

    hexstring = "rgb(" + +r + "," + +g + "," + +b + ")";
    return hexstring
}

let randomHexColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

module.exports =

    {
        Make1Dig: Make1Dig,
        Make3Dig: Make3Dig,
        randomHexColor: randomHexColor,
        randomRGBAGenerator: randomRGBAGenerator,
        colorMixerForTwoStrings: colorMixerForTwoStrings,
        colorMixerForTwoObjects: colorMixerForTwoObjects,
        hexToRGBString: hexToRGBString,
    }