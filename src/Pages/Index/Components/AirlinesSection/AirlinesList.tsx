import React, {Component} from 'react';
import AirlineItem from "./AirlineItem";

interface Props {
    images: string[];
}

class AirlinesList extends Component<Props> {
    render() {
        const {images} = this.props;
        return (
            <div
                className={'grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 justify-content items-center mx-auto container'}>
                {
                    images.map((image, index) => <AirlineItem key={index} image={image}/>)
                }
            </div>
        );
    }
}

export default AirlinesList;