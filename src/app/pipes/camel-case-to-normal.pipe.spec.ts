import { CamelCaseToNormalPipe } from './camel-case-to-normal.pipe';

describe('CamelCaseToNormalPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCaseToNormalPipe();
    expect(pipe).toBeTruthy();
  });
});
