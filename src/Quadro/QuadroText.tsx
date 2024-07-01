import React from 'react';

type QuadroTitleProps = React.HTMLAttributes<HTMLSpanElement> & {
    value: string | number;
};

const QuadroText: React.FC<QuadroTitleProps> = ({ value, ...rest }) => {
    return (
        <span className="responsive-subTitle" {...rest}>{value}</span>
    );
};

export default QuadroText;