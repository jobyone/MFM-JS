import { Tile } from "./mfm/classes/Tile";
import { MFMRenderer } from "./renderer/MFMRenderer";

declare var Vue: any;

let app = new Vue({
  el: "#app",
  data: function() {
    return {
      timeSpeed: 5000 as number,
      g: undefined as Tile,
      mfmRenderer: MFMRenderer
    };
  },
  mounted() {
    this.g = new Tile(48, 48);
    this.mfmRenderer = new MFMRenderer(this.g, document.querySelector("#mfm"));
  },
  methods: {},
  watch: {
    timeSpeed(val: number) {
      this.mfmRenderer.timeSpeed = val;
    }
  }
});

//let sketchP: any = new p5(app.sketch, document.querySelector("#mfm"));
//document.querySelector("#mfm").appendChild(app.pixiapp.view);
