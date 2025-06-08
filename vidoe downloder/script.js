document.getElementById('downloadBtn').addEventListener('click', async function() {
    const url = document.getElementById('urlInput').value.trim();
    const messageDiv = document.getElementById('message');
    if (!url) {
        messageDiv.textContent = 'Please paste a YouTube video link.';
        messageDiv.style.color = 'orange';
        return;
    }
    messageDiv.textContent = 'Downloading... Please wait.';
    messageDiv.style.color = '#fff';
    try {
        const response = await fetch('/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        const result = await response.json();
        if (result.success) {
            messageDiv.textContent = 'Download started! Check your server folder.';
            messageDiv.style.color = 'lightgreen';
        } else {
            messageDiv.textContent = 'Error: ' + (result.error || 'Unknown error');
            messageDiv.style.color = 'red';
        }
    } catch (err) {
        messageDiv.textContent = 'Network error. Please try again.';
        messageDiv.style.color = 'red';
    }
}); 