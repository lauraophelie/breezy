interface ImageBoxProps {
    src: string;
    className?: string;
    width?: string;
    height?: string;
    alt?: string;
}

const ImageBox : React.FC<ImageBoxProps> = (props) => {
    return (
        <img
            src={props.src}
            className={props.className}
            width={props.width}
            height={props.height}
            alt={props.alt}
        />
    )
}

export default ImageBox;