let eng = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\`', '{', '}', ':', '\"', '<', '>', '?', '~'];
let rus = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ё', 'Х', 'Ъ', 'Ж', 'Э', 'Б', 'Ю', ',', 'Ё']
let result;

    function converter(something, from, to){
        let newStr = something.toString()
            .toLowerCase()
            .split('');
        console.log(newStr)
        let transArr = [];
        for (let i = 0; i < newStr.length; i++){
            if(newStr[i] === ' ' ||
                newStr[i] === '!') {
                transArr.push(newStr[i])
            } else if(newStr[i] ==='&'){
                transArr.push('?')
            }else{
                transArr.push(to[Number(from.indexOf(newStr[i]))]);
            }
        }
        return result = transArr.join('');
}
//console.log(converter('ghbdtn'), eng, rus);
function printResult(n){
        document.getElementById('resultDiv'+n).innerHTML = result;
}