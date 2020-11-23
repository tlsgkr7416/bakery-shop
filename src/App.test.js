import star from 'pages/detailItemPage/star';

describe('replyTest', () => {
  test('star array Length', () => {
    expect(star(3).length).toBe(5);
  });
});
