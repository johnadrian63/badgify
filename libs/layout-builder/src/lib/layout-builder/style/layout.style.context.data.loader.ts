import { ContextBuilderDataLoader } from "@org/context-builder";

export class LayoutStyleContextDataLoader extends ContextBuilderDataLoader<void> {
    public async load(): Promise<void> {
        return Promise.resolve();
    }
}
