import { cardFilterPipe } from './callback.pipe';

describe('CallbackPipe', () => {
  it('create an instance', () => {
    const pipe = new cardFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
