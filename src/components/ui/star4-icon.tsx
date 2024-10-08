import React from 'react';

interface Star4Props {
    color: string;
    size: string | number; // Ajusta según tus necesidades para el tamaño
}

const Star4: React.FC<Star4Props> = ({ color, size }) => {
    return (
        <svg
            style={{ width: size, height: size }}
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M37.1666 0.399963L37.1738 37.4635L51.3643 3.22402L37.1873 37.4691L63.4002 11.2663L37.1975 37.4793L71.4426 23.3023L37.2031 37.4928L74.2666 37.5L37.2031 37.5071L71.4426 51.6976L37.1975 37.5206L63.4002 63.7335L37.1873 37.5308L51.3643 71.7759L37.1738 37.5365L37.1666 74.6L37.1595 37.5365L22.969 71.7759L37.146 37.5308L10.933 63.7335L37.1358 37.5206L2.89071 51.6976L37.1301 37.5071L0.0666504 37.5L37.1301 37.4928L2.89071 23.3023L37.1358 37.4793L10.933 11.2663L37.146 37.4691L22.969 3.22402L37.1595 37.4635L37.1666 0.399963Z"
                fill={color}
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    );
};

export default Star4;
