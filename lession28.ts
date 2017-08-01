

 @Component({
    selector: "my-app",
    template: `<h1>Welcome to ${name} decorator</h1>`
})
export class AppComponent {
    public name: string = "Hello";
}