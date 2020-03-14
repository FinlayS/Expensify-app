export const newTestArray = [
  {
    key: 'jonny',
    data: 'johnnyJonJon',
    stringify: false
  },
  {
    key: 'bob',
    data: {
      bob: 'bobbyBobBob',
      boss: {surname: 'bossy'}
    },
    stringify: true
  }
];

const setSessionStorageForKeys = (keys) => {
  //  const window = cy.state('window');
  keys.forEach((obj) => {
    obj.stringify
    ? sessionStorage.setItem(obj.key, JSON.stringify(obj.data))
    : sessionStorage.setItem(obj.key,obj.data)
  })
};

setSessionStorageForKeys(newTestArray);
