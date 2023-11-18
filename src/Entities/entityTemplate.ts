import { v4 as uuidv4 } from "uuid";
import { Entity } from "../../_SqueletoECS/entity";
import { Assets } from "@peasy-lib/peasy-assets";
import { Vector } from "../../_SqueletoECS/Vector";

const animationSequence = {
  enabled: true,
  tik: 0,
  sequenceIndex: 0,
  currentSequence: "default",
  sequences: {
    default: {
      length: 8,
      loop: true,
      tikDelay: 8,
      keyframes: {
        0: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(34, 0), angle: 0 },
          lHand: { offset: new Vector(5, 13), angle: 16 },
          rArm: { offset: new Vector(-3, 7), angle: 40 },
          rHand: { offset: new Vector(17, 20), angle: -16 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
        },
        1: {
          body: { offset: new Vector(3, 39) },
        },
        2: {
          body: { offset: new Vector(3, 40) },
        },
        3: {
          body: { offset: new Vector(3, 41) },
          head: { offset: new Vector(7, -34), angle: -3 },
          lHand: { angle: 20 },
          rArm: { angle: 41, offset: new Vector(-3, 8) },
          rHand: { angle: -14 },
          lArm: { offset: new Vector(34, 1), angle: 1 },
        },
        4: {
          body: { offset: new Vector(3, 41) },
        },
        5: {
          body: { offset: new Vector(3, 40) },
        },
        6: {
          body: { offset: new Vector(3, 39) },
        },
        7: {
          body: { offset: new Vector(3, 38) },
        },
      },
    },
    walk: {
      length: 8,
      loop: true,
      tikDelay: 8,
      keyframes: {
        0: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(34, 0), angle: 0 },
          lHand: { offset: new Vector(5, 13), angle: 16 },
          rArm: { offset: new Vector(-3, 7), angle: 40 },
          rHand: { offset: new Vector(17, 20), angle: -16 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
        },
        1: {
          body: { offset: new Vector(3, 39) },
          lArm: { angle: -10 },
          rArm: { angle: 50 },
          lLeg: { offset: new Vector(34, 94), angle: -8 },
          rLeg: { offset: new Vector(10, 94), angle: 8 },
        },
        2: {
          body: { offset: new Vector(3, 40) },
          lArm: { angle: -25 },
          rArm: { angle: 65 },
          rLeg: { offset: new Vector(9, 94), angle: 15 },
          lLeg: { offset: new Vector(36, 94), angle: -15 },
        },
        3: {
          body: { offset: new Vector(3, 41) },
          lArm: { angle: -10 },
          rArm: { angle: 50 },
          lLeg: { offset: new Vector(34, 94), angle: -8 },
          rLeg: { offset: new Vector(10, 94), angle: 8 },
        },
        4: {
          body: { offset: new Vector(3, 42) },
          lArm: { angle: 0 },
          rArm: { angle: 40 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
        },
        5: {
          body: { offset: new Vector(3, 41) },
          lArm: { angle: 10 },
          rArm: { angle: 30 },
          lLeg: { offset: new Vector(32, 94), angle: 8 },
          rLeg: { offset: new Vector(12, 94), angle: -8 },
        },
        6: {
          body: { offset: new Vector(3, 40) },
          lArm: { angle: 25 },
          rArm: { angle: 15 },
          lLeg: { offset: new Vector(31, 94), angle: 15 },
          rLeg: { offset: new Vector(13, 94), angle: -15 },
        },
        7: {
          body: { offset: new Vector(3, 39) },
          lArm: { angle: 10 },
          rArm: { angle: 30 },
          lLeg: { offset: new Vector(32, 94), angle: 8 },
          rLeg: { offset: new Vector(12, 94), angle: -8 },
        },
      },
    },
    run: {
      length: 8,
      loop: true,
      tikDelay: 4,
      keyframes: {
        0: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -0 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 40 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
        },
        1: {
          body: { offset: new Vector(3, 39) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -20 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 60 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          lLeg: { offset: new Vector(34, 94), angle: -8 },
          rLeg: { offset: new Vector(10, 94), angle: 8 },
        },
        2: {
          body: { offset: new Vector(3, 40) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -45 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 90 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          rLeg: { offset: new Vector(9, 94), angle: 15 },
          lLeg: { offset: new Vector(36, 94), angle: -15 },
        }, //full stretch
        3: {
          body: { offset: new Vector(3, 39) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -20 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 60 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          lLeg: { offset: new Vector(34, 94), angle: -8 },
          rLeg: { offset: new Vector(10, 94), angle: 8 },
        },
        4: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -0 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 40 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
        }, //reset
        5: {
          body: { offset: new Vector(3, 39) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: 20 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 20 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          lLeg: { offset: new Vector(32, 94), angle: 8 },
          rLeg: { offset: new Vector(12, 94), angle: -8 },
        },
        6: {
          body: { offset: new Vector(3, 40) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: 45 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: -10 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          lLeg: { offset: new Vector(31, 94), angle: 15 },
          rLeg: { offset: new Vector(13, 94), angle: -15 },
        }, //full inverse stretch
        7: {
          body: { offset: new Vector(3, 39) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: 20 },
          lHand: { offset: new Vector(5, 15), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 20 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          lLeg: { offset: new Vector(32, 94), angle: 8 },
          rLeg: { offset: new Vector(12, 94), angle: -8 },
        },
      },
    },
    attack: {
      length: 7,
      loop: false,
      tikDelay: 18,
      keyframes: {
        0: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -0 },
          lHand: { offset: new Vector(8, 20), angle: -10 },
          rArm: { offset: new Vector(-3, 7), angle: 40 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: false, angle: -40 },
        },

        1: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -65 },
          lHand: { offset: new Vector(8, 20), angle: 43 },
          rArm: { offset: new Vector(-3, 7), angle: -40 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: false, angle: -40 },
        },
        2: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -65 },
          lHand: { offset: new Vector(8, 20), angle: 43 },
          rArm: { offset: new Vector(-3, 7), angle: -40 },
          rHand: { offset: new Vector(17, 20), angle: -90 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: true, angle: -40 },
        }, //full stretch
        3: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -65 },
          lHand: { offset: new Vector(8, 20), angle: 43 },
          rArm: { offset: new Vector(-3, 7), angle: -40 },
          rHand: { offset: new Vector(17, 20), angle: 2 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: true, angle: 20 },
          bow2: { render: false },
          bow1: { render: true },
        },
        4: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -65 },
          lHand: { offset: new Vector(8, 20), angle: 43 },
          rArm: { offset: new Vector(-3, 7), angle: -40 },
          rHand: { offset: new Vector(17, 20), angle: 2 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: true, angle: 20 },
          bow2: { render: false },
          bow1: { render: true },
        }, //reset
        5: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -65 },
          lHand: { offset: new Vector(8, 20), angle: 43 },
          rArm: { offset: new Vector(-3, 7), angle: -40 },
          rHand: { offset: new Vector(17, 20), angle: 2 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: true, angle: 20 },
          bow2: { render: false },
          bow1: { render: true },
        },
        6: {
          body: { offset: new Vector(3, 38) },
          head: { offset: new Vector(7, -35), angle: -4 },
          lArm: { offset: new Vector(33, 3), angle: -65 },
          lHand: { offset: new Vector(8, 20), angle: 43 },
          rArm: { offset: new Vector(-3, 7), angle: -40 },
          rHand: { offset: new Vector(17, 20), angle: -5 },
          rLeg: { offset: new Vector(11, 95), angle: 0 },
          lLeg: { offset: new Vector(33, 95), angle: 0 },
          arrow: { render: false, angle: 20 },
          bow2: { render: true },
          bow1: { render: false },
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
    let quiver = Assets.image("1_quiver").src;
    let bow1 = Assets.image("1_bow1").src;
    let bow2 = Assets.image("1_bow2").src;
    let arrow = Assets.image("arrow").src;

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
                    opacity: 1,
                    render: true,
                    name: "body",
                    size: new Vector(50, 64),
                    offset: new Vector(3, 38),
                    angle: 0,
                    src: body,
                    z: 0,
                    anchor: "center",
                  },
                  children: [
                    {
                      data: {
                        parent: {
                          opacity: 1,
                          render: true,
                          name: "quiver",
                          size: new Vector(35, 45),
                          offset: new Vector(-15, -18),
                          angle: -4,
                          src: quiver,
                          z: -1,
                          positioning: "absolute",
                          anchor: "center",
                        },
                        children: [],
                      },
                    },
                    {
                      data: {
                        parent: {
                          opacity: 1,
                          render: true,
                          name: "head",
                          size: new Vector(45, 45),
                          offset: new Vector(7, -35),
                          angle: -4,
                          src: head,
                          z: 0,
                          positioning: "absolute",
                          anchor: "22.5px 30.5px",
                        },
                        children: [],
                      },
                    },
                    {
                      data: {
                        parent: {
                          opacity: 1,
                          render: true,
                          name: "lArm",
                          size: new Vector(24, 24),
                          offset: new Vector(33, 3),
                          angle: -0,
                          src: lArm,
                          z: -2,
                          anchor: "12px 4px",
                        },
                        children: [
                          {
                            data: {
                              parent: {
                                opacity: 1,
                                render: true,
                                name: "lHand",
                                size: new Vector(26, 20),
                                offset: new Vector(8, 20),
                                angle: 60,
                                src: lHand,
                                z: -1,
                                anchor: "6px 6px",
                              },
                              children: [
                                {
                                  data: {
                                    parent: {
                                      opacity: 1,
                                      render: true,
                                      name: "bow2",
                                      size: new Vector(25, 85),
                                      offset: new Vector(0, -35),
                                      angle: 23,
                                      src: bow2,
                                      z: 1,
                                      anchor: "center",
                                    },
                                    children: [],
                                  },
                                },
                                {
                                  data: {
                                    parent: {
                                      opacity: 1,
                                      render: false,
                                      name: "bow1",
                                      size: new Vector(40, 85),
                                      offset: new Vector(-10, -37),
                                      angle: 9,
                                      src: bow1,
                                      z: 1,
                                      anchor: "center",
                                    },
                                    children: [],
                                  },
                                },
                                {
                                  data: {
                                    parent: {
                                      opacity: 1,
                                      render: true,
                                      name: "fingers",
                                      size: new Vector(10, 16),
                                      offset: new Vector(16, 3),
                                      angle: 16,
                                      src: fingers,
                                      z: 1,
                                      anchor: "center",
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
                          render: true,
                          opacity: 1,
                          size: new Vector(26, 26),
                          offset: new Vector(-3, 7),
                          angle: 0,
                          src: rArm,
                          z: 2,
                          anchor: "8px 8px",
                        },
                        children: [
                          {
                            data: {
                              parent: {
                                opacity: 1,
                                render: true,
                                name: "rHand",
                                size: new Vector(26, 20),
                                offset: new Vector(17, 20),
                                angle: -16,
                                src: lHand,
                                z: 1,
                                anchor: "3px 3px",
                              },
                              children: [
                                {
                                  data: {
                                    parent: {
                                      opacity: 1,
                                      render: false,
                                      name: "arrow",
                                      size: new Vector(48, 24),
                                      offset: new Vector(20, 4),
                                      angle: -72,
                                      src: arrow,
                                      z: -1,
                                      anchor: "5px 5px",
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
                  ],
                },
              },
              {
                data: {
                  parent: {
                    name: "lLeg",
                    render: true,
                    opacity: 1,
                    size: new Vector(23, 23),
                    offset: new Vector(33, 95),
                    angle: -2,
                    src: lLeg,
                    z: -1,
                    anchor: "center",
                  },
                  children: [],
                },
              },
              {
                data: {
                  parent: {
                    name: "rLeg",
                    render: true,
                    opacity: 1,
                    size: new Vector(23, 23),
                    offset: new Vector(11, 95),
                    angle: 2,
                    src: rLeg,
                    z: -1,
                    anchor: "center",
                  },
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
