const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{

    if(uppercase){
        text = text.toUpperCase();
    }
    if(reverse) {
        const tablica1 = [...text]
        tablica1.reverse();
        text = tablica1.join('')
    }
    if(removeSpecialChars){
        text = text.replaceAll(/[^\w\s]/g, '');
    }

    console.log(`text: ${text}`)
}

processText('Hi!', {uppercase: true, reverse: true, removeSpecialChars: true});