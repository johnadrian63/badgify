import { testLib2 } from "@org/test-lib2";


export function testLib1(): string {
    console.log(testLib2());

    return "test-lib1";
}
