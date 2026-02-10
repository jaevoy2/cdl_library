import Constants from 'expo-constants';

export async function getBookCopies(barcode: string) {
  const extras = Constants.expoConfig?.extra ?? {};

  // const API_URL = extras.API_URL as string;
  const API_URL = 'http://192.168.100.253:8000/api/books/bookCopies/';
  const API_KEY = extras.API_KEY as string;
  const API_ORIGIN = "http://mlgcl_library.test/"; 
  
  try {
    const res = await fetch(`${API_URL}${barcode}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Authorization': '2|qViPMAVbLC2WhnQWJ3EB6hPGVcQy4AK8t8PYL4uU2ea0a470',
        'Origin': API_ORIGIN,
        'x-api-key': API_KEY 
      }
    });

    const data = await res.json();  

    console.log(data.data);
    return data;
  } catch (err) {
    console.error('Error fetching book data:', err);
    return null;
  }
}

export async function getBookData(barcode: string) {
  const extras = Constants.expoConfig?.extra ?? {};

  // const API_URL = extras.API_URL as string;
  const API_URL = 'http://192.168.100.253:8000/api/borrow/scan/';
  const API_KEY = extras.API_KEY as string;
  const API_ORIGIN = "http://mlgcl_library.test/"; 
  
  try {
    const res = await fetch(`${API_URL}`, {
      method: 'post',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
        'Authorization': '2|qViPMAVbLC2WhnQWJ3EB6hPGVcQy4AK8t8PYL4uU2ea0a470',
        'Origin': API_ORIGIN,
        'x-api-key': API_KEY 
      },
      body: JSON.stringify({ uuid:barcode })
    });

    const data = await res.json(); 
    
    return data;
  } catch (err) {
    console.error('Error fetching book data:', err);
    return null;
  }
}