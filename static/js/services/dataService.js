const generalData = {
  userAgent: navigator.userAgent,
  referrer: document.referrer,
  location: window.location.href,
  deviceDetails: {
    screen: {
      orientation: screen.orientation.type,
      width: screen.width,
      height: screen.height
    }
  }
};
export async function sendData(data) {
  // probably add more code later...
  try {
    return await window.appData.send({ ...data, generalData });
  } catch (e) {
    return false;
  }
}
