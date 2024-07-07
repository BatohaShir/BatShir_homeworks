export function Button({text, style, click}) {
    if (text === 'Купить'){
        return (
            <button style={style}>
                {text}
            </button>
        );
    }
    else{
        return (
            <button style={style} onClick={click}>
                {text}
            </button>
        );

    }
    
}