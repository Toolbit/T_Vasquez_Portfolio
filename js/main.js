const files = [
  {
    name: "Travis Vasquez Portfolio Reel",
    path: "VIDEO/T_Vasquez_Portfolio.mp4",
	image: "assets/img_rl.jpg"
  },
  {
    name: "Concord Trailor Teaser",
    path: "VIDEO/Concord - Teaser Trailer PS5 PC Games (1080p).mp4",
	image: "assets/img_ts.jpg"
  },
  {
    name: "Travis Vasquez CV 2025",
    path: "assets/Vasquez_T_CV_2025.pdf",
	image: "assets/img_cv.jpg"
  }
];

const container = document.getElementById('file-list');

files.forEach(file => {
  const card = document.createElement('div');
  card.className = 'file-card';

  const img = document.createElement('img');
  img.src = file.image;
  img.alt = `${file.name} preview`;
  img.className = 'file-image';

  const link = document.createElement('a');
  link.href = file.path;
  link.download = '';
  link.textContent = `Download: ${file.name}`;
  link.className = 'download-link';

  card.appendChild(img);
  card.appendChild(link);
  container.appendChild(card);
});