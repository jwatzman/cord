/** @jsxImportSource @emotion/react */

import Footer from 'docs/server/ui/footer/Footer.tsx';
import Header from 'docs/server/ui/header/Header.tsx';
import { NavSidebar } from 'docs/server/ui/nav/Nav.tsx';
import breakpoints from 'docs/lib/css/emotionMediaQueries.ts';

type ShellProps = {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
};

function Shell({ children, showFooter = true, showNav = true }: ShellProps) {
  return (
    <div css={{ position: 'relative' }}>
      <Header />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '60px',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            [breakpoints.tablet]: {
              flexDirection: 'column',
            },
          }}
        >
          {showNav && <NavSidebar />}
          {children}
        </div>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

export default Shell;
