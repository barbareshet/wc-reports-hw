function CurrencySymbol(props) {
    let symbol = '₪';
    if (props.symbol){
        symbol = props.symbol;
    }
    return (
        <>
            {symbol}
        </>
    );
}

export default CurrencySymbol;