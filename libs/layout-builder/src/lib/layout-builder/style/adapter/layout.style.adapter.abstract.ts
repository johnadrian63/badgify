import { ILayoutStyleVisitor } from "../layout.style.visitor";

export abstract class LayoutStyleAdapterAbstract {
    public abstract get layoutClass(): string;

    public abstract accept(visitor: ILayoutStyleVisitor): void;
}
