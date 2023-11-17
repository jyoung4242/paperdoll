import { v4 as uuidv4 } from "uuid";
import { Entity } from "../../_SqueletoECS/entity";
import { Assets } from "@peasy-lib/peasy-assets";
import { Vector } from "../../_SqueletoECS/Vector";

const animationSequence = {
  enabled: true,
  tik: 0,
  tikDelay: 6,
  sequenceIndex: 0,
  currentSequence: "default",
  sequences: {
    default: {
      length: 8,
      loop: true,
      keyframes: {
        0: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(5, -35), angle: -4 },
          lArm: { offset: new Vector(34, 0) },
          lHand: { offset: new Vector(12, 22), angle: 16 },
          rArm: { offset: new Vector(-3, 7) },
          rHand: { offset: new Vector(15, 25), angle: 16 },
        },
        1: {
          body: { offset: new Vector(3, 39) },
        },
        3: {
          body: { offset: new Vector(3, 40) },
          head: { offset: new Vector(5, -34) },
          lHand: { angle: 20 },
        },
        5: {
          body: { offset: new Vector(3, 39) },
        },
        7: {
          body: { offset: new Vector(3, 38) },
        },
      },
    },
  },
};

export class TemplateEntity {
  static create() {
    let body = Assets.image("1_body").src;
    let head = Assets.image("1_head").src;
    let lArm = Assets.image("1_arm left").src;
    let rArm = Assets.image("1_arm right").src;
    let lLeg = Assets.image("1_leg left").src;
    let rLeg = Assets.image("1_leg right").src;
    let rHand = Assets.image("1_hand right").src;
    let lHand = Assets.image("1_hand left").src;
    let fingers = Assets.image("1_fingers left").src;

    return Entity.create({
      id: uuidv4(),
      components: {
        position: { x: 50, y: 100 },
        zindex: 0,
        size: { data: [64, 64] },
        render: true,
        opacity: 1,
        skeletonContainer: {
          data: {
            animationSequence: animationSequence,
            components: [
              {
                data: {
                  parent: {
                    name: "body",
                    size: new Vector(50, 64),
                    offset: new Vector(3, 38),
                    angle: 0,
                    src: body,
                    z: 0,
                    positioning: "absolute",
                  },
                  children: [
                    {
                      data: {
                        parent: {
                          name: "head",
                          size: new Vector(45, 45),
                          offset: new Vector(5, -35),
                          angle: -4,
                          src: head,
                          z: 0,
                          positioning: "absolute",
                        },
                        children: [],
                      },
                    },
                    {
                      data: {
                        parent: {
                          name: "lArm",
                          size: new Vector(24, 24),
                          offset: new Vector(34, 0),
                          angle: 0,
                          src: lArm,
                          z: -2,
                          positioning: "absolute",
                        },
                        children: [
                          {
                            data: {
                              parent: {
                                name: "lHand",
                                size: new Vector(26, 20),
                                offset: new Vector(12, 22),
                                angle: 16,
                                src: lHand,
                                z: 1,
                              },
                              children: [
                                {
                                  data: {
                                    parent: {
                                      name: "fingers",
                                      size: new Vector(10, 16),
                                      offset: new Vector(16, 3),
                                      angle: 16,
                                      src: fingers,
                                      z: 1,
                                    },
                                    children: [],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      data: {
                        parent: {
                          name: "rArm",
                          size: new Vector(26, 26),
                          offset: new Vector(-3, 7),
                          angle: 40,
                          src: rArm,
                          z: 2,
                        },
                        children: [
                          {
                            data: {
                              parent: {
                                name: "rHand",
                                size: new Vector(26, 20),
                                offset: new Vector(15, 25),
                                angle: 16,
                                src: lHand,
                                z: 1,
                              },
                              children: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                data: {
                  parent: { name: "lLeg", size: new Vector(23, 23), offset: new Vector(33, 95), angle: -2, src: lLeg, z: -1 },
                  children: [],
                },
              },
              {
                data: {
                  parent: { name: "rLeg", size: new Vector(23, 23), offset: new Vector(11, 95), angle: 2, src: rLeg, z: -1 },
                  children: [],
                },
              },
            ],
          },
        },
      },
    });
  }
}
