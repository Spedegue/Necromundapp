/*
  Warnings:

  - You are about to drop the column `gangAId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `gangBId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the `Ammo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AmmoSpecial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HandToHandWeapon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HandToHandWeaponSpecial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HouseAmmoList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HouseHandToHandWeaponList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HouseRangedWeaponList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RangedWeapon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeaponType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `HouseEquipmentList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gangId` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Ammo` DROP FOREIGN KEY `Ammo_weaponId_fkey`;

-- DropForeignKey
ALTER TABLE `AmmoSpecial` DROP FOREIGN KEY `AmmoSpecial_ammoId_fkey`;

-- DropForeignKey
ALTER TABLE `AmmoSpecial` DROP FOREIGN KEY `AmmoSpecial_specialId_fkey`;

-- DropForeignKey
ALTER TABLE `HandToHandWeapon` DROP FOREIGN KEY `HandToHandWeapon_weaponTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `HandToHandWeaponSpecial` DROP FOREIGN KEY `HandToHandWeaponSpecial_specialId_fkey`;

-- DropForeignKey
ALTER TABLE `HandToHandWeaponSpecial` DROP FOREIGN KEY `HandToHandWeaponSpecial_weaponId_fkey`;

-- DropForeignKey
ALTER TABLE `HouseAmmoList` DROP FOREIGN KEY `HouseAmmoList_ammoId_fkey`;

-- DropForeignKey
ALTER TABLE `HouseAmmoList` DROP FOREIGN KEY `HouseAmmoList_houseId_fkey`;

-- DropForeignKey
ALTER TABLE `HouseHandToHandWeaponList` DROP FOREIGN KEY `HouseHandToHandWeaponList_houseId_fkey`;

-- DropForeignKey
ALTER TABLE `HouseHandToHandWeaponList` DROP FOREIGN KEY `HouseHandToHandWeaponList_weaponId_fkey`;

-- DropForeignKey
ALTER TABLE `HouseRangedWeaponList` DROP FOREIGN KEY `HouseRangedWeaponList_houseId_fkey`;

-- DropForeignKey
ALTER TABLE `HouseRangedWeaponList` DROP FOREIGN KEY `HouseRangedWeaponList_weaponId_fkey`;

-- DropForeignKey
ALTER TABLE `RangedWeapon` DROP FOREIGN KEY `RangedWeapon_weaponTypeId_fkey`;

-- AlterTable
ALTER TABLE `Game` DROP COLUMN `gangAId`,
    DROP COLUMN `gangBId`;

-- AlterTable
ALTER TABLE `HouseEquipmentList` ADD COLUMN `price` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Unit` ADD COLUMN `gangId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Ammo`;

-- DropTable
DROP TABLE `AmmoSpecial`;

-- DropTable
DROP TABLE `HandToHandWeapon`;

-- DropTable
DROP TABLE `HandToHandWeaponSpecial`;

-- DropTable
DROP TABLE `HouseAmmoList`;

-- DropTable
DROP TABLE `HouseHandToHandWeaponList`;

-- DropTable
DROP TABLE `HouseRangedWeaponList`;

-- DropTable
DROP TABLE `RangedWeapon`;

-- DropTable
DROP TABLE `WeaponType`;

-- CreateTable
CREATE TABLE `WeaponAmmo` (
    `ammoId` INTEGER NOT NULL,
    `weaponId` INTEGER NOT NULL,
    `rangedStatsId` INTEGER NOT NULL,
    `default` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`ammoId`, `weaponId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeaponStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `strength` VARCHAR(191) NOT NULL,
    `damage` VARCHAR(191) NOT NULL,
    `weaponId` INTEGER NULL,
    `saveModifier` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `WeaponStats_weaponId_key`(`weaponId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RangedStats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shortRange` VARCHAR(191) NOT NULL,
    `longRange` VARCHAR(191) NOT NULL,
    `longModifier` INTEGER NOT NULL DEFAULT 0,
    `shortModifier` INTEGER NOT NULL DEFAULT 0,
    `ammoRoll` INTEGER NOT NULL,
    `weaponStatsId` INTEGER NOT NULL,
    `default` BOOLEAN NULL DEFAULT true,
    `template` VARCHAR(191) NULL,
    `sustainedFireDice` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameUserRelation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gangId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnitEquipment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `unitId` INTEGER NOT NULL,
    `equipmentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WeaponAmmo` ADD CONSTRAINT `WeaponAmmo_ammoId_fkey` FOREIGN KEY (`ammoId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeaponAmmo` ADD CONSTRAINT `WeaponAmmo_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeaponAmmo` ADD CONSTRAINT `WeaponAmmo_rangedStatsId_fkey` FOREIGN KEY (`rangedStatsId`) REFERENCES `RangedStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeaponStats` ADD CONSTRAINT `WeaponStats_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Equipment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RangedStats` ADD CONSTRAINT `RangedStats_weaponStatsId_fkey` FOREIGN KEY (`weaponStatsId`) REFERENCES `WeaponStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameUserRelation` ADD CONSTRAINT `GameUserRelation_gangId_fkey` FOREIGN KEY (`gangId`) REFERENCES `Gang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unit` ADD CONSTRAINT `Unit_gangId_fkey` FOREIGN KEY (`gangId`) REFERENCES `Gang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitEquipment` ADD CONSTRAINT `UnitEquipment_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitEquipment` ADD CONSTRAINT `UnitEquipment_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Unit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
