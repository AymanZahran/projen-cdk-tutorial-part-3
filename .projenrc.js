const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-tutorial-part-3',
  description: 'This package is for Projen Demo',

  deps: [
    'aymanzahranpackage',
  ],

  // Add License
  licensed: true,
  license: 'Apache-2.0',

  // Add gitpod.yml
  gitpod: true,

});
project.synth();

project.gitpod.addDockerImage({
  dockerFile: '.gitpod.Dockerfile',
});