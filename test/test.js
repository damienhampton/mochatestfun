const assert = require('chai').assert;
const { mount } = require('@vue/test-utils');

const App = require('../src/App.vue').default;

describe('a first test', function() {
  this.timeout(20000);
  it('should return hello world', () => {
    const wrapper = mount(App);
    assert.include(wrapper.html(), 'Hello');
  })
})