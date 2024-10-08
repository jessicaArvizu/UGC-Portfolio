interface StarProps {
    color: string;
    size: string | number; // Puedes ajustar esto según cómo esperas el tamaño.
}

const Star: React.FC<StarProps> = ({ color, size }) => {
    return (
        <svg
            style={{ width: size, height: size }}
            viewBox="0 0 402 402"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M401.8 180.799H303.3L394.4 143.299L379 105.799L286.9 143.699L357.3 73.2992L328.7 44.6992L258.3 115.099L296.2 22.9992L258.7 7.59922L221.2 98.6992V0.199219H180.8V98.5992L143.3 7.59922L105.8 22.9992L143.7 115.099L73.3002 44.6992L44.7002 73.2992L115.1 143.699L23.0002 105.799L7.60019 143.299L98.7002 180.799H0.200195V221.199H98.6002L7.60019 258.699L23.0002 296.199L115.1 258.199L44.7002 328.699L73.3002 357.299L143.8 286.899L105.8 378.999L143.3 394.399L180.8 303.399V401.799H221.2V303.399L258.7 394.399L296.2 378.999L258.2 286.899L328.7 357.299L357.3 328.699L286.9 258.199L379 296.199L394.4 258.699L303.4 221.199H401.8V180.799Z"
                fill={color}
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    );
}

export default Star;
