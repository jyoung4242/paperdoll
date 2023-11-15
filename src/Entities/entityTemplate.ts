import { v4 as uuidv4 } from "uuid";
import { Entity } from "../../_SqueletoECS/entity";
import { Assets } from "@peasy-lib/peasy-assets";
import { Vector } from "../../_SqueletoECS/Vector";

export class TemplateEntity {
  static create() {
    let body = Assets.image("1_body").src;
    let head = Assets.image("1_head").src;

    return Entity.create({
      id: uuidv4(),
      components: {
        position: { x: 50, y: 100 },
        zindex: 0,
        size: { data: [64, 64] },
        render: true,
        opacity: 1,
        skeletonSprite: {
          data: {
            children: [
              {
                size: new Vector(48, 48),
                offset: new Vector(0, 0),
                angle: 0,
                src: head,
                children: [],
              },
            ],
            size: new Vector(48, 64),
            offset: new Vector(64, 0),
            angle: 0,
            src: body,
          },
        },
      },
    });
  }
}
