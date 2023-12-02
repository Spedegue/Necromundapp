import { Prisma } from "@prisma/client";
import { Ammo, RangedWeapon } from "../../../src/enums/weapons";
import { EquipmentType } from "../../../src/enums/equipmentType";
import { Template } from "../../../src/enums/template";

export const heavyAmmo: Prisma.WeaponAmmoCreateInput[] = [
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.HeavyFlamer,
        },
        create: {
          name: RangedWeapon.HeavyFlamer,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HeavyFlamer, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "0",
        longRange: "0",
        ammoRoll: 3,
        shortModifier: 0,
        longModifier: 0,
        template: Template.HeavyFlamer,
        weaponStats: {
          create: {
            strength: "5",
            damage: "d3",
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
          name: RangedWeapon.HeavyStubber,
        },
        create: {
          name: RangedWeapon.HeavyStubber,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HeavyStubber, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "40",
        ammoRoll: 4,
        shortModifier: 0,
        longModifier: 0,
        sustainedFireDice: 2,
        weaponStats: {
          create: {
            strength: "4",
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
          name: RangedWeapon.HeavyBolter,
        },
        create: {
          name: RangedWeapon.HeavyBolter,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HeavyBolter, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "40",
        ammoRoll: 6,
        shortModifier: 0,
        longModifier: 0,
        sustainedFireDice: 2,
        weaponStats: {
          create: {
            strength: "5",
            damage: "d3",
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
          name: RangedWeapon.MissileLauncher,
        },
        create: {
          name: RangedWeapon.MissileLauncher,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.FragMissile, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "72",
        ammoRoll: 6,
        shortModifier: 0,
        longModifier: 0,
        template: Template.GasCloud,
        default: false,
        weaponStats: {
          create: {
            strength: "4",
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
          name: RangedWeapon.MissileLauncher,
        },
        create: {
          name: RangedWeapon.MissileLauncher,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.KrakMissile, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "72",
        ammoRoll: 6,
        shortModifier: 0,
        longModifier: 0,
        default: false,
        weaponStats: {
          create: {
            strength: "8",
            damage: "d6",
            saveModifier: -5,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.HeavyPlasmaGun,
        },
        create: {
          name: RangedWeapon.HeavyPlasmaGun,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HPGLowPower, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "40",
        ammoRoll: 4,
        shortModifier: 0,
        longModifier: 0,
        template: Template.Blast,
        weaponStats: {
          create: {
            strength: "7",
            damage: "d3",
            saveModifier: -4,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.HeavyPlasmaGun,
        },
        create: {
          name: RangedWeapon.HeavyPlasmaGun,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HPGMaxPower, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "72",
        ammoRoll: 6,
        shortModifier: 0,
        longModifier: 0,
        template: Template.GasCloud,
        weaponStats: {
          create: {
            strength: "8",
            damage: "d6",
            saveModifier: -5,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Autocannon,
        },
        create: {
          name: RangedWeapon.Autocannon,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Autocannon, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "72",
        ammoRoll: 4,
        shortModifier: 0,
        longModifier: 0,
        sustainedFireDice: 1,
        weaponStats: {
          create: {
            strength: "8",
            damage: "d6",
            saveModifier: -5,
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Lascannon,
        },
        create: {
          name: RangedWeapon.Lascannon,
          equipmentTypeId: EquipmentType.Heavy,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Lascannon, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "20",
        longRange: "60",
        ammoRoll: 2,
        shortModifier: 0,
        longModifier: 0,
        weaponStats: {
          create: {
            strength: "9",
            damage: "2d6",
            saveModifier: -6,
          },
        },
      },
    },
  },
];
