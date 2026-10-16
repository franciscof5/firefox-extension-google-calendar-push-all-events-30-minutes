document.getElementById('btn-empurrar').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  statusDiv.innerText = "A atualizar agenda...";
  statusDiv.style.color = "#555";

  // A sua URL do Google Apps Script
  const URL_DO_WEB_APP = 'https://script.google.com/macros/s/AKfycbwUN2rFIPrjlYFlH-SmPakPAaCRGVl7Um155gn5SIble4DmCbvZoaQdPy2zjdqEAdJQKA/exec';

  try {
    const response = await fetch(URL_DO_WEB_APP);
    if (response.ok) {
      statusDiv.innerText = "Sucesso! Agenda atualizada.";
      statusDiv.style.color = "green";
    } else {
      statusDiv.innerText = "Erro na resposta do Google.";
      statusDiv.style.color = "red";
    }
  } catch (error) {
    statusDiv.innerText = "Erro ao conectar.";
    statusDiv.style.color = "red";
    console.error(error);
  }
});