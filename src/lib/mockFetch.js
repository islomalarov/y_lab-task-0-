export const mockFetch = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ ok: true });
      } else {
        resolve({ ok: false });
      }
    }, 1000);
  });
};