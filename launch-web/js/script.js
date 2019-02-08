console.log('Starting js...');

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/api/launches', true);

request.onload = function () {
    const launchDataDiv = document.getElementById('launch-data');

    var launchData = JSON.parse(this.response);

    launchData.forEach(event => {
        console.log(event.name);

        const launchEventDiv = document.createElement('div');
        launchEventDiv.setAttribute('class', 'launch-event');
        launchDataDiv.appendChild(launchEventDiv);
        
        const launchName = document.createElement('h2');
        if (event.url) {
            const launchNameHref = document.createElement('a');
            launchNameHref.setAttribute('href', event.url);
            launchNameHref.textContent = event.name;
            launchName.appendChild(launchNameHref);
        } else {
            launchName.textContent = event.name;
        }
        launchEventDiv.appendChild(launchName);

        const launchDetailsList = document.createElement('ul');
        launchEventDiv.appendChild(launchDetailsList);
        
        const launchAgency = document.createElement('li');
        launchAgency.textContent = 'Agency: ';
        if (event.agency.url) {
            const launchAgencyHref = document.createElement('a');
            launchAgencyHref.setAttribute('href', event.agency.url);
            launchAgencyHref.textContent = event.agency.name;
            launchAgency.appendChild(launchAgencyHref);
        } else {
            launchAgency.textContent += event.agency.name;
        }
        launchDetailsList.appendChild(launchAgency);

        const launchLocation = document.createElement('li');
        launchLocation.textContent = 'Location: ';
        if (event.location.url) {
            const launchLocationHref = document.createElement('a');
            launchLocationHref.setAttribute('href', event.location.url);
            launchLocation.appendChild(launchLocationHref);
        } else {
            launchLocation.textContent += event.location.name;  
        } 
        launchDetailsList.appendChild(launchLocation);

        const launchTime = document.createElement('li');
        launchTime.textContent = 'Time: ' + event.time;
        launchDetailsList.appendChild(launchTime);
      });
}

// Send request
request.send(); 