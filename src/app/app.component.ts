import { Component } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

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
    precisionEntries = [];
    selectedPrecisionEntry: { [key: string]: any } = {
        value: null,
        description: null
    };

    clustersEntries = [];
    selectedClustersEntry: { [key: string]: any } = {
        value: null,
        description: null
    };
   
    ngOnInit() {
        this.precisionEntries = [
          {
            description: 'vlow (50 px)',
            id: 'vlow'
          },
          {
            description: 'low (75 px)',
            id: 'low'
          },
          {
            description: 'medium (100 px)',
            id: 'medium'
          },
          {
            description: 'high (150 px)',
            id: 'high'
          },
          {
            description: 'vhigh (200 px)',
            id: 'vhigh'
          }
        ];
        
        // select the first one
        if(this.precisionEntries) {
          this.onSelectionPercisionChange(this.precisionEntries[0]);  
        }

        this.clustersEntries = [
            {
              description: '2',
              id: 2
            },
            {
              description: '3',
              id: 3
            },
            {
              description: '4',
              id: 4
            },
            {
              description: '5',
              id: 5
            },
            {
              description: '6',
              id: 6
            },
            {
              description: '7',
              id: 7
            },
            {
              description: '8',
              id: 8
            },
            {
              description: '9',
              id: 9
            },
            {
              description: '10',
              id: 10
            }
            ];
          
          // select the first one
          if(this.clustersEntries) {
            this.onSelectionClustersChange(this.clustersEntries[0]);  
          }
      }
    
    //event handler for the Percision radio button's change event
    onSelectionPercisionChange(precisionEntry) {
        // clone the object for immutability
        this.selectedPrecisionEntry = Object.assign({}, this.selectedPrecisionEntry, precisionEntry);
    }

    //event handler for the Clusters radio button's change event
    onSelectionClustersChange(clustersEntry) {
        // clone the object for immutability
        this.selectedClustersEntry = Object.assign({}, this.selectedClustersEntry, clustersEntry);
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
        
        this.http.post(
            'https://api.imgur.com/3/image',
            `{"image":"${this.base64String}"}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer f9df94903d2c9d902a3e4a0c4ddea86e43965af4'
                }
            }
        )
        .subscribe((res: HttpResponse<any>) => {
            this.imgLink = res['data']['link'];

            //link that is returned from imgur
            console.log('Link', this.imgLink);

            var websitestring = "http://mkweb.bcgsc.ca/color-summarizer/?url=" + 
            this.imgLink + "&precision=" + this.selectedPrecisionEntry.id+ 
            "&num_clusters="+ this.selectedClustersEntry.id;

        
            console.log('website', websitestring);
        });


        // use link we got above in calling the color clusters api

        // send request to color clusters api
        // grab partition images and upload those to imgur
        // perform other data processing on response?
        // figure out what to ouput / what we even want to do with this data
    }
}
