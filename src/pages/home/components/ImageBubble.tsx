import ImageBox from "../../../components/image/ImageBox";
import "./ImageBubble.scss";

interface ImageBubbleProps {
    imageSrc: string;
    className?: string;
    onClick?: (event: any) => void;
}

const ImageBubble: React.FC<ImageBubbleProps> = (props) => {
    return (
        <div className={props.className}>
            <ImageBox 
                src={props.imageSrc}
                className="bubble-image"
                alt="NO"
                onClick={props.onClick}
            />      
        </div>
    )
}

export default ImageBubble;