export function romanToInteger(str) {
    let arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roman = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M',
    ];

    let result = 0;
    let a = 0;
    let b = arabic.length - 1;
    while (b >= 0 && a < str.length) {
        if (str.substr(a, roman[b].length) === roman[b]) {
            result += arabic[b];
            a += roman[b].length;
        } else {
            b--;
        }
    }
    return result;
}
