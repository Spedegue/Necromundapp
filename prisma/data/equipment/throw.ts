import { Prisma } from "@prisma/client";
import { Ammo, RangedWeapon } from "../../../src/enums/weapons";
import { EquipmentType } from "../../../src/enums/equipmentType";
import { Template } from "@/enums/template";

export const throwAmmo: Prisma.WeaponAmmoCreateInput[] = [
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.FragGrenade, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.GasCloud,
        default: false,
        weaponStats: {
          create: {
            strength: "3",
            damage: "1",
            saveModifier: -1,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.SmokeBomb, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.GasCloud,
        default: false,
        weaponStats: {
          create: {
            strength: "0",
            damage: "0",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.ChokeGrenade, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.GasCloud,
        default: false,
        weaponStats: {
          create: {
            strength: "0",
            damage: "0",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.ScareGrenade, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.GasCloud,
        default: false,
        weaponStats: {
          create: {
            strength: "0",
            damage: "0",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.PhotonFlare, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.Blast,
        default: false,
        weaponStats: {
          create: {
            strength: "0",
            damage: "0",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.KrakGrenade, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        default: false,
        weaponStats: {
          create: {
            strength: "6",
            damage: "d6",
            saveModifier: -3,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: { name: Ammo.PlasmaGrenade, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.Blast,
        default: false,
        weaponStats: {
          create: {
            strength: "5",
            damage: "1",
            saveModifier: -2,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: {
        name: Ammo.HallucinogenGrenade,
        equipmentTypeId: EquipmentType.Ammo,
      },
    },
    rangedStats: {
      create: {
        shortRange: "{userStrength} * 3",
        longRange: "{userStrength} * 3",
        ammoRoll: Infinity,
        shortModifier: 0,
        longModifier: -1,
        template: Template.GasCloud,
        default: false,
        weaponStats: {
          create: {
            strength: "0",
            damage: "0",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Throw,
        },
        create: {
          name: RangedWeapon.Throw,
          equipmentTypeId: EquipmentType.Throw,
        },
      },
    },
    ammo: {
      create: {
        name: Ammo.MeltaBomb,
        equipmentTypeId: EquipmentType.Ammo,
      },
    },
    rangedStats: {
      create: {
        shortRange: "0",
        longRange: "0",
        ammoRoll: Infinity,
        default: false,
        weaponStats: {
          create: {
            strength: "8",
            damage: "2d6",
            saveModifier: -5,
          },
        },
      },
    },
  },
];
