import { Component } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';


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

    imgLink: string;

    constructor(private http: HttpClient) {

    }

    onChange(event: EventTarget) {
        const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
        const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        const files: FileList = target.files;
        this.file = files[0];

        const reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(this.file);
    }

    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.base64String = btoa(binaryString);
    }

    start(): void {
        console.log('Starting Process');

        this.http.post(
            'https://api.imgur.com/3/image',
            `{"image":"${this.base64String}"}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer f9df94903d2c9d902a3e4a0c4ddea86e43965af4'
                }
            }
        ).subscribe((res: HttpResponse<any>) => {
            console.log('Res', res);
            console.log('Body', res.data);

            this.imgLink = res.data.link;

            console.log('Link', this.imgLink);

            // parse data and get link
        });

        // use link we got above in calling the color clusters api
        console.log('Finished Process');
    }
}
