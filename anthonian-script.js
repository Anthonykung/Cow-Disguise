/**
 *   Name: Cow Disguise
 * Description: A fake client side password protection
 * Version: 0.0.0
 * URI: https://cow-disguise.anth.dev
 * Author: Anthony Kung
 * Author URI: https://anth.dev
 * Copyright: 2020 Anthony Kung
 * License: MIT
 * 
 * Created with <3 by Anthony Kung
 */

function pwdAuth() {
  var chk = 'Carrot:P';
  var pwd = document.getElementById('pwd').value;
  if (pwd == chk) {
    window.location.href = "/private/hehe.html";
  }
  else {
    var prompt = document.getElementById('prompt');
    prompt.innerText = 'Incorrect password you maniac -_-';
  }
}

document.getElementById('submit').addEventListener('click', pwdAuth);