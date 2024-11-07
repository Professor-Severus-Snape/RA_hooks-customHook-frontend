import { useState, useEffect } from 'react';

// кастомный хук получения данных от сервера:
const useJsonFetch = (url: string) => {
  const [data, setData] = useState<object | null>(null); // ответ от сервера
  const [isLoading, setLoading] = useState<boolean>(false); // процесс загрузки данных с сервера
  const [error, setError] = useState<Error | null>(null); // ошибка при получении данных от сервера

  useEffect(() => {
    const fetchJson = async (url: string) => {
      const baseUrl = import.meta.env.VITE_URL;

      setLoading(true);
      console.log('Начало загрузки!'); // NOTE: отладка !!!

      try {
        const response = await fetch(baseUrl + url); // получаем даные
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
        console.log('Получены данные!'); // NOTE: отладка !!!

        setError(null);
        console.log('Всё прошло без ошибок!'); // NOTE: отладка !!!
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          console.log('Ошибка!!!'); // NOTE: отладка !!!
        }
      } finally {
        setLoading(false);
        console.log('Загрузка завершена!'); // NOTE: отладка !!!
      }
    };

    fetchJson(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useJsonFetch;
