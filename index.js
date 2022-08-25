// Add your code here
function submitData (userName, userEmail) {
  const userData = {
    name: userName,
    email: userEmail
  }

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(user => {
    const p = document.createElement('p');
    p.textContent = user.id;

    document.querySelector('body').appendChild(p);
  })
  .catch((error) => {
    const divError = document.createElement('div');
    divError.textContent = error.message;

    document.querySelector('body').appendChild(divError);
  })
}

