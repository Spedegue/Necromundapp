import { Prisma } from ".prisma/client";
import { House } from "../../src/enums/house";
import { Ammo, HandToHandWeapon, RangedWeapon } from "../../src/enums/weapons";
import { Equipment } from "../../src/enums/equipment";

type TEquipment = RangedWeapon | HandToHandWeapon | Equipment | Ammo;
interface IWeaponList {
  leader: Array<{
    weapon: TEquipment;
    price: string;
  }>;
  gang: Array<{
    weapon: TEquipment;
    price: string;
  }>;
}

interface HouseEquipmentList {
  ranged: IWeaponList;
  handToHand: IWeaponList;
}

const generateCommonEquipment = (
  house: House
): Array<Prisma.HouseEquipmentListCreateInput> => {
  return [
    {
      house: { connect: { name: house } },
      price: "10",
      equipment: { connect: { name: Equipment.ClipHarness } },
    },
    {
      house: { connect: { name: house } },
      price: "10",
      equipment: { connect: { name: Equipment.FilterPlugs } },
    },
    {
      house: { connect: { name: house } },
      price: "20",
      equipment: { connect: { name: Equipment.LoboChip } },
    },
    {
      house: { connect: { name: house } },
      price: "15",
      equipment: { connect: { name: Equipment.PhotoContacts } },
    },
    {
      house: { connect: { name: house } },
      // Todo figure out dynamic pricing
      price: "{weaponPrice} / 2",
      equipment: { connect: { name: Equipment.WeaponReload } },
    },
    {
      house: { connect: { name: house } },
      price: "25",
      equipment: { connect: { name: Ammo.FragGrenade } },
    },
    {
      house: { connect: { name: house } },
      price: "40",
      equipment: { connect: { name: Ammo.KrakGrenade } },
    },
    {
      house: { connect: { name: house } },
      price: "35",
      equipment: { connect: { name: Ammo.FragMissile } },
    },
    {
      house: { connect: { name: house } },
      price: "50",
      equipment: { connect: { name: Ammo.KrakMissile } },
    },
    {
      house: { connect: { name: house } },
      price: "15",
      equipment: { connect: { name: Ammo.BoltShells } },
    },
    {
      house: { connect: { name: house } },
      price: "5",
      equipment: { connect: { name: Ammo.DumDum } },
    },
    {
      house: { connect: { name: house } },
      price: "5",
      equipment: { connect: { name: Ammo.HotShot } },
    },
    {
      house: { connect: { name: house } },
      price: "5",
      equipment: { connect: { name: Ammo.Manstopper } },
    },
  ];
};

