import { ContainerStyled } from "assets/styles/_Container";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
 return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
