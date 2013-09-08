Package.describe({
  summary: 'Automatically adjust textarea height based on user input.'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.autosize.js'
  ], 'client'
  );
});
