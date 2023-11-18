import { Vector } from "../../_SqueletoECS/Vector";
import { Component } from "../../_SqueletoECS/component";

// you can define the incoming types when the component is created
export interface ISkeletonComponent {
  data: SkeletonType;
}
export type SkeletonType = {
  animationSequence: any;
  children: SkeletonLayer[];
};

export type SkeletonLayer = {
  name: string;
  src: string;
  offset: Vector;
  size: Vector;
  angle: number;
  children: SkeletonLayer[];
};

// this is the exported interface that is used in systems modules
export interface SkeletonComponent {
  skeletonSprite: SkeletonType;
}

export class SkeletonComp extends Component {
  SkeletonComp = SkeletonComp;
  children: SkeletonType[] = [];
  // UI template string literal with UI binding of value property
  public get template() {
    return SkeletonComp.template;
  }
  public static template = `
  <style>
    .skeleton-sprite {
      position: absolute;
      top:0;
      left:0;
      background-size: contain;
      background-repeat: no-repeat; 
      transform-style: preserve-3d;
      transition: all 0.1s ;
      border: 1px solid transparent;
    }
            
  </style>
  <skeleton-sprite \${===value.parent.render} class="skeleton-sprite" data-title="\${value.parent.name}" style="  display: block; width: \${value.parent.size.x}px; height: \${value.parent.size.y}px; transform: translate(\${value.parent.offset.x}px,\${value.parent.offset.y}px) translateZ(\${value.parent.z}px) rotate(\${value.parent.angle}deg);background-image: url(\${value.parent.src}); z-index: \${value.parent.z}; transform-origin: \${value.parent.anchor}; opacity: \${value.parent.opacity}">
      < \${ SkeletonComp === child} \${ child <=* value.children }>
  </skeleton-sprite>
    `;

  //setting default value
  public value: SkeletonType = {
    animationSequence: {},
    children: [],
  };
  public constructor() {
    //@ts-ignore
    super("skeletonSprite", SkeletonComp, true);
  }

  public static create(data: ISkeletonComponent) {
    const created = new this();
    created.define(data);
    return created;
  }

  public define(data: ISkeletonComponent): void {
    if (data == null) {
      return;
    }

    this.value = data.data;
  }
}
