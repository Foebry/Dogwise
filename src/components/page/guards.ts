const adminGuard = () => {
  // make /me call to check current state of token
  // check if token is adminToken
  // if token is AdminToken return true
  // else navigate to /unauthorized
};

const userGuard = () => {
  // make /me call to check current state of token
  // if valid token return true
  // else navigate to /login
};

export const usePageGuards = () => {
  const evaluateGuard = (guard: string) => {};

  return { evaluateGuard };
};
