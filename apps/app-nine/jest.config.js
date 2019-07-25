module.exports = {
  name: 'app-nine',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-nine/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
