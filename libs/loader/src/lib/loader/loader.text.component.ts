import { Component } from "@angular/core";

@Component({
    selector: "lib-loader-text-component",
    template: `
        <div class="text-center w-full p-2">
            Loading..
        </div>
   `,
    styles: [
        `:host {
             display: inline-block;
          }`
    ]
})
export class LoaderTextComponent { }
