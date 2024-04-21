var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DrainaseBanjarmasinTengah_2 = new ol.format.GeoJSON();
var features_DrainaseBanjarmasinTengah_2 = format_DrainaseBanjarmasinTengah_2.readFeatures(json_DrainaseBanjarmasinTengah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainaseBanjarmasinTengah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainaseBanjarmasinTengah_2.addFeatures(features_DrainaseBanjarmasinTengah_2);
var lyr_DrainaseBanjarmasinTengah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainaseBanjarmasinTengah_2, 
                style: style_DrainaseBanjarmasinTengah_2,
                popuplayertitle: "Drainase Banjarmasin Tengah",
                interactive: true,
    title: 'Drainase Banjarmasin Tengah<br />\
    <img src="styles/legend/DrainaseBanjarmasinTengah_2_0.png" /> Ada Drainase<br />\
    <img src="styles/legend/DrainaseBanjarmasinTengah_2_1.png" /> Tidak Ada Drainase dan Ada Bahu<br />\
    <img src="styles/legend/DrainaseBanjarmasinTengah_2_2.png" /> Tidak Ada Drainase dan Tidak Ada Bahu<br />'
        });
var format_DrainaseBanjarmasinSelatan_3 = new ol.format.GeoJSON();
var features_DrainaseBanjarmasinSelatan_3 = format_DrainaseBanjarmasinSelatan_3.readFeatures(json_DrainaseBanjarmasinSelatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainaseBanjarmasinSelatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainaseBanjarmasinSelatan_3.addFeatures(features_DrainaseBanjarmasinSelatan_3);
var lyr_DrainaseBanjarmasinSelatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainaseBanjarmasinSelatan_3, 
                style: style_DrainaseBanjarmasinSelatan_3,
                popuplayertitle: "Drainase Banjarmasin Selatan",
                interactive: true,
    title: 'Drainase Banjarmasin Selatan<br />\
    <img src="styles/legend/DrainaseBanjarmasinSelatan_3_0.png" /> Ada Drainase<br />\
    <img src="styles/legend/DrainaseBanjarmasinSelatan_3_1.png" /> Tidak Ada Drainase dan Ada Bahu<br />\
    <img src="styles/legend/DrainaseBanjarmasinSelatan_3_2.png" /> Tidak Ada Drainase dan Tidak Ada Bahu<br />'
        });
var format_DrainaseBanjarmasinUtara_4 = new ol.format.GeoJSON();
var features_DrainaseBanjarmasinUtara_4 = format_DrainaseBanjarmasinUtara_4.readFeatures(json_DrainaseBanjarmasinUtara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainaseBanjarmasinUtara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainaseBanjarmasinUtara_4.addFeatures(features_DrainaseBanjarmasinUtara_4);
var lyr_DrainaseBanjarmasinUtara_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainaseBanjarmasinUtara_4, 
                style: style_DrainaseBanjarmasinUtara_4,
                popuplayertitle: "Drainase Banjarmasin Utara",
                interactive: true,
    title: 'Drainase Banjarmasin Utara<br />\
    <img src="styles/legend/DrainaseBanjarmasinUtara_4_0.png" /> Ada Drainase<br />\
    <img src="styles/legend/DrainaseBanjarmasinUtara_4_1.png" /> Tidak Ada Drainase dan Ada Bahu<br />\
    <img src="styles/legend/DrainaseBanjarmasinUtara_4_2.png" /> Tidak Ada Drainase dan Tidak Ada Bahu<br />'
        });
var format_DrainaseBanjarmasinTimur_5 = new ol.format.GeoJSON();
var features_DrainaseBanjarmasinTimur_5 = format_DrainaseBanjarmasinTimur_5.readFeatures(json_DrainaseBanjarmasinTimur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainaseBanjarmasinTimur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainaseBanjarmasinTimur_5.addFeatures(features_DrainaseBanjarmasinTimur_5);
var lyr_DrainaseBanjarmasinTimur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainaseBanjarmasinTimur_5, 
                style: style_DrainaseBanjarmasinTimur_5,
                popuplayertitle: "Drainase Banjarmasin Timur",
                interactive: true,
    title: 'Drainase Banjarmasin Timur<br />\
    <img src="styles/legend/DrainaseBanjarmasinTimur_5_0.png" /> Ada Drainase<br />\
    <img src="styles/legend/DrainaseBanjarmasinTimur_5_1.png" /> Tidak Ada Drainase dan Ada Bahu<br />\
    <img src="styles/legend/DrainaseBanjarmasinTimur_5_2.png" /> Tidak Ada Drainase dan Tidak Ada Bahu<br />'
        });
