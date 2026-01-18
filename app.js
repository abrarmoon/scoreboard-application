let runs = 145;
let wickets = 4;
let balls = 111; // 18.3 overs

function updateUI() {
    document.getElementById("runs").innerText = runs;
    document.getElementById("wickets").innerText = wickets;

    let o = Math.floor(balls / 6);
    let b = balls % 6;
    document.getElementById("overs").innerText = o + "." + b;
}

function addRun(r) {
    runs += r;
    balls++;
    updateUI();
}

function addWicket() {
    wickets++;
    balls++;
    updateUI();
}

updateUI();
