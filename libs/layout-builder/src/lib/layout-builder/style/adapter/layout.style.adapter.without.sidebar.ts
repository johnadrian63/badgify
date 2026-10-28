import { ILayoutStyleVisitor } from "../layout.style.visitor";
import { LayoutStyleAdapterAbstract } from "./layout.style.adapter.abstract";

export class LayoutStyleAdapterWithoutSidebar extends LayoutStyleAdapterAbstract {

    public get layoutClass(): string {
        return "";
    }

    public accept(visitor: ILayoutStyleVisitor): void {
        visitor.visitWithoutSidebar(this);
    }
}
