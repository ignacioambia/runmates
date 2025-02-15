import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { componentGenerator } from './component';
import { ComponentGeneratorSchema } from './schema';

describe('component generator', () => {
  let tree: Tree;
  // const options: ComponentGeneratorSchema = { name: 'test', prefix: 'app', project: 'ui', componentName: 'RmYolo' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    // await componentGenerator(tree, options);
    // const config = readProjectConfiguration(tree, 'test');
    // expect(config).toBeDefined();
    //TODO: This test should pass
  });
});
