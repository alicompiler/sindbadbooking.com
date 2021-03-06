import React from "react";
import {AppDescriptor} from "../../../../AppDescriptor/AppDescriptor";
import HeaderContainer from "./../../../../Components/Header/HeaderContainer";

import {ImagesComponent} from "./ImagesComponent";
import {LoginForm} from "./LoginForm";

interface Props {
    appDescriptor: AppDescriptor;
}

export class MainContent extends React.Component<Props> {

    render(): any {
        return <div className={'flex z-50 flex-col w-full'}>
            <div style={{zIndex: 100}}>
                <HeaderContainer/>
            </div>
            <div className={'flex-1 flex justify-center p-16  z-50'}>
                <div className={'grid grid-cols-1 lg:grid-cols-2 items-center'}>
                    <div className={'flex justify-center mb-16 lg:mb-0'}>
                        <LoginForm/>
                    </div>
                    <div>
                        <ImagesComponent/>
                    </div>
                </div>
            </div>
        </div>
    }

}
