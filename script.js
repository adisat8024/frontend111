async function submitData() {
    const input = document.getElementById('jsonInput').value;
    try {
        const data = JSON.parse(input);
        const response = await fetch('https://fullstack-challenge-bajaj.vercel.app/bfhl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        renderResponse(result);
    } catch (error) {
        //alert('Invalid JSON input!');
        alert(error);
    }
}

function renderResponse(result) {
    const select = document.getElementById('responseSelect');
    const output = document.getElementById('responseOutput');
    output.innerHTML = '';

    Array.from(select.selectedOptions).forEach(option => {
        output.innerHTML += <p><strong>${option.text}:</strong> ${JSON.stringify(result[option.value])}</p>;
    });
}