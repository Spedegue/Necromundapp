import { Prisma } from "@prisma/client";
import { EquipmentType } from "../../../src/enums/equipmentType";
import { Equipment } from "../../../src/enums/equipment";

export const equipmentTypes: Prisma.EquipmentTypeCreateInput[] = Object.values(
  EquipmentType
).map((equipmentType) => ({
  id: equipmentType,
}));

export const equipment: Prisma.EquipmentCreateManyInput[] = [
  { name: Equipment.MeshArmour, equipmentTypeId: EquipmentType.Armour },
  { name: Equipment.FlakArmour, equipmentTypeId: EquipmentType.Armour },
  { name: Equipment.CarapaceArmour, equipmentTypeId: EquipmentType.Armour },
  { name: Equipment.ForceField, equipmentTypeId: EquipmentType.Armour },
  {
    name: Equipment.HotshotLaserPowerPack,
    equipmentTypeId: EquipmentType.GunMod,
  },
  { name: Equipment.HellfireBolts, equipmentTypeId: EquipmentType.GunMod },
  { name: Equipment.InfraRedSight, equipmentTypeId: EquipmentType.GunMod },
  { name: Equipment.RedDotLaserSight, equipmentTypeId: EquipmentType.GunMod },
  { name: Equipment.MonoSight, equipmentTypeId: EquipmentType.GunMod },
  { name: Equipment.TelescopicSight, equipmentTypeId: EquipmentType.GunMod },
  { name: Equipment.BionicEye, equipmentTypeId: EquipmentType.Bionic },
  { name: Equipment.BionicArm, equipmentTypeId: EquipmentType.Bionic },
  { name: Equipment.BionicLeg, equipmentTypeId: EquipmentType.Bionic },
  { name: Equipment.BionicChest, equipmentTypeId: EquipmentType.Bionic },
  { name: Equipment.AutoRepairer, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.BioScanner, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.BioBooster, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.BlindsnakePouch, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.ClipHarness, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.FilterPlugs, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.ConcealedBlade, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.GravChute, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.Grapnel, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.InfraRedGoggles, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.IsotropicFuelRod, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.LoboChip, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.MungVase, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.MediPack, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.OneInAMillion, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.SkullChip, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.PhotoContacts, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.RatskinMap, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.PhotoVisor, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.Silencer, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.Respirator, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.WeaponReload, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.Screamers, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.Stummers, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.Suspensor, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.StingerPouch, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.DrumMagazine, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.BionicImplant, equipmentTypeId: EquipmentType.Misc },
  { name: Equipment.BerserkerChip, equipmentTypeId: EquipmentType.Misc },
];

const weaponAmmo: Prisma.WeaponAmmoCreateInput[] = [];
