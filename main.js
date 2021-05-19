// const myLine = document.createElement('p')
// const myText = document.createTextNode('I am from javascript')

// myLine.appendChild(myText)
// document.body.appendChild(myText)

// const theElement = document.querySelector('#this-one')
// setTimeout(() => {
//   theElement.innerText = ('These words are from javascript');
// }, 3000);

// const anotherElement = document.querySelector('#second-one')

// const button = document.getElementById('button')
// button.onclick = () => {
//   anotherElement.innerText = 'I have changed'
// }

//************************* whatever happens on the click needs tobe in onclick.  everything else runs 1 time when the page is reloaded *************

//------------------- justLettersPassword function --------------------//

const justLetters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
const justLettersLength = justLetters.length
const randomCharacterLetters = () => {
  const indexLetters = getRandomIntInclusive(0, justLettersLength - 1)
  return justLetters[indexLetters]
}
const justLettersPassword = x => {
  return buildArray(x).map(randomCharacterLetters).join('')
}
console.log(justLettersPassword(10));

//------------------- password function --------------------//

const characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}?/.,<>:"][]'
const charactersLength = characters.length

const randomCharacter = () => {
  const index = getRandomIntInclusive(0, charactersLength - 1)
  return characters[index]
}

const password = x => {
  return buildArray(x).map(randomCharacter).join('')
}
console.log(password(5));

//----------------------------- onclick ---------------------------------//

const button = document.getElementById('create')

button.onclick = () => {
  const x = document.getElementById('characters')
  //console.log(x.value);
  const stringToNum = Number(x.value)
  //console.log(stringToNum);
  //console.log(typeof stringToNum);
  console.log(password(stringToNum));
  const randomPassword = password(stringToNum)
  const randomPassword2 = password(stringToNum)
  const randomPassword3 = password(stringToNum)
  //-------- random letter passwords:
  const randomLettersPassword = justLettersPassword(stringToNum)
  const randomLettersPassword2 = justLettersPassword(stringToNum)
  const randomLettersPassword3 = justLettersPassword(stringToNum)
  //-------- random lowercase passwords:

  //-------- This is what is printing on the web page ----------//
  const cbSpecial = document.getElementById('special');
  const cbLetters = document.getElementById('letters');
  const cbLowercase = document.getElementById('lowercase');

  if (cbSpecial.checked === true) {
    const theElement = document.querySelector('#random-password-1')
    setTimeout(() => {
      theElement.innerText = (randomPassword);
    }, 200);

    const theElement2 = document.querySelector('#random-password-2')
    setTimeout(() => {
      theElement2.innerText = (randomPassword2);
    }, 200);

    const theElement3 = document.querySelector('#random-password-3')
    setTimeout(() => {
      theElement3.innerText = (randomPassword3);
    }, 200);

  } else if (cbLetters.checked === true) {
    const theElement4 = document.querySelector('#random-password-1')
    setTimeout(() => {
      theElement4.innerText = (randomLettersPassword);
    }, 200);

    const theElement5 = document.querySelector('#random-password-2')
    setTimeout(() => {
      theElement5.innerText = (randomLettersPassword2);
    }, 200);

    const theElement6 = document.querySelector('#random-password-3')
    setTimeout(() => {
      theElement6.innerText = (randomLettersPassword3);
    }, 200);
  } else {
    'not applicable'
  }
  //--------------------- Check boxes ---------------------------------//
  // const cbSpecial = document.getElementById('special');
  // const cbLetters = document.getElementById('letters');
  // const cbLowercase = document.getElementById('lowercase');

  if (cbSpecial.checked === true) {
    console.log(randomPassword);
  } else if (cbLetters.checked === true) {
    console.log(randomLettersPassword);
  } else if (cbLowercase.checked === true) {
    console.log(theElement3);
  } else {
    console.log('not applicable');
  }

  // const y = document.getElementById('special')
  // console.log(y);
  // const z = document.getElementById('letters')


  // if (y.checked === true) {
  //   console.log(randomPassword);
  // } else if (z.checked === true) {
  //   console.log(justLettersPassword);
  // }

  //--------------------- Copy to Clipboard ---------------------------------//

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






