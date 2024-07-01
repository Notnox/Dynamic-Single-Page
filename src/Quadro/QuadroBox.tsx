import React, { ReactNode } from 'react';

type QuadroBoxProps = React.HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

const QuadroBox: React.FC<QuadroBoxProps> = ({ children, ...rest }) => {
    return (
        <div {...rest}>{children}</div>
    );
};

export default QuadroBox;