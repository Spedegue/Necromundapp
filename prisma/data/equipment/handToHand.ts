import { Prisma } from "@prisma/client";
import {
  Ammo,
  HandToHandWeapon,
  RangedWeapon,
} from "../../../src/enums/weapons";
import { EquipmentType } from "../../../src/enums/equipmentType";

export const handToHandSeed: Prisma.WeaponStatsCreateInput[] = [
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.Knife,
        },
        create: {
          name: HandToHandWeapon.Knife,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength}",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.ChainOrFlail,
        },
        create: {
          name: HandToHandWeapon.ChainOrFlail,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength} + 1",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.Club,
        },
        create: {
          name: HandToHandWeapon.Club,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength} + 1",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.MassiveWeapon,
        },
        create: {
          name: HandToHandWeapon.MassiveWeapon,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength} + 2",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.Sword,
        },
        create: {
          name: HandToHandWeapon.Sword,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength}",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.Chainsword,
        },
        create: {
          name: HandToHandWeapon.Chainsword,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "4",
    damage: "1",
    saveModifier: -2,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.PowerAxe,
        },
        create: {
          name: HandToHandWeapon.PowerAxe,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength} + 3",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.ShockMaul,
        },
        create: {
          name: HandToHandWeapon.ShockMaul,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "5",
    damage: "1",
    saveModifier: -2,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.PowerSword,
        },
        create: {
          name: HandToHandWeapon.PowerSword,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength} + 2",
    damage: "1",
    saveModifier: 0,
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: HandToHandWeapon.PowerFist,
        },
        create: {
          name: HandToHandWeapon.PowerFist,
          equipmentTypeId: EquipmentType.HandToHand,
        },
      },
    },
    strength: "{userStrength} + 5",
    damage: "d3",
    saveModifier: 0,
  },
];
