const inf = document.querySelector('.inf')
onload = () =>{
    let geo = navigator.geolocation;
    const geoCoords = function(p){
        console.log(p)
        let lat = p.coords.latitude;
        let long = p.coords.longitude;
        let timestamp = p.timestamp;  
        inf.innerHTML = `Latitude: ${lat}, Longitude: ${long}`
    }
    
    function geoError(e){
        switch(e.code){
            case e.TIMEOUT:
                console.log('Limite de tempo para localização');
            case e.POSITTION_UNAVAILABLE:
                console.log('LOCALIZAÇÃO NÃO DISPONÍVEL');
            case e.PERMISSION_DENIED:
                console.log('LOCALIZAÇÃO NÃO PERMITIDA');
            break;
            default:
                alert(`Erro na geolicalização. Código: ${e.code}`);
        }
    }
    geo.getCurrentPosition(geoCoords, geoError)
    // let watchID = geo.watchPosition(geoCoords, geoError) // para obter a localizção de objeto em movimento (continuo)
    // stWatch.onclick = ()=>{
    //     console.log(watchID);
    //     geo.clearWatch(watchID),
    // }

};