import { Vector } from "../../_SqueletoECS/Vector";
import { Component } from "../../_SqueletoECS/component";

// you can define the incoming types when the component is created
export interface ISkeletonComponent {
  data: SkeletonType;
}
export type SkeletonType = {
  src: string;
  offset: Vector;
  size: Vector;
  angle: number;
  children: SkeletonType[];
};

// this is the exported interface that is used in systems modules
export interface SkeletonComponent {
  skeletonSprite: SkeletonType;
}

export class SkeletonComp extends Component {
  children: SkeletonType[] = [];
  // UI template string literal with UI binding of value property
  public template = `
    <style>
      .skeleton-sprite {
        display: block;
        position:absolute;
        top:0;
        left:0;
        background-size: cover;
        background-repeat: norepeat; 
      }
    </style>
    <skeleton-sprite class="skeleton-sprite" style="width: \${value.size.x}px; height: \${value.size.y}px; transform: translate(\${value.offset.x}px,\${value.offset.y}px) rotate(\${value.angle}deg); background-image: url(\${value.src});" >
        <skeleton-relative class="position: relative; width:100%; height:100%">
            < \${ SkeletonComp === child} \${ child <=* value.children }
        </skeleton-relative>
    </skeleton-sprite>
    `;

  //setting default value
  public value: SkeletonType = {
    children: [],
    offset: new Vector(0, 0),
    size: new Vector(0, 0),
    angle: 0,
    src: "",
  };
  public constructor() {
    //@ts-ignore
    super("skeletonSprite", SkeletonComp, true);
  }

  public define(data: ISkeletonComponent): void {
    if (data == null) {
      return;
    }
    console.log("here");

    this.value = data.data;
  }
}
