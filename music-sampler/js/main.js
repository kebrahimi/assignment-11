const img1 = document.querySelector('.album1 img');
const img2 = document.querySelector('.album2 img');
const img3 = document.querySelector('.album3 img');
const img4 = document.querySelector('.album4 img');

const audio1 = document.querySelector('.album1 audio');
const audio2 = document.querySelector('.album2 audio');
const audio3 = document.querySelector('.album3 audio');
const audio4 = document.querySelector('.album4 audio');

const songTitle1 = document.querySelector('.album1 p');
const songTitle2 = document.querySelector('.album2 p');
const songTitle3 = document.querySelector('.album3 p');
const songTitle4 = document.querySelector('.album4 p');

audio2.style.visibility = "hidden";
audio3.style.visibility = "hidden";
audio4.style.visibility = "hidden";

songTitle2.style.visibility = "hidden";
songTitle3.style.visibility = "hidden";
songTitle4.style.visibility = "hidden";

img1.onclick = (e) => {
    selectSong(e.target);
}

img2.onclick = (e) => {
    selectSong(e.target);
}

img3.onclick = (e) => {
    selectSong(e.target);
}

img4.onclick = (e) => {
    selectSong(e.target);
}

function selectSong(img) {
    switch (img) {
        case img1:
            audio1.style.visibility = "visible";
            audio2.style.visibility = "hidden";
            audio2.pause();
            audio3.style.visibility = "hidden";
            audio3.pause();
            audio4.style.visibility = "hidden";
            audio4.pause();

            songTitle1.style.visibility = "visible";
            songTitle2.style.visibility = "hidden";
            songTitle3.style.visibility = "hidden";
            songTitle4.style.visibility = "hidden";
            break;
        case img2:
            audio1.style.visibility = "hidden";
            audio1.pause();
            audio2.style.visibility = "visible";
            audio3.style.visibility = "hidden";
            audio3.pause();
            audio4.style.visibility = "hidden";
            audio4.pause();

            songTitle1.style.visibility = "hidden";
            songTitle2.style.visibility = "visible";
            songTitle3.style.visibility = "hidden";
            songTitle4.style.visibility = "hidden";
            break;
        case img3:
            audio1.style.visibility = "hidden";
            audio1.pause();
            audio2.style.visibility = "hidden";
            audio2.pause();
            audio3.style.visibility = "visible";
            audio4.style.visibility = "hidden";
            audio4.pause();

            songTitle1.style.visibility = "hidden";
            songTitle2.style.visibility = "hidden";
            songTitle3.style.visibility = "visible";
            songTitle4.style.visibility = "hidden";
            break;
        case img4:
            audio1.style.visibility = "hidden";
            audio1.pause();
            audio2.style.visibility = "hidden";
            audio2.pause();
            audio3.style.visibility = "hidden";
            audio3.pause();
            audio4.style.visibility = "visible";

            songTitle1.style.visibility = "hidden";
            songTitle2.style.visibility = "hidden";
            songTitle3.style.visibility = "hidden";
            songTitle4.style.visibility = "visible";
            break;
        default:
            break;
    }
}
