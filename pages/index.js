import usePage from '../src/queries/usePage';
import Layout from '../src/components/Layout';
import Hero from '../src/components/section/Hero';

export default () => {
    const { home } = usePage();
    return (
        <Layout template="home">
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
