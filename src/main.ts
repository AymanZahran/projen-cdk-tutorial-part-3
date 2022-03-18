import { App } from 'aws-cdk-lib';
import { PipelineStack } from './pipeline_stack'

const app = new App();
new PipelineStack(app, 'PipelineStack');
app.synth();