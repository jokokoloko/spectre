import page from '../src/queries/page';
import Layout from '../src/components/Layout';
import Hero from '../src/components/section/Hero';

export default () => {
    const { home } = page();
    return (
        <Layout>
            {home.hero && (
                <Hero id={home.hero.slug} height={home.hero.height} color={1}>
                    <header>
                        <h1>{home.hero.headline}</h1>
                    </header>
                </Hero>
            )}
        </Layout>
    );
};
