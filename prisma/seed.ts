import { PrismaClient, Prisma } from "@prisma/client";
import { skillTypes, skills } from "./data/skills";
import { meleeWeapons, weaponTypes, rangedWeapons } from "./data/weapons";
import { houses, houseUnitTypes } from "./data/houses";
import { unitCategories, unitTypes } from "./data/units";
import { equipment, equipmentTypes } from "./data/equipment";

const prisma = new PrismaClient();

// const houseSkillList: Array<Prisma.HouseSkillListCreateInput> = [
//   {house}
// ]

async function main() {
  await prisma.skill.deleteMany({});
  await prisma.ammo.deleteMany({});
  await prisma.houseRangedWeaponList.deleteMany({});
  await prisma.houseAmmoList.deleteMany({});
  await prisma.houseHandToHandWeaponList.deleteMany({});
  await prisma.houseEquipmentList.deleteMany({});
  await prisma.rangedWeapon.deleteMany({});
  await prisma.handToHandWeapon.deleteMany({});
  await prisma.unitType.deleteMany({});
  await prisma.houseUnitType.deleteMany({});
  await prisma.unitCategory.deleteMany({});
  await prisma.weaponType.deleteMany({});
  await prisma.house.deleteMany({});
  await prisma.skillType.deleteMany({});
  await prisma.equipmentType.deleteMany({});

  await prisma.house.createMany({ data: houses });

  await prisma.unitCategory.createMany({
    data: unitCategories,
  });

  await prisma.houseUnitType.createMany({
    data: houseUnitTypes,
  });
  await prisma.unitType.createMany({
    data: unitTypes,
  });

  await prisma.handToHandWeapon.createMany({
    data: meleeWeapons,
  });

  await prisma.weaponType.createMany({
    data: weaponTypes,
  });

  await prisma.skillType.createMany({
    data: skillTypes,
  });

  await prisma.skill.createMany({ data: skills });

  await prisma.equipmentType.createMany({ data: equipmentTypes });
  await prisma.equipment.createMany({ data: equipment });

  async function insertRangedWeapons() {
    for (const weaponData of rangedWeapons) {
      await prisma.rangedWeapon.create({
        data: weaponData,
      });
    }
  }

  await insertRangedWeapons();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
