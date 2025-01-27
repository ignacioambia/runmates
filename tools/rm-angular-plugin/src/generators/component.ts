import {
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
  
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const projects = getProjects(tree);
  const chosenProject = projects.get(options.project);
  const projectRoot = `${chosenProject.sourceRoot}/${options.path}`;

  if (tree.exists(projectRoot)) {
    throw new Error(`Component ${options.name} already exists at ${projectRoot}`);
  }


  options.prefix = chosenProject['prefix'];
  const splittedPath = options.path.split('/')
  options.name = splittedPath.pop();
  options.componentName = capitalize(options.prefix) + capitalize(options.name);
  options.storybookTitle = `${splittedPath.join('/')}/${options.componentName}`;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default componentGenerator;
