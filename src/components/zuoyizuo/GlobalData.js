class GlobalData {
    constructor() {
      this.rendererWidth = 750;
      this.rendererHeight = 1624;
      this.fullScreen = true;
      this.mapId = 1;
    }
  
    static getInstance() {
      //单例
      if (!GlobalData.instance) {
        GlobalData.instance = new GlobalData();
      }
      return GlobalData.instance;
    }
    setRendererSize(w, h) {
      this.rendererWidth = w;
      this.rendererHeight = h;
      this.fullScreen = window.screen.width / window.screen.height < 0.55 ? true : false;
      console.log("setRendererSize:", this.rendererWidth, this.rendererHeight, this.fullScreen, window.screen.width / window.screen.height);
    }
  }
  
  export default GlobalData;