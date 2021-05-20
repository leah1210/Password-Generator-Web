

//************************* whatever happens on the click needs tobe in onclick.  everything else runs 1 time when the page is reloaded *************

//------------------- justLettersPassword function --------------------//

const justLetters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'

const characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}?/.,<>:"][]'

//------------------- password function --------------------//

const randomCharacter = (characterSet) => {
  const index = getRandomIntInclusive(0, characterSet.length - 1)
  return characterSet[index]
}

const makePassword = (length, characterSet) => {
  return buildArray(length).map(() => randomCharacter(characterSet)).join('')
}

console.log(makePassword(10, characters));


//----------------------------- onclick ---------------------------------//

const button = document.getElementById('create')

button.onclick = () => {
  const x = document.getElementById('characters')
  const stringToNum = Number(x.value)



  //-------- This is what is printing on the web page ----------//
  const cbSpecial = document.getElementById('special');
  const cbLetters = document.getElementById('letters');
  const cbLowercase = document.getElementById('lowercase');

  if (cbSpecial.checked === true) {
    const theElement = document.querySelector('#random-password-1')
    setTimeout(() => {
      theElement.innerText = (makePassword(stringToNum, characters));
    }, 200);

    const theElement2 = document.querySelector('#random-password-2')
    setTimeout(() => {
      theElement2.innerText = (makePassword(stringToNum, characters));
    }, 200);

    const theElement3 = document.querySelector('#random-password-3')
    setTimeout(() => {
      theElement3.innerText = (makePassword(stringToNum, characters));
    }, 200);

  } else if (cbLetters.checked === true) {
    const theElement4 = document.querySelector('#random-password-1')
    setTimeout(() => {
      theElement4.innerText = (makePassword(stringToNum, justLetters));
    }, 200);

    const theElement5 = document.querySelector('#random-password-2')
    setTimeout(() => {
      theElement5.innerText = (makePassword(stringToNum, justLetters));
    }, 200);

    const theElement6 = document.querySelector('#random-password-3')
    setTimeout(() => {
      theElement6.innerText = (makePassword(stringToNum, justLetters));
    }, 200);
  } else {
    'not applicable'
  }

  //--------------------- Copy to Clipboard ---------------------------------//
  // css = display none
  //js = display inline block
  //display value none
  //   const copyText = () => {
  //     /* Get the text field */
  //     const copyText = document.getElementById("password");

  //     /* Select the text field */
  //     copyText.select();
  //     copyText.setSelectionRange(0, 99999); /* For mobile devices */

  //     /* Copy the text inside the text field */
  //     document.execCommand("copy");
  //   }
  //   console.log(copyText);

  // }

  // function copy_function(id) {
  //   var value = document.getElementById(id).innerHTML;
  //   var input_temp = document.createElement("input");
  //   input_temp.value = value;
  //   document.body.appendChild(input_temp);
  //   input_temp.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(input_temp);
};






