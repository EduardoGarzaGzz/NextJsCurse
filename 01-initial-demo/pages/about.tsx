import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function About() {
    return (
        <>
            <h1 className={ 'title' }>
                About Pages
            </h1>

            <p className={ 'description' }>
                Get started by editing{ ' ' }
                <code className={ 'code' }>pages/index.js</code>
            </p>
        </>
    );
}

About.getLayout = ( page: JSX.Element ) => {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
};
