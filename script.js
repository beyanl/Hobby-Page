const timeElement = document.getElementById("current-time");

function updateTime() {
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    
    };
        timeElement.innerText = now.toLocaleString("en-GB", options);

}

setInterval(updateTime, 1000);