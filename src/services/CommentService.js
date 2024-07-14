export function getComments() {
    return fetch('https://66374a35288fedf6937ff19b.mockapi.io/commentAndLogInServer')
}

export function sendComment(userName, comment) {
    return fetch('https://66374a35288fedf6937ff19b.mockapi.io/commentAndLogInServer', {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify({
            commentUserName: userName,
            commentText: comment
        })
    })
    // return fetch('http://localhost:3000/comments', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         userName: userName,
    //         text: comment
    //     })
    // })
}















// export function getComments () {
// return fetch('http://localhost:3000/comments')
// }

// export function sendComment (userName, comment) {
//     return fetch("http://localhost:3000/comments", {
//         method: "POST",
//         headers: {
//             "Content-Type": "text/plain"
//         },
//         body: JSON.stringify({
//                      userName: userName,
//                      text: comment
//                  })
//     })
//     // return fetch('http://localhost:3000/comments', {
//     //     method: 'POST',
//     //     body: JSON.stringify({
//     //         userName: userName,
//     //         text: comment
//     //     })
//     // })
// }





