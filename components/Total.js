const Total = ({ items }) => {
    const total = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Total:</h3>
            <p>{total.toFixed(2)}</p>
        </div>
    );
};

export default Total;
