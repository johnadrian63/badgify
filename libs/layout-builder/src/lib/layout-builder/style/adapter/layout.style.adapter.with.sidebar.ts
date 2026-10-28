import { ILayoutStyleVisitor } from "../layout.style.visitor";
import { LayoutStyleAdapterAbstract } from "./layout.style.adapter.abstract";

export class LayoutStyleAdapterWithSidebar extends LayoutStyleAdapterAbstract {

    public get layoutClass(): string {
        return "padded";
    }

    public override accept(visitor: ILayoutStyleVisitor): void {
        visitor.visitWithSidebar(this);
    }
}
