import { Prisma } from "@prisma/client";
import { House } from "@/enums/house";
import { UnitCategories } from "@/enums/unitCategories";

export const houses: Array<Prisma.HouseCreateInput> = [
  { name: House.Cawdor },
  { name: House.Escher },
  { name: House.Delaque },
  { name: House.Goliath },
  { name: House.Orlock },
  { name: House.VanSaar },
  { name: House.Scavvies, isOutlander: true },
  { name: House.Redemptionists, isOutlander: true },
  { name: House.Ratskins, isOutlander: true },
  { name: House.Spyrers, isOutlander: true },
  { name: House.PitSlaves, isOutlander: true },
];

export const houseUnitTypes: Array<Prisma.HouseUnitTypeCreateManyInput> = [
  {
    houseId: House.Cawdor,
    unitCategoryId: UnitCategories.Standard,
  },
  {
    houseId: House.Escher,
    unitCategoryId: UnitCategories.Standard,
  },
  {
    houseId: House.Delaque,
    unitCategoryId: UnitCategories.Standard,
  },
  {
    houseId: House.Goliath,
    unitCategoryId: UnitCategories.Standard,
  },
  {
    houseId: House.Orlock,
    unitCategoryId: UnitCategories.Standard,
  },
  {
    houseId: House.VanSaar,
    unitCategoryId: UnitCategories.Standard,
  },
  {
    houseId: House.Scavvies,
    unitCategoryId: UnitCategories.Scavvy,
  },
  {
    houseId: House.Redemptionists,
    unitCategoryId: UnitCategories.Redemptionist,
  },
  {
    houseId: House.Ratskins,
    unitCategoryId: UnitCategories.Ratskin,
  },
  {
    houseId: House.Spyrers,
    unitCategoryId: UnitCategories.Spyrer,
  },
  {
    houseId: House.PitSlaves,
    unitCategoryId: UnitCategories.PitSlave,
  },
];
