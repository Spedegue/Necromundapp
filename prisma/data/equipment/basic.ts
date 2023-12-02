import { Prisma } from "@prisma/client";
import { Ammo, RangedWeapon } from "../../../src/enums/weapons";
import { EquipmentType } from "../../../src/enums/equipmentType";

export const basicAmmo: Prisma.WeaponAmmoCreateInput[] = [
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Autogun,
        },
        create: {
          name: RangedWeapon.Autogun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Autogun, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "12",
        longRange: "24",
        ammoRoll: 4,
        shortModifier: 1,
        weaponStats: {
          create: {
            strength: "3",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Shotgun,
        },
        create: {
          name: RangedWeapon.Shotgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.SolidSlug, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "4",
        longRange: "18",
        ammoRoll: 4,
        shortModifier: 1,
        longModifier: -1,
        weaponStats: {
          create: {
            strength: "4",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Shotgun,
        },
        create: {
          name: RangedWeapon.Shotgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Scatter, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "4",
        longRange: "18",
        ammoRoll: 4,
        shortModifier: 1,
        longModifier: -1,
        weaponStats: {
          create: {
            strength: "3",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Shotgun,
        },
        create: {
          name: RangedWeapon.Shotgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Manstopper, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "4",
        longRange: "18",
        ammoRoll: 6,
        shortModifier: 1,
        longModifier: -1,
        default: false,
        weaponStats: {
          create: {
            strength: "4",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Shotgun,
        },
        create: {
          name: RangedWeapon.Shotgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HotShot, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "4",
        longRange: "18",
        ammoRoll: 6,
        shortModifier: 1,
        longModifier: -1,
        default: false,
        weaponStats: {
          create: {
            strength: "4",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Shotgun,
        },
        create: {
          name: RangedWeapon.Shotgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.BoltShells, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "4",
        longRange: "24",
        ammoRoll: 6,
        shortModifier: 1,
        longModifier: -1,
        default: false,
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
          name: RangedWeapon.HuntingRifle,
        },
        create: {
          name: RangedWeapon.HuntingRifle,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.HuntingRifle, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "32",
        ammoRoll: 4,
        shortModifier: -1,
        longModifier: 0,
        weaponStats: {
          create: {
            strength: "3",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Lasgun,
        },
        create: {
          name: RangedWeapon.Lasgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Lasgun, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "24",
        ammoRoll: 2,
        shortModifier: 1,
        longModifier: 0,
        weaponStats: {
          create: {
            strength: "3",
            damage: "1",
          },
        },
      },
    },
  },
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Boltgun,
        },
        create: {
          name: RangedWeapon.Boltgun,
          equipmentTypeId: EquipmentType.Basic,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Boltgun, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "12",
        longRange: "24",
        ammoRoll: 4,
        shortModifier: 1,
        longModifier: 0,
        weaponStats: {
          create: {
            strength: "3",
            damage: "1",
          },
        },
      },
    },
  },
];
