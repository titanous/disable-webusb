var script = document.createElement('script');
script.text = '{ navigator.__defineGetter__("usb", () => undefined); }';
document.documentElement.appendChild(script);
