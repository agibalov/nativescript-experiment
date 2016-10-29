import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
    <Label text="Tap the button" class="title"></Label>
    <Button text="TAP {{counter}}" (tap)="onTap()"></Button>
    <Label [text]="message" class="message" textWrap="true"></Label>
</StackLayout>
`
})
export class AppComponent {
    public counter: number = 0;

    public get message(): string {
        return this.counter >= 10 ? 'HUGE!!!!' : '';
    }
    
    public onTap() {
        ++this.counter;
    }
}
