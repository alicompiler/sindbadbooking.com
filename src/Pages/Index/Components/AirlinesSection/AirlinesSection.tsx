import React, {Component} from 'react';
import {SectionTitle} from "../../../../Components/SectionTitle/SectionTitle";
import {getLocals} from "../../../../Localization/Locals";
import AirlinesList from "./AirlinesList";

interface Props {
    airlines: string[];
}

class AirlinesSection extends Component<Props> {
    render() {
        const {airlines} = this.props;
        return (
            <div className={'bg-gray-800 p-4 md:p-8 lg:p-16 xl:p-24'}>
                <section className={'container mx-auto'}>
                    <SectionTitle title={getLocals().airlines}/>
                    <AirlinesList images={airlines}/>
                </section>
            </div>
        );
    }
}

export default AirlinesSection;