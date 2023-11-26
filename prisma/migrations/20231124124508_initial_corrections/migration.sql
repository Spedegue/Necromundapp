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
CREATE TABLE `SkillTypes` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

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
CREATE TABLE `HouseWeaponList` (
    `houseId` VARCHAR(191) NOT NULL,
    `list` JSON NOT NULL,

    PRIMARY KEY (`houseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RangedWeaponType` (
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `RangedWeaponType_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ammo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `shortRange` INTEGER NOT NULL,
    `longRange` INTEGER NOT NULL,
    `longModifier` INTEGER NOT NULL DEFAULT 0,
    `shortModifier` INTEGER NOT NULL DEFAULT 0,
    `strength` INTEGER NOT NULL,
    `damage` VARCHAR(191) NOT NULL,
    `saveModifier` INTEGER NOT NULL DEFAULT 0,
    `ammoRoll` INTEGER NOT NULL,
    `weaponId` INTEGER NOT NULL,
    `default` BOOLEAN NULL DEFAULT true,
    `template` VARCHAR(191) NULL,
    `sustainedFireDice` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RangedWeapon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `weaponTypeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `RangedWeapon_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HandToHandWeapon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `strength` VARCHAR(191) NOT NULL,
    `damage` VARCHAR(191) NOT NULL,
    `saveModifier` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `HandToHandWeapon_name_key`(`name`),
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
CREATE TABLE `HandToHandWeaponSpecial` (
    `specialId` INTEGER NOT NULL,
    `weaponId` INTEGER NOT NULL,

    PRIMARY KEY (`specialId`, `weaponId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AmmoSpecial` (
    `specialId` INTEGER NOT NULL,
    `ammoId` INTEGER NOT NULL,

    PRIMARY KEY (`specialId`, `ammoId`)
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
    `gangAId` INTEGER NOT NULL,
    `gangBId` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'PREGAME', 'ACTIVE', 'PBS', 'COMPLETE') NOT NULL,
    `state` JSON NOT NULL,

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
ALTER TABLE `HouseWeaponList` ADD CONSTRAINT `HouseWeaponList_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ammo` ADD CONSTRAINT `Ammo_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `RangedWeapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RangedWeapon` ADD CONSTRAINT `RangedWeapon_weaponTypeId_fkey` FOREIGN KEY (`weaponTypeId`) REFERENCES `RangedWeaponType`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HandToHandWeaponSpecial` ADD CONSTRAINT `HandToHandWeaponSpecial_specialId_fkey` FOREIGN KEY (`specialId`) REFERENCES `Special`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HandToHandWeaponSpecial` ADD CONSTRAINT `HandToHandWeaponSpecial_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `HandToHandWeapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AmmoSpecial` ADD CONSTRAINT `AmmoSpecial_specialId_fkey` FOREIGN KEY (`specialId`) REFERENCES `Special`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AmmoSpecial` ADD CONSTRAINT `AmmoSpecial_ammoId_fkey` FOREIGN KEY (`ammoId`) REFERENCES `Ammo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gang` ADD CONSTRAINT `Gang_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gang` ADD CONSTRAINT `Gang_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Unit` ADD CONSTRAINT `Unit_unitTypeId_fkey` FOREIGN KEY (`unitTypeId`) REFERENCES `UnitType`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
