document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('secure-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
      return alert('Fill out all fields!');
    }

    try {
      const response = await fetch('http://localhost:5000/api/secure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();
      alert(result.message || 'Success');
    } catch (err) {
      console.error(err);
      alert('Error contacting server.');
    }
  });
});
