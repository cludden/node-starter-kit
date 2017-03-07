import { expect } from 'chai';
import { describe, it } from 'mocha';

import { add, subtract } from '../lib';

describe('test', function () {
  it('should work', function () {
    expect(add(1, 2)).to.equal(3);
    expect(subtract(2, 1)).to.equal(1);
  });
});
