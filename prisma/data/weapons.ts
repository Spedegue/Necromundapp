import { Prisma } from "@prisma/client";
import { WeaponType } from "@/enums/weaponType";
import { Ammo, HandToHandWeapons, RangedWeapons } from "@/enums/weapons";

export const meleeWeapons: Array<Prisma.HandToHandWeaponCreateInput> = [
  {
    name: HandToHandWeapons.Knife,
    strength: "{userStrength}",
    damage: "1",
  },
  {
    name: HandToHandWeapons.ChainOrFlail,
    strength: "{userStrength}+1",
    damage: "1",
  },
  {
    name: HandToHandWeapons.Club,
    strength: "{userStrength}+1",
    damage: "1",
  },
  {
    name: HandToHandWeapons.MassiveWeapon,
    strength: "{userStrength}+2",
    damage: "1",
  },
  {
    name: HandToHandWeapons.Sword,
    strength: "{userStrength}",
    damage: "1",
  },
  {
    name: HandToHandWeapons.Chainsword,
    strength: "4",
    damage: "1",
    saveModifier: -2,
  },
  {
    name: HandToHandWeapons.PowerAxe,
    strength: "{userStrength}+3",
    damage: "1",
  },
  {
    name: HandToHandWeapons.ShockMaul,
    strength: "5",
    damage: "1",
    saveModifier: -2,
  },
  {
    name: HandToHandWeapons.PowerSword,
    strength: "{userStrength}+2",
    damage: "1",
  },
  {
    name: HandToHandWeapons.PowerFist,
    strength: "{userStrength}+5",
    damage: "d3",
  },
];

export const weaponTypes: Array<Prisma.WeaponTypeCreateInput> = [
  { name: WeaponType.Pistol },
  { name: WeaponType.Basic },
  { name: WeaponType.Special },
  { name: WeaponType.Heavy },
  { name: WeaponType.HandToHand },
];

