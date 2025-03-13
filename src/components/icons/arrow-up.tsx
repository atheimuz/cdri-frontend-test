const ArrowUpIcon = ({ ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span {...rest}>
            <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
            >
                <path d="M12 8L7 3L2 8L1.19249e-08 7L7 8.34742e-08L14 7L12 8Z" fill="#B1B8C0" />
            </svg>
        </span>
    );
};

export default ArrowUpIcon;
