import { ILayoutStyleVisitor } from "../layout.style.visitor";
import { LayoutStyleAdapterAbstract } from "./layout.style.adapter.abstract";

export class LayoutStyleAdapterTwoColumns extends LayoutStyleAdapterAbstract {

    public override get layoutClass(): string {
        return "";
    }

    public override accept(visitor: ILayoutStyleVisitor): void {
        visitor.visitTwoColumns(this);
    }
}
