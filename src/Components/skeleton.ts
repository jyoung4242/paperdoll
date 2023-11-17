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
      background-size: cover;
      background-repeat: no-repeat; 
      transform-style: preserve-3d;
      transition: all 0.1s ;
    }
        
  </style>
  <skeleton-sprite class="skeleton-sprite" data-title="\${value.parent.name}" style="  display: block; width: \${value.parent.size.x}px; height: \${value.parent.size.y}px; transform: translate(\${value.parent.offset.x}px,\${value.parent.offset.y}px) translateZ(\${value.parent.z}px) rotate(\${value.parent.angle}deg);background-image: url(\${value.parent.src}); z-index: \${value.parent.z};">
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

/*
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
  public static template = `
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


*/

/* try # 2

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
        
      }
      .skeleton-rel{
        position: relative;
        width: 100%;
        height: 100%;
        display:block; 
      }
      .skeleton-layer{
        position:absolute;
        top:0;
        left:0;
        background-size: contain;
        background-repeat: no-repeat; 
        transition: all 0.25s;
      }
    </style>
    <skeleton-sprite class="skeleton-sprite">
        <skeleton-rel class="skeleton-rel">
          <skeleton-layer class="skeleton-layer" \${layer<=*value.children}  style="width: \${layer.size.x}px; height: \${layer.size.y}px; z-index: \${layer.z}; transform: translate(\${layer.offset.x}px,\${layer.offset.y}px) rotate(\${layer.angle}deg); background-image: url(\${layer.src});"></skeleton-relative>
        </skeleton-rel>
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

  public define(data: ISkeletonComponent): void {
    if (data == null) {
      return;
    }
    console.log("here");

    this.value = data.data;
  }
}

*/
