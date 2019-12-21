import usePage from '../queries/usePage';
import Layout from '../components/Layout';
import Hero from '../components/section/Hero';

export default () => {
    const { home: page } = usePage();
    return (
        <Layout template="home">
            {page.hero && (
                <Hero id={page.hero.slug} height={page.hero.height} color={1}>
                    <header>
                        <h1>{page.hero.headline}</h1>
                    </header>
                </Hero>
            )}
        </Layout>
    );
};
