import React from 'react';
import Header from '../system/Header';

interface PageProps {
    children: React.ReactNode
};

function Page(props: any) {
        return (
            <div className="App">
                <Header/>
                {props.children}
            </div>
        );
}

export default Page;