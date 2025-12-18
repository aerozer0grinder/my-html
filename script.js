const DISCORD_ID = "1256196862130651220"; // Replace with your numerical ID

function enterSite() {
    document.getElementById('splash').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('bg-video').play();
        document.getElementById('bg-music').play();
    }, 500);
}

// Update Discord Activity
async function getPresence() {
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const { data } = await response.json();
        
        const statusText = document.getElementById('status-text');
        if (data.activities.length > 0) {
            statusText.innerText = `Playing ${data.activities[0].name}`;
        } else {
            statusText.innerText = "No current activity";
        }
    } catch (err) { console.error("Lanyard Error:", err); }
}

setInterval(getPresence, 10000);
getPresence();

function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('play-btn');
    if (music.paused) {
        music.play();
        btn.classList.replace('fa-play', 'fa-pause');
    } else {
        music.pause();
        btn.classList.replace('fa-pause', 'fa-play');
    }
}

function toggleGame() {
    document.getElementById('game-modal').classList.toggle('hidden');
}