var format_DrainaseBanjarmasinBarat_6 = new ol.format.GeoJSON();
var features_DrainaseBanjarmasinBarat_6 = format_DrainaseBanjarmasinBarat_6.readFeatures(json_DrainaseBanjarmasinBarat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainaseBanjarmasinBarat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainaseBanjarmasinBarat_6.addFeatures(features_DrainaseBanjarmasinBarat_6);
var lyr_DrainaseBanjarmasinBarat_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainaseBanjarmasinBarat_6, 
                style: style_DrainaseBanjarmasinBarat_6,
                popuplayertitle: "Drainase Banjarmasin Barat",
                interactive: true,
    title: 'Drainase Banjarmasin Barat<br />\
    <img src="styles/legend/DrainaseBanjarmasinBarat_6_0.png" /> Ada Drainase<br />\
    <img src="styles/legend/DrainaseBanjarmasinBarat_6_1.png" /> Ada Drainase (Parit)<br />\
    <img src="styles/legend/DrainaseBanjarmasinBarat_6_2.png" /> Tidak Ada Drainase dan Ada Bahu<br />\
    <img src="styles/legend/DrainaseBanjarmasinBarat_6_3.png" /> Tidak Ada Drainase dan Tidak Ada Bahu<br />'
        });
var format_BatasKelurahan_7 = new ol.format.GeoJSON();
var features_BatasKelurahan_7 = format_BatasKelurahan_7.readFeatures(json_BatasKelurahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_7.addFeatures(features_BatasKelurahan_7);
var lyr_BatasKelurahan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_7, 
                style: style_BatasKelurahan_7,
                popuplayertitle: "Batas Kelurahan",
                interactive: false,
                title: '<img src="styles/legend/BatasKelurahan_7.png" /> Batas Kelurahan'
            });
var format_BatasKecamatan_8 = new ol.format.GeoJSON();
var features_BatasKecamatan_8 = format_BatasKecamatan_8.readFeatures(json_BatasKecamatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_8.addFeatures(features_BatasKecamatan_8);
var lyr_BatasKecamatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_8, 
                style: style_BatasKecamatan_8,
                popuplayertitle: "Batas Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_8.png" /> Batas Kecamatan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DrainaseBanjarmasinTengah_2.setVisible(true);lyr_DrainaseBanjarmasinSelatan_3.setVisible(true);lyr_DrainaseBanjarmasinUtara_4.setVisible(true);lyr_DrainaseBanjarmasinTimur_5.setVisible(true);lyr_DrainaseBanjarmasinBarat_6.setVisible(true);lyr_BatasKelurahan_7.setVisible(true);lyr_BatasKecamatan_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_DrainaseBanjarmasinTengah_2,lyr_DrainaseBanjarmasinSelatan_3,lyr_DrainaseBanjarmasinUtara_4,lyr_DrainaseBanjarmasinTimur_5,lyr_DrainaseBanjarmasinBarat_6,lyr_BatasKelurahan_7,lyr_BatasKecamatan_8];
