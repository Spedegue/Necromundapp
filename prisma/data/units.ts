import { Prisma } from "@prisma/client";
import { UnitCategories } from "@/enums/unitCategories";
import { UnitTypes } from "@/enums/unitTypes";

export const unitCategories: Array<Prisma.UnitCategoryCreateInput> = [
  { id: UnitCategories.Standard },
  { id: UnitCategories.Scavvy },
  { id: UnitCategories.Redemptionist },
  { id: UnitCategories.Ratskin },
  { id: UnitCategories.Spyrer },
  { id: UnitCategories.PitSlave },
];

export const maxStats = {
  m: 4,
  wS: 6,
  bS: 6,
  s: 4,
  t: 4,
  w: 3,
  i: 6,
  a: 3,
  ld: 9,
};

export const gangerStats = {
  m: 4,
  wS: 3,
  bS: 3,
  s: 3,
  t: 3,
  w: 1,
  i: 3,
  a: 1,
  ld: 7,
};

export const juveStats = {
  m: 4,
  wS: 2,
  bS: 2,
  s: 3,
  t: 3,
  w: 1,
  i: 3,
  a: 1,
  ld: 6,
};

export const leaderStats = {
  m: 4,
  wS: 4,
  bS: 4,
  s: 3,
  t: 3,
  w: 1,
  i: 4,
  a: 1,
  ld: 8,
};

export const unitTypes: Prisma.UnitTypeCreateManyInput[] = [
  {
    unitCategoryId: UnitCategories.Standard,
    name: UnitTypes.Leader,
    cost: 120,
    baseStats: leaderStats,
    maxStats,
    startingXp: "60+1d6",
    minQuantity: 1,
    maxQuantity: 1,
  },
  {
    unitCategoryId: UnitCategories.Standard,
    name: UnitTypes.Heavy,
    cost: 60,
    baseStats: gangerStats,
    maxStats,
    startingXp: "60+1d6",
    minQuantity: 0,
    maxQuantity: 2,
  },
  {
    unitCategoryId: UnitCategories.Standard,
    name: UnitTypes.Ganger,
    cost: 50,
    baseStats: gangerStats,
    maxStats,
    startingXp: "20+1d6",
  },
  {
    unitCategoryId: UnitCategories.Standard,
    name: UnitTypes.Juve,
    cost: 25,
    baseStats: juveStats,
    maxStats,
    startingXp: "0",
    maxPercent: 50,
  },
];
