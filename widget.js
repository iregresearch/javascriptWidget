export class Widget{
    constructor({position ='bottom-right'}={}){
        this.position= this.getPosition(position);
        this.open = false;
        this.intialise();
        this.addStyle();
    }
    getPosition(position= 'bottom-right'){
        const [vertical, horizontal] = position.split('-');
        return{
            [vertical]: '30px',
            [horizontal]: '30px'
        };
    }
    intialise(){
      let scr = document.createElement('script');
      scr.src="https://kit.fontawesome.com/8992f92588.js";
      document.body.appendChild(scr);
      let container = document.createElement("div");
      container.style.position= 'fixed';
      Object.keys(this.position)
      .forEach(key => container.style[key]= this.position[key]);
      let mainWidget =document.createElement('div');
      mainWidget.innerHTML=`
      <header><p>We are not here, drop us an email...</p></header>
      <input type="email" placeholder="Enter Your Email Address" id="email-input" class="inputs ">
      <input type="text" placeholder="Enter Your Email Message" id="text-input" class="input">
      <input type="submit" value="submit" id="submit-button" >`
      //main widget starts here 
      mainWidget.style.cssText=`  height: 300px;
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // position: fixed;
      // bottom: 120px;
      // right: 50px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`
      container.appendChild(mainWidget);
      document.body.appendChild(container);
      const buttonConatiner = document.createElement('div');
      buttonConatiner.innerHTML=`<i class="fa-solid fa-envelope" id="widget-icon"></i>`;
      container.appendChild(buttonConatiner);
      let icon = document.getElementById("widget-icon");
      mainWidget.id = 'main-widget';

    
      icon.addEventListener('click', toggleEmailBox);
      function toggleEmailBox(){
        if(this.open == true){
          mainWidget.style.cssText ="display :none;";
          this.open= false;
        }else{
          mainWidget.style.cssText ="display :block;";
          this.open= true;
        }
          
        }

    }
    addStyle(){
      let style = document.createElement("style");
      style.innerHTML=`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }
      
      #widget-icon{
        position: fixed;
        bottom: 50px;
        right: 50px;
        font-size:60px;
        cursor: pointer;
      }
      #main-widget{
        /* border: 1px solid ; */
        height: 300px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        bottom: 120px;
        right: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      #main-widget header{
        background-color: #01033D;
        color: white;
        padding: 30px 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
      }
      #submit-button{
        color: white;
        background-color: #01033D;
        padding: 10px 30px;
        border-radius: 8px;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .inputs{
        border-radius: 8px;
      }
      #email-input{
        padding: 10px;
        border-right:none ;
        border-left: none;
      }
      #text-input{
        padding: 30px;
        border-right: none;
        border-left:none;
      }
      .displayNone{
        display: none;
      `
      document.head.appendChild(style);
    }
}
let widget1 = new Widget(); 