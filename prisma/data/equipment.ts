import { Prisma } from "@prisma/client";
import { EquipmentTypes } from "../../src/enums/equipmentTypes";
import { Equipment } from "../../src/enums/equipment";

export const equipmentTypes: Prisma.EquipmentTypeCreateInput[] = [
  { id: EquipmentTypes.Armour },
  { id: EquipmentTypes.GunMod },
  { id: EquipmentTypes.Bionic },
  { id: EquipmentTypes.Misc },
];

export const equipment: Prisma.EquipmentCreateManyInput[] = [
  { name: Equipment.MeshArmour, equipmentTypeId: EquipmentTypes.Armour },
  { name: Equipment.FlakArmour, equipmentTypeId: EquipmentTypes.Armour },
  { name: Equipment.CarapaceArmour, equipmentTypeId: EquipmentTypes.Armour },
  { name: Equipment.ForceField, equipmentTypeId: EquipmentTypes.Armour },
  {
    name: Equipment.HotshotLaserPowerPack,
    equipmentTypeId: EquipmentTypes.GunMod,
  },
  { name: Equipment.HellfireBolts, equipmentTypeId: EquipmentTypes.GunMod },
  { name: Equipment.InfraRedSight, equipmentTypeId: EquipmentTypes.GunMod },
  { name: Equipment.RedDotLaserSight, equipmentTypeId: EquipmentTypes.GunMod },
  { name: Equipment.MonoSight, equipmentTypeId: EquipmentTypes.GunMod },
  { name: Equipment.TelescopicSight, equipmentTypeId: EquipmentTypes.GunMod },
  { name: Equipment.BionicEye, equipmentTypeId: EquipmentTypes.Bionic },
  { name: Equipment.BionicArm, equipmentTypeId: EquipmentTypes.Bionic },
  { name: Equipment.BionicLeg, equipmentTypeId: EquipmentTypes.Bionic },
  { name: Equipment.BionicChest, equipmentTypeId: EquipmentTypes.Bionic },
  { name: Equipment.AutoRepairer, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.BioScanner, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.BioBooster, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.BlindsnakePouch, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.ClipHarness, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.FilterPlugs, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.ConcealedBlade, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.GravChute, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.Grapnel, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.InfraRedGoggles, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.IsotropicFuelRod, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.LoboChip, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.MungVase, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.MediPack, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.OneInAMillion, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.SkullChip, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.PhotoContacts, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.RatskinMap, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.PhotoVisor, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.Silencer, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.Respirator, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.WeaponReload, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.Screamers, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.Stummers, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.Suspensor, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.StingerPouch, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.DrumMagazine, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.BionicImplant, equipmentTypeId: EquipmentTypes.Misc },
  { name: Equipment.BerserkerChip, equipmentTypeId: EquipmentTypes.Misc },
];
