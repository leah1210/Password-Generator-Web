

//************************* whatever happens on the click needs tobe in onclick.  everything else runs 1 time when the page is reloaded *************

//------------------- justLettersPassword function --------------------//

const justLetters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'

const characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}?/,<>:"][]'

//------------------- password function --------------------//

const randomCharacter = (characterSet) => {
  const index = getRandomIntInclusive(0, characterSet.length - 1)
  return characterSet[index]
}

const makePassword = (length, characterSet) => {
  return buildArray(length).map(() => randomCharacter(characterSet)).join('')
}

console.log(makePassword(10, characters));

//copy function

const Clipboard_CopyTo = (value) => {
  const tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}


//----------------------------- onclick ---------------------------------//

const button = document.getElementById('create')

button.onclick = () => {
  const x = document.getElementById('characters')
  const stringToNum = Number(x.value)



  //-------- This is what is printing on the web page ----------//
  const cbSpecial = document.getElementById('special');
  const cbLetters = document.getElementById('letters');
  const cbLowercase = document.getElementById('lowercase');

  if (!cbSpecial.checked && !cbLetters.checked) {
    const theElement7 = document.querySelector('#error')
    setTimeout(() => {
      theElement7.innerText = ('You must choose one of the above criteria');
    }, 200);


    // } else if (length < 2) {
    //   const theElement8 = document.querySelector('#less-than-2')
    //   setTimeout(() => {
    //     theElement8.innerText = ('You must choose a number that is higher than 2');
    //   }, 200);

  } else if (cbSpecial.checked === true) {

    document.getElementById('error').style.display = 'none'

    const theElement = document.querySelector('#random-password-1')
    setTimeout(() => {
      theElement.innerText = (makePassword(stringToNum, characters));
    }, 200);

    document.getElementById('pwButton').style.display = 'inline-block'


    document.querySelector('#pwButton').onclick = function () {
      Clipboard_CopyTo(theElement.innerText);
    }

    const theElement2 = document.querySelector('#random-password-2')
    setTimeout(() => {
      theElement2.innerText = (makePassword(stringToNum, characters));
    }, 200);

    document.getElementById('pwButton2').style.display = 'inline-block'

    document.querySelector('#pwButton2').onclick = function () {
      Clipboard_CopyTo(theElement2.innerText);
    }

    const theElement3 = document.querySelector('#random-password-3')
    setTimeout(() => {
      theElement3.innerText = (makePassword(stringToNum, characters));
    }, 200);

    document.getElementById('pwButton3').style.display = 'inline-block'

    document.querySelector('#pwButton3').onclick = function () {
      Clipboard_CopyTo(theElement3.innerText);
    }

  } else if (cbLetters.checked === true) {

    document.getElementById('error').style.display = 'none'

    const theElement4 = document.querySelector('#random-password-1')
    setTimeout(() => {
      theElement4.innerText = (makePassword(stringToNum, justLetters));
    }, 200);

    document.getElementById('pwButton').style.display = 'inline-block'

    document.querySelector('#pwButton').onclick = function () {
      Clipboard_CopyTo(theElement4.innerText);
    }

    const theElement5 = document.querySelector('#random-password-2')
    setTimeout(() => {
      theElement5.innerText = (makePassword(stringToNum, justLetters));
    }, 200);

    document.getElementById('pwButton2').style.display = 'inline-block'

    document.querySelector('#pwButton2').onclick = function () {
      Clipboard_CopyTo(theElement5.innerText);
    }

    const theElement6 = document.querySelector('#random-password-3')
    setTimeout(() => {
      theElement6.innerText = (makePassword(stringToNum, justLetters));
    }, 200);

    document.getElementById('pwButton3').style.display = 'inline-block'

    document.querySelector('#pwButton3').onclick = function () {
      Clipboard_CopyTo(theElement6.innerText);
    }

    // } else {
    //   const theElement7 = document.querySelector('#error')
    //   setTimeout(() => {
    //     theElement7.innerText = ('You must choose one of the above criteria');
    //   }, 200);

  }


  //--------------------- Copy to Clipboard ---------------------------------//
  // css = display none
  //js = display inline block
  //display value none
  //radio buttons
  //css bootstrap, material ui. bulma

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
