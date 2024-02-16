import React from 'react';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    return (
        <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.1363924156553!2d32.74748117631689!3d39.87118267153257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347103afedcd1%3A0xe25e255e3294c743!2sBilkent%20%C3%9Cniversitesi%20Bilgisayar%20M%C3%BChendisli%C4%9Fi!5e0!3m2!1str!2str!4v1708106761589!5m2!1str!2str"
            width="600" height="450" style={{border: 0}} allowFullScreen="" loading="fast"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
};

export default MapView;
