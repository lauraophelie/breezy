import { useState } from "react";
import Bouton from "../../../components/button/Bouton";
import "./FilterButton.scss";

interface FilterButtonProps {
    textContent: string;
    className?: string;
    id?: string;
    onClick?: (event: any) => void;
}

const FilterButton : React.FC<FilterButtonProps> = (props) => {
    const [click, setClick] = useState(0)

    return (
        <Bouton
            text={props.textContent}
            onClick={props.onClick}
            className={"filter-button " + props.className}
            id={props.id}
        />
    )
}

export default FilterButton;