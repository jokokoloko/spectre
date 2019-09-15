import Layout from '../src/components/Layout';
import page from '../src/queries/page';

export default () => {
    const { overview } = page();
    return (
        <Layout>
            <h1>{overview.hero.headline}</h1>
        </Layout>
    );
};
