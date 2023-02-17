const proxyConfigMappings = {
  dev: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  test: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  prod: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  dev2: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
}

export function getProxyConfig(envType = 'dev2') {
  return proxyConfigMappings[envType]
}
