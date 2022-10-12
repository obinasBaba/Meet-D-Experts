import type { AppProps } from 'next/app';
import ContextWrapper from '@/context';
import Layout from '@/components/commons/layout';
import '@global/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}
