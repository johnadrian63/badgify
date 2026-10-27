import { Component, OnInit, signal, WritableSignal } from "@angular/core";
import { TableBuilder } from "@org/table-builder";

@Component({
    selector: "app-dashboard",
    imports: [TableBuilder],
    templateUrl: "./dashboard.html",
    styleUrl: "./dashboard.css",
})
export class Dashboard implements OnInit {
    public value: WritableSignal<string> = signal<string>("");

    public ngOnInit(): void {
        setTimeout(() => {
            this.value.update(() => "Adrian");
        }, 3000);
    }
}
