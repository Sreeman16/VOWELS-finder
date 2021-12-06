const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const palindrome = () => {
  let vowelCount = 0;
  const word = document.querySelector('.input-text').value.trim();

  let len = word.length;

  for (let i = 0; i < len; i++) {
    if (word[i].match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }


  if (len === 0) {
    result.style.color = '';
    result.innerHTML = `😬Type a word`;
  } 
  
  else {
    result.style.color = 'red';
    result.innerHTML = `${word} have ${vowelCount} Vowels letters 😀`;
  }
};
document.addEventListener('keyup', keyevent => {
    if (keyevent.code === 'Enter') {
        palindrome();
    }
  })


btn.addEventListener('click', palindrome);