gemini.suite('vaadin-login-overlay', function(rootSuite) {
  function wait(actions, find) {
    actions.wait(5000);
  }

  function goToAboutBlank(actions, find) {
    // Firefox stops responding on socket after a test, workaround:
    return actions.executeJS(function(window) {
      window.location.href = 'about:blank'; // just go away, please!
    });
  }

  rootSuite
    .before(wait)
    .after(goToAboutBlank);

  ['lumo', 'material'].forEach(theme => {
    ['ltr', 'rtl'].forEach(direction => {

      gemini.suite(`default-tests-${theme}-${direction}`, function(suite) {
        suite
        // .before((actions) => actions.setWindowSize(1200, 1000))
        .setUrl(`default.html?theme=${theme}&dir=${direction}`)
        .setCaptureElements('body')
        .capture(`vaadin-login-overlay`);
      });
    });
  });

});
