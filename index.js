var containerRef;
var dataBuffer = []; //buffer
var sendDataInterval = 5000;

function handleMouseMove(event) {
    console.log("handleMouseMove")
    dataBuffer.push({
        x: event.clientX,
        y: event.clientY,
        value: 1,
    });
}

function handleClick(event) {
    console.log("handleClick")
    dataBuffer.push({
        x: event.clientX,
        y: event.clientY,
        value: 100,
    });
}

function handleTouchStart(event) {
    console.log("handleTouchStart")
    dataBuffer.push({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
        value: 1,
    });
}

function handleTouchMove(event) {
    console.log("handleTouchMove")
    dataBuffer.push({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
        value: 1,
    });
}

function handleTouchEnd(event) {
    console.log("handleTouchEnd")
    dataBuffer.push({
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY,
        value: 100,
    });
}

function sendDataToEndpoint() {
    console.log("sendDataToEndpoint")
    if (dataBuffer.length > 0) {
        console.log(dataBuffer);
        var endpoint = 'YOUR_ENDPOINT_URL'; 
        var http = new XMLHttpRequest();
        http.open('POST', endpoint, true);
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(dataBuffer));
        dataBuffer = []; //Clean buffer
    }
}

window.onload = function() {
    containerRef = document.body;
    console.log('funcinou !')
    containerRef.addEventListener('mousemove', handleMouseMove);
    containerRef.addEventListener('click', handleClick);
    containerRef.addEventListener('touchstart', handleTouchStart);
    containerRef.addEventListener('touchmove', handleTouchMove);
    containerRef.addEventListener('touchend', handleTouchEnd);

    setInterval(sendDataToEndpoint, sendDataInterval); //  await 5 seconds for buffer
}
