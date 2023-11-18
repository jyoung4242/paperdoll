import { UI, UIView } from "@peasy-lib/peasy-ui";
import { Signal } from "../_SqueletoECS/Signals";

export class HUD {
  animationSignal = new Signal("changeAnimation");
  welcomeText = "WELCOME TO SQUELETO ECS";
  changeAnimation = (_e: any, _m: any, el: HTMLElement, _ev: any, _o: any) => {
    let anim = el.getAttribute("data-id");

    switch (anim) {
      case "walk":
        this.animationSignal.send(["walk"]);
        break;
      case "idle":
        this.animationSignal.send(["default"]);
        break;
      case "attack":
        this.animationSignal.send(["attack"]);
        break;
      case "run":
        this.animationSignal.send(["run"]);
        break;
    }
  };
  static template = `
  <style>
        .hudTitle{
            position: fixed;
            right: 50px;
            top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;            
        }
        .animationLink{
          color:whitesmoke;
        }
        .animationLink:hover{
          color:blue;
        }
        

  </style>
  
  <div style="position: fixed; top: 35px; right: 50px; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-end; gap: 5px;">
    <a class="animationLink" href="#" data-id="idle" \${click@=>changeAnimation}>Idle Animation</a>    
    <a class="animationLink" href="#" data-id="walk" \${click@=>changeAnimation}>Walk Animation</a>
    <a class="animationLink" href="#" data-id="run" \${click@=>changeAnimation} >Run Animation</a>
    <a class="animationLink" href="#" data-id="attack" \${click@=>changeAnimation} >Attack Animation</a>
  </div>
  `;
  create() {}
}
