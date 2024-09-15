document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    let output = '';
    for (const key in data) {
      if (data.hasOwnProperty(key) && key !== 'name' && key !== 'email') {
        output += `${key.replace(/([A-Z])/g, ' $1')}: ${data[key]}\n`;
      }
    }

    document.open();
    document.write('<pre>' + output + '</pre>');
    document.close();
  });
});
