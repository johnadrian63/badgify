export interface INavigationBuilderMenuResolverVisitor<T> {
    visitNested(): T;
    visitSingle(): T;
    visitSubNested(): T;
    visitSubSingle(): T;
    visitCustom(): T;
}

export abstract class NavigationBuilderMenuResolver {
    public abstract accept<T>(visitor: INavigationBuilderMenuResolverVisitor<T>): T;
}

export class NavigationBuilderMenuNested extends NavigationBuilderMenuResolver {
    public accept<T>(visitor: INavigationBuilderMenuResolverVisitor<T>): T {
        return visitor.visitNested();
    }
}

export class NavigationBuilderMenuSingle extends NavigationBuilderMenuResolver {
    public accept<T>(visitor: INavigationBuilderMenuResolverVisitor<T>): T {
        return visitor.visitSingle();
    }
}

export class NavigationBuilderMenuSubSingle extends NavigationBuilderMenuResolver {
    public accept<T>(visitor: INavigationBuilderMenuResolverVisitor<T>): T {
        return visitor.visitSubSingle();
    }
}

export class NavigationBuilderMenuSubNested extends NavigationBuilderMenuResolver {
    public accept<T>(visitor: INavigationBuilderMenuResolverVisitor<T>): T {
        return visitor.visitSubNested();
    }
}

export class NavigationBuilderMenuCustom extends NavigationBuilderMenuResolver {
    public accept<T>(visitor: INavigationBuilderMenuResolverVisitor<T>): T {
        return visitor.visitCustom();
    }
}