export const rangedWeapons: Array<Prisma.RangedWeaponCreateInput> = [
  {
    name: RangedWeapons.StubGun,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.StubGun,
            shortRange: 8,
            longRange: 16,
            shortModifier: 1,
            strength: 3,
            damage: "1",
            ammoRoll: 4,
          },
          {
            name: Ammo.DumDum,
            shortRange: 8,
            longRange: 16,
            shortModifier: 1,
            strength: 4,
            damage: "1",
            ammoRoll: 4,
            default: false,
            //   TODO Add exploding special
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.Autopistol,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      create: {
        name: Ammo.Autopistol,
        shortRange: 8,
        longRange: 16,
        shortModifier: 2,
        strength: 3,
        damage: "1",
        ammoRoll: 4,
      },
    },
  },
  {
    name: RangedWeapons.Laspistol,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      create: {
        name: Ammo.Laspistol,
        shortRange: 8,
        longRange: 16,
        shortModifier: 1,
        strength: 3,
        damage: "1",
        ammoRoll: 2,
      },
    },
  },
  {
    name: RangedWeapons.HandFlamer,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      create: {
        name: Ammo.HandFlamer,
        shortRange: 0,
        longRange: 0,
        strength: 3,
        damage: "1",
        ammoRoll: 5,
        saveModifier: -1,
        template: "Hand Flamer",
      },
      // Todo add specials
    },
  },
  {
    name: RangedWeapons.BoltPistol,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      create: {
        name: Ammo.BoltPistol,
        shortRange: 8,
        longRange: 16,
        shortModifier: 2,
        strength: 4,
        damage: "1",
        ammoRoll: 6,
        saveModifier: -1,
      },
    },
  },
  {
    name: RangedWeapons.PlasmaPistol,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.PPLowPower,
            shortRange: 8,
            longRange: 16,
            shortModifier: 1,
            strength: 4,
            damage: "1",
            ammoRoll: 4,
            saveModifier: -1,
          },
          {
            name: Ammo.PPMaxPower,
            shortRange: 8,
            longRange: 16,
            shortModifier: 2,
            strength: 5,
            damage: "1",
            ammoRoll: 6,
            saveModifier: -2,
            //   TODO Add Gets hot special
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.NeedlePistol,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      create: {
        name: Ammo.NeedlePistol,
        shortRange: 8,
        longRange: 16,
        shortModifier: 2,
        strength: 3,
        damage: "1",
        ammoRoll: 6,
        saveModifier: -1,
        // Todo add specials
      },
    },
  },
  {
    name: RangedWeapons.WebPistol,
    weaponType: { connect: { name: WeaponType.Pistol } },
    ammo: {
      create: {
        name: Ammo.WebPistol,
        shortRange: 6,
        longRange: 9,
        longModifier: -1,
        strength: 0,
        damage: "0",
        ammoRoll: 6,
        // Todo specials
      },
    },
  },
  {
    name: RangedWeapons.Autogun,
    weaponType: { connect: { name: WeaponType.Basic } },
    ammo: {
      create: {
        name: Ammo.Autogun,
        shortRange: 12,
        longRange: 24,
        shortModifier: 1,
        longModifier: 0,
        strength: 3,
        damage: "1",
        ammoRoll: 4,
      },
    },
  },
  {
    name: RangedWeapons.Shotgun,
    weaponType: { connect: { name: WeaponType.Basic } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.SolidSlug,
            shortRange: 4,
            longRange: 18,
            shortModifier: 1,
            longModifier: -1,
            strength: 4,
            damage: "1",
            ammoRoll: 4,
            //   Todo add special
          },
          {
            name: Ammo.Scatter,
            shortRange: 4,
            longRange: 18,
            shortModifier: 1,
            longModifier: -1,
            strength: 3,
            damage: "1",
            ammoRoll: 4,
            //   TODO Add special
          },
          {
            name: Ammo.Manstopper,
            shortRange: 4,
            longRange: 18,
            shortModifier: 1,
            strength: 4,
            damage: "1",
            ammoRoll: 4,
            default: false,
            //   TODO Add special
          },
          {
            name: Ammo.HotShot,
            shortRange: 4,
            longRange: 18,
            shortModifier: 1,
            longModifier: -1,
            strength: 4,
            damage: "1",
            ammoRoll: 6,
            default: false,
            //   TODO Add special
          },
          {
            name: Ammo.Bolt,
            shortRange: 4,
            longRange: 24,
            shortModifier: 1,
            strength: 4,
            saveModifier: -1,
            damage: "1",
            default: false,
            ammoRoll: 6,
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.HuntingRifle,
    weaponType: { connect: { name: WeaponType.Basic } },
    ammo: {
      create: {
        name: Ammo.HuntingRifle,
        shortRange: 8,
        longRange: 32,
        shortModifier: -1,
        longModifier: 0,
        strength: 3,
        damage: "1",
        ammoRoll: 4,
        //   todo add special
      },
    },
  },
  {
    name: RangedWeapons.Lasgun,
    weaponType: { connect: { name: WeaponType.Basic } },
    ammo: {
      create: {
        name: Ammo.Lasgun,
        shortRange: 8,
        longRange: 24,
        shortModifier: 1,
        longModifier: 0,
        strength: 3,
        damage: "1",
        ammoRoll: 2,
      },
    },
  },
  {
    name: RangedWeapons.Boltgun,
    weaponType: { connect: { name: WeaponType.Basic } },
    ammo: {
      create: {
        name: Ammo.Boltgun,
        shortRange: 12,
        longRange: 24,
        shortModifier: 1,
        longModifier: 0,
        strength: 3,
        damage: "1",
        ammoRoll: 4,
      },
    },
  },
  {
    name: RangedWeapons.Autoslugger,
    weaponType: { connect: { name: WeaponType.Special } },
    ammo: {
      create: {
        name: Ammo.Autoslugger,
        shortRange: 12,
        longRange: 24,
        shortModifier: 1,
        longModifier: 0,
        strength: 3,
        damage: "1",
        ammoRoll: 5,
        sustainedFireDice: 1,
      },
    },
  },
  {
    name: RangedWeapons.Flamer,
    weaponType: { connect: { name: WeaponType.Special } },
    ammo: {
      create: {
        name: Ammo.Flamer,
        shortRange: 0,
        longRange: 0,
        strength: 4,
        damage: "1",
        ammoRoll: 4,
        saveModifier: -2,
        template: "Flamer",
        //   Todo specials
      },
    },
  },
  {
    name: RangedWeapons.GrenadeLauncher,
    weaponType: { connect: { name: WeaponType.Special } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.FragGrenade,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 3,
            damage: "1",
            ammoRoll: 6,
            saveModifier: -1,
            template: '5" Gas Cloud',
            default: false,
            //   Todo specials
          },
          {
            name: Ammo.SmokeBomb,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 0,
            damage: "0",
            ammoRoll: 6,
            template: '5" Gas Cloud',
            default: false,
            //   Todo specials
          },
          {
            name: Ammo.ChokeGrenade,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 0,
            damage: "0",
            ammoRoll: 6,
            template: '5" Gas Cloud',
            default: false,
            //   Todo specials
          },
          {
            name: Ammo.ScareGrenade,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 0,
            damage: "0",
            ammoRoll: 6,
            template: '5" Gas Cloud',
            default: false,
            //   Todo specials
          },
          {
            name: Ammo.PhotonFlare,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 0,
            damage: "0",
            ammoRoll: 6,
            template: '3" Blast',

            default: false, //   Todo specials
          },
          {
            name: Ammo.KrakGrenade,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 6,
            damage: "d6",
            ammoRoll: 6,
            saveModifier: -3,
            //   Todo specials
          },
          {
            name: Ammo.PlasmaGrenade,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 5,
            damage: "1",
            ammoRoll: 6,
            saveModifier: -2,
            template: '3" Blast',

            default: false, //   Todo specials
          },
          {
            name: Ammo.HallucinogenGrenade,
            shortRange: 14,
            longRange: 28,
            longModifier: -1,
            strength: 0,
            damage: "0",
            ammoRoll: 6,
            saveModifier: 0,
            template: '5" Gas Cloud',
            default: false,
            //   Todo specials
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.PlasmaGun,
    weaponType: { connect: { name: WeaponType.Special } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.PGLowPower,
            shortRange: 8,
            longRange: 24,
            shortModifier: 1,
            strength: 5,
            damage: "1",
            ammoRoll: 4,
            saveModifier: -2,
          },
          {
            name: Ammo.PGMaxPower,
            shortRange: 12,
            longRange: 24,
            shortModifier: 1,
            strength: 6,
            damage: "1",
            ammoRoll: 6,
            saveModifier: -3,
            //   Todo Special
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.Meltagun,
    weaponType: { connect: { name: WeaponType.Special } },
    ammo: {
      create: {
        name: Ammo.Meltagun,
        shortRange: 6,
        longRange: 12,
        shortModifier: 1,
        strength: 8,
        damage: "d6",
        ammoRoll: 4,
        saveModifier: -5,
        //   Todo specials
      },
    },
  },
  {
    name: RangedWeapons.NeedleRifle,
    weaponType: { connect: { name: WeaponType.Special } },
    ammo: {
      create: {
        name: Ammo.NeedleRifle,
        shortRange: 16,
        longRange: 32,
        shortModifier: 1,
        strength: 3,
        damage: "1",
        ammoRoll: 6,
        saveModifier: -1,
        //   Todo specials
      },
    },
  },
  {
    name: RangedWeapons.HeavyFlamer,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      create: {
        name: Ammo.HeavyFlamer,
        shortRange: 0,
        longRange: 0,
        strength: 5,
        damage: "d3",
        ammoRoll: 3,
        saveModifier: -3,
        template: "HeavyFlamer",
        //   Todo specials
      },
    },
  },
  {
    name: RangedWeapons.HeavyStubber,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      create: {
        name: Ammo.HeavyStubber,
        shortRange: 20,
        longRange: 40,
        strength: 4,
        damage: "1",
        ammoRoll: 4,
        saveModifier: -1,
        sustainedFireDice: 2,
      },
    },
  },
  {
    name: RangedWeapons.HeavyBolter,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      create: {
        name: Ammo.HeavyBolter,
        shortRange: 20,
        longRange: 40,
        strength: 5,
        damage: "d3",
        ammoRoll: 6,
        saveModifier: -2,
        sustainedFireDice: 2,
      },
    },
  },
  {
    name: RangedWeapons.MissileLauncher,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.FragMissile,
            shortRange: 20,
            longRange: 72,
            strength: 4,
            damage: "1",
            ammoRoll: 6,
            saveModifier: -2,
            template: '5" Gas Cloud',
            default: false,
          },
          {
            name: Ammo.KrakMissile,
            shortRange: 20,
            longRange: 72,
            strength: 8,
            damage: "d6",
            ammoRoll: 6,
            saveModifier: -5,
            default: false,
            //   Todo special
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.HeavyPlasmaGun,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      createMany: {
        data: [
          {
            name: Ammo.HPGLowPower,
            shortRange: 20,
            longRange: 40,
            strength: 7,
            damage: "d3",
            ammoRoll: 4,
            saveModifier: -4,
            template: '3" Blast',
            //   Todo special
          },
          {
            name: Ammo.HPGMaxPower,
            shortRange: 20,
            longRange: 72,
            strength: 8,
            damage: "d6",
            ammoRoll: 6,
            saveModifier: -5,
            //   Todo special
          },
        ],
      },
    },
  },
  {
    name: RangedWeapons.Autocannon,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      create: {
        name: Ammo.Autocannon,
        shortRange: 20,
        longRange: 72,
        strength: 8,
        damage: "d6",
        ammoRoll: 4,
        saveModifier: -5,
        sustainedFireDice: 1,
      },
    },
  },
  {
    name: RangedWeapons.Lascannon,
    weaponType: { connect: { name: WeaponType.Heavy } },
    ammo: {
      create: {
        name: Ammo.Lascannon,
        shortRange: 20,
        longRange: 60,
        strength: 9,
        damage: "2d6",
        ammoRoll: 2,
        saveModifier: -6,
        //   Todo special
      },
    },
  },
];
