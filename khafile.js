let project = new Project('SML');

project.addLibrary('Kha2D');

project.addAssets('Assets/**');

project.addSources('Sources');

project.addDefine('BLA');

resolve(project);
