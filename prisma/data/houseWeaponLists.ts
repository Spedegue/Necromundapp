import { Prisma } from ".prisma/client";
import { House } from "../../src/enums/house";
import { Ammo, HandToHandWeapon, RangedWeapon } from "../../src/enums/weapons";
import { Equipment } from "../../src/enums/equipment";

interface IWeaponList {
  leader: Array<{ weapon: RangedWeapon | HandToHandWeapon; price: number }>;
  gang: Array<{ weapon: RangedWeapon | HandToHandWeapon; price: number }>;
}

interface HouseWeaponList {
  ranged: IWeaponList;
  handToHand: IWeaponList;
}

const generateCommonAmmo = (
  house: House
): Array<Prisma.HouseAmmoListCreateInput> => {
  return [
    {
      house: { connect: { name: house } },
      ammo: {
        connect: {
          name: Ammo.FragGrenade,
        },
      },
      price: 25,
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 40,
      ammo: {
        connect: {
          name: Ammo.KrakGrenade,
        },
      },
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 35,
      ammo: {
        connect: {
          name: Ammo.FragMissile,
        },
      },
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 50,
      ammo: {
        connect: {
          name: Ammo.KrakMissile,
        },
      },
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 15,
      ammo: {
        connect: {
          name: Ammo.BoltShells,
        },
      },
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 5,
      ammo: {
        connect: {
          name: Ammo.DumDum,
        },
      },
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 5,
      ammo: {
        connect: {
          name: Ammo.HotShot,
        },
      },
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
      price: 5,
      ammo: {
        connect: {
          name: Ammo.Manstopper,
        },
      },
    },
  ];
};
const generateCommonEquipment = (
  house: House
): Array<Prisma.HouseEquipmentListCreateInput> => {
  return [
    {
      house: { connect: { name: house } },
      price: 10,
      equipment: { connect: { name: Equipment.ClipHarness } },
    },
    {
      house: { connect: { name: house } },
      price: 10,
      equipment: { connect: { name: Equipment.FilterPlugs } },
    },
    {
      house: { connect: { name: house } },
      price: 20,
      equipment: { connect: { name: Equipment.LoboChip } },
    },
    {
      house: { connect: { name: house } },
      price: 15,
      equipment: { connect: { name: Equipment.PhotoContacts } },
    },
    {
      house: { connect: { name: house } },
      // Todo figure out dynamic pricing
      price: 0,
      equipment: { connect: { name: Equipment.WeaponReload } },
    },
  ];
};

const generateHouseRangedWeaponList = (
  house: House,
  weaponList: Array<{ name: RangedWeapon; price: number }>,
  leaderList: Array<{ name: RangedWeapon; price: number }>
): Array<Prisma.HouseRangedWeaponListCreateInput> => {
  const leader = leaderList.map((weapon) => ({
    house: { connect: { name: house } },
    weapon: { connect: { name: weapon.name } },
    price: weapon.price,
    leaderOnly: true,
  }));
  const gang = weaponList.map((weapon) => ({
    house: { connect: { name: house } },
    weapon: { connect: { name: weapon.name } },
    price: weapon.price,
  }));
  return [...leader, ...gang];
};
const generateHouseHandToHandWeaponList = (
  house: House,
  weaponList: Array<{ name: HandToHandWeapon; price: number }>,
  leaderList: Array<{ name: HandToHandWeapon; price: number }>
): Array<Prisma.HouseRangedWeaponListCreateInput> => {
  const leader = leaderList.map((weapon) => ({
    house: { connect: { name: house } },
    weapon: { connect: { name: weapon.name } },
    price: weapon.price,
    leaderOnly: true,
  }));
  const gang = weaponList.map((weapon) => ({
    house: { connect: { name: house } },
    weapon: { connect: { name: weapon.name } },
    price: weapon.price,
  }));
  return [...leader, ...gang];
};

