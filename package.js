Package.describe({
  name: 'ramsay:react-components-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core React components',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ramsaylanier/react-components-core',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'ramsay:react-components-nav@0.0.1',
    'ramsay:react-components-header@0.0.1',
    'ramsay:react-components-form@0.0.1',
    'ramsay:react-components-page@0.0.1'
  ];

  api.use(packages, 'client');
  api.imply(packages);

});