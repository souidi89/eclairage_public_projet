var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_reseau_eclairage_public_1 = new ol.format.GeoJSON();
var features_reseau_eclairage_public_1 = format_reseau_eclairage_public_1.readFeatures(json_reseau_eclairage_public_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reseau_eclairage_public_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reseau_eclairage_public_1.addFeatures(features_reseau_eclairage_public_1);
var lyr_reseau_eclairage_public_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reseau_eclairage_public_1, 
                style: style_reseau_eclairage_public_1,
                interactive: true,
                title: '<img src="styles/legend/reseau_eclairage_public_1.png" /> reseau_eclairage_public'
            });
var format_armoires_electriques_2 = new ol.format.GeoJSON();
var features_armoires_electriques_2 = format_armoires_electriques_2.readFeatures(json_armoires_electriques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_armoires_electriques_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_armoires_electriques_2.addFeatures(features_armoires_electriques_2);
var lyr_armoires_electriques_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_armoires_electriques_2, 
                style: style_armoires_electriques_2,
                interactive: true,
                title: '<img src="styles/legend/armoires_electriques_2.png" /> armoires_electriques'
            });
var format_Candelabres_3 = new ol.format.GeoJSON();
var features_Candelabres_3 = format_Candelabres_3.readFeatures(json_Candelabres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Candelabres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Candelabres_3.addFeatures(features_Candelabres_3);
var lyr_Candelabres_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Candelabres_3, 
                style: style_Candelabres_3,
                interactive: true,
                title: '<img src="styles/legend/Candelabres_3.png" /> Candelabres'
            });
var format_coffrets_4 = new ol.format.GeoJSON();
var features_coffrets_4 = format_coffrets_4.readFeatures(json_coffrets_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coffrets_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coffrets_4.addFeatures(features_coffrets_4);
var lyr_coffrets_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coffrets_4, 
                style: style_coffrets_4,
                interactive: true,
                title: '<img src="styles/legend/coffrets_4.png" /> coffrets'
            });
var format_Regards_Eclairagepublic_5 = new ol.format.GeoJSON();
var features_Regards_Eclairagepublic_5 = format_Regards_Eclairagepublic_5.readFeatures(json_Regards_Eclairagepublic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regards_Eclairagepublic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regards_Eclairagepublic_5.addFeatures(features_Regards_Eclairagepublic_5);
var lyr_Regards_Eclairagepublic_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regards_Eclairagepublic_5, 
                style: style_Regards_Eclairagepublic_5,
                interactive: true,
                title: '<img src="styles/legend/Regards_Eclairagepublic_5.png" /> Regards_Eclairagepublic'
            });

lyr_OSMStandard_0.setVisible(true);lyr_reseau_eclairage_public_1.setVisible(true);lyr_armoires_electriques_2.setVisible(true);lyr_Candelabres_3.setVisible(true);lyr_coffrets_4.setVisible(true);lyr_Regards_Eclairagepublic_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_reseau_eclairage_public_1,lyr_armoires_electriques_2,lyr_Candelabres_3,lyr_coffrets_4,lyr_Regards_Eclairagepublic_5];
lyr_reseau_eclairage_public_1.set('fieldAliases', {'LONGUEUR': 'LONGUEUR', });
lyr_armoires_electriques_2.set('fieldAliases', {'LAYER': 'LAYER', 'ARMOIRE': 'ARMOIRE', });
lyr_Candelabres_3.set('fieldAliases', {'NUMERO': 'NUMERO', 'ADRESSE': 'ADRESSE', 'NATURE': 'NATURE', 'TYPE': 'TYPE', });
lyr_coffrets_4.set('fieldAliases', {'ID': 'ID', 'CARACT_RIS': 'CARACT_RIS', });
lyr_Regards_Eclairagepublic_5.set('fieldAliases', {'ALTITUDE_1': 'ALTITUDE_1', });
lyr_reseau_eclairage_public_1.set('fieldImages', {'LONGUEUR': 'TextEdit', });
lyr_armoires_electriques_2.set('fieldImages', {'LAYER': 'TextEdit', 'ARMOIRE': 'TextEdit', });
lyr_Candelabres_3.set('fieldImages', {'NUMERO': 'TextEdit', 'ADRESSE': 'TextEdit', 'NATURE': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_coffrets_4.set('fieldImages', {'ID': 'Range', 'CARACT_RIS': 'TextEdit', });
lyr_Regards_Eclairagepublic_5.set('fieldImages', {'ALTITUDE_1': 'Range', });
lyr_reseau_eclairage_public_1.set('fieldLabels', {'LONGUEUR': 'no label', });
lyr_armoires_electriques_2.set('fieldLabels', {'LAYER': 'no label', 'ARMOIRE': 'no label', });
lyr_Candelabres_3.set('fieldLabels', {'NUMERO': 'no label', 'ADRESSE': 'no label', 'NATURE': 'no label', 'TYPE': 'no label', });
lyr_coffrets_4.set('fieldLabels', {'ID': 'no label', 'CARACT_RIS': 'no label', });
lyr_Regards_Eclairagepublic_5.set('fieldLabels', {'ALTITUDE_1': 'no label', });
lyr_Regards_Eclairagepublic_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});