/**
 * Action Types
 */

export enum RecipeSetsTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE"
}

/**
 * Data Types
 */

class Icon {
  col: number;
  row: number;
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
}

export enum RecipeCategory {
  ROCKET_BUILDING = "rocket-building",
  CRAFTING = "crafting",
  OIL_PROCESSING = "oil-processing",
  CRAFTING_WITH_FLUID = "crafting-with-fluid",
  CHEMISTRY = "chemistry",
  ADVANCED_CRAFTING = "advanced-crafting",
  CENTRIFUGING = "centrifuging",
  SMELTING = "smelting"
}

class Recipe {
  name: string;
  icon: Icon;
  category: RecipeCategory;
  constructor(name, col, row, category, time, ingredients, products) {
    this.name = name;
    this.icon = new Icon(col, row);
    this.category = category;
  }
}

export enum EnergyType {
  ELECTRIC = "electric",
  BURNER = "burner"
}

export interface Accumulator {
  icon_col: number;
  icon_row: number;
  name: string;
}

export interface RecipeSet {
  accumulators: Accumulator[];
}

/**
 * State type
 */

export interface RecipeSetsState {
  readonly data: RecipeSet;
  readonly loading: boolean;
  readonly error: boolean;
}
