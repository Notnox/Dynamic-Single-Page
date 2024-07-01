import { ReactNode } from "react";

const QuadroContent = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="full-screen-component-content">{children}</div>
    )
}

export default QuadroContent;
