import { Prisma } from "@prisma/client";
import { Ammo, RangedWeapon } from "../../../src/enums/weapons";
import { EquipmentType } from "../../../src/enums/equipmentType";

export const pistolAmmo: Prisma.WeaponAmmoCreateInput[] = [
  {
    weapon: {
      create: {
        name: RangedWeapon.StubGun,
        equipmentTypeId: EquipmentType.Pistol,
      },
    },
    ammo: {
      create: { name: Ammo.StubGun, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        shortModifier: 1,
        ammoRoll: 4,
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
    weapon: { connect: { name: RangedWeapon.StubGun } },
    ammo: {
      create: { name: Ammo.DumDum, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        default: false,
        shortRange: "8",
        longRange: "16",
        shortModifier: 1,
        ammoRoll: 4,
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
      create: {
        name: RangedWeapon.Autopistol,
        equipmentTypeId: EquipmentType.Pistol,
      },
    },
    ammo: {
      create: { name: Ammo.Autopistol, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        shortModifier: 2,
        ammoRoll: 4,
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
      create: {
        name: RangedWeapon.Laspistol,
        equipmentTypeId: EquipmentType.Pistol,
      },
    },
    ammo: {
      create: { name: Ammo.Laspistol, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        ammoRoll: 2,
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
      create: {
        name: RangedWeapon.HandFlamer,
        equipmentTypeId: EquipmentType.Pistol,
      },
    },
    ammo: {
      create: { name: Ammo.HandFlamer, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "0",
        longRange: "0",
        ammoRoll: 5,
        template: "Hand Flamer",
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
      create: {
        name: RangedWeapon.BoltPistol,
        equipmentTypeId: EquipmentType.Pistol,
      },
    },
    ammo: {
      create: { name: Ammo.BoltPistol, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        ammoRoll: 6,
        shortModifier: 2,

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
          name: RangedWeapon.PlasmaPistol,
        },
        create: {
          name: RangedWeapon.PlasmaPistol,
          equipmentTypeId: EquipmentType.Pistol,
        },
      },
    },
    ammo: {
      create: { name: Ammo.PPLowPower, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        ammoRoll: 4,
        shortModifier: 1,
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
          name: RangedWeapon.PlasmaPistol,
        },
        create: {
          name: RangedWeapon.PlasmaPistol,
          equipmentTypeId: EquipmentType.Pistol,
        },
      },
    },
    ammo: {
      create: { name: Ammo.PPMaxPower, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        ammoRoll: 6,
        shortModifier: 2,
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
          name: RangedWeapon.NeedlePistol,
        },
        create: {
          name: RangedWeapon.NeedlePistol,
          equipmentTypeId: EquipmentType.Pistol,
        },
      },
    },
    ammo: {
      create: { name: Ammo.NeedlePistol, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "16",
        ammoRoll: 6,
        shortModifier: 2,
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
          name: RangedWeapon.WebPistol,
        },
        create: {
          name: RangedWeapon.WebPistol,
          equipmentTypeId: EquipmentType.Pistol,
        },
      },
    },
    ammo: {
      create: { name: Ammo.WebPistol, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "6",
        longRange: "9",
        ammoRoll: 6,
        longModifier: -1,
        weaponStats: {
          create: {
            strength: "0",
            damage: "0",
          },
        },
      },
    },
  },
];
