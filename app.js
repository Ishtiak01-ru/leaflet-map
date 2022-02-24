var map = L.map('map').setView([23.16153, 89.22362], 12);

	var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

    coords = [[ 23.1607054, 89.2231719 ], [23.1689124, 89.2090257], [23.1455144, 89.2316841], [23.1991464, 89.2534446], [23.1268795, 89.2896549], [23.1774498, 89.2652892]]
	rent = ['850 $','450 $','550 $','150 $','950 $','750 $'];
    areas = ["80 m2","50 m2","35 m2","60 m2","70 m2","25 m2"]
    rooms = [4,2,1,3,4,1]
    images = ["img/a1.jpg","img/a2.jpg","img/a3.jpg","img/a4.jpg","img/a5.jpg","img/6.jpg",]
    let l = coords.length;


    var appart1 = document.querySelector('#appart1');
    var appart2 = document.querySelector('#appart2');
    var appart3 = document.querySelector('#appart3');
    var appart4 = document.querySelector('#appart4');
    var appart5 = document.querySelector('#appart5');
    var appart6 = document.querySelector('#appart6'); 

    apparts =[ appart1, appart2 , appart3 , appart4 , appart5 , appart6 ]

    for (let i = 0; i < coords.length; i++) {
       
        //popup
        var pop = L.popup({
            closeOnClick: true
        }).setContent('<h4>Area' + areas[i] + '<br>Rooms: ' + rooms[i] + '</h4> <img src=' + images[i] + ' style="height: 100px">') ;
       
    
        //marker
        var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);
        
        //circle
        var circle = L.circle([23.1029164, 89.1007153], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: 5000
        }).addTo(map);
       
      
       
        //zomm in fly to 

        apparts[i].addEventListener("mouseover", ()=> {
            map.flyTo(coords[i],15)
        })
    }
