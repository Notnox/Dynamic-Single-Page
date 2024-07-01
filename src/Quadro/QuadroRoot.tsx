import { ReactNode } from "react";

const QuadroRoot = ({ children }: { children: ReactNode }) => {
    return (
        <div className="full-screen-component">{children}</div>
    )
}

export default QuadroRoot;
