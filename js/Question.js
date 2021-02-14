class Question {
    constructor() {
    this.input1 = createInput("Name");
    this.button = createButton('Submit');
    this.input2 = createInput("Answer Number");
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.question = createElement('h4')
    this.title = createElement('h3')
  }

  hide(){
    this.input2.hide()
    this.button.hide()
    this.input1.hide()
    this.option2.hide()
    this.option1.hide()
    this.title.hide()
    this.question.hide()
  }
  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts with an e, end with an e, but has only one letter?");
    this.question.position(150, 80);
    this.option1.html("1: Everyone")
    this.option1.position(150, 100);
    this.option2.html("2: Envelope");
    this.option2.position(150, 120);
    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(300, 275);
  }
}
  