export function capitalizeFirstLetter(string) {
  const mySentence = string;
  const words = mySentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function backgroundTransition(veiwHight, veiwMax) {
  let colorVal = Math.round(65 * (veiwHight / veiwMax));
  if (colorVal > 65) {
    colorVal = 65;
  }

  document.body.style.backgroundColor =
    "rgb(" + colorVal + "," + colorVal + "," + colorVal + ")";
}
