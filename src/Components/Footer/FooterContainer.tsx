import {AppDescriptor} from "../../AppDescriptor/AppDescriptor";

import * as React from "react";
import {Footer} from "./Footer";
import {withAppDescriptor} from "../../AppDescriptor/AppDescriptorContext";

interface Props {
    appDescriptor: AppDescriptor;
}

class FooterContainer extends React.Component<Props> {
    render(): any {
        const {appDescriptor} = this.props;
        return <Footer metadata={this.props.appDescriptor.meta} contactInfo={appDescriptor.contactInfo}/>
    }
}

export default withAppDescriptor(FooterContainer);