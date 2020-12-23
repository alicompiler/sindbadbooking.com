import React, {Component} from 'react';

interface Props {
    image: string;
}

class AirlineItem extends Component<Props> {
    render() {
        const {image} = this.props;
        return (
            <div className="rounded bg-white flex items-center justify-center p-4 md:p-8 lg:p-16  self-stretch">
                <img src={image} className="image-zoom-in" alt="image"/>
            </div>
        );
    }
}

export default AirlineItem;