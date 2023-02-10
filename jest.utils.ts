import { NextRouter } from 'next/router'

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    asPath: '/',
    back: jest.fn(),
    basePath: '',
    beforePopState: jest.fn(),
    defaultLocale: 'en',
    domainLocales: [],
    events: {
      emit: jest.fn(),
      off: jest.fn(),
      on: jest.fn(),
    },
    forward: jest.fn(),
    isFallback: false,
    isLocaleDomain: false,
    isPreview: false,
    isReady: true,
    pathname: '/',
    prefetch: jest.fn(),
    push: jest.fn(),
    query: {},
    reload: jest.fn(),
    replace: jest.fn(),
    route: '/',
    ...router,
  }
}
