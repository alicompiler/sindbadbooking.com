import React, { Component } from 'react';


export class ImagesComponent extends Component {

    render() {
        const images = window["main_images"] as string[];
        return (
            <div className={'grid cols-1 md:grid-cols-2 gap-4 w-full h-full h-auto'}>
                {
                    images.map(
                        (image, index) =>
                            <img key={index} onClick={() => window.open(image, "_blank")}
                                className={'rounded cursor-pointer h-auto w-full image-zoom-in'} alt={''} src={image} />
                    )
                }
            </div>
        );
    }
}