import { useState, useEffect } from 'react';
import IData from '../models/IData';

// кастомный хук получения данных от сервера:
const useJsonFetch = (url: string) => {
  const [data, setData] = useState<IData | null>(null); // ответ от сервера
  const [loading, setLoading] = useState<boolean>(false); // процесс загрузки данных с сервера
  const [error, setError] = useState<Error | null>(null); // ошибка при получении данных от сервера

  useEffect(() => {
    const fetchJson = async (url: string) => {
      const baseUrl = import.meta.env.VITE_URL;
      setLoading(true);

      try {
        const response = await fetch(baseUrl + url); // получаем данные
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJson(url);
  }, [url]);

  return { data, loading, error };
};

export default useJsonFetch;
