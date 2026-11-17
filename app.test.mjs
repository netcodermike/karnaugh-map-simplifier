import assert from 'node:assert/strict';
import { simplify } from './app.mjs';
assert.equal(simplify(0).expression, '0');
assert.equal(simplify(255).expression, '1');
assert.equal(simplify(0b11110000).expression, 'A');
assert.equal(simplify(0b01010101).expression, 'C′');
assert.equal(simplify(0b11110011).expression, 'A + B′');
for (let enabled = 0; enabled < 256; enabled++) {
  assert.equal(simplify(enabled).groups.reduce((result, group) => result | group.mask, 0), enabled);
}
