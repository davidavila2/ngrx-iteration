module.exports = {
  name: 'onepiece',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/onepiece/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
