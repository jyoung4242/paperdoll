import { v4 as uuidv4 } from "uuid";
import { Entity } from "../../_SqueletoECS/entity";
import { Assets } from "@peasy-lib/peasy-assets";
import { Vector } from "../../_SqueletoECS/Vector";

const animationSequence = {
  enabled: false,
  tik: 0,
  tikDelay: 8,
  sequenceIndex: 0,
  currentSequence: "default",
  sequences: {
    default: {
      length: 8,
      components: {
        body: [
          { offset: new Vector(3, 38) },
          { offset: new Vector(3, 39) },
          { offset: new Vector(3, 39) },
          { offset: new Vector(3, 40) },
          { offset: new Vector(3, 40) },
          { offset: new Vector(3, 39) },
          { offset: new Vector(3, 39) },
          { offset: new Vector(3, 38) },
        ],
        head: [
          { offset: new Vector(4, 5), angle: -4 },
          { offset: new Vector(4, 6), angle: -4 },
          { offset: new Vector(4, 6), angle: -4 },
          { offset: new Vector(4, 7), angle: -4 },
          { offset: new Vector(4, 7), angle: -2 },
          { offset: new Vector(4, 6), angle: -2 },
          { offset: new Vector(4, 6), angle: -2 },
          { offset: new Vector(4, 5), angle: -4 },
        ],
        lArm: [
          { offset: new Vector(34, 42) },
          { offset: new Vector(34, 43) },
          { offset: new Vector(34, 43) },
          { offset: new Vector(34, 44) },
          { offset: new Vector(34, 44) },
          { offset: new Vector(34, 43) },
          { offset: new Vector(34, 43) },
          { offset: new Vector(34, 42) },
        ],
        rArm: [
          { offset: new Vector(0, 46) },
          { offset: new Vector(0, 47) },
          { offset: new Vector(0, 47) },
          { offset: new Vector(0, 48) },
          { offset: new Vector(0, 48) },
          { offset: new Vector(0, 47) },
          { offset: new Vector(0, 47) },
          { offset: new Vector(0, 46) },
        ],
        lLeg: [],
        rLeg: [],
        lHand: [
          { offset: new Vector(38, 60), angle: 16 },
          { offset: new Vector(38, 61), angle: 16 },
          { offset: new Vector(38, 61), angle: 16 },
          { offset: new Vector(38, 62), angle: 16 },
          { offset: new Vector(38, 62), angle: 22 },
          { offset: new Vector(38, 61), angle: 22 },
          { offset: new Vector(38, 61), angle: 22 },
          { offset: new Vector(38, 60), angle: 22 },
        ],
        rHand: [
          { offset: new Vector(2, 67), angle: 70 },
          { offset: new Vector(2, 68), angle: 70 },
          { offset: new Vector(2, 68), angle: 70 },
          { offset: new Vector(2, 69), angle: 70 },
          { offset: new Vector(2, 69), angle: 75 },
          { offset: new Vector(2, 68), angle: 75 },
          { offset: new Vector(2, 68), angle: 75 },
          { offset: new Vector(2, 67), angle: 75 },
        ],
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
        skeletonSprite: {
          data: {
            animationSequence: animationSequence,
            components: [],
            children: [
              {
                name: "body",
                size: new Vector(42, 60),
                offset: new Vector(3, 38),
                angle: 0,
                src: body,
                z: 1,
                children: [
                  {
                    name: "head",
                    size: new Vector(45, 45),
                    offset: new Vector(0, 0),
                    angle: -4,
                    src: head,
                    z: 2,
                  },
                  {
                    name: "lArm",
                    size: new Vector(24, 24),
                    offset: new Vector(34, 42),
                    angle: 0,
                    src: lArm,
                    z: 0,
                  },
                ],
              },
            ],
          },
        },
      },
    });
  }
}

/*

 {
                name: "rArm",
                size: new Vector(26, 26),
                offset: new Vector(0, 46),
                angle: 40,
                src: rArm,
                z: 2,
              },
              {
                name: "lHand",
                size: new Vector(22, 22),
                offset: new Vector(38, 60),
                angle: 16,
                src: lHand,
                z: -1,
              },

              {
                name: "rHand",
                size: new Vector(24, 24),
                offset: new Vector(2, 67),
                angle: 70,
                src: rHand,
                z: 1,
              },
              {
                name: "lLeg",
                size: new Vector(23, 23),
                offset: new Vector(29, 85),
                angle: 0,
                src: lLeg,
                z: 0,
              },
              {
                name: "rLeg",
                size: new Vector(25, 25),
                offset: new Vector(6, 86),
                angle: 0,
                src: rLeg,
                z: 0,
              },



*/

/*
        skeletonSprite: {
          data: {
            animationSequence: animationSequence,
            children: [
              {
                name: "body",
                size: new Vector(42, 60),
                offset: new Vector(3, 38),
                angle: 0,
                src: body,
                z: 1,
                children: [
                  {
                    name: "head",
                    size: new Vector(45, 45),
                    offset: new Vector(0, 0),
                    angle: -4,
                    src: head,
                    z: 2,
                  },
                  {
                    name: "lArm",
                    size: new Vector(24, 24),
                    offset: new Vector(34, 42),
                    angle: 0,
                    src: lArm,
                    z: 0,
                  },
                ],
              },
            ],
          },
        },

*/
