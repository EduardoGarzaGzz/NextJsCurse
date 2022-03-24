import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <h1 className={ 'title' }>
                Home Pages
            </h1>
    
            <p className={ 'description' }>
              Get started by editing{ ' ' }
                <code className={ 'code' }>pages/index.js</code>
            </p>
        </MainLayout>
    )
}
