export function NavComp({ link, text, onClick}) {
    return (
            <a href={onClick}>
                {text}
            </a>
    )
}