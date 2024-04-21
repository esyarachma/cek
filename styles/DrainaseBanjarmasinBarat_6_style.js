var size = 0;
var placement = 'point';
function categories_DrainaseBanjarmasinBarat_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Ada Drainase':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,213,43,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ada Drainase (Parit)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(48,115,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tidak Ada Drainase dan Ada Bahu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,106,109,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tidak Ada Drainase dan Tidak Ada Bahu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,229,61,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_DrainaseBanjarmasinBarat_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Simbol");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_DrainaseBanjarmasinBarat_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
