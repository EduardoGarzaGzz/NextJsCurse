import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function AboutPage() {
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

AboutPage.getLayout = ( page ) => {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}
