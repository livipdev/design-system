import defaultsDeep from 'lodash/defaultsDeep';

import defaultConfig from './config/default';
import environments from './config/environments';

const buildEnvConfig = (nodeEnv=process.env.NODE_ENV) => {
  const currentEnv = nodeEnv || 'development';
  const config = defaultsDeep(
    environments[currentEnv],
    defaultConfig,
    {currentEnv}
  );

  return config;
}

const livipConfig = buildEnvConfig();

export default livipConfig;
