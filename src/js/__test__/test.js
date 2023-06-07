import Validator from '../app';

test.each([
  ['testName', true],
  ['test11Name', true],
  ['test-Name', true],
  ['test_Name', true],
  ['test777Name', true],
  ['test1234Name', false],
  ['test123456Name', false],
  ['1testName1', false],
  ['TESTNAME', true],
  ['___testname___', false],
  ['t1e2s3t4N5a6m7e', true],
  ['12345qqqqq', false],
  ['qqq_qq12345', false],
  ['12345wewer--', false],
])('Check UserName', (name, expectedResult) => {
  const user = new Validator(name);
  expect(user.validateUsername(name)).toBe(expectedResult);
});
