import 'jquery'
import 'uikit'
import 'uikit-css'
import 'uikit-theme'

export default (Vue, options) => {
  const ui = window.UIkit
  // 向实例注入
  Vue.prototype.$ui = {
    modal: ui.modal,
    alert: ui.modal.alert,
    confirm: ui.modal.confirm,
    prompt: ui.modal.prompt,
    block: ui.modal.block
  }
}
