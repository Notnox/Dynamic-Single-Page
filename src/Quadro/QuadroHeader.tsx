import { ReactNode } from "react";

const QuadroHeader = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="full-screen-component-header">{children}</div>
    )
}

export default QuadroHeader;