lyr_DrainaseBanjarmasinTengah_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Kel': 'Kel', 'Kondisi_KR': 'Kondisi_KR', 'Kondisi_KN': 'Kondisi_KN', 'Jenis_KR': 'Jenis_KR', 'Jenis_KN': 'Jenis_KN', 'Dimensi_KR': 'Dimensi_KR', 'Dimensi_KN': 'Dimensi_KN', 'Masalah_KR': 'Masalah_KR', 'Masalah_KN': 'Masalah_KN', 'Kondisi_At': 'Kondisi_At', 'Kondisi__1': 'Kondisi__1', 'Kondisi_Tu': 'Kondisi_Tu', 'Kondisi__2': 'Kondisi__2', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi__3': 'Kondisi__3', 'Permukaan_': 'Permukaan_', 'Permukaan1': 'Permukaan1', 'No_SK': 'No_SK', 'Tipe_KR': 'Tipe_KR', 'Tipe_KN': 'Tipe_KN', 'SHAPE_Leng': 'SHAPE_Leng', 'Status_Dra': 'Status_Dra', 'Sta_Awal': 'Sta_Awal', 'Sta_Akhir': 'Sta_Akhir', 'Simbol': 'Simbol', });
lyr_DrainaseBanjarmasinSelatan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Kel': 'Kel', 'Kondisi_KR': 'Kondisi_KR', 'Kondisi_KN': 'Kondisi_KN', 'Jenis_KR': 'Jenis_KR', 'Jenis_KN': 'Jenis_KN', 'Dimensi_KR': 'Dimensi_KR', 'Dimensi_KN': 'Dimensi_KN', 'Masalah_KR': 'Masalah_KR', 'Masalah_KN': 'Masalah_KN', 'Kondisi_At': 'Kondisi_At', 'Kondisi__1': 'Kondisi__1', 'Kondisi_Tu': 'Kondisi_Tu', 'Kondisi__2': 'Kondisi__2', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi__3': 'Kondisi__3', 'Permukaan_': 'Permukaan_', 'Permukaan1': 'Permukaan1', 'No_SK': 'No_SK', 'Tipe_KR': 'Tipe_KR', 'Tipe_KN': 'Tipe_KN', 'SHAPE_Leng': 'SHAPE_Leng', 'Status_Dra': 'Status_Dra', 'Sta_Awal': 'Sta_Awal', 'Sta_Akhir': 'Sta_Akhir', 'Simbol': 'Simbol', });
lyr_DrainaseBanjarmasinUtara_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Kel': 'Kel', 'Kondisi_KR': 'Kondisi_KR', 'Kondisi_KN': 'Kondisi_KN', 'Jenis_KR': 'Jenis_KR', 'Jenis_KN': 'Jenis_KN', 'Dimensi_KR': 'Dimensi_KR', 'Dimensi_KN': 'Dimensi_KN', 'Masalah_KR': 'Masalah_KR', 'Masalah_KN': 'Masalah_KN', 'Kondisi_At': 'Kondisi_At', 'Kondisi__1': 'Kondisi__1', 'Kondisi_Tu': 'Kondisi_Tu', 'Kondisi__2': 'Kondisi__2', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi__3': 'Kondisi__3', 'Permukaan_': 'Permukaan_', 'Permukaan1': 'Permukaan1', 'No_SK': 'No_SK', 'Tipe_KR': 'Tipe_KR', 'Tipe_KN': 'Tipe_KN', 'SHAPE_Leng': 'SHAPE_Leng', 'Status_Dra': 'Status_Dra', 'Sta_Awal': 'Sta_Awal', 'Sta_Akhir': 'Sta_Akhir', 'Simbol': 'Simbol', });
lyr_DrainaseBanjarmasinTimur_5.set('fieldAliases', {'Name': 'Name', 'Kel': 'Kel', 'Kondisi_KR': 'Kondisi_KR', 'Kondisi_KN': 'Kondisi_KN', 'Jenis_KR': 'Jenis_KR', 'Jenis_KN': 'Jenis_KN', 'Dimensi_KR': 'Dimensi_KR', 'Dimensi_KN': 'Dimensi_KN', 'Masalah_KR': 'Masalah_KR', 'Masalah_KN': 'Masalah_KN', 'Kondisi_At': 'Kondisi_At', 'Kondisi__1': 'Kondisi__1', 'Kondisi_Tu': 'Kondisi_Tu', 'Kondisi__2': 'Kondisi__2', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi__3': 'Kondisi__3', 'Permukaan_': 'Permukaan_', 'Permukaan1': 'Permukaan1', 'Tipe_KR': 'Tipe_KR', 'Tipe_KN': 'Tipe_KN', 'No_SK': 'No_SK', 'Status_Dra': 'Status_Dra', 'Sta_Awal': 'Sta_Awal', 'Sta_Akhir': 'Sta_Akhir', 'Simbol': 'Simbol', });
lyr_DrainaseBanjarmasinBarat_6.set('fieldAliases', {'Nomor': 'Nomor', 'Ruas_Jalan': 'Ruas_Jalan', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Pjg_Drain': 'Pjg_Drain', 'Kd_Drain': 'Kd_Drain', 'Jenis_Mate': 'Jenis_Mate', 'Ats_Sal_Ki': 'Ats_Sal_Ki', 'Ats_Sal_Ka': 'Ats_Sal_Ka', 'Dim_Sal_Ki': 'Dim_Sal_Ki', 'Dim_Sal_Ka': 'Dim_Sal_Ka', 'Sal_Kiri': 'Sal_Kiri', 'Sal_Kanan': 'Sal_Kanan', 'Ttp_Sal_Ki': 'Ttp_Sal_Ki', 'Ttp_Sal_Ka': 'Ttp_Sal_Ka', 'Kd_Bahu_Ki': 'Kd_Bahu_Ki', 'Kd_Bahu_Ka': 'Kd_Bahu_Ka', 'P_Bahu_Ki': 'P_Bahu_Ki', 'P_Bahu_Ka': 'P_Bahu_Ka', 'Nilai_Kd': 'Nilai_Kd', 'Range_Nila': 'Range_Nila', 'Pnganan': 'Pnganan', 'Krtr_Kond': 'Krtr_Kond', 'Keterangan': 'Keterangan', 'Simbol': 'Simbol', });
lyr_BatasKelurahan_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'geom_Lengt': 'geom_Lengt', 'geom_Area': 'geom_Area', 'Shape_Le_1': 'Shape_Le_1', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_BatasKecamatan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Shape_Leng': 'Shape_Leng', });
lyr_DrainaseBanjarmasinTengah_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Kel': 'TextEdit', 'Kondisi_KR': 'TextEdit', 'Kondisi_KN': 'TextEdit', 'Jenis_KR': 'TextEdit', 'Jenis_KN': 'TextEdit', 'Dimensi_KR': 'TextEdit', 'Dimensi_KN': 'TextEdit', 'Masalah_KR': 'TextEdit', 'Masalah_KN': 'TextEdit', 'Kondisi_At': 'TextEdit', 'Kondisi__1': 'TextEdit', 'Kondisi_Tu': 'TextEdit', 'Kondisi__2': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi__3': 'TextEdit', 'Permukaan_': 'TextEdit', 'Permukaan1': 'TextEdit', 'No_SK': 'TextEdit', 'Tipe_KR': 'Range', 'Tipe_KN': 'Range', 'SHAPE_Leng': 'TextEdit', 'Status_Dra': 'TextEdit', 'Sta_Awal': 'TextEdit', 'Sta_Akhir': 'TextEdit', 'Simbol': 'TextEdit', });
lyr_DrainaseBanjarmasinSelatan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Kel': 'TextEdit', 'Kondisi_KR': 'TextEdit', 'Kondisi_KN': 'TextEdit', 'Jenis_KR': 'TextEdit', 'Jenis_KN': 'TextEdit', 'Dimensi_KR': 'TextEdit', 'Dimensi_KN': 'TextEdit', 'Masalah_KR': 'TextEdit', 'Masalah_KN': 'TextEdit', 'Kondisi_At': 'TextEdit', 'Kondisi__1': 'TextEdit', 'Kondisi_Tu': 'TextEdit', 'Kondisi__2': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi__3': 'TextEdit', 'Permukaan_': 'TextEdit', 'Permukaan1': 'TextEdit', 'No_SK': 'TextEdit', 'Tipe_KR': 'Range', 'Tipe_KN': 'Range', 'SHAPE_Leng': 'TextEdit', 'Status_Dra': 'TextEdit', 'Sta_Awal': 'TextEdit', 'Sta_Akhir': 'TextEdit', 'Simbol': 'TextEdit', });
lyr_DrainaseBanjarmasinUtara_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Kel': 'TextEdit', 'Kondisi_KR': 'TextEdit', 'Kondisi_KN': 'TextEdit', 'Jenis_KR': 'TextEdit', 'Jenis_KN': 'TextEdit', 'Dimensi_KR': 'TextEdit', 'Dimensi_KN': 'TextEdit', 'Masalah_KR': 'TextEdit', 'Masalah_KN': 'TextEdit', 'Kondisi_At': 'TextEdit', 'Kondisi__1': 'TextEdit', 'Kondisi_Tu': 'TextEdit', 'Kondisi__2': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi__3': 'TextEdit', 'Permukaan_': 'TextEdit', 'Permukaan1': 'TextEdit', 'No_SK': 'TextEdit', 'Tipe_KR': 'Range', 'Tipe_KN': 'Range', 'SHAPE_Leng': 'TextEdit', 'Status_Dra': 'TextEdit', 'Sta_Awal': 'TextEdit', 'Sta_Akhir': 'TextEdit', 'Simbol': 'TextEdit', });
lyr_DrainaseBanjarmasinTimur_5.set('fieldImages', {'Name': 'TextEdit', 'Kel': 'TextEdit', 'Kondisi_KR': 'TextEdit', 'Kondisi_KN': 'TextEdit', 'Jenis_KR': 'TextEdit', 'Jenis_KN': 'TextEdit', 'Dimensi_KR': 'TextEdit', 'Dimensi_KN': 'TextEdit', 'Masalah_KR': 'TextEdit', 'Masalah_KN': 'TextEdit', 'Kondisi_At': 'TextEdit', 'Kondisi__1': 'TextEdit', 'Kondisi_Tu': 'TextEdit', 'Kondisi__2': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi__3': 'TextEdit', 'Permukaan_': 'TextEdit', 'Permukaan1': 'TextEdit', 'Tipe_KR': 'Range', 'Tipe_KN': 'Range', 'No_SK': 'TextEdit', 'Status_Dra': 'TextEdit', 'Sta_Awal': 'TextEdit', 'Sta_Akhir': 'TextEdit', 'Simbol': 'TextEdit', });
lyr_DrainaseBanjarmasinBarat_6.set('fieldImages', {'Nomor': 'TextEdit', 'Ruas_Jalan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Pjg_Drain': 'TextEdit', 'Kd_Drain': 'TextEdit', 'Jenis_Mate': 'TextEdit', 'Ats_Sal_Ki': 'TextEdit', 'Ats_Sal_Ka': 'TextEdit', 'Dim_Sal_Ki': 'TextEdit', 'Dim_Sal_Ka': 'TextEdit', 'Sal_Kiri': 'TextEdit', 'Sal_Kanan': 'TextEdit', 'Ttp_Sal_Ki': 'TextEdit', 'Ttp_Sal_Ka': 'TextEdit', 'Kd_Bahu_Ki': 'TextEdit', 'Kd_Bahu_Ka': 'TextEdit', 'P_Bahu_Ki': 'TextEdit', 'P_Bahu_Ka': 'TextEdit', 'Nilai_Kd': 'TextEdit', 'Range_Nila': 'TextEdit', 'Pnganan': 'TextEdit', 'Krtr_Kond': 'TextEdit', 'Keterangan': 'TextEdit', 'Simbol': 'TextEdit', });
lyr_BatasKelurahan_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'KDPKAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'geom_Lengt': 'TextEdit', 'geom_Area': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Clamped': 'TextEdit', 'Extruded': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasKecamatan_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_DrainaseBanjarmasinTengah_2.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Kel': 'inline label - visible with data', 'Kondisi_KR': 'inline label - visible with data', 'Kondisi_KN': 'inline label - visible with data', 'Jenis_KR': 'inline label - visible with data', 'Jenis_KN': 'inline label - visible with data', 'Dimensi_KR': 'inline label - visible with data', 'Dimensi_KN': 'inline label - visible with data', 'Masalah_KR': 'inline label - visible with data', 'Masalah_KN': 'inline label - visible with data', 'Kondisi_At': 'inline label - visible with data', 'Kondisi__1': 'inline label - visible with data', 'Kondisi_Tu': 'inline label - visible with data', 'Kondisi__2': 'inline label - visible with data', 'Kondisi_Ba': 'inline label - visible with data', 'Kondisi__3': 'inline label - visible with data', 'Permukaan_': 'inline label - visible with data', 'Permukaan1': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Tipe_KR': 'inline label - visible with data', 'Tipe_KN': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'Status_Dra': 'inline label - visible with data', 'Sta_Awal': 'inline label - visible with data', 'Sta_Akhir': 'inline label - visible with data', 'Simbol': 'inline label - visible with data', });
lyr_DrainaseBanjarmasinSelatan_3.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Kel': 'inline label - visible with data', 'Kondisi_KR': 'inline label - visible with data', 'Kondisi_KN': 'inline label - visible with data', 'Jenis_KR': 'inline label - visible with data', 'Jenis_KN': 'inline label - visible with data', 'Dimensi_KR': 'inline label - visible with data', 'Dimensi_KN': 'inline label - visible with data', 'Masalah_KR': 'inline label - visible with data', 'Masalah_KN': 'inline label - visible with data', 'Kondisi_At': 'inline label - visible with data', 'Kondisi__1': 'inline label - visible with data', 'Kondisi_Tu': 'inline label - visible with data', 'Kondisi__2': 'inline label - visible with data', 'Kondisi_Ba': 'inline label - visible with data', 'Kondisi__3': 'inline label - visible with data', 'Permukaan_': 'inline label - visible with data', 'Permukaan1': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Tipe_KR': 'inline label - visible with data', 'Tipe_KN': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'Status_Dra': 'inline label - visible with data', 'Sta_Awal': 'inline label - visible with data', 'Sta_Akhir': 'inline label - visible with data', 'Simbol': 'inline label - visible with data', });
lyr_DrainaseBanjarmasinUtara_4.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Kel': 'inline label - visible with data', 'Kondisi_KR': 'inline label - visible with data', 'Kondisi_KN': 'inline label - visible with data', 'Jenis_KR': 'inline label - visible with data', 'Jenis_KN': 'inline label - visible with data', 'Dimensi_KR': 'inline label - visible with data', 'Dimensi_KN': 'inline label - visible with data', 'Masalah_KR': 'inline label - visible with data', 'Masalah_KN': 'inline label - visible with data', 'Kondisi_At': 'inline label - visible with data', 'Kondisi__1': 'inline label - visible with data', 'Kondisi_Tu': 'inline label - visible with data', 'Kondisi__2': 'inline label - visible with data', 'Kondisi_Ba': 'inline label - visible with data', 'Kondisi__3': 'inline label - visible with data', 'Permukaan_': 'inline label - visible with data', 'Permukaan1': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Tipe_KR': 'inline label - visible with data', 'Tipe_KN': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'Status_Dra': 'inline label - visible with data', 'Sta_Awal': 'inline label - visible with data', 'Sta_Akhir': 'inline label - visible with data', 'Simbol': 'inline label - visible with data', });
lyr_DrainaseBanjarmasinTimur_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'Kel': 'inline label - visible with data', 'Kondisi_KR': 'inline label - visible with data', 'Kondisi_KN': 'inline label - visible with data', 'Jenis_KR': 'inline label - visible with data', 'Jenis_KN': 'inline label - visible with data', 'Dimensi_KR': 'inline label - visible with data', 'Dimensi_KN': 'inline label - visible with data', 'Masalah_KR': 'inline label - visible with data', 'Masalah_KN': 'inline label - visible with data', 'Kondisi_At': 'inline label - visible with data', 'Kondisi__1': 'inline label - visible with data', 'Kondisi_Tu': 'inline label - visible with data', 'Kondisi__2': 'inline label - visible with data', 'Kondisi_Ba': 'inline label - visible with data', 'Kondisi__3': 'inline label - visible with data', 'Permukaan_': 'inline label - visible with data', 'Permukaan1': 'inline label - visible with data', 'Tipe_KR': 'inline label - visible with data', 'Tipe_KN': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Status_Dra': 'inline label - visible with data', 'Sta_Awal': 'inline label - visible with data', 'Sta_Akhir': 'inline label - visible with data', 'Simbol': 'inline label - visible with data', });
lyr_DrainaseBanjarmasinBarat_6.set('fieldLabels', {'Nomor': 'inline label - visible with data', 'Ruas_Jalan': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Pjg_Drain': 'inline label - visible with data', 'Kd_Drain': 'inline label - visible with data', 'Jenis_Mate': 'inline label - visible with data', 'Ats_Sal_Ki': 'inline label - visible with data', 'Ats_Sal_Ka': 'inline label - visible with data', 'Dim_Sal_Ki': 'inline label - visible with data', 'Dim_Sal_Ka': 'inline label - visible with data', 'Sal_Kiri': 'inline label - visible with data', 'Sal_Kanan': 'inline label - visible with data', 'Ttp_Sal_Ki': 'inline label - visible with data', 'Ttp_Sal_Ka': 'inline label - visible with data', 'Kd_Bahu_Ki': 'inline label - visible with data', 'Kd_Bahu_Ka': 'inline label - visible with data', 'P_Bahu_Ki': 'inline label - visible with data', 'P_Bahu_Ka': 'inline label - visible with data', 'Nilai_Kd': 'inline label - visible with data', 'Range_Nila': 'inline label - visible with data', 'Pnganan': 'inline label - visible with data', 'Krtr_Kond': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Simbol': 'inline label - visible with data', });
lyr_BatasKelurahan_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'KDPKAB': 'no label', 'SHAPE_Leng': 'no label', 'geom_Lengt': 'no label', 'geom_Area': 'no label', 'Shape_Le_1': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_BatasKecamatan_8.set('fieldLabels', {'OBJECTID': 'no label', 'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'Shape_Leng': 'no label', });
lyr_BatasKecamatan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});