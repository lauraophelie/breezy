import { useState } from "react";
import Bouton from "../../../components/button/Bouton";
import "./FilterButton.scss";

interface FilterButtonProps {
    textContent: string;
    className?: string;
    id?: string;
    defaultClick?: number;
}

const FilterButton : React.FC<FilterButtonProps> = (props) => {
    var [click, setClick] = useState((props.defaultClick) ? props.defaultClick : 1);

    const setFilter = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        click++;
        setClick(click);
    };

    const setClassName = (click != 0 && click % 2 == 0) ? "filter-button filter-button--active" : "filter-button";

    return (
        <Bouton
            text={props.textContent}
            onClick={setFilter}
            className={setClassName + " " + props.className}
            id={props.id}
        />
    )
}

export default FilterButton;