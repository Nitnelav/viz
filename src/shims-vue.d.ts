declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// this keeps typescript / semantic / jquery happy together:
declare var $: any

declare module 'vue-slider-component'
declare module 'convert-seconds'
declare module 'read-blob'

declare module '*.worker' {
  class WebpackWorker extends Worker {
    constructor()
  }

  export default WebpackWorker
}

declare const __webpack_public_path__: string