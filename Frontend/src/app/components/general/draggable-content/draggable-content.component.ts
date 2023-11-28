import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {  
  CdkDragDrop, 
  moveItemInArray } from '@angular/cdk/drag-drop';

  // Define the interface outside of the class
interface MyObject {
  name: string;
  header: string
  id: number;
  stringArray: string[];
  imageURL: string;
  visibility: boolean;
  position: number;
}

@Component({
  selector: 'app-draggable-content',
  templateUrl: './draggable-content.component.html',
  styleUrls: ['./draggable-content.component.scss']
})



export class DraggableContentComponent {
  // Define the array
  items: MyObject[] = [
    {
        name: "Item 1",
        header: "Header for Item 1",
        id: 1,
        stringArray: ["String 1a", "String 1b", "String 1c"],
        imageURL: "https://example.com/image1.jpg",
        visibility: true,
        position: 0
    },
    {
        name: "Item 2",
        header: "Header for Item 2",
        id: 2,
        stringArray: ["String 2a", "String 2b"],
        imageURL: "https://example.com/image2.jpg",
        visibility: false,
        position: 2
    },
    {
        name: "Item 4",
        header: "Header for Item 4",
        id: 3,
        stringArray: ["String 3a", "String 3b", "String 3c", "String 3d"],
        imageURL: "https://example.com/image3.jpg",
        visibility: true,
        position: 1
    },
    {
      name: "Item 5",
      header: "Header for Item 5",
      id: 3,
      stringArray: ["String 3a", "String 3b", "String 3c", "String 3d"],
      imageURL: "https://example.com/image3.jpg",
      visibility: true,
      position: 1
    },
    {
        name: "Item 6",
        header: "Header for Item 6",
        id: 3,
        stringArray: ["String 3a", "String 3b", "String 3c", "String 3d"],
        imageURL: "https://example.com/image3.jpg",
        visibility: true,
        position: 1
    },    
    {
      name: "Item 7",
      header: "Header for Item 7",
      id: 3,
      stringArray: ["String 3a", "String 3b", "String 3c", "String 3d"],
      imageURL: "https://example.com/image3.jpg",
      visibility: true,
      position: 1
    },
    {
      name: "Item 8",
      header: "Header for Item 8",
      id: 3,
      stringArray: ["String 3a", "String 3b", "String 3c", "String 3d"],
      imageURL: "https://example.com/image3.jpg",
      visibility: true,
      position: 1
    }
];

  trackByFunction(index: number, item: MyObject): number {
    return item.id;
  }

  constructor() {
    // Sort items based on the 'position' property
    this.items.sort((a, b) => (a.position as number) - (b.position as number));
  }

  
  onDrop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  
}
