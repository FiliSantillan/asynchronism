export const fetchDataCallback = (url_api, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        callback(new Error("Error"), null);
      }
    }
  };
  xhttp.send();
};