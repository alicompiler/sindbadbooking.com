import React from "react";
import { AppDescriptor } from "../../../../AppDescriptor/AppDescriptor";
import HeaderContainer from "./../../../../Components/Header/HeaderContainer";
import SocialMediaBarContainer from "./../../../../Components/SocialMediaBar/SocialMediaBarContainer";

import { ImagesComponent } from "./ImagesComponent";
import { LoginForm } from "./LoginForm";
interface Props {
    appDescriptor: AppDescriptor;
}
export class MainContent extends React.Component<Props> {

    render(): any {
        return <div className={'flex flex-col z-30 lg:absolute lg:top-0 lg:left-0 h-auto w-full'}>
            <HeaderContainer />
            <div className={'flex-1 flex justify-center p-16  z-50'}>
                <div className={'grid grid-cols-1 lg:grid-cols-2 items-center'}>
                    <div className={'flex justify-center mb-16 lg:mb-0'}>
                        <LoginForm />
                    </div>
                    <div>
                        <ImagesComponent />
                    </div>
                </div>
            </div>
            <SocialMediaBarContainer />
        </div>
    }

}
