function updateTitleWithTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString(); // Format as hh:mm:ss AM/PM
    document.title = formattedTime;
}

updateTitleWithTime();
setInterval(updateTitleWithTime, 1000);
