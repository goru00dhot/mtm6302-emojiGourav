const emojis = ["😀", "😂", "😍", "🥳", "😎", "🤔", "😢", "😴", "🤖", "🌟"];
const gallery = document.getElementById('gallery');

emojis.forEach(emoji => {
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.className = 'emoji';
    emojiElement.addEventListener('click', () => {
        alert(`You clicked on: ${emoji}`);
    });
    gallery.appendChild(emojiElement);
});
