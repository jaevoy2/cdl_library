const API_URL = 'http://172.20.10.7:8000/api/books';

export async function getQrValue(bookId: number) {
  try {
    const res = await fetch(`${API_URL}/${bookId}/qr`);
    const data = await res.json();
    return data.qr_value;
  } catch (err) {
    console.error('Error fetching QR value:', err);
    return null;
  }
}

export async function getBookData(bookId: number) {
  try {
    const res = await fetch(`${API_URL}/${bookId}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error('Error fetching book data:', err);
    return null;
  }
}