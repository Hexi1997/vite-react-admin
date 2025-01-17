export function requestUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '莉莉丝',
        permissions: [
          'l1',
          'l2',
          'l1_testMenu1',
          'l1_testMenu1_1',
          'l1_testMenu1_2',
          'l1_testMenu3',
        ],
      });
    }, 1000);
  });
}
