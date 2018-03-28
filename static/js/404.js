var blocks = document.querySelectorAll('.hello-world');
for (var i = 0; i < blocks.length; i++) {
  blocks[i].classList.add('hidden');
}
var block = blocks[Math.floor(Math.random() * blocks.length)];
block.classList.remove('hidden');