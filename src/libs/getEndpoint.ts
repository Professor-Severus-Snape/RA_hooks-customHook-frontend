const getEndpoint = () => {
  const endpoints = ['/data', '/error', '/loading'];
  const idx = Math.floor(Math.random() * endpoints.length);

  return endpoints[idx];
};

export default getEndpoint;
