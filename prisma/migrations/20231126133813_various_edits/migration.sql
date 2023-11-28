/*
  Warnings:

  - You are about to drop the `HouseWeaponList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RangedWeaponType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SkillTypes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Ammo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roll` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillTypeId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `HouseWeaponList` DROP FOREIGN KEY `HouseWeaponList_houseId_fkey`;

-- DropForeignKey
ALTER TABLE `RangedWeapon` DROP FOREIGN KEY `RangedWeapon_weaponTypeId_fkey`;

-- AlterTable
ALTER TABLE `Ammo` ADD COLUMN `isThrowable` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `HandToHandWeapon` ADD COLUMN `weaponTypeId` VARCHAR(191) NOT NULL DEFAULT 'Hand-to-Hand';

-- AlterTable
ALTER TABLE `Skill` ADD COLUMN `roll` INTEGER NOT NULL,
    ADD COLUMN `skillTypeId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `HouseWeaponList`;

-- DropTable
DROP TABLE `RangedWeaponType`;

-- DropTable
DROP TABLE `SkillTypes`;

-- CreateTable
CREATE TABLE `SkillType` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseRangedWeaponList` (
    `houseId` VARCHAR(191) NOT NULL,
    `weaponId` INTEGER NOT NULL,
    `leaderOnly` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`houseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseHandToHandWeaponList` (
    `houseId` VARCHAR(191) NOT NULL,
    `weaponId` INTEGER NOT NULL,
    `leaderOnly` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`houseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseAmmoList` (
    `houseId` VARCHAR(191) NOT NULL,
    `ammoId` INTEGER NOT NULL,
    `leaderOnly` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`houseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseEquipmentList` (
    `houseId` VARCHAR(191) NOT NULL,
    `equipmentId` INTEGER NOT NULL,
    `leaderOnly` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`houseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeaponType` (
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `WeaponType_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EquipmentType` (
    `id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EquipmentType_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `equipmentTypeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Equipment_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Ammo_name_key` ON `Ammo`(`name`);

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_skillTypeId_fkey` FOREIGN KEY (`skillTypeId`) REFERENCES `SkillType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseRangedWeaponList` ADD CONSTRAINT `HouseRangedWeaponList_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `RangedWeapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseRangedWeaponList` ADD CONSTRAINT `HouseRangedWeaponList_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseHandToHandWeaponList` ADD CONSTRAINT `HouseHandToHandWeaponList_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `HandToHandWeapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseHandToHandWeaponList` ADD CONSTRAINT `HouseHandToHandWeaponList_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseAmmoList` ADD CONSTRAINT `HouseAmmoList_ammoId_fkey` FOREIGN KEY (`ammoId`) REFERENCES `Ammo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseAmmoList` ADD CONSTRAINT `HouseAmmoList_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseEquipmentList` ADD CONSTRAINT `HouseEquipmentList_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseEquipmentList` ADD CONSTRAINT `HouseEquipmentList_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RangedWeapon` ADD CONSTRAINT `RangedWeapon_weaponTypeId_fkey` FOREIGN KEY (`weaponTypeId`) REFERENCES `WeaponType`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HandToHandWeapon` ADD CONSTRAINT `HandToHandWeapon_weaponTypeId_fkey` FOREIGN KEY (`weaponTypeId`) REFERENCES `WeaponType`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_equipmentTypeId_fkey` FOREIGN KEY (`equipmentTypeId`) REFERENCES `EquipmentType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
