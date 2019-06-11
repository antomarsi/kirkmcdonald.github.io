class Requirements {
  rate: Number;
  item: Item;
  dependencies: Requirements[];
  constructor(rate: Number, item: Item) {
    this.rate = rate;
    this.item = item;
    this.dependencies = [];
  }
  add = (reqs: Requirements, suppress: boolean) => {
    if (reqs.item && !suppress) {
      this.dependencies.push(reqs);
    }
  };
}

class Totals {
  reqs: Requirements;
  topo: string[];
  constructor(rate: Number, item: Item) {
    this.reqs = new Requirements(rate, item);
    this.totals = {};
    this.unfinished = {};
    this.waste = {};
    this.topo = [];
  }

  add = (recipeName: string, rate: Number) => {
    this.topo.push(recipeName);
    this.totals[recipeName] = (this.totals[recipeName] || zero).add(rate);
  };

  addUnfinished = (itemName: string, rate: number) => {
    this.unfinished[itemName] = (this.unfinished[itemName] || zero).add(rate);
  };

  addWaste = (itemName: string, rate: Number) => {
    this.waste[itemName] = (this.waste[itemName] || zero).add(rate);
  };

  get = recipeName => {
    return this.totals[recipeName];
  };

  getWaste = itemName => (!this.waste[itemName] ? zero : this.waste[itemName]);

  combine = (other: Totals, suppress: boolean) => {
    this.reqs.add(other.reqs, suppress);
    let newTopo: string[] = [];
    this.topo.forEach((recipeName: string) => {
      if (!(recipeName in other.totals)) {
        newTopo.push(recipeName);
      }
    });
    newTopo = newTopo.concat(other.topo);

    other.totals.forEach(recipeName => {
      this.add(recipeName, other.totals[recipeName]);
    });

    other.unfinished.forEach(recipeName => {
      this.addUnfinished(recipeName, other.unfinished[recipeName]);
    });

    other.totals.forEach(recipeName => {
      this.addWaste(recipeName, other.totals[recipeName]);
    });
    this.topo = newTopo;
  };
}
