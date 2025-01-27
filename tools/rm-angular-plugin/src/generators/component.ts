import {
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

//TODO: Find nearest index.ts and export info there
//TODO: Allow model.ts creation within the component
export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {

  const toCamelCase = (str: string) => {
    return str.split('-').map( function (str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join('')
  }

  const projects = getProjects(tree);
  const chosenProject = projects.get(options.project);
  const projectRoot = `${chosenProject.sourceRoot}/${options.path}`;
  const splittedPath = options.path.split('/');

  options.prefix = chosenProject['prefix'];
  options.name = splittedPath.pop();
  options.componentName = toCamelCase(options.prefix) + toCamelCase(options.name);
  options.storybookTitle = `${splittedPath.join('/')}/${options.componentName}`;

  if (tree.exists(projectRoot)) {
    throw new Error(`Component "${options.name}" already exists at ${projectRoot}`);
  }

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

    const indexPath = path.join(chosenProject.sourceRoot, 'index.ts');
    const exportStatement = `export * from './${options.path}/${options.name}.component';`;
  
    //only if index.ts file was found edit it, otherwise don't
    if (tree.exists(indexPath)) {
      const content = tree.read(indexPath, 'utf-8');
      if (!content.includes(exportStatement)) {
        tree.write(indexPath, `${content.trim()}\n${exportStatement}\n`);
      }
    }

  await formatFiles(tree);
}

export default componentGenerator;
