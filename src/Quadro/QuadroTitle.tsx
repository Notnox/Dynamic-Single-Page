import React from 'react';

type QuadroTitleProps = React.HTMLAttributes<HTMLSpanElement> & {
    value: string | number;
};

const QuadroTitle: React.FC<QuadroTitleProps> = ({ value, ...rest }) => {
    return (
        <span className="responsive-title" {...rest}>{value}</span>
    );
};

export default QuadroTitle;