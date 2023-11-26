import { Prisma } from ".prisma/client";
import { House } from "@/enums/house";
import { Ammo } from "@/enums/weapons";
import { Equipment } from "@/enums/equipment";

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
    },
    {
      house: {
        connect: {
          name: house,
        },
      },
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
      ammo: { name: Ammo.Manstopper },
    },
  ];
};
const generateCommonEquipment = (
  house: House
): Array<Prisma.HouseEquipmentListCreateInput> => {
  return [
    {
      house: { connect: { name: house } },
      equipment: { connect: { name: Equipment.ClipHarness } },
    },
    {
      house: { connect: { name: house } },
      equipment: { connect: { name: Equipment.FilterPlugs } },
    },
    {
      house: { connect: { name: house } },
      equipment: { connect: { name: Equipment.LoboChip } },
    },
    {
      house: { connect: { name: house } },
      equipment: { connect: { name: Equipment.PhotoContacts } },
    },
    {
      house: { connect: { name: house } },
      equipment: { connect: { name: Equipment.WeaponReload } },
    },
  ];
};
export const cawdorRangedWeaponList: Array<Prisma.HouseRangedWeaponListCreateManyInput> =
  [{}];
export const cawdorAmmoList: Array<Prisma.HouseAmmoListCreateInput> = [
  {
    house: { name: House.Cawdor },
    ammo: { name: Ammo.BoltShells },
  },
];
