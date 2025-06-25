const files = [
  {
    name: "Travis Vasquez Portfolio Reel",
    path: "VIDEO/T_Vasquez_Portfolio.mp4"
  },
  {
    name: "Concord Trailor Teaser",
    path: "VIDEO/Concord - Teaser Trailer PS5 PC Games (1080p).mp4"
  },
  {
    name: "Travis Vasquez CV 2025",
    path: "assets/Vasquez_T_CV_2025.pdf"
  }
];

const container = document.getElementById('file-list');

files.forEach(file => {
  const link = document.createElement('a');
  link.href = file.path;
  link.download = '';
  link.textContent = `Download: ${file.name}`;
  link.className = 'download-link';

  const div = document.createElement('div');
  div.appendChild(link);

  container.appendChild(div);
});
