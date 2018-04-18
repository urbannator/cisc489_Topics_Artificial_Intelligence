import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Client ID: f872d5fe9d850b8
    // Client Secret: 99a205466b7f324d1c3ba5fed59e4b1df6e396c2
    // Access Token: f9df94903d2c9d902a3e4a0c4ddea86e43965af4
    // Refresh Token: 606dcb69c7eb9c7da0735297334bb9482ca039c3
    // account_username=Jordsan&account_id=85837449

    file: File;
    base64String: string;

    onChange(event: EventTarget) {
        const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
        const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        const files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);

        const reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(this.file);
    }

    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.base64String =  btoa(binaryString);

        console.log(this.base64String);
    }

    start(): void {
        console.log('Starting Process');

    }
}
