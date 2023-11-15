import { Entity } from "../../_SqueletoECS/entity";
import { System } from "../../_SqueletoECS/system";
import { SkeletonComponent } from "../Components/skeleton";

export type SkeletonEntity = Entity & SkeletonComponent;

export class SkeletonAnimationSystem extends System {
  public constructor() {
    super("Skeleton");
  }

  public processEntity(entity: SkeletonEntity): boolean {
    return entity.skeletonSprite != null;
  }

  public update(deltaTime: number, now: number, entities: SkeletonEntity[]): void {
    entities.forEach(entity => {
      if (!this.processEntity(entity)) {
        return;
      }

      if (!entity.skeletonSprite.animationSequence.enabled) return;
      //create easytoread object
      let localObject = entity.skeletonSprite.animationSequence;

      //increment timer tik, reset if limit hit
      localObject.tik++;

      if (localObject.tik >= localObject.tikDelay) {
        localObject.tik = 0;
        localObject.sequenceIndex++;
      }

      //reset sequence index
      if (localObject.sequenceIndex >= localObject.sequences[localObject.currentSequence].length) {
        localObject.sequenceIndex = 0;
      }

      let components = Object.entries(localObject.sequences[localObject.currentSequence].components);

      components.forEach(compEntry => {
        const [compName, compParams] = compEntry;

        //execute update to entity by compName and compParams (index)

        //entity param to update
        let component = entity.skeletonSprite.children.find(child => child.name == compName);
        if (!component) return;

        //property to update at sequence
        if ((compParams as any[]).length == 0) return;

        let props = Object.entries((compParams as any[])[localObject.sequenceIndex]);

        props.forEach(prop => {
          console.log(component, prop[0], prop[1]);

          if (typeof prop[1] == "object") {
            //@ts-ignore
            Object.assign(component[prop[0]], prop[1]);
          } else if (typeof prop[1] == "number") {
            //@ts-ignore
            component[prop[0]] = prop[1];
          } else if (typeof prop[1] == "string") {
            //@ts-ignore
            component[prop[0]] = prop[1];
          }
        });
      });
    });
  }
}
