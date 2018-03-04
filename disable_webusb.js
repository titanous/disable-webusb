var script = document.createElement('script');
script.text = `
if (navigator.usb) {
  delete navigator.usb.__proto__.getDevices;
  delete navigator.usb.__proto__.requestDevice;
  delete navigator.__proto__.usb;
}
`;
document.documentElement.appendChild(script);
