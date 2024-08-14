function myFunction() {
    let x = document.getElementById("myTextarea").value;
    let y = x.split("track/")[1]

    let ifram = `<iframe id="spotify" width="100%" height="80" frameborder="0" allowfullscreen="" data-src="https://open.spotify.com/embed/track/${y}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
                 document.getElementById("demo").innerHTML = ifram;
                document.getElementById("demo1").innerHTML = ifram;
}