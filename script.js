document.getElementById('logo').addEventListener('click', function() {
    var logo = document.getElementById('logo');
    var audio = document.getElementById('cheerleader');
    var lyrics = document.getElementById('lyrics');
    var overlay = document.getElementById('overlay');

    // Lirik lagu Cheerleader
    var lyricsData = [
        { time: 0, text: "turn it up baby" },
        { time: 1.5, text: "she gives me love and affection" },
        { time: 5, text: "Baby, did I mention" },
        { time: 7.10, text: "You're the only girl for me" },
        { time: 9.23, text: "No, I don't need a next one" },
        { time: 12.08, text: "Mama loves you too" },
        { time: 14, text: "She thinks I made the right selection" },
        { time: 16.20, text: "Now all that's left to do" },
        { time: 18.23, text: "Is just for me to pop the question" },
        { time: 22.05, text: "Oh, I think that I found myself a cheerleader" },
        { time: 27.19, text: "She is always right there when I need her" },
        { time: 31.18, text: "Oh, I think that I found myself a cheerleader" },
        { time: 37.02, text: "She is always right there when I need her" },
    ];

    logo.style.display = 'none';
    overlay.classList.add('active');
    lyrics.style.display = 'block';

    audio.play();
    
    lyricsData.forEach(function(line) {
        setTimeout(function() {
            lyrics.textContent = line.text;
        }, line.time * 1000);
    });
    
    audio.onended = function() {
        lyrics.style.display = 'none';
        overlay.classList.remove('active');
        setTimeout(function() {
            logo.style.display = 'block';
        }, 500);
    };
});