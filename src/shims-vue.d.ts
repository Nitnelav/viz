declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// this keeps typescript / semantic / jquery happy together:
// declare var $: any

declare module 'colormap'
declare module 'convert-seconds'
declare module 'd3-sankey-diagram'
declare module 'filesize'
declare module 'read-blob'
declare module 'scale-color-perceptual'
declare module 'vue-slider-component'
declare module 'fast-json-stable-stringify'
declare module '@turf/nearest-point-to-line'
declare module '@turf/point-to-line-distance'

declare module '@/visualization/frame-animation/contracts/GeoJsonReader'
declare module '@/visualization/frame-animation/view/DrawingController.js'

declare module '*.worker' {
  class WebpackWorker extends Worker {
    constructor()
  }

  export default WebpackWorker
}
