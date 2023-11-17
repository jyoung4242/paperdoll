import { Vector } from "../../_SqueletoECS/Vector";
import { Component } from "../../_SqueletoECS/component";
import { SkeletonComp } from "./skeleton";

// you can define the incoming types when the component is created
export interface ISkeletonComponent {
  data: SkeletonType;
}
export type SkeletonType = {
  animationSequence: any;
  components: SkeletonLayer[];
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
export interface SkeletonContainerComponent {
  skeletonContainer: SkeletonType;
}

export class SkeletonContainerComp extends Component {
  SkeletonComp = SkeletonComp;
  children: SkeletonType[] = [];
  // UI template string literal with UI binding of value property

  public template = `
  <style>
    .skeleton-container {
      top:0;
      left:0;
      background-size: cover;
      background-repeat: no-repeat; 
      transform-style: preserve-3d;
      
    }
  </style>
  <skeleton-container class="skeleton-container">
    < \${ SkeletonComp === child} \${ child <=* value.components }>
  </skeleton-container>
  `;

  //setting default value
  public value: SkeletonType = {
    animationSequence: {},
    components: [],
  };
  public constructor() {
    //@ts-ignore
    super("skeletonContainer", SkeletonContainerComp, true);
  }
  public define(data: any): void {
    if (data == null) {
      return;
    }

    this.value = data.data;
  }
}
