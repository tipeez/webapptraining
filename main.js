
// Load the Map and MapView modules

require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/config",
  "esri/widgets/Legend",
  "esri/widgets/ScaleBar",
  "esri/widgets/Home",
  "esri/widgets/Locate",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/widgets/LayerList"
], function (WebMap, MapView, esriConfig, Legend, ScaleBar, Home, Locate, BasemapGallery, Expand, LayerList) {

  esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal"
  // Create a WebMap instance
  const myMap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: "d8879fd211144aa29ca120dd62ffbb59"
    }
  });
  // Create a MapView instance (for 2D viewing) and reference the map instance
  const view = new MapView({
    container: "viewDiv",
    map: myMap,

  });

  let legend = new Legend({
    view: view,
    container: "legend-container"
  });
  let layerList = new LayerList({
    view: view,
    container: "layers-container"
  });

  // view.ui.add(legend, "bottom-left");

  let scaleBar = new ScaleBar({
    view: view,
    unit: "metric"
  });
  // Add widget to the bottom left corner of the view
  view.ui.add(scaleBar, {
    position: "bottom-right"
  });
  let homeWidget = new Home({
    view: view
  });

  // adds the home widget to the top left corner of the MapView
  view.ui.add(homeWidget, "top-left");
  let locateWidget = new Locate({
    view: view,   // Attaches the Locate button to the view

  });
  view.ui.add(locateWidget, "top-left");

  let basemapGallery = new BasemapGallery({
    view: view,
    container: "layer-basemap-container"
  });

  // let bgExpand = new Expand({
  //   view: view,
  //   content: basemapGallery
  // });
  // let bgExpand2 = new Expand({
  //         view: view,
  //         content: legend
  //       });
  //view.ui.add([bgExpand], "top-right")

  // MODALS //
const appDetailModalBtn = document.getElementById("app-details-action");
const appDetailModalEl = document.getElementById("app-details-modal");
appDetailModalBtn.addEventListener("click", () => { appDetailModalEl.open = !appDetailModalEl.open 
});
 
});