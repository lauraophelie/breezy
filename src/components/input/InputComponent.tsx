import "./InputComponent.scss";

interface InputComponentProps {
    className?: string;
    id?: string;
    placeholder?: string;
    onChange?: (event: any) => void;
    onInput?: (event: any) => void;
    value?: string;
    name?: string;
    type: string;
    required: boolean;
    readOnly?: boolean;
    disabled?: boolean;
}

const InputComponent : React.FC<InputComponentProps> = (props) => {
    return (
        <input
            className={"input " + props.className}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onInput={props.onInput}
            value={props.value}
            name={props.name}
            type={props.type}
            required={props.required}
            readOnly={props.readOnly}
            disabled={props.disabled}
        />
    )
}

export default InputComponent;