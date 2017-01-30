var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.levels = ko.observableArray(["Newborn", "Teen", "Adult", "Hero"]);
this.nicknames = ko.observableArray([{ name: "Josefine" }, { name: "Sammy" }, { name: "Rex" }, { name: "Poppy" }]);
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/');
  this.level = ko.computed(function(){
    if (this.clickCount() === 0)
      return this.levels()[0];
    else if(this.clickCount() < 20)
      return this.levels()[1];
    else if(this.clickCount() < 50)
      return this.levels()[2];
    else
      return this.levels()[3];
  }, this);
  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
  }
}

ko.applyBindings(new ViewModel());