async function sendPrompt() {
    const prompt = document.getElementById('prompt').value;
    const responseElement = document.getElementById('response');

    if (!prompt) {
        responseElement.innerText = 'Por favor, digite uma pergunta.';
        return;
    }

    try {
        const response = await fetch('https://your-project-name.glitch.me/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const result = await response.text();
        responseElement.innerText = result;
    } catch (error) {
        responseElement.innerText = 'Erro ao enviar a pergunta.';
    }
}
