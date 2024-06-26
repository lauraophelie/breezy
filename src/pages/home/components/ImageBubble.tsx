import ImageBox from "../../../components/image/ImageBox";
import "./ImageBubble.scss";

interface ImageBubbleProps {
    imageSrc: string;
    className?: string;
}

const ImageBubble: React.FC<ImageBubbleProps> = (props) => {
    return (
        <div className={props.className}>
            <ImageBox 
                src={props.imageSrc}
                className="bubble-image"
                alt="NO"
            />      
        </div>
    )
}

export default ImageBubble;