const weaponLists: Record<House, IWeaponList> = {
  [House.Cawdor]: {
    leader: [
      { weapon: RangedWeapon.Autoslugger, price: "45" },
      { weapon: RangedWeapon.Boltgun, price: "35" },
      { weapon: HandToHandWeapon.Chainsword, price: "25" },
    ],
    gang: [
      { weapon: RangedWeapon.Autopistol, price: "15" },
      { weapon: RangedWeapon.HandFlamer, price: "25" },
      { weapon: RangedWeapon.Laspistol, price: "15" },
      { weapon: RangedWeapon.StubGun, price: "10" },
      { weapon: RangedWeapon.Autogun, price: "20" },
      { weapon: RangedWeapon.Lasgun, price: "25" },
      { weapon: RangedWeapon.Shotgun, price: "20" },
      { weapon: RangedWeapon.Flamer, price: "40" },
      { weapon: RangedWeapon.GrenadeLauncher, price: "60" },
      { weapon: RangedWeapon.HeavyFlamer, price: "80" },
      { weapon: RangedWeapon.HeavyStubber, price: "120" },
      { weapon: RangedWeapon.HeavyBolter, price: "180" },
      { weapon: HandToHandWeapon.ChainOrFlail, price: "10" },
      { weapon: HandToHandWeapon.Club, price: "10" },
      { weapon: HandToHandWeapon.Knife, price: "5" },
      { weapon: HandToHandWeapon.MassiveWeapon, price: "15" },
      { weapon: HandToHandWeapon.Sword, price: "15" },
    ],
  },
  [House.Goliath]: {
    leader: [
      { weapon: RangedWeapon.Meltagun, price: "95" },
      { weapon: RangedWeapon.HandFlamer, price: "25" },
      { weapon: HandToHandWeapon.Chainsword, price: "25" },
    ],
    gang: [
      { weapon: RangedWeapon.Autopistol, price: "15" },
      { weapon: RangedWeapon.BoltPistol, price: "25" },
      { weapon: RangedWeapon.StubGun, price: "10" },
      { weapon: RangedWeapon.Autogun, price: "20" },
      { weapon: RangedWeapon.Boltgun, price: "35" },
      { weapon: RangedWeapon.Shotgun, price: "20" },
      { weapon: RangedWeapon.Autoslugger, price: "45" },
      { weapon: RangedWeapon.GrenadeLauncher, price: "60" },
      { weapon: RangedWeapon.Autocannon, price: "260" },
      { weapon: RangedWeapon.HeavyBolter, price: "180" },
      { weapon: RangedWeapon.HeavyStubber, price: "120" },
      { weapon: HandToHandWeapon.ChainOrFlail, price: "10" },
      { weapon: HandToHandWeapon.Club, price: "10" },
      { weapon: HandToHandWeapon.Knife, price: "5" },
      { weapon: HandToHandWeapon.MassiveWeapon, price: "15" },
    ],
  },
  [House.Delaque]: {
    leader: [
      { weapon: RangedWeapon.GrenadeLauncher, price: "60" },
      { weapon: RangedWeapon.HandFlamer, price: "25" },
      { weapon: HandToHandWeapon.Sword, price: "15" },
    ],
    gang: [
      { weapon: RangedWeapon.Autopistol, price: "15" },
      { weapon: RangedWeapon.BoltPistol, price: "25" },
      { weapon: RangedWeapon.StubGun, price: "10" },
      { weapon: RangedWeapon.Laspistol, price: "15" },
      { weapon: RangedWeapon.PlasmaPistol, price: "30" },
      { weapon: RangedWeapon.Autogun, price: "20" },
      { weapon: RangedWeapon.Boltgun, price: "35" },
      { weapon: RangedWeapon.HuntingRifle, price: "25" },
      { weapon: RangedWeapon.Lasgun, price: "25" },
      { weapon: RangedWeapon.Shotgun, price: "20" },
      { weapon: RangedWeapon.Flamer, price: "40" },
      { weapon: RangedWeapon.Meltagun, price: "95" },
      { weapon: RangedWeapon.PlasmaGun, price: "80" },
      { weapon: RangedWeapon.HeavyPlasmaGun, price: "240" },
      { weapon: RangedWeapon.HeavyStubber, price: "120" },
      { weapon: RangedWeapon.Lascannon, price: "300" },
      { weapon: HandToHandWeapon.Knife, price: "5" },
    ],
  },
  [House.Orlock]: {
    leader: [
      { weapon: RangedWeapon.Boltgun, price: "35" },
      { weapon: RangedWeapon.GrenadeLauncher, price: "60" },
      { weapon: HandToHandWeapon.Chainsword, price: "25" },
    ],
    gang: [
      { weapon: RangedWeapon.Autopistol, price: "15" },
      { weapon: RangedWeapon.BoltPistol, price: "25" },
      { weapon: RangedWeapon.StubGun, price: "10" },
      { weapon: RangedWeapon.Laspistol, price: "15" },
      { weapon: RangedWeapon.PlasmaPistol, price: "30" },
      { weapon: RangedWeapon.Autogun, price: "20" },
      { weapon: RangedWeapon.Lasgun, price: "25" },
      { weapon: RangedWeapon.Shotgun, price: "20" },
      { weapon: RangedWeapon.Autoslugger, price: "45" },
      { weapon: RangedWeapon.Flamer, price: "40" },
      { weapon: RangedWeapon.HeavyBolter, price: "180" },
      { weapon: RangedWeapon.HeavyStubber, price: "120" },
      { weapon: RangedWeapon.MissileLauncher, price: "140" },
      { weapon: HandToHandWeapon.ChainOrFlail, price: "10" },
      { weapon: HandToHandWeapon.Club, price: "10" },
      { weapon: HandToHandWeapon.Knife, price: "5" },
      { weapon: HandToHandWeapon.Sword, price: "15" },
    ],
  },
  [House.Escher]: {
    leader: [
      { weapon: RangedWeapon.Boltgun, price: "35" },
      { weapon: RangedWeapon.Meltagun, price: "95" },
      { weapon: HandToHandWeapon.Chainsword, price: "25" },
    ],
    gang: [
      { weapon: RangedWeapon.Autopistol, price: "15" },
      { weapon: RangedWeapon.PlasmaPistol, price: "30" },
      { weapon: RangedWeapon.Laspistol, price: "15" },
      { weapon: RangedWeapon.StubGun, price: "10" },
      { weapon: RangedWeapon.Autogun, price: "20" },
      { weapon: RangedWeapon.Lasgun, price: "25" },
      { weapon: RangedWeapon.Shotgun, price: "20" },
      { weapon: RangedWeapon.Flamer, price: "40" },
      { weapon: RangedWeapon.PlasmaGun, price: "80" },
      { weapon: RangedWeapon.HeavyStubber, price: "120" },
      { weapon: RangedWeapon.HeavyPlasmaGun, price: "240" },
      { weapon: RangedWeapon.HeavyFlamer, price: "80" },
      { weapon: HandToHandWeapon.ChainOrFlail, price: "10" },
      { weapon: HandToHandWeapon.Club, price: "10" },
      { weapon: HandToHandWeapon.Knife, price: "5" },
      { weapon: HandToHandWeapon.Sword, price: "15" },
    ],
  },
  [House.VanSaar]: {
    leader: [{ weapon: HandToHandWeapon.Sword, price: "15" }],
    gang: [
      { weapon: RangedWeapon.Autopistol, price: "15" },
      { weapon: RangedWeapon.PlasmaPistol, price: "30" },
      { weapon: RangedWeapon.Laspistol, price: "15" },
      { weapon: RangedWeapon.StubGun, price: "10" },
      { weapon: RangedWeapon.BoltPistol, price: "25" },
      { weapon: RangedWeapon.Autogun, price: "20" },
      { weapon: RangedWeapon.Lasgun, price: "25" },
      { weapon: RangedWeapon.Shotgun, price: "20" },
      { weapon: RangedWeapon.Boltgun, price: "35" },
      { weapon: RangedWeapon.HuntingRifle, price: "25" },
      { weapon: RangedWeapon.GrenadeLauncher, price: "60" },
      { weapon: RangedWeapon.PlasmaGun, price: "80" },
      { weapon: RangedWeapon.Meltagun, price: "95" },
      { weapon: RangedWeapon.HeavyStubber, price: "120" },
      { weapon: RangedWeapon.HeavyPlasmaGun, price: "240" },
      { weapon: RangedWeapon.HeavyBolter, price: "180" },
      { weapon: RangedWeapon.Lascannon, price: "300" },
      { weapon: HandToHandWeapon.Chainsword, price: "25" },
      { weapon: HandToHandWeapon.Knife, price: "5" },
    ],
  },
  [House.Redemptionists]: {
    leader: [],
    gang: [],
  },
  [House.Spyrers]: { leader: [], gang: [] },

  [House.Ratskins]: { leader: [], gang: [] },

  [House.PitSlaves]: { leader: [], gang: [] },

  [House.Scavvies]: { leader: [], gang: [] },
};

const generateStandardHouseWeaponList = (
  house: House
): Array<Prisma.HouseEquipmentListCreateInput> => {
  const leader = weaponLists[house].leader.map((weapon) => ({
    house: { connect: { name: house } },
    equipment: { connect: { name: weapon.weapon } },
    price: weapon.price,
    leaderOnly: true,
  }));
  const gang = weaponLists[house].gang.map((weapon) => ({
    house: { connect: { name: house } },
    equipment: { connect: { name: weapon.weapon } },
    price: weapon.price,
  }));
  const common = generateCommonEquipment(house);

  return [...leader, ...gang, ...common];
};

export const houseEquipmentListSeed: Prisma.HouseEquipmentListCreateInput[] = [
  ...generateStandardHouseWeaponList(House.Cawdor),
  ...generateStandardHouseWeaponList(House.Goliath),
  ...generateStandardHouseWeaponList(House.Escher),
  ...generateStandardHouseWeaponList(House.VanSaar),
  ...generateStandardHouseWeaponList(House.Delaque),
  ...generateStandardHouseWeaponList(House.Orlock),
];
