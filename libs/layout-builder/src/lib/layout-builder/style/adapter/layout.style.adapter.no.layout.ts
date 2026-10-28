import { ILayoutStyleVisitor } from "../layout.style.visitor";
import { LayoutStyleAdapterAbstract } from "./layout.style.adapter.abstract";

export class LayoutStyleAdapterNoLayout extends LayoutStyleAdapterAbstract {

    public get layoutClass(): string {
        return "";
    }

    public override accept(visitor: ILayoutStyleVisitor): void {
        visitor.visitNoLayout(this);
    }
}
