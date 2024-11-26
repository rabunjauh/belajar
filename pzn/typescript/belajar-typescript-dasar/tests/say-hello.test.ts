import { sayHello } from "../src/say-hello";

describe('sayHello', function () {
  it('should return hello Mustafa', function () {
    expect(sayHello('mustafa')).toBe('Hello mustafa')
  })
})