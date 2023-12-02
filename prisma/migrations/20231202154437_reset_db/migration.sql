-- CreateTable
CREATE TABLE `House` (
    `name` VARCHAR(191) NOT NULL,
    `isOutlander` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `House_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnitType` (
    `name` VARCHAR(191) NOT NULL,
    `unitCategoryId` VARCHAR(191) NOT NULL,
    `cost` INTEGER NOT NULL,
    `baseStats` JSON NOT NULL,
    `maxStats` JSON NOT NULL,
    `startingXp` VARCHAR(191) NOT NULL,
    `minQuantity` INTEGER NULL,
    `maxQuantity` INTEGER NULL,
    `minPercent` INTEGER NULL,
    `maxPercent` INTEGER NULL,

    UNIQUE INDEX `UnitType_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnitCategory` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseUnitType` (
    `houseId` VARCHAR(191) NOT NULL,
    `unitCategoryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`houseId`, `unitCategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SkillList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agility` BOOLEAN NULL,
    `combat` BOOLEAN NULL,
    `ferocity` BOOLEAN NULL,
    `muscle` BOOLEAN NULL,
    `shooting` BOOLEAN NULL,
    `stealth` BOOLEAN NULL,
    `techno` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnitSkillList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `skillListId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SkillType` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `roll` INTEGER NOT NULL,
    `skillTypeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Territory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `income` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseEquipmentList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `houseId` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `equipmentId` INTEGER NOT NULL,
    `leaderOnly` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
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
CREATE TABLE `SeriousInjury` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Special` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_userName_key`(`userName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('PENDING', 'PREGAME', 'ACTIVE', 'PBS', 'COMPLETE') NOT NULL,
    `state` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameUserRelation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gangId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `houseId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `unitTypeId` VARCHAR(191) NOT NULL,
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
ALTER TABLE `UnitType` ADD CONSTRAINT `UnitType_unitCategoryId_fkey` FOREIGN KEY (`unitCategoryId`) REFERENCES `UnitCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseUnitType` ADD CONSTRAINT `HouseUnitType_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseUnitType` ADD CONSTRAINT `HouseUnitType_unitCategoryId_fkey` FOREIGN KEY (`unitCategoryId`) REFERENCES `UnitCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitSkillList` ADD CONSTRAINT `UnitSkillList_skillListId_fkey` FOREIGN KEY (`skillListId`) REFERENCES `SkillList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_skillTypeId_fkey` FOREIGN KEY (`skillTypeId`) REFERENCES `SkillType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseEquipmentList` ADD CONSTRAINT `HouseEquipmentList_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseEquipmentList` ADD CONSTRAINT `HouseEquipmentList_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_equipmentTypeId_fkey` FOREIGN KEY (`equipmentTypeId`) REFERENCES `EquipmentType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `Gang` ADD CONSTRAINT `Gang_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gang` ADD CONSTRAINT `Gang_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unit` ADD CONSTRAINT `Unit_unitTypeId_fkey` FOREIGN KEY (`unitTypeId`) REFERENCES `UnitType`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unit` ADD CONSTRAINT `Unit_gangId_fkey` FOREIGN KEY (`gangId`) REFERENCES `Gang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitEquipment` ADD CONSTRAINT `UnitEquipment_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitEquipment` ADD CONSTRAINT `UnitEquipment_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Unit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
