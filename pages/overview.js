import page from '../src/queries/page';
import Layout from '../src/components/Layout';
import Basic from '../src/components/section/Basic';

export default () => {
    const { overview } = page();
    return (
        <Layout>
            <Basic id="basic-overview">
                <header className="copy node-xs-50 node-lg-80 text-lg-center">
                    <h1>{overview.title}</h1>
                    <h2>{overview.description}</h2>
                </header>
            </Basic>
        </Layout>
    );
};
