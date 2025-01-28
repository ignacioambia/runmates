import {
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

//TODO: Allow model.ts creation within the component
export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {

  const toCamelCase = (str: string) => {
    return str.split('-').map( function (str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join('')
  };

  const findNearestIndexFile = (dir: string): string => {
    let currentDir = dir;
    while (currentDir !== chosenProject.sourceRoot) {
      const potentialIndexPath = path.join(currentDir, 'index.ts');
      if (tree.exists(potentialIndexPath)) {
        return potentialIndexPath;
      }
      currentDir = path.dirname(currentDir);
    }
    return path.join(chosenProject.sourceRoot, 'index.ts');
  };

  const projects = getProjects(tree);
  const chosenProject = projects.get(options.project);
  const projectRoot = `${chosenProject.sourceRoot}/${options.path}`;
  const splittedPath = options.path.split('/');

  options.prefix = chosenProject['prefix'];
  options.name = splittedPath.pop();
  options.componentName = toCamelCase(options.prefix) + toCamelCase(options.name);
  const storybookPath = splittedPath.length > 0 ? `${splittedPath.join('/')}/` : '';
  options.storybookTitle = `${storybookPath}${options.componentName}`;
  if (tree.exists(projectRoot)) {
    throw new Error(`Component "${options.name}" already exists at ${projectRoot}`);
  }

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

    const nearestIndexPath = findNearestIndexFile(projectRoot);
    const relativePath = path.relative(path.dirname(nearestIndexPath), path.join(projectRoot, `${options.name}.component`));
    const exportStatement = `export * from './${relativePath.replace(/\\/g, '/')}';`;
    //only if index.ts file was found edit it, otherwise don't
    if (tree.exists(nearestIndexPath)) {
      const content = tree.read(nearestIndexPath, 'utf-8');
      if (!content.includes(exportStatement)) {
        tree.write(nearestIndexPath
          , `${content.trim()}\n${exportStatement}\n`);
      }
    }

  await formatFiles(tree);
}

export default componentGenerator;
