describe('isOffline should return true once process.env.IS_OFFLINE is present', () => {
  const oldEnv = process.env.IS_OFFLINE;

  beforeAll(() => {
    process.env.IS_OFFLINE = true;
  });
  afterAll(() => {
    process.env.IS_OFFLINE = oldEnv;
  });
});
