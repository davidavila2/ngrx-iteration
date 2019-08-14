module.exports = {
  name: 'ricknmorty',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ricknmorty/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
