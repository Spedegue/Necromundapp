import { PrismaClient, Prisma } from "@prisma/client";
import { skillTypes, skills } from "./data/skills";
import { houses, houseUnitTypes } from "./data/houses";
import { unitCategories, unitTypes } from "./data/units";
import { equipment, equipmentTypes } from "./data/equipment/equipment";
import { houseEquipmentListSeed } from "./data/houseWeaponLists";
import { throwAmmo } from "./data/equipment/throw";
import { specialAmmo } from "./data/equipment/special";
import { pistolAmmo } from "./data/equipment/pistol";
import { basicAmmo } from "./data/equipment/basic";
import { heavyAmmo } from "./data/equipment/heavy";
import { handToHandSeed } from "./data/equipment/handToHand";

const prisma = new PrismaClient();

// const houseSkillList: Array<Prisma.HouseSkillListCreateInput> = [
//   {house}
// ]

async function main() {
  await prisma.skill.deleteMany({});
  await prisma.houseEquipmentList.deleteMany({});
  await prisma.weaponAmmo.deleteMany({});
  await prisma.equipment.deleteMany({});
  await prisma.rangedStats.deleteMany({});
  await prisma.weaponStats.deleteMany({});
  await prisma.unitType.deleteMany({});
  await prisma.houseUnitType.deleteMany({});
  await prisma.unitCategory.deleteMany({});
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
  await prisma.skillType.createMany({
    data: skillTypes,
  });

  await prisma.skill.createMany({ data: skills });

  await prisma.equipmentType.createMany({ data: equipmentTypes });
  await prisma.equipment.createMany({ data: equipment });

  async function insertRangedWeapons(
    weapons: Array<Prisma.WeaponAmmoCreateInput>
  ) {
    for await (const weapon of weapons) {
      try {
        await prisma.weaponAmmo.create({
          data: weapon,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  await insertRangedWeapons(pistolAmmo);
  await insertRangedWeapons(basicAmmo);
  await insertRangedWeapons(specialAmmo);
  await insertRangedWeapons(heavyAmmo);
  await insertRangedWeapons(throwAmmo);

  for await (const weapon of handToHandSeed) {
    await prisma.weaponStats.create({ data: weapon });
  }

  async function insertHouseEquipmentLists() {
    for await (const list of houseEquipmentListSeed) {
      // console.log(list);

      await prisma.houseEquipmentList.create({
        data: list,
      });
    }
  }

  await insertHouseEquipmentLists();
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
