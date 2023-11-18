// Library
import { Scene, SceneManager } from "../../_SqueletoECS/Scene";
import { Vector } from "../../_SqueletoECS/Vector";
import { Engine } from "@peasy-lib/peasy-engine";
import { HUD } from "../hud";
import { Assets } from "@peasy-lib/peasy-assets";

// Entities
import { TemplateEntity } from "../Entities/entityTemplate";
import { UI } from "@peasy-lib/peasy-ui";
import { SkeletonAnimationSystem } from "../Systems/skeletonAnimation";

export class Test extends Scene {
  name: string = "test";
  entities: any = [];
  entitySystems: any = [];
  sceneSystems: any = [];
  public template = `
    <scene-layer>
        < \${ entity === } \${ entity <=* entities }>
        < \${ sceneSystem === } \${ sceneSystem <=* sceneSystems }>
    </scene-layer>
  `;

  public enter = async (): Promise<void> => {
    console.log("here");

    Assets.initialize({ src: "./src/Assets/" });
    await Assets.load([
      "1_head.png",
      "1_body.png",
      "1_arm left.png",
      "1_arm right.png",
      "1_hand left.png",
      "1_hand right.png",
      "1_fingers left.png",
      "1_leg left.png",
      "1_leg right.png",
      "1_quiver.png",
      "1_bow1.png",
      "1_bow2.png",
      "arrow.png",
    ]);

    let layers = SceneManager.viewport.layers;
    const game = layers.find(lyr => lyr.name == "game");
    if (game) this.view = UI.create(game.element as HTMLElement, this, this.template);

    let hud = layers.find(lyr => lyr.name == "hud");
    if (hud) UI.create(hud.element, new HUD(), HUD.template);

    this.entities.push(TemplateEntity.create());
    this.sceneSystems.push(new SkeletonAnimationSystem());
    console.log(this.entities);

    //Start GameLoop
    Engine.create({ fps: 60, started: true, callback: this.update });
  };

  //GameLoop update method
  update = (deltaTime: number): void | Promise<void> => {
    this.sceneSystems.forEach((system: any) => {
      system.update(deltaTime / 1000, 0, this.entities);
    });
  };
}
