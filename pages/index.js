import Layout from '../src/components/Layout';
import page from '../src/queries/page';

export default () => {
    const { home } = page();
    return (
        <Layout>
            <h1>{home.hero.headline}</h1>
        </Layout>
    );
};
