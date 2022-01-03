const text = document.getElementById('txt')
const output = document.getElementById('output')

const palindrome = () => {
    const modifiedStr = text.value.toLowerCase().match(/[a-z0-9]/g);

    if(modifiedStr.join(' ') === modifiedStr.reverse().join(' ')){
        output.innerText ="It is a palindrome"
    }else{
        output.innerText = "It is not a palindrome"
    }
}

text.addEventListener('input', palindrome)