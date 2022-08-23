module.exports = () =>  [
  { path: '.editorconfig', template: '.editorconfig.ejs' },
  { path: '.gitignore', template: '.gitignore.ejs' },
  { path: '.eslintrc.json', template: '.eslintrc.json.ejs' },
  { path: '.vscode/launch.json', template: '.vscode.launch.json.ejs' },
  { path: 'package.json', template: 'package.json.ejs'},
  { path: `test/v1/unit/sample/sample.spec.js`, template: 'test.unit.sample.sample.ejs' },
  { path: 'v1/adapters/index.js', template: 'v1.adapters.index.ejs' },
  { path: `v1/adapters/sample/index.js`, template: 'v1.adapters.sample.index.ejs' },
  { path: 'v1/controllers/factory.js', template: 'v1.controllers.factory.ejs' },
  { path: 'v1/controllers/index.js', template: 'v1.controllers.index.ejs' },
  { path: `v1/controllers/sampleController.js`, template: 'v1.controllers.sampleController.ejs' },
  { path: 'v1/schemas/index.js', template: 'v1.schemas.index.ejs' },
  { path: `v1/schemas/sampleSchema.js`, template: 'v1.schemas.sampleSchema.ejs' },
  { path: '.env', template: '/docker/.env.ejs', type: ['docker'] },
  { path: 'config/index.js', template: '/docker/config.index.ejs', type: ['docker'] },
  { path: 'Dockerfile', template: '/docker/Dockerfile.ejs', type: ['docker'] },
  { path: 'index.js', template: '/docker/index.js.ejs', type: ['docker'] },
  { path: 'plugins/hapi-response-time/index.js', template: '/docker/plugins.hapi-response-time.index.ejs', type: ['docker'] },
  { path: 'plugins/hapi-swaggered-ui/index.js', template: '/docker/plugins.hapi-swaggered-ui.index.ejs', type: ['docker'] },
  { path: 'plugins/hapi-swaggered/index.js', template: '/docker/plugins.hapi-swaggered.index.ejs', type: ['docker'] },
  { path: 'plugins/index.js', template: '/docker/plugins.index.ejs', type: ['docker'] },
  { path: 'plugins/inert/index.js', template: '/docker/plugins.inert.index.ejs', type: ['docker'] },
  { path: 'plugins/vision/index.js', template: '/docker/plugins.vision.index.ejs', type: ['docker'] },
  { path: 'server.js', template: '/docker/server.js.ejs', type: ['docker'] },
  { path: 'v1/routes/index.js', template: '/docker/v1.routes.index.ejs', type: ['docker'] },
  { path: 'v1/routes/sample.js', template: '/docker/v1.routes.sample.ejs', type: ['docker'] },
  { path: 'commons/mongo/factory.js', template: '/mongo/mongo.factory.ejs', resource: ['mongo'] },
  { path: 'commons/mongo/index.js', template: '/mongo/mongo.index.ejs', resource: ['mongo'] },
  { path: 'v1/repository/factory.js', template: '/mongo/v1.repository.factory.ejs', resource: ['mongo'] },
  { path: 'v1/repository/index.js', template: '/mongo/v1.repository.index.ejs', resource: ['mongo'] },
  { path: 'config/index.js', template: '/serverless/config.index.js.ejs', type: ['serverless'] },
  { path: 'ymls/custom.yml', template: '/serverless/custom.yml.ejs', type: ['serverless'] },
  { path: 'ymls/environment.yml', template: '/serverless/environment.yml.ejs', type: ['serverless'] },
  { path: 'ymls/functions.yml', template: '/serverless/functions.yml.ejs', type: ['serverless'] },
  { path: 'index.js', template: '/serverless/index.js.ejs', type: ['serverless'] },
  { path: 'ymls/resources.yml', template: '/serverless/resources.yml.ejs', type: ['serverless'] },
  { path: 'serverless.yml', template: '/serverless/serverless.yml.ejs', type: ['serverless'] },
]
