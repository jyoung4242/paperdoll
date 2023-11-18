import { Entity } from "../../_SqueletoECS/entity";
import { System } from "../../_SqueletoECS/system";
import { SkeletonContainerComponent } from "../Components/skeletonContainer";
import { Signal } from "../../_SqueletoECS/Signals";

export type SkeletonEntity = Entity & SkeletonContainerComponent;

export class SkeletonAnimationSystem extends System {
  pendingAnimationChange = "";
  animationSignal = new Signal("changeAnimation");
  public constructor() {
    super("Skeleton");
    this.animationSignal.listen((signalDetails: CustomEvent) => {
      const nextAnimation = signalDetails.detail.params[0];
      console.log(nextAnimation);
      this.pendingAnimationChange = nextAnimation;
    });
  }

  public processEntity(entity: SkeletonEntity): boolean {
    return entity.skeletonContainer != null;
  }

  public update(deltaTime: number, now: number, entities: SkeletonEntity[]): void {
    entities.forEach(entity => {
      if (!this.processEntity(entity)) {
        return;
      }

      //check if animation sequence changed
      if (this.pendingAnimationChange != "") {
        entity.skeletonContainer.animationSequence.currentSequence = this.pendingAnimationChange;
        this.pendingAnimationChange = "";
        entity.skeletonContainer.animationSequence.sequenceIndex = 0;
        entity.skeletonContainer.animationSequence.enabled = true;
      }
      if (!entity.skeletonContainer.animationSequence.enabled) return;
      //if animation sequence is set to something not in defined, just bail
      console.log();

      if (!entity.skeletonContainer.animationSequence.sequences[entity.skeletonContainer.animationSequence.currentSequence]) return;

      //increment timer tik, reset if limit hit
      entity.skeletonContainer.animationSequence.tik++;
      if (
        entity.skeletonContainer.animationSequence.tik >=
        entity.skeletonContainer.animationSequence.sequences[entity.skeletonContainer.animationSequence.currentSequence].tikDelay
      ) {
        entity.skeletonContainer.animationSequence.tik = 0;
        entity.skeletonContainer.animationSequence.sequenceIndex++;
      }

      //reset sequence index
      if (
        entity.skeletonContainer.animationSequence.sequenceIndex >=
        entity.skeletonContainer.animationSequence.sequences[entity.skeletonContainer.animationSequence.currentSequence].length
      ) {
        entity.skeletonContainer.animationSequence.sequenceIndex = 0;
        if (!entity.skeletonContainer.animationSequence.sequences[entity.skeletonContainer.animationSequence.currentSequence].loop)
          entity.skeletonContainer.animationSequence.enabled = false;
      }

      let keyframeEntries;
      //if there is keyframe data for this index, grab keyframe data
      if (
        entity.skeletonContainer.animationSequence.sequences[entity.skeletonContainer.animationSequence.currentSequence].keyframes[
          entity.skeletonContainer.animationSequence.sequenceIndex
        ]
      )
        keyframeEntries = Object.entries(
          entity.skeletonContainer.animationSequence.sequences[entity.skeletonContainer.animationSequence.currentSequence].keyframes[
            entity.skeletonContainer.animationSequence.sequenceIndex
          ]
        );
      else return; //if no keyframe data for this index, bail

      keyframeEntries.forEach(keyEntry => {
        const [compName, compParams] = keyEntry;
        //find compName, update each param
        let targetdata = findParentByName(entity.skeletonContainer.components, compName);
        //we have the target property, now loop through compParams and update each prop
        //@ts-ignore
        Object.entries(compParams).forEach(p => (targetdata[p[0]] = p[1]));
      });
    });
  }
}

function findParentByName(obj: any, targetName: string, path = []): any {
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    let parent = element.data.parent;
    let children = element.data.children;

    //check parent first, then kids
    if (parent.name == targetName) return parent;

    if (children.length > 0) {
      const child = checkChildren(children, targetName);
      if (child) return child;
    }
  }

  return null;
}

function checkChildren(obj: any, name: string): any {
  for (let index = 0; index < obj.length; index++) {
    const child = obj[index].data.children;
    const parent = obj[index].data.parent;

    if (parent.name == name) return parent;

    if (child && child.length > 0) {
      let rstl = checkChildren(child, name);
      if (rstl) return rstl;
    }
  }
  return null;
}
