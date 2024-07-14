// export class LoginService {

//    signin(userName , password){
//     return fetch('https://66374a35288fedf6937ff19b.mockapi.io/person', {
//         method: 'POST',
//         body: JSON.stringify({
//             email: userName,
//             password : password
//         })
//     });
//   }



// }





export function register(userName, password) {
  // return fetch('http://localhost:3000/person'
  return fetch('https://66374a35288fedf6937ff19b.mockapi.io/commentAndLogInServer', {
    method: 'POST',
    body: JSON.stringify({
      logInUserName: userName,
      password: password
    })
  });
}


export function logIn() {
  // return fetch('http://localhost:3000/person');
  return fetch('https://66374a35288fedf6937ff19b.mockapi.io/commentAndLogInServer');
}