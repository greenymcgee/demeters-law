import { SWRConfig } from 'swr'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import React, { PropsWithChildren, ReactElement } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react'
import { createMockRouter } from './jest.utils'

interface RouterContextProviderProps {
  // eslint-disable-next-line react/require-default-props
  routerProps?: FirstParameterOf<typeof createMockRouter>
}

export function RouterContextProvider({
  children,
  routerProps = {},
}: PropsWithChildren<RouterContextProviderProps>): ReactElement {
  return (
    <RouterContext.Provider value={createMockRouter(routerProps)}>
      {children}
    </RouterContext.Provider>
  )
}

/**
 * The ProviderTree wrapped around an SWRConfig for easier customization in
 * tests.
 */
export function TestProviders({
  children,
  routerProps,
}: PropsWithChildren<PropsOf<typeof RouterContextProvider>>): ReactElement {
  return (
    <RouterContextProvider routerProps={routerProps}>
      <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
        {children}
      </SWRConfig>
    </RouterContextProvider>
  )
}

export function landerRender(
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
  return render(component, { wrapper: TestProviders, ...options })
}
