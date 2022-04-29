const JestEnvironment = require("jest-environment-jsdom");
const dispatch = require('jest-circus')

class CustomEnvironment extends JestEnvironment {
  async handleTestEvent(event, state) {
    if (event.name === 'test_fn_failure' || event.name === 'hook_failure') {
      // if we fail one, skip the rest of them
      state.currentDescribeBlock.children.map(c => {
        c.tests.map(t => {
          t.mode = 'skip';
        });
      });
    }
  }
}

module.exports = CustomEnvironment;
