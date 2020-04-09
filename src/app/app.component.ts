import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  getFileSize(size) {
    if(size < 1024) {
      return size + 'B';
    }
    if(size < 1024 * 1024) {
      return (size / 1024).toFixed() + 'KB';
    }
    if(size < 1024 * 1024 * 1024) {
      return (size / 1024 / 1024).toFixed(2) + 'MB';
    }
    return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
  }
}
