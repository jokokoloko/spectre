import usePage from '../queries/usePage';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

const Simple = ({ data: simple, slug }) => (
    <Layout template={`single single-simple single-simple-${slug}`} title={simple.title} description={simple.description}>
        <Basic id={slug} space="space-custom">
            <header className="node-xs-30 node-lg-50">
                <h1>{simple.title}</h1>
            </header>
            <section className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: simple.body }} />
        </Basic>
    </Layout>
);

Simple.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const { [slug]: data } = usePage();
    return { data, slug };
};

export default Simple;
