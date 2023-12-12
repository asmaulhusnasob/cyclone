var wms_layers = [];


        var lyr_GoogleRoadMap_0 = new ol.layer.Tile({
            'title': 'Google Road Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_CoastalAreas_1 = new ol.format.GeoJSON();
var features_CoastalAreas_1 = format_CoastalAreas_1.readFeatures(json_CoastalAreas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalAreas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalAreas_1.addFeatures(features_CoastalAreas_1);
var lyr_CoastalAreas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastalAreas_1, 
                style: style_CoastalAreas_1,
                interactive: true,
    title: 'Coastal Areas<br />\
    <img src="styles/legend/CoastalAreas_1_0.png" /> 485334 - 1217189<br />\
    <img src="styles/legend/CoastalAreas_1_1.png" /> 1217189 - 1667055<br />\
    <img src="styles/legend/CoastalAreas_1_2.png" /> 1667055 - 2105022<br />\
    <img src="styles/legend/CoastalAreas_1_3.png" /> 2105022 - 2678620<br />\
    <img src="styles/legend/CoastalAreas_1_4.png" /> 2678620 - 9371100<br />'
        });
var format_CycloneShelters_2 = new ol.format.GeoJSON();
var features_CycloneShelters_2 = format_CycloneShelters_2.readFeatures(json_CycloneShelters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CycloneShelters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CycloneShelters_2.addFeatures(features_CycloneShelters_2);
var lyr_CycloneShelters_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CycloneShelters_2, 
                style: style_CycloneShelters_2,
                interactive: true,
                title: '<img src="styles/legend/CycloneShelters_2.png" /> Cyclone Shelters'
            });

lyr_GoogleRoadMap_0.setVisible(true);lyr_CoastalAreas_1.setVisible(true);lyr_CycloneShelters_2.setVisible(true);
var layersList = [lyr_GoogleRoadMap_0,lyr_CoastalAreas_1,lyr_CycloneShelters_2];
lyr_CoastalAreas_1.set('fieldAliases', {'fid': 'fid', 'GEO_CODE': 'GEO_CODE', 'DIVISION_C': 'DIVISION_C', 'DIVISION_N': 'DIVISION_N', 'DISTRICT_C': 'DISTRICT_C', 'DISTRICT_N': 'DISTRICT_N', 'QUICK_COUN': 'QUICK_COUN', 'ENUMERATED': 'ENUMERATED', 'COMPLETION': 'COMPLETION', 'LAST_UPDAT': 'LAST_UPDAT', 'TOTAL_POP': 'TOTAL_POP', 'TOTAL_MALE': 'TOTAL_MALE', 'TOTAL_FEMA': 'TOTAL_FEMA', 'SEX_RATIO': 'SEX_RATIO', 'HH_SIZE': 'HH_SIZE', 'TOTAL_NRB': 'TOTAL_NRB', });
lyr_CycloneShelters_2.set('fieldAliases', {'ShelterNam': 'ShelterNam', 'Capacity': 'Capacity', 'Lat': 'Lat', 'Long': 'Long', });
lyr_CoastalAreas_1.set('fieldImages', {'fid': 'TextEdit', 'GEO_CODE': 'TextEdit', 'DIVISION_C': 'TextEdit', 'DIVISION_N': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'QUICK_COUN': 'TextEdit', 'ENUMERATED': 'TextEdit', 'COMPLETION': 'TextEdit', 'LAST_UPDAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'TOTAL_MALE': 'TextEdit', 'TOTAL_FEMA': 'TextEdit', 'SEX_RATIO': 'TextEdit', 'HH_SIZE': 'TextEdit', 'TOTAL_NRB': 'TextEdit', });
lyr_CycloneShelters_2.set('fieldImages', {'ShelterNam': 'TextEdit', 'Capacity': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_CoastalAreas_1.set('fieldLabels', {'fid': 'header label', 'GEO_CODE': 'inline label', 'DIVISION_C': 'inline label', 'DIVISION_N': 'inline label', 'DISTRICT_C': 'inline label', 'DISTRICT_N': 'inline label', 'QUICK_COUN': 'no label', 'ENUMERATED': 'no label', 'COMPLETION': 'no label', 'LAST_UPDAT': 'no label', 'TOTAL_POP': 'inline label', 'TOTAL_MALE': 'no label', 'TOTAL_FEMA': 'no label', 'SEX_RATIO': 'no label', 'HH_SIZE': 'no label', 'TOTAL_NRB': 'no label', });
lyr_CycloneShelters_2.set('fieldLabels', {'ShelterNam': 'inline label', 'Capacity': 'inline label', 'Lat': 'no label', 'Long': 'no label', });
lyr_CycloneShelters_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});