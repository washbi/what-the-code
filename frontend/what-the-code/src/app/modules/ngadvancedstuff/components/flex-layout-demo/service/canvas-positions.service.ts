import {Injectable} from "@angular/core";
import {CdkDragRelease} from "@angular/cdk/drag-drop";

@Injectable({ providedIn: 'root'})
export class CanvasPositionsService {

  canvasId = 'drag-n-drop-boundary-container';

  // responsive canvas -> adjust positions of the items, if window resized
  private unit = 'px';
  private currWindowHeight;
  private currWindowWidth;

  constructor() {
    this.setWindowSize();
  }

  public getYPosition(yPosition: number) {
    return this.getPosition(yPosition, this.currWindowHeight);
  }

  public getXPosition(xPosition: number) {
    return this.getPosition(xPosition, this.currWindowWidth);
  }

  private getPosition(x: number, winSize: number): string {
    if (x < 0) {
      return 0 + this.unit;
    }

    const xPercentage = x / 100;
    const xResult = xPercentage * winSize;

    return xResult + this.unit;
  }

  public setWindowSize() {
    this.currWindowHeight = window.innerHeight;
    this.currWindowWidth = window.innerWidth;
  }

  public storeNewCanvasPosition(released: CdkDragRelease) {
    const canvasRect = document.getElementById(this.canvasId).getBoundingClientRect();
    const rect = released.source.element.nativeElement.getBoundingClientRect();
    const topRelativeToParent = rect.top - canvasRect.top;
    const leftRelativeToParent = rect.left - canvasRect.left;
    const posYPercentage = Math.round((topRelativeToParent / canvasRect.height) * 100);
    const posXPercentage = Math.round((leftRelativeToParent / canvasRect.width) * 100);

    // service.update(posXPercentage, posYPercentage) to store position
  }

  /*
   * ClientRect explanation
   * y:  top / bottom
   * x: left / right
   *
   * From a Rectangle:
   * left top corner           right top
   *                __________
   *               |          |
   *               |__________|
   *  left bottom              right bottom
   */
  public checkIfRectangleDivsCollide(rectA: ClientRect, rectB: ClientRect) {

    const notColliding = rectA.top > rectB.top;

    // rectA 1
    const rA_height             = rectA.height;
    const rA_width              = rectA.width;
    const rA_distance_from_top  = rectA.top + rA_height;
    const rA_distance_from_left = rectA.left + rA_width;

    // Div 2 data
    var d2_height             = rectB.height;
    var d2_width              = rectB.width;
    var d2_distance_from_top  = rectB.top + d2_height;
    var d2_distance_from_left = rectB.left + d2_width;

    const noCollision = (
      rA_distance_from_top < rectB.top ||
      rectA.top > d2_distance_from_top ||
      rA_distance_from_left < rectB.left ||
      rectA.left > d2_distance_from_left
    );

    return !noCollision ;

  }
}
