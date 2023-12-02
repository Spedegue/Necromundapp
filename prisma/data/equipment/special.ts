import { Prisma } from "@prisma/client";
import { Ammo, RangedWeapon } from "../../../src/enums/weapons";
import { EquipmentType } from "../../../src/enums/equipmentType";
import { Template } from "../../../src/enums/template";

export const specialAmmo: Prisma.WeaponAmmoCreateInput[] = [
  {
    weapon: {
      connectOrCreate: {
        where: {
          name: RangedWeapon.Autoslugger,
        },
        create: {
          name: RangedWeapon.Autoslugger,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Autoslugger, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "12",
        longRange: "24",
        ammoRoll: 5,
        shortModifier: 1,
        longModifier: 0,
        sustainedFireDice: 1,
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
          name: RangedWeapon.Flamer,
        },
        create: {
          name: RangedWeapon.Flamer,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      create: { name: Ammo.Flamer, equipmentTypeId: EquipmentType.Ammo },
    },
    rangedStats: {
      create: {
        shortRange: "0",
        longRange: "0",
        ammoRoll: 4,
        shortModifier: 0,
        longModifier: 0,
        template: Template.Flamer,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: { name: Ammo.FragGrenade, equipmentTypeId: EquipmentType.Ammo },
        where: { name: Ammo.FragGrenade },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: { name: Ammo.SmokeBomb, equipmentTypeId: EquipmentType.Ammo },
        where: { name: Ammo.SmokeBomb },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: {
          name: Ammo.ChokeGrenade,
          equipmentTypeId: EquipmentType.Ammo,
        },
        where: { name: Ammo.ChokeGrenade },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: {
          name: Ammo.ScareGrenade,
          equipmentTypeId: EquipmentType.Ammo,
        },
        where: { name: Ammo.ScareGrenade },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: { name: Ammo.PhotonFlare, equipmentTypeId: EquipmentType.Ammo },
        where: { name: Ammo.PhotonFlare },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: { name: Ammo.KrakGrenade, equipmentTypeId: EquipmentType.Ammo },
        where: { name: Ammo.KrakGrenade },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: {
          name: Ammo.PlasmaGrenade,
          equipmentTypeId: EquipmentType.Ammo,
        },
        where: { name: Ammo.PlasmaGrenade },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.GrenadeLauncher,
        },
        create: {
          name: RangedWeapon.GrenadeLauncher,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      connectOrCreate: {
        create: {
          name: Ammo.HallucinogenGrenade,
          equipmentTypeId: EquipmentType.Ammo,
        },
        where: { name: Ammo.HallucinogenGrenade },
      },
    },
    rangedStats: {
      create: {
        shortRange: "14",
        longRange: "28",
        ammoRoll: 6,
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
          name: RangedWeapon.PlasmaGun,
        },
        create: {
          name: RangedWeapon.PlasmaGun,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      create: {
        name: Ammo.PGLowPower,
        equipmentTypeId: EquipmentType.Ammo,
      },
    },
    rangedStats: {
      create: {
        shortRange: "8",
        longRange: "24",
        ammoRoll: 4,
        shortModifier: 1,
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
          name: RangedWeapon.PlasmaGun,
        },
        create: {
          name: RangedWeapon.PlasmaGun,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      create: {
        name: Ammo.PGMaxPower,
        equipmentTypeId: EquipmentType.Ammo,
      },
    },
    rangedStats: {
      create: {
        shortRange: "12",
        longRange: "24",
        ammoRoll: 6,
        shortModifier: 1,
        weaponStats: {
          create: {
            strength: "6",
            damage: "1",
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
          name: RangedWeapon.Meltagun,
        },
        create: {
          name: RangedWeapon.Meltagun,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      create: {
        name: Ammo.Meltagun,
        equipmentTypeId: EquipmentType.Ammo,
      },
    },
    rangedStats: {
      create: {
        shortRange: "6",
        longRange: "12",
        ammoRoll: 4,
        shortModifier: 1,
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
          name: RangedWeapon.NeedleRifle,
        },
        create: {
          name: RangedWeapon.NeedleRifle,
          equipmentTypeId: EquipmentType.Special,
        },
      },
    },
    ammo: {
      create: {
        name: Ammo.NeedleRifle,
        equipmentTypeId: EquipmentType.Ammo,
      },
    },
    rangedStats: {
      create: {
        shortRange: "16",
        longRange: "32",
        ammoRoll: 6,
        shortModifier: 1,
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
];