const weaponLists: Record<House, HouseWeaponList> = {
  [House.Cawdor]: {
    ranged: {
      leader: [
        { weapon: RangedWeapon.Autoslugger, price: 45 },
        { weapon: RangedWeapon.Boltgun, price: 35 },
      ],
      gang: [
        { weapon: RangedWeapon.Autopistol, price: 15 },
        { weapon: RangedWeapon.HandFlamer, price: 25 },
        { weapon: RangedWeapon.Laspistol, price: 15 },
        { weapon: RangedWeapon.StubGun, price: 10 },
        { weapon: RangedWeapon.Autogun, price: 20 },
        { weapon: RangedWeapon.Lasgun, price: 25 },
        { weapon: RangedWeapon.Shotgun, price: 20 },
        { weapon: RangedWeapon.Flamer, price: 40 },
        { weapon: RangedWeapon.GrenadeLauncher, price: 60 },
        { weapon: RangedWeapon.HeavyFlamer, price: 80 },
        { weapon: RangedWeapon.HeavyStubber, price: 120 },
        { weapon: RangedWeapon.HeavyBolter, price: 180 },
      ],
    },
    handToHand: {
      leader: [{ weapon: HandToHandWeapon.Chainsword, price: 25 }],
      gang: [
        { weapon: HandToHandWeapon.ChainOrFlail, price: 10 },
        { weapon: HandToHandWeapon.Club, price: 10 },
        { weapon: HandToHandWeapon.Knife, price: 5 },
        { weapon: HandToHandWeapon.MassiveWeapon, price: 15 },
        { weapon: HandToHandWeapon.Sword, price: 15 },
      ],
    },
  },
  [House.Goliath]: {
    ranged: {
      leader: [
        { weapon: RangedWeapon.Meltagun, price: 95 },
        { weapon: RangedWeapon.HandFlamer, price: 25 },
      ],
      gang: [
        { weapon: RangedWeapon.Autopistol, price: 15 },
        { weapon: RangedWeapon.BoltPistol, price: 25 },
        { weapon: RangedWeapon.StubGun, price: 10 },
        { weapon: RangedWeapon.Autogun, price: 20 },
        { weapon: RangedWeapon.Boltgun, price: 35 },
        { weapon: RangedWeapon.Shotgun, price: 20 },
        { weapon: RangedWeapon.Autoslugger, price: 45 },
        { weapon: RangedWeapon.GrenadeLauncher, price: 60 },
        { weapon: RangedWeapon.Autocannon, price: 260 },
        { weapon: RangedWeapon.HeavyBolter, price: 180 },
        { weapon: RangedWeapon.HeavyStubber, price: 120 },
      ],
    },
    handToHand: {
      leader: [{ weapon: HandToHandWeapon.Chainsword, price: 25 }],
      gang: [
        { weapon: HandToHandWeapon.ChainOrFlail, price: 10 },
        { weapon: HandToHandWeapon.Club, price: 10 },
        { weapon: HandToHandWeapon.Knife, price: 5 },
        { weapon: HandToHandWeapon.MassiveWeapon, price: 15 },
      ],
    },
  },
  [House.Delaque]: {
    ranged: {
      leader: [
        { weapon: RangedWeapon.GrenadeLauncher, price: 60 },
        { weapon: RangedWeapon.HandFlamer, price: 25 },
      ],
      gang: [
        { weapon: RangedWeapon.Autopistol, price: 15 },
        { weapon: RangedWeapon.BoltPistol, price: 25 },
        { weapon: RangedWeapon.StubGun, price: 10 },
        { weapon: RangedWeapon.Laspistol, price: 15 },
        { weapon: RangedWeapon.PlasmaPistol, price: 30 },
        { weapon: RangedWeapon.Autogun, price: 20 },
        { weapon: RangedWeapon.Boltgun, price: 35 },
        { weapon: RangedWeapon.HuntingRifle, price: 25 },
        { weapon: RangedWeapon.Lasgun, price: 25 },
        { weapon: RangedWeapon.Shotgun, price: 20 },
        { weapon: RangedWeapon.Flamer, price: 40 },
        { weapon: RangedWeapon.Meltagun, price: 95 },
        { weapon: RangedWeapon.PlasmaGun, price: 80 },
        { weapon: RangedWeapon.HeavyPlasmaGun, price: 240 },
        { weapon: RangedWeapon.HeavyStubber, price: 120 },
        { weapon: RangedWeapon.Lascannon, price: 300 },
      ],
    },
    handToHand: {
      leader: [{ weapon: HandToHandWeapon.Sword, price: 15 }],
      gang: [{ weapon: HandToHandWeapon.Knife, price: 5 }],
    },
  },
  [House.Orlock]: {
    ranged: {
      leader: [
        { weapon: RangedWeapon.Boltgun, price: 35 },
        { weapon: RangedWeapon.GrenadeLauncher, price: 60 },
      ],
      gang: [
        { weapon: RangedWeapon.Autopistol, price: 15 },
        { weapon: RangedWeapon.BoltPistol, price: 25 },
        { weapon: RangedWeapon.StubGun, price: 10 },
        { weapon: RangedWeapon.Laspistol, price: 15 },
        { weapon: RangedWeapon.PlasmaPistol, price: 30 },
        { weapon: RangedWeapon.Autogun, price: 20 },
        { weapon: RangedWeapon.Lasgun, price: 25 },
        { weapon: RangedWeapon.Shotgun, price: 20 },
        { weapon: RangedWeapon.Autoslugger, price: 45 },
        { weapon: RangedWeapon.Flamer, price: 40 },
        { weapon: RangedWeapon.HeavyBolter, price: 180 },
        { weapon: RangedWeapon.HeavyStubber, price: 120 },
        { weapon: RangedWeapon.MissileLauncher, price: 140 },
      ],
    },
    handToHand: {
      leader: [{ weapon: HandToHandWeapon.Chainsword, price: 25 }],
      gang: [
        { weapon: HandToHandWeapon.ChainOrFlail, price: 10 },
        { weapon: HandToHandWeapon.Club, price: 10 },
        { weapon: HandToHandWeapon.Knife, price: 5 },
        { weapon: HandToHandWeapon.Sword, price: 15 },
      ],
    },
  },
  [House.Escher]: {
    ranged: {
      leader: [
        { weapon: RangedWeapon.Boltgun, price: 35 },
        { weapon: RangedWeapon.Meltagun, price: 95 },
      ],
      gang: [
        { weapon: RangedWeapon.Autopistol, price: 15 },
        { weapon: RangedWeapon.PlasmaPistol, price: 30 },
        { weapon: RangedWeapon.Laspistol, price: 15 },
        { weapon: RangedWeapon.StubGun, price: 10 },
        { weapon: RangedWeapon.Autogun, price: 20 },
        { weapon: RangedWeapon.Lasgun, price: 25 },
        { weapon: RangedWeapon.Shotgun, price: 20 },
        { weapon: RangedWeapon.Flamer, price: 40 },
        { weapon: RangedWeapon.PlasmaGun, price: 80 },
        { weapon: RangedWeapon.HeavyStubber, price: 120 },
        { weapon: RangedWeapon.HeavyPlasmaGun, price: 240 },
        { weapon: RangedWeapon.HeavyFlamer, price: 80 },
      ],
    },
    handToHand: {
      leader: [{ weapon: HandToHandWeapon.Chainsword, price: 25 }],
      gang: [
        { weapon: HandToHandWeapon.ChainOrFlail, price: 10 },
        { weapon: HandToHandWeapon.Club, price: 10 },
        { weapon: HandToHandWeapon.Knife, price: 5 },
        { weapon: HandToHandWeapon.Sword, price: 15 },
      ],
    },
  },
  [House.VanSaar]: {
    ranged: {
      leader: [],
      gang: [
        { weapon: RangedWeapon.Autopistol, price: 15 },
        { weapon: RangedWeapon.PlasmaPistol, price: 30 },
        { weapon: RangedWeapon.Laspistol, price: 15 },
        { weapon: RangedWeapon.StubGun, price: 10 },
        { weapon: RangedWeapon.BoltPistol, price: 25 },
        { weapon: RangedWeapon.Autogun, price: 20 },
        { weapon: RangedWeapon.Lasgun, price: 25 },
        { weapon: RangedWeapon.Shotgun, price: 20 },
        { weapon: RangedWeapon.Boltgun, price: 35 },
        { weapon: RangedWeapon.HuntingRifle, price: 25 },
        { weapon: RangedWeapon.GrenadeLauncher, price: 60 },
        { weapon: RangedWeapon.PlasmaGun, price: 80 },
        { weapon: RangedWeapon.Meltagun, price: 95 },
        { weapon: RangedWeapon.HeavyStubber, price: 120 },
        { weapon: RangedWeapon.HeavyPlasmaGun, price: 240 },
        { weapon: RangedWeapon.HeavyBolter, price: 180 },
        { weapon: RangedWeapon.Lascannon, price: 300 },
      ],
    },
    handToHand: {
      leader: [{ weapon: HandToHandWeapon.Sword, price: 15 }],
      gang: [
        { weapon: HandToHandWeapon.Chainsword, price: 25 },
        { weapon: HandToHandWeapon.Knife, price: 5 },
      ],
    },
  },
  [House.Redemptionists]: {
    ranged: { leader: [], gang: [] },
    handToHand: { leader: [], gang: [] },
  },
  [House.Spyrers]: {
    ranged: { leader: [], gang: [] },
    handToHand: { leader: [], gang: [] },
  },
  [House.Ratskins]: {
    ranged: { leader: [], gang: [] },
    handToHand: { leader: [], gang: [] },
  },
  [House.PitSlaves]: {
    ranged: { leader: [], gang: [] },
    handToHand: { leader: [], gang: [] },
  },
  [House.Scavvies]: {
    ranged: { leader: [], gang: [] },
    handToHand: { leader: [], gang: [] },
  },
};

// export const cawdorRangedWeaponList: Array<Prisma.HouseRangedWeaponListCreateInput> =
//   [{
//     house: { connect: { name: house } },
//
//   }];
export const cawdorAmmoList: Array<Prisma.HouseAmmoListCreateInput> =
  generateCommonAmmo(House.Cawdor);
