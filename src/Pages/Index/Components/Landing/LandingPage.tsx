import React from "react";
import {AppDescriptor} from "../../../../AppDescriptor/AppDescriptor";
import {LandingPageDescriptor} from "../../IndexPageDescriptor";
import {MainContent} from "./MainContent";

interface Props {
    landingPage: LandingPageDescriptor;
    appDescriptor: AppDescriptor;
}

export class LandingPage extends React.Component<Props> {

    render(): any {
        const {appDescriptor} = this.props;
        return <div className={'w-screen overflow-hidden relative'}>
            <MainContent appDescriptor={appDescriptor}/>
            <div className={'bg-black opacity-75 absolute top-0 left-0 w-full h-full z-20'}/>
        </div>
    }

}