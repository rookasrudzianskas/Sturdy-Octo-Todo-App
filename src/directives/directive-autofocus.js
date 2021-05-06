import { Platform } from "quasar";

export const autofocus = {
  inserted(el) {
    let input = el.querySelector('.q-field__native')
    let delay = 0
    if(Platform.is.cordova) {
      delay = 700
    }
    setTimeout(() => {
      input.focus()
    }, delay);
  }
}
