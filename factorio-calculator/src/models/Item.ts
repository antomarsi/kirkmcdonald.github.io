interface ItemInterface {
  name: string;
  icon_col: Number;
  icon_row: Number;
  recipes: Array<any>;
  uses: Array<any>;
  phase: string;
  group: string;
  subgroup: string;
  order: string;
}

export class Item implements ItemInterface {
  name: string;
  icon_col: Number;
  icon_row: Number;
  recipes: any[];
  uses: any[];
  phase: string;
  group: string;
  subgroup: string;
  order: string;

  constructor(name, col, row, phase, group, subgroup, order) {
    this.name = name;
    this.icon_col = col;
    this.icon_row = row;
    this.recipes = [];
    this.uses = [];
    this.phase = phase;
    this.group = group;
    this.subgroup = subgroup;
    this.order = order;
  }
  addRecipe = recipe => this.recipes.push(recipe);

  addUse = recipe => this.uses.push(recipe);

  isWeird = () =>
    this.recipes.length > 1 || this.recipes[0].solveGroup !== null;

  produce = (rate, ignore, spec) => {
    let totals = new Totals(rate, this);
    if (this.isWeird()) {
      totals.addUnfinished(this.name, rate);
      return totals;
    }
    let recipe = this.recipes[0];
    let gives = recipe.gives(this, spec);
    rate = rate.div(gives);
    totals.add(recipe.name, rate);
    if (ignore[recipe.name]) {
      return totals;
    }
    let ingredients = recipe.ingredients.concat(recipe.fuelIngredient(spec));
    // TODO: Change to foreach
    for (var i = 0; i < ingredients.length; i++) {
      let ing = ingredients[i];
      let subTotals = ing.item.produce(rate.mul(ing.amount), ignore, spec);
      totals.combine(subTotals);
    }
    return totals;
  }

  renderTooltip = (extra) => {
    if (this.recipes.length === 1 && this.recipes[0].name === this.name) {
        return this.recipes[0].renderTooltip(extra)
    }
    var t = document.createElement("div")
    t.classList.add("frame")
    var title = document.createElement("h3")
    var im = getImage(this, true)
    title.appendChild(im)
    title.appendChild(new Text(formatName(this.name)))
    t.appendChild(title)
    if (extra) {
        t.appendChild(extra)
    }
    return t
}
}
