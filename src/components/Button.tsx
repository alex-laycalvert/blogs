import { LoadingIcon } from "./icons";

type Props = {
    className?: string;
    type?: "submit" | "reset" | "button";
    loading?: boolean;
    disabled?: boolean;
    text?: string;
};

export default function Button({ loading, text, ...props }: Props) {
    return (
        <button className="" {...props}>
            {loading ? <></> : <>{text ?? "Click Me"}</>}
        </button>
    );
}
