var script = document.createElement('script');
script.text = `
if (navigator.usb) {
  delete navigator.usb.__proto__.getDevices;
  delete navigator.usb.__proto__.requestDevice;
  navigator.__defineGetter__("usb", () => undefined);
}
`;
document.documentElement.appendChild(script);
