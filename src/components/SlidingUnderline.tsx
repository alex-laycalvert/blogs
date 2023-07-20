type Props = { children?: React.ReactNode };

/**
 * The `children` passed to this component will be given a sliding underline
 * when hovered over and the text will change to the `--color-primary` CSS
 * variable.
 */
export default function SlidingUnderline({ children }: Props) {
    return (
        <div
            className="
                transform-colors
                relative
                inline-block
                duration-200
                after:absolute
                after:bottom-0
                after:left-0
                after:h-[0.15rem]
                after:w-full
                after:origin-bottom-right
                after:scale-x-0
                after:rounded-full
                after:bg-primary
                after:transition-[transform]
                after:content-['']
                hover:text-primary
                hover:after:origin-bottom-left
                hover:after:scale-x-100
            "
        >
            {children}
            <span className=""></span>
        </div>
    );
}
