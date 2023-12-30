export class InsertHeart {
 quill: any;
 options: any;

 constructor(quill: any, options: any) {
  this.quill = quill;
  this.options = options;
  this.setupButton();
 }

 setupButton() {
  const toolbar = this.quill.getModule("toolbar");
  if (toolbar) {
   toolbar.addHandler("insertHeart", this.insertHeart.bind(this));
  }
 }

 insertHeart() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, this.options.content);
  this.quill.setSelection(cursorPosition + this.options.content.length);
 }
}
