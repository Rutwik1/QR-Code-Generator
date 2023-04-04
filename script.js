const generateBtn = document.getElementById('generate-btn');
const qrCode = document.getElementById('qr-code');
const textInput = document.getElementById('text-input');

generateBtn.addEventListener('click', async () => {
  try {
    const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + textInput.value;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to generate QR code');
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    qrCode.innerHTML = `<img src="${imageUrl}" alt="QR code"/>`;
  } catch (error) {
    console.error(error);
    alert('Failed to generate QR code');
  }
});
