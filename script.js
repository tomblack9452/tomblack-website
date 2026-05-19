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

// Set active carousel item and update main display with corresponding info
function setActive(thumbEl) {
  var carousel = thumbEl.closest('[data-carousel]');
  if (!carousel) return;

  carousel.querySelectorAll('.carouselThumb').forEach(function(t) {
    t.classList.remove('active');
    var thumbVideo = t.querySelector('video');
    if (thumbVideo) thumbVideo.pause();
  });

  thumbEl.classList.add('active');
  var thumbVideo = thumbEl.querySelector('video');
  if (thumbVideo) thumbVideo.play();

  var section = carousel.dataset.carousel;
  var mediaType = thumbEl.dataset.mediaType || 'image';
  var src = thumbEl.dataset.src;
  var title = thumbEl.dataset.title || '';
  var desc = thumbEl.dataset.desc || '';
  var link1 = thumbEl.dataset.link1 || '';
  var label1 = thumbEl.dataset.label1 || '';
  var icon1 = thumbEl.dataset.icon1 || '';
  var link2 = thumbEl.dataset.link2 || '';
  var label2 = thumbEl.dataset.label2 || '';
  var icon2 = thumbEl.dataset.icon2 || '';

  var mainImage = document.getElementById(section + 'MainImage');
  var mainVideo = document.getElementById(section + 'MainVideo');
  var mainVideoSrc = document.getElementById(section + 'MainVideoSrc');
  var titleEl = document.getElementById(section + 'MainTitle');
  var descEl = document.getElementById(section + 'MainDesc');
  var linkEl1 = document.getElementById(section + 'MainYt');
  var linkEl2 = document.getElementById(section + 'MainSp');

  if (mediaType === 'video') {
    if (mainImage) mainImage.style.display = 'none';
    if (mainVideo) {
      mainVideo.style.display = 'block';
      if (mainVideoSrc) mainVideoSrc.src = src;
      mainVideo.load();
      mainVideo.play();
    }
  } else {
    if (mainVideo) mainVideo.style.display = 'none';
    if (mainImage) {
      mainImage.style.display = 'block';
      mainImage.src = src;
    }
  }

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  if (linkEl1) {
    if (link1) {
      linkEl1.innerHTML = '<i class="' + icon1 + '"></i><a href="' + link1 + '" target="_blank">' + label1 + '</a>';
      linkEl1.style.display = '';
    } else {
      linkEl1.innerHTML = '';
      linkEl1.style.display = 'none';
    }
  }

  if (linkEl2) {
    if (link2) {
      linkEl2.innerHTML = '<i class="' + icon2 + '"></i><a href="' + link2 + '" target="_blank">' + label2 + '</a>';
      linkEl2.style.display = '';
    } else {
      linkEl2.innerHTML = '';
      linkEl2.style.display = 'none';
    }
  }
}

document.querySelectorAll('.carouselThumb').forEach(function(thumb) {
  thumb.addEventListener('click', function() { setActive(this); });
  var hoverVideo = thumb.querySelector('video');
  if (hoverVideo) {
    thumb.addEventListener('mouseenter', function() { hoverVideo.play(); });
    thumb.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) hoverVideo.pause();
    });
  }
});

// Initialize each carousel with its active item
function initializeCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(function(carousel) {
    var activeThumb = carousel.querySelector('.carouselThumb.active') || carousel.querySelector('.carouselThumb');
    if (activeThumb) setActive(activeThumb);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCarousels);
} else {
  initializeCarousels();
}