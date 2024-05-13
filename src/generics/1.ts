import axios from 'axios';


async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); // Використовуємо Generics для визначення типу даних відповіді
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
