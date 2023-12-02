/*
  Warnings:

  - A unique constraint covering the columns `[houseId,equipmentId]` on the table `HouseEquipmentList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `HouseEquipmentList_houseId_equipmentId_key` ON `HouseEquipmentList`(`houseId`, `equipmentId`);
