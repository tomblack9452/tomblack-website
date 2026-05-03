// Light/dark mode toggle
document.querySelector('.lightDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('i').classList.toggle('fa-sun');
    this.querySelector('i').classList.toggle('fa-moon');
    
    // Change CSS variables for dark/light mode
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#cfcfcf');
        document.documentElement.style.setProperty('--card-color', '#2b2b2b');
    } else {
        document.documentElement.style.setProperty('--background-color', '#fcfcfc');
        document.documentElement.style.setProperty('--text-color', '#696969');
        document.documentElement.style.setProperty('--card-color', '#eee');
    }
});


// Toggle open functions for experience cards
function card1Toggle() {
  var x = document.getElementById("card1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function card2Toggle() {
  var x = document.getElementById("card2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function card3Toggle() {
  var x = document.getElementById("card3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function card4Toggle() {
  var x = document.getElementById("card4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function moreVideosToggle() {
  var x = document.getElementById("moreVideos");
  var btn = event.currentTarget;
  if (x.style.display === "block") {
    x.style.display = "none";
    btn.querySelector("i").style.transform = "rotate(0deg)";
  } else {
    x.style.display = "block";
    btn.querySelector("i").style.transform = "rotate(180deg)";
  }
}

// Set active video and update main display with corresponding info
function setActive(thumbEl, src, title, desc, ytUrl, spUrl) {
  document.querySelectorAll('.carouselThumb').forEach(t => {
    t.classList.remove('active');
    t.querySelector('video').pause();
  });
  thumbEl.classList.add('active');
  thumbEl.querySelector('video').play();

  var mainVideo = document.getElementById('mainVideo');
  var mainSrc = document.getElementById('mainVideoSrc');
  mainSrc.src = src;
  mainVideo.load();
  mainVideo.play();

  document.getElementById('mainTitle').textContent = title;
  document.getElementById('mainDesc').textContent = desc;
  document.getElementById('mainYt').innerHTML = '<i class="fa-brands fa-youtube"></i><a href="' + ytUrl + '" target="_blank">YouTube</a>';
  document.getElementById('mainSp').innerHTML = '<i class="fa-brands fa-spotify"></i><a href="' + spUrl + '" target="_blank">Spotify</a>';
}

document.querySelectorAll('.carouselThumb').forEach(function(thumb) {
  thumb.addEventListener('mouseenter', function() { this.querySelector('video').play(); });
  thumb.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) this.querySelector('video').pause();
  });
});

// Play the initially-active thumbnail on load
document.addEventListener('DOMContentLoaded', function() {
    var activeThumb = document.querySelector('.carouselThumb.active');
    if (activeThumb) {
        activeThumb.querySelector('video').play();
    }
});