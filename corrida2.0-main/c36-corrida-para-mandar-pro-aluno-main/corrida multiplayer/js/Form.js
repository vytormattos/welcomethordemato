class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    this.greeting = createElement("h2");
    this.nick = ""
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

 handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
    playerCount+=1
    this.nick = this.input.value()===""?"player"+playerCount:this.input.value()
    var messages = `ola noob/lenda,${this.nick}
    </br>esperando a outra lenda/noob...`
    this.greeting.html(messages)
    player.name=this.nick
    player.index=playerCount
    player.addPlayer()
    player.updateCount(playerCount)
    player.getDistance()
  })
 }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed()
  }
}
