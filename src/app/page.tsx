import React from 'react'
import { DLLink, ExternalLink } from '@/common/components'
import { EXTERNAL_LINKS } from '@/common/constants'

export default function HomePage(): JSX.Element {
  return (
    <main className="container py-8">
      <header className="mb-10">
        <h1>Demeter&apos;s Law Demonstrations</h1>
      </header>
      <article className="mb-8">
        <p className="mb-2">
          This site exists purely as a playground for standing up object
          oriented practices using the{' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Law_of_Demeter">
            Law of Demeter
          </ExternalLink>{' '}
          within a{' '}
          <ExternalLink href={EXTERNAL_LINKS.nextJs}>Next.js</ExternalLink>{' '}
          application using{' '}
          <ExternalLink href={EXTERNAL_LINKS.tailwindCss}>
            TailwindCSS
          </ExternalLink>
          . It currently consists of this page and the{' '}
          <DLLink href="/posts">posts</DLLink> page. The posts page is reaching
          out to an internal API that returns a set of fixtures.
        </p>
        <p className="mb-8">
          There is not a database, and there aren&apos;t any CRUD actions to
          speak of, but these are things on the horizon. We&apos;ll eventually
          be exploring form submissions, mutating data, user authentication,
          error handling, accessibility, styles, and many more topics. You can
          see the repo on Github at{' '}
          <ExternalLink href={EXTERNAL_LINKS.demetersLawRepo}>
            github.com/greenymcgee/demeters-law
          </ExternalLink>
          .
        </p>
        <hr />
      </article>
      <article className="mb-8">
        <header className="mb-2">
          <h2>Testing Strategies</h2>
        </header>
        <p className="mb-8">
          The code in this repo has 100% test coverage with a 99% requirement in
          the CI/CD pipeline. Often, as I&apos;m determining the best testing
          strategy, I try to think of things in terms of suitcases and
          airplanes. Do I need the plane or the airport to test my luggage? No,
          I just need to test that it can and does hold the things that it
          should. Did I test that my luggage made it into the airport, and then
          from there onto the plane? Each step of the process requires it&apos;s
          own level of tests, and this is best done through small code.
          Following the Law of Demeter naturally drives us in the direction of
          small code.
        </p>
        <hr />
      </article>
      <article>
        <header className="mb-2">
          <h2>Facade Pattern</h2>
        </header>
        <p className="mb-2">
          The <DLLink href="/posts">posts page</DLLink> is making a call to the
          internal posts API route using{' '}
          <ExternalLink href={EXTERNAL_LINKS.swr}>SWR</ExternalLink>. The data
          returned from an SWR hook can be undefined as SWR performs actions to
          fetch said data and possibly return it or an error. Once the API has
          successfully responded with a set of data, then we can know for sure
          that we have the data, but we still don&apos;t necessarily want to
          assume the shape of our data. This is where we can introduce the{' '}
          <ExternalLink href={EXTERNAL_LINKS.facadePattern}>
            facade pattern
          </ExternalLink>
          .
        </p>
        <p className="mb-2">
          With a facade, we can negate the risk of using the unknown response
          data by checking to see that our data matches the shape we expect it
          to be in first. This is made simple with the help of some{' '}
          <ExternalLink
            href={`${EXTERNAL_LINKS.demetersLawRepo}/blob/main/src/common/utils/delegations.ts`}
          >
            delegation methods
          </ExternalLink>
          . The delegation terminology is borrowed from Ruby, and the idea is
          that a delegation method does the check to confirm that the shape of
          the desired data is correct and returns a default value if it is not.
          This ensures that we&apos;re never dealing with null or undefined data
          anywhere within our views. Click the links below to see the
          PostsDataFacade and how it gets used within usePosts:
        </p>
        <ul className="ml-8 list-disc">
          <li>
            <ExternalLink
              href={`${EXTERNAL_LINKS.demetersLawRepo}/blob/main/src/app/posts/facades/postsData.ts`}
            >
              PostsDataFacade
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href={`${EXTERNAL_LINKS.demetersLawRepo}/blob/main/src/app/posts/hooks/usePosts.ts`}
            >
              usePosts
            </ExternalLink>
          </li>
        </ul>
      </article>
    </main>
  )
}
